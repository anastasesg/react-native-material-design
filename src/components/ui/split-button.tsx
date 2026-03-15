/// Material Design Split Button
/// Overview: https://m3.material.io/components/split-button/overview
/// Specs: https://m3.material.io/components/split-button/specs
/// Guidelines: https://m3.material.io/components/split-button/guidelines
/// Accessibility: https://m3.material.io/components/split-button/accessibility

import React, { useMemo } from 'react';
import { type StyleProp, View, type ViewStyle } from 'react-native';
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';

import type { Scheme } from '@/theme/scheme';

import { useControllableState } from '../../hooks';
import { createComponentContext } from '../../utilities';
import { Pressable, type PressableProps, ShapeContainer, type ShapeToken, StateLayer, type TapEvent } from '../custom';
import { Icon, type IconProps } from './icon';
import { Text, type TextProps, type TextSize, type TextVariant } from './text';

// =============================================================================
// Types
// =============================================================================

type SplitButtonSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
type SplitButtonVariant = 'filled' | 'elevated' | 'tonal' | 'outlined';

type SplitButtonCtx = {
  size: SplitButtonSize;
  variant: SplitButtonVariant;
  disabled: boolean;
};

const [SplitButtonProvider, useSplitButton] = createComponentContext<SplitButtonCtx>('SplitButton');

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

// =============================================================================
// Main Component (non-pressable layout root)
// =============================================================================

function SplitButton({ size = 'small', variant = 'filled', disabled = false, style, children }: SplitButtonProps) {
  styles.useVariants({ size, variant, disabled });

  const ctx = useMemo<SplitButtonCtx>(() => ({ size, variant, disabled }), [size, variant, disabled]);

  return (
    <View style={[styles.root, { height: HEIGHT[size] }, style]} accessibilityRole="none">
      <SplitButtonProvider value={ctx}>{children}</SplitButtonProvider>
    </View>
  );
}

// =============================================================================
// Leading button (action half)
// =============================================================================

type SplitButtonLeadingProps = Omit<PressableProps, 'style' | 'children'> & {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

function SplitButtonLeading({ style, containerStyle, children, ...props }: SplitButtonLeadingProps) {
  const { size, variant, disabled } = useSplitButton();
  styles.useVariants({ size, variant, disabled });

  const outerRadius = HEIGHT[size] / 2;
  const restShape = {
    topStart: outerRadius,
    bottomStart: outerRadius,
    topEnd: getSplitInnerRestToken(size),
    bottomEnd: getSplitInnerRestToken(size),
  };
  const pressedShape = {
    topStart: outerRadius,
    bottomStart: outerRadius,
    topEnd: getSplitInnerPressedToken(size),
    bottomEnd: getSplitInnerPressedToken(size),
  };

  const stateLayerColor = getSplitButtonStateLayerColor(variant);

  return (
    <Pressable style={[styles.leadingRoot, style]} disabled={disabled} accessibilityRole="button" {...props}>
      <ShapeContainer
        shape={restShape}
        shapes={{ press: pressedShape }}
        style={[
          styles.leadingContainer,
          { paddingLeft: LEADING_PADDING_LEFT[size], paddingRight: LEADING_PADDING_RIGHT[size] },
          containerStyle,
        ]}
      >
        <StateLayer color={stateLayerColor} disabled={disabled} />
        {children}
      </ShapeContainer>
    </Pressable>
  );
}

// =============================================================================
// Trailing button (menu half)
// =============================================================================

type SplitButtonTrailingProps = Omit<PressableProps, 'style' | 'children'> & {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

function SplitButtonTrailing({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  style,
  containerStyle,
  onPress,
  ...props
}: SplitButtonTrailingProps) {
  const { size, variant, disabled } = useSplitButton();
  const [open, setOpen] = useControllableState({
    value: openProp,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  styles.useVariants({ size, variant, disabled });

  const iconSize = TRAILING_ICON_SIZE[size];
  const iconOffset = TRAILING_ICON_OFFSET[size];

  // --- Shape ---
  const outerRadius = HEIGHT[size] / 2;
  const innerRestToken = open ? outerRadius : getSplitInnerRestToken(size);

  const restShape = {
    topEnd: outerRadius,
    bottomEnd: outerRadius,
    topStart: innerRestToken,
    bottomStart: innerRestToken,
  };
  const pressedShape = {
    topEnd: outerRadius,
    bottomEnd: outerRadius,
    topStart: getSplitInnerPressedToken(size),
    bottomStart: getSplitInnerPressedToken(size),
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
  const handlePress = React.useCallback((e: TapEvent) => {
    if (disabled) return;
    setOpen((prev) => !prev);
    onPress?.(e);
  }, [disabled, setOpen, onPress]);

  return (
    <Pressable
      style={[styles.trailingRoot, style]}
      onPress={handlePress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ expanded: open }}
      accessibilityLabel="More options"
      {...props}
    >
      <ShapeContainer
        shape={restShape}
        shapes={{ press: pressedShape }}
        style={[styles.trailingContainer, { paddingHorizontal: TRAILING_PADDING[size] }, containerStyle]}
      >
        <StateLayer color={stateLayerColor} disabled={disabled} />
        <Animated.View style={animatedIconStyle}>
          <Icon name="keyboard_arrow_down" size={iconSize} style={styles.trailingIcon} />
        </Animated.View>
      </ShapeContainer>
    </Pressable>
  );
}

// =============================================================================
// Sub-components: Icon & Label for the leading button
// =============================================================================

type SplitButtonIconProps = IconProps;

function SplitButtonIcon({ style, ...props }: SplitButtonIconProps) {
  const { size, variant, disabled } = useSplitButton();
  styles.useVariants({ size, variant, disabled });

  const iconSize = useMemo(() => {
    if (size === 'xsmall') return 20;
    if (size === 'small') return 20;
    if (size === 'medium') return 24;
    if (size === 'large') return 32;
    if (size === 'xlarge') return 40;
    return 20;
  }, [size]);

  return <Icon size={iconSize} style={[styles.label, style]} {...props} />;
}

type SplitButtonLabelProps = TextProps;

function SplitButtonLabel({ style, ...props }: SplitButtonLabelProps) {
  const { size, variant, disabled } = useSplitButton();
  styles.useVariants({ size, variant, disabled });

  const textVariant: TextVariant = useMemo(() => {
    if (size === 'xsmall') return 'label';
    if (size === 'small') return 'label';
    if (size === 'medium') return 'title';
    if (size === 'large') return 'headline';
    if (size === 'xlarge') return 'headline';
    return 'label';
  }, [size]);

  const textSize: TextSize = useMemo(() => {
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
