/// Material Design Extended FAB
/// Overview: https://m3.material.io/components/extended-fab/overview
/// Specs: https://m3.material.io/components/extended-fab/specs
/// Guidelines: https://m3.material.io/components/extended-fab/guidelines
/// Accessibility: https://m3.material.io/components/extended-fab/accessibility

import React from 'react';
import {
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
import { Text, type TextProps } from './text';

function getExtFABRestShapeToken(size: ExtendedFABSize): ShapeToken {
  return size === 'large' ? 'xlarge' : 'large';
}

function getExtFABPressedShapeToken(size: ExtendedFABSize): ShapeToken {
  return size === 'large' ? 'large' : 'medium';
}

type ExtendedFABSize = 'small' | 'medium' | 'large';
type ExtendedFABColor =
  | 'primaryContainer'
  | 'secondaryContainer'
  | 'tertiaryContainer'
  | 'primary'
  | 'secondary'
  | 'tertiary';

const EFAB_STATE_LAYER_COLOR: Record<ExtendedFABColor, keyof Scheme> = {
  primaryContainer: 'onPrimaryContainer',
  secondaryContainer: 'onSecondaryContainer',
  tertiaryContainer: 'onTertiaryContainer',
  primary: 'onPrimary',
  secondary: 'onSecondary',
  tertiary: 'onTertiary',
};

type ExtendedFABProps = Omit<RNPressableProps, 'style' | 'children'> & {
  children?: React.ReactNode;
  size?: ExtendedFABSize;
  color?: ExtendedFABColor;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

type ExtendedFABIconProps = IconProps & {
  __internal__efabSize?: ExtendedFABSize;
  __internal__efabColor?: ExtendedFABColor;
  __internal__efabDisabled?: boolean;
};

type ExtendedFABLabelProps = TextProps & {
  __internal__efabSize?: ExtendedFABSize;
  __internal__efabColor?: ExtendedFABColor;
  __internal__efabDisabled?: boolean;
};

// ---------------------------------------------------------------------------
// ExtendedFAB
// ---------------------------------------------------------------------------

function ExtendedFAB({
  size = 'small',
  color = 'primaryContainer',
  style,
  containerStyle,
  children,
  disabled = false,
  ...props
}: ExtendedFABProps) {
  styles.useVariants({ size, color, disabled });

  const { progress, handlers } = useInteraction('press', 'hover', 'focus');

  const restShape = getExtFABRestShapeToken(size);
  const pressedShape = getExtFABPressedShapeToken(size);

  return (
    <RNPressable
      style={[styles.root, style]}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      {...handlers}
      {...props}
    >
      <ShapeContainer
        shape={restShape}
        shapes={{ press: pressedShape }}
        progress={progress}
        style={[styles.container, containerStyle]}
      >
        <StateLayer progress={progress} color={EFAB_STATE_LAYER_COLOR[color]} disabled={disabled} />
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              __internal__efabSize: size,
              __internal__efabColor: color,
              __internal__efabDisabled: disabled,
            } as any);
          }
          return child;
        })}
      </ShapeContainer>
    </RNPressable>
  );
}

// ---------------------------------------------------------------------------
// ExtendedFABIcon
// ---------------------------------------------------------------------------

function ExtendedFABIcon({
  __internal__efabSize = 'small',
  __internal__efabColor = 'primaryContainer',
  __internal__efabDisabled = false,
  style,
  ...props
}: ExtendedFABIconProps) {
  styles.useVariants({
    size: __internal__efabSize,
    color: __internal__efabColor,
    disabled: __internal__efabDisabled,
  });

  const iconSize: number = React.useMemo(() => {
    if (__internal__efabSize === 'small') return 24;
    if (__internal__efabSize === 'medium') return 28;
    if (__internal__efabSize === 'large') return 36;
    return 24;
  }, [__internal__efabSize]);

  return <Icon size={iconSize} variant="outlined" style={[styles.icon, style]} {...props} />;
}

// ---------------------------------------------------------------------------
// ExtendedFABLabel
// ---------------------------------------------------------------------------

function ExtendedFABLabel({
  __internal__efabSize = 'small',
  __internal__efabColor = 'primaryContainer',
  __internal__efabDisabled = false,
  style,
  ...props
}: ExtendedFABLabelProps) {
  styles.useVariants({
    size: __internal__efabSize,
    color: __internal__efabColor,
    disabled: __internal__efabDisabled,
  });

  return <Text style={[styles.label, style]} variant="title" size="medium" {...props} />;
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
// Extended FAB uses the same `color` axis as FAB.
//
// Size mapping (M3 Expressive):
//   Size   | Height | Icon  | Shape             | Leading | Trailing | Gap
//   -------|--------|-------|-------------------|---------|----------|-----
//   small  | 56dp   | 24dp  | corner.large (16) | 16dp    | 16dp     | 8dp
//   medium | 80dp   | 28dp  | corner.large (16) | 26dp    | 26dp     | 12dp
//   large  | 96dp   | 36dp  | corner.xlarge (28) | 28dp    | 28dp     | 16dp
// ---------------------------------------------------------------------------

const styles = StyleSheet.create((theme) => ({
  root: {
    shadowColor: theme.scheme.shadow,
    ...theme.elevation[3],

    variants: {
      size: {
        small: {},
        medium: {},
        large: {},
      },
      color: {
        primaryContainer: {},
        secondaryContainer: {},
        tertiaryContainer: {},
        primary: {},
        secondary: {},
        tertiary: {},
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
        small: {
          height: 56,
          paddingHorizontal: 16,
          gap: 8,
        },
        medium: {
          height: 80,
          paddingHorizontal: 26,
          gap: 12,
        },
        large: {
          height: 96,
          paddingHorizontal: 28,
          gap: 16,
        },
      },
      color: {
        primaryContainer: { backgroundColor: theme.scheme.primaryContainer },
        secondaryContainer: { backgroundColor: theme.scheme.secondaryContainer },
        tertiaryContainer: { backgroundColor: theme.scheme.tertiaryContainer },
        primary: { backgroundColor: theme.scheme.primary },
        secondary: { backgroundColor: theme.scheme.secondary },
        tertiary: { backgroundColor: theme.scheme.tertiary },
      },
      disabled: {
        true: {
          backgroundColor: undefined,
        },
        false: {},
      },
    },
  },
  icon: {
    variants: {
      size: {
        small: {},
        medium: {},
        large: {},
      },
      color: {
        primaryContainer: { color: theme.scheme.onPrimaryContainer },
        secondaryContainer: { color: theme.scheme.onSecondaryContainer },
        tertiaryContainer: { color: theme.scheme.onTertiaryContainer },
        primary: { color: theme.scheme.onPrimary },
        secondary: { color: theme.scheme.onSecondary },
        tertiary: { color: theme.scheme.onTertiary },
      },
      disabled: {
        true: {
          color: theme.scheme.onSurface,
          opacity: theme.state.disabledContent,
        },
        false: {},
      },
    },
  },
  label: {
    variants: {
      size: {
        small: {},
        medium: {},
        large: {},
      },
      color: {
        primaryContainer: { color: theme.scheme.onPrimaryContainer },
        secondaryContainer: { color: theme.scheme.onSecondaryContainer },
        tertiaryContainer: { color: theme.scheme.onTertiaryContainer },
        primary: { color: theme.scheme.onPrimary },
        secondary: { color: theme.scheme.onSecondary },
        tertiary: { color: theme.scheme.onTertiary },
      },
      disabled: {
        true: {
          color: theme.scheme.onSurface,
          opacity: theme.state.disabledContent,
        },
        false: {},
      },
    },
  },
}));

export type { ExtendedFABColor, ExtendedFABIconProps, ExtendedFABLabelProps, ExtendedFABProps, ExtendedFABSize };
export { ExtendedFAB, ExtendedFABIcon, ExtendedFABLabel };
