/// Material Design Card
/// Overview: https://m3.material.io/components/cards/overview
/// Specs: https://m3.material.io/components/cards/specs
/// Guidelines: https://m3.material.io/components/cards/guidelines
/// Accessibility: https://m3.material.io/components/cards/accessibility

import React from 'react';
import { type StyleProp, View, type ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Pressable, type PressableProps, ShapeContainer, StateLayer } from '../custom';

// =============================================================================
// Types
// =============================================================================

type CardVariant = 'elevated' | 'filled' | 'outlined';

type CardProps = Omit<PressableProps, 'style' | 'children'> & {
  variant?: CardVariant;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  /** Style applied to the state layer overlay (actionable cards only). */
  stateStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

// =============================================================================
// Component
// =============================================================================

function Card({
  variant = 'filled',
  disabled = false,
  style,
  contentStyle,
  stateStyle,
  children,
  onPress,
  onLongPress,
  ...props
}: CardProps) {
  styles.useVariants({ variant, disabled });

  const isActionable = !!(onPress || onLongPress);

  if (!isActionable) {
    return (
      <View style={[styles.root, styles.container, style, contentStyle]} accessibilityRole="none">
        {children}
      </View>
    );
  }

  return (
    <Pressable
      style={[styles.root, style]}
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      accessibilityRole="button"
      {...props}
    >
      <ShapeContainer shape="medium" style={[styles.container, contentStyle]}>
        <StateLayer color="onSurface" disabled={disabled} style={stateStyle} />
        {children}
      </ShapeContainer>
    </Pressable>
  );
}

// =============================================================================
// Styles
// =============================================================================

const styles = StyleSheet.create((theme) => ({
  root: {
    borderRadius: theme.shape.medium,

    variants: {
      variant: {
        elevated: {
          backgroundColor: theme.scheme.surfaceContainerLow,
          shadowColor: theme.scheme.shadow,
          ...theme.elevation[1],
        },
        filled: {
          backgroundColor: theme.scheme.surfaceContainerHighest,
          ...theme.elevation[0],
        },
        outlined: {
          backgroundColor: theme.scheme.surface,
          borderWidth: 1,
          borderColor: theme.scheme.outlineVariant,
          ...theme.elevation[0],
        },
      },
      disabled: {
        true: {},
        false: {},
      },
    },
    compoundVariants: [
      {
        variant: 'elevated',
        disabled: true,
        styles: {
          ...theme.elevation[0],
          shadowOpacity: 0,
          backgroundColor: `${theme.scheme.surface}61`,
        },
      },
      {
        variant: 'filled',
        disabled: true,
        styles: {
          backgroundColor: `${theme.scheme.surfaceContainerHighest}61`,
        },
      },
      {
        variant: 'outlined',
        disabled: true,
        styles: {
          borderColor: `${theme.scheme.outline}1F`,
        },
      },
    ],
  },
  container: {
    overflow: 'hidden',
  },
}));

// =============================================================================
// Exports
// =============================================================================

Card.displayName = 'Card';

export type { CardProps, CardVariant };
export { Card };
