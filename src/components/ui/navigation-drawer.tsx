/// Material Design Navigation Drawer
/// Overview: https://m3.material.io/components/navigation-drawer/overview
/// Specs: https://m3.material.io/components/navigation-drawer/specs
/// Guidelines: https://m3.material.io/components/navigation-drawer/guidelines
/// Accessibility: https://m3.material.io/components/navigation-drawer/accessibility

import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Modal, ScrollView, View } from 'react-native';
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
import { scheduleOnRN } from 'react-native-worklets';

import { useControllableState, useMotionConfig } from '../../hooks';
import { createComponentContext } from '../../utilities';
import { Pressable, StateLayer } from '../custom';
import { Icon, type IconProps } from './icon';
import { Text, type TextProps } from './text';

// =============================================================================
// Types
// =============================================================================

type NavigationDrawerVariant = 'standard' | 'modal';

type NavigationDrawerProps = {
  /** Which variant: standard (inline) or modal (overlay with scrim). */
  variant?: NavigationDrawerVariant;
  /** Whether the drawer is open (controlled). */
  open?: boolean;
  /** Default open state for uncontrolled mode. */
  defaultOpen?: boolean;
  /** Called when the open state changes (scrim tap, back button). */
  onOpenChange?: (open: boolean) => void;
  /** Headline text displayed at the top of the drawer. */
  headline?: string;
  /** Currently active item value (controlled). */
  value?: string;
  /** Initial active item value (uncontrolled). */
  defaultValue?: string;
  /** Called when the active item changes. */
  onValueChange?: (value: string) => void;
  /** Style applied to the drawer container. */
  style?: StyleProp<ViewStyle>;
  /** Style applied to the scrim overlay (modal variant only). */
  scrimStyle?: StyleProp<ViewStyle>;
  /** Content rendered inside the drawer (NavigationDrawerItem, NavigationDrawerSectionLabel, Divider). */
  children?: React.ReactNode;
};

type NavigationDrawerItemProps = {
  /** Value identifier for this item (used with NavigationDrawer context). */
  value: string;
  /** Accessibility label for the pressable. */
  accessibilityLabel?: string;
  /** Style override. */
  style?: StyleProp<ViewStyle>;
  /** Style applied to the active indicator background. */
  indicatorStyle?: StyleProp<ViewStyle>;
  /** Children: NavigationDrawerIcon, NavigationDrawerLabel, NavigationDrawerBadge. */
  children?: React.ReactNode;
};

type NavigationDrawerIconProps = Omit<IconProps, 'size'>;

type NavigationDrawerLabelProps = Omit<TextProps, 'variant' | 'size'>;

type NavigationDrawerBadgeProps = Omit<TextProps, 'variant' | 'size'>;

type NavigationDrawerSectionLabelProps = Omit<TextProps, 'variant' | 'size'> & {
  /** Style override. */
  style?: StyleProp<ViewStyle>;
};

// =============================================================================
// Context (NavigationDrawer -> NavigationDrawerItem communication)
// =============================================================================

type NavigationDrawerContextValue = {
  value: string | undefined;
  onSelect: (value: string) => void;
};
const [NavigationDrawerProvider, useNavigationDrawerContext] =
  createComponentContext<NavigationDrawerContextValue>('NavigationDrawer');

// NavigationDrawerItem → Icon/Label context
type DrawerItemContextValue = { active: boolean };
const [DrawerItemProvider, useDrawerItem] = createComponentContext<DrawerItemContextValue>('NavigationDrawerItem');

// =============================================================================
// Constants (M3 Specs)
// =============================================================================

/** Container width — md.comp.navigation-drawer.container.width = 360dp */
const CONTAINER_WIDTH = 360;

/** Active indicator height — md.comp.navigation-drawer.active-indicator.height = 56dp */
const INDICATOR_HEIGHT = 56;

/** Active indicator width — md.comp.navigation-drawer.active-indicator.width = 336dp */
const INDICATOR_WIDTH = 336;

/** Icon size — md.comp.navigation-drawer.icon.size = 24dp */
const ICON_SIZE = 24;

/** Left/right padding for label content — 28dp from measurements */
const ITEM_HORIZONTAL_PADDING = 28;

/** Active indicator padding from container edge — 12dp from measurements */
const INDICATOR_PADDING = 12;

/** Scrim opacity — matching SideSheet pattern (0.32) */
const SCRIM_OPACITY = 0.32;

/** Headline vertical padding — 16dp (from measurement diagrams) */
const HEADLINE_VERTICAL_PADDING = 16;

/** Headline horizontal padding — 28dp (same as item content) */
const HEADLINE_HORIZONTAL_PADDING = 28;

/** Gap between icon and label inside item — 12dp (from measurements) */
const ICON_LABEL_GAP = 12;

// =============================================================================
// NavigationDrawer (container — manages active item + open/close state)
// =============================================================================

function NavigationDrawer({
  variant = 'modal',
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  headline,
  value: valueProp,
  defaultValue = '',
  onValueChange,
  style,
  scrimStyle,
  children,
}: NavigationDrawerProps) {
  styles.useVariants({ variant });

  // --- Open state ---
  const [isOpen, setOpen] = useControllableState({
    value: openProp,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  // `visible` keeps the component mounted during exit animations.
  const [visible, setVisible] = React.useState(false);

  const handleScrimPress = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  // --- Value state ---
  const [value, handleSelect] = useControllableState({
    value: valueProp,
    defaultValue: defaultValue,
    onChange: onValueChange,
  });

  const contextValue = React.useMemo<NavigationDrawerContextValue>(
    () => ({ value, onSelect: handleSelect }),
    [value, handleSelect],
  );

  // --- Animation — progress-driven width expansion (same pattern as SideSheet) ---
  const progress = useSharedValue(0);

  const onCloseAnimationEnd = React.useCallback((finished?: boolean) => {
    'worklet';
    if (finished) {
      scheduleOnRN(setVisible, false);
    }
  }, []);

  const motion = useMotionConfig('fast');

  // Phase 1: mount (reset progress to 0) or start exit animation
  React.useEffect(() => {
    if (isOpen) {
      progress.value = 0;
      setVisible(true);
    } else if (visible) {
      progress.value = withSpring(0, motion.effects.value, onCloseAnimationEnd);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Phase 2: once mounted, run the enter animation
  React.useEffect(() => {
    if (visible && isOpen) {
      progress.value = withSpring(1, motion.spatial.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const animatedDrawerStyle = useAnimatedStyle(() => ({
    width: interpolate(progress.value, [0, 1], [0, CONTAINER_WIDTH], {
      extrapolateLeft: Extrapolation.CLAMP,
      extrapolateRight: Extrapolation.EXTEND,
    }),
  }));

  const animatedScrimStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 1], [0, SCRIM_OPACITY], Extrapolation.CLAMP),
  }));

  if (!visible) return null;

  const drawerContent = (
    <Animated.View
      style={[styles.container, animatedDrawerStyle, style]}
      role="navigation"
      accessibilityViewIsModal={variant === 'modal'}
      accessibilityLabel={headline ? `${headline} navigation drawer` : 'Navigation drawer'}
    >
      {/* Headline (outside scroll, stays at top) */}
      {headline && (
        <View style={styles.headlineContainer}>
          <Text variant="title" size="small" style={styles.headline} numberOfLines={1}>
            {headline}
          </Text>
        </View>
      )}

      {/* Scrollable content */}
      <NavigationDrawerProvider value={contextValue}>
        <ScrollView
          style={styles.scrollContent}
          contentContainerStyle={styles.scrollContentContainer}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {children}
        </ScrollView>
      </NavigationDrawerProvider>
    </Animated.View>
  );

  if (variant === 'modal') {
    return (
      <Modal transparent visible onRequestClose={() => setOpen(false)} statusBarTranslucent>
        {/* Scrim */}
        <Pressable
          style={StyleSheet.absoluteFillObject}
          onPress={handleScrimPress}
          accessibilityRole="button"
          accessibilityLabel="Close navigation drawer"
        >
          <Animated.View style={[styles.scrim, animatedScrimStyle, scrimStyle]} />
        </Pressable>

        {/* Drawer anchored to start edge */}
        <View style={styles.modalAnchor} pointerEvents="box-none">
          {drawerContent}
        </View>
      </Modal>
    );
  }

  // Standard variant: rendered inline
  return <View style={styles.standardWrapper}>{drawerContent}</View>;
}

// =============================================================================
// NavigationDrawerItem (pressable item — icon + label + active indicator + badge)
// =============================================================================

function NavigationDrawerItem({
  value: itemValue,
  accessibilityLabel,
  style,
  indicatorStyle,
  children,
}: NavigationDrawerItemProps) {
  const ctx = useNavigationDrawerContext();
  const active = ctx ? ctx.value === itemValue : false;

  styles.useVariants({ active });

  const selectProgress = useSharedValue(active ? 1 : 0);

  // Sync selection animation with active state
  React.useEffect(() => {
    const theme = UnistylesRuntime.getTheme();
    selectProgress.value = withTiming(active ? 1 : 0, {
      duration: theme.motion.duration.short2,
      easing: Easing.bezier(...theme.motion.easing.standard),
    });
  }, [active, selectProgress]);

  const onSelect = ctx?.onSelect;
  const handlePress = React.useCallback(() => {
    onSelect?.(itemValue);
  }, [onSelect, itemValue]);

  // Active indicator animation — scale from center
  const indicatorAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(selectProgress.value, [0, 0.3], [0, 1], Extrapolation.CLAMP),
    transform: [
      {
        scaleX: interpolate(selectProgress.value, [0, 1], [0.5, 1], Extrapolation.CLAMP),
      },
    ],
  }));

  // Slot extraction — classify children by type
  let iconEl: React.ReactNode = null;
  let labelEl: React.ReactNode = null;
  let badgeEl: React.ReactNode = null;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    if (child.type === NavigationDrawerIcon) iconEl = child;
    else if (child.type === NavigationDrawerLabel) labelEl = child;
    else if (child.type === NavigationDrawerBadge) badgeEl = child;
  });

  const drawerItemCtx = React.useMemo(() => ({ active }), [active]);

  return (
    <Pressable
      style={[styles.item, style]}
      onPress={handlePress}
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      accessibilityLabel={accessibilityLabel}
    >
      <DrawerItemProvider value={drawerItemCtx}>
        <View style={styles.itemContent}>
          {/* Active indicator background */}
          <Animated.View style={[styles.indicator, indicatorAnimatedStyle, indicatorStyle]} />
          {/* State layer */}
          <StateLayer color="onSecondaryContainer" style={styles.stateLayer} />
          {/* Content row */}
          <View style={styles.itemRow}>
            {iconEl}
            {labelEl}
            {badgeEl && <View style={styles.badgeContainer}>{badgeEl}</View>}
          </View>
        </View>
      </DrawerItemProvider>
    </Pressable>
  );
}

NavigationDrawerItem.displayName = 'NavigationDrawerItem';

// =============================================================================
// NavigationDrawerIcon (leading icon — color changes based on active state)
// =============================================================================

function NavigationDrawerIcon({ style, ...props }: NavigationDrawerIconProps) {
  const { active } = useDrawerItem();
  styles.useVariants({ active });

  return <Icon size={ICON_SIZE} style={[styles.icon, style]} {...props} />;
}

NavigationDrawerIcon.displayName = 'NavigationDrawerIcon';

// =============================================================================
// NavigationDrawerLabel (label text — color/weight changes based on active state)
// =============================================================================

function NavigationDrawerLabel({ style, ...props }: NavigationDrawerLabelProps) {
  const { active } = useDrawerItem();
  styles.useVariants({ active });

  return <Text variant="label" size="large" style={[styles.label, style]} numberOfLines={1} {...props} />;
}

NavigationDrawerLabel.displayName = 'NavigationDrawerLabel';

// =============================================================================
// NavigationDrawerBadge (trailing badge label — label large, onSurfaceVariant)
// =============================================================================

function NavigationDrawerBadge({ style, ...props }: NavigationDrawerBadgeProps) {
  return <Text variant="label" size="large" style={[styles.badge, style]} numberOfLines={1} {...props} />;
}

NavigationDrawerBadge.displayName = 'NavigationDrawerBadge';

// =============================================================================
// NavigationDrawerSectionLabel (section header — title small, onSurfaceVariant)
// =============================================================================

function NavigationDrawerSectionLabel({ style, ...props }: NavigationDrawerSectionLabelProps) {
  return (
    <View style={[styles.sectionLabelContainer, style]}>
      <Text variant="title" size="small" style={styles.sectionLabel} numberOfLines={1} {...props} />
    </View>
  );
}

NavigationDrawerSectionLabel.displayName = 'NavigationDrawerSectionLabel';

// =============================================================================
// Styles
// =============================================================================

const styles = StyleSheet.create((theme, rt) => ({
  // --- Scrim (modal only) ---
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.scheme.scrim,
  },

  // --- Modal anchor (start edge) ---
  modalAnchor: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  // --- Standard wrapper ---
  standardWrapper: {
    flexDirection: 'row',
    height: '100%',
  },

  // --- Container ---
  container: {
    height: '100%',
    overflow: 'hidden',
    paddingTop: rt.insets.top,
    paddingBottom: rt.insets.bottom,
    // Shape: 0,16,16,0dp — flat on start edge, 16dp rounded on end edge
    borderTopEndRadius: theme.shape.large,
    borderBottomEndRadius: theme.shape.large,

    variants: {
      variant: {
        standard: {
          backgroundColor: theme.scheme.surface,
          ...theme.elevation[0],
        },
        modal: {
          backgroundColor: theme.scheme.surfaceContainerLow,
          ...theme.elevation[1],
        },
      },
    },
  },

  // --- Headline ---
  headlineContainer: {
    paddingVertical: HEADLINE_VERTICAL_PADDING,
    paddingHorizontal: HEADLINE_HORIZONTAL_PADDING,
  },

  headline: {
    color: theme.scheme.onSurfaceVariant,
  },

  // --- ScrollView ---
  scrollContent: {
    flex: 1,
  },

  scrollContentContainer: {
    paddingBottom: 8,
  },

  // --- Item ---
  item: {
    paddingHorizontal: INDICATOR_PADDING,
  },

  itemContent: {
    height: INDICATOR_HEIGHT,
    width: INDICATOR_WIDTH,
    justifyContent: 'center',
  },

  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: ITEM_HORIZONTAL_PADDING - INDICATOR_PADDING,
    gap: ICON_LABEL_GAP,
    zIndex: 1,
  },

  // --- Active indicator ---
  indicator: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.scheme.secondaryContainer,
    borderRadius: theme.shape.full,
  },

  // --- State layer ---
  stateLayer: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: theme.shape.full,

    variants: {
      active: {
        true: {
          backgroundColor: theme.scheme.onSecondaryContainer,
        },
        false: {
          backgroundColor: theme.scheme.onSurface,
        },
      },
    },
  },

  // --- Icon ---
  icon: {
    zIndex: 1,

    variants: {
      active: {
        true: {
          color: theme.scheme.onSecondaryContainer,
        },
        false: {
          color: theme.scheme.onSurfaceVariant,
        },
      },
    },
  },

  // --- Label ---
  label: {
    flex: 1,
    zIndex: 1,

    variants: {
      active: {
        true: {
          color: theme.scheme.onSecondaryContainer,
          fontWeight: '700',
        },
        false: {
          color: theme.scheme.onSurfaceVariant,
          fontWeight: '500',
        },
      },
    },
  },

  // --- Badge ---
  badge: {
    color: theme.scheme.onSurfaceVariant,
    zIndex: 1,
  },

  badgeContainer: {
    marginStart: 'auto',
  },

  // --- Section label ---
  sectionLabelContainer: {
    paddingHorizontal: HEADLINE_HORIZONTAL_PADDING,
    paddingTop: 16,
    paddingBottom: 8,
  },

  sectionLabel: {
    color: theme.scheme.onSurfaceVariant,
  },
}));

// =============================================================================
// Exports
// =============================================================================

NavigationDrawer.displayName = 'NavigationDrawer';

export type {
  NavigationDrawerBadgeProps,
  NavigationDrawerIconProps,
  NavigationDrawerItemProps,
  NavigationDrawerLabelProps,
  NavigationDrawerProps,
  NavigationDrawerSectionLabelProps,
  NavigationDrawerVariant,
};
export {
  NavigationDrawer,
  NavigationDrawerBadge,
  NavigationDrawerIcon,
  NavigationDrawerItem,
  NavigationDrawerLabel,
  NavigationDrawerSectionLabel,
};
