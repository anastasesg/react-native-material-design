/// Material Design Button
/// Overview: https://m3.material.io/components/buttons/overview
/// Specs: https://m3.material.io/components/buttons/specs
/// Guidelines: https://m3.material.io/components/buttons/guidelines
/// Accessibility: https://m3.material.io/components/buttons/accessibility

import React, { useMemo } from 'react';
import { Platform, type StyleProp, type ViewStyle } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

import { Pressable, type PressableProps, type TapEvent } from '@/components/custom/pressable';
import { StateLayer } from '@/components/custom/state-layer';
import { type ShapeSpec, type ShapeToken, Surface, type SurfaceInteractions } from '@/components/custom/surface';
import { useControllableState } from '@/hooks';
import type { ElevationLevel, Scheme } from '@/theme';
import { childGuard, createComponentContext } from '@/utilities';

import { Icon, type IconProps, type MaterialSymbol } from './icon';
import { Text, type TextProps, type TextSize, type TextVariant } from './text';

// ---------------------------------------------------------------------------
// Internal context — shared between Button, ButtonIcon, ButtonLabel
// ---------------------------------------------------------------------------

/** State passed from Button to its sub-components via context. */
type ButtonCtx = {
  size: ButtonSize;
  shape: ButtonShape;
  variant: ButtonVariant;
  selection: ButtonSelection;
  disabled: boolean;
};

const [ButtonProvider, useButton] = createComponentContext<ButtonCtx>('Button');

// ---------------------------------------------------------------------------
// Shape resolution helpers
// ---------------------------------------------------------------------------

/**
 * Computes the rest (unpressed) shape token from M3 spec rules.
 *
 * - Rounded buttons always use `'full'` (pill — capped at containerHeight/2 in Surface)
 * - Square buttons scale with size:
 *   - xsmall/small → `'medium'` (12dp)
 *   - medium → `'large'` (16dp)
 *   - large/xlarge → `'xlarge'` (28dp)
 * - Selected toggle buttons invert the shape (rounded↔square)
 */
function getRestShapeToken(size: ButtonSize, shape: ButtonShape, selection: ButtonSelection): ShapeToken {
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
function getPressedShapeToken(size: ButtonSize): ShapeToken {
  if (size === 'large' || size === 'xlarge') return 'large';
  if (size === 'medium') return 'medium';
  return 'small';
}

/**
 * Returns the M3 state layer color for a given variant + selection combination.
 *
 * Color mapping (from M3 spec):
 *   Variant   | none / unselected        | selected
 *   ----------|--------------------------|--------------------------
 *   filled    | onPrimary                | onPrimary
 *   elevated  | primary                  | onPrimary
 *   tonal     | onSecondaryContainer     | onSecondary
 *   outlined  | onSurfaceVariant         | inverseOnSurface
 *   text      | primary                  | N/A
 */
function getButtonStateLayerColor(variant: ButtonVariant, selection: ButtonSelection): keyof Scheme {
  if (selection === 'selected') {
    if (variant === 'filled') return 'onPrimary';
    if (variant === 'elevated') return 'onPrimary';
    if (variant === 'tonal') return 'onSecondary';
    if (variant === 'outlined') return 'inverseOnSurface';
  }
  if (selection === 'unselected') {
    if (variant === 'elevated') return 'primary';
    if (variant === 'tonal') return 'onSecondaryContainer';
    return 'onSurfaceVariant';
  }
  // 'none' selection
  if (variant === 'filled') return 'onPrimary';
  if (variant === 'tonal') return 'onSecondaryContainer';
  if (variant === 'outlined') return 'onSurfaceVariant';
  if (variant === 'text') return 'primary';
  // elevated
  return 'primary';
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Button size — controls padding, gap, typography, and default shape tokens. */
type ButtonSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

/** Button shape — 'rounded' (pill) or 'square' (size-dependent corner radius). */
type ButtonShape = 'rounded' | 'square';

/** Button variant — determines container color, elevation, and border treatment. */
type ButtonVariant = 'filled' | 'elevated' | 'tonal' | 'outlined' | 'text';

/**
 * Derived toggle selection state — computed internally from `toggle` + `selected`.
 * Not a consumer input. Consumers control selection via the `toggle`, `selected`,
 * `defaultSelected`, and `onSelectedChange` props on `Button`.
 *
 * - `'none'` — non-toggle button (toggle={false} or text variant)
 * - `'selected'` — toggle button in the selected state
 * - `'unselected'` — toggle button in the unselected state
 */
type ButtonSelection = 'none' | 'selected' | 'unselected';

/** M3 filled/tonal: hover lifts from level 0 → level 1. */
const SURFACE_HOVER: SurfaceInteractions['elevations'] = { hover: 1 };
/** M3 elevated: hover lifts from level 1 → level 2, press stays at level 1 (explicit). */
const ELEVATED_HOVER: SurfaceInteractions['elevations'] = { hover: 2, press: 1 };

/**
 * M3 spec: md.comp.button.*.disabled.container.opacity = 0.1 (all variants).
 * Differs from the system default `theme.state.disabledContainer` (0.12).
 */
const BUTTON_DISABLED_CONTAINER_OPACITY = 0.1;

/**
 * Hit slop per size to ensure minimum 48dp touch target.
 * xsmall: 32dp container + 8dp each side = 48dp.
 * small: 40dp container + 4dp each side = 48dp.
 *
 * When a consumer provides an explicit `hitSlop`, it overrides these defaults.
 */
const BUTTON_HIT_SLOP: Partial<Record<ButtonSize, number>> = {
  xsmall: 8,
  small: 4,
};

/** Icon size per button size tier (M3 spec). */
const BUTTON_ICON_SIZE: Record<ButtonSize, number> = {
  xsmall: 20,
  small: 20,
  medium: 24,
  large: 32,
  xlarge: 40,
};

/** Text variant per button size tier (M3 spec). */
const BUTTON_TEXT_VARIANT: Record<ButtonSize, TextVariant> = {
  xsmall: 'label',
  small: 'label',
  medium: 'title',
  large: 'headline',
  xlarge: 'headline',
};

/** Text size per button size tier (M3 spec). */
const BUTTON_TEXT_SIZE: Record<ButtonSize, TextSize> = {
  xsmall: 'large',
  small: 'large',
  medium: 'medium',
  large: 'small',
  xlarge: 'large',
};

type ButtonProps = Omit<PressableProps, 'disabled' | 'style'> & {
  /** Disables the button — prevents press events, dims content, removes elevation. */
  disabled?: boolean;

  /** Additional context for screen readers (e.g. "Saves your changes and closes the dialog"). */
  accessibilityHint?: string;

  /** Style applied to the root Pressable. */
  style?: StyleProp<ViewStyle>;

  /**
   * Button size tier. Controls padding, gap, corner radii, and typography scale.
   *
   * `'small'` is the default for both M3 and M3 Expressive. `'xsmall'`, `'medium'`,
   * `'large'`, and `'xlarge'` are **M3 Expressive** configurations.
   * @default 'small'
   */
  size?: ButtonSize;

  /**
   * Button shape style.
   * - `'rounded'` — pill shape (borderRadius: full)
   * - `'square'` — size-dependent corner radius (**M3 Expressive**)
   * @default 'rounded'
   */
  shape?: ButtonShape;

  /**
   * Visual variant — determines container color, elevation, and border.
   * @default 'filled'
   */
  variant?: ButtonVariant;

  /**
   * Enables toggle mode (**M3 Expressive**). When true, the button alternates
   * between 'selected' and 'unselected' states on each press.
   * Not supported on the `'text'` variant.
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

  /**
   * Called when the toggle state changes (on each press in toggle mode).
   * Ignored unless `toggle={true}`.
   */
  onSelectedChange?: (selected: boolean) => void;

  /**
   * Override the rest (unpressed) shape.
   * Accepts a shape token ('full', 'medium', etc.), a raw number,
   * or a per-corner object. When omitted, computed from size/shape/selection.
   */
  restShape?: ShapeSpec;

  /**
   * Per-interaction target shapes. Overrides the default press shape morph.
   * Pass `{}` to disable all interaction shape morphing.
   *
   * @example
   * ```tsx
   * // Custom press + hover shapes
   * <Button interactionShapes={{ press: 'small', hover: 'large' }} />
   *
   * // Disable shape morphing (e.g. inside a ButtonGroup)
   * <Button interactionShapes={{}} />
   * ```
   */
  interactionShapes?: SurfaceInteractions['shapes'];

  /**
   * Elevation level (0–5). Accepts a static number or a `SharedValue<number>`
   * from `useSharedValue()` for animated transitions. A plain number will snap
   * to the new level; only a `SharedValue` produces smooth animation.
   * When omitted, defaults to 1 for elevated variant, 0 otherwise.
   */
  elevation?: ElevationLevel | SharedValue<number>;

  /** Additional style for the inner container (the Surface). */
  containerStyle?: StyleProp<ViewStyle>;
};

// ---------------------------------------------------------------------------
// Button
// ---------------------------------------------------------------------------

/**
 * M3 Button — the primary action component.
 *
 * Composable: assemble sub-components (`ButtonIcon`, `ButtonLabel`) as children
 * rather than passing content via props. State (size, variant, disabled, etc.)
 * flows to sub-components via context — no prop injection or `cloneElement`.
 *
 * ## Layer stack
 *
 * ```
 * Pressable                    ← RNGH gesture tracking, interaction progress context
 *   └─ Surface           ← animated borderRadius + elevation shadow + focus ring
 *           ├─ StateLayer      ← press/hover/focus tint overlay + disabled container overlay
 *           └─ ButtonProvider   ← React Context (size, variant, selection, disabled)
 *               ├─ ButtonIcon  ← auto-sized Material Symbol icon
 *               └─ ButtonLabel ← auto-typed Text label
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
 * via {@link useControllableState}. Not supported on the `'text'` variant —
 * a `__DEV__` warning fires and toggle is silently disabled.
 *
 * ## Shape override
 *
 * The rest shape and interaction shapes are computed from size/shape/selection
 * by default. Override with `restShape` and `interactionShapes` for custom
 * layouts (e.g. ButtonGroup suppressing corner animation).
 *
 * @example
 * ```tsx
 * // Basic filled button
 * <Button onPress={handleSave} variant="filled" size="medium">
 *   <ButtonIcon name="save" />
 *   <ButtonLabel>Save</ButtonLabel>
 * </Button>
 *
 * // Toggle button (uncontrolled)
 * <Button toggle defaultSelected={false} variant="outlined">
 *   <ButtonIcon name="favorite" />
 *   <ButtonLabel>Like</ButtonLabel>
 * </Button>
 *
 * // Custom shape override (no press morph)
 * <Button restShape="medium" interactionShapes={{}}>
 *   <ButtonLabel>Flat corners</ButtonLabel>
 * </Button>
 * ```
 */
const Button = React.memo(function Button({
  ref,
  size = 'small',
  shape = 'rounded',
  variant = 'filled',
  toggle = false,
  selected: selectedProp,
  defaultSelected,
  onSelectedChange,
  restShape: restShapeProp,
  interactionShapes,
  elevation: elevationProp,
  style,
  containerStyle,
  children,
  onPress,
  disabled = false,
  hitSlop: hitSlopProp,
  accessibilityLabel,
  ...props
}: ButtonProps) {
  if (__DEV__ && toggle && variant === 'text') {
    console.warn('Button: toggle is not supported on the "text" variant per M3 spec. Toggle will be ignored.');
  }
  if (__DEV__ && !toggle && selectedProp !== undefined) {
    console.warn('Button: "selected" prop has no effect without toggle={true}.');
  }
  if (__DEV__ && !toggle && defaultSelected !== undefined) {
    console.warn('Button: "defaultSelected" prop has no effect without toggle={true}.');
  }
  if (__DEV__ && !toggle && onSelectedChange !== undefined) {
    console.warn('Button: "onSelectedChange" prop has no effect without toggle={true}.');
  }
  // M3 spec: toggle is not supported on the 'text' variant. Silently disable
  // it so downstream logic (selection state, shape inversion) doesn't activate.
  const effectiveToggle = toggle && variant !== 'text';

  const [selected, setSelected] = useControllableState({
    value: effectiveToggle ? selectedProp : undefined,
    defaultValue: effectiveToggle ? (defaultSelected ?? false) : false,
    onChange: effectiveToggle ? onSelectedChange : undefined,
  });
  const selection: ButtonSelection = effectiveToggle ? (selected ? 'selected' : 'unselected') : 'none';

  styles.useVariants({ size, variant, selection, disabled });

  const restShape: ShapeSpec = useMemo(
    () => restShapeProp ?? getRestShapeToken(size, shape, selection),
    [restShapeProp, size, shape, selection],
  );
  const shapes: SurfaceInteractions['shapes'] = useMemo(
    () => interactionShapes ?? { press: getPressedShapeToken(size) },
    [interactionShapes, size],
  );

  const stateLayerColor = getButtonStateLayerColor(variant, selection);

  // Elevation: elevated variant rests at level 1, all others at level 0.
  // Disabled buttons always drop to level 0 (no shadow).
  const elevationLevel = elevationProp ?? (variant === 'elevated' && !disabled ? 1 : 0);

  // Hover/press elevation interactions per M3 spec:
  //   elevated: hover→2, press→1 (lifts on hover, returns on press)
  //   filled/tonal: hover→1 (lifts on hover only)
  //   outlined/text: no elevation changes
  //   disabled: no elevation interactions regardless of variant
  const elevationInteractions = !disabled
    ? variant === 'elevated'
      ? ELEVATED_HOVER
      : variant === 'filled' || variant === 'tonal'
        ? SURFACE_HOVER
        : undefined
    : undefined;

  // Ensure minimum 48dp touch target for smaller sizes.
  // hitSlop adds to each edge: xsmall (32dp + 8+8 = 48dp), small (40dp + 4+4 = 48dp).
  const hitSlop = hitSlopProp ?? BUTTON_HIT_SLOP[size];

  const handlePress = React.useCallback((e: TapEvent) => {
    if (disabled) return;
    if (effectiveToggle) setSelected((prev) => !prev);
    onPress?.(e);
  }, [disabled, effectiveToggle, setSelected, onPress]);

  const ctx = useMemo<ButtonCtx>(
    () => ({ size, shape, variant, selection, disabled }),
    [size, shape, variant, selection, disabled],
  );

  // Always use 'button' — 'togglebutton' has no native equivalent on iOS/Android
  // and silently falls back to 'button'. Toggle state is communicated via accessibilityState.
  const a11yRole = 'button' as const;
  // On web, toggle state is communicated via `aria-pressed` (set explicitly below).
  // On native, use `checked` instead of `selected` — VoiceOver announces "checked/not checked"
  // and TalkBack announces toggle state reliably for `checked`, but not for `selected` on
  // role="button". `selected` maps to UIAccessibilityTraitSelected which is ambiguous.
  const a11yState = useMemo(
    () => ({
      disabled,
      ...(effectiveToggle && Platform.OS !== 'web' && { checked: selected }),
    }),
    [disabled, effectiveToggle, selected],
  );

  // DEV-only: validate child composition against M3 constraints.
  // Inline (not useEffect) — consistent with the prop-misuse guards above and
  // avoids warning floods from effects re-firing on every children identity change.
  if (__DEV__) {
    const childArray = React.Children.toArray(children);
    const isIcon = childGuard<ButtonIconProps>('ButtonIcon');
    const isLabel = childGuard<ButtonLabelProps>('ButtonLabel');
    const hasLabel = childArray.some((child) => React.isValidElement(child) && isLabel(child));
    if (!accessibilityLabel && !hasLabel) {
      console.warn('Button: icon-only buttons require an accessibilityLabel prop for screen readers.');
    }
    const iconCount = childArray.filter((child) => React.isValidElement(child) && isIcon(child)).length;
    if (iconCount > 1) {
      console.warn('Button: M3 spec prohibits using more than one icon in the same button.');
    }
    if (iconCount === 1 && hasLabel) {
      const iconIndex = childArray.findIndex((child) => React.isValidElement(child) && isIcon(child));
      const labelIndex = childArray.findIndex((child) => React.isValidElement(child) && isLabel(child));
      if (iconIndex > labelIndex) {
        console.warn('Button: ButtonIcon should be placed before ButtonLabel in JSX order (icon-leading per M3 spec).');
      }
    }
  }

  return (
    <Pressable
      ref={ref}
      style={[styles.root, style]}
      onPress={handlePress}
      disabled={disabled}
      hitSlop={hitSlop}
      speed="fast"
      accessibilityRole={a11yRole}
      accessibilityState={a11yState}
      accessibilityLabel={accessibilityLabel}
      // Web: aria-pressed is semantically correct for toggle buttons (RN Web maps
      // accessibilityState.selected to aria-selected, which is wrong for toggles).
      // Ignored on native platforms.
      {...(effectiveToggle && { 'aria-pressed': selected })}
      {...props}
    >
      <Surface
        shape={restShape}
        elevation={elevationLevel}
        interactions={{ shapes, elevations: elevationInteractions }}
        style={[styles.container, containerStyle]}
      >
        <StateLayer color={stateLayerColor} disabled={disabled} disabledOpacity={BUTTON_DISABLED_CONTAINER_OPACITY} />
        <ButtonProvider value={ctx}>{children}</ButtonProvider>
      </Surface>
    </Pressable>
  );
});

// ---------------------------------------------------------------------------
// ButtonIcon
// ---------------------------------------------------------------------------

type ButtonIconProps = IconProps & {
  /** Icon name to use when the parent toggle Button is in the 'selected' state. */
  selectedName?: MaterialSymbol;
};

/**
 * Icon sub-component for {@link Button}. Must be used inside a Button.
 *
 * Automatically sizes the icon based on the parent Button's size and applies
 * variant-appropriate coloring via unistyles variants.
 *
 * Place `ButtonIcon` **before** `ButtonLabel` in the JSX tree. The container
 * uses `flexDirection: 'row'`, so this ordering produces icon-left in LTR and
 * icon-right in RTL — matching M3 guidelines automatically.
 *
 * @example
 * ```tsx
 * <Button>
 *   <ButtonIcon name="add" />
 *   <ButtonLabel>Add item</ButtonLabel>
 * </Button>
 * ```
 */
const ButtonIcon = React.memo(function ButtonIcon({ selectedName, name, style, ...props }: ButtonIconProps) {
  const { size, variant, selection, disabled } = useButton();

  // Swap icon name when toggle is selected and a selectedName is provided
  const effectiveName = selectedName && selection === 'selected' ? selectedName : name;

  styles.useVariants({ size, variant, selection, disabled });

  return (
    <Icon
      name={effectiveName}
      size={BUTTON_ICON_SIZE[size]}
      // Hide icon from the accessibility tree so screen readers don't announce
      // the icon name as a separate element alongside the button label text.
      importantForAccessibility="no"
      accessibilityElementsHidden
      // `styles.label` is shared between ButtonIcon and ButtonLabel — it contains
      // only color and opacity variants (no typography), so it works for both.
      style={[styles.label, style]}
      {...props}
    />
  );
});

// ---------------------------------------------------------------------------
// ButtonLabel
// ---------------------------------------------------------------------------

type ButtonLabelProps = TextProps & {
  /**
   * Maximum number of lines before truncation.
   * M3 spec: label text should remain on a single line.
   * @default 1
   */
  numberOfLines?: number;
};

/**
 * Text label sub-component for {@link Button}. Must be used inside a Button.
 *
 * Automatically selects typography variant and size based on the parent
 * Button's size, and applies variant-appropriate coloring.
 *
 * **Note:** The `variant` and `size` props inherited from `TextProps` are
 * overridden internally by the size-derived lookup tables (`BUTTON_TEXT_VARIANT`
 * and `BUTTON_TEXT_SIZE`). Consumer-supplied values for these two props are
 * silently ignored — this ensures buttons always match the M3 spec typography.
 *
 * @example
 * ```tsx
 * <Button variant="tonal">
 *   <ButtonLabel>Click me</ButtonLabel>
 * </Button>
 * ```
 */
const ButtonLabel = React.memo(function ButtonLabel({ numberOfLines = 1, style, ...props }: ButtonLabelProps) {
  const { size, variant, selection, disabled } = useButton();

  styles.useVariants({ variant, selection, disabled });

  return (
    <Text
      numberOfLines={numberOfLines}
      // `styles.label` is shared with ButtonIcon — contains color/opacity variants only.
      style={[styles.label, style]}
      // Typography variant and size are derived from the parent Button's size tier.
      // These are applied before ...props, so consumer overrides are intentionally ignored.
      variant={BUTTON_TEXT_VARIANT[size]}
      size={BUTTON_TEXT_SIZE[size]}
      {...props}
    />
  );
});

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create((theme) => ({
  // Empty root style — exists as the anchor for consumer `style` prop overrides
  // applied via `[styles.root, style]` on the Pressable wrapper.
  root: {},
  // The visible button container. Rendered inside Surface (which clips to
  // animated borderRadius). Layout, colors, and borders are all variant-driven.
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

    variants: {
      size: {
        xsmall: {
          minHeight: 32,
          gap: 8,
          paddingVertical: 6,
          paddingHorizontal: 12,
        },
        small: {
          minHeight: 40,
          gap: 8,
          paddingVertical: 10,
          paddingHorizontal: 16,
        },
        medium: {
          minHeight: 56,
          gap: 8,
          paddingVertical: 16,
          paddingHorizontal: 24,
        },
        large: {
          minHeight: 96,
          gap: 12,
          paddingVertical: 32,
          paddingHorizontal: 48,
        },
        xlarge: {
          minHeight: 136,
          gap: 16,
          paddingVertical: 48,
          paddingHorizontal: 64,
        },
      },
      variant: {
        filled: {
          backgroundColor: theme.scheme.primary,
        },
        elevated: {
          backgroundColor: theme.scheme.surfaceContainerLow,
        },
        tonal: {
          backgroundColor: theme.scheme.secondaryContainer,
        },
        outlined: {
          borderWidth: 1,
          borderColor: theme.scheme.outlineVariant,
        },
        text: {},
      },
      // Structural placeholders — unistyles requires all variant keys declared.
      // Actual selection colors are in compoundVariants below.
      selection: {
        none: {},
        selected: {},
        unselected: {},
      },
      disabled: {
        true: {
          // Clear variant-applied colors so the StateLayer disabled overlay is the sole
          // container fill. Compound variants (e.g. outlined+disabled) may re-apply
          // specific values — this relies on compound variants resolving after simple variants.
          backgroundColor: undefined,
          borderColor: undefined,
        },
        false: {},
      },
    },
    compoundVariants: [
      // -- Outlined border width per size ------------------------------------
      { size: 'large', variant: 'outlined', styles: { borderWidth: 2 } },
      { size: 'xlarge', variant: 'outlined', styles: { borderWidth: 3 } },

      // -- Toggle: unselected container colors ---------------------------------
      { variant: 'filled', selection: 'unselected', styles: { backgroundColor: theme.scheme.surfaceContainer } },
      { variant: 'elevated', selection: 'unselected', styles: { backgroundColor: theme.scheme.surfaceContainerLow } },

      // -- Toggle: selected container colors ---------------------------------
      { variant: 'elevated', selection: 'selected', styles: { backgroundColor: theme.scheme.primary } },
      { variant: 'tonal', selection: 'selected', styles: { backgroundColor: theme.scheme.secondary } },
      { variant: 'outlined', selection: 'selected', styles: { backgroundColor: theme.scheme.inverseSurface } },

      // -- Disabled outlined: outline at full opacity --------------------------
      { variant: 'outlined', disabled: true, styles: { borderColor: theme.scheme.outlineVariant } },
      // Explicit: outlined + unselected + disabled keeps outline border
      {
        variant: 'outlined',
        selection: 'unselected',
        disabled: true,
        styles: { borderColor: theme.scheme.outlineVariant },
      },

      // -- Disabled + selected clears bg -------------------------------------
      { selection: 'selected', disabled: true, styles: { backgroundColor: undefined } },
    ],
  },
  // Shared color/opacity style applied to both ButtonIcon and ButtonLabel.
  // Named "label" because the M3 spec calls the text+icon content layer the
  // "label" layer. Contains only `color` and `opacity` — no typography props,
  // which is why it works safely for both Icon (TextStyle color) and Text.
  label: {
    variants: {
      variant: {
        filled: {
          color: theme.scheme.onPrimary,
        },
        elevated: {
          color: theme.scheme.primary,
        },
        tonal: {
          color: theme.scheme.onSecondaryContainer,
        },
        outlined: {
          color: theme.scheme.onSurfaceVariant,
        },
        text: {
          color: theme.scheme.primary,
        },
      },
      // Structural placeholders — actual selection colors are in compoundVariants.
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
      { variant: 'filled', selection: 'unselected', styles: { color: theme.scheme.onSurfaceVariant } },
      { variant: 'elevated', selection: 'selected', styles: { color: theme.scheme.onPrimary } },
      { variant: 'tonal', selection: 'selected', styles: { color: theme.scheme.onSecondary } },
      { variant: 'outlined', selection: 'selected', styles: { color: theme.scheme.inverseOnSurface } },
      { selection: 'selected', disabled: true, styles: { color: theme.scheme.onSurface } },
    ],
  },
}));

Button.displayName = 'Button';
ButtonIcon.displayName = 'ButtonIcon';
ButtonLabel.displayName = 'ButtonLabel';

export type { ButtonIconProps, ButtonLabelProps, ButtonProps, ButtonSelection, ButtonShape, ButtonSize, ButtonVariant };
export { Button, ButtonIcon, ButtonLabel, useButton };
