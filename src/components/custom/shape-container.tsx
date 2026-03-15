import React, { useMemo } from 'react';
import { I18nManager, type LayoutChangeEvent, type StyleProp, type ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useReducedMotion, useSharedValue, withSpring } from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
import { useAnimatedTheme } from 'react-native-unistyles/reanimated';

import type { Shape } from '@/theme';

import { useInteraction } from './pressable';

// ---------------------------------------------------------------------------
// Shape types
// ---------------------------------------------------------------------------

/** A key from `theme.shape` (e.g. 'full', 'medium', 'none'). */
type ShapeToken = keyof Shape;

/** A shape corner value — either a theme token or a raw pixel number. */
type ShapeCorner = ShapeToken | number;

/** Per-corner shape specification using logical directions (RTL-aware). */
type PerCornerShape = {
  topStart: ShapeCorner;
  topEnd: ShapeCorner;
  bottomStart: ShapeCorner;
  bottomEnd: ShapeCorner;
};

/**
 * Shape specification — either a uniform token applied to all corners,
 * or a per-corner object for asymmetric shapes.
 */
type ShapeSpec = ShapeToken | PerCornerShape;

/**
 * Target shapes for each interaction state.
 * Only the highest-priority active interaction is applied (drag > press > focus > hover).
 */
type InteractionShapes = {
  press?: ShapeSpec;
  hover?: ShapeSpec;
  focus?: ShapeSpec;
  drag?: ShapeSpec;
};

// ---------------------------------------------------------------------------
// ShapeContainerProps
// ---------------------------------------------------------------------------

type ShapeContainerProps = {
  /** Rest shape — applied when no interaction is active. */
  shape: ShapeSpec;
  /** Target shapes per interaction state. When omitted, corners stay at rest shape. */
  shapes?: InteractionShapes;
  /** Additional style (background, padding, layout, etc.). */
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Expands a ShapeSpec into a per-corner object. Tokens become uniform on all corners. */
function normalizeShape(shape: ShapeSpec): PerCornerShape {
  if (typeof shape === 'string') {
    return { topStart: shape, topEnd: shape, bottomStart: shape, bottomEnd: shape };
  }
  return shape;
}

// ---------------------------------------------------------------------------
// ShapeContainer component
// ---------------------------------------------------------------------------

/**
 * M3 Shape Container — clips children to animated border radii.
 *
 * Resolves shape tokens (e.g. 'full', 'medium') to pixel values from the theme
 * and animates between rest and interaction-specific shapes. Reads interaction
 * progress from the nearest {@link Pressable} via context.
 *
 * ## Shape resolution
 *
 * Shapes can be specified as:
 * - A **token** (`'full'`, `'medium'`, `'none'`, etc.) — resolved from `theme.shape`
 * - A **number** — used as-is (pixels)
 * - A **per-corner object** — `{ topStart, topEnd, bottomStart, bottomEnd }` with
 *   each corner as a token or number
 *
 * ## Interaction shape morphing
 *
 * When `shapes` is provided, the container interpolates from the rest shape to
 * the active interaction shape based on the progress values from Pressable context.
 * Priority follows M3: drag > press > focus > hover. Only the highest-priority
 * active interaction's shape is applied.
 *
 * ## Safety: maxRadius capping
 *
 * Border radius is capped at `containerHeight / 2` to prevent iOS CoreAnimation
 * artifacts when animating from large values (e.g. 9999 for 'full') to small ones.
 *
 * @example
 * ```tsx
 * // Simple — uniform shape token
 * <ShapeContainer shape="full">
 *   <Content />
 * </ShapeContainer>
 *
 * // Per-corner with press morph
 * <ShapeContainer
 *   shape={{ topStart: 'xlarge', topEnd: 'xlarge', bottomStart: 'medium', bottomEnd: 'medium' }}
 *   shapes={{ press: 'medium' }}
 * >
 *   <Content />
 * </ShapeContainer>
 * ```
 */
function ShapeContainer({ shape, shapes, style, children }: ShapeContainerProps) {
  const progress = useInteraction();
  const animatedTheme = useAnimatedTheme();
  const reduceMotion = useReducedMotion();
  const containerHeight = useSharedValue(0);

  // Mirror into shared values so the UI-thread worklet always reads current data
  const normalized = useMemo(() => normalizeShape(shape), [shape]);
  const restCornersShared = useSharedValue<PerCornerShape>(normalized);
  const prevRestCornersShared = useSharedValue<PerCornerShape>(normalized);
  const restProgress = useSharedValue(1);

  // Detect rest shape changes and animate the transition.
  // Uses useEffect to avoid writing .value during render (Reanimated strict mode).
  // When reduceMotion is active, snap directly without spring interpolation.
  const prevShapeRef = React.useRef(shape);
  React.useEffect(() => {
    if (prevShapeRef.current !== shape) {
      const prev = normalizeShape(prevShapeRef.current);
      const next = normalizeShape(shape);
      // Only animate if the resolved corners actually differ
      const changed =
        prev.topStart !== next.topStart ||
        prev.topEnd !== next.topEnd ||
        prev.bottomStart !== next.bottomStart ||
        prev.bottomEnd !== next.bottomEnd;
      if (changed) {
        if (reduceMotion) {
          // Snap: skip animation, jump directly to target
          restCornersShared.value = next;
          restProgress.value = 1;
        } else {
          prevRestCornersShared.value = restCornersShared.value;
          restCornersShared.value = next;
          restProgress.value = 0;
          const theme = UnistylesRuntime.getTheme();
          const scheme = theme.motion.scheme;
          const spring = theme.motion.springs[scheme].fastSpatial;
          restProgress.value = withSpring(1, spring);
        }
      } else {
        restCornersShared.value = next;
      }
      prevShapeRef.current = shape;
    }
  }, [shape, normalized, reduceMotion, restCornersShared, prevRestCornersShared, restProgress]);

  // Pre-normalize interaction shapes so the worklet doesn't call normalizeShape
  type NormalizedShapes = {
    drag: PerCornerShape | null;
    press: PerCornerShape | null;
    focus: PerCornerShape | null;
    hover: PerCornerShape | null;
  };
  const normalizedShapesShared = useSharedValue<NormalizedShapes | null>(null);
  // Use individual shape keys as deps instead of the `shapes` object, which is
  // typically an inline literal (new reference every render). This avoids
  // unconditional SharedValue writes on every render.
  const sDrag = shapes?.drag;
  const sPress = shapes?.press;
  const sFocus = shapes?.focus;
  const sHover = shapes?.hover;
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

  // Track RTL for the worklet — reanimated can't use logical border-radius
  // properties on web, so we map start/end → left/right manually.
  const isRTL = useSharedValue(I18nManager.isRTL);

  const handleLayout = React.useCallback((e: LayoutChangeEvent) => {
    containerHeight.value = e.nativeEvent.layout.height;
  }, [containerHeight]);

  const animatedStyle = useAnimatedStyle(() => {
    const t = animatedTheme.value;
    const resolve = (c: ShapeCorner): number => (typeof c === 'number' ? c : t.shape[c as ShapeToken]);
    // Cap at half the container height to prevent iOS CoreAnimation artifacts
    const maxRadius = containerHeight.value > 0 ? containerHeight.value / 2 : 100;

    const targetCorners = restCornersShared.value;
    const prevCorners = prevRestCornersShared.value;
    const rp = restProgress.value;

    // Interpolate between previous and target rest corners during shape transitions
    const lerpCorner = (prev: ShapeCorner, target: ShapeCorner): number => {
      const from = Math.min(resolve(prev), maxRadius);
      const to = Math.min(resolve(target), maxRadius);
      return from + (to - from) * rp;
    };

    const restTL = lerpCorner(prevCorners.topStart, targetCorners.topStart);
    const restTR = lerpCorner(prevCorners.topEnd, targetCorners.topEnd);
    const restBL = lerpCorner(prevCorners.bottomStart, targetCorners.bottomStart);
    const restBR = lerpCorner(prevCorners.bottomEnd, targetCorners.bottomEnd);

    const normalizedShapes = normalizedShapesShared.value;
    // No interaction shapes or no Pressable ancestor — static corners
    // Output physical properties — reanimated's web runtime silently drops
    // logical properties (borderTopStartRadius) despite listing them in config.
    // Map start/end → left/right manually, swapping for RTL.
    const rtl = isRTL.value;
    if (!normalizedShapes || !progress) {
      return {
        borderTopLeftRadius: rtl ? restTR : restTL,
        borderTopRightRadius: rtl ? restTL : restTR,
        borderBottomLeftRadius: rtl ? restBR : restBL,
        borderBottomRightRadius: rtl ? restBL : restBR,
      };
    }

    // Cache all shared value reads upfront to avoid redundant .value accesses
    // (each .value crosses the Hermes JNI boundary on the UI thread)
    const spHover = progress.spatial.hover.value;
    const spFocus = progress.spatial.focus.value;
    const spPress = progress.spatial.press.value;
    const spDrag = progress.spatial.drag.value;
    const efFocus = progress.effects.focus.value;
    const efPress = progress.effects.press.value;
    const efDrag = progress.effects.drag.value;

    // Pre-resolve interaction corner targets once (avoids redundant resolve() +
    // Math.min calls when multiple interactions are active simultaneously).
    // Intentionally inlined rather than extracted to a helper — worklet constraints.
    const hc = normalizedShapes.hover;
    const fc = normalizedShapes.focus;
    const pc = normalizedShapes.press;
    const dc = normalizedShapes.drag;
    const hTL = hc ? Math.min(resolve(hc.topStart), maxRadius) : 0;
    const hTR = hc ? Math.min(resolve(hc.topEnd), maxRadius) : 0;
    const hBL = hc ? Math.min(resolve(hc.bottomStart), maxRadius) : 0;
    const hBR = hc ? Math.min(resolve(hc.bottomEnd), maxRadius) : 0;
    const fTL = fc ? Math.min(resolve(fc.topStart), maxRadius) : 0;
    const fTR = fc ? Math.min(resolve(fc.topEnd), maxRadius) : 0;
    const fBL = fc ? Math.min(resolve(fc.bottomStart), maxRadius) : 0;
    const fBR = fc ? Math.min(resolve(fc.bottomEnd), maxRadius) : 0;
    const pTL = pc ? Math.min(resolve(pc.topStart), maxRadius) : 0;
    const pTR = pc ? Math.min(resolve(pc.topEnd), maxRadius) : 0;
    const pBL = pc ? Math.min(resolve(pc.bottomStart), maxRadius) : 0;
    const pBR = pc ? Math.min(resolve(pc.bottomEnd), maxRadius) : 0;
    const dTL = dc ? Math.min(resolve(dc.topStart), maxRadius) : 0;
    const dTR = dc ? Math.min(resolve(dc.topEnd), maxRadius) : 0;
    const dBL = dc ? Math.min(resolve(dc.bottomStart), maxRadius) : 0;
    const dBR = dc ? Math.min(resolve(dc.bottomEnd), maxRadius) : 0;

    // Additive blending — each interaction shifts corners from rest toward its
    // target proportionally to its progress. Applied in M3 priority order
    // (hover → focus → press → drag) so higher-priority states layer on top.
    let tl = restTL;
    let tr = restTR;
    let bl = restBL;
    let br = restBR;

    if (hc && spHover > 0) {
      tl += (hTL - tl) * spHover;
      tr += (hTR - tr) * spHover;
      bl += (hBL - bl) * spHover;
      br += (hBR - br) * spHover;
    }
    if (fc && spFocus > 0) {
      tl += (fTL - tl) * spFocus;
      tr += (fTR - tr) * spFocus;
      bl += (fBL - bl) * spFocus;
      br += (fBR - br) * spFocus;
    }
    if (pc && spPress > 0) {
      tl += (pTL - tl) * spPress;
      tr += (pTR - tr) * spPress;
      bl += (pBL - bl) * spPress;
      br += (pBR - br) * spPress;
    }
    if (dc && spDrag > 0) {
      tl += (dTL - tl) * spDrag;
      tr += (dTR - tr) * spDrag;
      bl += (dBL - bl) * spDrag;
      br += (dBR - br) * spDrag;
    }

    // M3 focus ring: secondary color, 3dp thick, 2dp offset
    // Only show for keyboard focus — suppress when press or drag is active (higher priority)
    const focused = efFocus > 0.5 && efPress < 0.1 && efDrag < 0.1;
    const outlineWidth = focused ? 3 : 0;
    const outlineOffset = focused ? 2 : 0;

    return {
      borderTopLeftRadius: rtl ? tr : tl,
      borderTopRightRadius: rtl ? tl : tr,
      borderBottomLeftRadius: rtl ? br : bl,
      borderBottomRightRadius: rtl ? bl : br,
      outlineWidth,
      outlineOffset,
      outlineColor: t.scheme.secondary,
      outlineStyle: 'solid' as const,
    };
  });

  return (
    <Animated.View onLayout={handleLayout} style={[styles.container, style, animatedStyle]}>
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});

export type { InteractionShapes, PerCornerShape, ShapeContainerProps, ShapeCorner, ShapeSpec, ShapeToken };
export { normalizeShape, ShapeContainer };
