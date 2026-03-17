/// Material Design Chips
/// Overview: https://m3.material.io/components/chips/overview
/// Specs: https://m3.material.io/components/chips/specs
/// Guidelines: https://m3.material.io/components/chips/guidelines
/// Accessibility: https://m3.material.io/components/chips/accessibility

import React, { useMemo } from 'react';
import { Image, type ImageSourcePropType, type StyleProp, View, type ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import type { Scheme } from '@/theme/scheme';

import { useControllableState } from '../../hooks';
import { createComponentContext } from '../../utilities';
import { Pressable, type PressableProps, StateLayer, Surface, type TapEvent } from '../custom';
import { Icon, type IconProps } from './icon';
import { Text, type TextProps } from './text';

// =============================================================================
// Types
// =============================================================================

type ChipType = 'assist' | 'filter' | 'input' | 'suggestion';
type ChipElevation = 'flat' | 'elevated';

function getChipStateLayerColor(type: ChipType, selected: boolean): keyof Scheme {
  if (type === 'assist') return 'onSurface';
  if (type === 'filter') return selected ? 'onSurfaceVariant' : 'onSecondaryContainer';
  if (type === 'input') return 'onSurfaceVariant';
  return 'onSurfaceVariant'; // suggestion
}

type ChipCtx = {
  type: ChipType;
  elevation: ChipElevation;
  selected: boolean;
  disabled: boolean;
};

const [ChipProvider, useChip] = createComponentContext<ChipCtx>('Chip');

type ChipProps = Omit<PressableProps, 'style' | 'children'> & {
  type?: ChipType;
  elevation?: ChipElevation;

  /** Enable selected state (filter and input chips only). */
  selected?: boolean;
  defaultSelected?: boolean;
  onSelectedChange?: (selected: boolean) => void;

  /** Avatar image source for input chips. */
  avatar?: ImageSourcePropType;

  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

// =============================================================================
// Main Component
// =============================================================================

function Chip({
  type = 'assist',
  elevation = 'flat',
  selected: selectedProp,
  defaultSelected,
  onSelectedChange,
  avatar,
  style,
  containerStyle,
  children,
  onPress,
  disabled = false,
  ...props
}: ChipProps) {
  const isSelectable = type === 'filter' || type === 'input';
  const [selectedState, setSelectedState] = useControllableState({
    value: isSelectable ? selectedProp : undefined,
    defaultValue: isSelectable ? (defaultSelected ?? false) : false,
    onChange: isSelectable ? onSelectedChange : undefined,
  });
  const selected = isSelectable ? selectedState : false;

  // Determine if children contain a leading icon (for padding calculation)
  const hasLeadingIcon = React.useMemo(() => {
    let found = false;
    React.Children.forEach(children as React.ReactNode, (child) => {
      if (React.isValidElement(child) && child.type === ChipIcon) {
        found = true;
      }
    });
    return found || !!avatar;
  }, [children, avatar]);

  const hasTrailingIcon = React.useMemo(() => {
    let found = false;
    React.Children.forEach(children as React.ReactNode, (child) => {
      if (React.isValidElement(child) && child.type === ChipTrailingIcon) {
        found = true;
      }
    });
    return found;
  }, [children]);

  // Filter chips show a checkmark when selected (replaces leading icon)
  const showCheckmark = type === 'filter' && selected;

  styles.useVariants({ type, elevation, selected, disabled });

  const stateLayerColor = getChipStateLayerColor(type, selected);

  const handlePress = React.useCallback((e: TapEvent) => {
    if (disabled) return;
    if (isSelectable) {
      setSelectedState((prev) => !prev);
    }
    onPress?.(e);
  }, [disabled, isSelectable, setSelectedState, onPress]);

  const ctx = useMemo<ChipCtx>(() => ({ type, elevation, selected, disabled }), [type, elevation, selected, disabled]);

  return (
    <Pressable
      style={[styles.root, style]}
      onPress={handlePress}
      disabled={disabled}
      hitSlop={{ top: 8, bottom: 8 }}
      accessibilityRole={isSelectable ? 'checkbox' : 'button'}
      accessibilityState={{ disabled, checked: isSelectable ? selected : undefined }}
      {...props}
    >
      <Surface
        shape="small"
        interactions={{ shapes: { press: 'xsmall' } }}
        style={[
          styles.container,
          hasLeadingIcon && styles.containerWithLeadingIcon,
          hasTrailingIcon && styles.containerWithTrailingIcon,
          containerStyle,
        ]}
      >
        {/* Avatar for input chips */}
        {avatar && (
          <View style={styles.avatarContainer}>
            <Image source={avatar} style={styles.avatar} />
          </View>
        )}

        {/* Filter chip checkmark when selected */}
        {showCheckmark && <Icon name="check" size={18} style={styles.leadingIcon} />}

        <ChipProvider value={ctx}>{children}</ChipProvider>

        {/* Disabled overlays: border-only for flat+unselected, fill for elevated/selected */}
        {disabled && elevation === 'flat' && !selected && <View style={styles.disabledBorder} />}
        {disabled && (elevation === 'elevated' || selected) && <View style={styles.disabledContainer} />}

        <StateLayer color={stateLayerColor} />
      </Surface>
    </Pressable>
  );
}

// =============================================================================
// Sub-components
// =============================================================================

type ChipIconProps = IconProps;

function ChipIcon({ style, ...props }: ChipIconProps) {
  const { type, elevation, selected, disabled } = useChip();
  styles.useVariants({ type, elevation, selected, disabled });
  return <Icon size={18} style={[styles.leadingIcon, style]} {...props} />;
}

type ChipLabelProps = TextProps;

function ChipLabel({ style, ...props }: ChipLabelProps) {
  const { type, elevation, selected, disabled } = useChip();
  styles.useVariants({ type, elevation, selected, disabled });
  return <Text variant="label" size="large" style={[styles.label, style]} {...props} />;
}

type ChipTrailingIconProps = IconProps;

function ChipTrailingIcon({ style, ...props }: ChipTrailingIconProps) {
  const { type, elevation, selected, disabled } = useChip();
  styles.useVariants({ type, elevation, selected, disabled });
  return <Icon size={18} style={[styles.trailingIcon, style]} {...props} />;
}

// =============================================================================
// Styles
// =============================================================================
// Chip types and their color mappings (from M3 spec):
//
//   Type       | Flat (unselected)                        | Flat (selected)
//   -----------|------------------------------------------|---------------------------
//   assist     | outline border, onSurface label           | N/A (no selection)
//   filter     | outlineVariant border, onSurfaceVariant   | secondaryContainer bg, onSecondaryContainer
//   input      | outline border, onSurfaceVariant          | secondaryContainer bg, onSecondaryContainer
//   suggestion | outlineVariant border, onSurfaceVariant   | N/A (no selection)
//
//   Elevated variants drop the border and add Level 1 elevation + surfaceContainerLow bg.
//   Selected elevated filter/input chips use secondaryContainer bg.

const styles = StyleSheet.create((theme) => ({
  root: {
    variants: {
      elevation: {
        flat: {},
        elevated: {
          shadowColor: theme.scheme.shadow,
          ...theme.elevation[1],
        },
      },
      disabled: {
        true: {
          ...theme.elevation[0],
          shadowOpacity: 0,
        },
        false: {},
      },
    },
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 32,
    paddingHorizontal: 16,
    gap: 8,

    variants: {
      type: {
        assist: {},
        filter: {},
        input: {},
        suggestion: {},
      },
      elevation: {
        flat: {},
        elevated: {
          backgroundColor: theme.scheme.surfaceContainerLow,
        },
      },
      selected: {
        true: {},
        false: {},
      },
      disabled: {
        true: {
          backgroundColor: undefined,
          borderWidth: undefined,
          borderColor: undefined,
        },
        false: {},
      },
    },
    compoundVariants: [
      // --- Flat unselected: outline border ---
      {
        type: 'assist',
        elevation: 'flat',
        selected: false,
        styles: { borderWidth: 1, borderColor: theme.scheme.outlineVariant },
      },
      {
        type: 'filter',
        elevation: 'flat',
        selected: false,
        styles: { borderWidth: 1, borderColor: theme.scheme.outlineVariant },
      },
      {
        type: 'input',
        elevation: 'flat',
        selected: false,
        styles: { borderWidth: 1, borderColor: theme.scheme.outline },
      },
      {
        type: 'suggestion',
        elevation: 'flat',
        selected: false,
        styles: { borderWidth: 1, borderColor: theme.scheme.outlineVariant },
      },

      // --- Flat selected: filled container, no border ---
      {
        type: 'filter',
        elevation: 'flat',
        selected: true,
        styles: { backgroundColor: theme.scheme.secondaryContainer, borderWidth: 0 },
      },
      {
        type: 'input',
        elevation: 'flat',
        selected: true,
        styles: { backgroundColor: theme.scheme.secondaryContainer, borderWidth: 0 },
      },

      // --- Elevated selected: secondary container ---
      {
        type: 'filter',
        elevation: 'elevated',
        selected: true,
        styles: { backgroundColor: theme.scheme.secondaryContainer },
      },
      {
        type: 'input',
        elevation: 'elevated',
        selected: true,
        styles: { backgroundColor: theme.scheme.secondaryContainer },
      },

      // --- Disabled flat+unselected: border handled by disabledBorder overlay ---
      {
        elevation: 'flat',
        selected: false,
        disabled: true,
        styles: { borderWidth: 0 },
      },
      // --- Disabled flat + selected: faint fill via disabledContainer overlay ---
      { elevation: 'flat', selected: true, disabled: true, styles: { borderWidth: 0 } },
      // --- Disabled elevated: faint fill via disabledContainer overlay ---
      { elevation: 'elevated', disabled: true, styles: { backgroundColor: undefined } },
    ],
  },

  // Padding adjustments when leading/trailing icons present
  containerWithLeadingIcon: {
    paddingLeft: 8,
  },
  containerWithTrailingIcon: {
    paddingRight: 8,
  },

  // Avatar (input chip only)
  avatarContainer: {
    width: 24,
    height: 24,
    borderRadius: theme.shape.medium, // 12dp per spec
    overflow: 'hidden',
    marginLeft: -4, // 4dp left padding for avatar (8 - 4 = adjust from containerWithLeadingIcon)
  },
  avatar: {
    width: 24,
    height: 24,
  },

  disabledContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.scheme.onSurface,
    opacity: theme.state.disabledContainer,
  },
  // Separate border overlay for disabled flat+unselected chips.
  // RN cannot style border opacity independently, so we use a dedicated
  // overlay at 0.12 opacity with only a border (no fill) to match M3 spec:
  // md.comp.*.flat.disabled.outline.color = onSurface, outline.opacity = 0.12
  disabledBorder: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 1,
    borderColor: theme.scheme.onSurface,
    opacity: theme.state.disabledContainer, // 0.12
  },

  label: {
    variants: {
      type: {
        assist: { color: theme.scheme.onSurface },
        filter: { color: theme.scheme.onSurfaceVariant },
        input: { color: theme.scheme.onSurfaceVariant },
        suggestion: { color: theme.scheme.onSurfaceVariant },
      },
      selected: {
        true: {},
        false: {},
      },
      disabled: {
        true: { color: theme.scheme.onSurface, opacity: theme.state.disabledContent },
        false: {},
      },
    },
    compoundVariants: [
      { type: 'filter', selected: true, styles: { color: theme.scheme.onSecondaryContainer } },
      { type: 'input', selected: true, styles: { color: theme.scheme.onSecondaryContainer } },
    ],
  },

  leadingIcon: {
    variants: {
      type: {
        assist: { color: theme.scheme.primary },
        filter: { color: theme.scheme.primary },
        input: { color: theme.scheme.onSurfaceVariant },
        suggestion: { color: theme.scheme.onSurfaceVariant },
      },
      selected: {
        true: {},
        false: {},
      },
      disabled: {
        true: { color: theme.scheme.onSurface, opacity: theme.state.disabledContent },
        false: {},
      },
    },
    compoundVariants: [
      { type: 'filter', selected: true, styles: { color: theme.scheme.onSecondaryContainer } },
      { type: 'input', selected: true, styles: { color: theme.scheme.onSecondaryContainer } },
    ],
  },

  trailingIcon: {
    variants: {
      type: {
        assist: { color: theme.scheme.onSurfaceVariant },
        filter: { color: theme.scheme.onSurfaceVariant },
        input: { color: theme.scheme.onSurfaceVariant },
        suggestion: { color: theme.scheme.onSurfaceVariant },
      },
      selected: {
        true: {},
        false: {},
      },
      disabled: {
        true: { color: theme.scheme.onSurface, opacity: theme.state.disabledContent },
        false: {},
      },
    },
    compoundVariants: [
      { type: 'filter', selected: true, styles: { color: theme.scheme.onSecondaryContainer } },
      { type: 'input', selected: true, styles: { color: theme.scheme.onSecondaryContainer } },
    ],
  },
}));

// =============================================================================
// Exports
// =============================================================================

Chip.displayName = 'Chip';
ChipIcon.displayName = 'ChipIcon';
ChipLabel.displayName = 'ChipLabel';
ChipTrailingIcon.displayName = 'ChipTrailingIcon';

export type { ChipElevation, ChipIconProps, ChipLabelProps, ChipProps, ChipTrailingIconProps, ChipType };
export { Chip, ChipIcon, ChipLabel, ChipTrailingIcon };
