/// Material Design Menus
/// Overview: https://m3.material.io/components/menus/overview
/// Specs: https://m3.material.io/components/menus/specs
/// Guidelines: https://m3.material.io/components/menus/guidelines
/// Accessibility: https://m3.material.io/components/menus/accessibility

import React from 'react';
import type { LayoutChangeEvent, LayoutRectangle, StyleProp, ViewStyle } from 'react-native';
import { Dimensions, Modal, Pressable as RNPressable, View } from 'react-native';
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';

import { useControllableState, useInteraction } from '../../hooks';
import { getDisplayName } from '../../utilities';
import { StateLayer } from '../custom';
import { Divider } from './divider';
import { Icon, type IconProps } from './icon';
import { Text, type TextProps } from './text';

// =============================================================================
// Types
// =============================================================================

type MenuVariant = 'baseline' | 'vertical';
type MenuColorStyle = 'standard' | 'vibrant';

type MenuProps = {
  variant?: MenuVariant;
  colorStyle?: MenuColorStyle;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  anchor: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

type MenuItemProps = {
  selected?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  __internal__menuVariant?: MenuVariant;
  __internal__menuColorStyle?: MenuColorStyle;
};

type MenuItemLeadingIconProps = Omit<IconProps, 'size'> & {
  __internal__menuVariant?: MenuVariant;
  __internal__menuColorStyle?: MenuColorStyle;
  __internal__menuItemDisabled?: boolean;
  __internal__menuItemSelected?: boolean;
};

type MenuItemLabelProps = Omit<TextProps, 'variant' | 'size'> & {
  __internal__menuVariant?: MenuVariant;
  __internal__menuColorStyle?: MenuColorStyle;
  __internal__menuItemDisabled?: boolean;
  __internal__menuItemSelected?: boolean;
  children: React.ReactNode;
};

type MenuItemTrailingIconProps = Omit<IconProps, 'size'> & {
  __internal__menuVariant?: MenuVariant;
  __internal__menuColorStyle?: MenuColorStyle;
  __internal__menuItemDisabled?: boolean;
  __internal__menuItemSelected?: boolean;
};

type MenuItemTrailingTextProps = Omit<TextProps, 'variant' | 'size'> & {
  __internal__menuVariant?: MenuVariant;
  __internal__menuColorStyle?: MenuColorStyle;
  __internal__menuItemDisabled?: boolean;
  __internal__menuItemSelected?: boolean;
  children: React.ReactNode;
};

type MenuItemSupportingTextProps = Omit<TextProps, 'variant' | 'size'> & {
  __internal__menuVariant?: MenuVariant;
  __internal__menuColorStyle?: MenuColorStyle;
  __internal__menuItemDisabled?: boolean;
  __internal__menuItemSelected?: boolean;
  children: React.ReactNode;
};

type MenuDividerProps = {
  __internal__menuVariant?: MenuVariant;
  style?: StyleProp<ViewStyle>;
};

type MenuGapProps = {
  style?: StyleProp<ViewStyle>;
};

// =============================================================================
// Constants
// =============================================================================

// Baseline measurements (from specs doc)
const BASELINE_MIN_WIDTH = 112;
const BASELINE_MAX_WIDTH = 280;
const BASELINE_CORNER_RADIUS = 4; // specs: 4dp
const BASELINE_ITEM_HEIGHT = 48; // specs: 48dp
const BASELINE_PADDING_HORIZONTAL = 12; // specs: 12dp
const BASELINE_BETWEEN_SPACE = 12; // specs: 12dp between elements
const BASELINE_ICON_SIZE = 24; // specs: 24dp
const BASELINE_DIVIDER_PADDING = 8; // specs: 8dp top/bottom

// Vertical measurements (from specs doc - Common layout tokens)
const VERTICAL_ITEM_HEIGHT = 44; // specs: 44dp
const VERTICAL_ITEM_TOP_SPACE = 8; // specs: 8dp
const VERTICAL_ITEM_BOTTOM_SPACE = 8; // specs: 8dp
const VERTICAL_ITEM_LEADING_SPACE = 16; // specs: 16dp
const VERTICAL_ITEM_TRAILING_SPACE = 16; // specs: 16dp
const VERTICAL_ITEM_BETWEEN_SPACE = 12; // specs: 12dp
const VERTICAL_ICON_SIZE = 20; // specs: 20dp
const VERTICAL_GAP = 2; // specs: 2dp
const VERTICAL_GROUP_PADDING = 2; // specs: 2dp

// =============================================================================
// Display name constants (for slot identification)
// =============================================================================

const MENU_ITEM_LEADING_ICON = 'MenuItemLeadingIcon';
const MENU_ITEM_LABEL = 'MenuItemLabel';
const MENU_ITEM_TRAILING_ICON = 'MenuItemTrailingIcon';
const MENU_ITEM_TRAILING_TEXT = 'MenuItemTrailingText';
const MENU_ITEM_SUPPORTING_TEXT = 'MenuItemSupportingText';
const MENU_DIVIDER = 'MenuDivider';
const MENU_GAP = 'MenuGap';
const MENU_ITEM = 'MenuItem';

const LEADING_NAMES = new Set([MENU_ITEM_LEADING_ICON]);
const TRAILING_NAMES = new Set([MENU_ITEM_TRAILING_ICON, MENU_ITEM_TRAILING_TEXT]);
const CONTENT_NAMES = new Set([MENU_ITEM_LABEL, MENU_ITEM_SUPPORTING_TEXT]);
const CONTENT_SORT_ORDER = [MENU_ITEM_LABEL, MENU_ITEM_SUPPORTING_TEXT];

// =============================================================================
// Helpers
// =============================================================================

const VIEWPORT_MARGIN = 8;

/**
 * Compute the absolute position for the menu popup, flipping or clamping
 * when it would overflow the viewport.
 */
function computeMenuPosition(anchor: LayoutRectangle, menu: { width: number; height: number } | null): ViewStyle {
  const { width: screenW, height: screenH } = Dimensions.get('window');
  const anchorRight = anchor.x + anchor.width;

  // Default: below anchor, right-aligned to anchor's right edge
  let top = anchor.y + anchor.height;
  let left = menu ? anchorRight - menu.width : anchor.x;

  if (menu) {
    // Flip above anchor if it overflows the bottom
    if (top + menu.height + VIEWPORT_MARGIN > screenH) {
      top = anchor.y - menu.height;
    }

    // If right-aligning pushed us off the left edge, shift right
    if (left < VIEWPORT_MARGIN) {
      left = VIEWPORT_MARGIN;
    }

    // If it still overflows right, clamp
    if (left + menu.width + VIEWPORT_MARGIN > screenW) {
      left = screenW - menu.width - VIEWPORT_MARGIN;
    }

    // Clamp top
    if (top < VIEWPORT_MARGIN) top = VIEWPORT_MARGIN;
  }

  return { position: 'absolute', top, left };
}

// =============================================================================
// Menu (root)
// =============================================================================

function Menu({
  variant = 'baseline',
  colorStyle = 'standard',
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  anchor,
  style,
  children,
}: MenuProps) {
  const [open, setOpen] = useControllableState({
    value: openProp,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  // Effective color style: baseline always uses standard
  const effectiveColorStyle = variant === 'baseline' ? 'standard' : colorStyle;
  menuStyles.useVariants({ variant, colorStyle: effectiveColorStyle });

  const [mounted, setMounted] = React.useState(false);
  const [anchorLayout, setAnchorLayout] = React.useState<LayoutRectangle | null>(null);
  const [menuSize, setMenuSize] = React.useState<{ width: number; height: number } | null>(null);
  const anchorRef = React.useRef<View | null>(null);

  const containerOpacity = useSharedValue(0);
  const containerScale = useSharedValue(0.9);

  const onCloseAnimationEnd = React.useCallback((finished?: boolean) => {
    'worklet';
    if (finished) {
      runOnJS(setMounted)(false);
    }
  }, []);

  const measureAnchor = React.useCallback(() => {
    const node = anchorRef.current;
    if (node) {
      (node as any).measureInWindow((x: number, y: number, width: number, height: number) => {
        setAnchorLayout({ x, y, width, height });
      });
    }
  }, []);

  const handleMenuLayout = React.useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setMenuSize({ width, height });
  }, []);

  React.useEffect(() => {
    const theme = UnistylesRuntime.getTheme();
    if (open) {
      measureAnchor();
      setMounted(true);
      containerOpacity.value = withTiming(1, {
        duration: theme.motion.duration.medium2,
        easing: Easing.bezier(...theme.motion.easing.emphasizedDecelerate),
      });
      containerScale.value = withTiming(1, {
        duration: theme.motion.duration.medium2,
        easing: Easing.bezier(...theme.motion.easing.emphasizedDecelerate),
      });
    } else if (mounted) {
      containerOpacity.value = withTiming(
        0,
        {
          duration: theme.motion.duration.short3,
          easing: Easing.bezier(...theme.motion.easing.emphasizedAccelerate),
        },
        onCloseAnimationEnd,
      );
      containerScale.value = withTiming(0.9, {
        duration: theme.motion.duration.short3,
        easing: Easing.bezier(...theme.motion.easing.emphasizedAccelerate),
      });
      setMenuSize(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const animatedContainerStyle = useAnimatedStyle(() => ({
    opacity: containerOpacity.value,
    transform: [{ scale: containerScale.value }],
  }));

  const handleDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  // Memoize position to avoid recomputing Dimensions.get on every render
  const menuPosition = React.useMemo(
    () => (anchorLayout ? computeMenuPosition(anchorLayout, menuSize) : undefined),
    [anchorLayout, menuSize],
  );

  return (
    <View ref={anchorRef as any} collapsable={false}>
      {anchor}
      {mounted && (
        <Modal transparent visible onRequestClose={handleDismiss} statusBarTranslucent>
          <RNPressable
            style={StyleSheet.absoluteFillObject}
            onPress={handleDismiss}
            accessibilityRole="button"
            accessibilityLabel="Close menu"
          />

          <Animated.View
            onLayout={handleMenuLayout}
            style={[menuStyles.container, animatedContainerStyle, menuPosition, style]}
            accessibilityRole="menu"
          >
            {React.Children.map(children, (child) => {
              if (!React.isValidElement(child)) return child;
              const name = getDisplayName(child);
              if (name === MENU_ITEM) {
                return React.cloneElement(child, {
                  __internal__menuVariant: variant,
                  __internal__menuColorStyle: effectiveColorStyle,
                } as any);
              }
              if (name === MENU_DIVIDER) {
                return React.cloneElement(child, {
                  __internal__menuVariant: variant,
                } as any);
              }
              return child;
            })}
          </Animated.View>
        </Modal>
      )}
    </View>
  );
}

// =============================================================================
// MenuItem
// =============================================================================

function getMenuItemStateLayerColor(
  variant: MenuVariant,
  colorStyle: MenuColorStyle,
  selected: boolean,
): 'onSurface' | 'onTertiary' | 'onTertiaryContainer' {
  if (variant === 'baseline') return 'onSurface';
  if (colorStyle === 'vibrant') return selected ? 'onTertiary' : 'onTertiaryContainer';
  return selected ? 'onTertiaryContainer' : 'onSurface';
}

function MenuItem({
  selected = false,
  disabled = false,
  onPress,
  style,
  children,
  __internal__menuVariant = 'baseline',
  __internal__menuColorStyle = 'standard',
}: MenuItemProps) {
  menuStyles.useVariants({
    variant: __internal__menuVariant,
    colorStyle: __internal__menuColorStyle,
    selected,
    disabled,
  });

  const { progress, handlers } = useInteraction('press', 'hover', 'focus');

  const stateLayerColor = getMenuItemStateLayerColor(__internal__menuVariant, __internal__menuColorStyle, selected);

  const handlePress = React.useCallback(() => {
    if (disabled) return;
    onPress?.();
  }, [disabled, onPress]);

  // Sort children into slots
  const { leadingSlot, sortedContent, trailingSlots } = React.useMemo(() => {
    let leading: React.ReactNode = null;
    const content: React.ReactNode[] = [];
    const trailing: React.ReactNode[] = [];

    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) return;
      const name = getDisplayName(child);

      const cloned = React.cloneElement(child, {
        __internal__menuVariant: __internal__menuVariant,
        __internal__menuColorStyle: __internal__menuColorStyle,
        __internal__menuItemDisabled: disabled,
        __internal__menuItemSelected: selected,
      } as any);

      if (name && LEADING_NAMES.has(name)) {
        leading = cloned;
      } else if (name && TRAILING_NAMES.has(name)) {
        trailing.push(cloned);
      } else if (name && CONTENT_NAMES.has(name)) {
        content.push(cloned);
      }
    });

    const sorted = content.sort((a, b) => {
      const aName = React.isValidElement(a) ? getDisplayName(a) : '';
      const bName = React.isValidElement(b) ? getDisplayName(b) : '';
      return CONTENT_SORT_ORDER.indexOf(aName ?? '') - CONTENT_SORT_ORDER.indexOf(bName ?? '');
    });

    return { leadingSlot: leading, sortedContent: sorted, trailingSlots: trailing };
  }, [children, __internal__menuVariant, __internal__menuColorStyle, disabled, selected]);

  return (
    <RNPressable
      style={[menuStyles.menuItem, style]}
      onPress={handlePress}
      disabled={disabled}
      accessibilityRole="menuitem"
      accessibilityState={{ selected, disabled }}
      {...handlers}
    >
      <StateLayer progress={progress} color={stateLayerColor} />
      <View style={menuStyles.menuItemInner}>
        {leadingSlot}
        <View style={menuStyles.contentSlot}>{sortedContent}</View>
        {trailingSlots.length > 0 && <View style={menuStyles.trailingSlot}>{trailingSlots}</View>}
      </View>
    </RNPressable>
  );
}
MenuItem.displayName = MENU_ITEM;

// =============================================================================
// MenuItemLeadingIcon
// =============================================================================

function MenuItemLeadingIcon({
  __internal__menuVariant = 'baseline',
  __internal__menuColorStyle = 'standard',
  __internal__menuItemDisabled = false,
  __internal__menuItemSelected = false,
  style,
  ...props
}: MenuItemLeadingIconProps) {
  menuStyles.useVariants({
    variant: __internal__menuVariant,
    colorStyle: __internal__menuColorStyle,
    disabled: __internal__menuItemDisabled,
    selected: __internal__menuItemSelected,
  });

  const iconSize = __internal__menuVariant === 'baseline' ? BASELINE_ICON_SIZE : VERTICAL_ICON_SIZE;

  return <Icon size={iconSize} style={[menuStyles.leadingIcon, style]} {...props} />;
}
MenuItemLeadingIcon.displayName = MENU_ITEM_LEADING_ICON;

// =============================================================================
// MenuItemLabel
// =============================================================================

function MenuItemLabel({
  __internal__menuVariant = 'baseline',
  __internal__menuColorStyle = 'standard',
  __internal__menuItemDisabled = false,
  __internal__menuItemSelected = false,
  style,
  children,
  ...props
}: MenuItemLabelProps) {
  menuStyles.useVariants({
    variant: __internal__menuVariant,
    colorStyle: __internal__menuColorStyle,
    disabled: __internal__menuItemDisabled,
    selected: __internal__menuItemSelected,
  });

  return (
    <Text variant="label" size="large" style={[menuStyles.labelText, style]} {...props}>
      {children}
    </Text>
  );
}
MenuItemLabel.displayName = MENU_ITEM_LABEL;

// =============================================================================
// MenuItemTrailingIcon
// =============================================================================

function MenuItemTrailingIcon({
  __internal__menuVariant = 'baseline',
  __internal__menuColorStyle = 'standard',
  __internal__menuItemDisabled = false,
  __internal__menuItemSelected = false,
  style,
  ...props
}: MenuItemTrailingIconProps) {
  menuStyles.useVariants({
    variant: __internal__menuVariant,
    colorStyle: __internal__menuColorStyle,
    disabled: __internal__menuItemDisabled,
    selected: __internal__menuItemSelected,
  });

  const iconSize = __internal__menuVariant === 'baseline' ? BASELINE_ICON_SIZE : VERTICAL_ICON_SIZE;

  return <Icon size={iconSize} style={[menuStyles.trailingIcon, style]} {...props} />;
}
MenuItemTrailingIcon.displayName = MENU_ITEM_TRAILING_ICON;

// =============================================================================
// MenuItemTrailingText
// =============================================================================

function MenuItemTrailingText({
  __internal__menuVariant = 'baseline',
  __internal__menuColorStyle = 'standard',
  __internal__menuItemDisabled = false,
  __internal__menuItemSelected = false,
  style,
  children,
  ...props
}: MenuItemTrailingTextProps) {
  menuStyles.useVariants({
    variant: __internal__menuVariant,
    colorStyle: __internal__menuColorStyle,
    disabled: __internal__menuItemDisabled,
    selected: __internal__menuItemSelected,
  });

  return (
    <Text variant="label" size="large" style={[menuStyles.trailingText, style]} {...props}>
      {children}
    </Text>
  );
}
MenuItemTrailingText.displayName = MENU_ITEM_TRAILING_TEXT;

// =============================================================================
// MenuItemSupportingText
// =============================================================================

function MenuItemSupportingText({
  __internal__menuVariant = 'baseline',
  __internal__menuColorStyle = 'standard',
  __internal__menuItemDisabled = false,
  __internal__menuItemSelected = false,
  style,
  children,
  ...props
}: MenuItemSupportingTextProps) {
  menuStyles.useVariants({
    variant: __internal__menuVariant,
    colorStyle: __internal__menuColorStyle,
    disabled: __internal__menuItemDisabled,
    selected: __internal__menuItemSelected,
  });

  return (
    <Text variant="body" size="small" style={[menuStyles.supportingText, style]} {...props}>
      {children}
    </Text>
  );
}
MenuItemSupportingText.displayName = MENU_ITEM_SUPPORTING_TEXT;

// =============================================================================
// MenuDivider
// =============================================================================

function MenuDivider({ __internal__menuVariant = 'baseline', style }: MenuDividerProps) {
  menuStyles.useVariants({ variant: __internal__menuVariant });

  return <Divider style={[menuStyles.divider, style]} />;
}
MenuDivider.displayName = MENU_DIVIDER;

// =============================================================================
// MenuGap
// =============================================================================

function MenuGap({ style }: MenuGapProps) {
  return <View style={[menuStyles.gap, style]} />;
}
MenuGap.displayName = MENU_GAP;

// =============================================================================
// Styles
// =============================================================================

const menuStyles = StyleSheet.create((theme) => ({
  // Menu container
  container: {
    overflow: 'hidden',
    ...theme.elevation[2],

    variants: {
      variant: {
        baseline: {
          backgroundColor: theme.scheme.surfaceContainer,
          borderRadius: BASELINE_CORNER_RADIUS,
          minWidth: BASELINE_MIN_WIDTH,
          maxWidth: BASELINE_MAX_WIDTH,
          paddingVertical: BASELINE_DIVIDER_PADDING,
        },
        vertical: {
          minWidth: BASELINE_MIN_WIDTH,
          maxWidth: BASELINE_MAX_WIDTH,
          paddingVertical: VERTICAL_GROUP_PADDING,
        },
      },
      colorStyle: {
        standard: {},
        vibrant: {},
      },
    },
    compoundVariants: [
      {
        variant: 'vertical',
        colorStyle: 'standard',
        styles: {
          backgroundColor: theme.scheme.surfaceContainerLow,
          borderRadius: theme.shape.large,
        },
      },
      {
        variant: 'vertical',
        colorStyle: 'vibrant',
        styles: {
          backgroundColor: theme.scheme.tertiaryContainer,
          borderRadius: theme.shape.large,
        },
      },
    ],
  },

  // MenuItem container
  menuItem: {
    overflow: 'hidden',

    variants: {
      variant: {
        baseline: {
          minHeight: BASELINE_ITEM_HEIGHT,
          justifyContent: 'center',
        },
        vertical: {
          minHeight: VERTICAL_ITEM_HEIGHT,
          justifyContent: 'center',
        },
      },
      colorStyle: {
        standard: {},
        vibrant: {},
      },
      selected: {
        true: {},
        false: {},
      },
      disabled: {
        true: {},
        false: {},
      },
    },
    compoundVariants: [
      // Baseline selected — spec token #E8DEF8 = secondaryContainer
      {
        variant: 'baseline',
        selected: true,
        styles: {
          backgroundColor: theme.scheme.secondaryContainer,
        },
      },
      // Vertical standard selected — with rounded shape
      {
        variant: 'vertical',
        colorStyle: 'standard',
        selected: true,
        styles: {
          backgroundColor: theme.scheme.tertiaryContainer,
          borderRadius: theme.shape.full,
          marginHorizontal: VERTICAL_GROUP_PADDING,
        },
      },
      // Vertical vibrant selected
      {
        variant: 'vertical',
        colorStyle: 'vibrant',
        selected: true,
        styles: {
          backgroundColor: theme.scheme.tertiary,
          borderRadius: theme.shape.full,
          marginHorizontal: VERTICAL_GROUP_PADDING,
        },
      },
    ],
  },

  // MenuItem inner layout
  menuItemInner: {
    flexDirection: 'row',
    alignItems: 'center',

    variants: {
      variant: {
        baseline: {
          paddingHorizontal: BASELINE_PADDING_HORIZONTAL,
          gap: BASELINE_BETWEEN_SPACE,
        },
        vertical: {
          paddingLeft: VERTICAL_ITEM_LEADING_SPACE,
          paddingRight: VERTICAL_ITEM_TRAILING_SPACE,
          paddingTop: VERTICAL_ITEM_TOP_SPACE,
          paddingBottom: VERTICAL_ITEM_BOTTOM_SPACE,
          gap: VERTICAL_ITEM_BETWEEN_SPACE,
        },
      },
    },
  },

  // Content slot (label + supporting text)
  contentSlot: {
    flex: 1,
    justifyContent: 'center',
  },

  // Trailing slot
  trailingSlot: {
    flexDirection: 'row',
    alignItems: 'center',

    variants: {
      variant: {
        baseline: {
          gap: BASELINE_BETWEEN_SPACE,
        },
        vertical: {
          gap: VERTICAL_ITEM_BETWEEN_SPACE,
        },
      },
    },
  },

  // Label text
  labelText: {
    variants: {
      variant: {
        baseline: {},
        vertical: {},
      },
      colorStyle: {
        standard: {},
        vibrant: {},
      },
      selected: {
        true: {},
        false: {},
      },
      disabled: {
        true: {},
        false: {},
      },
    },
    compoundVariants: [
      // Baseline default
      { variant: 'baseline', selected: false, disabled: false, styles: { color: theme.scheme.onSurface } },
      // Baseline selected — spec token #4A4458 = onSecondaryContainer
      { variant: 'baseline', selected: true, disabled: false, styles: { color: theme.scheme.onSecondaryContainer } },
      // Baseline disabled
      { variant: 'baseline', disabled: true, styles: { color: theme.scheme.onSurface, opacity: 0.38 } },
      // Vertical standard default
      {
        variant: 'vertical',
        colorStyle: 'standard',
        selected: false,
        disabled: false,
        styles: { color: theme.scheme.onSurface },
      },
      // Vertical standard selected
      {
        variant: 'vertical',
        colorStyle: 'standard',
        selected: true,
        disabled: false,
        styles: { color: theme.scheme.onTertiaryContainer },
      },
      // Vertical standard disabled
      {
        variant: 'vertical',
        colorStyle: 'standard',
        disabled: true,
        styles: { color: theme.scheme.onSurface, opacity: 0.38 },
      },
      // Vertical vibrant default
      {
        variant: 'vertical',
        colorStyle: 'vibrant',
        selected: false,
        disabled: false,
        styles: { color: theme.scheme.onTertiaryContainer },
      },
      // Vertical vibrant selected
      {
        variant: 'vertical',
        colorStyle: 'vibrant',
        selected: true,
        disabled: false,
        styles: { color: theme.scheme.onTertiary },
      },
      // Vertical vibrant disabled
      {
        variant: 'vertical',
        colorStyle: 'vibrant',
        disabled: true,
        styles: { color: theme.scheme.onTertiaryContainer, opacity: 0.38 },
      },
    ],
  },

  // Leading icon
  leadingIcon: {
    variants: {
      variant: {
        baseline: {},
        vertical: {},
      },
      colorStyle: {
        standard: {},
        vibrant: {},
      },
      selected: {
        true: {},
        false: {},
      },
      disabled: {
        true: {},
        false: {},
      },
    },
    compoundVariants: [
      // Baseline default
      { variant: 'baseline', selected: false, disabled: false, styles: { color: theme.scheme.onSurfaceVariant } },
      // Baseline selected — spec token #4A4458 = onSecondaryContainer
      { variant: 'baseline', selected: true, disabled: false, styles: { color: theme.scheme.onSecondaryContainer } },
      // Baseline disabled
      { variant: 'baseline', disabled: true, styles: { color: theme.scheme.onSurface, opacity: 0.38 } },
      // Vertical standard default
      {
        variant: 'vertical',
        colorStyle: 'standard',
        selected: false,
        disabled: false,
        styles: { color: theme.scheme.onSurfaceVariant },
      },
      // Vertical standard selected
      {
        variant: 'vertical',
        colorStyle: 'standard',
        selected: true,
        disabled: false,
        styles: { color: theme.scheme.onTertiaryContainer },
      },
      // Vertical standard disabled
      {
        variant: 'vertical',
        colorStyle: 'standard',
        disabled: true,
        styles: { color: theme.scheme.onSurface, opacity: 0.38 },
      },
      // Vertical vibrant default
      {
        variant: 'vertical',
        colorStyle: 'vibrant',
        selected: false,
        disabled: false,
        styles: { color: theme.scheme.onTertiaryContainer },
      },
      // Vertical vibrant selected
      {
        variant: 'vertical',
        colorStyle: 'vibrant',
        selected: true,
        disabled: false,
        styles: { color: theme.scheme.onTertiary },
      },
      // Vertical vibrant disabled
      {
        variant: 'vertical',
        colorStyle: 'vibrant',
        disabled: true,
        styles: { color: theme.scheme.onTertiaryContainer, opacity: 0.38 },
      },
    ],
  },

  // Trailing icon
  trailingIcon: {
    variants: {
      variant: {
        baseline: {},
        vertical: {},
      },
      colorStyle: {
        standard: {},
        vibrant: {},
      },
      selected: {
        true: {},
        false: {},
      },
      disabled: {
        true: {},
        false: {},
      },
    },
    compoundVariants: [
      // Baseline default
      { variant: 'baseline', selected: false, disabled: false, styles: { color: theme.scheme.onSurfaceVariant } },
      // Baseline selected — spec token #4A4458 = onSecondaryContainer
      { variant: 'baseline', selected: true, disabled: false, styles: { color: theme.scheme.onSecondaryContainer } },
      // Baseline disabled
      { variant: 'baseline', disabled: true, styles: { color: theme.scheme.onSurface, opacity: 0.38 } },
      // Vertical standard default
      {
        variant: 'vertical',
        colorStyle: 'standard',
        selected: false,
        disabled: false,
        styles: { color: theme.scheme.onSurfaceVariant },
      },
      // Vertical standard selected
      {
        variant: 'vertical',
        colorStyle: 'standard',
        selected: true,
        disabled: false,
        styles: { color: theme.scheme.onTertiaryContainer },
      },
      // Vertical standard disabled
      {
        variant: 'vertical',
        colorStyle: 'standard',
        disabled: true,
        styles: { color: theme.scheme.onSurface, opacity: 0.38 },
      },
      // Vertical vibrant default
      {
        variant: 'vertical',
        colorStyle: 'vibrant',
        selected: false,
        disabled: false,
        styles: { color: theme.scheme.onTertiaryContainer },
      },
      // Vertical vibrant selected
      {
        variant: 'vertical',
        colorStyle: 'vibrant',
        selected: true,
        disabled: false,
        styles: { color: theme.scheme.onTertiary },
      },
      // Vertical vibrant disabled
      {
        variant: 'vertical',
        colorStyle: 'vibrant',
        disabled: true,
        styles: { color: theme.scheme.onTertiaryContainer, opacity: 0.38 },
      },
    ],
  },

  // Trailing text
  trailingText: {
    variants: {
      variant: {
        baseline: {},
        vertical: {},
      },
      colorStyle: {
        standard: {},
        vibrant: {},
      },
      selected: {
        true: {},
        false: {},
      },
      disabled: {
        true: {},
        false: {},
      },
    },
    compoundVariants: [
      // Baseline default
      { variant: 'baseline', selected: false, disabled: false, styles: { color: theme.scheme.onSurfaceVariant } },
      // Baseline selected — spec token #4A4458 = onSecondaryContainer
      { variant: 'baseline', selected: true, disabled: false, styles: { color: theme.scheme.onSecondaryContainer } },
      // Baseline disabled
      { variant: 'baseline', disabled: true, styles: { color: theme.scheme.onSurface, opacity: 0.38 } },
      // Vertical standard default
      {
        variant: 'vertical',
        colorStyle: 'standard',
        selected: false,
        disabled: false,
        styles: { color: theme.scheme.onSurfaceVariant },
      },
      // Vertical standard selected
      {
        variant: 'vertical',
        colorStyle: 'standard',
        selected: true,
        disabled: false,
        styles: { color: theme.scheme.onTertiaryContainer },
      },
      // Vertical standard disabled
      {
        variant: 'vertical',
        colorStyle: 'standard',
        disabled: true,
        styles: { color: theme.scheme.onSurface, opacity: 0.38 },
      },
      // Vertical vibrant default
      {
        variant: 'vertical',
        colorStyle: 'vibrant',
        selected: false,
        disabled: false,
        styles: { color: theme.scheme.onTertiaryContainer },
      },
      // Vertical vibrant selected
      {
        variant: 'vertical',
        colorStyle: 'vibrant',
        selected: true,
        disabled: false,
        styles: { color: theme.scheme.onTertiary },
      },
      // Vertical vibrant disabled
      {
        variant: 'vertical',
        colorStyle: 'vibrant',
        disabled: true,
        styles: { color: theme.scheme.onTertiaryContainer, opacity: 0.38 },
      },
    ],
  },

  // Supporting text
  supportingText: {
    variants: {
      variant: {
        baseline: {},
        vertical: {},
      },
      colorStyle: {
        standard: {},
        vibrant: {},
      },
      selected: {
        true: {},
        false: {},
      },
      disabled: {
        true: {},
        false: {},
      },
    },
    compoundVariants: [
      // Vertical standard default
      {
        variant: 'vertical',
        colorStyle: 'standard',
        selected: false,
        disabled: false,
        styles: { color: theme.scheme.onSurfaceVariant },
      },
      // Vertical standard selected
      {
        variant: 'vertical',
        colorStyle: 'standard',
        selected: true,
        disabled: false,
        styles: { color: theme.scheme.onTertiaryContainer },
      },
      // Vertical standard disabled
      {
        variant: 'vertical',
        colorStyle: 'standard',
        disabled: true,
        styles: { color: theme.scheme.onSurface, opacity: 0.38 },
      },
      // Vertical vibrant default
      {
        variant: 'vertical',
        colorStyle: 'vibrant',
        selected: false,
        disabled: false,
        styles: { color: theme.scheme.onTertiaryContainer },
      },
      // Vertical vibrant selected
      {
        variant: 'vertical',
        colorStyle: 'vibrant',
        selected: true,
        disabled: false,
        styles: { color: theme.scheme.onTertiary },
      },
      // Vertical vibrant disabled
      {
        variant: 'vertical',
        colorStyle: 'vibrant',
        disabled: true,
        styles: { color: theme.scheme.onTertiaryContainer, opacity: 0.38 },
      },
    ],
  },

  // Divider
  divider: {
    variants: {
      variant: {
        baseline: {
          marginVertical: BASELINE_DIVIDER_PADDING,
        },
        vertical: {
          marginVertical: VERTICAL_ITEM_TOP_SPACE,
        },
      },
    },
  },

  // Gap (vertical menus only — 2dp space between groups)
  gap: {
    height: VERTICAL_GAP,
  },
}));

// =============================================================================
// Exports
// =============================================================================

Menu.displayName = 'Menu';

export type {
  MenuColorStyle,
  MenuDividerProps,
  MenuGapProps,
  MenuItemLabelProps,
  MenuItemLeadingIconProps,
  MenuItemProps,
  MenuItemSupportingTextProps,
  MenuItemTrailingIconProps,
  MenuItemTrailingTextProps,
  MenuProps,
  MenuVariant,
};
export {
  Menu,
  MenuDivider,
  MenuGap,
  MenuItem,
  MenuItemLabel,
  MenuItemLeadingIcon,
  MenuItemSupportingText,
  MenuItemTrailingIcon,
  MenuItemTrailingText,
};
