/// Material Design Bottom Sheet
/// Overview: https://m3.material.io/components/bottom-sheets/overview
/// Specs: https://m3.material.io/components/bottom-sheets/specs
/// Guidelines: https://m3.material.io/components/bottom-sheets/guidelines
/// Accessibility: https://m3.material.io/components/bottom-sheets/accessibility

import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Modal, Pressable as RNPressable, ScrollView, useWindowDimensions, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';

import { useControllableState } from '../../hooks';

// =============================================================================
// Types
// =============================================================================

type BottomSheetVariant = 'standard' | 'modal';

type BottomSheetProps = {
  /** Which variant: standard (inline, no scrim) or modal (overlay with scrim). */
  variant?: BottomSheetVariant;
  /** Whether the sheet is open. When omitted, the sheet manages its own state. */
  open?: boolean;
  /** Default open state for uncontrolled mode. */
  defaultOpen?: boolean;
  /** Called when the open state changes. */
  onOpenChange?: (open: boolean) => void;
  /** Whether to show the drag handle. */
  dragHandle?: boolean;
  /** Accessibility label for the drag handle. */
  dragHandleLabel?: string;
  /** Snap points as fractions of screen height (0-1). Defaults to [0.5, 1]. */
  snapPoints?: number[];
  /** Index into snapPoints for the initial height when opened. Defaults to 0. */
  initialSnapIndex?: number;
  /** Style applied to the sheet container. */
  style?: StyleProp<ViewStyle>;
  /** Style applied to the scrim overlay (modal variant only). */
  scrimStyle?: StyleProp<ViewStyle>;
  /** Style applied to the scrollable content area. */
  contentStyle?: StyleProp<ViewStyle>;
  /** Style applied to the drag handle indicator bar. */
  handleIndicatorStyle?: StyleProp<ViewStyle>;
  /** Content rendered inside the sheet. */
  children?: React.ReactNode;
};

type BottomSheetDragHandleProps = {
  /** Accessibility label. */
  label?: string;
  /** Style applied to the drag handle wrapper. */
  style?: StyleProp<ViewStyle>;
  /** @internal Style applied to the indicator bar. */
  __internal__indicatorStyle?: StyleProp<ViewStyle>;
  /** @internal Passed from parent BottomSheet. */
  __internal__onToggle?: () => void;
};

// =============================================================================
// Constants
// =============================================================================

const DRAG_HANDLE_WIDTH = 32;
const DRAG_HANDLE_HEIGHT = 4;
const DRAG_HANDLE_VERTICAL_PADDING = 22;
const SCRIM_OPACITY = 0.32;
const TOP_MARGIN = 72;
const MAX_WIDTH = 640;
const DISMISS_VELOCITY_THRESHOLD = 500;
const DISMISS_DISTANCE_FRACTION = 0.25;

// =============================================================================
// BottomSheet
// =============================================================================

function BottomSheet({
  variant = 'modal',
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  dragHandle = true,
  dragHandleLabel = 'Resize sheet',
  snapPoints = [0.5, 1],
  initialSnapIndex = 0,
  style,
  scrimStyle,
  contentStyle,
  handleIndicatorStyle,
  children,
}: BottomSheetProps) {
  const [isOpen, setOpen] = useControllableState({
    value: openProp,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  // `visible` keeps the component mounted during exit animations.
  // It turns true immediately when isOpen becomes true, but only turns
  // false after the close animation finishes.
  const [visible, setVisible] = React.useState(false);

  const handleClose = React.useCallback(() => setOpen(false), [setOpen]);

  // Track current snap index
  const [currentSnapIndex, setCurrentSnapIndex] = React.useState(initialSnapIndex);

  // Reactive screen dimensions (responds to rotation / split-screen)
  const { height: screenHeight, width: screenWidth } = useWindowDimensions();

  // Responsive layout: >640dp uses 56dp margins instead of 72dp top margin
  const isWideScreen = screenWidth > MAX_WIDTH;
  const topMargin = isWideScreen ? 56 : TOP_MARGIN;
  const sideMargin = isWideScreen ? 56 : 0;

  // Sort snap points ascending
  const sortedSnaps = React.useMemo(() => [...snapPoints].sort((a, b) => a - b), [snapPoints]);

  // Calculate sheet heights from snap points
  const snapHeights = React.useMemo(
    () => sortedSnaps.map((frac) => Math.min(frac * screenHeight, screenHeight - topMargin)),
    [sortedSnaps, screenHeight, topMargin],
  );

  // Shared values for animation
  const sheetHeight = useSharedValue(0);
  const scrimOpacity = useSharedValue(0);
  const dragStartHeight = useSharedValue(0);

  // Spring configs (captured for both JS callbacks and gesture worklets)
  const springs = UnistylesRuntime.getTheme().motion.spring;

  // Callback to unmount after close animation completes (called from UI thread)
  const onCloseAnimationEnd = React.useCallback((finished?: boolean) => {
    'worklet';
    if (finished) {
      runOnJS(setVisible)(false);
    }
  }, []);

  // Animate open/close
  React.useEffect(() => {
    if (isOpen) {
      setVisible(true);
      const targetIndex = Math.min(initialSnapIndex, snapHeights.length - 1);
      setCurrentSnapIndex(targetIndex);
      sheetHeight.value = withSpring(snapHeights[targetIndex] ?? screenHeight * 0.5, springs.fastEffects);
      if (variant === 'modal') {
        scrimOpacity.value = withSpring(SCRIM_OPACITY, springs.fastEffects);
      }
    } else if (visible) {
      // Only animate close if we're actually visible (prevents running on initial mount)
      sheetHeight.value = withSpring(0, springs.fastEffects, onCloseAnimationEnd);
      scrimOpacity.value = withSpring(0, springs.fastEffects);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Pan gesture for drag handle (runs on UI thread via RNGH)
  const panGesture = Gesture.Pan()
    .onStart(() => {
      dragStartHeight.value = sheetHeight.value;
    })
    .onUpdate((e) => {
      const newHeight = Math.max(0, dragStartHeight.value - e.translationY);
      const maxHeight = screenHeight - topMargin;
      sheetHeight.value = Math.min(newHeight, maxHeight);
    })
    .onEnd((e) => {
      const currentHeight = sheetHeight.value;
      const velocityY = e.velocityY;

      // Dismiss if flicked down fast or dragged far enough down.
      // handleClose() triggers the useEffect which animates height to 0.
      if (
        velocityY > DISMISS_VELOCITY_THRESHOLD ||
        currentHeight < (snapHeights[0] ?? screenHeight * 0.25) * DISMISS_DISTANCE_FRACTION
      ) {
        runOnJS(handleClose)();
        return;
      }

      // Find nearest snap point
      let nearestIndex = 0;
      let minDist = Infinity;
      for (let i = 0; i < snapHeights.length; i++) {
        const dist = Math.abs(currentHeight - (snapHeights[i] ?? 0));
        if (dist < minDist) {
          minDist = dist;
          nearestIndex = i;
        }
      }

      // Bias toward next/previous snap based on fling velocity
      if (velocityY < -300 && nearestIndex < snapHeights.length - 1) {
        nearestIndex++;
      } else if (velocityY > 300 && nearestIndex > 0) {
        nearestIndex--;
      }

      const targetHeight = snapHeights[nearestIndex] ?? screenHeight * 0.5;
      // Feed gesture velocity into spring for momentum carry-through.
      // height = startHeight - translationY, so d(height)/dt = -velocityY.
      sheetHeight.value = withSpring(targetHeight, {
        ...springs.fastEffects,
        velocity: -velocityY,
      });
      runOnJS(setCurrentSnapIndex)(nearestIndex);
    });

  // Toggle through snap points when drag handle is tapped
  const handleDragHandleToggle = React.useCallback(() => {
    const nextIndex = (currentSnapIndex + 1) % (snapHeights.length + 1);

    if (nextIndex >= snapHeights.length) {
      // Cycle back to closed — the effect will animate height to 0.
      handleClose();
    } else {
      const targetHeight = snapHeights[nextIndex] ?? screenHeight * 0.5;
      sheetHeight.value = withSpring(targetHeight, springs.fastEffects);
      setCurrentSnapIndex(nextIndex);
    }
  }, [currentSnapIndex, snapHeights, screenHeight, sheetHeight, springs, handleClose]);

  // Animated styles
  const animatedSheetStyle = useAnimatedStyle(() => {
    const h = sheetHeight.value;
    return {
      height: Math.max(0, h),
      opacity: h < 1 ? 0 : 1,
    };
  });

  const animatedScrimStyle = useAnimatedStyle(() => ({
    opacity: scrimOpacity.value,
  }));

  if (!visible) return null;

  const responsiveStyle = isWideScreen ? { marginHorizontal: sideMargin } : undefined;

  const sheetContent = (
    <Animated.View style={[sheetStyles.container, animatedSheetStyle, responsiveStyle, style]}>
      {dragHandle && (
        <GestureDetector gesture={panGesture}>
          <View>
            <BottomSheetDragHandle
              label={dragHandleLabel}
              __internal__indicatorStyle={handleIndicatorStyle}
              __internal__onToggle={handleDragHandleToggle}
            />
          </View>
        </GestureDetector>
      )}
      <ScrollView
        style={[sheetStyles.scrollContent, contentStyle]}
        contentContainerStyle={sheetStyles.scrollContentContainer}
        showsVerticalScrollIndicator={true}
        bounces={false}
        nestedScrollEnabled
      >
        {children}
      </ScrollView>
    </Animated.View>
  );

  if (variant === 'modal') {
    return (
      <Modal transparent visible onRequestClose={handleClose} statusBarTranslucent>
        {/* Scrim */}
        <RNPressable
          style={StyleSheet.absoluteFillObject}
          onPress={handleClose}
          accessibilityRole="button"
          accessibilityLabel="Close bottom sheet"
        >
          <Animated.View style={[sheetStyles.scrim, animatedScrimStyle, scrimStyle]} />
        </RNPressable>

        {/* Sheet anchored to bottom */}
        <View style={sheetStyles.modalAnchor} pointerEvents="box-none">
          {sheetContent}
        </View>
      </Modal>
    );
  }

  // Standard variant: rendered inline
  return sheetContent;
}

// =============================================================================
// BottomSheetDragHandle
// =============================================================================

function BottomSheetDragHandle({
  label = 'Resize sheet',
  style,
  __internal__indicatorStyle,
  __internal__onToggle,
}: BottomSheetDragHandleProps) {
  return (
    <RNPressable
      onPress={__internal__onToggle}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={[sheetStyles.dragHandleHitArea, style]}
    >
      <View style={[sheetStyles.dragHandle, __internal__indicatorStyle]} />
    </RNPressable>
  );
}

// =============================================================================
// Styles
// =============================================================================

const sheetStyles = StyleSheet.create((theme, rt) => ({
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.scheme.scrim,
  },

  modalAnchor: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  container: {
    backgroundColor: theme.scheme.surfaceContainerLow,
    borderTopLeftRadius: theme.shape.xlarge,
    borderTopRightRadius: theme.shape.xlarge,
    width: '100%',
    maxWidth: MAX_WIDTH,
    overflow: 'hidden',
    ...theme.elevation[1],
  },

  dragHandleHitArea: {
    height: DRAG_HANDLE_VERTICAL_PADDING * 2 + DRAG_HANDLE_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },

  dragHandle: {
    width: DRAG_HANDLE_WIDTH,
    height: DRAG_HANDLE_HEIGHT,
    borderRadius: DRAG_HANDLE_HEIGHT / 2,
    backgroundColor: theme.scheme.onSurfaceVariant,
    opacity: 0.4,
  },

  scrollContent: {
    flex: 1,
  },

  scrollContentContainer: {
    paddingBottom: rt.insets.bottom,
  },
}));

// =============================================================================
// Exports
// =============================================================================

BottomSheet.displayName = 'BottomSheet';
BottomSheetDragHandle.displayName = 'BottomSheetDragHandle';

export type { BottomSheetDragHandleProps, BottomSheetProps, BottomSheetVariant };
export { BottomSheet, BottomSheetDragHandle };
