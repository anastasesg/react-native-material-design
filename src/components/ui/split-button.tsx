/// Material Design Split Button
/// Overview: https://m3.material.io/components/split-button/overview
/// Specs: https://m3.material.io/components/split-button/specs
/// Guidelines: https://m3.material.io/components/split-button/guidelines
/// Accessibility: https://m3.material.io/components/split-button/accessibility

import React, { useMemo, useRef } from 'react';
import { Platform, type StyleProp, View, type ViewProps, type ViewStyle } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

import type { ElevationLevel } from '@/theme/elevation';
import type { Scheme } from '@/theme/scheme';

import { useControllableState, useMotionConfig } from '../../hooks';
import { createComponentContext } from '../../utilities';
import { Pressable, type PressableProps, ShapeContainer, type ShapeToken, StateLayer, type TapEvent } from '../custom';
import { ElevationContainer, type InteractionElevations } from '../custom/elevation-container';
import type { InteractionShapes, ShapeSpec } from '../custom/shape-container';
import { Icon, type IconProps } from './icon';
import { Text, type TextProps, type TextSize, type TextVariant } from './text';

// ---------------------------------------------------------------------------
// Internal context — shared between SplitButton and its sub-components
// ---------------------------------------------------------------------------

/** @internal State passed from SplitButton to its sub-components via context. */
type SplitButtonCtx = {
  size: SplitButtonSize;
  variant: SplitButtonVariant;
  disabled: boolean;
};

const [SplitButtonProvider, useSplitButton] = createComponentContext<SplitButtonCtx>('SplitButton');

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Split button size — controls padding, gap, typography, corner radii, and icon sizes. */
type SplitButtonSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

/** Split button variant — determines container color, elevation, and border treatment. */
type SplitButtonVariant = 'filled' | 'elevated' | 'tonal' | 'outlined';

type SplitButtonProps = Omit<ViewProps, 'style'> & {
  ref?: React.Ref<React.ComponentRef<typeof View>>;

  /**
   * Button size tier. Controls padding, corner radii, icon size, and typography scale.
   *
   * `'small'` is the M3 baseline default. `'xsmall'`, `'medium'`, `'large'`, and
   * `'xlarge'` are **M3 Expressive** configurations.
   * @default 'small'
   */
  size?: SplitButtonSize;

  /**
   * Visual variant — determines container color, elevation, and border.
   * Unlike {@link Button}, the `'text'` variant is not available for split buttons.
   * @default 'filled'
   */
  variant?: SplitButtonVariant;

  /** Disables both halves — prevents press events, dims content, removes elevation. */
  disabled?: boolean;

  /** Additional style for the outer layout container. */
  style?: StyleProp<ViewStyle>;

  children?: React.ReactNode;
};

// ---------------------------------------------------------------------------
// Shape resolution helpers
// ---------------------------------------------------------------------------

/**
 * Computes the inner corner shape token at rest for the split seam.
 *
 * The inner corners (where leading and trailing halves meet) use smaller
 * radii than the outer corners ('full'), creating the visual "split" effect.
 * Larger sizes get proportionally larger inner corners.
 */
function getSplitInnerRestToken(size: SplitButtonSize): ShapeToken {
  if (size === 'large') return 'small';
  if (size === 'xlarge') return 'medium';
  return 'xsmall';
}

/**
 * Computes the inner corner shape token when pressed.
 *
 * During a press interaction, inner corners round outward (toward larger radii),
 * creating the M3 "squish" effect at the split seam. This mirrors the
 * press shape morph behavior of {@link Button}.
 */
function getSplitInnerPressedToken(size: SplitButtonSize): ShapeToken {
  if (size === 'xsmall') return 'small';
  if (size === 'large' || size === 'xlarge') return 'largeIncreased';
  return 'medium';
}

// ---------------------------------------------------------------------------
// Size token tables (from M3 spec)
// ---------------------------------------------------------------------------

/** Trailing button chevron icon size per size (dp). */
const TRAILING_ICON_SIZE: Record<SplitButtonSize, number> = {
  xsmall: 22,
  small: 22,
  medium: 26,
  large: 38,
  xlarge: 50,
};

/** Leading icon size per size (dp) — matches Button's BUTTON_ICON_SIZE table. */
const LEADING_ICON_SIZE: Record<SplitButtonSize, number> = {
  xsmall: 20,
  small: 20,
  medium: 24,
  large: 32,
  xlarge: 40,
};

/** Label typography variant per size — matches Button's BUTTON_TEXT_VARIANT table. */
const LABEL_TEXT_VARIANT: Record<SplitButtonSize, TextVariant> = {
  xsmall: 'label',
  small: 'label',
  medium: 'title',
  large: 'headline',
  xlarge: 'headline',
};

/** Label typography size per size — matches Button's BUTTON_TEXT_SIZE table. */
const LABEL_TEXT_SIZE: Record<SplitButtonSize, TextSize> = {
  xsmall: 'large',
  small: 'large',
  medium: 'medium',
  large: 'small',
  xlarge: 'large',
};

/**
 * Returns the M3 state layer color for a given variant.
 *
 * Unlike {@link Button}, split buttons have no toggle/selection state,
 * so the mapping is simpler — one color per variant:
 *
 *   Variant   | State layer color
 *   ----------|------------------
 *   filled    | onPrimary
 *   elevated  | primary
 *   tonal     | onSecondaryContainer
 *   outlined  | onSurfaceVariant
 */
function getSplitButtonStateLayerColor(variant: SplitButtonVariant): keyof Scheme {
  if (variant === 'filled') return 'onPrimary';
  if (variant === 'tonal') return 'onSecondaryContainer';
  if (variant === 'outlined') return 'onSurfaceVariant';
  return 'primary'; // elevated
}

/**
 * M3 disabled container overlay opacity for non-outlined variants.
 * Differs from the system default `theme.state.disabledContainer` (0.12).
 */
const SPLIT_BUTTON_DISABLED_CONTAINER_OPACITY = 0.1;

/** M3 filled/tonal: hover lifts from level 0 → level 1. */
const SURFACE_HOVER: InteractionElevations = { hover: 1 };
/** M3 elevated: hover lifts from level 1 → level 2, press stays at level 1. */
const ELEVATED_HOVER: InteractionElevations = { hover: 2, press: 1 };

/** Resolves elevation level and interaction elevations for a given variant + disabled state. */
function resolveElevation(variant: SplitButtonVariant, disabled: boolean) {
  const level: ElevationLevel = variant === 'elevated' && !disabled ? 1 : 0;
  const interactions = !disabled
    ? variant === 'elevated'
      ? ELEVATED_HOVER
      : variant === 'filled' || variant === 'tonal'
        ? SURFACE_HOVER
        : undefined
    : undefined;
  return { level, interactions };
}

/**
 * Vertical hitSlop to extend touch target to the M3-required 48dp minimum
 * for smaller sizes. Each half gets its own hitSlop.
 */
const TOUCH_TARGET_HIT_SLOP: Partial<Record<SplitButtonSize, { top: number; bottom: number }>> = {
  xsmall: { top: 8, bottom: 8 }, // (48 - 32) / 2
  small: { top: 4, bottom: 4 }, // (48 - 40) / 2
};

/**
 * Menu icon vertical offset when not expanded (dp).
 *
 * The chevron icon sits slightly above center when pointing down (collapsed state)
 * for optical balance. When expanded (rotated 180°), the offset animates to 0
 * since the upward-pointing chevron looks centered without adjustment.
 */
const TRAILING_ICON_OFFSET: Record<SplitButtonSize, number> = {
  xsmall: -1,
  small: -1,
  medium: -2,
  large: -3,
  xlarge: -6,
};

// ---------------------------------------------------------------------------
// SplitButton
// ---------------------------------------------------------------------------

/**
 * M3 Split Button — a two-part action component with a primary action and a
 * secondary menu trigger.
 *
 * Unlike {@link Button}, the root element is a non-pressable `View` that lays
 * out two independently pressable halves side-by-side with a 2dp gap between them.
 * State (size, variant, disabled) flows to sub-components via context.
 *
 * ## Composition
 *
 * Assemble using {@link SplitButtonLeading} (primary action) and
 * {@link SplitButtonTrailing} (menu trigger). Place {@link SplitButtonIcon}
 * and {@link SplitButtonLabel} inside the leading half.
 *
 * ## Layer Stack
 *
 * ```
 * View (root)                           ← non-pressable layout container
 *   ├─ Pressable                        ← leading half gesture handling
 *   │    └─ ElevationContainer          ← shadow (elevated variant only)
 *   │        └─ ShapeContainer          ← animated asymmetric border radius
 *   │            ├─ StateLayer          ← press/hover/focus tint overlay
 *   │            ├─ SplitButtonIcon     ← auto-sized icon
 *   │            └─ SplitButtonLabel    ← auto-typed text label
 *   │
 *   └─ Pressable                        ← trailing half gesture handling
 *        └─ ElevationContainer          ← shadow (elevated variant only)
 *            └─ ShapeContainer          ← animated asymmetric border radius
 *                ├─ StateLayer          ← press/hover/focus tint overlay
 *                └─ Animated.View       ← chevron rotation animation
 *                    └─ SplitButtonTrailingIcon
 * ```
 *
 * ## Shape
 *
 * Outer corners use `'full'` (pill shape). Inner corners (at the split seam)
 * use size-dependent tokens that morph on press interaction, creating the
 * M3 "squish" effect at the junction.
 *
 * @example
 * ```tsx
 * // Basic split button
 * <SplitButton variant="filled" size="medium">
 *   <SplitButtonLeading onPress={handleSave}>
 *     <SplitButtonIcon name="save" />
 *     <SplitButtonLabel>Save</SplitButtonLabel>
 *   </SplitButtonLeading>
 *   <SplitButtonTrailing onOpenChange={setMenuOpen} />
 * </SplitButton>
 *
 * // Outlined variant, controlled trailing state
 * <SplitButton variant="outlined">
 *   <SplitButtonLeading onPress={handleAction}>
 *     <SplitButtonLabel>Options</SplitButtonLabel>
 *   </SplitButtonLeading>
 *   <SplitButtonTrailing open={menuOpen} onOpenChange={setMenuOpen} />
 * </SplitButton>
 * ```
 */
function SplitButton({
  ref,
  size = 'small',
  variant = 'filled',
  disabled = false,
  style,
  children,
  ...viewProps
}: SplitButtonProps) {
  styles.useVariants({ size, variant, disabled });

  const ctx = useMemo<SplitButtonCtx>(() => ({ size, variant, disabled }), [size, variant, disabled]);

  // TODO: M3 spec requires RTL keyboard focus order to reverse (trailing first,
  // then leading). CSS direction:rtl mirrors visual order via flexDirection but
  // does not reverse DOM tab order on web. Needs platform-specific tabIndex
  // management or DOM order swap with row-reverse compensation.

  return (
    // accessibilityRole="none" — the root View is a layout container, not an
    // interactive element. Each half (leading/trailing) has its own role="button".
    <View ref={ref} style={[styles.root, style]} accessibilityRole="none" {...viewProps}>
      <SplitButtonProvider value={ctx}>{children}</SplitButtonProvider>
    </View>
  );
}

// ---------------------------------------------------------------------------
// SplitButtonLeading
// ---------------------------------------------------------------------------

type SplitButtonLeadingProps = Omit<PressableProps, 'style'> & {
  ref?: React.Ref<React.ComponentRef<typeof View>>;

  /** Additional style for the outer Pressable wrapper. */
  style?: StyleProp<ViewStyle>;

  /** Additional style for the inner ShapeContainer. */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Enables toggle mode. When true, the leading button alternates between
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

  /**
   * Called when the toggle state changes (on each press in toggle mode).
   * Ignored unless `toggle={true}`.
   */
  onSelectedChange?: (selected: boolean) => void;

  /**
   * Override the rest (unpressed) shape. Accepts a shape token, a raw number,
   * or a per-corner object. When omitted, computed from size (outer `full`, inner from spec).
   */
  restShape?: ShapeSpec;

  /**
   * Per-interaction target shapes. Overrides the default press/hover/focus shape morph.
   * Pass `{}` to disable all interaction shape morphing.
   */
  interactionShapes?: InteractionShapes;
};

/**
 * Leading (primary action) half of a {@link SplitButton}. Must be used inside
 * a SplitButton.
 *
 * This is the main pressable area where the user triggers the primary action.
 * Place {@link SplitButtonIcon} and {@link SplitButtonLabel} as children.
 *
 * ## Layer Stack
 *
 * ```
 * Pressable                    ← RNGH gesture tracking, interaction progress context
 *   └─ ElevationContainer      ← platform shadow (elevated variant only)
 *       └─ ShapeContainer      ← animated asymmetric borderRadius + focus ring
 *           ├─ StateLayer      ← press/hover/focus tint overlay + disabled container overlay
 *           ├─ SplitButtonIcon  ← auto-sized Material Symbol icon
 *           └─ SplitButtonLabel ← auto-typed Text label
 * ```
 *
 * ## Toggle Mode
 *
 * The leading half supports toggle mode via `toggle={true}`. Unlike
 * {@link Button}, toggle only affects `accessibilityState.selected` — it does
 * not change container color, shape inversion, or label color (the M3 split
 * button spec does not define visual toggle states). Supports both controlled
 * (`selected` + `onSelectedChange`) and uncontrolled (`defaultSelected`) modes
 * via {@link useControllableState}.
 *
 * ## Shape
 *
 * Outer corners (start side) are always `'full'` (pill). Inner corners
 * (end side, toward the trailing half) use size-dependent tokens that morph
 * on press/hover/focus interactions.
 *
 * @example
 * ```tsx
 * <SplitButton variant="tonal">
 *   <SplitButtonLeading onPress={handleAction}>
 *     <SplitButtonIcon name="edit" />
 *     <SplitButtonLabel>Edit</SplitButtonLabel>
 *   </SplitButtonLeading>
 *   <SplitButtonTrailing />
 * </SplitButton>
 * ```
 */
function SplitButtonLeading({
  ref,
  style,
  containerStyle,
  children,
  toggle = false,
  selected: selectedProp,
  defaultSelected,
  onSelectedChange,
  restShape: restShapeProp,
  interactionShapes: interactionShapesProp,
  onPress,
  ...props
}: SplitButtonLeadingProps) {
  const { size, variant, disabled } = useSplitButton();

  // -- DEV-only prop-misuse guards --
  // Inline (not useEffect) — consistent with Button's approach and avoids
  // warning floods from effects re-firing on every prop identity change.
  if (__DEV__ && !toggle && selectedProp !== undefined) {
    console.warn('SplitButtonLeading: "selected" prop has no effect without toggle={true}.');
  }
  if (__DEV__ && !toggle && defaultSelected !== undefined) {
    console.warn('SplitButtonLeading: "defaultSelected" prop has no effect without toggle={true}.');
  }
  if (__DEV__ && !toggle && onSelectedChange !== undefined) {
    console.warn('SplitButtonLeading: "onSelectedChange" prop has no effect without toggle={true}.');
  }

  // DEV-only: icon-only leading buttons need an accessibilityLabel for
  // screen readers since there's no visible text to derive a label from.
  if (__DEV__ && !props.accessibilityLabel) {
    let hasLabel = false;
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child.type === SplitButtonLabel) hasLabel = true;
    });
    if (!hasLabel) {
      console.warn(
        'SplitButtonLeading: no SplitButtonLabel child and no accessibilityLabel prop. ' +
          'Icon-only leading buttons must provide an accessibilityLabel for screen readers.',
      );
    }
  }

  const [selected, setSelected] = useControllableState({
    value: toggle ? selectedProp : undefined,
    defaultValue: toggle ? (defaultSelected ?? false) : false,
    onChange: toggle ? onSelectedChange : undefined,
  });

  styles.useVariants({ size, variant, disabled });

  // -- Shape resolution --
  // Leading half: outer corners (start side) are always pill-shaped ('full').
  // Inner corners (end side, toward the trailing half) use size-dependent tokens
  // that morph outward during press/hover/focus interactions.
  const defaultRestShape = useMemo(
    () => ({
      topStart: 'full' as const,
      bottomStart: 'full' as const,
      topEnd: getSplitInnerRestToken(size),
      bottomEnd: getSplitInnerRestToken(size),
    }),
    [size],
  );
  const defaultInteractionShape = useMemo(
    () => ({
      topStart: 'full' as const,
      bottomStart: 'full' as const,
      topEnd: getSplitInnerPressedToken(size),
      bottomEnd: getSplitInnerPressedToken(size),
    }),
    [size],
  );
  const restShape = restShapeProp ?? defaultRestShape;
  // Unlike Button (which only morphs on press), split button halves morph on
  // all three interaction states — press, hover, and focus — per M3 spec.
  const shapes = useMemo(
    () =>
      interactionShapesProp ?? {
        press: defaultInteractionShape,
        hover: defaultInteractionShape,
        focus: defaultInteractionShape,
      },
    [interactionShapesProp, defaultInteractionShape],
  );

  const stateLayerColor = getSplitButtonStateLayerColor(variant);
  const elevation = resolveElevation(variant, disabled);

  const handlePress = React.useCallback((e: TapEvent) => {
    if (disabled) return;
    if (toggle) setSelected((prev) => !prev);
    onPress?.(e);
  }, [disabled, toggle, setSelected, onPress]);

  return (
    <Pressable
      ref={ref}
      style={[styles.leadingRoot, style]}
      onPress={handlePress}
      disabled={disabled}
      hitSlop={TOUCH_TARGET_HIT_SLOP[size]}
      // Always 'button' — toggle state is communicated via accessibilityState.
      // 'togglebutton' has no native equivalent on iOS/Android.
      accessibilityRole="button"
      // On native, use `checked` — VoiceOver announces "checked/not checked" and
      // TalkBack announces toggle state reliably. `selected` maps to
      // UIAccessibilityTraitSelected which is ambiguous for toggles.
      accessibilityState={{
        disabled,
        ...(toggle && Platform.OS !== 'web' && { checked: selected }),
      }}
      // Web: aria-pressed is semantically correct for toggle buttons (RN Web maps
      // accessibilityState.selected to aria-selected, which is wrong for toggles).
      {...(toggle && { 'aria-pressed': selected })}
      {...props}
    >
      <ElevationContainer level={elevation.level} elevations={elevation.interactions}>
        <ShapeContainer shape={restShape} shapes={shapes} style={[styles.leadingContainer, containerStyle]}>
          {/* Outlined disabled: no container tint — spec only shows retained border + dimmed content.
              Other variants: 0.1 matches md.comp.split-button.disabled.container.opacity. */}
          <StateLayer
            color={stateLayerColor}
            disabled={disabled}
            disabledOpacity={variant === 'outlined' ? 0 : SPLIT_BUTTON_DISABLED_CONTAINER_OPACITY}
          />
          {children}
        </ShapeContainer>
      </ElevationContainer>
    </Pressable>
  );
}

// ---------------------------------------------------------------------------
// SplitButtonTrailing
// ---------------------------------------------------------------------------

type SplitButtonTrailingProps = Omit<PressableProps, 'style'> & {
  ref?: React.Ref<React.ComponentRef<typeof View>>;

  /** Controlled open state. When provided, the component is fully controlled. */
  open?: boolean;

  /** Initial open state for uncontrolled usage. @default false */
  defaultOpen?: boolean;

  /** Called when the open state changes (on each press). */
  onOpenChange?: (open: boolean) => void;

  /** Additional style for the outer Pressable wrapper. */
  style?: StyleProp<ViewStyle>;

  /** Additional style for the inner ShapeContainer. */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Override the rest (unpressed) shape. Accepts a shape token, a raw number,
   * or a per-corner object. When omitted, computed from size and open state.
   */
  restShape?: ShapeSpec;

  /**
   * Per-interaction target shapes. Overrides the default press/hover/focus shape morph.
   * Pass `{}` to disable all interaction shape morphing.
   */
  interactionShapes?: InteractionShapes;
};

/**
 * Trailing (menu trigger) half of a {@link SplitButton}. Must be used inside
 * a SplitButton.
 *
 * Renders a chevron icon (`keyboard_arrow_down`) that rotates 180° when toggled
 * open. Supports both controlled (`open` + `onOpenChange`) and uncontrolled
 * (`defaultOpen`) modes via {@link useControllableState}.
 *
 * ## Layer Stack
 *
 * ```
 * Pressable                       ← RNGH gesture tracking, interaction progress context
 *   └─ ElevationContainer         ← platform shadow (elevated variant only)
 *       └─ ShapeContainer         ← animated asymmetric borderRadius + focus ring
 *           ├─ StateLayer         ← press/hover/focus tint overlay + disabled container overlay
 *           └─ Animated.View      ← chevron rotation animation (independent of shape)
 *               └─ children       ← SplitButtonTrailingIcon (default) or custom content
 * ```
 *
 * ## Shape
 *
 * Outer corners (end side) are always `'full'` (pill). Inner corners
 * (start side, toward the leading half) morph between rest and pressed tokens
 * on interaction. When `open` is true, inner corners expand to `'full'` to
 * visually indicate the expanded state.
 *
 * ## Animation
 *
 * The chevron rotation uses {@link useMotionConfig} with `'fast'` speed and
 * `'standard'` easing, and includes a subtle vertical offset correction for
 * optical centering. This animation channel is independent from the shape
 * morphing driven by Pressable interaction progress.
 *
 * @example
 * ```tsx
 * // Uncontrolled
 * <SplitButtonTrailing onOpenChange={(open) => console.log('Menu:', open)} />
 *
 * // Controlled
 * <SplitButtonTrailing open={isMenuOpen} onOpenChange={setIsMenuOpen} />
 * ```
 */
function SplitButtonTrailing({
  ref,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  style,
  containerStyle,
  restShape: restShapeProp,
  interactionShapes: interactionShapesProp,
  onPress,
  accessibilityLabel,
  children,
  ...props
}: SplitButtonTrailingProps) {
  if (__DEV__ && !accessibilityLabel) {
    console.warn(
      'SplitButtonTrailing: provide an accessibilityLabel contextually related to the leading ' +
        'action (e.g. "More save options" when the leading button says "Save"). M3 spec requires ' +
        'the trailing label to describe the primary action. Falling back to "More options".',
    );
  }

  const { size, variant, disabled } = useSplitButton();
  const [open, setOpen] = useControllableState({
    value: openProp,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  styles.useVariants({ size, variant, disabled });

  // iconOffset must be a SharedValue — plain JS values captured in useAnimatedStyle
  // worklets are frozen at definition time and won't update if `size` changes.
  // Assigned inline (not via useEffect) to avoid a one-frame stale value.
  const iconOffsetSV = useSharedValue(TRAILING_ICON_OFFSET[size]);
  iconOffsetSV.value = TRAILING_ICON_OFFSET[size];

  // -- Shape resolution --
  // Trailing half: outer corners (end side) are always pill-shaped ('full').
  // Inner corners (start side, toward the leading half) morph on interaction.
  // When expanded (open=true), inner corners become 'full' — creating a complete
  // pill shape to visually indicate the expanded state.
  const innerRestToken = open ? ('full' as const) : getSplitInnerRestToken(size);
  const defaultRestShape = useMemo(
    () => ({
      topEnd: 'full' as const,
      bottomEnd: 'full' as const,
      topStart: innerRestToken,
      bottomStart: innerRestToken,
    }),
    [innerRestToken],
  );
  const innerInteractionToken = open ? ('full' as const) : getSplitInnerPressedToken(size);
  const defaultInteractionShape = useMemo(
    () => ({
      topEnd: 'full' as const,
      bottomEnd: 'full' as const,
      topStart: innerInteractionToken,
      bottomStart: innerInteractionToken,
    }),
    [innerInteractionToken],
  );
  const restShape = restShapeProp ?? defaultRestShape;
  const shapes = useMemo(
    () =>
      interactionShapesProp ?? {
        press: defaultInteractionShape,
        hover: defaultInteractionShape,
        focus: defaultInteractionShape,
      },
    [interactionShapesProp, defaultInteractionShape],
  );

  const stateLayerColor = getSplitButtonStateLayerColor(variant);
  const elevation = resolveElevation(variant, disabled);

  // -- Chevron rotation animation --
  // This animation is independent from the shape morphing (which is driven by
  // Pressable interaction progress). The chevron rotates 180° on open/close
  // using a spring with 'fast' speed and 'standard' easing from the theme's
  // motion config. The vertical offset correction is animated in sync with the
  // rotation to maintain optical centering throughout the transition.
  const motion = useMotionConfig('fast', 'standard');
  const expandProgress = useSharedValue(open ? 1 : 0);
  const isFirstRender = useRef(true);

  React.useEffect(() => {
    // Skip the initial effect — the shared value is already initialized to the
    // correct value. Firing withSpring on mount is a no-op that wastes a frame.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    expandProgress.value = withSpring(open ? 1 : 0, motion.effects.value);
  }, [open, expandProgress, motion.effects]);

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [
      // Rotate: 0° (collapsed, chevron points down) → 180° (expanded, chevron points up)
      { rotate: `${interpolate(expandProgress.value, [0, 1], [0, 180])}deg` },
      // Vertical offset: collapsed state needs a slight upward nudge for optical
      // centering; expanded state (180° rotated) looks centered without adjustment.
      { translateY: interpolate(expandProgress.value, [0, 1], [iconOffsetSV.value, 0]) },
    ],
  }));

  // -- Handlers --
  const handlePress = React.useCallback((e: TapEvent) => {
    if (disabled) return;
    setOpen((prev) => !prev);
    onPress?.(e);
  }, [disabled, setOpen, onPress]);

  return (
    <Pressable
      ref={ref}
      style={[styles.trailingRoot, style]}
      onPress={handlePress}
      disabled={disabled}
      hitSlop={TOUCH_TARGET_HIT_SLOP[size]}
      // Always 'button' — expanded/collapsed state is communicated via
      // accessibilityState.expanded, not the role.
      accessibilityRole="button"
      // expanded: tells screen readers this is a disclosure control.
      // VoiceOver: "More options, collapsed/expanded, button".
      accessibilityState={{ expanded: open, disabled }}
      accessibilityLabel={accessibilityLabel ?? 'More options'}
      // iOS VoiceOver doesn't always announce `expanded` for role="button".
      // Supplement with a hint so the state is communicated.
      {...(Platform.OS === 'ios' && { accessibilityHint: open ? 'Expanded' : 'Collapsed' })}
      {...props}
    >
      <ElevationContainer level={elevation.level} elevations={elevation.interactions}>
        <ShapeContainer shape={restShape} shapes={shapes} style={[styles.trailingContainer, containerStyle]}>
          <StateLayer
            color={stateLayerColor}
            disabled={disabled}
            disabledOpacity={variant === 'outlined' ? 0 : SPLIT_BUTTON_DISABLED_CONTAINER_OPACITY}
          />
          {/* Default children: SplitButtonTrailingIcon renders the chevron.
              Consumers can override children to wrap the icon (e.g., with Badge)
              while the Animated.View handles the rotation animation. */}
          <Animated.View style={animatedIconStyle}>{children ?? <SplitButtonTrailingIcon />}</Animated.View>
        </ShapeContainer>
      </ElevationContainer>
    </Pressable>
  );
}

// ---------------------------------------------------------------------------
// SplitButtonTrailingIcon
// ---------------------------------------------------------------------------

type SplitButtonTrailingIconProps = Omit<IconProps, 'size' | 'name'> & {
  /** Icon name. Defaults to `'keyboard_arrow_down'`. Overriding triggers a dev-mode warning. */
  name?: IconProps['name'];
};

/**
 * Chevron icon sub-component for {@link SplitButtonTrailing}. Renders
 * `keyboard_arrow_down` by default. The icon name can be overridden, but
 * a dev-mode warning will fire — the M3 spec says: "The trailing button
 * should always have the expand and collapse icon. Avoid modifying the icon."
 *
 * Can be wrapped with a `Badge` for notification indicators.
 *
 * @example
 * ```tsx
 * // Default chevron
 * <SplitButtonTrailing>
 *   <SplitButtonTrailingIcon />
 * </SplitButtonTrailing>
 *
 * // Wrapped with badge
 * <SplitButtonTrailing>
 *   <Badge count={3}>
 *     <SplitButtonTrailingIcon />
 *   </Badge>
 * </SplitButtonTrailing>
 * ```
 */
function SplitButtonTrailingIcon({ name = 'keyboard_arrow_down', style, ...props }: SplitButtonTrailingIconProps) {
  if (__DEV__ && name !== 'keyboard_arrow_down') {
    console.warn(
      'SplitButtonTrailingIcon: M3 spec requires the trailing icon to be "keyboard_arrow_down". ' +
        `Received "${name}". Avoid modifying the trailing icon.`,
    );
  }

  const { size, variant, disabled } = useSplitButton();
  styles.useVariants({ size, variant, disabled });

  return <Icon name={name} size={TRAILING_ICON_SIZE[size]} style={[styles.trailingIcon, style]} {...props} />;
}

// ---------------------------------------------------------------------------
// SplitButtonIcon
// ---------------------------------------------------------------------------

type SplitButtonIconProps = IconProps;

/**
 * Icon sub-component for {@link SplitButtonLeading}. Must be used inside a
 * SplitButton (reads size/variant/disabled from context).
 *
 * Automatically sizes the icon based on the parent SplitButton's size and
 * applies variant-appropriate coloring via unistyles variants.
 *
 * @example
 * ```tsx
 * <SplitButtonLeading onPress={handleSave}>
 *   <SplitButtonIcon name="save" />
 *   <SplitButtonLabel>Save</SplitButtonLabel>
 * </SplitButtonLeading>
 * ```
 */
function SplitButtonIcon({ style, ...props }: SplitButtonIconProps) {
  const { size, variant, disabled } = useSplitButton();
  styles.useVariants({ size, variant, disabled });

  // styles.label contains color/opacity variants only (no typography) — shared
  // between SplitButtonIcon and SplitButtonLabel, same pattern as Button.
  return <Icon size={LEADING_ICON_SIZE[size]} style={[styles.label, style]} {...props} />;
}

// ---------------------------------------------------------------------------
// SplitButtonLabel
// ---------------------------------------------------------------------------

type SplitButtonLabelProps = TextProps;

/**
 * Text label sub-component for {@link SplitButtonLeading}. Must be used inside
 * a SplitButton (reads size/variant/disabled from context).
 *
 * Automatically selects typography variant and size based on the parent
 * SplitButton's size, and applies variant-appropriate coloring.
 *
 * @example
 * ```tsx
 * <SplitButtonLeading onPress={handleAction}>
 *   <SplitButtonLabel>Click me</SplitButtonLabel>
 * </SplitButtonLeading>
 * ```
 */
function SplitButtonLabel({ style, ...props }: SplitButtonLabelProps) {
  const { size, variant, disabled } = useSplitButton();
  styles.useVariants({ size, variant, disabled });

  // Typography variant/size are applied directly (not via unistyles variants)
  // to ensure they always match the M3 spec. Consumer-supplied variant/size
  // props inherited from TextProps are overridden by the spread order.
  return (
    <Text style={[styles.label, style]} variant={LABEL_TEXT_VARIANT[size]} size={LABEL_TEXT_SIZE[size]} {...props} />
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
//
// Layout model:
//
//   View (root)                          ← non-pressable row container with 2dp gap
//     ├─ Pressable (leadingRoot)         ← RNGH gesture tracking for the primary action
//     │    └─ ElevationContainer         ← shadow rendering (elevated variant only)
//     │        └─ ShapeContainer          ← animated borderRadius (asymmetric corners)
//     │            ├─ StateLayer          ← press/hover/focus tint + disabled overlay
//     │            ├─ SplitButtonIcon     ← auto-sized Material Symbol icon
//     │            └─ SplitButtonLabel    ← auto-typed Text label
//     │
//     └─ Pressable (trailingRoot)        ← RNGH gesture tracking for the menu trigger
//          └─ ElevationContainer         ← shadow rendering (elevated variant only)
//              └─ ShapeContainer          ← animated borderRadius (asymmetric corners)
//                  ├─ StateLayer          ← press/hover/focus tint + disabled overlay
//                  └─ Animated.View       ← chevron rotation animation
//                      └─ SplitButtonTrailingIcon ← keyboard_arrow_down chevron
//
// Key difference from Button/IconButton: the root is a plain View (not a Pressable),
// so each half manages its own independent gesture handling and interaction animations.
// The 2dp gap between halves is a fixed value per M3 spec (not size-dependent).
//
// Leading padding uses paddingStart/paddingEnd (not paddingHorizontal) because the
// start side (outer) typically needs more padding than the end side (inner, adjacent
// to the gap). Trailing uses symmetric paddingHorizontal since it only contains
// a centered icon.
//

const styles = StyleSheet.create((theme) => ({
  // Outer row container. gap:2 creates the M3-spec 2dp split seam between halves.
  // alignSelf:'flex-start' prevents the split button from stretching to fill width
  // in flex containers (matches Button behavior — intrinsic sizing by default).
  // Variant placeholders are required by unistyles — useVariants() must find all
  // variant keys in every style object that participates.
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    alignSelf: 'flex-start',

    variants: {
      size: {
        xsmall: {},
        small: {},
        medium: {},
        large: {},
        xlarge: {},
      },
      variant: {
        filled: {},
        elevated: {},
        tonal: {},
        outlined: {},
      },
      disabled: {
        true: {},
        false: {},
      },
    },
  },

  // -- Leading button --
  // Empty root — exists as the anchor for consumer `style` prop overrides.
  leadingRoot: {},
  // The visible leading container. Rendered inside ShapeContainer (which clips to
  // animated borderRadius). Uses paddingStart/paddingEnd rather than paddingHorizontal
  // because the outer edge (start) is the pill end and needs different visual weight
  // from the inner edge (end) adjacent to the split gap.
  leadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    // No dedicated split-button token for icon-label gap — inferred from Button spec
    // (md.comp.button.icon-label-space = 8dp across all sizes).
    gap: 8,

    variants: {
      size: {
        xsmall: { minHeight: 32, paddingStart: 12, paddingEnd: 10 },
        small: { minHeight: 40, paddingStart: 16, paddingEnd: 12 },
        medium: { minHeight: 56, paddingStart: 24, paddingEnd: 24 },
        large: { minHeight: 96, paddingStart: 48, paddingEnd: 48 },
        xlarge: { minHeight: 136, paddingStart: 64, paddingEnd: 64 },
      },
      variant: {
        filled: { backgroundColor: theme.scheme.primary },
        elevated: { backgroundColor: theme.scheme.surfaceContainerLow },
        tonal: { backgroundColor: theme.scheme.secondaryContainer },
        outlined: { borderWidth: 1, borderColor: theme.scheme.outlineVariant },
      },
      disabled: {
        // Clear variant-applied backgroundColor so the StateLayer disabled overlay
        // is the sole container fill (onSurface at 10% opacity).
        true: { backgroundColor: undefined },
        false: {},
      },
    },
    // Disabled outlined: retain the border at full outlineVariant opacity (per M3 spec).
    // Without this, the disabled:true variant above would leave no visual boundary.
    compoundVariants: [{ disabled: true, variant: 'outlined', styles: { borderColor: theme.scheme.outlineVariant } }],
  },

  // -- Trailing button --
  // Empty root — exists as the anchor for consumer `style` prop overrides.
  trailingRoot: {},
  // The visible trailing container. Uses symmetric paddingHorizontal since it only
  // contains a centered chevron icon. Padding values are slightly larger than half
  // the icon size to create the M3-spec proportions.
  trailingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',

    variants: {
      size: {
        xsmall: { minHeight: 32, paddingHorizontal: 13 },
        small: { minHeight: 40, paddingHorizontal: 13 },
        medium: { minHeight: 56, paddingHorizontal: 15 },
        large: { minHeight: 96, paddingHorizontal: 29 },
        xlarge: { minHeight: 136, paddingHorizontal: 43 },
      },
      variant: {
        filled: { backgroundColor: theme.scheme.primary },
        elevated: { backgroundColor: theme.scheme.surfaceContainerLow },
        tonal: { backgroundColor: theme.scheme.secondaryContainer },
        outlined: { borderWidth: 1, borderColor: theme.scheme.outlineVariant },
      },
      disabled: {
        true: { backgroundColor: undefined },
        false: {},
      },
    },
    compoundVariants: [{ disabled: true, variant: 'outlined', styles: { borderColor: theme.scheme.outlineVariant } }],
  },

  // Trailing chevron icon color — separate from `label` because the trailing icon
  // sits in a different sub-component (SplitButtonTrailingIcon) than the leading
  // content (SplitButtonIcon/SplitButtonLabel). Same color mapping though.
  trailingIcon: {
    variants: {
      variant: {
        filled: { color: theme.scheme.onPrimary },
        elevated: { color: theme.scheme.primary },
        tonal: { color: theme.scheme.onSecondaryContainer },
        outlined: { color: theme.scheme.onSurfaceVariant },
      },
      disabled: {
        true: { color: theme.scheme.onSurface, opacity: theme.state.disabledContent },
        false: {},
      },
    },
  },

  // Shared color/opacity style applied to both SplitButtonIcon and SplitButtonLabel.
  // Named "label" because the M3 spec calls the text+icon content layer the
  // "label layer". Contains only `color` and `opacity` — no typography props,
  // which is why it works safely for both Icon (TextStyle color) and Text.
  // Same pattern as Button's shared `label` style.
  label: {
    variants: {
      variant: {
        filled: { color: theme.scheme.onPrimary },
        elevated: { color: theme.scheme.primary },
        tonal: { color: theme.scheme.onSecondaryContainer },
        outlined: { color: theme.scheme.onSurfaceVariant },
      },
      disabled: {
        true: { color: theme.scheme.onSurface, opacity: theme.state.disabledContent },
        false: {},
      },
    },
  },
}));

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

SplitButton.displayName = 'SplitButton';
SplitButtonLeading.displayName = 'SplitButtonLeading';
SplitButtonTrailing.displayName = 'SplitButtonTrailing';
SplitButtonIcon.displayName = 'SplitButtonIcon';
SplitButtonLabel.displayName = 'SplitButtonLabel';

export type {
  SplitButtonIconProps,
  SplitButtonLabelProps,
  SplitButtonLeadingProps,
  SplitButtonProps,
  SplitButtonSize,
  SplitButtonTrailingIconProps,
  SplitButtonTrailingProps,
  SplitButtonVariant,
};
export {
  SplitButton,
  SplitButtonIcon,
  SplitButtonLabel,
  SplitButtonLeading,
  SplitButtonTrailing,
  SplitButtonTrailingIcon,
  useSplitButton,
};
