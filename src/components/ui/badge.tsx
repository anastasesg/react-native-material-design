/// Material Design Badge
/// Overview: https://m3.material.io/components/badges/overview
/// Specs: https://m3.material.io/components/badges/specs
/// Guidelines: https://m3.material.io/components/badges/guidelines
/// Accessibility: https://m3.material.io/components/badges/accessibility

import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Text } from './text';

// =============================================================================
// Types
// =============================================================================

type BadgeType = 'small' | 'large';

type BadgeProps = {
  /** Badge type: "small" (6dp dot) or "large" (16dp with label). */
  type?: BadgeType;

  /**
   * Numeric count for large badges. Numbers > 999 display as "999+".
   * Ignored when type is "small". Takes precedence over `label`.
   */
  count?: number;

  /**
   * Text label for large badges. Max 4 characters.
   * Ignored when type is "small" or when `count` is provided.
   */
  label?: string;

  /** Whether the badge is visible. Defaults to true. */
  visible?: boolean;

  /** The content to wrap (typically an Icon). */
  children: React.ReactNode;

  /** Style for the outer wrapper. */
  style?: StyleProp<ViewStyle>;

  /** Style for the badge indicator itself. */
  badgeStyle?: StyleProp<ViewStyle>;
};

// =============================================================================
// Helpers
// =============================================================================

function formatBadgeLabel(count: number | undefined, label: string | undefined): string | undefined {
  if (count !== undefined) {
    if (count > 999) return '999+';
    return String(count);
  }
  if (label !== undefined) {
    return label.slice(0, 4);
  }
  return undefined;
}

function getAccessibilityLabel(type: BadgeType, count: number | undefined, label: string | undefined): string {
  if (type === 'small') return 'New notification';
  if (count !== undefined) return String(count);
  if (label !== undefined) return label;
  return 'New notification';
}

// =============================================================================
// Component
// =============================================================================

function Badge({ type = 'small', count, label, visible = true, children, style, badgeStyle }: BadgeProps) {
  const displayLabel = type === 'large' ? formatBadgeLabel(count, label) : undefined;
  const accessibilityLabel = getAccessibilityLabel(type, count, label);

  styles.useVariants({ type, visible });

  return (
    <View style={[styles.wrapper, style]}>
      {children}
      {/* <View style={[styles.badge, badgeStyle]} accessibilityLabel={accessibilityLabel} accessibilityRole="text"> */}
      <Text
        variant="label"
        size="small"
        style={[styles.badge, badgeStyle]}
        numberOfLines={1}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="text"
      >
        {displayLabel}
      </Text>
      {/* </View> */}
    </View>
  );
}

// =============================================================================
// Styles
// =============================================================================

const styles = StyleSheet.create((theme) => ({
  wrapper: {
    // alignSelf: 'flex-start',
    // overflow: 'visible',
  },
  badge: {
    zIndex: 1,
    position: 'absolute',
    color: theme.scheme.onError,
    backgroundColor: theme.scheme.error,

    alignSelf: 'flex-end',
    textAlign: 'center',
    textAlignVertical: 'center',
    overflow: 'hidden',

    variants: {
      type: {
        small: {
          width: 6,
          height: 6,
          borderRadius: 3,
          top: 0,
          right: 0,
        },
        large: {
          top: -4,
          left: '100%',
          marginLeft: -12,
          height: 16,
          minWidth: 16,
          borderRadius: 8,
          paddingHorizontal: 4,
        },
      },
      visible: {
        true: {
          display: 'flex',
        },
        false: {
          display: 'none',
        },
      },
    },
  },
}));

// =============================================================================
// Exports
// =============================================================================

export type { BadgeProps, BadgeType };
export { Badge };
