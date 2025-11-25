/// Material Design Floating Action Button
/// Overview: https://m3.material.io/components/floating-action-button/overview
/// Specs: https://m3.material.io/components/floating-action-button/specs
/// Guidelines: https://m3.material.io/components/floating-action-button/guidelines
/// Accessibility: https://m3.material.io/components/floating-action-button/accessibility

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
import { Icon, type MaterialSymbol } from './icon';

function getFABRestShapeToken(size: FABSize): ShapeToken {
  return size === 'large' ? 'xlarge' : 'large';
}

function getFABPressedShapeToken(size: FABSize): ShapeToken {
  return size === 'large' ? 'large' : 'medium';
}

type FABSize = 'small' | 'medium' | 'large';
type FABColor = 'primaryContainer' | 'secondaryContainer' | 'tertiaryContainer' | 'primary' | 'secondary' | 'tertiary';

const FAB_STATE_LAYER_COLOR: Record<FABColor, keyof Scheme> = {
  primaryContainer: 'onPrimaryContainer',
  secondaryContainer: 'onSecondaryContainer',
  tertiaryContainer: 'onTertiaryContainer',
  primary: 'onPrimary',
  secondary: 'onSecondary',
  tertiary: 'onTertiary',
};

type FABProps = Omit<RNPressableProps, 'style' | 'children'> & {
  name: MaterialSymbol;
  size?: FABSize;
  color?: FABColor;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

function FAB({
  name,
  size = 'medium',
  color = 'primaryContainer',
  style,
  containerStyle,
  disabled = false,
  ...props
}: FABProps) {
  styles.useVariants({ size, color, disabled });

  const { progress, handlers } = useInteraction('press', 'hover', 'focus');

  const restShape = getFABRestShapeToken(size);
  const pressedShape = getFABPressedShapeToken(size);

  const iconSize: number = React.useMemo(() => {
    if (size === 'small') return 24;
    if (size === 'medium') return 28;
    if (size === 'large') return 36;
    return 28;
  }, [size]);

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
        <StateLayer progress={progress} color={FAB_STATE_LAYER_COLOR[color]} disabled={disabled} />
        <Icon name={name} size={iconSize} variant="outlined" style={styles.icon} />
      </ShapeContainer>
    </RNPressable>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
// FAB uses a `color` variant axis because each color choice fully determines
// the container, content, and state-layer colors via scheme color roles.
//
// Color mapping (from M3 spec):
//   Color              | Container               | Icon                     | State layer
//   -------------------|--------------------------|--------------------------|-----------------------------
//   primaryContainer   | primaryContainer         | onPrimaryContainer       | onPrimaryContainer
//   secondaryContainer | secondaryContainer       | onSecondaryContainer     | onSecondaryContainer
//   tertiaryContainer  | tertiaryContainer        | onTertiaryContainer      | onTertiaryContainer
//   primary            | primary                  | onPrimary                | onPrimary
//   secondary          | secondary                | onSecondary              | onSecondary
//   tertiary           | tertiary                 | onTertiary               | onTertiary
//
// Size mapping (M3 Expressive):
//   Size   | Dimensions | Icon  | Shape
//   -------|------------|-------|------------------
//   small  | 56×56      | 24dp  | corner.large (16)
//   medium | 80×80      | 28dp  | corner.large (16)
//   large  | 96×96      | 36dp  | corner.xlarge (28)
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
    overflow: 'hidden',

    variants: {
      size: {
        small: {
          width: 56,
          height: 56,
        },
        medium: {
          width: 80,
          height: 80,
        },
        large: {
          width: 96,
          height: 96,
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
}));

FAB.displayName = 'FAB';

export type { FABColor, FABProps, FABSize };
export { FAB };
