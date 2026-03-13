/// Material Design Switch
/// Overview: https://m3.material.io/components/switch/overview
/// Specs: https://m3.material.io/components/switch/specs
/// Guidelines: https://m3.material.io/components/switch/guidelines
/// Accessibility: https://m3.material.io/components/switch/accessibility

import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Pressable as RNPressable, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  type SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime, withUnistyles } from 'react-native-unistyles';
import { useAnimatedTheme } from 'react-native-unistyles/reanimated';

import { useControllableState, useInteraction } from '../../hooks';
import { createComponentContext } from '../../utilities';
import { Icon } from './icon';
import { Text, type TextProps } from './text';

const UniIcon = withUnistyles(Icon);

// =============================================================================
// Types
// =============================================================================

type SwitchIconMode = 'none' | 'selected' | 'both';

type SwitchProps = {
  /** Whether the switch is on (controlled). */
  selected?: boolean;
  /** Initial selected state (uncontrolled). Defaults to false. */
  defaultSelected?: boolean;
  /** Called when the user toggles the switch. */
  onSelectedChange?: (selected: boolean) => void;
  /** Icon configuration: 'none' (default), 'selected' (icon on selected only), 'both'. */
  icon?: SwitchIconMode;
  /** Disables the switch. */
  disabled?: boolean;
  /** Accessibility label for the touchable. */
  accessibilityLabel?: string;

  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

type SwitchToggleProps = {
  style?: StyleProp<ViewStyle>;
  /** Style applied to the track. */
  trackStyle?: StyleProp<ViewStyle>;
  /** Style applied to the handle (thumb). */
  handleStyle?: StyleProp<ViewStyle>;
};

type SwitchLabelProps = Omit<TextProps, 'variant' | 'size'>;

// =============================================================================
// Context
// =============================================================================

type SwitchContextValue = {
  selected: boolean;
  iconMode: SwitchIconMode;
  disabled: boolean;
  pressProgress: SharedValue<number>;
  selectProgress: SharedValue<number>;
  hoverProgress: SharedValue<number>;
  focusProgress: SharedValue<number>;
};

const [SwitchProvider, useSwitch] = createComponentContext<SwitchContextValue>('Switch');

// =============================================================================
// Constants (M3 Specs)
// =============================================================================

const TRACK_WIDTH = 52;
const TRACK_HEIGHT = 32;
const TRACK_OUTLINE_WIDTH = 2;

const HANDLE_SIZE_UNSELECTED = 16;
const HANDLE_SIZE_WITH_ICON = 24;
const HANDLE_SIZE_SELECTED = 24;
const HANDLE_SIZE_PRESSED = 28;

const STATE_LAYER_SIZE = 40;
const TARGET_SIZE = 48;
const ICON_SIZE = 16;

// Handle travel distance: from left edge to right edge within the track
// At unselected: handle center = TRACK_HEIGHT/2 (centered vertically = centered at left)
// At selected: handle center = TRACK_WIDTH - TRACK_HEIGHT/2
const HANDLE_TRAVEL = TRACK_WIDTH - TRACK_HEIGHT; // 20dp

// =============================================================================
// Switch (parent — touch target + state management)
// =============================================================================

function Switch({
  selected: selectedProp,
  defaultSelected = false,
  onSelectedChange,
  icon = 'none',
  disabled = false,
  accessibilityLabel,
  style,
  children,
}: SwitchProps) {
  const [selected, setSelected] = useControllableState({
    value: selectedProp,
    defaultValue: defaultSelected,
    onChange: onSelectedChange,
  });

  const { progress, handlers } = useInteraction('press', 'hover', 'focus');
  const selectProgress = useSharedValue(selected ? 1 : 0);

  // Sync animation with value changes
  React.useEffect(() => {
    const { fastEffects } = UnistylesRuntime.getTheme().motion.spring;
    selectProgress.value = withSpring(selected ? 1 : 0, fastEffects);
  }, [selected, selectProgress]);

  const handlePress = React.useCallback(() => {
    if (disabled) return;
    setSelected((prev) => !prev);
  }, [disabled, setSelected]);

  const ctx = React.useMemo<SwitchContextValue>(
    () => ({
      selected,
      iconMode: icon,
      disabled,
      pressProgress: progress.press,
      selectProgress,
      hoverProgress: progress.hover,
      focusProgress: progress.focus,
    }),
    [selected, icon, disabled, progress.press, selectProgress, progress.hover, progress.focus],
  );

  return (
    <RNPressable
      style={[styles.root, style]}
      onPress={handlePress}
      {...handlers}
      disabled={disabled}
      accessibilityRole="switch"
      accessibilityState={{
        checked: selected,
        disabled,
      }}
      accessibilityLabel={accessibilityLabel}
    >
      <SwitchProvider value={ctx}>{children}</SwitchProvider>
    </RNPressable>
  );
}

// =============================================================================
// SwitchToggle (visual — track, handle, state layer, icon)
// =============================================================================

function SwitchToggle({ style, trackStyle, handleStyle }: SwitchToggleProps) {
  const { selected, iconMode, disabled, pressProgress, selectProgress, hoverProgress, focusProgress } = useSwitch();

  const showIcon = iconMode === 'both' || (iconMode === 'selected' && selected);
  const hasIcon = iconMode !== 'none';

  styles.useVariants({ disabled });

  const animatedTheme = useAnimatedTheme();

  // Handle size animation:
  // Unselected without icon: 16, with icon: 24
  // Selected: 24
  // Pressed: 28 (regardless of state)
  const unselectedSize = hasIcon ? HANDLE_SIZE_WITH_ICON : HANDLE_SIZE_UNSELECTED;
  const selectedSize = HANDLE_SIZE_SELECTED;

  // Animated handle position + size
  const animatedHandleStyle = useAnimatedStyle(() => {
    const sel = selectProgress.value;
    const press = pressProgress.value;

    // Base size interpolates between unselected and selected
    const baseSize = interpolate(sel, [0, 1], [unselectedSize, selectedSize], Extrapolation.CLAMP);

    // Pressed adds extra size
    const size = interpolate(press, [0, 1], [baseSize, HANDLE_SIZE_PRESSED], Extrapolation.CLAMP);

    // Position: handle center moves from left to right
    // At unselected, center is at TRACK_HEIGHT/2; at selected, center is at TRACK_WIDTH - TRACK_HEIGHT/2
    const centerX = interpolate(sel, [0, 1], [0, HANDLE_TRAVEL], Extrapolation.CLAMP);

    // Offset so the handle doesn't overflow beyond track edges
    // left = centerX + (TRACK_HEIGHT - size) / 2
    const left = centerX + (TRACK_HEIGHT - size) / 2;

    return {
      width: size,
      height: size,
      borderRadius: size / 2,
      left,
      top: (TRACK_HEIGHT - size) / 2,
    };
  });

  // Handle color animation
  // M3 spec: handle color changes on hover/focus/press
  // Selected: onPrimary (resting) -> primaryContainer (hover/focus/pressed)
  // Unselected: outline (resting) -> onSurfaceVariant (hover/focus/pressed)
  const animatedHandleColor = useAnimatedStyle(() => {
    const t = animatedTheme.value;
    const sel = selectProgress.value;

    if (disabled) {
      const color = interpolateColor(sel, [0, 1], [t.scheme.onSurface, t.scheme.surface]);
      const opacity = interpolate(sel, [0, 1], [0.38, 1], Extrapolation.CLAMP);
      return { backgroundColor: color, opacity };
    }

    const interacting = Math.max(pressProgress.value, hoverProgress.value, focusProgress.value);

    // Interpolate resting color across selection
    const restColor = interpolateColor(sel, [0, 1], [t.scheme.outline, t.scheme.onPrimary]);
    // Interpolate interacting color across selection
    const activeColor = interpolateColor(sel, [0, 1], [t.scheme.onSurfaceVariant, t.scheme.primaryContainer]);
    // Blend between resting and interacting
    const color = interpolateColor(interacting, [0, 1], [restColor, activeColor]);

    return { backgroundColor: color };
  });

  // Track color animation
  const animatedTrackColor = useAnimatedStyle(() => {
    const t = animatedTheme.value;
    const sel = selectProgress.value;

    if (disabled) {
      const color = interpolateColor(sel, [0, 1], [t.scheme.surfaceContainerHighest, t.scheme.onSurface]);
      return { backgroundColor: color, opacity: 0.12 };
    }

    const color = interpolateColor(sel, [0, 1], [t.scheme.surfaceContainerHighest, t.scheme.primary]);
    return { backgroundColor: color, opacity: 1 };
  });

  // Track outline (only visible when unselected)
  const animatedOutlineStyle = useAnimatedStyle(() => {
    const sel = selectProgress.value;
    const t = animatedTheme.value;

    if (disabled) {
      return {
        borderColor: t.scheme.onSurface,
        opacity: interpolate(sel, [0, 0.5, 1], [0.12, 0.12, 0], Extrapolation.CLAMP),
      };
    }

    return {
      borderColor: t.scheme.outline,
      opacity: interpolate(sel, [0, 0.5, 1], [1, 1, 0], Extrapolation.CLAMP),
    };
  });

  // State layer (follows handle position)
  // M3 spec: hover = 0.08, focus = 0.1, pressed = 0.1 (with distinct state-layer colors)
  const animatedStateLayerStyle = useAnimatedStyle(() => {
    const t = animatedTheme.value;
    const sel = selectProgress.value;
    const press = pressProgress.value;
    const hover = hoverProgress.value;
    const focus = focusProgress.value;

    const centerX = interpolate(sel, [0, 1], [0, HANDLE_TRAVEL], Extrapolation.CLAMP);
    const left = centerX + (TRACK_HEIGHT - STATE_LAYER_SIZE) / 2;
    const top = (TARGET_SIZE - STATE_LAYER_SIZE) / 2;

    const hoverOpacity = interpolate(hover, [0, 1], [0, t.state.hover], Extrapolation.CLAMP);
    const focusOpacity = interpolate(focus, [0, 1], [0, t.state.focus], Extrapolation.CLAMP);
    const pressOpacity = interpolate(press, [0, 1], [0, t.state.pressed], Extrapolation.CLAMP);

    return {
      left,
      top,
      opacity: Math.max(hoverOpacity, focusOpacity, pressOpacity),
      backgroundColor: interpolateColor(sel, [0, 1], [t.scheme.onSurface, t.scheme.primary]),
    };
  });

  // Focus indicator (M3: secondary color, 3dp thickness, 2dp offset around the track)
  const animatedFocusIndicatorStyle = useAnimatedStyle(() => {
    const t = animatedTheme.value;
    const focus = focusProgress.value;

    return {
      opacity: interpolate(focus, [0, 1], [0, 1], Extrapolation.CLAMP),
      borderColor: t.scheme.secondary,
    };
  });

  // Icon opacity (visibility by icon mode + disabled dimming)
  const disabledOpacity = disabled ? 0.38 : 1;
  const animatedIconStyle = useAnimatedStyle(() => {
    'worklet';
    const sel = selectProgress.value;

    if (iconMode === 'both') {
      return { opacity: disabledOpacity };
    }
    if (iconMode === 'selected') {
      return {
        opacity: interpolate(sel, [0.3, 0.7], [0, disabledOpacity], Extrapolation.CLAMP),
      };
    }
    return { opacity: 0 };
  });

  return (
    <View style={[styles.toggleRoot, style]}>
      {/* Focus indicator */}
      <Animated.View style={[styles.focusIndicator, animatedFocusIndicatorStyle]} />

      {/* State layer */}
      <Animated.View style={[styles.stateLayer, animatedStateLayerStyle]} />

      {/* Track */}
      <Animated.View style={[styles.track, animatedTrackColor, trackStyle]}>
        {/* Track outline */}
        <Animated.View style={[styles.trackOutline, animatedOutlineStyle]} />

        {/* Handle */}
        <Animated.View style={[styles.handle, animatedHandleStyle, animatedHandleColor, handleStyle]}>
          {/* Icon — uses withUnistyles for theme-reactive color prop */}
          {iconMode !== 'none' && (
            <Animated.View style={[styles.iconContainer, animatedIconStyle]}>
              <UniIcon
                name={showIcon && selected ? 'check' : 'close'}
                size={ICON_SIZE}
                uniProps={(theme) => ({
                  color: disabled
                    ? selected
                      ? theme.scheme.onSurface
                      : theme.scheme.surfaceContainerHighest
                    : selected
                      ? theme.scheme.onPrimaryContainer
                      : theme.scheme.surfaceContainerHighest,
                })}
              />
            </Animated.View>
          )}
        </Animated.View>
      </Animated.View>
    </View>
  );
}

// =============================================================================
// SwitchLabel (adjacent text)
// =============================================================================

function SwitchLabel({ style, ...props }: SwitchLabelProps) {
  const { disabled } = useSwitch();
  styles.useVariants({ disabled });

  return <Text variant="body" size="large" style={[styles.label, style]} {...props} />;
}

// =============================================================================
// Styles
// =============================================================================

const styles = StyleSheet.create((theme) => ({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: TARGET_SIZE,
  },
  toggleRoot: {
    width: TRACK_WIDTH,
    height: TARGET_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusIndicator: {
    position: 'absolute',
    // 2dp offset from track edges, so expand by offset on each side
    width: TRACK_WIDTH + 2 * 2 + 2 * 3, // track + 2*offset + 2*thickness
    height: TRACK_HEIGHT + 2 * 2 + 2 * 3, // track + 2*offset + 2*thickness
    borderRadius: theme.shape.full,
    borderWidth: 3,
    alignSelf: 'center',
  },
  stateLayer: {
    position: 'absolute',
    width: STATE_LAYER_SIZE,
    height: STATE_LAYER_SIZE,
    borderRadius: theme.shape.full,
  },
  track: {
    width: TRACK_WIDTH,
    height: TRACK_HEIGHT,
    borderRadius: theme.shape.full,
    overflow: 'visible',
  },
  trackOutline: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: theme.shape.full,
    borderWidth: TRACK_OUTLINE_WIDTH,
  },
  handle: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: theme.scheme.onSurface,
    marginStart: 8,

    variants: {
      disabled: {
        true: {
          opacity: 0.38,
        },
        false: {},
      },
    },
  },
}));

// =============================================================================
// Exports
// =============================================================================

Switch.displayName = 'Switch';
SwitchToggle.displayName = 'SwitchToggle';
SwitchLabel.displayName = 'SwitchLabel';

export type { SwitchIconMode, SwitchLabelProps, SwitchProps, SwitchToggleProps };
export { Switch, SwitchLabel, SwitchToggle };
