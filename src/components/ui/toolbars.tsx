/// Material Design Toolbars
/// Overview: https://m3.material.io/components/toolbars/overview
/// Specs: https://m3.material.io/components/toolbars/specs
/// Guidelines: https://m3.material.io/components/toolbars/guidelines
/// Accessibility: https://m3.material.io/components/toolbars/accessibility

import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { getDisplayName } from '../../utilities';

// =============================================================================
// Types
// =============================================================================

type ToolbarVariant = 'docked' | 'floating';
type ToolbarColorStyle = 'standard' | 'vibrant';
type ToolbarLayout = 'horizontal' | 'vertical';

type ToolbarProps = {
  /** Toolbar variant. */
  variant?: ToolbarVariant;
  /** Color style for the toolbar. */
  colorStyle?: ToolbarColorStyle;
  /** Layout direction — horizontal (default) or vertical. Only applies to floating variant. */
  layout?: ToolbarLayout;
  /** Style applied to the outer container. */
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

// =============================================================================
// Constants (M3 Specs)
// =============================================================================

/** md.comp.toolbar.docked.container.height = 64dp */
const DOCKED_HEIGHT = 64;

/** md.comp.toolbar.docked.container.leading-space = 16dp */
const DOCKED_LEADING_SPACE = 16;

/** md.comp.toolbar.docked.container.trailing-space = 16dp */
const DOCKED_TRAILING_SPACE = 16;

/** md.comp.toolbar.docked.container.min-spacing = 4dp */
const DOCKED_MIN_SPACING = 4;

/** md.comp.toolbar.floating.horizontal.container.height = 64dp */
const FLOATING_HORIZONTAL_HEIGHT = 64;

/** md.comp.toolbar.floating.vertical.container.width = 64dp */
const FLOATING_VERTICAL_WIDTH = 64;

/** md.comp.toolbar.floating.container.leading-space = 8dp */
const FLOATING_LEADING_SPACE = 8;

/** md.comp.toolbar.floating.container.trailing-space = 8dp */
const FLOATING_TRAILING_SPACE = 8;

/** md.comp.toolbar.floating.container.between-space = 4dp */
const FLOATING_BETWEEN_SPACE = 4;

/** md.comp.toolbar.floating.fab.between-space = 8dp */
const FLOATING_FAB_BETWEEN_SPACE = 8;

const FAB_DISPLAY_NAME = 'FAB';

// =============================================================================
// Toolbar
// =============================================================================

function Toolbar({
  variant = 'docked',
  colorStyle = 'standard',
  layout = 'horizontal',
  style,
  children,
}: ToolbarProps) {
  styles.useVariants({ variant, colorStyle, layout });

  // Extract FAB child for floating variant — must be before any early return (rules of hooks)
  const { fabEl, toolbarChildren } = React.useMemo(() => {
    if (variant === 'docked') return { fabEl: null, toolbarChildren: [] };
    let fab: React.ReactNode = null;
    const rest: React.ReactNode[] = [];
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && getDisplayName(child) === FAB_DISPLAY_NAME) {
        // Clone with size="small" (56dp) per md.comp.toolbar.floating.fab.container = 56×56dp
        fab = React.cloneElement(child, { size: 'small' } as any);
      } else {
        rest.push(child);
      }
    });
    return { fabEl: fab, toolbarChildren: rest };
  }, [children, variant]);

  if (variant === 'docked') {
    return (
      <View style={[styles.container, style]} accessibilityRole="toolbar">
        {children}
      </View>
    );
  }

  const toolbar = (
    <View style={[styles.container, style]} accessibilityRole="toolbar">
      {toolbarChildren}
    </View>
  );

  if (!fabEl) return toolbar;

  // Wrap toolbar + FAB with 8dp gap per md.comp.toolbar.floating.fab.between-space
  // Vertical layout stacks toolbar above FAB; horizontal places them side-by-side
  const wrapperStyle = layout === 'vertical' ? styles.floatingFabWrapperVertical : styles.floatingFabWrapper;
  return (
    <View style={wrapperStyle}>
      {toolbar}
      {fabEl}
    </View>
  );
}

// =============================================================================
// Styles
// =============================================================================

const styles = StyleSheet.create((theme) => ({
  container: {
    alignItems: 'center',

    variants: {
      variant: {
        docked: {
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          height: DOCKED_HEIGHT,
          paddingStart: DOCKED_LEADING_SPACE,
          paddingEnd: DOCKED_TRAILING_SPACE,
          gap: DOCKED_MIN_SPACING,
        },
        floating: {
          justifyContent: 'center',
          alignSelf: 'center',
          borderRadius: theme.shape.full,
          gap: FLOATING_BETWEEN_SPACE,
          ...theme.elevation[2],
        },
      },
      colorStyle: {
        standard: {
          backgroundColor: theme.scheme.surfaceContainerHigh,
        },
        vibrant: {
          backgroundColor: theme.scheme.primaryContainer,
        },
      },
      layout: {
        horizontal: {},
        vertical: {},
      },
    },
    compoundVariants: [
      {
        variant: 'floating',
        layout: 'horizontal',
        styles: {
          flexDirection: 'row',
          height: FLOATING_HORIZONTAL_HEIGHT,
          paddingStart: FLOATING_LEADING_SPACE,
          paddingEnd: FLOATING_TRAILING_SPACE,
        },
      },
      {
        variant: 'floating',
        layout: 'vertical',
        styles: {
          flexDirection: 'column',
          width: FLOATING_VERTICAL_WIDTH,
          paddingTop: FLOATING_LEADING_SPACE,
          paddingBottom: FLOATING_TRAILING_SPACE,
        },
      },
    ],
  },

  // --- Floating toolbar + FAB wrapper ---
  floatingFabWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: FLOATING_FAB_BETWEEN_SPACE,
  },
  floatingFabWrapperVertical: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    gap: FLOATING_FAB_BETWEEN_SPACE,
  },
}));

// =============================================================================
// Exports
// =============================================================================

Toolbar.displayName = 'Toolbar';

export type { ToolbarColorStyle, ToolbarLayout, ToolbarProps, ToolbarVariant };
export { Toolbar };
