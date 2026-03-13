/// Material Design Floating Action Button
/// Overview: https://m3.material.io/components/floating-action-button/overview
/// Specs: https://m3.material.io/components/floating-action-button/specs
/// Guidelines: https://m3.material.io/components/floating-action-button/guidelines
/// Accessibility: https://m3.material.io/components/floating-action-button/accessibility

import React, { useMemo } from 'react';
import {
  Pressable as RNPressable,
  type PressableProps as RNPressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import type { Scheme } from '@/theme/scheme';

import { useInteraction } from '../../hooks';
import { createComponentContext } from '../../utilities';
import { ShapeContainer, type ShapeToken, StateLayer } from '../custom';
import { Icon, type IconProps } from './icon';
import { Text, type TextProps } from './text';

// =============================================================================
// Types & Constants
// =============================================================================

type FABSize = 'small' | 'medium' | 'large';
type FABColorStyle =
  | 'primaryContainer'
  | 'secondaryContainer'
  | 'tertiaryContainer'
  | 'primary'
  | 'secondary'
  | 'tertiary';

type FABLayout = 'standard' | 'extended';

const FAB_ICON_SIZE: Record<FABSize, number> = { small: 24, medium: 28, large: 36 };

const FAB_STATE_LAYER_COLOR: Record<FABColorStyle, keyof Scheme> = {
  primaryContainer: 'onPrimaryContainer',
  secondaryContainer: 'onSecondaryContainer',
  tertiaryContainer: 'onTertiaryContainer',
  primary: 'onPrimary',
  secondary: 'onSecondary',
  tertiary: 'onTertiary',
};

function getFABRestShapeToken(size: FABSize): ShapeToken {
  return size === 'large' ? 'xlarge' : 'large';
}

function getFABPressedShapeToken(size: FABSize): ShapeToken {
  return size === 'large' ? 'large' : 'medium';
}

// =============================================================================
// Props
// =============================================================================

type FABCtx = {
  size: FABSize;
  colorStyle: FABColorStyle;
  disabled: boolean;
};

const [FABProvider, useFAB] = createComponentContext<FABCtx>('FAB');

type FABProps = Omit<RNPressableProps, 'style' | 'children'> & {
  children: React.ReactNode;
  /** @default 'medium' */
  size?: FABSize;
  /** @default 'primaryContainer' */
  colorStyle?: FABColorStyle;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

type FABIconProps = IconProps;
type FABLabelProps = TextProps;

// =============================================================================
// FAB
// =============================================================================

function FAB({
  size = 'medium',
  colorStyle = 'primaryContainer',
  style,
  containerStyle,
  children,
  disabled = false,
  ...props
}: FABProps) {
  const hasLabel = React.useMemo(() => {
    let found = false;
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child.type === FABLabel) found = true;
    });
    return found;
  }, [children]);
  const layout: FABLayout = hasLabel ? 'extended' : 'standard';

  styles.useVariants({ size, colorStyle, disabled, layout });

  const { progress, handlers } = useInteraction('press', 'hover', 'focus');

  const restShape = getFABRestShapeToken(size);
  const pressedShape = getFABPressedShapeToken(size);

  const ctx = useMemo<FABCtx>(() => ({ size, colorStyle, disabled }), [size, colorStyle, disabled]);

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
        <StateLayer progress={progress} color={FAB_STATE_LAYER_COLOR[colorStyle]} disabled={disabled} />
        <FABProvider value={ctx}>{children}</FABProvider>
      </ShapeContainer>
    </RNPressable>
  );
}

// =============================================================================
// FABIcon
// =============================================================================

function FABIcon({ style, ...props }: FABIconProps) {
  const { size, colorStyle, disabled } = useFAB();
  styles.useVariants({ size, colorStyle, disabled });
  const iconSize = FAB_ICON_SIZE[size];
  return <Icon size={iconSize} variant="outlined" style={[styles.icon, style]} {...props} />;
}

// =============================================================================
// FABLabel
// =============================================================================

function FABLabel({ style, ...props }: FABLabelProps) {
  const { size, colorStyle, disabled } = useFAB();
  styles.useVariants({ size, colorStyle, disabled });
  return <Text style={[styles.label, style]} variant="title" size="medium" {...props} />;
}

// =============================================================================
// Styles
// =============================================================================
// FAB uses a `colorStyle` variant axis because each color choice fully determines
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
//   Layout   | Size   | Dimensions       | Icon  | Shape              | Padding | Gap
//   ---------|--------|------------------|-------|--------------------|---------|-----
//   standard | small  | 56×56            | 24dp  | corner.large (16)  | —       | —
//   standard | medium | 80×80            | 28dp  | corner.large (16)  | —       | —
//   standard | large  | 96×96            | 36dp  | corner.xlarge (28) | —       | —
//   extended | small  | 56×auto          | 24dp  | corner.large (16)  | 16dp    | 8dp
//   extended | medium | 80×auto          | 28dp  | corner.large (16)  | 26dp    | 12dp
//   extended | large  | 96×auto          | 36dp  | corner.xlarge (28) | 28dp    | 16dp

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
      colorStyle: {
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
      layout: {
        standard: {},
        extended: { flexDirection: 'row' as const },
      },
      colorStyle: {
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

    compoundVariants: [
      // Standard: fixed square dimensions
      { layout: 'standard', size: 'small', styles: { width: 56, height: 56 } },
      { layout: 'standard', size: 'medium', styles: { width: 80, height: 80 } },
      { layout: 'standard', size: 'large', styles: { width: 96, height: 96 } },
      // Extended: flexible width with horizontal padding and gap
      { layout: 'extended', size: 'small', styles: { height: 56, paddingHorizontal: 16, gap: 8 } },
      { layout: 'extended', size: 'medium', styles: { height: 80, paddingHorizontal: 26, gap: 12 } },
      { layout: 'extended', size: 'large', styles: { height: 96, paddingHorizontal: 28, gap: 16 } },
    ],
  },
  icon: {
    variants: {
      size: {
        small: {},
        medium: {},
        large: {},
      },
      colorStyle: {
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
      colorStyle: {
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

// =============================================================================
// Exports
// =============================================================================

FAB.displayName = 'FAB';
FABIcon.displayName = 'FABIcon';
FABLabel.displayName = 'FABLabel';

export type { FABColorStyle, FABIconProps, FABLabelProps, FABProps, FABSize };
export { FAB, FABIcon, FABLabel };
