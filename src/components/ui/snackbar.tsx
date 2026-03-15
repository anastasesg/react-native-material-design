/// Material Design Snackbar
/// Overview: https://m3.material.io/components/snackbar/overview
/// Specs: https://m3.material.io/components/snackbar/specs
/// Guidelines: https://m3.material.io/components/snackbar/guidelines
/// Accessibility: https://m3.material.io/components/snackbar/accessibility

import React from 'react';
import type { LayoutChangeEvent, StyleProp, TextLayoutEvent, ViewStyle } from 'react-native';
import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';

import { useControllableState } from '../../hooks';
import { createComponentContext, getDisplayName } from '../../utilities';
import { Pressable, StateLayer } from '../custom';
import { Icon } from './icon';
import { Text } from './text';

// =============================================================================
// Types
// =============================================================================

type SnackbarProps = {
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
  children: React.ReactNode;
};

type SnackbarMessageProps = {
  /** Style applied to the message text. */
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

type SnackbarActionProps = {
  /** Called when the action button is pressed. */
  onPress?: () => void;
  /** Style applied to the action button. */
  style?: StyleProp<ViewStyle>;
  /** Action label text. */
  children: React.ReactNode;
};

type SnackbarCloseProps = {
  /** Override the default dismiss behavior. */
  onPress?: () => void;
};

// =============================================================================
// Context
// =============================================================================

type SnackbarContextValue = {
  dismiss: () => void;
  setActionOnOwnLine: (stacked: boolean) => void;
  setIsTwoLine: (twoLine: boolean) => void;
};

const [SnackbarProvider, useSnackbar] = createComponentContext<SnackbarContextValue>('Snackbar');

// =============================================================================
// Constants
// =============================================================================

const DEFAULT_DURATION = 4000;
const SWIPE_DISMISS_THRESHOLD = 60;
const SWIPE_VELOCITY_THRESHOLD = 300;

// Sub-component display names (used for slot identification)
const SNACKBAR_MESSAGE = 'SnackbarMessage';
const SNACKBAR_ACTION = 'SnackbarAction';
const SNACKBAR_CLOSE = 'SnackbarClose';

// =============================================================================
// Snackbar
// =============================================================================

function Snackbar({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  onDismiss,
  duration,
  style,
  children,
}: SnackbarProps) {
  const [open, setOpen] = useControllableState({
    value: openProp,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  // open/mounted decoupling: `mounted` keeps component in tree during exit animation
  const [mounted, setMounted] = React.useState(false);

  // Whether the action text overflows and needs its own line
  const [actionOnOwnLine, setActionOnOwnLine] = React.useState(false);

  // Whether the message wraps to two lines (for 68dp min height)
  const [isTwoLine, setIsTwoLine] = React.useState(false);

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

  // Sort children into slots
  let messageSlot: React.ReactNode = null;
  let actionSlot: React.ReactNode = null;
  let closeSlot: React.ReactNode = null;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    const name = getDisplayName(child);

    switch (name) {
      case SNACKBAR_MESSAGE:
        messageSlot = child;
        break;
      case SNACKBAR_ACTION:
        actionSlot = child;
        break;
      case SNACKBAR_CLOSE:
        closeSlot = child;
        break;
    }
  });

  const hasAction = actionSlot !== null;

  // Determine effective auto-dismiss duration.
  // Per M3 accessibility guidelines: snackbars with actions should not auto-dismiss
  // unless the consumer explicitly overrides by providing a duration.
  const effectiveDuration = React.useMemo(() => {
    if (duration !== undefined) return duration;
    if (hasAction) return 0; // no auto-dismiss when action is present
    return DEFAULT_DURATION;
  }, [duration, hasAction]);

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

  // Animated styles
  const animatedContainerStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  const ctx = React.useMemo<SnackbarContextValue>(() => ({ dismiss, setActionOnOwnLine, setIsTwoLine }), [dismiss]);

  if (!mounted) return null;

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
          <SnackbarProvider value={ctx}>
            {/* Row 1: message (and inline action + close if not stacked) */}
            <View style={snackbarStyles.contentRow}>
              {messageSlot}
              {!actionOnOwnLine && actionSlot}
              {closeSlot}
            </View>

            {/* Row 2: action on its own line (longer action configuration) */}
            {actionOnOwnLine && <View style={snackbarStyles.stackedActionRow}>{actionSlot}</View>}
          </SnackbarProvider>
        </View>
      </Animated.View>
    </GestureDetector>
  );
}

// =============================================================================
// SnackbarMessage
// =============================================================================

function SnackbarMessage({ style, children }: SnackbarMessageProps) {
  const { setIsTwoLine } = useSnackbar();

  const handleTextLayout = React.useCallback((event: TextLayoutEvent) => {
    const lineCount = event.nativeEvent.lines.length;
    setIsTwoLine(lineCount > 1);
  }, [setIsTwoLine]);

  return (
    <Text
      variant="body"
      size="medium"
      style={[snackbarStyles.message, style]}
      numberOfLines={2}
      onTextLayout={handleTextLayout}
    >
      {children}
    </Text>
  );
}

// =============================================================================
// SnackbarAction
// =============================================================================

function SnackbarAction({ onPress, style, children }: SnackbarActionProps) {
  const { setActionOnOwnLine } = useSnackbar();

  const handleLayout = React.useCallback((event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    // If the action button is wider than ~120dp, move it to its own line
    // This mirrors M3's "two lines with longer action" configuration
    setActionOnOwnLine(width > 120);
  }, [setActionOnOwnLine]);

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={[snackbarStyles.actionButton, style]}
      onLayout={handleLayout}
    >
      <Text variant="label" size="large" style={snackbarStyles.actionLabel}>
        {children}
      </Text>
      <StateLayer color="inversePrimary" />
    </Pressable>
  );
}

// =============================================================================
// SnackbarClose
// =============================================================================

function SnackbarClose({ onPress }: SnackbarCloseProps) {
  const { dismiss } = useSnackbar();

  const handlePress = React.useCallback(() => {
    if (onPress) {
      onPress();
    } else {
      dismiss();
    }
  }, [onPress, dismiss]);

  return (
    <Pressable
      onPress={handlePress}
      accessibilityRole="button"
      accessibilityLabel="Dismiss"
      style={snackbarStyles.closeButton}
    >
      <Icon name="close" size={24} style={snackbarStyles.closeIcon} />
      <StateLayer color="inverseOnSurface" />
    </Pressable>
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
SnackbarMessage.displayName = SNACKBAR_MESSAGE;
SnackbarAction.displayName = SNACKBAR_ACTION;
SnackbarClose.displayName = SNACKBAR_CLOSE;

export type { SnackbarActionProps, SnackbarCloseProps, SnackbarMessageProps, SnackbarProps };
export { Snackbar, SnackbarAction, SnackbarClose, SnackbarMessage };
