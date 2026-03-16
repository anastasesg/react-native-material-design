import React, { useLayoutEffect } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import Animated, { type SharedValue, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { useAnimatedTheme } from 'react-native-unistyles/reanimated';

import type { ElevationLevel, Scheme } from '@/theme';

import { useInteraction } from './pressable';

/**
 * Target elevation levels for each interaction state.
 * Mirrors {@link InteractionShapes} from ShapeContainer.
 */
type InteractionElevations = {
  press?: ElevationLevel;
  hover?: ElevationLevel;
  focus?: ElevationLevel;
  drag?: ElevationLevel;
};

type ElevationContainerProps = {
  /**
   * Rest elevation level (0–5). Accepts a static number or a SharedValue for
   * animated transitions between levels.
   *
   * Fractional values are interpolated between adjacent levels for smooth
   * animation (e.g. 2.5 blends level 2 and level 3 shadow properties).
   */
  level: ElevationLevel | SharedValue<number>;
  /**
   * Target elevations per interaction state. When provided, reads interaction
   * progress from the nearest Pressable and blends from `level` toward the
   * active interaction's target. Priority: drag > press > focus > hover.
   */
  elevations?: InteractionElevations;
  /**
   * Theme scheme color key for the shadow.
   * @default 'shadow'
   */
  shadowColor?: keyof Scheme;
  /** Additional style applied to the container. */
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

/**
 * M3 Elevation Container — applies animated shadow styles to its children.
 *
 * Reads elevation configs from the theme and interpolates shadow properties
 * (offset, opacity, radius) between discrete M3 levels. Supports both static
 * levels and animated SharedValues for smooth elevation transitions (e.g.
 * hover lift: level 1 → level 2).
 *
 * This is an internal building block — consumers control elevation via the
 * `elevation` prop on public components (Button, Card, FAB, etc.).
 *
 * @example
 * ```tsx
 * // Static level inside a component implementation
 * <ElevationContainer level={1}>
 *   <ShapeContainer shape="full">...</ShapeContainer>
 * </ElevationContainer>
 *
 * // Animated level driven by a SharedValue
 * <ElevationContainer level={elevationSV}>
 *   <ShapeContainer shape="medium">...</ShapeContainer>
 * </ElevationContainer>
 * ```
 */
function ElevationContainer({ level, elevations, shadowColor = 'shadow', style, children }: ElevationContainerProps) {
  const animatedTheme = useAnimatedTheme();
  const progress = useInteraction();

  // Normalize to always be a SharedValue so the worklet has a single code path.
  // For static numbers, mirror into a fallback SharedValue updated via useLayoutEffect
  // to comply with Reanimated strict mode (no .value writes during render phase).
  const isAnimated = typeof level !== 'number';
  const fallbackLevel = useSharedValue(isAnimated ? 0 : level);
  useLayoutEffect(() => {
    if (!isAnimated && fallbackLevel.value !== level) fallbackLevel.value = level as ElevationLevel;
  }, [isAnimated, level, fallbackLevel]);
  const effectiveLevel = isAnimated ? level : fallbackLevel;

  const animatedStyle = useAnimatedStyle(() => {
    const t = animatedTheme.value;
    let l = Math.max(0, Math.min(5, effectiveLevel.value));

    // Additive blending from interaction progress (effects springs — no overshoot)
    if (elevations && progress) {
      const e = progress.effects;
      if (elevations.hover !== undefined && e.hover.value > 0) {
        l += (elevations.hover - l) * e.hover.value;
      }
      if (elevations.focus !== undefined && e.focus.value > 0) {
        l += (elevations.focus - l) * e.focus.value;
      }
      if (elevations.press !== undefined && e.press.value > 0) {
        l += (elevations.press - l) * e.press.value;
      }
      if (elevations.drag !== undefined && e.drag.value > 0) {
        l += (elevations.drag - l) * e.drag.value;
      }
      l = Math.max(0, Math.min(5, l));
    }

    const lo = Math.floor(l) as ElevationLevel;
    const hi = Math.min(5, lo + 1) as ElevationLevel;
    const frac = l - lo;

    const loStyle = t.elevation[lo];
    const hiStyle = t.elevation[hi];

    return {
      shadowColor: t.scheme[shadowColor],
      shadowOffset: {
        width: 0,
        height: loStyle.shadowOffset.height + (hiStyle.shadowOffset.height - loStyle.shadowOffset.height) * frac,
      },
      shadowOpacity: loStyle.shadowOpacity + (hiStyle.shadowOpacity - loStyle.shadowOpacity) * frac,
      shadowRadius: loStyle.shadowRadius + (hiStyle.shadowRadius - loStyle.shadowRadius) * frac,
      elevation: Math.round(loStyle.elevation + (hiStyle.elevation - loStyle.elevation) * frac),
    };
  });

  return <Animated.View style={[style, animatedStyle]}>{children}</Animated.View>;
}

ElevationContainer.displayName = 'ElevationContainer';

export type { ElevationContainerProps, InteractionElevations };
export { ElevationContainer };
