/// Material Design Lists
/// Overview: https://m3.material.io/components/lists/overview
/// Specs: https://m3.material.io/components/lists/specs
/// Guidelines: https://m3.material.io/components/lists/guidelines
/// Accessibility: https://m3.material.io/components/lists/accessibility

import React, { useMemo } from 'react';
import {
  Image,
  type ImageSourcePropType,
  type ImageStyle,
  Pressable as RNPressable,
  type PressableProps as RNPressableProps,
  type StyleProp,
  View,
  type ViewStyle,
} from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { useInteraction } from '../../hooks';
import { createComponentContext, getDisplayName } from '../../utilities';
import { StateLayer } from '../custom';
import { Icon, type IconProps } from './icon';
import { Text, type TextProps } from './text';

type ListItemCtx = {
  selected: boolean;
  disabled: boolean;
};

const [ListItemProvider, useListItem] = createComponentContext<ListItemCtx>('ListItem');

// =============================================================================
// Types
// =============================================================================

type ListProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

type ListItemProps = Omit<RNPressableProps, 'style' | 'children'> & {
  selected?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

type ListItemLabelProps = Omit<TextProps, 'variant' | 'size'> & {
  children: React.ReactNode;
};

type ListItemSupportingTextProps = Omit<TextProps, 'variant' | 'size'> & {
  children: React.ReactNode;
};

type ListItemOverlineProps = Omit<TextProps, 'variant' | 'size'> & {
  children: React.ReactNode;
};

type ListItemTrailingTextProps = Omit<TextProps, 'variant' | 'size'> & {
  children: React.ReactNode;
};

type ListItemLeadingIconProps = Omit<IconProps, 'size'>;

type ListItemTrailingIconProps = Omit<IconProps, 'size'>;

type ListItemLeadingAvatarProps = {
  label?: string;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

type ListItemLeadingImageProps = {
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
};

type ListDividerProps = {
  variant?: 'fullWidth' | 'inset';
  style?: StyleProp<ViewStyle>;
};

// =============================================================================
// Display name constants (for slot identification)
// =============================================================================

const LIST_ITEM_LABEL = 'ListItemLabel';
const LIST_ITEM_SUPPORTING_TEXT = 'ListItemSupportingText';
const LIST_ITEM_OVERLINE = 'ListItemOverline';
const LIST_ITEM_TRAILING_TEXT = 'ListItemTrailingText';
const LIST_ITEM_LEADING_ICON = 'ListItemLeadingIcon';
const LIST_ITEM_TRAILING_ICON = 'ListItemTrailingIcon';
const LIST_ITEM_LEADING_AVATAR = 'ListItemLeadingAvatar';
const LIST_ITEM_LEADING_IMAGE = 'ListItemLeadingImage';

const LEADING_NAMES = new Set([LIST_ITEM_LEADING_ICON, LIST_ITEM_LEADING_AVATAR, LIST_ITEM_LEADING_IMAGE]);
const TRAILING_NAMES = new Set([LIST_ITEM_TRAILING_ICON, LIST_ITEM_TRAILING_TEXT]);
const CONTENT_NAMES = new Set([LIST_ITEM_LABEL, LIST_ITEM_SUPPORTING_TEXT, LIST_ITEM_OVERLINE]);
const CONTENT_SORT_ORDER = [LIST_ITEM_OVERLINE, LIST_ITEM_LABEL, LIST_ITEM_SUPPORTING_TEXT];

// =============================================================================
// Helpers
// =============================================================================

// =============================================================================
// List (root container)
// =============================================================================

function List({ style, children }: ListProps) {
  return <View style={[styles.list, style]}>{children}</View>;
}

// =============================================================================
// ListItem
// =============================================================================

function ListItem({ selected = false, style, children, disabled = false, ...props }: ListItemProps) {
  // Single-pass: slot partition + line count, memoized by children
  const { lines, leadingSlot, sortedContent, trailingSlots } = useMemo(() => {
    let leading: React.ReactNode = null;
    const content: React.ReactNode[] = [];
    const trailing: React.ReactNode[] = [];
    let hasOverline = false;
    let hasSupportingText = false;
    let hasTrailingText = false;
    let supportingTextLines = 1;

    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) return;
      const name = getDisplayName(child);

      if (name && LEADING_NAMES.has(name)) leading = child;
      else if (name && TRAILING_NAMES.has(name)) trailing.push(child);
      else if (name && CONTENT_NAMES.has(name)) content.push(child);

      if (name === LIST_ITEM_OVERLINE) hasOverline = true;
      if (name === LIST_ITEM_SUPPORTING_TEXT) {
        hasSupportingText = true;
        if ((child.props as any).numberOfLines === 2) supportingTextLines = 2;
      }
      if (name === LIST_ITEM_TRAILING_TEXT) hasTrailingText = true;
    });

    const extraContentCount = (hasOverline ? 1 : 0) + (hasSupportingText ? 1 : 0);
    const computedLines: 1 | 2 | 3 =
      extraContentCount >= 2
        ? 3
        : hasSupportingText && supportingTextLines >= 2
          ? 3
          : extraContentCount >= 1 || hasTrailingText
            ? 2
            : 1;

    content.sort((a, b) => {
      const aName = React.isValidElement(a) ? getDisplayName(a) : '';
      const bName = React.isValidElement(b) ? getDisplayName(b) : '';
      return CONTENT_SORT_ORDER.indexOf(aName ?? '') - CONTENT_SORT_ORDER.indexOf(bName ?? '');
    });

    return { lines: computedLines, leadingSlot: leading, sortedContent: content, trailingSlots: trailing };
  }, [children]);

  const isThreeLine = lines === 3;

  styles.useVariants({ selected, disabled, lines });

  const { progress, handlers } = useInteraction('press', 'hover', 'focus');

  const ctx = useMemo<ListItemCtx>(() => ({ selected, disabled }), [selected, disabled]);

  return (
    <RNPressable
      style={[styles.listItem, style]}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ selected, disabled }}
      {...handlers}
      {...props}
    >
      <ListItemProvider value={ctx}>
        {selected && disabled && <View style={styles.disabledSelectedOverlay} />}
        <StateLayer progress={progress} color="onSurface" disabled={disabled} />
        <View style={[styles.listItemInner, isThreeLine && styles.listItemInnerTop]}>
          {leadingSlot && <View style={[styles.leadingSlot, isThreeLine && styles.leadingSlotTop]}>{leadingSlot}</View>}
          <View style={styles.contentSlot}>{sortedContent}</View>
          {trailingSlots.length > 0 && (
            <View style={[styles.trailingSlot, isThreeLine && styles.trailingSlotTop]}>{trailingSlots}</View>
          )}
        </View>
      </ListItemProvider>
    </RNPressable>
  );
}

// =============================================================================
// Content sub-components
// =============================================================================

function ListItemLabel({ style, ...props }: ListItemLabelProps) {
  const { disabled, selected } = useListItem();
  styles.useVariants({ disabled, selected });
  return <Text variant="body" size="large" style={[styles.labelText, style]} {...props} />;
}
ListItemLabel.displayName = LIST_ITEM_LABEL;

function ListItemSupportingText({ style, ...props }: ListItemSupportingTextProps) {
  const { disabled, selected } = useListItem();
  styles.useVariants({ disabled, selected });
  return <Text variant="body" size="medium" style={[styles.supportingText, style]} {...props} />;
}
ListItemSupportingText.displayName = LIST_ITEM_SUPPORTING_TEXT;

function ListItemOverline({ style, ...props }: ListItemOverlineProps) {
  const { disabled, selected } = useListItem();
  styles.useVariants({ disabled, selected });
  return <Text variant="label" size="small" style={[styles.overlineText, style]} {...props} />;
}
ListItemOverline.displayName = LIST_ITEM_OVERLINE;

function ListItemTrailingText({ style, ...props }: ListItemTrailingTextProps) {
  const { disabled, selected } = useListItem();
  styles.useVariants({ disabled, selected });
  return <Text variant="label" size="small" style={[styles.trailingText, style]} {...props} />;
}
ListItemTrailingText.displayName = LIST_ITEM_TRAILING_TEXT;

// =============================================================================
// Leading sub-components
// =============================================================================

function ListItemLeadingIcon({ style, ...props }: ListItemLeadingIconProps) {
  const { disabled, selected } = useListItem();
  styles.useVariants({ disabled, selected });
  return <Icon size={24} style={[styles.leadingIcon, style]} {...props} />;
}
ListItemLeadingIcon.displayName = LIST_ITEM_LEADING_ICON;

function ListItemLeadingAvatar({ label, style, children }: ListItemLeadingAvatarProps) {
  return (
    <View style={[styles.leadingAvatar, style]}>
      {label ? (
        <Text variant="title" size="medium" style={styles.leadingAvatarLabel}>
          {label}
        </Text>
      ) : (
        children
      )}
    </View>
  );
}
ListItemLeadingAvatar.displayName = LIST_ITEM_LEADING_AVATAR;

function ListItemLeadingImage({ source, style }: ListItemLeadingImageProps) {
  return <Image source={source} style={[styles.leadingImage as StyleProp<ImageStyle>, style]} />;
}
ListItemLeadingImage.displayName = LIST_ITEM_LEADING_IMAGE;

// =============================================================================
// Trailing sub-components
// =============================================================================

function ListItemTrailingIcon({ style, ...props }: ListItemTrailingIconProps) {
  const { disabled, selected } = useListItem();
  styles.useVariants({ disabled, selected });
  return <Icon size={24} style={[styles.trailingIcon, style]} {...props} />;
}
ListItemTrailingIcon.displayName = LIST_ITEM_TRAILING_ICON;

// =============================================================================
// ListDivider
// =============================================================================

function ListDivider({ variant = 'fullWidth', style }: ListDividerProps) {
  styles.useVariants({ dividerVariant: variant });

  return <View accessibilityRole="none" style={[styles.divider, style]} />;
}

// =============================================================================
// Styles
// =============================================================================

const styles = StyleSheet.create((theme) => ({
  // List root container
  list: {
    // M3: container shape = Rectangle, elevation = 0
  },

  // ListItem container
  listItem: {
    overflow: 'hidden',
    backgroundColor: theme.scheme.surface,

    variants: {
      lines: {
        1: { minHeight: 56 },
        2: { minHeight: 72 },
        3: { minHeight: 88 },
      },
      selected: {
        true: { backgroundColor: theme.scheme.secondaryContainer },
        false: {},
      },
      disabled: {
        true: {},
        false: {},
      },
    },
    compoundVariants: [
      // Disabled + selected: clear selected bg; overlay View handles onSurface@0.38
      { selected: true, disabled: true, styles: { backgroundColor: theme.scheme.surface } },
    ],
  },

  // Inner layout row
  listItemInner: {
    flexDirection: 'row',
    alignItems: 'center',
    // M3 spacing: leading-space = 16dp, trailing element right padding = 24dp (baseline layout)
    paddingLeft: 16,
    paddingRight: 24,
    paddingVertical: 10,
    flex: 1,
  },

  // When three-line, shift to top alignment
  listItemInnerTop: {
    alignItems: 'flex-start',
  },

  // Leading slot
  leadingSlot: {
    marginRight: 16, // M3: between-space (label left padding from leading element)
    alignItems: 'center',
    justifyContent: 'center',
  },

  leadingSlotTop: {
    justifyContent: 'flex-start',
  },

  // Content slot — fills remaining space
  contentSlot: {
    flex: 1,
    justifyContent: 'center',
  },

  // Trailing slot
  trailingSlot: {
    marginLeft: 16, // M3: trailing element left padding = 16dp
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  trailingSlotTop: {
    justifyContent: 'flex-start',
  },

  // Disabled + selected overlay: onSurface at 0.38 opacity (rendered as separate View to avoid
  // compounding with child element opacity)
  disabledSelectedOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.scheme.onSurface,
    opacity: 0.38,
  },

  // --- Text styles ---

  labelText: {
    color: theme.scheme.onSurface, // M3: label-text.color

    variants: {
      selected: {
        true: { color: theme.scheme.onSecondaryContainer },
        false: {},
      },
      disabled: {
        true: { color: theme.scheme.onSurface, opacity: 0.38 },
        false: {},
      },
    },
    compoundVariants: [{ selected: true, disabled: true, styles: { color: theme.scheme.onSurface, opacity: 0.38 } }],
  },

  supportingText: {
    color: theme.scheme.onSurfaceVariant, // M3: supporting-text.color

    variants: {
      selected: {
        true: { color: theme.scheme.onSecondaryContainer },
        false: {},
      },
      disabled: {
        true: { color: theme.scheme.onSurface, opacity: 0.38 },
        false: {},
      },
    },
    compoundVariants: [{ selected: true, disabled: true, styles: { color: theme.scheme.onSurface, opacity: 0.38 } }],
  },

  overlineText: {
    color: theme.scheme.onSurfaceVariant, // M3: overline.color

    variants: {
      selected: {
        true: { color: theme.scheme.onSecondaryContainer },
        false: {},
      },
      disabled: {
        true: { color: theme.scheme.onSurface, opacity: 0.38 },
        false: {},
      },
    },
    compoundVariants: [{ selected: true, disabled: true, styles: { color: theme.scheme.onSurface, opacity: 0.38 } }],
  },

  trailingText: {
    color: theme.scheme.onSurfaceVariant, // M3: trailing-supporting-text.color

    variants: {
      selected: {
        true: { color: theme.scheme.onSecondaryContainer },
        false: {},
      },
      disabled: {
        true: { color: theme.scheme.onSurface, opacity: 0.38 },
        false: {},
      },
    },
    compoundVariants: [{ selected: true, disabled: true, styles: { color: theme.scheme.onSurface, opacity: 0.38 } }],
  },

  // --- Icon styles ---

  leadingIcon: {
    color: theme.scheme.onSurfaceVariant, // M3: leading-icon.color

    variants: {
      selected: {
        true: { color: theme.scheme.onSecondaryContainer },
        false: {},
      },
      disabled: {
        true: { color: theme.scheme.onSurface, opacity: 0.38 },
        false: {},
      },
    },
    compoundVariants: [{ selected: true, disabled: true, styles: { color: theme.scheme.onSurface, opacity: 0.38 } }],
  },

  trailingIcon: {
    color: theme.scheme.onSurfaceVariant, // M3: trailing-icon.color

    variants: {
      selected: {
        true: { color: theme.scheme.onSecondaryContainer },
        false: {},
      },
      disabled: {
        true: { color: theme.scheme.onSurface, opacity: 0.38 },
        false: {},
      },
    },
    compoundVariants: [{ selected: true, disabled: true, styles: { color: theme.scheme.onSurface, opacity: 0.38 } }],
  },

  // --- Avatar styles ---

  leadingAvatar: {
    width: 40,
    height: 40,
    borderRadius: theme.shape.full, // M3: leading-avatar.shape = Full
    backgroundColor: theme.scheme.primaryContainer, // M3: leading-avatar.color
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  leadingAvatarLabel: {
    color: theme.scheme.onPrimaryContainer, // M3: leading-avatar-label.color
  },

  // --- Image styles ---

  leadingImage: {
    width: 56,
    height: 56,
    // M3: leading-image.shape = Rectangle (borderRadius 0)
  },

  // --- Divider ---

  divider: {
    height: 1, // M3: divider.height = 1dp
    backgroundColor: theme.scheme.outlineVariant, // M3: divider.color = outline variant

    variants: {
      dividerVariant: {
        fullWidth: {},
        inset: {
          marginLeft: 16, // M3: divider.leading-space = 16dp
          marginRight: 24, // M3: divider inset right padding = 24dp (from baseline layout)
        },
      },
    },
  },
}));

// =============================================================================
// Exports
// =============================================================================

List.displayName = 'List';
ListItem.displayName = 'ListItem';
ListDivider.displayName = 'ListDivider';

export type {
  ListDividerProps,
  ListItemLabelProps,
  ListItemLeadingAvatarProps,
  ListItemLeadingIconProps,
  ListItemLeadingImageProps,
  ListItemOverlineProps,
  ListItemProps,
  ListItemSupportingTextProps,
  ListItemTrailingIconProps,
  ListItemTrailingTextProps,
  ListProps,
};
export {
  List,
  ListDivider,
  ListItem,
  ListItemLabel,
  ListItemLeadingAvatar,
  ListItemLeadingIcon,
  ListItemLeadingImage,
  ListItemOverline,
  ListItemSupportingText,
  ListItemTrailingIcon,
  ListItemTrailingText,
};
