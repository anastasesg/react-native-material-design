/// Material Design Tabs
/// Overview: https://m3.material.io/components/tabs/overview
/// Specs: https://m3.material.io/components/tabs/specs
/// Guidelines: https://m3.material.io/components/tabs/guidelines
/// Accessibility: https://m3.material.io/components/tabs/accessibility

import React from 'react';
import type { LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native';
import { Pressable as RNPressable, ScrollView, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
import { useAnimatedTheme } from 'react-native-unistyles/reanimated';

import { useControllableState, useInteraction } from '../../hooks';
import { getDisplayName } from '../../utilities';
import { Icon, type IconProps } from './icon';
import { Text, type TextProps } from './text';

// =============================================================================
// Types
// =============================================================================

type TabVariant = 'primary' | 'secondary';

type TabsProps = {
  /** Currently active tab value (controlled). */
  value?: string;
  /** Initial active tab value (uncontrolled). */
  defaultValue?: string;
  /** Called when the active tab changes. */
  onValueChange?: (value: string) => void;
  /** Tab style variant. */
  variant?: TabVariant;
  /** Whether tabs scroll horizontally instead of being fixed-width. */
  scrollable?: boolean;

  style?: StyleProp<ViewStyle>;
  /** Style applied to the active indicator bar. */
  indicatorStyle?: StyleProp<ViewStyle>;
  /** Style applied to the bottom divider line. */
  dividerStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

type TabProps = {
  /** Value identifier for this tab (used with Tabs context). */
  value: string;
  /** Accessibility label for the pressable. */
  accessibilityLabel?: string;

  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

type TabIconProps = Omit<IconProps, 'size'> & {
  /** @internal Injected by parent Tab. */
  __internal__tabActive?: boolean;
  /** @internal Injected by parent Tab. */
  __internal__tabVariant?: TabVariant;
};

type TabLabelProps = Omit<TextProps, 'variant' | 'size'> & {
  /** @internal Injected by parent Tab. */
  __internal__tabActive?: boolean;
  /** @internal Injected by parent Tab. */
  __internal__tabVariant?: TabVariant;
};

// =============================================================================
// Context (for Tabs -> Tab communication)
// =============================================================================

type TabLayout = { x: number; width: number };

type TabsContextValue = {
  value: string | undefined;
  onSelect: (value: string) => void;
  variant: TabVariant;
  scrollable: boolean;
  registerLayout: (value: string, layout: TabLayout) => void;
};

const TabsContext = React.createContext<TabsContextValue | null>(null);

// =============================================================================
// Constants (M3 Specs)
// =============================================================================

/** Container height — label text only — 48dp */
const CONTAINER_HEIGHT_LABEL = 48;

/** Container height — icon and label text (primary only) — 64dp */
const CONTAINER_HEIGHT_ICON_LABEL = 64;

/** Icon size — 24dp */
const ICON_SIZE = 24;

/** Divider height — 1dp */
const DIVIDER_HEIGHT = 1;

/** Primary active indicator height — 3dp */
const PRIMARY_INDICATOR_HEIGHT = 3;

/** Secondary active indicator height — 2dp */
const SECONDARY_INDICATOR_HEIGHT = 2;

/** Primary active indicator inset — 2dp each side */
const PRIMARY_INDICATOR_INSET = 2;

/** Active indicator shape — top corners fully rounded (3,3,0,0) */
const INDICATOR_BORDER_RADIUS_TOP = 3;

/** Padding between inline icon and text (secondary) — 8dp */
const INLINE_ICON_TEXT_GAP = 8;

/** Scrollable first tab offset — 52dp */
const SCROLLABLE_START_OFFSET = 52;

// =============================================================================
// Tabs (container — manages active tab via context, renders divider + indicator)
// =============================================================================

function Tabs({
  value: valueProp,
  defaultValue,
  onValueChange,
  variant = 'primary',
  scrollable = false,
  style,
  indicatorStyle,
  dividerStyle,
  children,
}: TabsProps) {
  const [value, setValue] = useControllableState({
    value: valueProp,
    defaultValue: defaultValue ?? '',
    onChange: onValueChange,
  });

  // Track tab layouts for indicator animation
  const tabLayoutsRef = React.useRef<Map<string, TabLayout>>(new Map());
  const valueRef = React.useRef(value);
  React.useEffect(() => {
    valueRef.current = value;
  }, [value]);
  const indicatorX = useSharedValue(0);
  const indicatorWidth = useSharedValue(0);
  const indicatorReady = useSharedValue(0);

  const registerLayout = React.useCallback((tabValue: string, layout: TabLayout) => {
    tabLayoutsRef.current.set(tabValue, layout);
    // If this is the active tab, update indicator position
    if (tabValue === valueRef.current) {
      const { fastSpatial } = UnistylesRuntime.getTheme().motion.spring;
      const inset = variant === 'primary' ? PRIMARY_INDICATOR_INSET : 0;
      if (indicatorReady.value === 0) {
        // First mount — snap without animation
        indicatorX.value = layout.x + inset;
        indicatorWidth.value = layout.width - inset * 2;
        indicatorReady.value = 1;
      } else {
        indicatorX.value = withSpring(layout.x + inset, fastSpatial);
        indicatorWidth.value = withSpring(layout.width - inset * 2, fastSpatial);
      }
    }
  }, [variant, indicatorX, indicatorWidth, indicatorReady]);

  // Animate indicator when value changes (skip first mount — registerLayout handles it)
  React.useEffect(() => {
    if (!value) return;
    if (indicatorReady.value === 0) return;
    const layout = tabLayoutsRef.current.get(value);
    if (!layout) return;

    const { fastSpatial } = UnistylesRuntime.getTheme().motion.spring;
    const inset = variant === 'primary' ? PRIMARY_INDICATOR_INSET : 0;
    indicatorX.value = withSpring(layout.x + inset, fastSpatial);
    indicatorWidth.value = withSpring(layout.width - inset * 2, fastSpatial);
  }, [value, variant, indicatorX, indicatorWidth, indicatorReady]);

  const contextValue = React.useMemo<TabsContextValue>(
    () => ({ value, onSelect: setValue, variant, scrollable, registerLayout }),
    [value, setValue, variant, scrollable, registerLayout],
  );

  const indicatorHeight = variant === 'primary' ? PRIMARY_INDICATOR_HEIGHT : SECONDARY_INDICATOR_HEIGHT;

  const indicatorAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorX.value }],
    width: indicatorWidth.value,
    opacity: indicatorReady.value,
  }));

  const content = (
    <>
      {children}
      {/* Active indicator — positioned absolutely at bottom */}
      <Animated.View
        style={[
          styles.activeIndicator,
          {
            height: indicatorHeight,
            borderTopLeftRadius: INDICATOR_BORDER_RADIUS_TOP,
            borderTopRightRadius: INDICATOR_BORDER_RADIUS_TOP,
          },
          indicatorAnimatedStyle,
          indicatorStyle,
        ]}
      />
      {/* Divider — full width at the very bottom */}
      <View style={[styles.divider, dividerStyle]} />
    </>
  );

  if (scrollable) {
    return (
      <TabsContext.Provider value={contextValue}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          accessibilityRole="tablist"
          style={[styles.container, style]}
          contentContainerStyle={styles.scrollContent}
        >
          {content}
        </ScrollView>
      </TabsContext.Provider>
    );
  }

  return (
    <TabsContext.Provider value={contextValue}>
      <View accessibilityRole="tablist" style={[styles.container, style]}>
        {content}
      </View>
    </TabsContext.Provider>
  );
}

// =============================================================================
// Tab (individual tab item — pressable with state layer)
// =============================================================================

function Tab({ value: tabValue, accessibilityLabel, style, children }: TabProps) {
  const ctx = React.useContext(TabsContext);
  const variant = ctx?.variant ?? 'primary';
  const scrollable = ctx?.scrollable ?? false;
  const active = ctx ? ctx.value === tabValue : false;

  // Detect if children include an icon (for primary height determination)
  let hasIcon = false;
  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    const displayName = getDisplayName(child);
    if (displayName === 'TabIcon') hasIcon = true;
  });

  const isPrimaryWithIcon = variant === 'primary' && hasIcon;

  // useVariants after useContext
  styles.useVariants({ variant, scrollable });

  const { progress, handlers } = useInteraction('press');
  const animatedTheme = useAnimatedTheme();

  const onSelect = ctx?.onSelect;
  const handlePress = React.useCallback(() => {
    onSelect?.(tabValue);
  }, [onSelect, tabValue]);

  // State layer opacity
  const stateLayerAnimatedStyle = useAnimatedStyle(() => {
    const theme = animatedTheme.value;
    return {
      opacity: interpolate(progress.press.value, [0, 1], [0, theme.state.pressed], Extrapolation.CLAMP),
    };
  });

  // Register this tab's layout for indicator positioning
  const registerLayout = ctx?.registerLayout;
  const handleLayout = React.useCallback((e: LayoutChangeEvent) => {
    const { x, width } = e.nativeEvent.layout;
    registerLayout?.(tabValue, { x, width });
  }, [registerLayout, tabValue]);

  // Clone children with __internal__ props
  const clonedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    const displayName = getDisplayName(child);
    if (displayName === 'TabIcon' || displayName === 'TabLabel') {
      return React.cloneElement(child, {
        __internal__tabActive: active,
        __internal__tabVariant: variant,
      } as any);
    }
    return child;
  });

  // Determine state layer color based on variant and active state
  // Primary active: primary, Primary inactive: onSurface
  // Secondary (all): onSurface
  const stateLayerVariantStyle =
    variant === 'primary' && active ? styles.stateLayerPrimaryActive : styles.stateLayerDefault;

  return (
    <RNPressable
      style={[styles.tab, { height: isPrimaryWithIcon ? CONTAINER_HEIGHT_ICON_LABEL : CONTAINER_HEIGHT_LABEL }, style]}
      onPress={handlePress}
      {...handlers}
      onLayout={handleLayout}
      accessibilityRole="tab"
      accessibilityState={{ selected: active }}
      accessibilityLabel={accessibilityLabel}
    >
      <View style={[styles.tabContent, variant === 'primary' ? styles.tabContentPrimary : styles.tabContentSecondary]}>
        {clonedChildren}
      </View>
      <Animated.View style={[styles.stateLayer, stateLayerVariantStyle, stateLayerAnimatedStyle]} />
    </RNPressable>
  );
}

Tab.displayName = 'Tab';

// =============================================================================
// TabIcon (icon — color changes based on active state and variant)
// =============================================================================

function TabIcon({ __internal__tabActive = false, __internal__tabVariant = 'primary', style, ...props }: TabIconProps) {
  styles.useVariants({ active: __internal__tabActive, variant: __internal__tabVariant });

  return <Icon size={ICON_SIZE} style={[styles.icon, style]} {...props} />;
}

TabIcon.displayName = 'TabIcon';

// =============================================================================
// TabLabel (label text — color changes based on active state and variant)
// =============================================================================

function TabLabel({
  __internal__tabActive = false,
  __internal__tabVariant = 'primary',
  style,
  ...props
}: TabLabelProps) {
  styles.useVariants({ active: __internal__tabActive, variant: __internal__tabVariant });

  return <Text variant="title" size="small" style={[styles.label, style]} numberOfLines={1} {...props} />;
}

TabLabel.displayName = 'TabLabel';

// =============================================================================
// Styles
// =============================================================================

const styles = StyleSheet.create((theme) => ({
  // --- Container ---
  container: {
    flexDirection: 'row',
    backgroundColor: theme.scheme.surface,
    position: 'relative',
  },

  scrollContent: {
    paddingStart: SCROLLABLE_START_OFFSET,
  },

  // --- Active indicator ---
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: theme.scheme.primary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  // --- Divider ---
  divider: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: DIVIDER_HEIGHT,
    backgroundColor: theme.scheme.outlineVariant,
  },

  // --- Tab ---
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

    variants: {
      scrollable: {
        true: {
          paddingHorizontal: 24,
        },
        false: {
          flex: 1,
        },
      },
      variant: {
        primary: {},
        secondary: {},
      },
    },
  },

  // --- Tab content ---
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabContentPrimary: {
    flexDirection: 'column',
  },

  tabContentSecondary: {
    flexDirection: 'row',
    gap: INLINE_ICON_TEXT_GAP,
  },

  // --- State layer ---
  stateLayer: {
    ...StyleSheet.absoluteFillObject,
  },

  stateLayerPrimaryActive: {
    backgroundColor: theme.scheme.primary,
  },

  stateLayerDefault: {
    backgroundColor: theme.scheme.onSurface,
  },

  // --- Icon ---
  icon: {
    zIndex: 1,

    variants: {
      variant: {
        primary: {},
        secondary: {},
      },
      active: {
        true: {},
        false: {},
      },
    },
    compoundVariants: [
      // Primary active: primary
      {
        variant: 'primary',
        active: true,
        styles: { color: theme.scheme.primary },
      },
      // Primary inactive: onSurfaceVariant
      {
        variant: 'primary',
        active: false,
        styles: { color: theme.scheme.onSurfaceVariant },
      },
      // Secondary active: onSurface
      {
        variant: 'secondary',
        active: true,
        styles: { color: theme.scheme.onSurface },
      },
      // Secondary inactive: onSurfaceVariant
      {
        variant: 'secondary',
        active: false,
        styles: { color: theme.scheme.onSurfaceVariant },
      },
    ],
  },

  // --- Label ---
  label: {
    zIndex: 1,
    textAlign: 'center',

    variants: {
      variant: {
        primary: {},
        secondary: {},
      },
      active: {
        true: {},
        false: {},
      },
    },
    compoundVariants: [
      // Primary active: primary
      {
        variant: 'primary',
        active: true,
        styles: { color: theme.scheme.primary },
      },
      // Primary inactive: onSurfaceVariant
      {
        variant: 'primary',
        active: false,
        styles: { color: theme.scheme.onSurfaceVariant },
      },
      // Secondary active: onSurface
      {
        variant: 'secondary',
        active: true,
        styles: { color: theme.scheme.onSurface },
      },
      // Secondary inactive: onSurfaceVariant
      {
        variant: 'secondary',
        active: false,
        styles: { color: theme.scheme.onSurfaceVariant },
      },
    ],
  },
}));

// =============================================================================
// Exports
// =============================================================================

Tabs.displayName = 'Tabs';

export type { TabIconProps, TabLabelProps, TabProps, TabsProps, TabVariant };
export { Tab, TabIcon, TabLabel, Tabs };
