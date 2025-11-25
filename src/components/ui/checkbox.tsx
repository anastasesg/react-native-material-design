/// Material Design Checkbox
/// Overview: https://m3.material.io/components/checkbox/overview
/// Specs: https://m3.material.io/components/checkbox/specs
/// Guidelines: https://m3.material.io/components/checkbox/guidelines
/// Accessibility: https://m3.material.io/components/checkbox/accessibility

import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Pressable as RNPressable, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  type SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
import { useAnimatedTheme } from 'react-native-unistyles/reanimated';

import { useInteraction } from '../../hooks';
import { Text, type TextProps } from './text';

// =============================================================================
// Types
// =============================================================================

type CheckboxValue = 'unselected' | 'selected' | 'indeterminate';

type CheckboxProps = {
  /** Current value (controlled). */
  value?: CheckboxValue;
  /** Initial value (uncontrolled). Defaults to 'unselected'. */
  defaultValue?: CheckboxValue;
  /** Called when the user toggles the checkbox. */
  onChange?: (value: CheckboxValue) => void;
  /** Shows error styling. */
  error?: boolean;
  /** Disables the checkbox. */
  disabled?: boolean;
  /** Accessibility label for the touchable. */
  accessibilityLabel?: string;

  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

type CheckboxToggleProps = {
  style?: StyleProp<ViewStyle>;
  /** @internal Injected by parent Checkbox. */
  __internal__checkboxValue?: CheckboxValue;
  __internal__checkboxError?: boolean;
  __internal__checkboxDisabled?: boolean;
  __internal__checkboxPressProgress?: SharedValue<number>;
  __internal__checkboxCheckProgress?: SharedValue<number>;
};

type CheckboxLabelProps = Omit<TextProps, 'variant' | 'size'> & {
  /** @internal Injected by parent Checkbox. */
  __internal__checkboxDisabled?: boolean;
};

// =============================================================================
// Constants (M3 Specs)
// =============================================================================

const CONTAINER_SIZE = 18;
const CONTAINER_RADIUS = 2;
const STATE_LAYER_SIZE = 40;
const TARGET_SIZE = 48;
const OUTLINE_WIDTH = 2;

// Checkmark geometry (drawn as L-shape via border trick)
const CHECK_WIDTH = 12;
const CHECK_HEIGHT = 7;
const CHECK_STROKE = 2;

// Indeterminate dash geometry
const DASH_WIDTH = 12;
const DASH_HEIGHT = 2;

// =============================================================================
// Checkbox (parent — touch target + state management)
// =============================================================================

function Checkbox({
  value: valueProp,
  defaultValue = 'unselected',
  onChange,
  error = false,
  disabled = false,
  accessibilityLabel,
  style,
  children,
}: CheckboxProps) {
  const isControlled = valueProp !== undefined;
  const [internalValue, setInternalValue] = React.useState<CheckboxValue>(defaultValue);
  const value = isControlled ? valueProp : internalValue;

  const isFilled = value === 'selected' || value === 'indeterminate';

  const { progress, handlers } = useInteraction('press');
  const checkProgress = useSharedValue(isFilled ? 1 : 0);

  // Sync animation with value changes
  React.useEffect(() => {
    const { fastSpatial } = UnistylesRuntime.getTheme().motion.spring;
    checkProgress.value = withSpring(isFilled ? 1 : 0, fastSpatial);
  }, [isFilled, checkProgress]);

  const handlePress = React.useCallback(() => {
    if (disabled) return;
    const nextValue: CheckboxValue = isFilled ? 'unselected' : 'selected';
    if (!isControlled) {
      setInternalValue(nextValue);
    }
    onChange?.(nextValue);
  }, [disabled, isFilled, isControlled, onChange]);

  return (
    <RNPressable
      style={[styles.root, style]}
      onPress={handlePress}
      {...handlers}
      disabled={disabled}
      accessibilityRole="checkbox"
      accessibilityState={{
        checked: value === 'indeterminate' ? 'mixed' : value === 'selected',
        disabled,
      }}
      accessibilityLabel={accessibilityLabel}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            __internal__checkboxValue: value,
            __internal__checkboxError: error,
            __internal__checkboxDisabled: disabled,
            __internal__checkboxPressProgress: progress.press,
            __internal__checkboxCheckProgress: checkProgress,
          } as any);
        }
        return child;
      })}
    </RNPressable>
  );
}

// =============================================================================
// CheckboxToggle (visual box — container, state layer, checkmark, dash)
// =============================================================================

function CheckboxToggle({
  style,
  __internal__checkboxValue = 'unselected',
  __internal__checkboxError = false,
  __internal__checkboxDisabled = false,
  __internal__checkboxPressProgress,
  __internal__checkboxCheckProgress,
}: CheckboxToggleProps) {
  const value = __internal__checkboxValue;
  const error = __internal__checkboxError;
  const disabled = __internal__checkboxDisabled;

  const isFilled = value === 'selected' || value === 'indeterminate';
  const isSelected = value === 'selected';

  styles.useVariants({ filled: isFilled, error, disabled });

  const animatedTheme = useAnimatedTheme();

  // Fallback shared values for standalone usage (without parent Checkbox)
  const fallbackPress = useSharedValue(0);
  const fallbackCheck = useSharedValue(isFilled ? 1 : 0);
  const pressProgress = __internal__checkboxPressProgress ?? fallbackPress;
  const checkProgress = __internal__checkboxCheckProgress ?? fallbackCheck;

  // State layer opacity (press feedback)
  const animatedStateStyle = useAnimatedStyle(() => ({
    opacity: interpolate(pressProgress.value, [0, 1], [0, animatedTheme.value.state.pressed], Extrapolation.CLAMP),
  }));

  // Container fill (animates in when selected/indeterminate)
  const animatedFill = useAnimatedStyle(() => {
    const t = animatedTheme.value;
    const bgColor = error ? t.scheme.error : t.scheme.primary;
    return {
      backgroundColor: bgColor,
      opacity: checkProgress.value,
    };
  });

  // Outline (fades out as fill animates in)
  const animatedOutline = useAnimatedStyle(() => ({
    opacity: interpolate(checkProgress.value, [0, 0.5], [1, 0], Extrapolation.CLAMP),
  }));

  // Checkmark (appears in second half of transition, scales up)
  const animatedCheckmark = useAnimatedStyle(() => ({
    opacity: isSelected ? interpolate(checkProgress.value, [0.5, 1], [0, 1], Extrapolation.CLAMP) : 0,
    transform: [
      {
        scale: interpolate(checkProgress.value, [0.5, 1], [0.5, 1], Extrapolation.CLAMP),
      },
    ],
  }));

  // Indeterminate dash (same timing as checkmark)
  const animatedDash = useAnimatedStyle(() => ({
    opacity: value === 'indeterminate' ? interpolate(checkProgress.value, [0.5, 1], [0, 1], Extrapolation.CLAMP) : 0,
    transform: [
      {
        scaleX: interpolate(checkProgress.value, [0.5, 1], [0, 1], Extrapolation.CLAMP),
      },
    ],
  }));

  return (
    <View style={[styles.toggleRoot, style]}>
      {/* State layer (circular press feedback) */}
      <Animated.View style={[styles.stateLayer, animatedStateStyle]} />

      {/* Container */}
      <View style={styles.container}>
        {/* Outline (visible when unselected) */}
        <Animated.View style={[styles.outline, animatedOutline]} />

        {/* Filled background (animates in) */}
        <Animated.View style={[styles.fill, animatedFill]} />

        {/* Checkmark — always mounted, driven by animated opacity */}
        <Animated.View style={[styles.iconContainer, animatedCheckmark]}>
          <View style={styles.checkmark} />
        </Animated.View>

        {/* Indeterminate dash — always mounted, driven by animated opacity */}
        <Animated.View style={[styles.iconContainer, animatedDash]}>
          <View style={styles.dash} />
        </Animated.View>

        {/* Disabled overlay for filled state */}
        {disabled && isFilled && <View style={styles.disabledFill} />}
      </View>
    </View>
  );
}

// =============================================================================
// CheckboxLabel (adjacent text)
// =============================================================================

function CheckboxLabel({ __internal__checkboxDisabled = false, style, ...props }: CheckboxLabelProps) {
  styles.useVariants({ disabled: __internal__checkboxDisabled });

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
    width: TARGET_SIZE,
    height: TARGET_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stateLayer: {
    position: 'absolute',
    width: STATE_LAYER_SIZE,
    height: STATE_LAYER_SIZE,
    borderRadius: theme.shape.full,

    variants: {
      filled: {
        // M3 spec: selected pressed state layer = on-surface
        true: {
          backgroundColor: theme.scheme.onSurface,
        },
        // M3 spec: unselected pressed state layer = primary
        false: {
          backgroundColor: theme.scheme.primary,
        },
      },
      error: {
        true: {
          backgroundColor: theme.scheme.error,
        },
        false: {},
      },
      disabled: {
        true: {
          backgroundColor: 'transparent',
        },
        false: {},
      },
    },
  },
  container: {
    width: CONTAINER_SIZE,
    height: CONTAINER_SIZE,
    borderRadius: CONTAINER_RADIUS,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outline: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: CONTAINER_RADIUS,
    borderWidth: OUTLINE_WIDTH,

    variants: {
      error: {
        true: {
          borderColor: theme.scheme.error,
        },
        false: {
          borderColor: theme.scheme.onSurfaceVariant,
        },
      },
      disabled: {
        true: {
          borderColor: theme.scheme.onSurface,
          opacity: 0.38,
        },
        false: {},
      },
    },
  },
  fill: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: CONTAINER_RADIUS,
  },
  disabledFill: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: CONTAINER_RADIUS,
    backgroundColor: theme.scheme.onSurface,
    opacity: 0.38,
  },
  iconContainer: {
    position: 'absolute',
    width: CONTAINER_SIZE,
    height: CONTAINER_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    width: CHECK_WIDTH,
    height: CHECK_HEIGHT,
    borderLeftWidth: CHECK_STROKE,
    borderBottomWidth: CHECK_STROKE,
    transform: [{ rotate: '-45deg' }, { translateY: -1 }],

    variants: {
      error: {
        true: {
          borderColor: theme.scheme.onError,
        },
        false: {
          borderColor: theme.scheme.onPrimary,
        },
      },
      disabled: {
        true: {
          borderColor: theme.scheme.surface,
        },
        false: {},
      },
    },
  },
  dash: {
    width: DASH_WIDTH,
    height: DASH_HEIGHT,
    borderRadius: 1,

    variants: {
      error: {
        true: {
          backgroundColor: theme.scheme.onError,
        },
        false: {
          backgroundColor: theme.scheme.onPrimary,
        },
      },
      disabled: {
        true: {
          backgroundColor: theme.scheme.surface,
        },
        false: {},
      },
    },
  },
  label: {
    color: theme.scheme.onSurface,

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

export type { CheckboxLabelProps, CheckboxProps, CheckboxToggleProps, CheckboxValue };
export { Checkbox, CheckboxLabel, CheckboxToggle };
