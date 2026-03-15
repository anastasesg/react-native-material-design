/// Material Design Icon Button
/// Overview: https://m3.material.io/components/icon-buttons/overview
/// Specs: https://m3.material.io/components/icon-buttons/specs
/// Guidelines: https://m3.material.io/components/icon-buttons/guidelines
/// Accessibility: https://m3.material.io/components/icon-buttons/accessibility

import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Pressable, type PressableProps, type TapEvent } from '@/components/custom/pressable';
import { useControllableState } from '@/hooks';
import type { Scheme } from '@/theme/scheme';
import { createComponentContext } from '@/utilities';

import { ShapeContainer, type ShapeToken, StateLayer } from '../custom';
import { useButtonGroupItem } from './button-group';
import { Icon, type IconProps, type MaterialSymbol } from './icon';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltips';

// ---------------------------------------------------------------------------
// Internal context — shared between IconButton and IconButtonIcon
// ---------------------------------------------------------------------------

/** @internal State passed from IconButton to its sub-components via context. */
type IconButtonCtx = {
  size: IconButtonSize;
  shape: IconButtonShape;
  variant: IconButtonVariant;
  selection: IconButtonSelection;
  disabled: boolean;
};

const [IconButtonProvider, useIconButton] = createComponentContext<IconButtonCtx>('IconButton');

// ---------------------------------------------------------------------------
// Shape resolution helpers
// ---------------------------------------------------------------------------

/**
 * Computes the rest (unpressed) shape token from M3 spec rules.
 *
 * - Rounded buttons always use `'full'` (pill — capped at containerHeight/2 in ShapeContainer)
 * - Square buttons scale with size:
 *   - xsmall/small → `'medium'` (12dp)
 *   - medium → `'large'` (16dp)
 *   - large/xlarge → `'xlarge'` (28dp)
 * - Selected toggle buttons invert the shape (rounded↔square)
 */
function getIconButtonRestShapeToken(
  size: IconButtonSize,
  shape: IconButtonShape,
  selection: IconButtonSelection,
): ShapeToken {
  const isSelected = selection === 'selected';
  const effectiveShape = isSelected ? (shape === 'rounded' ? 'square' : 'rounded') : shape;
  if (effectiveShape === 'rounded') return 'full';
  if (size === 'xsmall' || size === 'small') return 'medium';
  if (size === 'medium') return 'large';
  return 'xlarge';
}

/**
 * Computes the pressed shape token — corners round toward the pressed shape
 * during a press interaction, creating the M3 "squish" effect.
 *
 * - large/xlarge → `'large'` (16dp)
 * - medium → `'medium'` (12dp)
 * - xsmall/small → `'small'` (8dp)
 */
function getIconButtonPressedShapeToken(size: IconButtonSize): ShapeToken {
  if (size === 'large' || size === 'xlarge') return 'large';
  if (size === 'medium') return 'medium';
  return 'small';
}

/**
 * Returns the M3 state layer color for a given variant + selection combination.
 *
 * Color mapping (from M3 spec):
 *
 *   Variant   | none / unselected        | selected
 *   ----------|--------------------------|------------------------
 *   filled    | onPrimary / onSurfVar    | onPrimary
 *   tonal     | onSecondaryContainer     | onSecondary
 *   outlined  | onSurfaceVariant         | inverseOnSurface
 *   standard  | onSurfaceVariant         | primary
 */
function getIconButtonStateLayerColor(variant: IconButtonVariant, selection: IconButtonSelection): keyof Scheme {
  if (selection === 'selected') {
    if (variant === 'filled') return 'onPrimary';
    if (variant === 'tonal') return 'onSecondary';
    if (variant === 'outlined') return 'inverseOnSurface';
    if (variant === 'standard') return 'primary';
  }
  if (selection === 'unselected') {
    if (variant === 'filled') return 'onSurfaceVariant';
    if (variant === 'tonal') return 'onSecondaryContainer';
    return 'onSurfaceVariant';
  }
  // 'none' — non-toggle default
  if (variant === 'filled') return 'onPrimary';
  if (variant === 'tonal') return 'onSecondaryContainer';
  return 'onSurfaceVariant';
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/**
 * M3 spec: icon button disabled state layer uses 0.1 opacity (not the system default 0.12).
 * Spec token: `md.comp.icon-button.disabled.container.opacity = 0.1`
 */
const DISABLED_STATE_LAYER_OPACITY = 0.1;

/** Icon size per button size tier (M3 spec). */
const ICON_SIZE: Record<IconButtonSize, number> = {
  xsmall: 20,
  small: 24,
  medium: 24,
  large: 32,
  xlarge: 40,
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Icon button size — controls container dimensions, icon size, and padding. */
type IconButtonSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

/** Icon button shape — 'rounded' (pill) or 'square' (size-dependent corner radius). */
type IconButtonShape = 'rounded' | 'square';

/** Icon button variant — determines container color and border treatment. */
type IconButtonVariant = 'filled' | 'outlined' | 'standard' | 'tonal';

/**
 * Derived toggle selection state — computed internally from `toggle` + `selected`.
 * Not a consumer input. Consumers control selection via the `toggle`, `selected`,
 * `defaultSelected`, and `onSelectedChange` props on `IconButton`.
 *
 * - `'none'` — non-toggle button (toggle={false})
 * - `'selected'` — toggle button in the selected state
 * - `'unselected'` — toggle button in the unselected state
 */
type IconButtonSelection = 'none' | 'selected' | 'unselected';

/**
 * Container width style (**M3 Expressive**). Controls horizontal padding
 * around the icon, making the container narrower or wider than the default square.
 */
type IconButtonWidth = 'narrow' | 'regular' | 'wide';

type IconButtonProps = Omit<PressableProps, 'disabled'> & {
  /** Disables the icon button — prevents press events, dims content. */
  disabled?: boolean;

  /**
   * Icon button size tier. Controls container dimensions and icon size.
   *
   * `'small'` is the M3 baseline default. Other sizes are **M3 Expressive**.
   * @default 'small'
   */
  size?: IconButtonSize;

  /**
   * Icon button shape style.
   * - `'rounded'` — fully rounded (borderRadius: full)
   * - `'square'` — size-dependent corner radius (**M3 Expressive**)
   * @default 'rounded'
   */
  shape?: IconButtonShape;

  /**
   * Style applied to the outer Pressable wrapper (margin, positioning, touch area).
   * For container-level overrides (background, border, padding), use `containerStyle` instead.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Visual variant — determines container color and border treatment.
   * @default 'filled'
   */
  variant?: IconButtonVariant;

  /**
   * Container width style (**M3 Expressive**). Controls horizontal padding
   * around the icon, making the container narrower or wider than the default square.
   * @default 'regular'
   */
  width?: IconButtonWidth;

  /**
   * Enables toggle mode. When true, the button alternates between
   * 'selected' and 'unselected' states on each press.
   * @default false
   */
  toggle?: boolean;

  /**
   * Controlled selected state. Ignored unless `toggle={true}`.
   * When provided, the consumer owns the toggle state and must update it
   * via `onSelectedChange`. Omit to use uncontrolled mode with `defaultSelected`.
   */
  selected?: boolean;

  /**
   * Initial selected state for uncontrolled toggle buttons.
   * Ignored unless `toggle={true}` and `selected` is not provided.
   * @default false
   */
  defaultSelected?: boolean;

  /** Called when the toggle state changes. Ignored unless `toggle={true}`. */
  onSelectedChange?: (selected: boolean) => void;

  /**
   * Plain tooltip text shown on long press (native) or hover (web/desktop).
   * M3 spec requires icon buttons to display a tooltip describing their action.
   * Also used as fallback for `accessibilityLabel` when not explicitly provided.
   */
  tooltip?: string;

  /**
   * Style applied to the inner ShapeContainer (the visible rounded/square container).
   * Use this for container-level overrides (background, border, padding).
   * Use `style` for the outer Pressable wrapper (margin, positioning, touch area).
   */
  containerStyle?: StyleProp<ViewStyle>;
};

// ---------------------------------------------------------------------------
// IconButton
// ---------------------------------------------------------------------------

/**
 * M3 Icon Button — a button that displays a single icon.
 *
 * Composable: use {@link IconButtonIcon} as a child to render the icon.
 * State (size, variant, disabled, selection) flows to sub-components via context.
 *
 * ## Layer stack
 *
 * ```
 * Pressable                    ← RNGH gesture tracking, interaction progress context
 *   └─ ShapeContainer          ← animated borderRadius (shape morphing + focus ring)
 *       ├─ StateLayer          ← press/hover/focus tint overlay + disabled container overlay
 *       └─ IconButtonProvider  ← React Context (size, shape, variant, selection, disabled)
 *           └─ IconButtonIcon  ← auto-sized Material Symbol icon
 * ```
 *
 * All interaction animations (shape morph, state layer opacity) run entirely
 * on the UI thread via Reanimated SharedValues. Zero React re-renders occur
 * during press/hover/focus interactions.
 *
 * ## Toggle mode
 *
 * Set `toggle` to enable selection toggling on press. Supports both controlled
 * (`selected` + `onSelectedChange`) and uncontrolled (`defaultSelected`) modes
 * via {@link useControllableState}.
 *
 * ## Tooltip
 *
 * When `tooltip` is provided, the button is automatically wrapped in a
 * `<Tooltip variant="plain">`. The tooltip text is also used as fallback
 * for `accessibilityLabel` when not explicitly provided, and as
 * `accessibilityHint` when both label and tooltip are present.
 *
 * ## ButtonGroup integration
 *
 * When used inside a `ButtonGroup`, reads `useButtonGroupItem()` to detect
 * whether corner animation should be suppressed (e.g. for shared-edge groups).
 *
 * @example
 * ```tsx
 * // Filled icon button (default variant)
 * <IconButton onPress={handlePress} accessibilityLabel="Close">
 *   <IconButtonIcon name="close" />
 * </IconButton>
 *
 * // Wide icon button with tooltip
 * <IconButton width="wide" tooltip="Add to favorites" accessibilityLabel="Favorite">
 *   <IconButtonIcon name="favorite" />
 * </IconButton>
 *
 * // Toggle icon button (uncontrolled)
 * <IconButton toggle defaultSelected={false} variant="tonal" accessibilityLabel="Bookmark">
 *   <IconButtonIcon name="bookmark_border" selectedName="bookmark" />
 * </IconButton>
 *
 * // Controlled toggle
 * <IconButton toggle selected={isBookmarked} onSelectedChange={setIsBookmarked}
 *   variant="outlined" accessibilityLabel="Bookmark">
 *   <IconButtonIcon name="bookmark_border" selectedName="bookmark" />
 * </IconButton>
 * ```
 */
function IconButton({
  ref,
  size = 'small',
  variant = 'filled',
  shape = 'rounded',
  width = 'regular',
  toggle = false,
  selected: selectedProp,
  defaultSelected,
  onSelectedChange,
  tooltip,
  style,
  containerStyle,
  children,
  onPress,
  disabled = false,
  accessibilityLabel,
  ...props
}: IconButtonProps) {
  // -- Toggle state ----------------------------------------------------------
  const [selected, setSelected] = useControllableState({
    value: toggle ? selectedProp : undefined,
    defaultValue: defaultSelected ?? false,
    onChange: toggle ? onSelectedChange : undefined,
  });
  const selection: IconButtonSelection = toggle ? (selected ? 'selected' : 'unselected') : 'none';

  // -- Variant activation ----------------------------------------------------
  styles.useVariants({ size, variant, width, selection, disabled });

  // -- Shape resolution ------------------------------------------------------
  // ButtonGroup integration: suppress corner animation when inside a group
  const groupItem = useButtonGroupItem();
  const suppressCorner = groupItem?.suppressCornerAnimation ?? false;
  const restShape = getIconButtonRestShapeToken(size, shape, selection);
  const pressedShape = suppressCorner ? undefined : getIconButtonPressedShapeToken(size);

  // -- State layer color -----------------------------------------------------
  const stateLayerColor = getIconButtonStateLayerColor(variant, selection);

  // -- Press handler ---------------------------------------------------------
  const handlePress = React.useCallback((e: TapEvent) => {
    if (disabled) return;
    if (toggle) {
      setSelected((prev) => !prev);
    }
    onPress?.(e);
  }, [disabled, toggle, setSelected, onPress]);

  // -- Context for sub-components --------------------------------------------
  const ctx = React.useMemo<IconButtonCtx>(
    () => ({ size, shape, variant, selection, disabled }),
    [size, shape, variant, selection, disabled],
  );

  // -- Accessibility ---------------------------------------------------------
  // Always use 'button' — 'togglebutton' has no native equivalent on iOS/Android
  // and silently falls back to a plain View. Toggle state is communicated via
  // accessibilityState.selected.
  const a11yState = React.useMemo(() => ({ disabled, ...(toggle && { selected }) }), [disabled, toggle, selected]);

  // Fall back to tooltip text when accessibilityLabel is not provided.
  // When both are present, tooltip becomes the accessibilityHint.
  const resolvedA11yLabel = accessibilityLabel ?? tooltip;

  // -- DEV-only warnings -----------------------------------------------------

  if (__DEV__) {
    // eslint-disable-next-line react-hooks/rules-of-hooks -- __DEV__ is a build-time constant
    React.useEffect(() => {
      if (!resolvedA11yLabel) {
        console.warn(
          'IconButton: icon-only buttons require an accessibilityLabel (or tooltip) prop for screen readers.',
        );
      }
      if (!tooltip) {
        console.warn(
          'IconButton: M3 spec requires a tooltip describing the action. Provide a `tooltip` prop for hover/long-press affordance.',
        );
      }
      if (!toggle && (selectedProp !== undefined || onSelectedChange !== undefined || defaultSelected !== undefined)) {
        console.warn('IconButton: selected/defaultSelected/onSelectedChange are ignored without toggle={true}.');
      }
    }, [resolvedA11yLabel, tooltip, toggle, selectedProp, onSelectedChange, defaultSelected]);
  }

  // -- Render ----------------------------------------------------------------
  const button = (
    <Pressable
      ref={ref}
      style={[styles.root, style]}
      onPress={handlePress}
      disabled={disabled}
      speed="fast"
      accessibilityRole="button"
      accessibilityState={a11yState}
      accessibilityLabel={resolvedA11yLabel}
      accessibilityHint={accessibilityLabel && tooltip ? tooltip : undefined}
      {...props}
    >
      <ShapeContainer
        shape={restShape}
        shapes={pressedShape ? { press: pressedShape } : undefined}
        style={[styles.content, containerStyle]}
      >
        <StateLayer color={stateLayerColor} disabled={disabled} disabledOpacity={DISABLED_STATE_LAYER_OPACITY} />
        <IconButtonProvider value={ctx}>{children}</IconButtonProvider>
      </ShapeContainer>
    </Pressable>
  );

  // Wrap in Tooltip when tooltip text is provided
  if (tooltip) {
    return (
      <Tooltip variant="plain">
        <TooltipTrigger>{button}</TooltipTrigger>
        <TooltipContent>{tooltip}</TooltipContent>
      </Tooltip>
    );
  }

  return button;
}

// ---------------------------------------------------------------------------
// IconButtonIcon
// ---------------------------------------------------------------------------

type IconButtonIconProps = IconProps & {
  /**
   * Icon name to use when the parent toggle IconButton is in the 'selected' state.
   * M3 guidelines: toggle buttons should use an outlined icon when unselected
   * and a filled version when selected.
   */
  selectedName?: MaterialSymbol;
};

/**
 * Icon sub-component for {@link IconButton}. Must be used inside an IconButton.
 *
 * Automatically sizes the icon based on the parent IconButton's size and applies
 * variant-appropriate coloring via unistyles variants.
 *
 * The icon is hidden from the accessibility tree (`importantForAccessibility="no"`)
 * so screen readers don't announce the icon glyph name as a separate element —
 * the parent `IconButton`'s `accessibilityLabel` provides the semantic description.
 *
 * @example
 * ```tsx
 * <IconButton variant="filled" accessibilityLabel="Add">
 *   <IconButtonIcon name="add" />
 * </IconButton>
 *
 * // Toggle with selected icon swap
 * <IconButton toggle variant="tonal" accessibilityLabel="Like">
 *   <IconButtonIcon name="favorite_border" selectedName="favorite" />
 * </IconButton>
 * ```
 */
function IconButtonIcon({ selectedName, style, ...props }: IconButtonIconProps) {
  const { size, variant, selection, disabled } = useIconButton();
  styles.useVariants({ size, variant, selection, disabled });

  if (__DEV__) {
    if (selection !== 'none' && !selectedName) {
      console.warn(
        'IconButtonIcon: toggle icon buttons should provide a selectedName prop for visual selection feedback.',
      );
    }
  }

  // Swap icon name when toggle is selected and a selectedName is provided
  if (selectedName && selection === 'selected') {
    props = { ...props, name: selectedName };
  }

  const iconSize = ICON_SIZE[size];

  return <Icon size={iconSize} importantForAccessibility="no" style={[styles.icon, style]} {...props} />;
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
//
// Layout model:
//
//   root (Pressable)       ← minWidth/minHeight ensures 48dp touch target for xsmall/small
//     └─ content (ShapeContainer) ← fixed height per size tier, paddingHorizontal per width×size
//         ├─ StateLayer    ← absolute-fill overlay
//         └─ Icon          ← centered icon glyph
//
// Width variants control horizontal padding around the icon, making the
// container narrower or wider than the default square. Spec tokens:
//
//   Size    | Narrow | Regular | Wide
//   --------|--------|---------|------
//   xsmall  |   4dp  |   6dp   | 10dp
//   small   |   4dp  |   8dp   | 14dp
//   medium  |  12dp  |  16dp   | 24dp
//   large   |  16dp  |  32dp   | 48dp
//   xlarge  |  32dp  |  48dp   | 72dp
//

const styles = StyleSheet.create((theme) => ({
  // Outer pressable wrapper — ensures minimum 48dp touch target for smaller sizes.
  // The content (visible container) is centered within this area.
  root: {
    alignItems: 'center',
    justifyContent: 'center',

    variants: {
      size: {
        xsmall: {
          minWidth: 48,
          minHeight: 48,
        },
        small: {
          minWidth: 48,
          minHeight: 48,
        },
        medium: {
          minWidth: 56,
          minHeight: 56,
        },
        large: {
          minWidth: 96,
          minHeight: 96,
        },
        xlarge: {
          minWidth: 136,
          minHeight: 136,
        },
      },
      // Structural placeholders — unistyles requires all variant keys declared
      // in useVariants() to exist in every style object that participates.
      variant: {
        filled: {},
        outlined: {},
        standard: {},
        tonal: {},
      },
      width: {
        narrow: {},
        regular: {},
        wide: {},
      },
      selection: {
        none: {},
        selected: {},
        unselected: {},
      },
      disabled: {
        true: {},
        false: {},
      },
    },
  },
  // The visible button container. Rendered inside ShapeContainer (which clips to
  // animated borderRadius). Layout, colors, and borders are all variant-driven.
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden',

    variants: {
      size: {
        xsmall: {
          height: 32,
        },
        small: {
          height: 40,
        },
        medium: {
          height: 56,
        },
        large: {
          height: 96,
        },
        xlarge: {
          height: 136,
        },
      },
      variant: {
        filled: {
          backgroundColor: theme.scheme.primary,
        },
        outlined: {
          borderWidth: 1,
          borderColor: theme.scheme.outlineVariant,
        },
        standard: {},
        tonal: {
          backgroundColor: theme.scheme.secondaryContainer,
        },
      },
      width: {
        narrow: {},
        regular: {},
        wide: {},
      },
      selection: {
        none: {},
        selected: {},
        unselected: {},
      },
      disabled: {
        true: {
          // Clear variant-applied colors so the StateLayer disabled overlay is the sole
          // container fill. Compound variants below may re-apply specific values (e.g.
          // outlined border). This relies on compound variants resolving after simple variants.
          backgroundColor: undefined,
        },
        false: {},
      },
    },
    compoundVariants: [
      // -- Width × size: paddingHorizontal (from M3 spec) ----------------------
      // xsmall
      { size: 'xsmall', width: 'narrow', styles: { paddingHorizontal: 4 } },
      { size: 'xsmall', width: 'regular', styles: { paddingHorizontal: 6 } },
      { size: 'xsmall', width: 'wide', styles: { paddingHorizontal: 10 } },
      // small
      { size: 'small', width: 'narrow', styles: { paddingHorizontal: 4 } },
      { size: 'small', width: 'regular', styles: { paddingHorizontal: 8 } },
      { size: 'small', width: 'wide', styles: { paddingHorizontal: 14 } },
      // medium
      { size: 'medium', width: 'narrow', styles: { paddingHorizontal: 12 } },
      { size: 'medium', width: 'regular', styles: { paddingHorizontal: 16 } },
      { size: 'medium', width: 'wide', styles: { paddingHorizontal: 24 } },
      // large
      { size: 'large', width: 'narrow', styles: { paddingHorizontal: 16 } },
      { size: 'large', width: 'regular', styles: { paddingHorizontal: 32 } },
      { size: 'large', width: 'wide', styles: { paddingHorizontal: 48 } },
      // xlarge
      { size: 'xlarge', width: 'narrow', styles: { paddingHorizontal: 32 } },
      { size: 'xlarge', width: 'regular', styles: { paddingHorizontal: 48 } },
      { size: 'xlarge', width: 'wide', styles: { paddingHorizontal: 72 } },

      // -- Outlined border width per size ------------------------------------
      { size: 'large', variant: 'outlined', styles: { borderWidth: 2 } },
      { size: 'xlarge', variant: 'outlined', styles: { borderWidth: 3 } },

      // -- Toggle: unselected container colors --------------------------------
      { variant: 'filled', selection: 'unselected', styles: { backgroundColor: theme.scheme.surfaceContainer } },
      // tonal unselected = secondaryContainer (same as base, no override needed)

      // -- Toggle: selected container colors ----------------------------------
      // filled selected = primary (same as default, no override needed)
      { variant: 'tonal', selection: 'selected', styles: { backgroundColor: theme.scheme.secondary } },
      {
        variant: 'outlined',
        selection: 'selected',
        styles: { backgroundColor: theme.scheme.inverseSurface, borderWidth: 0 },
      },
      // standard has no container color change

      // -- Disabled overrides ------------------------------------------------
      // Container bg removed; StateLayer renders onSurface at disabledOpacity=0.1 as overlay
      { variant: 'filled', disabled: true, styles: { backgroundColor: undefined } },
      { variant: 'tonal', disabled: true, styles: { backgroundColor: undefined } },
      { variant: 'outlined', selection: 'selected', disabled: true, styles: { backgroundColor: undefined } },
      // Disabled outlined: retain border at full outlineVariant opacity
      { variant: 'outlined', disabled: true, styles: { borderColor: theme.scheme.outlineVariant } },
    ],
  },
  // Icon color styles — applied to IconButtonIcon via useVariants.
  // Base color is onSurfaceVariant (standard/outlined default).
  icon: {
    color: theme.scheme.onSurfaceVariant,
    variants: {
      // Structural — size variants exist so useVariants({ size, ... }) doesn't error
      size: {
        xsmall: {},
        small: {},
        medium: {},
        large: {},
        xlarge: {},
      },
      variant: {
        filled: {
          color: theme.scheme.onPrimary,
        },
        outlined: {
          color: theme.scheme.onSurfaceVariant,
        },
        standard: {
          color: theme.scheme.onSurfaceVariant,
        },
        tonal: {
          color: theme.scheme.onSecondaryContainer,
        },
      },
      selection: {
        none: {},
        selected: {},
        unselected: {},
      },
      disabled: {
        true: {
          color: theme.scheme.onSurface,
          opacity: theme.state.disabledContent,
        },
        false: {},
      },
    },
    compoundVariants: [
      // Toggle unselected icon colors
      { variant: 'filled', selection: 'unselected', styles: { color: theme.scheme.onSurfaceVariant } },
      { variant: 'tonal', selection: 'unselected', styles: { color: theme.scheme.onSurfaceVariant } },
      // outlined unselected = onSurfaceVariant (same as default)
      // standard unselected = onSurfaceVariant (same as default)

      // Toggle selected icon colors
      // filled selected = onPrimary (same as default)
      { variant: 'tonal', selection: 'selected', styles: { color: theme.scheme.onSecondary } },
      { variant: 'outlined', selection: 'selected', styles: { color: theme.scheme.inverseOnSurface } },
      { variant: 'standard', selection: 'selected', styles: { color: theme.scheme.primary } },

      // Disabled + selected override
      { selection: 'selected', disabled: true, styles: { color: theme.scheme.onSurface } },
    ],
  },
}));

IconButton.displayName = 'IconButton';
IconButtonIcon.displayName = 'IconButtonIcon';

export type {
  IconButtonIconProps,
  IconButtonProps,
  IconButtonSelection,
  IconButtonShape,
  IconButtonSize,
  IconButtonVariant,
  IconButtonWidth,
};
export { IconButton, IconButtonIcon, useIconButton };
