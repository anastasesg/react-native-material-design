/// Material Design Navigation Rail
/// Overview: https://m3.material.io/components/navigation-rail/overview
/// Specs: https://m3.material.io/components/navigation-rail/specs
/// Guidelines: https://m3.material.io/components/navigation-rail/guidelines
/// Accessibility: https://m3.material.io/components/navigation-rail/accessibility

import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Pressable as RNPressable, ScrollView, View } from 'react-native';
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  type SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
import { useAnimatedTheme } from 'react-native-unistyles/reanimated';

import { useControllableState, useInteraction } from '../../hooks';
import { createComponentContext } from '../../utilities';
import { Icon, type IconProps } from './icon';
import { Text, type TextProps } from './text';

// =============================================================================
// Types
// =============================================================================

type NavigationRailMode = 'standard' | 'modal';

type NavigationRailProps = {
  /** How the expanded rail behaves: standard (inline, pushes content) or modal (overlay with scrim). */
  mode?: NavigationRailMode;
  /** Whether the rail is expanded (controlled). */
  open?: boolean;
  /** Initial expanded state (uncontrolled). Default: false. */
  defaultOpen?: boolean;
  /** Called when the expanded state changes. */
  onOpenChange?: (open: boolean) => void;
  /** Whether to show the built-in menu toggle button. Default: true. */
  showMenuButton?: boolean;
  /** Currently active item value (controlled). */
  value?: string;
  /** Initial active item value (uncontrolled). */
  defaultValue?: string;
  /** Called when the active item changes. */
  onValueChange?: (value: string) => void;
  /** Header content rendered below the menu button (FAB, etc.). */
  header?: React.ReactNode;
  /** Alignment of items within the rail. */
  alignItems?: 'top' | 'center';
  /** Width of the expanded rail. Clamped to 220-360dp. */
  expandedWidth?: number;
  /** Style applied to the rail container. */
  style?: StyleProp<ViewStyle>;
  /** Content rendered inside the rail (NavigationRailItem, NavigationRailSectionLabel). */
  children?: React.ReactNode;
};

type NavigationRailItemProps = {
  /** Value identifier for this item (used with NavigationRail context). */
  value: string;
  /** Accessibility label for the pressable. */
  accessibilityLabel?: string;
  /** Style override. */
  style?: StyleProp<ViewStyle>;
  /** Children: NavigationRailIcon, NavigationRailLabel, NavigationRailBadge. */
  children?: React.ReactNode;
};

type NavigationRailIconProps = Omit<IconProps, 'size'>;

type NavigationRailLabelProps = Omit<TextProps, 'variant' | 'size'>;

type NavigationRailBadgeProps = Omit<TextProps, 'variant' | 'size'>;

type NavigationRailSectionLabelProps = Omit<TextProps, 'variant' | 'size'> & {
  /** Style override. */
  style?: StyleProp<ViewStyle>;
};

// =============================================================================
// Context (NavigationRail -> NavigationRailItem communication)
// =============================================================================

type NavigationRailContextValue = {
  value: string | undefined;
  onSelect: (value: string) => void;
  expandProgress: SharedValue<number>;
  expandedWidth: number;
};
const [NavigationRailProvider, useNavigationRailContext] =
  createComponentContext<NavigationRailContextValue>('NavigationRail');

// NavigationRailItem → Icon/Label context
type RailItemContextValue = { active: boolean; variant: 'collapsed' | 'expanded' };
const [RailItemProvider, useRailItem] = createComponentContext<RailItemContextValue>('NavigationRailItem');

// =============================================================================
// Constants (M3 Specs)
// =============================================================================

/** Collapsed container width — md.comp.nav-rail.collapsed.container.width = 96dp */
const COLLAPSED_WIDTH = 96;

/** Expanded container width minimum — md.comp.nav-rail.expanded.container.width.minimum = 220dp */
const EXPANDED_WIDTH_MIN = 220;

/** Expanded container width maximum — md.comp.nav-rail.expanded.container.width.maximum = 360dp */
const EXPANDED_WIDTH_MAX = 360;

/** Default expanded width */
const EXPANDED_WIDTH_DEFAULT = 280;

/** Icon size — md.comp.nav-rail.item.icon.size = 24dp */
const ICON_SIZE = 24;

/** Item container height — md.comp.nav-rail.item.container.height = 64dp */
const ITEM_HEIGHT = 64;

/** Active indicator leading/trailing space — md.comp.nav-rail.item.active-indicator.leading-space = 16dp */
const INDICATOR_LEADING_SPACE = 16;

/** Header space minimum — md.comp.nav-rail.item.header-space-minimum = 40dp */
const HEADER_SPACE_MIN = 40;

/** Collapsed item vertical space — md.comp.nav-rail.collapsed.item.vertical-space = 4dp */
const COLLAPSED_ITEM_VERTICAL_SPACE = 4;

/** Collapsed top space — md.comp.nav-rail.collapsed.top-space = 44dp */
const COLLAPSED_TOP_SPACE = 44;

/** Vertical active indicator height — md.comp.nav-rail.item.vertical.active-indicator.height = 32dp */
const VERTICAL_INDICATOR_HEIGHT = 32;

/** Vertical active indicator width — md.comp.nav-rail.item.vertical.active-indicator.width = 56dp */
const VERTICAL_INDICATOR_WIDTH = 56;

/** Vertical icon-label space — md.comp.nav-rail.item.vertical.icon-label-space = 4dp */
const VERTICAL_ICON_LABEL_SPACE = 4;

/** Horizontal active indicator height — md.comp.nav-rail.item.horizontal.active-indicator.height = 56dp */
const HORIZONTAL_INDICATOR_HEIGHT = 56;

/** Horizontal full width leading space — md.comp.nav-rail.item.horizontal.full-width.leading-space = 16dp */
const HORIZONTAL_LEADING_SPACE = 16;

/** Horizontal icon-label space — md.comp.nav-rail.item.horizontal.icon-label-space = 8dp */
const HORIZONTAL_ICON_LABEL_SPACE = 8;

/** Scrim opacity — matching NavigationDrawer pattern (0.32) */
const SCRIM_OPACITY = 0.32;

/** Menu button size */
const MENU_BUTTON_SIZE = 48;

// --- Collapsed item positions (derived from spec constants) ---
const COLLAPSED_LABEL_LINE_HEIGHT = 21.3;
const COLLAPSED_CONTENT_HEIGHT = VERTICAL_INDICATOR_HEIGHT + VERTICAL_ICON_LABEL_SPACE + COLLAPSED_LABEL_LINE_HEIGHT;
const COLLAPSED_CONTENT_TOP = (ITEM_HEIGHT - COLLAPSED_CONTENT_HEIGHT) / 2;

/** Indicator: centered in collapsed width */
const C_IND_LEFT = (COLLAPSED_WIDTH - VERTICAL_INDICATOR_WIDTH) / 2;
const C_IND_TOP = COLLAPSED_CONTENT_TOP;

/** Icon: centered in indicator */
const C_ICON_LEFT = C_IND_LEFT + (VERTICAL_INDICATOR_WIDTH - ICON_SIZE) / 2;
const C_ICON_TOP = C_IND_TOP + (VERTICAL_INDICATOR_HEIGHT - ICON_SIZE) / 2;

/** Label: below indicator + gap, full width, centered text */
const C_LABEL_TOP = COLLAPSED_CONTENT_TOP + VERTICAL_INDICATOR_HEIGHT + VERTICAL_ICON_LABEL_SPACE;

// --- Expanded item positions ---
const EXPANDED_LABEL_LINE_HEIGHT = 26.7;

/** Indicator: full width with padding, vertically centered */
const E_IND_LEFT = HORIZONTAL_LEADING_SPACE;
const E_IND_TOP = (ITEM_HEIGHT - HORIZONTAL_INDICATOR_HEIGHT) / 2;

/** Icon: after leading + indicator padding, vertically centered */
const E_ICON_LEFT = HORIZONTAL_LEADING_SPACE + INDICATOR_LEADING_SPACE;
const E_ICON_TOP = (ITEM_HEIGHT - ICON_SIZE) / 2;

/** Label: beside icon, vertically centered */
const E_LABEL_LEFT = E_ICON_LEFT + ICON_SIZE + HORIZONTAL_ICON_LABEL_SPACE;
const E_LABEL_TOP = (ITEM_HEIGHT - EXPANDED_LABEL_LINE_HEIGHT) / 2;

/** Badge collapsed: top-right of indicator */
const C_BADGE_LEFT = C_IND_LEFT + VERTICAL_INDICATOR_WIDTH - 10;
const C_BADGE_TOP = C_IND_TOP - 2;

/** Badge expanded: right side of indicator, vertically centered */
const E_BADGE_TOP = (ITEM_HEIGHT - 16) / 2;

// --- Transform deltas (collapsed → expanded, for GPU-accelerated animation) ---
const ICON_DX = E_ICON_LEFT - C_ICON_LEFT;
const ICON_DY = E_ICON_TOP - C_ICON_TOP;
const IND_DX = E_IND_LEFT - C_IND_LEFT;
const IND_DY = E_IND_TOP - C_IND_TOP;

// =============================================================================
// NavigationRail (container — manages active item + collapsed/expanded state)
// =============================================================================

function NavigationRail({
  mode = 'standard',
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  showMenuButton = true,
  value: valueProp,
  defaultValue,
  onValueChange,
  header,
  alignItems = 'top',
  expandedWidth: expandedWidthProp,
  style,
  children,
}: NavigationRailProps) {
  // Expanded width clamped to spec range
  const clampedExpandedWidth = React.useMemo(() => {
    if (expandedWidthProp === undefined) return EXPANDED_WIDTH_DEFAULT;
    return Math.max(EXPANDED_WIDTH_MIN, Math.min(EXPANDED_WIDTH_MAX, expandedWidthProp));
  }, [expandedWidthProp]);

  const isModal = mode === 'modal';

  // --- Controlled/uncontrolled open (expanded) state ---
  const [open, setOpen] = useControllableState({
    value: openProp,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  const toggleOpen = React.useCallback(() => {
    setOpen((prev) => !prev);
  }, [setOpen]);

  // --- Controlled/uncontrolled value state ---
  const [value, handleSelect] = useControllableState({
    value: valueProp,
    defaultValue: defaultValue ?? '',
    onChange: onValueChange,
  });

  // --- Expand progress: 0 = collapsed, 1 = expanded ---
  const expandProgress = useSharedValue(open && !isModal ? 1 : 0);

  // Context for items
  const ctx = React.useMemo<NavigationRailContextValue>(
    () => ({ value, onSelect: handleSelect, expandProgress, expandedWidth: clampedExpandedWidth }),
    [value, handleSelect, expandProgress, clampedExpandedWidth],
  );

  // --- Width animation (driven by expandProgress) ---
  const widthStyle = useAnimatedStyle(() => ({
    width: interpolate(expandProgress.value, [0, 1], [COLLAPSED_WIDTH, clampedExpandedWidth]),
  }));

  // --- Menu icon cross-fade ---
  const menuClosedOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(expandProgress.value, [0, 0.5], [1, 0], Extrapolation.CLAMP),
  }));

  const menuOpenOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(expandProgress.value, [0.5, 1], [0, 1], Extrapolation.CLAMP),
  }));

  // --- Standard mode: animate expandProgress ---
  React.useEffect(() => {
    if (isModal) return;

    const { fastEffects } = UnistylesRuntime.getTheme().motion.spring;
    expandProgress.value = withSpring(open ? 1 : 0, fastEffects);
  }, [open, isModal, expandProgress]);

  // --- Modal mode: uses same expandProgress as standard, no mount/unmount ---
  const modalExpandProgress = useSharedValue(0);

  const modalCtx = React.useMemo<NavigationRailContextValue>(
    () => ({
      value,
      onSelect: handleSelect,
      expandProgress: modalExpandProgress,
      expandedWidth: clampedExpandedWidth,
    }),
    [value, handleSelect, modalExpandProgress, clampedExpandedWidth],
  );

  const modalWidthStyle = useAnimatedStyle(() => ({
    width: interpolate(modalExpandProgress.value, [0, 1], [COLLAPSED_WIDTH, clampedExpandedWidth]),
  }));

  const modalScrimStyle = useAnimatedStyle(() => ({
    opacity: interpolate(modalExpandProgress.value, [0, 1], [0, SCRIM_OPACITY]),
  }));

  // Hide the entire overlay when fully collapsed so the modal bg doesn't show through
  const modalOverlayOpacity = useAnimatedStyle(() => ({
    opacity: modalExpandProgress.value === 0 ? 0 : 1,
  }));

  const modalMenuClosedOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(modalExpandProgress.value, [0, 0.5], [1, 0], Extrapolation.CLAMP),
  }));

  const modalMenuOpenOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(modalExpandProgress.value, [0.5, 1], [0, 1], Extrapolation.CLAMP),
  }));

  // Modal expand/collapse: no mount/unmount, just animate the shared value
  React.useEffect(() => {
    if (!isModal) return;

    const { fastEffects } = UnistylesRuntime.getTheme().motion.spring;
    modalExpandProgress.value = withSpring(open ? 1 : 0, fastEffects);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const closeModal = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  // --- Shared render helpers ---
  const renderMenuButton = (
    closedStyle: ReturnType<typeof useAnimatedStyle>,
    openStyle: ReturnType<typeof useAnimatedStyle>,
  ) =>
    showMenuButton ? (
      <RNPressable
        onPress={toggleOpen}
        style={styles.menuButton}
        accessibilityRole="button"
        accessibilityLabel={open ? 'Collapse navigation rail' : 'Expand navigation rail'}
      >
        <Animated.View style={[styles.menuIconLayer, closedStyle]}>
          <Icon name="menu" size={ICON_SIZE} style={styles.menuIcon} />
        </Animated.View>
        <Animated.View style={[styles.menuIconLayer, openStyle]}>
          <Icon name="menu_open" size={ICON_SIZE} style={styles.menuIcon} />
        </Animated.View>
      </RNPressable>
    ) : null;

  const renderHeader = (
    closedStyle: ReturnType<typeof useAnimatedStyle>,
    openStyle: ReturnType<typeof useAnimatedStyle>,
  ) => (
    <View style={[styles.headerBase, open ? styles.headerExpanded : styles.headerCollapsed]}>
      {renderMenuButton(closedStyle, openStyle)}
      {header}
    </View>
  );

  const renderBody = (context: NavigationRailContextValue) => (
    <NavigationRailProvider value={context}>
      <ScrollView
        style={styles.scrollContent}
        contentContainerStyle={[styles.scrollContentBase, alignItems === 'center' && styles.scrollContentCenter]}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {children}
      </ScrollView>
    </NavigationRailProvider>
  );

  // ==========================================================================
  // Standard mode: inline rail, animated width
  // ==========================================================================

  if (!isModal) {
    return (
      <Animated.View
        style={[styles.containerBase, styles.containerStandard, widthStyle, style]}
        role="navigation"
        accessibilityLabel="Navigation rail"
      >
        {renderHeader(menuClosedOpacity, menuOpenOpacity)}
        {renderBody(ctx)}
      </Animated.View>
    );
  }

  // ==========================================================================
  // Modal mode: collapsed rail inline + expanding rail as absolute overlay
  // ==========================================================================

  return (
    <>
      {/* Always-visible collapsed rail (offsets content by 96dp) */}
      <View
        style={[styles.containerBase, styles.containerStandard, { width: COLLAPSED_WIDTH }, style]}
        role="navigation"
        accessibilityLabel="Navigation rail"
      >
        {renderHeader(menuClosedOpacity, menuOpenOpacity)}
        {renderBody(ctx)}
      </View>

      {/* Modal overlay — always mounted, hidden when collapsed via opacity */}
      <Animated.View style={[styles.modalOverlay, modalOverlayOpacity]} pointerEvents={open ? 'auto' : 'none'}>
        <RNPressable
          style={StyleSheet.absoluteFillObject}
          onPress={closeModal}
          disabled={!open}
          accessibilityRole="button"
          accessibilityLabel="Close navigation rail"
        >
          <Animated.View style={[styles.scrim, modalScrimStyle]} />
        </RNPressable>

        <View style={styles.modalAnchor} pointerEvents="box-none">
          <Animated.View
            style={[styles.containerBase, styles.containerModal, modalWidthStyle]}
            role="navigation"
            accessibilityLabel="Navigation rail expanded"
          >
            {renderHeader(modalMenuClosedOpacity, modalMenuOpenOpacity)}
            {renderBody(modalCtx)}
          </Animated.View>
        </View>
      </Animated.View>
    </>
  );
}

// =============================================================================
// NavigationRailItem (pressable — spatially animates between collapsed/expanded)
// =============================================================================

const ZERO_PROGRESS = { value: 0 } as SharedValue<number>;

function NavigationRailItem({ value: itemValue, accessibilityLabel, style, children }: NavigationRailItemProps) {
  const ctx = useNavigationRailContext();
  const expandProgress = ctx?.expandProgress ?? ZERO_PROGRESS;
  const ew = ctx?.expandedWidth ?? EXPANDED_WIDTH_DEFAULT;
  const active = ctx ? ctx.value === itemValue : false;

  const { progress, handlers } = useInteraction('press');
  const selectProgress = useSharedValue(active ? 1 : 0);
  const animatedTheme = useAnimatedTheme();

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

  // --- Shared derived values: indicator dimensions (computed once, shared by indicator + state layer) ---
  const indW = useDerivedValue(() =>
    interpolate(expandProgress.value, [0, 1], [VERTICAL_INDICATOR_WIDTH, ew - 2 * HORIZONTAL_LEADING_SPACE]));
  const indH = useDerivedValue(() =>
    interpolate(expandProgress.value, [0, 1], [VERTICAL_INDICATOR_HEIGHT, HORIZONTAL_INDICATOR_HEIGHT]));

  // --- Indicator: transform position + layout size + selection ---
  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: expandProgress.value * IND_DX },
      { translateY: expandProgress.value * IND_DY },
      { scaleX: interpolate(selectProgress.value, [0, 1], [0.5, 1], Extrapolation.CLAMP) },
    ],
    width: indW.value,
    height: indH.value,
    opacity: interpolate(selectProgress.value, [0, 0.3], [0, 1], Extrapolation.CLAMP),
  }));

  // --- State layer: same shape as indicator, press opacity ---
  const stateLayerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: expandProgress.value * IND_DX }, { translateY: expandProgress.value * IND_DY }],
    width: indW.value,
    height: indH.value,
    opacity: interpolate(progress.press.value, [0, 1], [0, animatedTheme.value.state.pressed], Extrapolation.CLAMP),
    backgroundColor: active ? animatedTheme.value.scheme.onSecondaryContainer : animatedTheme.value.scheme.onSurface,
  }));

  // --- Icon: pure GPU transform (no layout animation) ---
  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: expandProgress.value * ICON_DX }, { translateY: expandProgress.value * ICON_DY }],
  }));

  // --- Label cross-fades (opacity only — positions are static) ---
  const collapsedLabelOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(expandProgress.value, [0.3, 0.6], [1, 0], Extrapolation.CLAMP),
  }));

  const expandedLabelOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(expandProgress.value, [0.4, 0.7], [0, 1], Extrapolation.CLAMP),
  }));

  // --- Badge cross-fades (opacity only) ---
  const collapsedBadgeOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(expandProgress.value, [0, 0.3], [1, 0], Extrapolation.CLAMP),
  }));

  const expandedBadgeOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(expandProgress.value, [0.7, 1], [0, 1], Extrapolation.CLAMP),
  }));

  // --- Slot extraction ---
  let iconChild: React.ReactElement | null = null;
  let labelChild: React.ReactElement | null = null;
  let badgeChild: React.ReactElement | null = null;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    if (child.type === NavigationRailIcon) iconChild = child;
    else if (child.type === NavigationRailLabel) labelChild = child;
    else if (child.type === NavigationRailBadge) badgeChild = child;
  });

  // Outer provider: collapsed variant (icon + collapsed label read this).
  // Expanded label gets a nested provider override.
  const collapsedCtx = React.useMemo(() => ({ active, variant: 'collapsed' as const }), [active]);
  const expandedCtx = React.useMemo(() => ({ active, variant: 'expanded' as const }), [active]);

  const expandedLabelWidth = ew - E_LABEL_LEFT - (HORIZONTAL_LEADING_SPACE + INDICATOR_LEADING_SPACE);

  return (
    <RNPressable
      style={[styles.itemContainer, style]}
      onPress={handlePress}
      {...handlers}
      accessibilityRole="tab"
      accessibilityState={{ selected: active }}
      accessibilityLabel={accessibilityLabel}
    >
      <RailItemProvider value={collapsedCtx}>
        {/* Active indicator (transform position + layout size) */}
        <Animated.View style={[styles.indicatorBase, styles.indicatorPos, indicatorStyle]} />

        {/* State layer (same shape, press opacity) */}
        <Animated.View style={[styles.stateLayerBase, styles.indicatorPos, stateLayerStyle]} />

        {/* Icon (pure GPU transform from collapsed position) */}
        <Animated.View style={[styles.iconPos, iconStyle]}>{iconChild}</Animated.View>

        {/* Collapsed label (static position, fades out) */}
        <Animated.View style={[styles.collapsedLabelPos, collapsedLabelOpacity]}>{labelChild}</Animated.View>

        {/* Expanded label (static position, fades in — nested provider overrides variant) */}
        <Animated.View style={[styles.expandedLabelPos, { width: expandedLabelWidth }, expandedLabelOpacity]}>
          <RailItemProvider value={expandedCtx}>{labelChild && React.cloneElement(labelChild)}</RailItemProvider>
        </Animated.View>

        {/* Badge: collapsed position */}
        {badgeChild && (
          <Animated.View style={[styles.badgeCollapsed, collapsedBadgeOpacity]}>{badgeChild}</Animated.View>
        )}

        {/* Badge: expanded position */}
        {badgeChild && (
          <Animated.View style={[styles.badgeExpanded, expandedBadgeOpacity]}>
            {React.cloneElement(badgeChild)}
          </Animated.View>
        )}
      </RailItemProvider>
    </RNPressable>
  );
}

NavigationRailItem.displayName = 'NavigationRailItem';

// =============================================================================
// NavigationRailIcon (icon — color changes based on active state)
// =============================================================================

function NavigationRailIcon({ style, ...props }: NavigationRailIconProps) {
  const { active } = useRailItem();
  styles.useVariants({ active });

  return <Icon size={ICON_SIZE} style={[styles.icon, style]} {...props} />;
}

NavigationRailIcon.displayName = 'NavigationRailIcon';

// =============================================================================
// NavigationRailLabel (label text — color/font changes based on active state + variant)
// =============================================================================

function NavigationRailLabel({ style, ...props }: NavigationRailLabelProps) {
  const { active, variant: railVariant } = useRailItem();
  styles.useVariants({ active, railVariant });

  return <Text style={[styles.label, style]} numberOfLines={1} {...props} />;
}

NavigationRailLabel.displayName = 'NavigationRailLabel';

// =============================================================================
// NavigationRailBadge (badge label — error color)
// =============================================================================

function NavigationRailBadge({ style, ...props }: NavigationRailBadgeProps) {
  return <Text variant="label" size="small" style={[styles.badge, style]} numberOfLines={1} {...props} />;
}

NavigationRailBadge.displayName = 'NavigationRailBadge';

// =============================================================================
// NavigationRailSectionLabel (section header — expanded variant only)
// =============================================================================

function NavigationRailSectionLabel({ style, ...props }: NavigationRailSectionLabelProps) {
  return (
    <View style={[styles.sectionLabelContainer, style]}>
      <Text variant="title" size="small" style={styles.sectionLabel} numberOfLines={1} {...props} />
    </View>
  );
}

NavigationRailSectionLabel.displayName = 'NavigationRailSectionLabel';

// =============================================================================
// Styles
// =============================================================================

const styles = StyleSheet.create((theme, rt) => ({
  // --- Scrim (modal only) ---
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.scheme.scrim,
  },

  // --- Modal overlay (absolute, covers parent container) ---
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },

  // --- Modal anchor (start edge) ---
  modalAnchor: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  // --- Container ---
  containerBase: {
    height: '100%',
    overflow: 'hidden',
    paddingTop: rt.insets.top,
    paddingBottom: rt.insets.bottom,
  },

  containerStandard: {
    backgroundColor: theme.scheme.surface,
    ...theme.elevation[0],
  },

  containerModal: {
    borderTopStartRadius: 0,
    borderBottomStartRadius: 0,
    borderTopEndRadius: 16,
    borderBottomEndRadius: 16,
    backgroundColor: theme.scheme.surfaceContainer,
    ...theme.elevation[3],
  },

  // --- Menu button ---
  menuButton: {
    width: MENU_BUTTON_SIZE,
    height: MENU_BUTTON_SIZE,
    borderRadius: theme.shape.full,
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuIconLayer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuIcon: {
    color: theme.scheme.onSurfaceVariant,
  },

  // --- Header ---
  headerBase: {
    alignItems: 'center',
    minHeight: HEADER_SPACE_MIN,
    paddingHorizontal: INDICATOR_LEADING_SPACE,
    paddingTop: COLLAPSED_TOP_SPACE,
  },

  headerCollapsed: {
    alignItems: 'center',
  },

  headerExpanded: {
    alignItems: 'flex-start',
  },

  // --- ScrollView ---
  scrollContent: {
    flex: 1,
  },

  scrollContentBase: {
    paddingTop: HEADER_SPACE_MIN,
    paddingBottom: 8,
    gap: COLLAPSED_ITEM_VERTICAL_SPACE,
  },

  scrollContentCenter: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  // --- Item container ---
  itemContainer: {
    height: ITEM_HEIGHT,
  },

  // --- Indicator + state layer: static collapsed position, animated via transform ---
  indicatorPos: {
    position: 'absolute',
    left: C_IND_LEFT,
    top: C_IND_TOP,
  },

  indicatorBase: {
    backgroundColor: theme.scheme.secondaryContainer,
    borderRadius: 100, // Capped pill — avoids iOS borderRadius animation glitches
  },

  stateLayerBase: {
    borderRadius: 100,
  },

  // --- Icon: static collapsed position, animated via GPU transform ---
  iconPos: {
    position: 'absolute',
    left: C_ICON_LEFT,
    top: C_ICON_TOP,
    zIndex: 1,
  },

  // --- Labels: static positions, opacity-only cross-fade ---
  collapsedLabelPos: {
    position: 'absolute',
    left: 0,
    top: C_LABEL_TOP,
    width: COLLAPSED_WIDTH,
    overflow: 'hidden',
    zIndex: 1,
  },

  expandedLabelPos: {
    position: 'absolute',
    left: E_LABEL_LEFT,
    top: E_LABEL_TOP,
    overflow: 'hidden',
    zIndex: 1,
  },

  // --- Badge positions ---
  badgeCollapsed: {
    position: 'absolute',
    left: C_BADGE_LEFT,
    top: C_BADGE_TOP,
    minWidth: 16,
    height: 16,
    borderRadius: theme.shape.full,
    backgroundColor: theme.scheme.error,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
    zIndex: 2,
  },

  badgeExpanded: {
    position: 'absolute',
    right: HORIZONTAL_LEADING_SPACE + INDICATOR_LEADING_SPACE,
    top: E_BADGE_TOP,
    minWidth: 16,
    height: 16,
    borderRadius: theme.shape.full,
    backgroundColor: theme.scheme.error,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
    zIndex: 2,
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
    zIndex: 1,
    textAlign: 'center',

    variants: {
      active: {
        true: {
          color: theme.scheme.secondary,
          fontWeight: '500',
        },
        false: {
          color: theme.scheme.onSurfaceVariant,
          fontWeight: '500',
        },
      },
      railVariant: {
        collapsed: {
          ...theme.typography.label.large,
        },
        expanded: {
          ...theme.typography.title.medium,
          textAlign: 'left',
        },
      },
    },
  },

  // --- Badge text ---
  badge: {
    color: theme.scheme.onError,
    zIndex: 1,
  },

  // --- Section label ---
  sectionLabelContainer: {
    paddingHorizontal: HORIZONTAL_LEADING_SPACE + INDICATOR_LEADING_SPACE,
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

NavigationRail.displayName = 'NavigationRail';

export type {
  NavigationRailBadgeProps,
  NavigationRailIconProps,
  NavigationRailItemProps,
  NavigationRailLabelProps,
  NavigationRailMode,
  NavigationRailProps,
  NavigationRailSectionLabelProps,
};
export {
  NavigationRail,
  NavigationRailBadge,
  NavigationRailIcon,
  NavigationRailItem,
  NavigationRailLabel,
  NavigationRailSectionLabel,
};
