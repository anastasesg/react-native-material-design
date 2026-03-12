/// Material Design Snackbar
/// Overview: https://m3.material.io/components/snackbar/overview
/// Specs: https://m3.material.io/components/snackbar/specs
/// Guidelines: https://m3.material.io/components/snackbar/guidelines
/// Accessibility: https://m3.material.io/components/snackbar/accessibility

import React from 'react';
import {
  type LayoutChangeEvent,
  type StyleProp,
  type TextLayoutEvent,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { Pressable as RNPressable, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';

import { useControllableState, useInteraction } from '../../hooks';
import { StateLayer } from '../custom';
import { Icon } from './icon';
import { Text } from './text';

// =============================================================================
// Types
// =============================================================================

type SnackbarProps = {
  /** The message text displayed in the snackbar (supporting text). */
  message: string;
  /** Optional action button label. */
  action?: string;
  /** Called when the action button is pressed. */
  onAction?: () => void;
  /** Whether to show the close (dismiss) icon button. */
  showClose?: boolean;
  /** Controls snackbar open state. */
  open?: boolean;
  /** Default open state for uncontrolled mode. */
  defaultOpen?: boolean;
  /** Called when open state changes. */
  onOpenChange?: (open: boolean) => void;
  /** Called when the snackbar is dismissed (close button, swipe, or auto-dismiss). */
  onDismiss?: () => void;
  /**
   * Auto-dismiss duration in milliseconds. Defaults to 4000.
   * Set to 0 to disable auto-dismiss.
   * Per M3 accessibility: snackbars with actions should not auto-dismiss
   * unless the consumer explicitly sets a duration.
   */
  duration?: number;
  /** Style applied to the snackbar container. */
  style?: StyleProp<ViewStyle>;
  /** Style applied to the message text. */
  messageStyle?: StyleProp<TextStyle>;
  /** Style applied to the action button. */
  actionStyle?: StyleProp<ViewStyle>;
};

// =============================================================================
// Constants
// =============================================================================

const DEFAULT_DURATION = 4000;
const SWIPE_DISMISS_THRESHOLD = 60;
const SWIPE_VELOCITY_THRESHOLD = 300;

// =============================================================================
// Snackbar
// =============================================================================

function Snackbar({
  message,
  action,
  onAction,
  showClose = false,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  onDismiss,
  duration,
  style,
  messageStyle,
  actionStyle,
}: SnackbarProps) {
  const [open, setOpen] = useControllableState({
    value: openProp,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  // Determine effective auto-dismiss duration.
  // Per M3 accessibility guidelines: snackbars with actions should not auto-dismiss
  // unless the consumer explicitly overrides by providing a duration.
  const effectiveDuration = React.useMemo(() => {
    if (duration !== undefined) return duration;
    if (action) return 0; // no auto-dismiss when action is present
    return DEFAULT_DURATION;
  }, [duration, action]);

  // open/mounted decoupling: `mounted` keeps component in tree during exit animation
  const [mounted, setMounted] = React.useState(false);

  // Whether the action text overflows and needs its own line
  const [actionOnOwnLine, setActionOnOwnLine] = React.useState(false);

  // Whether the message wraps to two lines (for 68dp min height)
  const [isTwoLine, setIsTwoLine] = React.useState(false);

  // Interaction state for sub-element state layers
  const { progress: actionProgress, handlers: actionHandlers } = useInteraction('press');
  const { progress: closeProgress, handlers: closeHandlers } = useInteraction('press');

  // Animation shared values
  const translateY = useSharedValue(80);
  const opacity = useSharedValue(0);

  // Dismiss callback ref for stable access in effects and gesture worklets
  const onDismissRef = React.useRef(onDismiss);
  onDismissRef.current = onDismiss;

  // Stable dismiss function for use with runOnJS in gesture worklets
  const dismiss = React.useCallback(() => {
    setOpen(false);
    onDismissRef.current?.();
  }, [setOpen]);

  const onCloseAnimationEnd = React.useCallback((finished?: boolean) => {
    'worklet';
    if (finished) {
      runOnJS(setMounted)(false);
    }
  }, []);

  // Animate in/out based on `open`
  React.useEffect(() => {
    const springs = UnistylesRuntime.getTheme().motion.spring;
    if (open) {
      setMounted(true);
      setActionOnOwnLine(false);
      setIsTwoLine(false);
      translateY.value = withSpring(0, springs.fastEffects);
      opacity.value = withSpring(1, springs.fastEffects);
    } else if (mounted) {
      translateY.value = withSpring(80, springs.fastEffects, onCloseAnimationEnd);
      opacity.value = withSpring(0, springs.fastEffects);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Auto-dismiss timer
  React.useEffect(() => {
    if (!open || effectiveDuration <= 0) return;

    const timer = setTimeout(() => {
      setOpen(false);
      onDismissRef.current?.();
    }, effectiveDuration);

    return () => clearTimeout(timer);
  }, [open, effectiveDuration, setOpen]);

  // Swipe-to-dismiss via RNGH (runs on UI thread)
  const dragStartY = useSharedValue(0);
  const springs = UnistylesRuntime.getTheme().motion.spring;

  const dismissGesture = Gesture.Pan()
    .activeOffsetY(10)
    .onStart(() => {
      dragStartY.value = translateY.value;
    })
    .onUpdate((e) => {
      // Only allow dragging downward (positive translationY)
      if (e.translationY > 0) {
        translateY.value = dragStartY.value + e.translationY;
        opacity.value = Math.max(0, 1 - e.translationY / 200);
      }
    })
    .onEnd((e) => {
      if (e.translationY > SWIPE_DISMISS_THRESHOLD || e.velocityY > SWIPE_VELOCITY_THRESHOLD) {
        // Dismiss — trigger via onDismiss which sets visible=false
        runOnJS(dismiss)();
      } else {
        // Snap back with spring + velocity carry-through
        translateY.value = withSpring(0, { ...springs.fastEffects, velocity: e.velocityY });
        opacity.value = withSpring(1, springs.fastEffects);
      }
    });

  // Handle action text layout to detect overflow
  const handleActionLayout = React.useCallback((event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    // If the action button is wider than ~120dp, move it to its own line
    // This mirrors M3's "two lines with longer action" configuration
    if (width > 120) {
      setActionOnOwnLine(true);
    }
  }, []);

  // Detect two-line message for 68dp min height
  const handleTextLayout = React.useCallback((event: TextLayoutEvent) => {
    const lineCount = event.nativeEvent.lines.length;
    setIsTwoLine(lineCount > 1);
  }, []);

  const handleAction = React.useCallback(() => {
    onAction?.();
  }, [onAction]);

  const handleClose = React.useCallback(() => {
    setOpen(false);
    onDismissRef.current?.();
  }, [setOpen]);

  // Animated styles
  const animatedContainerStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  if (!mounted) return null;

  const hasAction = !!action;
  const hasClose = showClose;

  return (
    <GestureDetector gesture={dismissGesture}>
      <Animated.View
        style={[snackbarStyles.wrapper, animatedContainerStyle]}
        accessibilityRole="alert"
        accessibilityLiveRegion="polite"
      >
        <View
          style={[
            snackbarStyles.container,
            actionOnOwnLine && snackbarStyles.containerStacked,
            isTwoLine && snackbarStyles.containerTwoLine,
            style,
          ]}
        >
          {/* Row 1: message (and inline action + close if not stacked) */}
          <View style={snackbarStyles.contentRow}>
            <Text
              variant="body"
              size="medium"
              style={[snackbarStyles.message, messageStyle]}
              numberOfLines={2}
              onTextLayout={handleTextLayout}
            >
              {message}
            </Text>

            {hasAction && !actionOnOwnLine && (
              <RNPressable
                onPress={handleAction}
                {...actionHandlers}
                accessibilityRole="button"
                accessibilityLabel={action}
                style={[snackbarStyles.actionButton, actionStyle]}
                onLayout={handleActionLayout}
              >
                <Text variant="label" size="large" style={snackbarStyles.actionLabel}>
                  {action}
                </Text>
                <StateLayer progress={actionProgress} color="inversePrimary" />
              </RNPressable>
            )}

            {hasClose && (
              <RNPressable
                onPress={handleClose}
                {...closeHandlers}
                accessibilityRole="button"
                accessibilityLabel="Dismiss"
                style={snackbarStyles.closeButton}
              >
                <Icon name="close" size={24} style={snackbarStyles.closeIcon} />
                <StateLayer progress={closeProgress} color="inverseOnSurface" />
              </RNPressable>
            )}
          </View>

          {/* Row 2: action on its own line (longer action configuration) */}
          {hasAction && actionOnOwnLine && (
            <View style={snackbarStyles.stackedActionRow}>
              <RNPressable
                onPress={handleAction}
                {...actionHandlers}
                accessibilityRole="button"
                accessibilityLabel={action}
                style={[snackbarStyles.actionButton, actionStyle]}
              >
                <Text variant="label" size="large" style={snackbarStyles.actionLabel}>
                  {action}
                </Text>
                <StateLayer progress={actionProgress} color="inversePrimary" />
              </RNPressable>
            </View>
          )}
        </View>
      </Animated.View>
    </GestureDetector>
  );
}

// =============================================================================
// Styles
// =============================================================================

const snackbarStyles = StyleSheet.create((theme, rt) => ({
  wrapper: {
    position: 'absolute',
    bottom: rt.insets.bottom + 16,
    left: 16,
    right: 16,
    alignItems: 'center',
  },
  container: {
    backgroundColor: theme.scheme.inverseSurface,
    borderRadius: theme.shape.xsmall,
    ...theme.elevation[3],
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 48,
    maxWidth: 560,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  containerStacked: {
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingVertical: 4,
  },
  containerTwoLine: {
    minHeight: 68,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    minHeight: 40,
  },
  message: {
    flex: 1,
    flexShrink: 1,
    color: theme.scheme.inverseOnSurface,
    paddingVertical: 10,
  },
  actionButton: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginLeft: 8,
    borderRadius: theme.shape.xsmall,
    overflow: 'hidden',
  },
  actionLabel: {
    color: theme.scheme.inversePrimary,
  },
  closeButton: {
    padding: 8,
    marginLeft: 4,
    marginRight: -8,
    borderRadius: theme.shape.full,
    overflow: 'hidden',
  },
  closeIcon: {
    color: theme.scheme.inverseOnSurface,
  },
  stackedActionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 4,
  },
}));

// =============================================================================
// Exports
// =============================================================================

Snackbar.displayName = 'Snackbar';

export type { SnackbarProps };
export { Snackbar };
