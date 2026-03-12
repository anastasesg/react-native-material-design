/// Material Design Icon Button
/// Overview: https://m3.material.io/components/icon-buttons/overview
/// Specs: https://m3.material.io/components/icon-buttons/specs
/// Guidelines: https://m3.material.io/components/icon-buttons/guidelines
/// Accessibility: https://m3.material.io/components/icon-buttons/accessibility
import React from 'react';
import {
  type GestureResponderEvent,
  Pressable as RNPressable,
  type PressableProps as RNPressableProps,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import type { Scheme } from '@/theme/scheme';

import { useControllableState, useInteraction } from '../../hooks';
import { ShapeContainer, type ShapeToken, StateLayer } from '../custom';
import { Icon, type MaterialSymbol } from './icon';

function getIconButtonRestShapeToken(
  size: IconButtonSize,
  shape: IconButtonShape,
  selection: IconButtonSelection,
): ShapeToken {
  const isSelected = selection === 'selected';
  const effectiveShape = isSelected ? (shape === 'rounded' ? 'square' : 'rounded') : shape;
  if (effectiveShape === 'rounded') return 'full';
  if (size === 'xsmall' || size === 'small') return 'medium';
  if (size === 'medium') return 'large';
  return 'xlarge';
}

function getIconButtonPressedShapeToken(size: IconButtonSize): ShapeToken {
  if (size === 'large' || size === 'xlarge') return 'large';
  if (size === 'medium') return 'medium';
  return 'small';
}

function getIconButtonStateLayerColor(variant: IconButtonVariant, selection: IconButtonSelection): keyof Scheme {
  if (selection === 'selected') {
    if (variant === 'filled') return 'onPrimary';
    if (variant === 'tonal') return 'onSecondaryContainer';
    if (variant === 'outlined') return 'inverseOnSurface';
    if (variant === 'standard') return 'primary';
  }
  if (selection === 'unselected') {
    if (variant === 'filled') return 'onSurfaceVariant';
    if (variant === 'tonal') return 'onSurfaceVariant';
    return 'onSurfaceVariant';
  }
  // 'none'
  if (variant === 'filled') return 'onPrimary';
  if (variant === 'tonal') return 'onSecondaryContainer';
  return 'onSurfaceVariant';
}

type IconButtonSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
type IconButtonShape = 'rounded' | 'square';
type IconButtonVariant = 'filled' | 'outlined' | 'standard' | 'tonal';
type IconButtonSelection = 'none' | 'selected' | 'unselected';

type IconButtonProps = Omit<RNPressableProps, 'style' | 'children'> & {
  /** Icon name, or a function receiving the selection state for toggle buttons. */
  name: MaterialSymbol | ((state: { selected: boolean }) => MaterialSymbol);
  size?: IconButtonSize;
  shape?: IconButtonShape;
  variant?: IconButtonVariant;

  /** Enables toggle mode. When false/undefined, selected/defaultSelected/onSelectedChange are ignored. */
  toggle?: boolean;
  selected?: boolean;
  defaultSelected?: boolean;
  onSelectedChange?: (selected: boolean) => void;

  /** @internal Used by ButtonGroup connected variant to suppress own corner animation. */
  __internal__suppressCornerAnimation?: boolean;

  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

function IconButton({
  name,
  size = 'small',
  variant = 'standard',
  shape = 'rounded',
  toggle = false,
  selected: selectedProp,
  defaultSelected,
  onSelectedChange,
  __internal__suppressCornerAnimation = false,
  style,
  iconStyle,
  containerStyle,
  disabled = false,
  onPress,
  ...props
}: IconButtonProps) {
  const [selected, setSelected] = useControllableState({
    value: toggle ? selectedProp : undefined,
    defaultValue: toggle ? (defaultSelected ?? false) : false,
    onChange: toggle ? onSelectedChange : undefined,
  });
  const selection: IconButtonSelection = toggle ? (selected ? 'selected' : 'unselected') : 'none';

  styles.useVariants({ size, variant, shape, selection, disabled });

  const { progress, handlers } = useInteraction('press', 'hover', 'focus');

  const suppressCorner = __internal__suppressCornerAnimation;
  const restShape = getIconButtonRestShapeToken(size, shape, selection);
  const pressedShape = suppressCorner ? undefined : getIconButtonPressedShapeToken(size);

  const stateLayerColor = getIconButtonStateLayerColor(variant, selection);

  const iconSize = React.useMemo(() => {
    if (size === 'xsmall') return 20;
    if (size === 'small') return 24;
    if (size === 'medium') return 24;
    if (size === 'large') return 32;
    if (size === 'xlarge') return 40;
    return 20;
  }, [size]);

  const handlePress = React.useCallback((e: GestureResponderEvent) => {
    if (toggle) {
      setSelected((prev) => !prev);
    }
    onPress?.(e);
  }, [toggle, setSelected, onPress]);

  const displayIcon = typeof name === 'function' ? name({ selected }) : name;

  return (
    <RNPressable
      style={[styles.root, style]}
      onPress={handlePress}
      disabled={disabled}
      accessibilityRole={toggle ? 'togglebutton' : 'button'}
      accessibilityState={toggle ? { checked: selected, disabled } : { disabled }}
      {...handlers}
      {...props}
    >
      <ShapeContainer
        shape={restShape}
        shapes={pressedShape ? { press: pressedShape } : undefined}
        progress={pressedShape ? progress : undefined}
        style={[styles.content, containerStyle]}
      >
        <StateLayer progress={progress} color={stateLayerColor} disabled={disabled} />
        <Icon name={displayIcon} size={iconSize} variant="outlined" style={[styles.icon, iconStyle]} />
      </ShapeContainer>
    </RNPressable>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
// The `selection` variant drives toggle behavior:
//   'none'       - standard (non-toggle) icon button
//   'unselected' - toggle icon button in unselected state
//   'selected'   - toggle icon button in selected state
//
// Color mapping (from M3 spec):
//   Variant   | none / unselected                    | selected
//   ----------|--------------------------------------|--------------------------
//   filled    | primary (surfaceContainerHighest*)   | primary
//   tonal     | secondaryContainer (surfaceContainerHighest*) | secondaryContainer
//   outlined  | outlineVariant border                | inverseSurface
//   standard  | (none)                               | (none)
//
//   * filled/tonal unselected uses surfaceContainerHighest instead of their default
// ---------------------------------------------------------------------------

const styles = StyleSheet.create((theme) => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',

    variants: {
      size: {
        xsmall: {
          width: 48,
          height: 48,
        },
        small: {
          width: 48,
          height: 48,
        },
        medium: {
          width: 56,
          height: 56,
        },
        large: {
          width: 96,
          height: 96,
        },
        xlarge: {
          width: 136,
          height: 136,
        },
      },
      shape: {
        rounded: {},
        square: {},
      },
      variant: {
        filled: {},
        outlined: {},
        standard: {},
        tonal: {},
      },
      selection: {
        none: {},
        selected: {},
        unselected: {},
      },
      disabled: {
        true: {},
        false: {},
      },
    },
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',

    width: '100%',
    height: '100%',

    variants: {
      size: {
        xsmall: {
          width: 32,
          height: 32,
        },
        small: {
          width: 40,
          height: 40,
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
        outlined: {
          borderWidth: 1,
          borderColor: theme.scheme.outlineVariant,
        },
        standard: {},
        tonal: {
          backgroundColor: theme.scheme.secondaryContainer,
        },
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

      // -- Toggle: filled unselected uses surfaceContainerHighest ------------
      { variant: 'filled', selection: 'unselected', styles: { backgroundColor: theme.scheme.surfaceContainerHighest } },

      // -- Toggle: tonal unselected uses surfaceContainerHighest -------------
      { variant: 'tonal', selection: 'unselected', styles: { backgroundColor: theme.scheme.surfaceContainerHighest } },

      // -- Toggle: selected container colors ---------------------------------
      // filled selected = primary (same as default, no override needed)
      // tonal selected = secondaryContainer (same as default, no override needed)
      {
        variant: 'outlined',
        selection: 'selected',
        styles: { backgroundColor: theme.scheme.inverseSurface, borderWidth: 0 },
      },
      // standard has no container

      // -- Disabled overrides ------------------------------------------------
      { variant: 'filled', disabled: true, styles: { backgroundColor: undefined } },
      { variant: 'tonal', disabled: true, styles: { backgroundColor: undefined } },
      { variant: 'outlined', selection: 'selected', disabled: true, styles: { backgroundColor: undefined } },
    ],
  },
  icon: {
    color: theme.scheme.onBackground,
    variants: {
      size: {
        xsmall: {},
        small: {},
        medium: {},
        large: {},
        xlarge: {},
      },
      shape: {
        rounded: {},
        square: {},
      },
      variant: {
        filled: {
          color: theme.scheme.onPrimary,
        },
        outlined: {
          color: theme.scheme.onSurfaceVariant,
        },
        standard: {
          color: theme.scheme.onSurfaceVariant,
        },
        tonal: {
          color: theme.scheme.onSecondaryContainer,
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
      // Toggle unselected icon colors
      { variant: 'filled', selection: 'unselected', styles: { color: theme.scheme.primary } },
      { variant: 'tonal', selection: 'unselected', styles: { color: theme.scheme.onSurfaceVariant } },
      // outlined unselected = onSurfaceVariant (same as default)
      // standard unselected = onSurfaceVariant (same as default)

      // Toggle selected icon colors
      // filled selected = onPrimary (same as default)
      { variant: 'outlined', selection: 'selected', styles: { color: theme.scheme.inverseOnSurface } },
      { variant: 'standard', selection: 'selected', styles: { color: theme.scheme.primary } },
      // tonal selected = onSecondaryContainer (same as default)

      // Disabled + selected override
      { selection: 'selected', disabled: true, styles: { color: theme.scheme.onSurface } },
    ],
  },
}));

IconButton.displayName = 'IconButton';

export type { IconButtonProps, IconButtonSelection, IconButtonShape, IconButtonSize, IconButtonVariant };
export { IconButton };
