/// Material Design Button
/// Overview: https://m3.material.io/components/buttons/overview
/// Specs: https://m3.material.io/components/buttons/specs
/// Guidelines: https://m3.material.io/components/buttons/guidelines
/// Accessibility: https://m3.material.io/components/buttons/accessibility

import React from 'react';
import {
  type GestureResponderEvent,
  Pressable as RNPressable,
  type PressableProps as RNPressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import type { Scheme } from '@/theme/scheme';

import { useInteraction } from '../../hooks';
import { ShapeContainer, type ShapeToken, StateLayer } from '../custom';
import { Icon, type IconProps } from './icon';
import { Text, type TextProps, type TextSize, type TextVariant } from './text';

function getRestShapeToken(size: ButtonSize, shape: ButtonShape, selection: ButtonSelection): ShapeToken {
  const isSelected = selection === 'selected';
  const effectiveShape = isSelected ? (shape === 'rounded' ? 'square' : 'rounded') : shape;
  if (effectiveShape === 'rounded') return 'full';
  if (size === 'xsmall' || size === 'small') return 'medium';
  if (size === 'medium') return 'large';
  return 'xlarge';
}

function getPressedShapeToken(size: ButtonSize): ShapeToken {
  if (size === 'large' || size === 'xlarge') return 'large';
  if (size === 'medium') return 'medium';
  return 'small';
}

function getButtonStateLayerColor(variant: ButtonVariant, selection: ButtonSelection): keyof Scheme {
  if (selection === 'selected') {
    if (variant === 'filled') return 'onPrimary';
    if (variant === 'elevated') return 'onPrimary';
    if (variant === 'tonal') return 'onSecondary';
    if (variant === 'outlined') return 'inverseOnSurface';
  }
  if (selection === 'unselected') {
    return 'onSurfaceVariant';
  }
  // 'none' selection
  if (variant === 'filled') return 'onPrimary';
  if (variant === 'tonal') return 'onSecondaryContainer';
  if (variant === 'outlined') return 'onSurfaceVariant';
  if (variant === 'text') return 'primary';
  // elevated
  return 'primary';
}

type ButtonSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
type ButtonShape = 'rounded' | 'square';
type ButtonVariant = 'filled' | 'elevated' | 'tonal' | 'outlined' | 'text';
type ButtonSelection = 'none' | 'selected' | 'unselected';

type ButtonProps = Omit<RNPressableProps, 'style' | 'children'> & {
  children?: React.ReactNode;
  size?: ButtonSize;
  shape?: ButtonShape;
  variant?: ButtonVariant;

  /** Pass a boolean to enable toggle mode. `undefined` = default (non-toggle) button. */
  selected?: boolean;
  defaultSelected?: boolean;
  onSelectionChange?: (selected: boolean) => void;

  /** @internal Used by ButtonGroup connected variant to suppress Button's own corner animation. */
  __internal__suppressCornerAnimation?: boolean;

  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

function Button({
  size = 'small',
  shape = 'rounded',
  variant = 'filled',
  selected: selectedProp,
  defaultSelected,
  onSelectionChange,
  __internal__suppressCornerAnimation = false,
  style,
  containerStyle,
  children,
  onPress,
  disabled = false,
  ...props
}: ButtonProps) {
  const isToggle = selectedProp !== undefined || onSelectionChange !== undefined || defaultSelected !== undefined;
  const [selectedState, setSelectedState] = React.useState(defaultSelected ?? false);
  const selected = selectedProp !== undefined ? selectedProp : selectedState;
  const selection: ButtonSelection = isToggle ? (selected ? 'selected' : 'unselected') : 'none';

  styles.useVariants({ size, shape, variant, selection, disabled });

  const { progress, handlers } = useInteraction('press', 'hover', 'focus');

  const suppressCorner = __internal__suppressCornerAnimation;
  const restShape = getRestShapeToken(size, shape, selection);
  const pressedShape = suppressCorner ? undefined : getPressedShapeToken(size);

  const stateLayerColor = getButtonStateLayerColor(variant, selection);

  const handlePress = React.useCallback((e: GestureResponderEvent) => {
    if (disabled) return;
    if (isToggle) {
      const next = !selected;
      if (selectedProp === undefined) setSelectedState(next);
      onSelectionChange?.(next);
    }
    onPress?.(e);
  }, [disabled, isToggle, selected, selectedProp, onSelectionChange, onPress]);

  return (
    <RNPressable style={[styles.root, style]} onPress={handlePress} disabled={disabled} {...handlers} {...props}>
      <ShapeContainer
        shape={restShape}
        shapes={pressedShape ? { press: pressedShape } : undefined}
        progress={pressedShape ? progress : undefined}
        style={[styles.container, containerStyle]}
      >
        <StateLayer progress={progress} color={stateLayerColor} disabled={disabled} />
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              __internal__buttonSize: size,
              __internal__buttonShape: shape,
              __internal__buttonVariant: variant,
              __internal__buttonSelection: selection,
              __internal__buttonDisabled: disabled,
            } as any);
          }
          return child;
        })}
      </ShapeContainer>
    </RNPressable>
  );
}

type ButtonIconProps = IconProps & {
  __internal__buttonSize?: ButtonSize;
  __internal__buttonShape?: ButtonShape;
  __internal__buttonVariant?: ButtonVariant;
  __internal__buttonSelection?: ButtonSelection;
  __internal__buttonDisabled?: boolean;
};

function ButtonIcon({
  __internal__buttonSize = 'small',
  __internal__buttonShape = 'rounded',
  __internal__buttonVariant = 'filled',
  __internal__buttonSelection = 'none',
  __internal__buttonDisabled = false,
  style,
  ...props
}: ButtonIconProps) {
  styles.useVariants({
    variant: __internal__buttonVariant,
    size: __internal__buttonSize,
    shape: __internal__buttonShape,
    selection: __internal__buttonSelection,
    disabled: __internal__buttonDisabled,
  });

  const size: number = React.useMemo(() => {
    if (__internal__buttonSize === 'xsmall') return 20;
    if (__internal__buttonSize === 'small') return 20;
    if (__internal__buttonSize === 'medium') return 24;
    if (__internal__buttonSize === 'large') return 32;
    if (__internal__buttonSize === 'xlarge') return 40;
    return 20;
  }, [__internal__buttonSize]);

  return <Icon size={size} style={[styles.label, style]} {...props} />;
}

type ButtonLabelProps = TextProps & {
  __internal__buttonSize?: ButtonSize;
  __internal__buttonShape?: ButtonShape;
  __internal__buttonVariant?: ButtonVariant;
  __internal__buttonSelection?: ButtonSelection;
  __internal__buttonDisabled?: boolean;
};

function ButtonLabel({
  style,
  __internal__buttonSize = 'small',
  __internal__buttonShape = 'rounded',
  __internal__buttonVariant = 'filled',
  __internal__buttonSelection = 'none',
  __internal__buttonDisabled = false,
  ...props
}: ButtonLabelProps) {
  styles.useVariants({
    variant: __internal__buttonVariant,
    size: __internal__buttonSize,
    shape: __internal__buttonShape,
    selection: __internal__buttonSelection,
    disabled: __internal__buttonDisabled,
  });

  const variant: TextVariant = React.useMemo(() => {
    if (__internal__buttonSize === 'xsmall') return 'label';
    if (__internal__buttonSize === 'small') return 'label';
    if (__internal__buttonSize === 'medium') return 'title';
    if (__internal__buttonSize === 'large') return 'headline';
    if (__internal__buttonSize === 'xlarge') return 'headline';
    return 'label';
  }, [__internal__buttonSize]);

  const size: TextSize = React.useMemo(() => {
    if (__internal__buttonSize === 'xsmall') return 'large';
    if (__internal__buttonSize === 'small') return 'large';
    if (__internal__buttonSize === 'medium') return 'medium';
    if (__internal__buttonSize === 'large') return 'small';
    if (__internal__buttonSize === 'xlarge') return 'large';
    return 'large';
  }, [__internal__buttonSize]);

  return <Text style={[styles.label, style]} variant={variant} size={size} {...props} />;
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
// The `selection` variant drives toggle behavior:
//   'none'       – standard (non-toggle) button
//   'unselected' – toggle button in unselected state
//   'selected'   – toggle button in selected state
//
// Color mapping (from M3 spec):
//   Variant   | none / unselected            | selected
//   ----------|-----------------------------|--------------------------
//   filled    | primary (surfaceContainer*) | primary
//   elevated  | surfaceContainerLow         | primary
//   tonal     | secondaryContainer          | secondary
//   outlined  | outlineVariant border        | inverseSurface
//   text      | (none)                      | N/A (no toggle for text)
//
//   * filled unselected uses surfaceContainer instead of primary
// ---------------------------------------------------------------------------

const styles = StyleSheet.create((theme) => ({
  root: {
    variants: {
      variant: {
        elevated: {
          shadowColor: theme.scheme.shadow,
          ...theme.elevation[1],
        },
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
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden',

    variants: {
      size: {
        xsmall: {
          gap: 8,
          paddingVertical: 6,
          paddingHorizontal: 12,
        },
        small: {
          gap: 8,
          paddingVertical: 10,
          paddingHorizontal: 16,
        },
        medium: {
          gap: 8,
          paddingVertical: 16,
          paddingHorizontal: 24,
        },
        large: {
          gap: 12,
          paddingVertical: 32,
          paddingHorizontal: 48,
        },
        xlarge: {
          gap: 16,
          paddingVertical: 48,
          paddingHorizontal: 64,
        },
      },
      shape: {
        rounded: {},
        square: {},
      },
      variant: {
        filled: {
          backgroundColor: theme.scheme.primary,
        },
        elevated: {
          backgroundColor: theme.scheme.surfaceContainerLow,
        },
        tonal: {
          backgroundColor: theme.scheme.secondaryContainer,
        },
        outlined: {
          borderWidth: 1,
          borderColor: theme.scheme.outlineVariant,
        },
        text: {},
      },
      selection: {
        none: {},
        selected: {},
        unselected: {},
      },
      disabled: {
        true: {
          backgroundColor: undefined,
          borderColor: undefined,
        },
        false: {},
      },
    },
    compoundVariants: [
      // -- Outlined border width per size ------------------------------------
      { size: 'large', variant: 'outlined', styles: { borderWidth: 2 } },
      { size: 'xlarge', variant: 'outlined', styles: { borderWidth: 3 } },

      // -- Toggle: filled unselected uses surfaceContainer -------------------
      { variant: 'filled', selection: 'unselected', styles: { backgroundColor: theme.scheme.surfaceContainer } },

      // -- Toggle: selected container colors ---------------------------------
      { variant: 'elevated', selection: 'selected', styles: { backgroundColor: theme.scheme.primary } },
      { variant: 'tonal', selection: 'selected', styles: { backgroundColor: theme.scheme.secondary } },
      { variant: 'outlined', selection: 'selected', styles: { backgroundColor: theme.scheme.inverseSurface } },

      // -- Disabled + selected clears bg -------------------------------------
      { selection: 'selected', disabled: true, styles: { backgroundColor: undefined } },
    ],
  },
  label: {
    variants: {
      variant: {
        filled: {
          color: theme.scheme.onPrimary,
        },
        elevated: {
          color: theme.scheme.primary,
        },
        tonal: {
          color: theme.scheme.onSecondaryContainer,
        },
        outlined: {
          color: theme.scheme.onSurfaceVariant,
        },
        text: {
          color: theme.scheme.primary,
        },
      },
      selection: {
        none: {},
        selected: {},
        unselected: {},
      },
      disabled: {
        true: {
          color: theme.scheme.onSurface,
          opacity: theme.state.disabledContent,
        },
        false: {},
      },
    },
    compoundVariants: [
      { variant: 'filled', selection: 'unselected', styles: { color: theme.scheme.onSurfaceVariant } },
      { variant: 'elevated', selection: 'selected', styles: { color: theme.scheme.onPrimary } },
      { variant: 'tonal', selection: 'selected', styles: { color: theme.scheme.onSecondary } },
      { variant: 'outlined', selection: 'selected', styles: { color: theme.scheme.inverseOnSurface } },
      { selection: 'selected', disabled: true, styles: { color: theme.scheme.onSurface } },
    ],
  },
}));

export type { ButtonIconProps, ButtonLabelProps, ButtonProps, ButtonSelection, ButtonShape, ButtonSize, ButtonVariant };
export { Button, ButtonIcon, ButtonLabel };
