/// Material Design Radio Button
/// Overview: https://m3.material.io/components/radio-button/overview
/// Specs: https://m3.material.io/components/radio-button/specs
/// Guidelines: https://m3.material.io/components/radio-button/guidelines
/// Accessibility: https://m3.material.io/components/radio-button/accessibility

import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Pressable as RNPressable, View } from 'react-native';
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  type SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
import { useAnimatedTheme } from 'react-native-unistyles/reanimated';

import { useInteraction } from '../../hooks';
import { Text, type TextProps } from './text';

// =============================================================================
// Types
// =============================================================================

type RadioButtonGroupProps = {
  /** Currently selected value (controlled). */
  value?: string;
  /** Initial selected value (uncontrolled). */
  defaultValue?: string;
  /** Called when the selected value changes. */
  onValueChange?: (value: string) => void;
  /** Disables all radio buttons in the group. */
  disabled?: boolean;

  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

type RadioButtonProps = {
  /** Value identifier for this radio button (used with RadioButtonGroup). */
  value?: string;
  /** Whether the radio button is selected (controlled, standalone use). */
  selected?: boolean;
  /** Initial selected state (uncontrolled, standalone use). Defaults to false. */
  defaultSelected?: boolean;
  /** Called when the user taps the radio button. */
  onSelect?: (selected: boolean) => void;
  /** Disables the radio button. */
  disabled?: boolean;
  /** Accessibility label for the touchable. */
  accessibilityLabel?: string;

  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

type RadioButtonToggleProps = {
  style?: StyleProp<ViewStyle>;
  /** @internal Injected by parent RadioButton. */
  __internal__radioSelected?: boolean;
  __internal__radioDisabled?: boolean;
  __internal__radioPressProgress?: SharedValue<number>;
  __internal__radioSelectProgress?: SharedValue<number>;
};

type RadioButtonLabelProps = Omit<TextProps, 'variant' | 'size'> & {
  /** @internal Injected by parent RadioButton. */
  __internal__radioDisabled?: boolean;
};

// =============================================================================
// Context (for RadioButtonGroup → RadioButton communication)
// =============================================================================

type RadioGroupContextValue = {
  value: string | undefined;
  onSelect: (value: string) => void;
  disabled: boolean;
};

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(null);

// =============================================================================
// Constants (M3 Specs)
// =============================================================================

const ICON_SIZE = 20;
const STATE_LAYER_SIZE = 40;
const TARGET_SIZE = 48;
const OUTER_STROKE = 2;
const INNER_DOT_SIZE = 10;

// =============================================================================
// RadioButtonGroup (container — manages mutual exclusion via context)
// =============================================================================

function RadioButtonGroup({
  value: valueProp,
  defaultValue,
  onValueChange,
  disabled = false,
  style,
  children,
}: RadioButtonGroupProps) {
  const isControlled = valueProp !== undefined;
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const value = isControlled ? valueProp : internalValue;

  const handleSelect = React.useCallback((itemValue: string) => {
    if (!isControlled) {
      setInternalValue(itemValue);
    }
    onValueChange?.(itemValue);
  }, [isControlled, onValueChange]);

  const contextValue = React.useMemo<RadioGroupContextValue>(
    () => ({ value, onSelect: handleSelect, disabled }),
    [value, handleSelect, disabled],
  );

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <View accessibilityRole="radiogroup" style={style}>
        {children}
      </View>
    </RadioGroupContext.Provider>
  );
}

// =============================================================================
// RadioButton (parent — touch target + state management)
// =============================================================================

function RadioButton({
  value: itemValue,
  selected: selectedProp,
  defaultSelected = false,
  onSelect,
  disabled: disabledProp = false,
  accessibilityLabel,
  style,
  children,
}: RadioButtonProps) {
  const group = React.useContext(RadioGroupContext);

  // When inside a group, derive selected/disabled from context
  const isInGroup = group !== null && itemValue !== undefined;
  const disabled = isInGroup ? group.disabled || disabledProp : disabledProp;

  const isControlled = isInGroup || selectedProp !== undefined;
  const [internalSelected, setInternalSelected] = React.useState(defaultSelected);
  const selected = isInGroup ? group.value === itemValue : isControlled ? selectedProp! : internalSelected;

  const { progress, handlers } = useInteraction('press');
  const selectProgress = useSharedValue(selected ? 1 : 0);

  // Sync animation with value changes
  React.useEffect(() => {
    const theme = UnistylesRuntime.getTheme();
    selectProgress.value = withTiming(selected ? 1 : 0, {
      duration: theme.motion.duration.short2,
      easing: Easing.bezier(...theme.motion.easing.standard),
    });
  }, [selected, selectProgress]);

  const handlePress = React.useCallback(() => {
    if (disabled) return;
    // Radio buttons can only be selected, not deselected by tapping
    if (!selected) {
      if (isInGroup) {
        group.onSelect(itemValue!);
      } else {
        if (!isControlled) {
          setInternalSelected(true);
        }
        onSelect?.(true);
      }
    }
  }, [disabled, selected, isInGroup, group, itemValue, isControlled, onSelect]);

  return (
    <RNPressable
      style={[styles.root, style]}
      onPress={handlePress}
      {...handlers}
      disabled={disabled}
      accessibilityRole="radio"
      accessibilityState={{
        checked: selected,
        disabled,
      }}
      accessibilityLabel={accessibilityLabel}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            __internal__radioSelected: selected,
            __internal__radioDisabled: disabled,
            __internal__radioPressProgress: progress.press,
            __internal__radioSelectProgress: selectProgress,
          } as any);
        }
        return child;
      })}
    </RNPressable>
  );
}

// =============================================================================
// RadioButtonToggle (visual circle — outer ring, inner dot, state layer)
// =============================================================================

function RadioButtonToggle({
  style,
  __internal__radioSelected = false,
  __internal__radioDisabled = false,
  __internal__radioPressProgress,
  __internal__radioSelectProgress,
}: RadioButtonToggleProps) {
  const selected = __internal__radioSelected;
  const disabled = __internal__radioDisabled;

  styles.useVariants({ selected, disabled });

  const animatedTheme = useAnimatedTheme();

  // Fallback shared values for standalone usage
  const fallbackPress = useSharedValue(0);
  const fallbackSelect = useSharedValue(selected ? 1 : 0);
  const pressProgress = __internal__radioPressProgress ?? fallbackPress;
  const selectProgress = __internal__radioSelectProgress ?? fallbackSelect;

  // State layer opacity (press feedback)
  const animatedStateStyle = useAnimatedStyle(() => ({
    opacity: interpolate(pressProgress.value, [0, 1], [0, animatedTheme.value.state.pressed], Extrapolation.CLAMP),
  }));

  // Inner dot scale animation
  const animatedDotStyle = useAnimatedStyle(() => ({
    opacity: interpolate(selectProgress.value, [0, 0.5], [0, 1], Extrapolation.CLAMP),
    transform: [
      {
        scale: interpolate(selectProgress.value, [0, 1], [0, 1], Extrapolation.CLAMP),
      },
    ],
  }));

  // Outer ring color transition
  const animatedRingStyle = useAnimatedStyle(() => {
    const t = animatedTheme.value;
    if (disabled) {
      return {
        borderColor: t.scheme.onSurface,
        opacity: 0.38,
      };
    }
    // Interpolate between onSurfaceVariant (unselected) and primary (selected)
    // Since we can't interpolate colors in a worklet easily, we swap at the midpoint
    return {
      borderColor: selectProgress.value > 0.5 ? t.scheme.primary : t.scheme.onSurfaceVariant,
      opacity: 1,
    };
  });

  return (
    <View style={[styles.toggleRoot, style]}>
      {/* State layer (circular press feedback) */}
      <Animated.View style={[styles.stateLayer, animatedStateStyle]} />

      {/* Outer ring */}
      <Animated.View style={[styles.outerRing, animatedRingStyle]} />

      {/* Inner dot (visible when selected) */}
      <Animated.View style={[styles.innerDot, animatedDotStyle]} />
    </View>
  );
}

// =============================================================================
// RadioButtonLabel (adjacent text)
// =============================================================================

function RadioButtonLabel({ __internal__radioDisabled = false, style, ...props }: RadioButtonLabelProps) {
  styles.useVariants({ disabled: __internal__radioDisabled });

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
      selected: {
        // M3: selected pressed state layer = onSurface
        true: {
          backgroundColor: theme.scheme.onSurface,
        },
        // M3: unselected pressed state layer = primary
        false: {
          backgroundColor: theme.scheme.primary,
        },
      },
      disabled: {
        true: {
          backgroundColor: 'transparent',
        },
        false: {},
      },
    },
  },
  outerRing: {
    position: 'absolute',
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE / 2,
    borderWidth: OUTER_STROKE,
    borderColor: theme.scheme.onSurfaceVariant,
  },
  innerDot: {
    position: 'absolute',
    width: INNER_DOT_SIZE,
    height: INNER_DOT_SIZE,
    borderRadius: INNER_DOT_SIZE / 2,
    backgroundColor: theme.scheme.primary,

    variants: {
      disabled: {
        true: {
          backgroundColor: theme.scheme.onSurface,
          opacity: 0.38,
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

export type { RadioButtonGroupProps, RadioButtonLabelProps, RadioButtonProps, RadioButtonToggleProps };
export { RadioButton, RadioButtonGroup, RadioButtonLabel, RadioButtonToggle };
