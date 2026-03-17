/// Material Design Extended FAB
/// Overview: https://m3.material.io/components/extended-fab/overview
/// Specs: https://m3.material.io/components/extended-fab/specs
/// Guidelines: https://m3.material.io/components/extended-fab/guidelines
/// Accessibility: https://m3.material.io/components/extended-fab/accessibility

import React, { useCallback, useEffect, useMemo } from 'react';
import { type StyleProp, type View, type ViewStyle } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

import type { ElevationLevel, Scheme } from '@/theme';

import { useControllableState } from '../../hooks';
import { childGuard, createComponentContext, warnUnexpectedChild } from '../../utilities';
import {
  Pressable,
  type PressableProps,
  type ShapeSpec,
  type ShapeToken,
  StateLayer,
  Surface,
  type SurfaceInteractions,
  type TapEvent,
} from '../custom';
import { Icon, type IconProps, type MaterialSymbol } from './icon';
import { Text, type TextProps } from './text';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltips';

// =============================================================================
// Types & Constants
// =============================================================================

/**
 * M3 Expressive Extended FAB sizes:
 * - `'small'`  — 56dp height (replaces the deprecated baseline Extended FAB)
 * - `'medium'` — 80dp height
 * - `'large'`  — 96dp height
 */
type ExtendedFABSize = 'small' | 'medium' | 'large';

/**
 * M3 Extended FAB color styles. Each determines the container, icon/label, and state layer colors.
 *
 * Container variants (`*Container`) use a tonal container with its `on*` content color.
 * Non-container variants use the role color directly (higher contrast, bolder presence).
 *
 * | Color              | Container               | Icon/Label              | State Layer            |
 * |--------------------|-------------------------|-------------------------|------------------------|
 * | primaryContainer   | primaryContainer        | onPrimaryContainer      | onPrimaryContainer     |
 * | secondaryContainer | secondaryContainer      | onSecondaryContainer    | onSecondaryContainer   |
 * | tertiaryContainer  | tertiaryContainer       | onTertiaryContainer     | onTertiaryContainer    |
 * | primary            | primary                 | onPrimary               | onPrimary              |
 * | secondary          | secondary               | onSecondary             | onSecondary            |
 * | tertiary           | tertiary                | onTertiary              | onTertiary             |
 * | surface            | surfaceContainerHigh    | primary                 | primary                |
 */
type ExtendedFABColorStyle =
  | 'primaryContainer'
  | 'secondaryContainer'
  | 'tertiaryContainer'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  /** @deprecated M3 Expressive: "No longer recommended." Use a container variant instead. */
  | 'surface';

/**
 * M3 Extended FAB spec tokens per size:
 *
 * | Size   | Height | Icon  | Shape                      | Leading | Icon–Label | Trailing |
 * |--------|--------|-------|----------------------------|---------|------------|----------|
 * | small  | 56dp   | 24dp  | corner.large (16dp)        | 16dp    | 8dp        | 16dp     |
 * | medium | 80dp   | 28dp  | corner.large-increased (20dp) | 26dp | 12dp       | 26dp     |
 * | large  | 96dp   | 36dp  | corner.extra-large (28dp)  | 28dp    | 16dp       | 28dp     |
 */

/** Icon dp size per Extended FAB size. */
const EFAB_ICON_SIZE: Record<ExtendedFABSize, number> = { small: 24, medium: 28, large: 36 };

/**
 * Label typography size per Extended FAB size.
 * Uses `Text variant="title"` with this size.
 */
const EFAB_LABEL_SIZE: Record<ExtendedFABSize, 'medium' | 'large'> = {
  small: 'medium',
  medium: 'medium',
  large: 'large',
};

/**
 * State layer color per color style.
 * M3 spec: "make sure the state layer color is the same as the icon color."
 * Each maps to the corresponding `on*` scheme role.
 *
 * Note: the spec prose for `primary` style says "state layer = primary", but the
 * token table (`md.comp.extended-fab.primary-container.hovered.state-layer.color`) says `onPrimary`.
 * We follow the token table as the authoritative source — the prose appears to be
 * describing the general "state layer = icon color" rule with an inaccurate example.
 */
const EFAB_STATE_LAYER_COLOR: Record<ExtendedFABColorStyle, keyof Scheme> = {
  primaryContainer: 'onPrimaryContainer',
  secondaryContainer: 'onSecondaryContainer',
  tertiaryContainer: 'onTertiaryContainer',
  primary: 'onPrimary',
  secondary: 'onSecondary',
  tertiary: 'onTertiary',
  surface: 'primary',
};

/** Default hover elevation for Extended FAB (M3 spec: level 3 → level 4 on hover). */
const EFAB_HOVER_ELEVATIONS: SurfaceInteractions['elevations'] = { hover: 4 };

/**
 * M3 spec: `md.comp.extended-fab.*.disabled.container.opacity` = 0.12 = `theme.state.disabledContainer`.
 * Pinned explicitly for resilience — matches `StateLayer`'s default but protects against drift.
 */
const EFAB_DISABLED_CONTAINER_OPACITY = 0.12;

/**
 * Rest shape per size (M3 Extended FAB spec tokens):
 * - small  → `large` (theme.shape.large = 16dp, maps to M3 corner.large)
 * - medium → `largeIncreased` (theme.shape.largeIncreased = 20dp, maps to M3 corner.large-increased)
 * - large  → `xlarge` (theme.shape.xlarge = 28dp, maps to M3 corner.extra-large)
 */
function getEFABRestShapeToken(size: ExtendedFABSize): ShapeToken {
  if (size === 'large') return 'xlarge';
  if (size === 'small') return 'large';
  return 'largeIncreased';
}

/**
 * Pressed shape morph target per size. Inferred from M3 shape morph spec videos:
 * - small/medium → `medium` (theme.shape.medium = 12dp)
 * - large → `large` (theme.shape.large = 16dp)
 */
function getEFABPressedShapeToken(size: ExtendedFABSize): ShapeToken {
  return size === 'large' ? 'large' : 'medium';
}

// =============================================================================
// Props
// =============================================================================

/** Internal context shared from `ExtendedFAB` to sub-components via React Context. */
type ExtendedFABCtx = {
  size: ExtendedFABSize;
  colorStyle: ExtendedFABColorStyle;
  disabled: boolean;
  selected: boolean;
};

/**
 * Context provider and consumer hook for ExtendedFAB sub-components.
 * `useExtendedFAB()` throws if called outside an `<ExtendedFAB>` tree.
 */
const [ExtendedFABProvider, useExtendedFAB] = createComponentContext<ExtendedFABCtx>('ExtendedFAB');

/**
 * ExtendedFAB props.
 *
 * Unlike icon-only `FAB`, Extended FABs always have visible text via `ExtendedFABLabel`,
 * so `accessibilityLabel` is not strictly required — the label text provides the accessible name
 * via RN's child text aggregation. `accessibilityLabel` can be provided to override the default
 * accessible name (e.g., when the visible label is abbreviated: if the button says "Create",
 * the accessibility label might say "Create a new invite").
 */
type ExtendedFABProps = Omit<PressableProps, 'disabled' | 'style' | 'children'> & {
  ref?: React.Ref<View>;
  children: React.ReactNode;
  /** @default false */
  disabled?: boolean;
  /** @default 'medium' */
  size?: ExtendedFABSize;
  /** @default 'primaryContainer' */
  colorStyle?: ExtendedFABColorStyle;
  /**
   * Override the rest (unpressed) shape.
   * Accepts a shape token ('full', 'medium', etc.), a raw number,
   * or a per-corner object. When omitted, computed from size.
   */
  restShape?: ShapeSpec;
  /**
   * Per-interaction target shapes. Overrides the default press shape morph.
   * Pass `{}` to disable all interaction shape morphing.
   *
   * @example
   * ```tsx
   * // Custom press + hover shapes
   * <ExtendedFAB interactionShapes={{ press: 'small', hover: 'large' }} />
   *
   * // Disable shape morphing entirely
   * <ExtendedFAB interactionShapes={{}} />
   * ```
   */
  interactionShapes?: SurfaceInteractions['shapes'];
  /**
   * Elevation level (0–5). Accepts a static number or a `SharedValue<number>`
   * from `useSharedValue()` for animated transitions.
   * @default 3
   */
  elevation?: ElevationLevel | SharedValue<number>;
  /**
   * Enables toggle mode (M3 Expressive). When true, the FAB alternates
   * between 'selected' and 'unselected' states on each press.
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
   * Initial selected state for uncontrolled toggle FABs.
   * Ignored unless `toggle={true}` and `selected` is not provided.
   * @default false
   */
  defaultSelected?: boolean;
  /**
   * Called when the toggle state changes (on each press in toggle mode).
   * Ignored unless `toggle={true}`.
   */
  onSelectedChange?: (selected: boolean) => void;
  /**
   * Plain tooltip text shown on long press (native) or hover (web/desktop).
   */
  tooltip?: string;
  /**
   * Accessibility label used when the toggle FAB is in the 'selected' state.
   * Ignored unless `toggle={true}`. When omitted, `accessibilityLabel` is used for both states.
   */
  selectedAccessibilityLabel?: string;
  /**
   * Tooltip text used when the toggle FAB is in the 'selected' state.
   * Also used as fallback `selectedAccessibilityLabel` when none is provided.
   * Ignored unless `toggle={true}`. When omitted, `tooltip` is used for both states.
   */
  selectedTooltip?: string;
  /** Style applied to the root `Pressable` wrapper (controls outer positioning/margins). */
  style?: StyleProp<ViewStyle>;
  /** Style applied to the inner `Surface` (the visible FAB container). */
  containerStyle?: StyleProp<ViewStyle>;
};

/**
 * Props for `ExtendedFABIcon`. Extends `IconProps` with toggle-aware icon swapping.
 *
 * Size and color are derived from the parent `ExtendedFAB` context — do not set them manually.
 */
type ExtendedFABIconProps = IconProps & {
  /**
   * Alternate icon name shown when the parent toggle FAB is in the 'selected' state.
   * When omitted, the same `name` icon is used regardless of toggle state.
   */
  selectedName?: MaterialSymbol;
};

/**
 * Props for `ExtendedFABLabel`. Extends `TextProps`.
 *
 * Typography variant (`title`) and size are derived from the parent `ExtendedFAB` context —
 * consumer-supplied `variant` and `size` are ignored.
 */
type ExtendedFABLabelProps = TextProps;

// =============================================================================
// ExtendedFAB
// =============================================================================

/**
 * M3 Extended Floating Action Button — labeled primary screen action.
 *
 * Composable: assemble sub-components (`ExtendedFABIcon`, `ExtendedFABLabel`) as children
 * rather than passing content via props. State (size, colorStyle, disabled, selected)
 * flows to sub-components via context — no prop injection or `cloneElement`.
 *
 * ## Layer stack
 *
 * ```
 * Pressable                         ← RNGH gesture tracking, interaction progress context
 *   └─ Surface                ← animated borderRadius + elevation shadow + focus ring
 *           ├─ StateLayer           ← press/hover/focus tint overlay + disabled container overlay
 *           └─ ExtendedFABProvider  ← React Context (size, colorStyle, disabled, selected)
 *               ├─ ExtendedFABIcon  ← auto-sized Material Symbol icon
 *               └─ ExtendedFABLabel ← auto-typed Text label
 * ```
 *
 * All interaction animations (shape morph, state layer opacity, elevation lift)
 * run entirely on the UI thread via Reanimated SharedValues. Zero React
 * re-renders occur during press/hover/focus interactions.
 *
 * ## Toggle mode
 *
 * Set `toggle` to enable selection toggling on press. Supports both controlled
 * (`selected` + `onSelectedChange`) and uncontrolled (`defaultSelected`) modes
 * via {@link useControllableState}. In toggle mode, `selectedTooltip` and
 * `selectedAccessibilityLabel` provide state-aware descriptions.
 *
 * ## Shape override
 *
 * The rest shape and interaction shapes are computed from `size` by default.
 * Override with `restShape` and `interactionShapes` for custom layouts
 * (e.g. suppressing shape morphing or matching surrounding UI).
 *
 * @example
 * ```tsx
 * // Basic Extended FAB
 * <ExtendedFAB onPress={handleCreate}>
 *   <ExtendedFABIcon name="add" />
 *   <ExtendedFABLabel>Create</ExtendedFABLabel>
 * </ExtendedFAB>
 *
 * // Label-only (icon is optional for Extended FAB)
 * <ExtendedFAB onPress={handleNew} size="small">
 *   <ExtendedFABLabel>New item</ExtendedFABLabel>
 * </ExtendedFAB>
 *
 * // Toggle mode (uncontrolled)
 * <ExtendedFAB toggle defaultSelected={false}>
 *   <ExtendedFABIcon name="favorite_border" selectedName="favorite" />
 *   <ExtendedFABLabel>Like</ExtendedFABLabel>
 * </ExtendedFAB>
 *
 * // Custom shape override (no press morph)
 * <ExtendedFAB restShape="medium" interactionShapes={{}}>
 *   <ExtendedFABIcon name="edit" />
 *   <ExtendedFABLabel>Edit</ExtendedFABLabel>
 * </ExtendedFAB>
 * ```
 */
const ExtendedFAB = React.memo(function ExtendedFAB({
  ref,
  size = 'medium',
  colorStyle = 'primaryContainer',
  restShape: restShapeProp,
  interactionShapes,
  elevation: elevationProp,
  toggle = false,
  selected: selectedProp,
  defaultSelected,
  onSelectedChange,
  tooltip,
  selectedAccessibilityLabel,
  selectedTooltip,
  style,
  containerStyle,
  children,
  disabled = false,
  accessibilityLabel,
  onPress,
  ...props
}: ExtendedFABProps) {
  // DEV warnings — fire once per relevant prop change, not every render.
  useEffect(() => {
    if (!__DEV__) return;
    if (disabled) {
      console.warn(
        'ExtendedFAB: M3 spec recommends hiding the FAB instead of disabling it. ' +
          '"If the action represented in the FAB is unavailable, the FAB shouldn\'t appear."',
      );
    }
    if (!toggle && selectedProp !== undefined) {
      console.warn('ExtendedFAB: "selected" prop has no effect without toggle={true}.');
    }
    if (!toggle && defaultSelected !== undefined) {
      console.warn('ExtendedFAB: "defaultSelected" prop has no effect without toggle={true}.');
    }
    if (!toggle && onSelectedChange !== undefined) {
      console.warn('ExtendedFAB: "onSelectedChange" prop has no effect without toggle={true}.');
    }
    if (colorStyle === 'surface') {
      console.warn(
        "ExtendedFAB: 'surface' color style is no longer recommended by M3 Expressive. " +
          'Use a container variant (primaryContainer, secondaryContainer, tertiaryContainer) instead.',
      );
    }
  }, [disabled, toggle, selectedProp, defaultSelected, onSelectedChange, colorStyle]);

  // DEV-only: validate child composition — ExtendedFAB accepts ExtendedFABIcon + ExtendedFABLabel.
  if (__DEV__) {
    const childArray = React.Children.toArray(children);
    const isEFABIcon = childGuard<ExtendedFABIconProps>('ExtendedFABIcon');
    const isEFABLabel = childGuard<ExtendedFABLabelProps>('ExtendedFABLabel');
    let hasIcon = false;
    let hasLabel = false;
    for (const child of childArray) {
      if (React.isValidElement(child)) {
        if (isEFABIcon(child)) hasIcon = true;
        else if (isEFABLabel(child)) hasLabel = true;
        else warnUnexpectedChild('ExtendedFAB', child, ['ExtendedFABIcon', 'ExtendedFABLabel']);
      }
    }
    if (hasIcon && !hasLabel) {
      console.warn(
        "ExtendedFAB: M3 spec requires a text label — an extended FAB can't have an icon without a label. " +
          'Use FAB for icon-only actions.',
      );
    }
  }

  // Toggle state — controlled or uncontrolled via useControllableState.
  // When toggle is false, all toggle-related props are gated off to prevent
  // accidental controlled-state coupling.
  const [selected, setSelected] = useControllableState({
    value: toggle ? selectedProp : undefined,
    defaultValue: toggle ? (defaultSelected ?? false) : false,
    onChange: toggle ? onSelectedChange : undefined,
  });
  // TODO: add selection variant axis to container/icon styles when M3 publishes toggle Extended FAB visual specs.

  styles.useVariants({ size, colorStyle, disabled });

  const restShape: ShapeSpec = useMemo(() => restShapeProp ?? getEFABRestShapeToken(size), [restShapeProp, size]);
  const shapes: SurfaceInteractions['shapes'] = useMemo(
    () => interactionShapes ?? { press: getEFABPressedShapeToken(size) },
    [interactionShapes, size],
  );

  // Elevation: Extended FAB rests at level 3, disabled drops to level 0 (no shadow).
  const elevationLevel = elevationProp ?? (disabled ? 0 : 3);
  // Hover lifts from level 3 → 4. Disabled FABs have no elevation interactions.
  const elevationInteractions = disabled ? undefined : EFAB_HOVER_ELEVATIONS;

  const handlePress = useCallback(
    (e: TapEvent) => {
      if (toggle) setSelected((prev) => !prev);
      onPress?.(e);
    },
    [toggle, setSelected, onPress],
  );

  const ctx = useMemo<ExtendedFABCtx>(
    () => ({ size, colorStyle, disabled, selected }),
    [size, colorStyle, disabled, selected],
  );

  // Accessibility: 'button' role + toggle state.
  // Web: aria-pressed is set via the spread below.
  // Native: accessibilityState.selected triggers idiomatic "selected/not selected"
  // announcements in VoiceOver/TalkBack. accessibilityValue.text is kept as a
  // supplementary hint for screen readers that announce it.
  const a11yState = useMemo(() => ({ disabled, selected: toggle ? selected : false }), [disabled, toggle, selected]);
  const a11yValue = useMemo(
    () => (toggle ? { text: selected ? 'selected' : 'not selected' } : undefined),
    [toggle, selected],
  );

  // Extended FAB has a visible label — no tooltip fallback needed for accessible name.
  // In toggle mode, use selected-specific labels when available.
  const baseLabel = accessibilityLabel;
  const selectedLabel = selectedAccessibilityLabel ?? selectedTooltip ?? baseLabel;
  const resolvedA11yLabel = toggle && selected ? selectedLabel : baseLabel;
  const resolvedTooltip = toggle && selected ? (selectedTooltip ?? tooltip) : tooltip;

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
      accessibilityValue={a11yValue}
      {...(toggle && { 'aria-pressed': selected })}
      {...props}
    >
      <Surface
        shape={restShape}
        speed="default"
        elevation={elevationLevel}
        interactions={{ shapes, elevations: elevationInteractions }}
        style={[styles.container, containerStyle]}
      >
        <StateLayer
          color={EFAB_STATE_LAYER_COLOR[colorStyle]}
          disabled={disabled}
          disabledOpacity={EFAB_DISABLED_CONTAINER_OPACITY}
        />
        <ExtendedFABProvider value={ctx}>{children}</ExtendedFABProvider>
      </Surface>
    </Pressable>
  );

  if (resolvedTooltip) {
    return (
      <Tooltip variant="plain">
        <TooltipTrigger>{button}</TooltipTrigger>
        <TooltipContent>{resolvedTooltip}</TooltipContent>
      </Tooltip>
    );
  }

  return button;
});

// =============================================================================
// ExtendedFABIcon
// =============================================================================

/**
 * Icon sub-component for {@link ExtendedFAB}. Must be used inside an `<ExtendedFAB>` tree.
 *
 * Automatically sizes the icon based on the parent's `size` and applies
 * colorStyle-appropriate coloring via unistyles variants.
 *
 * In toggle mode, swaps to `selectedName` when the FAB is in the selected state.
 *
 * Place `ExtendedFABIcon` **before** `ExtendedFABLabel` in the JSX tree. The container
 * uses `flexDirection: 'row'`, so this ordering produces icon-left in LTR and
 * icon-right in RTL — matching M3 guidelines automatically.
 *
 * @example
 * ```tsx
 * <ExtendedFAB onPress={handleCompose}>
 *   <ExtendedFABIcon name="edit" />
 *   <ExtendedFABLabel>Compose</ExtendedFABLabel>
 * </ExtendedFAB>
 *
 * // Toggle-aware icon swap
 * <ExtendedFAB toggle>
 *   <ExtendedFABIcon name="favorite_border" selectedName="favorite" />
 *   <ExtendedFABLabel>Like</ExtendedFABLabel>
 * </ExtendedFAB>
 * ```
 */
const ExtendedFABIcon = React.memo(function ExtendedFABIcon({
  selectedName,
  name,
  style,
  ...props
}: ExtendedFABIconProps) {
  const { size, colorStyle, disabled, selected } = useExtendedFAB();
  styles.useVariants({ size, colorStyle, disabled });
  const iconSize = EFAB_ICON_SIZE[size];
  // Swap icon name when toggle is selected and a selectedName is provided
  const effectiveName = selectedName && selected ? selectedName : name;
  return <Icon name={effectiveName} size={iconSize} style={[styles.icon, style]} {...props} />;
});

// =============================================================================
// ExtendedFABLabel
// =============================================================================

/**
 * Text label sub-component for {@link ExtendedFAB}. Must be used inside an `<ExtendedFAB>` tree.
 *
 * Automatically selects typography variant (`title`) and size based on the parent's
 * `size` tier, and applies colorStyle-appropriate coloring.
 *
 * **Note:** The `variant` and `size` props inherited from `TextProps` are
 * overridden internally by the size-derived lookup table (`EFAB_LABEL_SIZE`).
 * Consumer-supplied values for these two props are silently ignored — this ensures
 * Extended FABs always match the M3 spec typography.
 *
 * @example
 * ```tsx
 * <ExtendedFAB onPress={handleNew}>
 *   <ExtendedFABIcon name="add" />
 *   <ExtendedFABLabel>New item</ExtendedFABLabel>
 * </ExtendedFAB>
 * ```
 */
const ExtendedFABLabel = React.memo(function ExtendedFABLabel({ style, ...props }: ExtendedFABLabelProps) {
  const { size, colorStyle, disabled } = useExtendedFAB();
  styles.useVariants({ size, colorStyle, disabled });
  // Spread props first, then pin variant/size so consumer overrides are ignored.
  return <Text {...props} style={[styles.label, style]} variant="title" size={EFAB_LABEL_SIZE[size]} />;
});

// =============================================================================
// Styles
// =============================================================================
// Extended FAB spec tokens (md.comp.extended-fab.*):
//
// Size mapping:
//   Size   | Height | Icon  | Shape (token → dp)                   | Leading | Gap  | Trailing
//   -------|--------|-------|--------------------------------------|---------|------|----------
//   small  | 56dp   | 24dp  | theme.shape.large (16dp)             | 16dp    | 8dp  | 16dp
//   medium | 80dp   | 28dp  | theme.shape.largeIncreased (20dp)    | 26dp    | 12dp | 26dp
//   large  | 96dp   | 36dp  | theme.shape.xlarge (28dp)            | 28dp    | 16dp | 28dp

const styles = StyleSheet.create((theme) => ({
  // Empty root style — exists as the anchor for consumer `style` prop overrides
  // applied via `[styles.root, style]` on the Pressable wrapper.
  root: {
    variants: {
      size: {
        small: {},
        medium: {},
        large: {},
      },
      colorStyle: {
        primaryContainer: {},
        secondaryContainer: {},
        tertiaryContainer: {},
        primary: {},
        secondary: {},
        tertiary: {},
        surface: {},
      },
      disabled: {
        true: {},
        false: {},
      },
    },
  },
  // The visible FAB container. Rendered inside Surface (which clips to
  // animated borderRadius). Layout, colors, and dimensions are all variant-driven.
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    variants: {
      size: {
        // Extended FAB spec: leading-space, icon-label-space, trailing-space per size.
        // minWidth prevents degenerate proportions on short labels (spec: 80dp min baseline).
        small: { height: 56, minWidth: 80, paddingLeft: 16, paddingRight: 16, gap: 8 },
        medium: { height: 80, minWidth: 80, paddingLeft: 26, paddingRight: 26, gap: 12 },
        large: { height: 96, minWidth: 96, paddingLeft: 28, paddingRight: 28, gap: 16 },
      },
      colorStyle: {
        primaryContainer: { backgroundColor: theme.scheme.primaryContainer },
        secondaryContainer: { backgroundColor: theme.scheme.secondaryContainer },
        tertiaryContainer: { backgroundColor: theme.scheme.tertiaryContainer },
        primary: { backgroundColor: theme.scheme.primary },
        secondary: { backgroundColor: theme.scheme.secondary },
        tertiary: { backgroundColor: theme.scheme.tertiary },
        surface: { backgroundColor: theme.scheme.surfaceContainerHigh },
      },
      disabled: {
        true: {
          // Clear variant-applied color so the StateLayer disabled overlay is the sole
          // container fill (onSurface at disabledContainer opacity).
          backgroundColor: undefined,
        },
        false: {},
      },
    },
  },
  // Icon color per colorStyle. Icon sizing is controlled imperatively via
  // EFAB_ICON_SIZE[size] passed to <Icon>, not through variants.
  icon: {
    variants: {
      size: {
        // Icon sizing is controlled imperatively via EFAB_ICON_SIZE[size] passed to <Icon>.
        small: {},
        medium: {},
        large: {},
      },
      colorStyle: {
        primaryContainer: { color: theme.scheme.onPrimaryContainer },
        secondaryContainer: { color: theme.scheme.onSecondaryContainer },
        tertiaryContainer: { color: theme.scheme.onTertiaryContainer },
        primary: { color: theme.scheme.onPrimary },
        secondary: { color: theme.scheme.onSecondary },
        tertiary: { color: theme.scheme.onTertiary },
        surface: { color: theme.scheme.primary },
      },
      disabled: {
        true: {
          color: theme.scheme.onSurface,
          opacity: theme.state.disabledContent,
        },
        false: {},
      },
    },
  },
  // Label color per colorStyle. Typography is controlled imperatively via
  // variant="title" size={EFAB_LABEL_SIZE[size]} passed to <Text>, not through variants.
  // Icon and label share the same color/opacity rules per M3 spec (content layer).
  label: {
    variants: {
      size: {
        // Label typography is controlled via variant="title" size={EFAB_LABEL_SIZE[size]}.
        small: {},
        medium: {},
        large: {},
      },
      colorStyle: {
        primaryContainer: { color: theme.scheme.onPrimaryContainer },
        secondaryContainer: { color: theme.scheme.onSecondaryContainer },
        tertiaryContainer: { color: theme.scheme.onTertiaryContainer },
        primary: { color: theme.scheme.onPrimary },
        secondary: { color: theme.scheme.onSecondary },
        tertiary: { color: theme.scheme.onTertiary },
        surface: { color: theme.scheme.primary },
      },
      disabled: {
        true: {
          color: theme.scheme.onSurface,
          opacity: theme.state.disabledContent,
        },
        false: {},
      },
    },
  },
}));

// =============================================================================
// Exports
// =============================================================================

ExtendedFAB.displayName = 'ExtendedFAB';
ExtendedFABIcon.displayName = 'ExtendedFABIcon';
ExtendedFABLabel.displayName = 'ExtendedFABLabel';

export type {
  ExtendedFABColorStyle,
  ExtendedFABIconProps,
  ExtendedFABLabelProps,
  ExtendedFABProps,
  ShapeSpec as ExtendedFABShapeSpec,
  ExtendedFABSize,
  SurfaceInteractions as ExtendedFABSurfaceInteractions,
};
export { ExtendedFAB, ExtendedFABIcon, ExtendedFABLabel, useExtendedFAB };
