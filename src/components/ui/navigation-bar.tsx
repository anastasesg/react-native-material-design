/// Material Design Navigation Bar
/// Overview: https://m3.material.io/components/navigation-bar/overview
/// Specs: https://m3.material.io/components/navigation-bar/specs
/// Guidelines: https://m3.material.io/components/navigation-bar/guidelines
/// Accessibility: https://m3.material.io/components/navigation-bar/accessibility

import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Pressable as RNPressable, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
import { useAnimatedTheme } from 'react-native-unistyles/reanimated';

import { useInteraction } from '../../hooks';
import { Icon, type IconProps } from './icon';
import { Text, type TextProps } from './text';

// =============================================================================
// Types
// =============================================================================

type NavigationBarItemLayout = 'vertical' | 'horizontal';

type NavigationBarProps = {
  /** Currently active item value (controlled). */
  value?: string;
  /** Initial active item value (uncontrolled). */
  defaultValue?: string;
  /** Called when the active item changes. */
  onValueChange?: (value: string) => void;
  /** Item layout direction. Vertical for compact, horizontal for medium windows. */
  itemLayout?: NavigationBarItemLayout;

  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

type NavigationBarItemProps = {
  /** Value identifier for this item (used with NavigationBar context). */
  value: string;
  /** Accessibility label for the pressable. */
  accessibilityLabel?: string;

  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

type NavigationBarIconProps = Omit<IconProps, 'size'> & {
  /** @internal Injected by parent NavigationBarItem. */
  __internal__navActive?: boolean;
};

type NavigationBarLabelProps = Omit<TextProps, 'variant' | 'size'> & {
  /** @internal Injected by parent NavigationBarItem. */
  __internal__navActive?: boolean;
};

// =============================================================================
// Context (for NavigationBar → NavigationBarItem communication)
// =============================================================================

type NavigationBarContextValue = {
  value: string | undefined;
  onSelect: (value: string) => void;
  itemLayout: NavigationBarItemLayout;
};

const NavigationBarContext = React.createContext<NavigationBarContextValue | null>(null);

// =============================================================================
// Constants (M3 Specs)
// =============================================================================

/** Nav bar container height — md.comp.nav-bar.container.height = 64dp */
const CONTAINER_HEIGHT = 64;

/** Icon size — md.comp.nav-bar.item.icon.size = 24dp */
const ICON_SIZE = 24;

/** Vertical active indicator — 56×32dp */
const VERTICAL_INDICATOR_WIDTH = 56;
const VERTICAL_INDICATOR_HEIGHT = 32;

/** Vertical container between space — 6dp (gap between icon+indicator and label) */
const VERTICAL_BETWEEN_SPACE = 6;

/** Horizontal active indicator height — 40dp */
const HORIZONTAL_INDICATOR_HEIGHT = 40;

/** Horizontal indicator padding — 16dp leading + 16dp trailing */
const HORIZONTAL_INDICATOR_PADDING = 16;

/** Icon-label space inside indicator — 4dp (both layouts) */
const ICON_LABEL_SPACE = 4;

// =============================================================================
// NavigationBar (container — manages active item via context)
// =============================================================================

function NavigationBar({
  value: valueProp,
  defaultValue,
  onValueChange,
  itemLayout = 'vertical',
  style,
  children,
}: NavigationBarProps) {
  const isControlled = valueProp !== undefined;
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const value = isControlled ? valueProp : internalValue;

  const handleSelect = React.useCallback((itemValue: string) => {
    if (!isControlled) {
      setInternalValue(itemValue);
    }
    onValueChange?.(itemValue);
  }, [isControlled, onValueChange]);

  const contextValue = React.useMemo<NavigationBarContextValue>(
    () => ({ value, onSelect: handleSelect, itemLayout }),
    [value, handleSelect, itemLayout],
  );

  // useVariants after state/callback setup: controlled/uncontrolled logic and
  // context value must be computed before variants are applied.
  styles.useVariants({ itemLayout });

  return (
    <NavigationBarContext.Provider value={contextValue}>
      <View accessibilityRole="navigation" style={styles.wrapper}>
        <View accessibilityRole="tablist" style={[styles.container, style]}>
          {children}
        </View>
      </View>
    </NavigationBarContext.Provider>
  );
}

// =============================================================================
// NavigationBarItem (pressable item — icon + label + active indicator)
// =============================================================================

function NavigationBarItem({ value: itemValue, accessibilityLabel, style, children }: NavigationBarItemProps) {
  const ctx = React.useContext(NavigationBarContext);
  const itemLayout = ctx?.itemLayout ?? 'vertical';
  const active = ctx ? ctx.value === itemValue : false;

  // useVariants after useContext: itemLayout is derived from context.
  // Same pattern as RadioButton — context must be read first.
  styles.useVariants({ itemLayout });

  const { progress, handlers } = useInteraction('press');
  const selectProgress = useSharedValue(active ? 1 : 0);
  const animatedTheme = useAnimatedTheme();

  // Sync selection animation with active state
  React.useEffect(() => {
    const { fastSpatial, fastEffects } = UnistylesRuntime.getTheme().motion.spring;
    selectProgress.value = withSpring(active ? 1 : 0, active ? fastSpatial : fastEffects);
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

  // State layer opacity (press feedback)
  const stateLayerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.press.value, [0, 1], [0, animatedTheme.value.state.pressed], Extrapolation.CLAMP),
  }));

  // Single-pass slot extraction — classify children by displayName
  let iconEl: React.ReactNode = null;
  let labelEl: React.ReactNode = null;
  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    const displayName = (child.type as any)?.displayName;
    if (displayName === 'NavigationBarIcon') {
      iconEl = React.cloneElement(child, {
        __internal__navActive: active,
      } as any);
    } else if (displayName === 'NavigationBarLabel') {
      labelEl = React.cloneElement(child, {
        __internal__navActive: active,
      } as any);
    }
  });

  return (
    <RNPressable
      style={[styles.item, style]}
      onPress={handlePress}
      {...handlers}
      accessibilityRole="tab"
      accessibilityState={{ selected: active }}
      accessibilityLabel={accessibilityLabel}
    >
      {itemLayout === 'vertical' ? (
        <View style={styles.itemContentVertical}>
          <View style={styles.indicatorContainerVertical}>
            <Animated.View style={[styles.indicatorVertical, indicatorAnimatedStyle]} />
            <Animated.View style={[styles.stateLayer, stateLayerAnimatedStyle]} />
            {iconEl}
          </View>
          {labelEl}
        </View>
      ) : (
        <View style={styles.indicatorContainerHorizontal}>
          <Animated.View style={[styles.indicatorHorizontal, indicatorAnimatedStyle]} />
          <Animated.View style={[styles.stateLayer, stateLayerAnimatedStyle]} />
          {iconEl}
          {labelEl}
        </View>
      )}
    </RNPressable>
  );
}

// =============================================================================
// NavigationBarIcon (icon — color changes based on active state)
// =============================================================================

function NavigationBarIcon({ __internal__navActive = false, style, ...props }: NavigationBarIconProps) {
  styles.useVariants({ active: __internal__navActive });

  return <Icon size={ICON_SIZE} style={[styles.icon, style]} {...props} />;
}

NavigationBarIcon.displayName = 'NavigationBarIcon';

// =============================================================================
// NavigationBarLabel (label text — color changes based on active state)
// =============================================================================

function NavigationBarLabel({ __internal__navActive = false, style, ...props }: NavigationBarLabelProps) {
  styles.useVariants({ active: __internal__navActive });

  return <Text variant="label" size="medium" style={[styles.label, style]} numberOfLines={1} {...props} />;
}

NavigationBarLabel.displayName = 'NavigationBarLabel';

// =============================================================================
// Styles
// =============================================================================

const styles = StyleSheet.create((theme, rt) => ({
  // --- Container ---
  wrapper: {
    paddingBottom: rt.insets.bottom,
    backgroundColor: theme.scheme.surfaceContainer,
  },
  container: {
    flexDirection: 'row',
    height: CONTAINER_HEIGHT,
    alignItems: 'center',

    variants: {
      itemLayout: {
        vertical: {
          justifyContent: 'space-evenly',
        },
        horizontal: {
          justifyContent: 'center',
        },
      },
    },
  },

  // --- Item ---
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    height: CONTAINER_HEIGHT,

    variants: {
      itemLayout: {
        vertical: {
          flex: 1,
        },
        horizontal: {
          flex: 0,
        },
      },
    },
  },

  // --- Vertical layout ---
  itemContentVertical: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: VERTICAL_BETWEEN_SPACE,
  },

  indicatorContainerVertical: {
    width: VERTICAL_INDICATOR_WIDTH,
    height: VERTICAL_INDICATOR_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },

  indicatorVertical: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.scheme.secondaryContainer,
    borderRadius: theme.shape.full,
  },

  stateLayer: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: theme.shape.full,
    backgroundColor: theme.scheme.onSecondaryContainer,
  },

  // --- Horizontal layout ---
  indicatorContainerHorizontal: {
    height: HORIZONTAL_INDICATOR_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: HORIZONTAL_INDICATOR_PADDING,
    gap: ICON_LABEL_SPACE,
  },

  indicatorHorizontal: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.scheme.secondaryContainer,
    borderRadius: theme.shape.full,
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
        },
        false: {
          color: theme.scheme.onSurfaceVariant,
        },
      },
    },
  },
}));

// =============================================================================
// Exports
// =============================================================================

export type {
  NavigationBarIconProps,
  NavigationBarItemLayout,
  NavigationBarItemProps,
  NavigationBarLabelProps,
  NavigationBarProps,
};
export { NavigationBar, NavigationBarIcon, NavigationBarItem, NavigationBarLabel };
