import React from 'react';
import type { LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import { useAnimatedTheme } from 'react-native-unistyles/reanimated';

import type { Shape } from '@/theme/shape';

import type { InteractionProgress } from '../../hooks';

type ShapeToken = keyof Shape;
type ShapeCorner = ShapeToken | number;
type PerCornerShape = {
  topLeft: ShapeCorner;
  topRight: ShapeCorner;
  bottomLeft: ShapeCorner;
  bottomRight: ShapeCorner;
};

type ShapeSpec = ShapeToken | PerCornerShape;

type InteractionShapes = {
  press?: ShapeSpec;
  hover?: ShapeSpec;
  focus?: ShapeSpec;
  drag?: ShapeSpec;
};

type ShapeContainerProps = {
  /** Rest shape token or per-corner shape. */
  shape: ShapeSpec;
  /** Per-interaction target shapes. Highest-priority active interaction wins. */
  shapes?: InteractionShapes;
  /** Interaction progress values from useInteraction(). Required when shapes is provided. */
  progress?: InteractionProgress;
  /** Additional style (background, padding, layout, etc.). */
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

function normalizeShape(shape: ShapeSpec): PerCornerShape {
  if (typeof shape === 'string') {
    return { topLeft: shape, topRight: shape, bottomLeft: shape, bottomRight: shape };
  }
  return shape;
}

function ShapeContainer({ shape, shapes, progress, style, children }: ShapeContainerProps) {
  const animatedTheme = useAnimatedTheme();
  const restCorners = normalizeShape(shape);
  const containerHeight = useSharedValue(0);

  // Pre-normalize interaction shapes
  const normalizedShapes = React.useMemo(() => {
    if (!shapes) return null;
    return {
      drag: shapes.drag ? normalizeShape(shapes.drag) : null,
      press: shapes.press ? normalizeShape(shapes.press) : null,
      focus: shapes.focus ? normalizeShape(shapes.focus) : null,
      hover: shapes.hover ? normalizeShape(shapes.hover) : null,
    };
  }, [shapes]);

  const handleLayout = React.useCallback((e: LayoutChangeEvent) => {
    containerHeight.value = e.nativeEvent.layout.height;
  }, [containerHeight]);

  const animatedStyle = useAnimatedStyle(() => {
    const t = animatedTheme.value;
    const resolve = (c: ShapeCorner): number => (typeof c === 'number' ? c : t.shape[c as ShapeToken]);
    const maxRadius = containerHeight.value > 0 ? containerHeight.value / 2 : 9999;

    const restTL = Math.min(resolve(restCorners.topLeft), maxRadius);
    const restTR = Math.min(resolve(restCorners.topRight), maxRadius);
    const restBL = Math.min(resolve(restCorners.bottomLeft), maxRadius);
    const restBR = Math.min(resolve(restCorners.bottomRight), maxRadius);

    if (!normalizedShapes || !progress) {
      return {
        borderTopLeftRadius: restTL,
        borderTopRightRadius: restTR,
        borderBottomLeftRadius: restBL,
        borderBottomRightRadius: restBR,
      };
    }

    // Find highest-priority active interaction with a defined shape
    // Priority: drag > press > focus > hover
    let activeCorners: PerCornerShape | null = null;
    let activeProgress = 0;

    if (normalizedShapes.drag && progress.drag.value > 0) {
      activeCorners = normalizedShapes.drag;
      activeProgress = progress.drag.value;
    } else if (normalizedShapes.press && progress.press.value > 0) {
      activeCorners = normalizedShapes.press;
      activeProgress = progress.press.value;
    } else if (normalizedShapes.focus && progress.focus.value > 0) {
      activeCorners = normalizedShapes.focus;
      activeProgress = progress.focus.value;
    } else if (normalizedShapes.hover && progress.hover.value > 0) {
      activeCorners = normalizedShapes.hover;
      activeProgress = progress.hover.value;
    }

    if (!activeCorners) {
      return {
        borderTopLeftRadius: restTL,
        borderTopRightRadius: restTR,
        borderBottomLeftRadius: restBL,
        borderBottomRightRadius: restBR,
      };
    }

    const p = activeProgress;
    const targetTL = Math.min(resolve(activeCorners.topLeft), maxRadius);
    const targetTR = Math.min(resolve(activeCorners.topRight), maxRadius);
    const targetBL = Math.min(resolve(activeCorners.bottomLeft), maxRadius);
    const targetBR = Math.min(resolve(activeCorners.bottomRight), maxRadius);

    return {
      borderTopLeftRadius: restTL + (targetTL - restTL) * p,
      borderTopRightRadius: restTR + (targetTR - restTR) * p,
      borderBottomLeftRadius: restBL + (targetBL - restBL) * p,
      borderBottomRightRadius: restBR + (targetBR - restBR) * p,
    };
  });

  return (
    <Animated.View onLayout={handleLayout} style={[style, animatedStyle, styles.container]}>
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
