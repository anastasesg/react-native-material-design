/// Material Design Divider
/// Overview: https://m3.material.io/components/divider/overview
/// Specs: https://m3.material.io/components/divider/specs
/// Guidelines: https://m3.material.io/components/divider/guidelines
/// Accessibility: https://m3.material.io/components/divider/accessibility

import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

// =============================================================================
// Types
// =============================================================================

type DividerVariant = 'fullWidth' | 'inset' | 'middleInset';
type DividerOrientation = 'horizontal' | 'vertical';

type DividerProps = {
  variant?: DividerVariant;
  orientation?: DividerOrientation;
  style?: StyleProp<ViewStyle>;
};

// =============================================================================
// Component
// =============================================================================

function Divider({ variant = 'fullWidth', orientation = 'horizontal', style }: DividerProps) {
  styles.useVariants({ variant, orientation });

  return <View accessibilityRole="none" style={[styles.root, style]} />;
}

// =============================================================================
// Styles
// =============================================================================

const styles = StyleSheet.create((theme) => ({
  root: {
    backgroundColor: theme.scheme.outlineVariant,

    variants: {
      orientation: {
        horizontal: {
          alignSelf: 'stretch',
          height: 1,
        },
        vertical: {
          alignSelf: 'stretch',
          width: 1,
        },
      },
      variant: {
        fullWidth: {},
        inset: {},
        middleInset: {},
      },
    },
    compoundVariants: [
      {
        variant: 'inset',
        orientation: 'horizontal',
        styles: { marginLeft: 16 },
      },
      {
        variant: 'middleInset',
        orientation: 'horizontal',
        styles: { marginLeft: 16, marginRight: 16 },
      },
      {
        variant: 'inset',
        orientation: 'vertical',
        styles: { marginTop: 16 },
      },
      {
        variant: 'middleInset',
        orientation: 'vertical',
        styles: { marginTop: 16, marginBottom: 16 },
      },
    ],
  },
}));

// =============================================================================
// Exports
// =============================================================================

export type { DividerOrientation, DividerProps, DividerVariant };
export { Divider };
