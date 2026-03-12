/// Material Design Split Button
/// Overview: https://m3.material.io/components/split-button/overview
/// Specs: https://m3.material.io/components/split-button/specs
/// Guidelines: https://m3.material.io/components/split-button/guidelines
/// Accessibility: https://m3.material.io/components/split-button/accessibility

import React from 'react';
import {
  type GestureResponderEvent,
  Pressable as RNPressable,
  type PressableProps as RNPressableProps,
  type StyleProp,
  View,
  type ViewStyle,
} from 'react-native';
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';

import type { Scheme } from '@/theme/scheme';

import { useControllableState, useInteraction } from '../../hooks';
import { childGuard, warnUnexpectedChild } from '../../utilities';
import { ShapeContainer, type ShapeToken, StateLayer } from '../custom';
import { Icon, type IconProps } from './icon';
import { Text, type TextProps, type TextSize, type TextVariant } from './text';

// =============================================================================
// Types
// =============================================================================

type SplitButtonSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
type SplitButtonVariant = 'filled' | 'elevated' | 'tonal' | 'outlined';

type SplitButtonProps = {
  size?: SplitButtonSize;
  variant?: SplitButtonVariant;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

// =============================================================================
// Size token tables from M3 specs
// =============================================================================

const HEIGHT: Record<SplitButtonSize, number> = {
  xsmall: 32,
  small: 40,
  medium: 56,
  large: 96,
  xlarge: 136,
};

/** Inner corner token at rest */
function getSplitInnerRestToken(size: SplitButtonSize): ShapeToken {
  if (size === 'large') return 'small';
  if (size === 'xlarge') return 'medium';
  return 'xsmall';
}

/** Inner corner token when pressed */
function getSplitInnerPressedToken(size: SplitButtonSize): ShapeToken {
  if (size === 'xsmall') return 'small';
  if (size === 'large' || size === 'xlarge') return 'largeIncreased';
  return 'medium';
}

const LEADING_PADDING_LEFT: Record<SplitButtonSize, number> = {
  xsmall: 12,
  small: 16,
  medium: 24,
  large: 48,
  xlarge: 64,
};

const LEADING_PADDING_RIGHT: Record<SplitButtonSize, number> = {
  xsmall: 10,
  small: 12,
  medium: 24,
  large: 48,
  xlarge: 64,
};

const TRAILING_ICON_SIZE: Record<SplitButtonSize, number> = {
  xsmall: 22,
  small: 22,
  medium: 26,
  large: 38,
  xlarge: 50,
};

const TRAILING_PADDING: Record<SplitButtonSize, number> = {
  xsmall: 13,
  small: 13,
  medium: 15,
  large: 29,
  xlarge: 43,
};

function getSplitButtonStateLayerColor(variant: SplitButtonVariant): keyof Scheme {
  if (variant === 'filled') return 'onPrimary';
  if (variant === 'tonal') return 'onSecondaryContainer';
  if (variant === 'outlined') return 'onSurfaceVariant';
  return 'primary'; // elevated
}

/** Menu icon vertical offset when not expanded (optical centering) */
const TRAILING_ICON_OFFSET: Record<SplitButtonSize, number> = {
  xsmall: -1,
  small: -1,
  medium: -2,
  large: -3,
  xlarge: -6,
};

const isSplitButtonLeading = childGuard<SplitButtonLeadingProps>('SplitButtonLeading');
const isSplitButtonTrailing = childGuard<SplitButtonTrailingProps>('SplitButtonTrailing');
const isSplitButtonIcon = childGuard<SplitButtonIconProps>('SplitButtonIcon');
const isSplitButtonLabel = childGuard<SplitButtonLabelProps>('SplitButtonLabel');
const SPLIT_BUTTON_CHILDREN = ['SplitButtonLeading', 'SplitButtonTrailing'];
const SPLIT_BUTTON_SUB_CHILDREN = ['SplitButtonIcon', 'SplitButtonLabel'];

// =============================================================================
// Main Component (non-pressable layout root)
// =============================================================================

function SplitButton({ size = 'small', variant = 'filled', disabled = false, style, children }: SplitButtonProps) {
  styles.useVariants({ size, variant, disabled });

  return (
    <View style={[styles.root, { height: HEIGHT[size] }, style]} accessibilityRole="none">
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        const internal = {
          __internal__splitSize: size,
          __internal__splitVariant: variant,
          __internal__splitDisabled: disabled,
        };

        if (isSplitButtonLeading(child)) return React.cloneElement(child, internal);
        if (isSplitButtonTrailing(child)) return React.cloneElement(child, internal);

        warnUnexpectedChild('SplitButton', child, SPLIT_BUTTON_CHILDREN);
        return child;
      })}
    </View>
  );
}

// =============================================================================
// Leading button (action half)
// =============================================================================

type SplitButtonLeadingProps = Omit<RNPressableProps, 'style' | 'children'> & {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  __internal__splitSize?: SplitButtonSize;
  __internal__splitVariant?: SplitButtonVariant;
  __internal__splitDisabled?: boolean;
};

function SplitButtonLeading({
  style,
  containerStyle,
  children,
  __internal__splitSize: size = 'small',
  __internal__splitVariant: variant = 'filled',
  __internal__splitDisabled: disabled = false,
  ...props
}: SplitButtonLeadingProps) {
  styles.useVariants({ size, variant, disabled });

  const { progress, handlers } = useInteraction('press', 'hover', 'focus');

  const outerRadius = HEIGHT[size] / 2;
  const restShape = {
    topLeft: outerRadius,
    bottomLeft: outerRadius,
    topRight: getSplitInnerRestToken(size),
    bottomRight: getSplitInnerRestToken(size),
  };
  const pressedShape = {
    topLeft: outerRadius,
    bottomLeft: outerRadius,
    topRight: getSplitInnerPressedToken(size),
    bottomRight: getSplitInnerPressedToken(size),
  };

  const stateLayerColor = getSplitButtonStateLayerColor(variant);

  return (
    <RNPressable
      style={[styles.leadingRoot, style]}
      disabled={disabled}
      accessibilityRole="button"
      {...handlers}
      {...props}
    >
      <ShapeContainer
        shape={restShape}
        shapes={{ press: pressedShape }}
        progress={progress}
        style={[
          styles.leadingContainer,
          { paddingLeft: LEADING_PADDING_LEFT[size], paddingRight: LEADING_PADDING_RIGHT[size] },
          containerStyle,
        ]}
      >
        <StateLayer progress={progress} color={stateLayerColor} disabled={disabled} />
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child;

          const internal = {
            __internal__splitSize: size,
            __internal__splitVariant: variant,
            __internal__splitDisabled: disabled,
          };

          if (isSplitButtonIcon(child)) return React.cloneElement(child, internal);
          if (isSplitButtonLabel(child)) return React.cloneElement(child, internal);

          warnUnexpectedChild('SplitButtonLeading', child, SPLIT_BUTTON_SUB_CHILDREN);
          return child;
        })}
      </ShapeContainer>
    </RNPressable>
  );
}

// =============================================================================
// Trailing button (menu half)
// =============================================================================

type SplitButtonTrailingProps = Omit<RNPressableProps, 'style' | 'children'> & {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  __internal__splitSize?: SplitButtonSize;
  __internal__splitVariant?: SplitButtonVariant;
  __internal__splitDisabled?: boolean;
};

function SplitButtonTrailing({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  style,
  containerStyle,
  onPress,
  __internal__splitSize: size = 'small',
  __internal__splitVariant: variant = 'filled',
  __internal__splitDisabled: disabled = false,
  ...props
}: SplitButtonTrailingProps) {
  const [open, setOpen] = useControllableState({
    value: openProp,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  styles.useVariants({ size, variant, disabled });

  const { progress, handlers } = useInteraction('press', 'hover', 'focus');

  const iconSize = TRAILING_ICON_SIZE[size];
  const iconOffset = TRAILING_ICON_OFFSET[size];

  // --- Shape ---
  const outerRadius = HEIGHT[size] / 2;
  const innerRestToken = open ? outerRadius : getSplitInnerRestToken(size);

  const restShape = {
    topRight: outerRadius,
    bottomRight: outerRadius,
    topLeft: innerRestToken,
    bottomLeft: innerRestToken,
  };
  const pressedShape = {
    topRight: outerRadius,
    bottomRight: outerRadius,
    topLeft: getSplitInnerPressedToken(size),
    bottomLeft: getSplitInnerPressedToken(size),
  };

  const stateLayerColor = getSplitButtonStateLayerColor(variant);

  // --- Icon rotation (separate from shape) ---
  const expandProgress = useSharedValue(open ? 1 : 0);

  React.useEffect(() => {
    const { motion } = UnistylesRuntime.getTheme();
    expandProgress.value = withTiming(open ? 1 : 0, {
      duration: motion.duration.short3,
      easing: Easing.bezier(...motion.easing.standard),
    });
  }, [open, expandProgress]);

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${interpolate(expandProgress.value, [0, 1], [0, 180])}deg` }],
    marginTop: interpolate(expandProgress.value, [0, 1], [iconOffset, 0]),
  }));

  // --- Handlers ---
  const handlePress = React.useCallback((e: GestureResponderEvent) => {
    if (disabled) return;
    setOpen((prev) => !prev);
    onPress?.(e);
  }, [disabled, setOpen, onPress]);

  return (
    <RNPressable
      style={[styles.trailingRoot, style]}
      onPress={handlePress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ expanded: open }}
      accessibilityLabel="More options"
      {...handlers}
      {...props}
    >
      <ShapeContainer
        shape={restShape}
        shapes={{ press: pressedShape }}
        progress={progress}
        style={[styles.trailingContainer, { paddingHorizontal: TRAILING_PADDING[size] }, containerStyle]}
      >
        <StateLayer progress={progress} color={stateLayerColor} disabled={disabled} />
        <Animated.View style={animatedIconStyle}>
          <Icon name="keyboard_arrow_down" size={iconSize} style={styles.trailingIcon} />
        </Animated.View>
      </ShapeContainer>
    </RNPressable>
  );
}

// =============================================================================
// Sub-components: Icon & Label for the leading button
// =============================================================================

type SplitButtonIconProps = IconProps & {
  __internal__splitSize?: SplitButtonSize;
  __internal__splitVariant?: SplitButtonVariant;
  __internal__splitDisabled?: boolean;
};

function SplitButtonIcon({
  __internal__splitSize: size = 'small',
  __internal__splitVariant: variant = 'filled',
  __internal__splitDisabled: disabled = false,
  style,
  ...props
}: SplitButtonIconProps) {
  styles.useVariants({ size, variant, disabled });

  const iconSize = React.useMemo(() => {
    if (size === 'xsmall') return 20;
    if (size === 'small') return 20;
    if (size === 'medium') return 24;
    if (size === 'large') return 32;
    if (size === 'xlarge') return 40;
    return 20;
  }, [size]);

  return <Icon size={iconSize} style={[styles.label, style]} {...props} />;
}

type SplitButtonLabelProps = TextProps & {
  __internal__splitSize?: SplitButtonSize;
  __internal__splitVariant?: SplitButtonVariant;
  __internal__splitDisabled?: boolean;
};

function SplitButtonLabel({
  __internal__splitSize: size = 'small',
  __internal__splitVariant: variant = 'filled',
  __internal__splitDisabled: disabled = false,
  style,
  ...props
}: SplitButtonLabelProps) {
  styles.useVariants({ size, variant, disabled });

  const textVariant: TextVariant = React.useMemo(() => {
    if (size === 'xsmall') return 'label';
    if (size === 'small') return 'label';
    if (size === 'medium') return 'title';
    if (size === 'large') return 'headline';
    if (size === 'xlarge') return 'headline';
    return 'label';
  }, [size]);

  const textSize: TextSize = React.useMemo(() => {
    if (size === 'xsmall') return 'large';
    if (size === 'small') return 'large';
    if (size === 'medium') return 'medium';
    if (size === 'large') return 'small';
    if (size === 'xlarge') return 'large';
    return 'large';
  }, [size]);

  return <Text style={[styles.label, style]} variant={textVariant} size={textSize} {...props} />;
}

// =============================================================================
// Styles
// =============================================================================
// Color mapping reuses standard button colors:
//   Variant   | Container                  | Content (label/icon)
//   ----------|----------------------------|--------------------------
//   filled    | primary                    | onPrimary
//   elevated  | surfaceContainerLow + elev | primary
//   tonal     | secondaryContainer         | onSecondaryContainer
//   outlined  | outlineVariant border       | onSurfaceVariant
// =============================================================================

const styles = StyleSheet.create((theme) => ({
  // -- Root container --
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    alignSelf: 'flex-start',

    variants: {
      size: {
        xsmall: {},
        small: {},
        medium: {},
        large: {},
        xlarge: {},
      },
      variant: {
        filled: {},
        elevated: {
          shadowColor: theme.scheme.shadow,
          ...theme.elevation[1],
        },
        tonal: {},
        outlined: {},
      },
      disabled: {
        true: {
          ...theme.elevation[0],
          shadowOpacity: 0,
        },
        false: {},
      },
    },
  },

  // -- Leading button --
  leadingRoot: {
    height: '100%',
  },
  leadingContainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    gap: 8,

    variants: {
      variant: {
        filled: { backgroundColor: theme.scheme.primary },
        elevated: { backgroundColor: theme.scheme.surfaceContainerLow },
        tonal: { backgroundColor: theme.scheme.secondaryContainer },
        outlined: { borderWidth: 1, borderColor: theme.scheme.outlineVariant },
      },
      disabled: {
        true: { backgroundColor: undefined, borderColor: undefined },
        false: {},
      },
    },
    compoundVariants: [
      { size: 'large', variant: 'outlined', styles: { borderWidth: 2 } },
      { size: 'xlarge', variant: 'outlined', styles: { borderWidth: 3 } },
    ],
  },
  // -- Trailing button --
  trailingRoot: {
    height: '100%',
  },
  trailingContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',

    variants: {
      variant: {
        filled: { backgroundColor: theme.scheme.primary },
        elevated: { backgroundColor: theme.scheme.surfaceContainerLow },
        tonal: { backgroundColor: theme.scheme.secondaryContainer },
        outlined: { borderWidth: 1, borderColor: theme.scheme.outlineVariant },
      },
      disabled: {
        true: { backgroundColor: undefined, borderColor: undefined },
        false: {},
      },
    },
    compoundVariants: [
      { size: 'large', variant: 'outlined', styles: { borderWidth: 2 } },
      { size: 'xlarge', variant: 'outlined', styles: { borderWidth: 3 } },
    ],
  },
  trailingIcon: {
    variants: {
      variant: {
        filled: { color: theme.scheme.onPrimary },
        elevated: { color: theme.scheme.primary },
        tonal: { color: theme.scheme.onSecondaryContainer },
        outlined: { color: theme.scheme.onSurfaceVariant },
      },
      disabled: {
        true: { color: theme.scheme.onSurface, opacity: theme.state.disabledContent },
        false: {},
      },
    },
  },

  // -- Label & icon content colors --
  label: {
    variants: {
      variant: {
        filled: { color: theme.scheme.onPrimary },
        elevated: { color: theme.scheme.primary },
        tonal: { color: theme.scheme.onSecondaryContainer },
        outlined: { color: theme.scheme.onSurfaceVariant },
      },
      disabled: {
        true: { color: theme.scheme.onSurface, opacity: theme.state.disabledContent },
        false: {},
      },
    },
  },
}));

// =============================================================================
// Exports
// =============================================================================

SplitButton.displayName = 'SplitButton';
SplitButtonLeading.displayName = 'SplitButtonLeading';
SplitButtonTrailing.displayName = 'SplitButtonTrailing';
SplitButtonIcon.displayName = 'SplitButtonIcon';
SplitButtonLabel.displayName = 'SplitButtonLabel';

export type {
  SplitButtonIconProps,
  SplitButtonLabelProps,
  SplitButtonLeadingProps,
  SplitButtonProps,
  SplitButtonSize,
  SplitButtonTrailingProps,
  SplitButtonVariant,
};
export { SplitButton, SplitButtonIcon, SplitButtonLabel, SplitButtonLeading, SplitButtonTrailing };
