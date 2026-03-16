/// Material Design Floating Action Button
/// Overview: https://m3.material.io/components/floating-action-button/overview
/// Specs: https://m3.material.io/components/floating-action-button/specs
/// Guidelines: https://m3.material.io/components/floating-action-button/guidelines
/// Accessibility: https://m3.material.io/components/floating-action-button/accessibility

import React, { useCallback, useEffect, useMemo } from 'react';
import { type StyleProp, type ViewStyle } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

import { ElevationContainer, type InteractionElevations } from '@/components/custom/elevation-container';
import type { ElevationLevel, Scheme } from '@/theme';

import { useControllableState } from '../../hooks';
import { childGuard, createComponentContext, warnUnexpectedChild } from '../../utilities';
import {
  type InteractionShapes,
  Pressable,
  type PressableProps,
  ShapeContainer,
  type ShapeSpec,
  type ShapeToken,
  StateLayer,
  type TapEvent,
} from '../custom';
import { Icon, type IconProps, type MaterialSymbol } from './icon';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltips';

// =============================================================================
// Types & Constants
// =============================================================================

/**
 * M3 FAB sizes:
 * - `'small'`   — 40×40dp (**deprecated**: use a larger size per M3 Expressive guidance)
 * - `'regular'` — 56×56dp (the standard "FAB" in Expressive nomenclature)
 * - `'medium'` — 80×80dp (recommended for most situations)
 * - `'large'`  — 96×96dp
 */
type FABSize =
  /** @deprecated M3 Expressive: "Not recommended — use a larger size." */
  'small' | 'regular' | 'medium' | 'large';

/**
 * M3 FAB color styles. Each determines the container, icon, and state layer colors.
 *
 * Container variants (`*Container`) use a tonal container with its `on*` content color.
 * Non-container variants use the role color directly (higher contrast, bolder presence).
 *
 * | Color              | Container               | Icon                    | State Layer            |
 * |--------------------|-------------------------|-------------------------|------------------------|
 * | primaryContainer   | primaryContainer        | onPrimaryContainer      | onPrimaryContainer     |
 * | secondaryContainer | secondaryContainer      | onSecondaryContainer    | onSecondaryContainer   |
 * | tertiaryContainer  | tertiaryContainer       | onTertiaryContainer     | onTertiaryContainer    |
 * | primary            | primary                 | onPrimary               | onPrimary              |
 * | secondary          | secondary               | onSecondary             | onSecondary            |
 * | tertiary           | tertiary                | onTertiary              | onTertiary             |
 * | surface            | surfaceContainerHigh    | primary                 | primary                |
 */
type FABColorStyle =
  | 'primaryContainer'
  | 'secondaryContainer'
  | 'tertiaryContainer'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  /** @deprecated M3 Expressive: "No longer recommended." Use a container variant instead. */
  | 'surface';

/** Icon dp size per FAB size (M3 spec: small 24dp, regular 24dp, medium 28dp, large 36dp). */
const FAB_ICON_SIZE: Record<FABSize, number> = { small: 24, regular: 24, medium: 28, large: 36 };

/**
 * State layer color per color style.
 * M3 general rule: "make sure the state layer color is the same as the icon color."
 *
 * For container styles (`primaryContainer`, etc.), published tokens confirm this:
 * `md.comp.fab.primary-container.hovered.state-layer.color = on-primary-container`.
 *
 * For non-container Expressive styles (`primary`, `secondary`, `tertiary`), no tokens
 * are published. The spec prose says "state layer = primary" for the `primary` style,
 * which contradicts the general "state layer = icon color" rule (icon = `onPrimary`).
 * We follow the general rule (state layer = icon color = `onPrimary`) until Compose
 * or published tokens clarify the intended behavior.
 *
 * TODO: verify against Compose reference implementation when accessible.
 */
const FAB_STATE_LAYER_COLOR: Record<FABColorStyle, keyof Scheme> = {
  primaryContainer: 'onPrimaryContainer',
  secondaryContainer: 'onSecondaryContainer',
  tertiaryContainer: 'onTertiaryContainer',
  primary: 'onPrimary',
  secondary: 'onSecondary',
  tertiary: 'onTertiary',
  surface: 'primary',
};

/** Default hover elevation for FAB (M3 spec: level 3 → level 4 on hover). */
const FAB_HOVER_ELEVATIONS: InteractionElevations = { hover: 4 };

/**
 * M3 spec: `md.comp.fab.*.disabled.container.opacity` = 0.12 = `theme.state.disabledContainer`.
 * Pinned explicitly for resilience — matches `StateLayer`'s default but protects against drift.
 */
const FAB_DISABLED_CONTAINER_OPACITY = 0.12;

/**
 * Rest shape per size (M3 spec tokens):
 * - small   → `medium` (12dp) — `md.sys.shape.corner.medium` (baseline, deprecated)
 * - regular → `large` (16dp) — **unconfirmed**: no published `md.comp.fab.regular.container.shape`
 *   token exists. Inferred from the progression (medium=12dp deprecated → large=16dp → large-increased=20dp).
 * - medium  → `largeIncreased` (20dp) — `md.comp.fab.medium.container.shape = corner.large-increased`
 * - large   → `xlarge` (28dp) — `md.comp.fab.large.container.shape = corner.extra-large`
 */
function getFABRestShapeToken(size: FABSize): ShapeToken {
  if (size === 'small') return 'medium';
  if (size === 'large') return 'xlarge';
  if (size === 'regular') return 'large';
  return 'largeIncreased';
}

/**
 * Pressed shape morph target per size. Inferred from M3 shape morph spec videos:
 * - small → `small` (theme.shape.small = 8dp) — small is deprecated, minimal morph
 * - regular/medium → `medium` (theme.shape.medium = 12dp)
 * - large → `large` (theme.shape.large = 16dp)
 * Not grounded in published spec tokens — align when M3 publishes explicit FAB pressed shape tokens.
 */
function getFABPressedShapeToken(size: FABSize): ShapeToken {
  if (size === 'small') return 'small';
  return size === 'large' ? 'large' : 'medium';
}

// =============================================================================
// Props
// =============================================================================

/** Internal context shared from `FAB` to `FABIcon` via React Context. */
type FABCtx = {
  size: FABSize;
  colorStyle: FABColorStyle;
  disabled: boolean;
  selected: boolean;
};

/**
 * Context provider and consumer hook for FAB sub-components.
 * `useFAB()` throws if called outside a `<FAB>` tree.
 */
const [FABProvider, useFAB] = createComponentContext<FABCtx>('FAB');

/**
 * Base FAB props shared across all label configurations.
 * Consumers must provide at least one of `accessibilityLabel` or `tooltip`
 * so screen readers can describe the icon-only action — enforced at the type level.
 */
type FABBaseProps = Omit<PressableProps, 'disabled' | 'style' | 'children' | 'accessibilityLabel'> & {
  /** FAB content — should be a single `FABIcon`. Validated in DEV mode. */
  children: React.ReactNode;
  /**
   * Disables the FAB — prevents press events, dims content, removes elevation.
   *
   * **M3 guidance**: "If the action represented in the FAB is unavailable,
   * the FAB shouldn't appear." Prefer conditional rendering over `disabled`.
   * @default false
   */
  disabled?: boolean;
  /** @default 'medium' */
  size?: FABSize;
  /** @default 'primaryContainer' */
  colorStyle?: FABColorStyle;
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
   * // Disable shape morphing (e.g. inside a FAB menu)
   * <FAB interactionShapes={{}} />
   * ```
   */
  interactionShapes?: InteractionShapes;
  /**
   * Elevation level (0–5). Accepts a static number or a `SharedValue<number>`
   * from `useSharedValue()` for animated transitions.
   * @default 3
   */
  elevation?: ElevationLevel | SharedValue<number>;
  /**
   * Enables toggle mode (M3 Expressive). When true, the FAB alternates
   * between 'selected' and 'unselected' states on each press.
   *
   * When disabled (default), `selected`, `defaultSelected`, and `onSelectedChange`
   * props are ignored.
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
  /** Style applied to the inner `ShapeContainer` (the visible FAB container). */
  containerStyle?: StyleProp<ViewStyle>;
};

/**
 * FAB props — at least one of `accessibilityLabel` or `tooltip` is required.
 * Icon-only FABs have no visible text label, so an explicit accessibility
 * label is mandatory for screen readers.
 */
type FABProps = FABBaseProps &
  (
    | {
        /** Describes the FAB action for screen readers (e.g. "Compose a new message"). */
        accessibilityLabel: string;
        /**
         * Plain tooltip text shown on long press (native) or hover (web/desktop).
         * Also used as fallback `accessibilityLabel` when none is explicitly provided.
         */
        tooltip?: string;
      }
    | {
        /** Describes the FAB action for screen readers (e.g. "Compose a new message"). */
        accessibilityLabel?: string;
        /**
         * Plain tooltip text shown on long press (native) or hover (web/desktop).
         * Also used as fallback `accessibilityLabel` when none is explicitly provided.
         *
         * **Required** when `accessibilityLabel` is not provided — ensures screen readers
         * can describe the icon-only action.
         */
        tooltip: string;
      }
  );

/**
 * Props for `FABIcon`. Extends `IconProps` with toggle-aware icon swapping.
 *
 * Size and color are derived from the parent `FAB` context — do not set them manually.
 */
type FABIconProps = IconProps & {
  /**
   * Alternate icon name shown when the parent toggle FAB is in the 'selected' state.
   * When omitted, the same `name` icon is used regardless of toggle state.
   */
  selectedName?: MaterialSymbol;
};

// =============================================================================
// FAB
// =============================================================================

/**
 * M3 Floating Action Button — icon-only primary screen action.
 *
 * Composable: use `FABIcon` as a child. For labeled FABs, use `ExtendedFAB` instead.
 * State (size, colorStyle, disabled, selected) flows to sub-components via context —
 * no prop injection or `cloneElement`.
 *
 * ## Layer stack
 *
 * ```
 * Pressable                    ← RNGH gesture tracking, interaction progress context
 *   └─ ElevationContainer      ← platform shadow, hover elevation animation (level 3 → 4)
 *       └─ ShapeContainer      ← animated borderRadius (shape morphing + focus ring)
 *           ├─ StateLayer      ← press/hover/focus tint overlay + disabled container overlay
 *           └─ FABProvider     ← React Context (size, colorStyle, disabled, selected)
 *               └─ FABIcon     ← auto-sized Material Symbol icon
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
 * via {@link useControllableState}. Toggle state currently drives icon glyph
 * swapping only — visual differentiation (container color/shape) is pending
 * M3 Expressive toggle FAB spec publication.
 *
 * ## Shape override
 *
 * The rest shape and interaction shapes are computed from `size` by default.
 * Override with `restShape` and `interactionShapes` for custom layouts
 * (e.g. FAB menu suppressing corner animation via `interactionShapes={{}}`).
 *
 * @example
 * ```tsx
 * // Basic FAB
 * <FAB accessibilityLabel="Compose" onPress={handleCompose}>
 *   <FABIcon name="edit" />
 * </FAB>
 *
 * // Toggle FAB (uncontrolled)
 * <FAB toggle tooltip="Favorite">
 *   <FABIcon name="favorite_border" selectedName="favorite" />
 * </FAB>
 *
 * // Custom shape override (no press morph)
 * <FAB accessibilityLabel="Add" restShape="full" interactionShapes={{}}>
 *   <FABIcon name="add" />
 * </FAB>
 * ```
 */
const FAB = React.memo(function FAB({
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
}: FABProps) {
  // Label enforcement — runs in all builds. The type union prevents most cases,
  // but casts or runtime refactors can bypass it. A missing label makes the FAB
  // invisible to screen readers, so we warn unconditionally.
  useEffect(() => {
    if (!accessibilityLabel && !tooltip) {
      console.warn(
        'FAB: Icon-only FABs must have an accessibilityLabel (or tooltip). ' +
          'Provide an accessibilityLabel prop describing the action (e.g. "Compose a new message").',
      );
    }
  }, [accessibilityLabel, tooltip]);

  // DEV warnings — fire once per relevant prop change, not every render.
  useEffect(() => {
    if (!__DEV__) return;
    if (disabled) {
      console.warn(
        'FAB: M3 spec recommends hiding the FAB instead of disabling it. ' +
          '"If the action represented in the FAB is unavailable, the FAB shouldn\'t appear." ' +
          'Use conditional rendering or `display: "none"` to hide the FAB when its action is unavailable.',
      );
    }
    if (!toggle && selectedProp !== undefined) {
      console.warn('FAB: "selected" prop has no effect without toggle={true}.');
    }
    if (!toggle && defaultSelected !== undefined) {
      console.warn('FAB: "defaultSelected" prop has no effect without toggle={true}.');
    }
    if (!toggle && onSelectedChange !== undefined) {
      console.warn('FAB: "onSelectedChange" prop has no effect without toggle={true}.');
    }
  }, [disabled, toggle, selectedProp, defaultSelected, onSelectedChange]);

  // Toggle state
  const [selected, setSelected] = useControllableState({
    value: toggle ? selectedProp : undefined,
    defaultValue: toggle ? (defaultSelected ?? false) : false,
    onChange: toggle ? onSelectedChange : undefined,
  });
  // TODO: add selection variant axis to container/icon styles when M3 publishes toggle FAB visual specs.

  styles.useVariants({ size, colorStyle, disabled });

  // DEV-only: validate child composition — FAB only accepts FABIcon children.
  if (__DEV__) {
    const childArray = React.Children.toArray(children);
    const isFABIcon = childGuard<FABIconProps>('FABIcon');
    for (const child of childArray) {
      if (React.isValidElement(child) && !isFABIcon(child)) {
        warnUnexpectedChild('FAB', child, ['FABIcon']);
      }
    }
  }

  const restShape: ShapeSpec = useMemo(() => restShapeProp ?? getFABRestShapeToken(size), [restShapeProp, size]);
  const shapes: InteractionShapes | undefined = useMemo(
    () => interactionShapes ?? { press: getFABPressedShapeToken(size) },
    [interactionShapes, size],
  );

  // Elevation: FAB rests at level 3, disabled drops to level 0 (no shadow).
  const elevationLevel = elevationProp ?? (disabled ? 0 : 3);
  // Hover lifts from level 3 → 4. Disabled FABs have no elevation interactions.
  const elevationInteractions = disabled ? undefined : FAB_HOVER_ELEVATIONS;

  const handlePress = useCallback(
    (e: TapEvent) => {
      if (toggle) setSelected((prev) => !prev);
      onPress?.(e);
    },
    [toggle, setSelected, onPress],
  );

  const ctx = useMemo<FABCtx>(() => ({ size, colorStyle, disabled, selected }), [size, colorStyle, disabled, selected]);

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

  // Resolve accessibilityLabel: fall back to tooltip text.
  // In toggle mode, use selected-specific labels when available.
  const baseLabel = accessibilityLabel ?? tooltip;
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
      <ElevationContainer level={elevationLevel} elevations={elevationInteractions}>
        <ShapeContainer shape={restShape} shapes={shapes} style={[styles.container, containerStyle]}>
          <StateLayer
            color={FAB_STATE_LAYER_COLOR[colorStyle]}
            disabled={disabled}
            disabledOpacity={FAB_DISABLED_CONTAINER_OPACITY}
          />
          <FABProvider value={ctx}>{children}</FABProvider>
        </ShapeContainer>
      </ElevationContainer>
    </Pressable>
  );

  // Wrap in Tooltip when tooltip text is provided
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
// FABIcon
// =============================================================================

/**
 * FAB icon sub-component. Renders a Material Symbol icon sized and colored
 * according to the parent `FAB`'s `size` and `colorStyle`.
 *
 * In toggle mode, swaps to `selectedName` when the FAB is selected.
 * Must be used inside a `<FAB>` tree.
 *
 * The icon is hidden from the accessibility tree (`importantForAccessibility`
 * defaults to excluding glyphs) so screen readers announce the FAB's
 * `accessibilityLabel` rather than the icon name as a separate element.
 *
 * @example
 * ```tsx
 * <FAB accessibilityLabel="Create">
 *   <FABIcon name="add" />
 * </FAB>
 *
 * // Toggle: swap icon on selection
 * <FAB toggle tooltip="Edit">
 *   <FABIcon name="edit" selectedName="close" />
 * </FAB>
 * ```
 */
const FABIcon = React.memo(function FABIcon({ selectedName, name, style, ...props }: FABIconProps) {
  const { size, colorStyle, disabled, selected } = useFAB();
  styles.useVariants({ size, colorStyle, disabled });
  const iconSize = FAB_ICON_SIZE[size];
  const effectiveName = selectedName && selected ? selectedName : name;
  return <Icon name={effectiveName} size={iconSize} style={[styles.icon, style]} {...props} />;
});

// =============================================================================
// Styles
// =============================================================================
// FAB uses a `colorStyle` variant axis because each color choice fully determines
// the container, content, and state-layer colors via scheme color roles.
//
// Color mapping (from M3 spec):
//   Color              | Container               | Icon                     | State layer
//   -------------------|--------------------------|--------------------------|-----------------------------
//   primaryContainer   | primaryContainer         | onPrimaryContainer       | onPrimaryContainer
//   secondaryContainer | secondaryContainer       | onSecondaryContainer     | onSecondaryContainer
//   tertiaryContainer  | tertiaryContainer        | onTertiaryContainer      | onTertiaryContainer
//   primary            | primary                  | onPrimary                | onPrimary
//   secondary          | secondary                | onSecondary              | onSecondary
//   tertiary           | tertiary                 | onTertiary               | onTertiary
//   surface (deprecated)| surfaceContainerHigh    | primary                  | primary
//
// Size mapping:
//   Size          | Dimensions | Icon  | Shape (token → dp)
//   --------------|------------|-------|---------------------------------
//   small (depr.) | 40×40      | 24dp  | theme.shape.medium (12dp)
//   regular       | 56×56      | 24dp  | theme.shape.large (16dp)
//   medium        | 80×80      | 28dp  | theme.shape.largeIncreased (20dp)
//   large         | 96×96      | 36dp  | theme.shape.xlarge (28dp)

const styles = StyleSheet.create((theme) => ({
  // Root style on the outer Pressable wrapper. Contains minWidth/minHeight per size
  // to guarantee the touch target matches the visual container even under clipping parents.
  // Elevation is handled by ElevationContainer — no shadow properties here.
  root: {
    variants: {
      size: {
        small: { minWidth: 40, minHeight: 40 },
        regular: { minWidth: 56, minHeight: 56 },
        medium: { minWidth: 80, minHeight: 80 },
        large: { minWidth: 96, minHeight: 96 },
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
  // The visible FAB container. Rendered inside ShapeContainer (which clips to
  // animated borderRadius). Fixed square dimensions per size — icon is centered
  // via flex alignment. Colors are colorStyle-driven via variants.
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',

    variants: {
      size: {
        small: { width: 40, height: 40 },
        regular: { width: 56, height: 56 },
        medium: { width: 80, height: 80 },
        large: { width: 96, height: 96 },
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
          // Clear colorStyle-applied background so the StateLayer disabled overlay
          // (at FAB_DISABLED_CONTAINER_OPACITY) is the sole container fill.
          backgroundColor: undefined,
        },
        false: {},
      },
    },
  },
  // Icon color/opacity style applied to FABIcon. Named "icon" because FAB has no label
  // sub-component (labeled FABs use ExtendedFAB). Contains only `color` and `opacity`
  // variants — icon sizing is controlled imperatively via FAB_ICON_SIZE[size].
  icon: {
    variants: {
      size: {
        // Size variants are structural placeholders — icon sizing is passed imperatively.
        small: {},
        regular: {},
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

FAB.displayName = 'FAB';
FABIcon.displayName = 'FABIcon';

export type {
  FABColorStyle,
  FABIconProps,
  InteractionShapes as FABInteractionShapes,
  FABProps,
  ShapeSpec as FABShapeSpec,
  FABSize,
};
export { FAB, FABIcon, useFAB };
