import React, { useLayoutEffect, useMemo } from 'react';
import { type LayoutChangeEvent, type StyleProp, type ViewStyle } from 'react-native';
import Animated, {
  type AnimatedStyle,
  type SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
import { useAnimatedTheme } from 'react-native-unistyles/reanimated';

import type { ElevationLevel, Scheme, Shape } from '@/theme';

import { type MotionSpeed, useMotionConfig } from '../../hooks';
import { useInteraction } from './pressable';

// =============================================================================
// Shape types
// =============================================================================

/** A key from `theme.shape` (e.g. `'full'`, `'medium'`, `'none'`). */
type ShapeToken = keyof Shape;

/**
 * A single corner value — either a theme token resolved at animation time,
 * or a raw pixel number used as-is.
 */
type ShapeCorner = ShapeToken | number;

/**
 * Per-corner shape specification using logical (RTL-aware) directions.
 *
 * Logical → physical mapping is handled in the worklet:
 * - LTR: `topStart` → `topLeft`, `topEnd` → `topRight`
 * - RTL: `topStart` → `topRight`, `topEnd` → `topLeft`
 */
type PerCornerShape = {
  topStart: ShapeCorner;
  topEnd: ShapeCorner;
  bottomStart: ShapeCorner;
  bottomEnd: ShapeCorner;
};

/**
 * Shape specification — either a uniform token applied to all four corners,
 * or a per-corner object for asymmetric shapes (e.g., SplitButton segments).
 *
 * @example
 * ```tsx
 * // Uniform — all corners get the same radius
 * shape="full"        // pill (9999px, capped at height/2)
 * shape="medium"      // 12px corners
 * shape={16}          // 16px corners
 *
 * // Asymmetric — per-corner control
 * shape={{ topStart: 'xlarge', topEnd: 'xlarge', bottomStart: 'small', bottomEnd: 'small' }}
 * ```
 */
type ShapeSpec = ShapeToken | PerCornerShape;

// =============================================================================
// Interaction types
// =============================================================================

/**
 * Target shapes for each interaction state.
 * During interaction, corners interpolate from rest toward the target
 * proportionally to the spatial progress (overshoot-allowed springs).
 */
type InteractionShapes = {
  press?: ShapeSpec;
  hover?: ShapeSpec;
  focus?: ShapeSpec;
  drag?: ShapeSpec;
};

/**
 * Target elevation levels for each interaction state.
 * During interaction, elevation interpolates from rest toward the target
 * proportionally to the effects progress (clamped springs, no overshoot).
 */
type InteractionElevations = {
  press?: ElevationLevel;
  hover?: ElevationLevel;
  focus?: ElevationLevel;
  drag?: ElevationLevel;
};

/**
 * Grouped interaction targets for shape morphing and elevation changes.
 *
 * Both shape and elevation blending follow M3 priority order
 * (hover → focus → press → drag), with higher-priority interactions
 * layering on top additively.
 *
 * @example
 * ```tsx
 * // Shape morph on press, elevation lift on hover
 * interactions={{
 *   shapes: { press: 'small' },
 *   elevations: { hover: 4 },
 * }}
 *
 * // Shape-only (no elevation changes)
 * interactions={{ shapes: { press: 'medium', hover: 'large' } }}
 *
 * // Elevation-only (no shape changes)
 * interactions={{ elevations: { hover: 2, press: 1 } }}
 * ```
 */
type SurfaceInteractions = {
  /** Target shapes per interaction state (uses spatial / overshoot springs). */
  shapes?: InteractionShapes;
  /** Target elevations per interaction state (uses effects / clamped springs). */
  elevations?: InteractionElevations;
};

// =============================================================================
// Focus ring
// =============================================================================

/**
 * Focus ring customization.
 *
 * The focus ring renders as a CSS `outline` — visible on web for keyboard
 * navigation, invisible on native (where the platform accessibility system
 * provides its own focus indicators).
 *
 * The ring is suppressed when press or drag is active (higher-priority
 * interactions take precedence per M3 spec).
 */
type FocusRing = {
  /** Theme scheme color key for the focus ring. @default `'secondary'` */
  color?: keyof Scheme;
  /** Ring width in dp. @default `3` */
  width?: number;
  /** Ring offset from the container edge in dp. @default `2` */
  offset?: number;
};

// =============================================================================
// SurfaceProps
// =============================================================================

type SurfaceProps = {
  /**
   * Rest shape — applied when no interaction is active.
   *
   * Accepts a theme token (`'full'`, `'medium'`), a raw pixel number, or a
   * per-corner object for asymmetric shapes. When the prop changes at runtime,
   * the container animates between the old and new rest shape using the
   * selected `speed` tier's spatial spring.
   */
  shape: ShapeSpec;

  /**
   * Rest elevation level (0–5). Controls the shadow intensity.
   *
   * When provided, the outer view renders platform shadow properties
   * (iOS: shadowOffset/shadowOpacity/shadowRadius, Android: elevation).
   * Fractional values during animation are interpolated between adjacent
   * discrete M3 levels.
   *
   * Accepts a static number or a `SharedValue<number>` for externally
   * driven animation (e.g., scroll-linked elevation changes).
   */
  elevation?: ElevationLevel | SharedValue<number>;

  /**
   * Interaction targets for shape morphing and elevation changes.
   * Reads progress from the nearest {@link Pressable} via context.
   *
   * @see {@link SurfaceInteractions}
   */
  interactions?: SurfaceInteractions;

  /**
   * Focus ring appearance. Pass `false` to disable the focus ring entirely.
   *
   * Defaults: `{ color: 'secondary', width: 3, offset: 2 }` (M3 spec).
   *
   * @see {@link FocusRing}
   */
  focus?: FocusRing | false;

  /**
   * Motion speed tier for shape transition springs.
   *
   * - `'fast'` — small selection controls (switches, checkboxes, FABs)
   * - `'default'` — medium-coverage components (Extended FABs, cards)
   * - `'slow'` — large-coverage components (bottom sheets, dialogs)
   *
   * @default `'fast'`
   */
  speed?: MotionSpeed;

  /**
   * Theme scheme color key for the shadow.
   * Almost always `'shadow'` — override only for non-standard shadow tinting.
   *
   * @default `'shadow'`
   */
  shadowColor?: keyof Scheme;

  /**
   * Style applied to the inner (content) view.
   *
   * This is where dimensions, background color, padding, and layout go.
   * Accepts static styles, unistyles, and Reanimated animated styles.
   *
   * Note: `overflow: 'hidden'` is applied automatically by Surface for
   * content clipping — do not set it in consumer styles.
   */
  style?: StyleProp<AnimatedStyle<ViewStyle>>;

  children: React.ReactNode;
};

// =============================================================================
// Helpers
// =============================================================================

/**
 * Expands a `ShapeSpec` into a per-corner object.
 * Token strings become uniform on all four corners.
 *
 * Exported for components that need to pre-expand shapes before passing
 * to SharedValues (e.g., ButtonGroup's per-segment corner computation).
 */
function normalizeShape(shape: ShapeSpec): PerCornerShape {
  if (typeof shape === 'string') {
    return { topStart: shape, topEnd: shape, bottomStart: shape, bottomEnd: shape };
  }
  return shape;
}

// =============================================================================
// Surface component
// =============================================================================

/**
 * **M3 Surface** — the foundational container building block for all M3
 * components in this library.
 *
 * Surface unifies three M3 container concerns into a single composable
 * component:
 *
 * 1. **Shape** — animated borderRadius with interaction-driven morphing
 * 2. **Elevation** — animated platform shadows that follow the rounded shape
 * 3. **Focus ring** — customizable outline for keyboard navigation (web)
 *
 * It reads interaction progress from the nearest {@link Pressable} via
 * React Context — no prop drilling required.
 *
 * ---
 *
 * ## Two-view architecture
 *
 * Surface always renders two `Animated.View`s:
 *
 * ```
 * Animated.View (outer)   ← borderRadius + shadow (no overflow clip)
 *   └─ Animated.View (inner) ← borderRadius + overflow:hidden + focus ring + style
 *        └─ children
 * ```
 *
 * **Why two views?** iOS cannot render shadow AND clip content on the same
 * `CALayer` — `overflow: 'hidden'` clips the shadow. The outer view casts
 * the shadow with matching borderRadius (so shadows follow the rounded
 * shape), while the inner view clips children with `overflow: 'hidden'`.
 *
 * Both views share the same animated corner radii via a `useDerivedValue`,
 * so the heavy corner computation (token resolution, interaction blending,
 * rest-shape lerping) runs **once per frame**, not twice.
 *
 * ---
 *
 * ## Shape resolution
 *
 * Shapes can be:
 * - A **token** (`'full'`, `'medium'`, `'none'`) — resolved from `theme.shape`
 * - A **number** — used as-is (pixels)
 * - A **per-corner object** — `{ topStart, topEnd, bottomStart, bottomEnd }`
 *
 * All corner values are capped at `containerHeight / 2` to prevent iOS
 * CoreAnimation artifacts when animating from large values (e.g., 9999
 * for `'full'`) to small ones.
 *
 * ---
 *
 * ## Interaction blending
 *
 * Shape and elevation blending are both **additive** in M3 priority order:
 *
 * ```
 * hover → focus → press → drag  (lowest → highest priority)
 * ```
 *
 * Each active interaction shifts the value from its current position toward
 * its target proportionally to its progress. Higher-priority interactions
 * layer on top.
 *
 * Shape morphing uses **spatial** progress (overshoot-allowed springs).
 * Elevation blending uses **effects** progress (clamped springs).
 *
 * ---
 *
 * @example
 * ```tsx
 * // Simple — shape only (chips, cards)
 * <Surface shape="medium" style={styles.card}>
 *   <Content />
 * </Surface>
 *
 * // Elevated with hover lift (FAB)
 * <Surface
 *   shape="large"
 *   elevation={3}
 *   interactions={{ elevations: { hover: 4 } }}
 *   style={styles.fab}
 * >
 *   <Content />
 * </Surface>
 *
 * // Shape morph on press + elevation (Button)
 * <Surface
 *   shape="full"
 *   elevation={0}
 *   interactions={{
 *     shapes: { press: 'small' },
 *     elevations: { hover: 1 },
 *   }}
 *   style={styles.button}
 * >
 *   <Content />
 * </Surface>
 *
 * // Custom focus ring color
 * <Surface shape="medium" focus={{ color: 'primary', width: 2 }}>
 *   <Content />
 * </Surface>
 *
 * // Animated style passthrough
 * const bgStyle = useAnimatedStyle(() => ({
 *   backgroundColor: interpolateColor(progress.value, [0, 1], [colorA, colorB]),
 * }));
 * <Surface shape="full" style={bgStyle}>
 *   <Content />
 * </Surface>
 * ```
 */
function Surface({
  shape,
  elevation,
  interactions,
  focus: focusProp,
  speed = 'fast',
  shadowColor = 'shadow',
  style,
  children,
}: SurfaceProps) {
  const progress = useInteraction();
  const animatedTheme = useAnimatedTheme();
  const motion = useMotionConfig(speed);
  const containerHeight = useSharedValue(0);

  // ---------------------------------------------------------------------------
  // Focus ring defaults
  // ---------------------------------------------------------------------------
  // Resolved eagerly so the worklet captures stable primitives (not objects).
  const focusDisabled = focusProp === false;
  const focusColor: keyof Scheme = (focusProp !== false && focusProp?.color) || 'secondary';
  const focusWidth: number = (focusProp !== false && focusProp?.width) || 3;
  const focusOffset: number = (focusProp !== false && focusProp?.offset) || 2;

  // ---------------------------------------------------------------------------
  // Unpack interactions into stable references
  // ---------------------------------------------------------------------------
  // Destructured once so the worklets close over stable values, not the
  // `interactions` object (which is typically an inline literal).
  const interactionShapes = interactions?.shapes;
  const interactionElevations = interactions?.elevations;

  // ---------------------------------------------------------------------------
  // Rest shape tracking
  // ---------------------------------------------------------------------------
  // The current rest shape is mirrored into SharedValues so the UI-thread
  // worklet can read them without crossing the JS bridge.
  const normalized = useMemo(() => normalizeShape(shape), [shape]);
  const restCornersShared = useSharedValue<PerCornerShape>(normalized);
  const prevRestCornersShared = useSharedValue<PerCornerShape>(normalized);
  const restProgress = useSharedValue(1); // 0 = showing prev shape, 1 = showing current

  // Animate between rest shapes when the `shape` prop changes at runtime.
  // Uses useEffect (not render-time writes) for Reanimated strict mode.
  // When reduced motion is active, snaps directly without spring.
  const prevShapeRef = React.useRef(shape);
  React.useEffect(() => {
    if (prevShapeRef.current !== shape) {
      const prev = normalizeShape(prevShapeRef.current);
      const next = normalizeShape(shape);
      const changed =
        prev.topStart !== next.topStart ||
        prev.topEnd !== next.topEnd ||
        prev.bottomStart !== next.bottomStart ||
        prev.bottomEnd !== next.bottomEnd;
      if (changed) {
        if (motion.reducedMotion) {
          restCornersShared.value = next;
          restProgress.value = 1;
        } else {
          // Capture current → animate toward new
          prevRestCornersShared.value = restCornersShared.value;
          restCornersShared.value = next;
          restProgress.value = 0;
          restProgress.value = withSpring(1, motion.spatial.value);
        }
      } else {
        restCornersShared.value = next;
      }
      prevShapeRef.current = shape;
    }
    // motion.spatial is a stable SharedValue identity — .value is read at call
    // time inside the effect. Excluded from deps intentionally.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shape, normalized, motion.reducedMotion, restCornersShared, prevRestCornersShared, restProgress]);

  // ---------------------------------------------------------------------------
  // Interaction shape normalization
  // ---------------------------------------------------------------------------
  // Pre-normalize interaction shapes on the JS thread so the UI-thread
  // worklet doesn't call normalizeShape (which allocates objects).
  // Individual keys are used as deps (not the `interactionShapes` object)
  // to avoid unconditional SharedValue writes from inline literals.
  type NormalizedShapes = {
    drag: PerCornerShape | null;
    press: PerCornerShape | null;
    focus: PerCornerShape | null;
    hover: PerCornerShape | null;
  };
  const normalizedShapesShared = useSharedValue<NormalizedShapes | null>(null);
  const sDrag = interactionShapes?.drag;
  const sPress = interactionShapes?.press;
  const sFocus = interactionShapes?.focus;
  const sHover = interactionShapes?.hover;
  React.useEffect(() => {
    normalizedShapesShared.value =
      sDrag || sPress || sFocus || sHover
        ? {
            drag: sDrag ? normalizeShape(sDrag) : null,
            press: sPress ? normalizeShape(sPress) : null,
            focus: sFocus ? normalizeShape(sFocus) : null,
            hover: sHover ? normalizeShape(sHover) : null,
          }
        : null;
  }, [normalizedShapesShared, sDrag, sPress, sFocus, sHover]);

  // RTL tracking — Reanimated's web runtime silently drops logical
  // border-radius properties, so we map start/end → left/right manually.
  // Uses UnistylesRuntime.rtl for consistency with the library's unistyles usage.
  const isRTL = useSharedValue(UnistylesRuntime.rtl);

  // ---------------------------------------------------------------------------
  // Elevation level normalization
  // ---------------------------------------------------------------------------
  // Normalize to always be a SharedValue so the worklet has one code path.
  // Static numbers are mirrored via useLayoutEffect (not render-time writes)
  // to comply with Reanimated strict mode.
  const hasElevation = elevation !== undefined;
  const isAnimatedLevel = hasElevation && typeof elevation !== 'number';
  const fallbackLevel = useSharedValue(isAnimatedLevel ? 0 : typeof elevation === 'number' ? elevation : 0);
  useLayoutEffect(() => {
    if (hasElevation && !isAnimatedLevel && fallbackLevel.value !== elevation) {
      fallbackLevel.value = elevation as ElevationLevel;
    }
  }, [hasElevation, isAnimatedLevel, elevation, fallbackLevel]);
  const effectiveLevel = isAnimatedLevel ? (elevation as SharedValue<number>) : fallbackLevel;

  // ---------------------------------------------------------------------------
  // Layout tracking for maxRadius capping
  // ---------------------------------------------------------------------------
  const handleLayout = React.useCallback((e: LayoutChangeEvent) => {
    containerHeight.value = e.nativeEvent.layout.height;
  }, [containerHeight]);

  // ===========================================================================
  // Corner computation — shared between both views (runs once per frame)
  // ===========================================================================
  // useDerivedValue computes the final physical border radii so both the
  // elevation (outer) and shape (inner) animated styles read from it
  // without duplicating the blending math.
  const corners = useDerivedValue(() => {
    const t = animatedTheme.value;
    const resolve = (c: ShapeCorner): number => (typeof c === 'number' ? c : t.shape[c as ShapeToken]);

    // Cap at half the container height to prevent iOS CoreAnimation artifacts
    // when animating from large values (e.g., 9999 for 'full') to small ones.
    // Values above height/2 are visually identical (full pill).
    const maxRadius = containerHeight.value > 0 ? containerHeight.value / 2 : 100;

    // --- Rest shape lerp (prev → current during shape prop transitions) ------
    const targetCorners = restCornersShared.value;
    const prevCorners = prevRestCornersShared.value;
    const rp = restProgress.value;

    const lerpCorner = (prev: ShapeCorner, target: ShapeCorner): number => {
      const from = Math.min(resolve(prev), maxRadius);
      const to = Math.min(resolve(target), maxRadius);
      return from + (to - from) * rp;
    };

    let tl = lerpCorner(prevCorners.topStart, targetCorners.topStart);
    let tr = lerpCorner(prevCorners.topEnd, targetCorners.topEnd);
    let bl = lerpCorner(prevCorners.bottomStart, targetCorners.bottomStart);
    let br = lerpCorner(prevCorners.bottomEnd, targetCorners.bottomEnd);

    // --- Interaction shape blending (additive, M3 priority order) ------------
    const normalizedShapes = normalizedShapesShared.value;

    if (normalizedShapes && progress) {
      const spHover = progress.spatial.hover.value;
      const spFocus = progress.spatial.focus.value;
      const spPress = progress.spatial.press.value;
      const spDrag = progress.spatial.drag.value;

      // Fast path — skip blending entirely when no interaction is active.
      // At 120 Hz this saves 16 resolve+min calls and 4 blending passes per frame.
      if (spHover !== 0 || spFocus !== 0 || spPress !== 0 || spDrag !== 0) {
        const hc = normalizedShapes.hover;
        const fc = normalizedShapes.focus;
        const pc = normalizedShapes.press;
        const dc = normalizedShapes.drag;

        // Each interaction shifts corners from current toward target × progress.
        // Applied in ascending priority order so higher-priority layers on top.
        if (hc && spHover > 0) {
          tl += (Math.min(resolve(hc.topStart), maxRadius) - tl) * spHover;
          tr += (Math.min(resolve(hc.topEnd), maxRadius) - tr) * spHover;
          bl += (Math.min(resolve(hc.bottomStart), maxRadius) - bl) * spHover;
          br += (Math.min(resolve(hc.bottomEnd), maxRadius) - br) * spHover;
        }
        if (fc && spFocus > 0) {
          tl += (Math.min(resolve(fc.topStart), maxRadius) - tl) * spFocus;
          tr += (Math.min(resolve(fc.topEnd), maxRadius) - tr) * spFocus;
          bl += (Math.min(resolve(fc.bottomStart), maxRadius) - bl) * spFocus;
          br += (Math.min(resolve(fc.bottomEnd), maxRadius) - br) * spFocus;
        }
        if (pc && spPress > 0) {
          tl += (Math.min(resolve(pc.topStart), maxRadius) - tl) * spPress;
          tr += (Math.min(resolve(pc.topEnd), maxRadius) - tr) * spPress;
          bl += (Math.min(resolve(pc.bottomStart), maxRadius) - bl) * spPress;
          br += (Math.min(resolve(pc.bottomEnd), maxRadius) - br) * spPress;
        }
        if (dc && spDrag > 0) {
          tl += (Math.min(resolve(dc.topStart), maxRadius) - tl) * spDrag;
          tr += (Math.min(resolve(dc.topEnd), maxRadius) - tr) * spDrag;
          bl += (Math.min(resolve(dc.bottomStart), maxRadius) - bl) * spDrag;
          br += (Math.min(resolve(dc.bottomEnd), maxRadius) - br) * spDrag;
        }
      }
    }

    // Map logical (start/end) → physical (left/right), swapping for RTL.
    const rtl = isRTL.value;
    return { tl: rtl ? tr : tl, tr: rtl ? tl : tr, bl: rtl ? br : bl, br: rtl ? bl : br };
  });

  // ===========================================================================
  // Outer view: elevation shadow + borderRadius (no overflow clip)
  // ===========================================================================
  // This view casts the platform shadow. It must NOT have overflow:hidden,
  // because iOS clips shadows to the view bounds. The borderRadius ensures
  // the shadow follows the rounded shape instead of casting from a rectangle.
  const elevationAnimatedStyle = useAnimatedStyle(() => {
    const c = corners.value;
    const t = animatedTheme.value;

    // Default to no shadow — these values are no-ops when hasElevation is false.
    let eShadowColor: string | undefined;
    let eShadowOffsetH = 0;
    let eShadowOpacity = 0;
    let eShadowRadius = 0;
    let eElevation = 0;

    if (hasElevation) {
      let l = Math.max(0, Math.min(5, effectiveLevel.value));

      // Additive blending from interaction effects progress (clamped, no overshoot).
      if (interactionElevations && progress) {
        const e = progress.effects;
        if (interactionElevations.hover !== undefined && e.hover.value > 0) {
          l += (interactionElevations.hover - l) * e.hover.value;
        }
        if (interactionElevations.focus !== undefined && e.focus.value > 0) {
          l += (interactionElevations.focus - l) * e.focus.value;
        }
        if (interactionElevations.press !== undefined && e.press.value > 0) {
          l += (interactionElevations.press - l) * e.press.value;
        }
        if (interactionElevations.drag !== undefined && e.drag.value > 0) {
          l += (interactionElevations.drag - l) * e.drag.value;
        }
        l = Math.max(0, Math.min(5, l));
      }

      // Linear fractional interpolation between adjacent discrete M3 levels.
      // e.g., l=2.5 → lo=2, hi=3, frac=0.5 → blend level 2 and 3 properties.
      const lo = Math.floor(l) as ElevationLevel;
      const hi = Math.min(5, lo + 1) as ElevationLevel;
      const frac = l - lo;
      const loStyle = t.elevation[lo];
      const hiStyle = t.elevation[hi];

      eShadowColor = t.scheme[shadowColor];
      eShadowOffsetH = loStyle.shadowOffset.height + (hiStyle.shadowOffset.height - loStyle.shadowOffset.height) * frac;
      eShadowOpacity = loStyle.shadowOpacity + (hiStyle.shadowOpacity - loStyle.shadowOpacity) * frac;
      eShadowRadius = loStyle.shadowRadius + (hiStyle.shadowRadius - loStyle.shadowRadius) * frac;
      // Android doesn't support fractional elevation — round to nearest integer.
      eElevation = Math.round(loStyle.elevation + (hiStyle.elevation - loStyle.elevation) * frac);
    }

    return {
      borderTopLeftRadius: c.tl,
      borderTopRightRadius: c.tr,
      borderBottomLeftRadius: c.bl,
      borderBottomRightRadius: c.br,
      shadowColor: eShadowColor,
      shadowOffset: { width: 0, height: eShadowOffsetH },
      shadowOpacity: eShadowOpacity,
      shadowRadius: eShadowRadius,
      elevation: eElevation,
    };
  });

  // ===========================================================================
  // Inner view: borderRadius + overflow:hidden + focus ring
  // ===========================================================================
  // This view clips children to the rounded shape and renders the M3 focus
  // ring as a CSS outline (web only — native uses platform focus indicators).
  // Consumer `style` is applied here (dimensions, background, padding, etc.).
  const shapeAnimatedStyle = useAnimatedStyle(() => {
    const c = corners.value;
    const t = animatedTheme.value;

    // Focus ring: visible when keyboard focus is active and no higher-priority
    // interaction (press, drag) is suppressing it.
    let focused = false;
    if (!focusDisabled && progress) {
      focused =
        progress.effects.focus.value > 0.5 && progress.effects.press.value < 0.1 && progress.effects.drag.value < 0.1;
    }

    return {
      borderTopLeftRadius: c.tl,
      borderTopRightRadius: c.tr,
      borderBottomLeftRadius: c.bl,
      borderBottomRightRadius: c.br,
      outlineWidth: focused ? focusWidth : 0,
      outlineOffset: focused ? focusOffset : 0,
      outlineColor: focused ? t.scheme[focusColor] : undefined,
      outlineStyle: focused ? ('solid' as const) : undefined,
    };
  });

  // ===========================================================================
  // Render
  // ===========================================================================
  // Outer: shadow-casting view (borderRadius, no clip)
  // Inner: content-clipping view (borderRadius, overflow:hidden, style, focus ring)
  return (
    <Animated.View style={elevationAnimatedStyle}>
      <Animated.View onLayout={handleLayout} style={[styles.inner, style, shapeAnimatedStyle]}>
        {children}
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  inner: {
    overflow: 'hidden',
  },
});

// =============================================================================
// Exports
// =============================================================================

export type {
  FocusRing,
  InteractionElevations,
  InteractionShapes,
  PerCornerShape,
  ShapeCorner,
  ShapeSpec,
  ShapeToken,
  SurfaceInteractions,
  SurfaceProps,
};
export { normalizeShape, Surface };
