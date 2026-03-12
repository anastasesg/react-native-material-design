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

type ToolbarColorStyle = 'standard' | 'vibrant';

type DockedToolbarProps = {
  /** Color style for the toolbar. */
  colorStyle?: ToolbarColorStyle;
  /** Style applied to the outer container. */
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

type FloatingToolbarLayout = 'horizontal' | 'vertical';

type FloatingToolbarProps = {
  /** Color style for the toolbar. */
  colorStyle?: ToolbarColorStyle;
  /** Layout direction — horizontal (default) or vertical. */
  layout?: FloatingToolbarLayout;
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
// DockedToolbar
// =============================================================================

function DockedToolbar({ colorStyle = 'standard', style, children }: DockedToolbarProps) {
  styles.useVariants({ colorStyle });

  return (
    <View style={[styles.dockedContainer, style]} accessibilityRole="toolbar">
      {children}
    </View>
  );
}

// =============================================================================
// FloatingToolbar
// =============================================================================

function FloatingToolbar({ colorStyle = 'standard', layout = 'horizontal', style, children }: FloatingToolbarProps) {
  styles.useVariants({ colorStyle, layout });

  // Extract FAB child (if any) — render it adjacent to the toolbar per M3 spec
  const { fabEl, toolbarChildren } = React.useMemo(() => {
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
  }, [children]);

  const toolbar = (
    <View style={[styles.floatingContainer, style]} accessibilityRole="toolbar">
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
  // --- Docked toolbar ---
  dockedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: DOCKED_HEIGHT,
    paddingStart: DOCKED_LEADING_SPACE,
    paddingEnd: DOCKED_TRAILING_SPACE,
    gap: DOCKED_MIN_SPACING,

    variants: {
      colorStyle: {
        standard: {
          backgroundColor: theme.scheme.surfaceContainerHigh,
        },
        vibrant: {
          backgroundColor: theme.scheme.primaryContainer,
        },
      },
    },
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

  // --- Floating toolbar ---
  floatingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: theme.shape.full,
    gap: FLOATING_BETWEEN_SPACE,
    ...theme.elevation[2],

    variants: {
      colorStyle: {
        standard: {
          backgroundColor: theme.scheme.surfaceContainerHigh,
        },
        vibrant: {
          backgroundColor: theme.scheme.primaryContainer,
        },
      },
      layout: {
        horizontal: {
          flexDirection: 'row',
          height: FLOATING_HORIZONTAL_HEIGHT,
          paddingStart: FLOATING_LEADING_SPACE,
          paddingEnd: FLOATING_TRAILING_SPACE,
        },
        vertical: {
          flexDirection: 'column',
          width: FLOATING_VERTICAL_WIDTH,
          paddingTop: FLOATING_LEADING_SPACE,
          paddingBottom: FLOATING_TRAILING_SPACE,
        },
      },
    },
  },
}));

// =============================================================================
// Exports
// =============================================================================

DockedToolbar.displayName = 'DockedToolbar';
FloatingToolbar.displayName = 'FloatingToolbar';

export type { DockedToolbarProps, FloatingToolbarLayout, FloatingToolbarProps, ToolbarColorStyle };
export { DockedToolbar, FloatingToolbar };
