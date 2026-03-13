/// Material Design FAB Menu
/// Overview: https://m3.material.io/components/fab-menu/overview
/// Specs: https://m3.material.io/components/fab-menu/specs
/// Guidelines: https://m3.material.io/components/fab-menu/guidelines
/// Accessibility: https://m3.material.io/components/fab-menu/accessibility

import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Modal, Pressable as RNPressable, ScrollView, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
import { useAnimatedTheme } from 'react-native-unistyles/reanimated';

import { useControllableState, useInteraction } from '../../hooks';
import { createComponentContext } from '../../utilities';
import { FAB, type FABColorStyle, FABIcon, type FABSize } from './fab';
import { Icon, type MaterialSymbol } from './icon';
import { Text } from './text';

// =============================================================================
// Types
// =============================================================================

type FABMenuColor = 'primary' | 'secondary' | 'tertiary';

type FABMenuItemCtx = { color: FABMenuColor; open: boolean; index: number };
const [FABMenuItemProvider, useFABMenuItem] = createComponentContext<FABMenuItemCtx>('FABMenuItem');

type FABMenuProps = {
  /** Icon name shown on the FAB when the menu is closed. */
  icon: MaterialSymbol;
  /** Color set for the menu and FAB. */
  color?: FABMenuColor;
  /** Size of the FAB when the menu is closed. */
  size?: FABSize;
  /** Controlled open state. When omitted, FABMenu manages its own state. */
  open?: boolean;
  /** Default open state for uncontrolled mode. */
  defaultOpen?: boolean;
  /** Called when the open state changes (works in both controlled and uncontrolled modes). */
  onOpenChange?: (open: boolean) => void;
  /** Style applied to the outer wrapper. */
  style?: StyleProp<ViewStyle>;
  /** Color style of the FAB trigger. Defaults to the container variant matching the color set. */
  fabColorStyle?: FABColorStyle;
  /** Style applied to the FAB when the menu is closed. */
  fabStyle?: StyleProp<ViewStyle>;
  /** Menu items (2-6 FABMenuItem children). */
  children: React.ReactNode;
};

type FABMenuItemProps = {
  /** Icon name for the menu item. */
  name: MaterialSymbol;
  /** Label text for the menu item. */
  label: string;
  /** Called when the item is pressed. */
  onPress?: () => void;
  /** Style applied to the item container. */
  style?: StyleProp<ViewStyle>;
};

// =============================================================================
// Constants
// =============================================================================

const CLOSE_BUTTON_SIZE = 56;
const CLOSE_ICON_SIZE = 20;
const ITEM_HEIGHT = 56;
const ITEM_ICON_SIZE = 24;
const ITEM_LEADING_SPACE = 24;
const ITEM_ICON_LABEL_SPACE = 8;
const ITEM_TRAILING_SPACE = 24;
const ITEM_BETWEEN_SPACE = 4;
const CLOSE_BETWEEN_SPACE = 8;
const MENU_MARGIN = 16;
const STAGGER_DELAY = 30;
const SCRIM_OPACITY = 0.32;

/** Default FABMenu color → FAB container color mapping. */
const FAB_COLOR_MAP: Record<FABMenuColor, FABColorStyle> = {
  primary: 'primaryContainer',
  secondary: 'secondaryContainer',
  tertiary: 'tertiaryContainer',
};

// =============================================================================
// FABMenu
// =============================================================================

function FABMenu({
  icon,
  color = 'primary',
  size = 'small',
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  style,
  fabColorStyle,
  fabStyle,
  children,
}: FABMenuProps) {
  const [isOpen, setOpen] = useControllableState({
    value: openProp,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  const handleOpen = React.useCallback(() => setOpen(true), [setOpen]);
  const handleClose = React.useCallback(() => setOpen(false), [setOpen]);

  const scrimOpacity = useSharedValue(0);

  React.useEffect(() => {
    const { fastEffects } = UnistylesRuntime.getTheme().motion.spring;
    scrimOpacity.value = withSpring(isOpen ? SCRIM_OPACITY : 0, fastEffects);
  }, [isOpen, scrimOpacity]);

  const animatedScrimStyle = useAnimatedStyle(() => ({
    opacity: scrimOpacity.value,
  }));

  const menuItems = React.Children.toArray(children).filter(
    (child): child is React.ReactElement => React.isValidElement(child) && child.type === FABMenuItem,
  );

  return (
    <View style={style}>
      {/* The FAB trigger — hidden when menu is open so close button takes its place */}
      <FAB
        size={size}
        colorStyle={fabColorStyle ?? FAB_COLOR_MAP[color]}
        onPress={handleOpen}
        style={[fabStyle, isOpen && { opacity: 0 }]}
        disabled={isOpen}
      >
        <FABIcon name={icon} />
      </FAB>

      {/* The menu overlay */}
      {isOpen && (
        <Modal transparent visible onRequestClose={handleClose} statusBarTranslucent>
          {/* Scrim */}
          <RNPressable
            style={StyleSheet.absoluteFillObject}
            onPress={handleClose}
            accessibilityRole="button"
            accessibilityLabel="Close menu"
          >
            <Animated.View style={[menuStyles.scrim, animatedScrimStyle]} />
          </RNPressable>

          {/* Menu content - anchored bottom-right */}
          <View style={menuStyles.anchor} pointerEvents="box-none">
            <View style={menuStyles.menuColumn}>
              {/* Scrollable items area */}
              <ScrollView
                style={menuStyles.scrollArea}
                contentContainerStyle={menuStyles.scrollContent}
                showsVerticalScrollIndicator={false}
                bounces={false}
              >
                {menuItems.map((child, index) => (
                  <FABMenuItemProvider key={index} value={{ color, open: isOpen, index }}>
                    {child}
                  </FABMenuItemProvider>
                ))}
              </ScrollView>

              {/* Close button - always visible, not scrolled */}
              <CloseButton color={color} onPress={handleClose} open={isOpen} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

// =============================================================================
// CloseButton
// =============================================================================

function CloseButton({ color, onPress, open }: { color: FABMenuColor; onPress: () => void; open: boolean }) {
  menuStyles.useVariants({ closeColor: color });
  const animatedTheme = useAnimatedTheme();
  const { progress, handlers } = useInteraction('press', 'hover', 'focus');
  const scale = useSharedValue(0);

  React.useEffect(() => {
    if (open) {
      const { fastEffects } = UnistylesRuntime.getTheme().motion.spring;
      scale.value = withSpring(1, fastEffects);
    }
  }, [open, scale]);

  const animatedContainerStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const animatedStateStyle = useAnimatedStyle(() => {
    const t = animatedTheme.value;
    const hoverOpacity = interpolate(progress.hover.value, [0, 1], [0, t.state.hover], Extrapolation.CLAMP);
    const focusOpacity = interpolate(progress.focus.value, [0, 1], [0, t.state.focus], Extrapolation.CLAMP);
    const pressOpacity = interpolate(progress.press.value, [0, 1], [0, t.state.pressed], Extrapolation.CLAMP);
    return { opacity: Math.max(hoverOpacity, focusOpacity, pressOpacity) };
  });

  return (
    <View style={menuStyles.closeButtonWrapper}>
      <RNPressable onPress={onPress} {...handlers} accessibilityRole="button" accessibilityLabel="Close">
        <Animated.View style={[menuStyles.closeButton, animatedContainerStyle]}>
          <Icon name="close" size={CLOSE_ICON_SIZE} variant="outlined" style={menuStyles.closeIcon} />
          <Animated.View style={[menuStyles.closeState, animatedStateStyle]} />
        </Animated.View>
      </RNPressable>
    </View>
  );
}

// =============================================================================
// FABMenuItem
// =============================================================================

function FABMenuItem({ name, label, onPress, style }: FABMenuItemProps) {
  const { color, open, index } = useFABMenuItem();
  menuStyles.useVariants({ itemColor: color });
  const animatedTheme = useAnimatedTheme();
  const { progress, handlers } = useInteraction('press', 'hover', 'focus');
  const itemScale = useSharedValue(0);
  const itemOpacity = useSharedValue(0);

  React.useEffect(() => {
    const { fastEffects } = UnistylesRuntime.getTheme().motion.spring;
    if (open) {
      const delay = (index + 1) * STAGGER_DELAY;
      itemScale.value = withDelay(delay, withSpring(1, fastEffects));
      itemOpacity.value = withDelay(delay, withSpring(1, fastEffects));
    } else {
      itemScale.value = 0;
      itemOpacity.value = 0;
    }
  }, [open, index, itemScale, itemOpacity]);

  const animatedItemStyle = useAnimatedStyle(() => ({
    transform: [{ scale: itemScale.value }],
    opacity: itemOpacity.value,
  }));

  const animatedStateStyle = useAnimatedStyle(() => {
    const t = animatedTheme.value;
    const hoverOpacity = interpolate(progress.hover.value, [0, 1], [0, t.state.hover], Extrapolation.CLAMP);
    const focusOpacity = interpolate(progress.focus.value, [0, 1], [0, t.state.focus], Extrapolation.CLAMP);
    const pressOpacity = interpolate(progress.press.value, [0, 1], [0, t.state.pressed], Extrapolation.CLAMP);
    return { opacity: Math.max(hoverOpacity, focusOpacity, pressOpacity) };
  });

  return (
    <RNPressable onPress={onPress} {...handlers} accessibilityRole="button" accessibilityLabel={label}>
      <Animated.View style={[menuStyles.item, animatedItemStyle, style]}>
        <Icon name={name} size={ITEM_ICON_SIZE} variant="outlined" style={menuStyles.itemIcon} />
        <Text variant="label" size="large" style={menuStyles.itemLabel} numberOfLines={1}>
          {label}
        </Text>
        <Animated.View style={[menuStyles.itemState, animatedStateStyle]} />
      </Animated.View>
    </RNPressable>
  );
}

// =============================================================================
// Styles
// =============================================================================

const menuStyles = StyleSheet.create((theme, rt) => ({
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.scheme.scrim,
  },

  anchor: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: rt.insets.bottom + MENU_MARGIN,
    paddingRight: rt.insets.right + MENU_MARGIN,
  },

  menuColumn: {
    alignItems: 'flex-end',
    maxHeight: '80%',
  },

  scrollArea: {
    flexShrink: 1,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    gap: ITEM_BETWEEN_SPACE,
    paddingBottom: CLOSE_BETWEEN_SPACE,
  },

  // ── Close button ──────────────────────────────────────────────────────

  closeButtonWrapper: {
    alignItems: 'flex-end',
  },

  closeButton: {
    width: CLOSE_BUTTON_SIZE,
    height: CLOSE_BUTTON_SIZE,
    borderRadius: theme.shape.full,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',

    variants: {
      closeColor: {
        primary: { backgroundColor: theme.scheme.primary },
        secondary: { backgroundColor: theme.scheme.secondary },
        tertiary: { backgroundColor: theme.scheme.tertiary },
      },
    },
  },

  closeIcon: {
    variants: {
      closeColor: {
        primary: { color: theme.scheme.onPrimary },
        secondary: { color: theme.scheme.onSecondary },
        tertiary: { color: theme.scheme.onTertiary },
      },
    },
  },

  closeState: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: theme.shape.full,

    variants: {
      closeColor: {
        primary: { backgroundColor: theme.scheme.onPrimary },
        secondary: { backgroundColor: theme.scheme.onSecondary },
        tertiary: { backgroundColor: theme.scheme.onTertiary },
      },
    },
  },

  // ── Menu item ─────────────────────────────────────────────────────────

  item: {
    height: ITEM_HEIGHT,
    borderRadius: theme.shape.full,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: ITEM_LEADING_SPACE,
    paddingRight: ITEM_TRAILING_SPACE,
    gap: ITEM_ICON_LABEL_SPACE,
    alignSelf: 'flex-end',
    overflow: 'hidden',

    variants: {
      itemColor: {
        primary: { backgroundColor: theme.scheme.primaryContainer },
        secondary: { backgroundColor: theme.scheme.secondaryContainer },
        tertiary: { backgroundColor: theme.scheme.tertiaryContainer },
      },
    },
  },

  itemIcon: {
    variants: {
      itemColor: {
        primary: { color: theme.scheme.onPrimaryContainer },
        secondary: { color: theme.scheme.onSecondaryContainer },
        tertiary: { color: theme.scheme.onTertiaryContainer },
      },
    },
  },

  itemLabel: {
    variants: {
      itemColor: {
        primary: { color: theme.scheme.onPrimaryContainer },
        secondary: { color: theme.scheme.onSecondaryContainer },
        tertiary: { color: theme.scheme.onTertiaryContainer },
      },
    },
  },

  itemState: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: theme.shape.full,

    variants: {
      itemColor: {
        primary: { backgroundColor: theme.scheme.onPrimaryContainer },
        secondary: { backgroundColor: theme.scheme.onSecondaryContainer },
        tertiary: { backgroundColor: theme.scheme.onTertiaryContainer },
      },
    },
  },
}));

// =============================================================================
// Exports
// =============================================================================

FABMenu.displayName = 'FABMenu';
FABMenuItem.displayName = 'FABMenuItem';

export type { FABMenuColor, FABMenuItemProps, FABMenuProps };
export { FABMenu, FABMenuItem };
