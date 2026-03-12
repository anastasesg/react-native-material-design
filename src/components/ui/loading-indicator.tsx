/// Material Design Loading Indicator
/// Overview: https://m3.material.io/components/loading-indicator/overview
/// Specs: https://m3.material.io/components/loading-indicator/specs
/// Guidelines: https://m3.material.io/components/loading-indicator/guidelines
/// Accessibility: https://m3.material.io/components/loading-indicator/accessibility

import { useEffect, useState } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { Path, Svg } from 'react-native-svg';
import { StyleSheet, UnistylesRuntime, withUnistyles } from 'react-native-unistyles';
import { scheduleOnRN } from 'react-native-worklets';

import { SHAPES } from './shape';

const ThemedPath = withUnistyles(Path);

// =============================================================================
// Types
// =============================================================================

type LoadingIndicatorProps = {
  /** Whether to show the container background (contained configuration) */
  contained?: boolean;
  /** Size in dp. Default 48. Range 24-240. */
  size?: number;
  /** Accessibility label describing what is loading */
  accessibilityLabel?: string;
  /** External style */
  style?: StyleProp<ViewStyle>;
};

// =============================================================================
// Shape Sequence
// =============================================================================

const SHAPE_SEQUENCE = [
  SHAPES.soft_burst,
  SHAPES['9-sided_cookie'],
  SHAPES.pentagon,
  SHAPES.pill,
  SHAPES.sunny,
  SHAPES['4-sided_cookie'],
  SHAPES.oval,
];

const FRAMES_PER_TRANSITION = 50;
const TOTAL_TRANSITIONS = SHAPE_SEQUENCE.length; // 7 (loops back to first shape)

// Pre-compute all interpolated path frames once at module load
const ALL_FRAMES = (() => {
  const { interpolate } = require('flubber') as typeof import('flubber');
  const frames: string[] = [];

  for (let t = 0; t < TOTAL_TRANSITIONS; t++) {
    const fromShape = SHAPE_SEQUENCE[t]!;
    const toShape = SHAPE_SEQUENCE[(t + 1) % SHAPE_SEQUENCE.length]!;
    const interpolator = interpolate(fromShape, toShape, { maxSegmentLength: 2 });

    for (let f = 0; f < FRAMES_PER_TRANSITION; f++) {
      // Use original path at boundary frames to avoid flubber resampling distortion
      if (f === 0) {
        frames.push(fromShape);
      } else {
        frames.push(interpolator(f / FRAMES_PER_TRANSITION));
      }
    }
  }

  return frames;
})();

const TOTAL_FRAMES = ALL_FRAMES.length;

// =============================================================================
// Component
// =============================================================================

function LoadingIndicator({
  contained = false,
  size = 48,
  accessibilityLabel = 'Loading',
  style,
}: LoadingIndicatorProps) {
  styles.useVariants({ contained });

  // Animation state
  const [currentPath, setCurrentPath] = useState<string>(SHAPE_SEQUENCE[0]!);
  const progress = useSharedValue(0);
  const rotation = useSharedValue(0);

  // Start looping animation
  useEffect(() => {
    const theme = UnistylesRuntime.getTheme();
    const cycleDuration = theme.motion.duration.extraLong4 * 3; // ~3s per full cycle

    const durationPerShape = cycleDuration / TOTAL_TRANSITIONS;
    const easingCurve = Easing.bezier(...theme.motion.easing.standard);
    const degreesPerShape = 360 / TOTAL_TRANSITIONS;

    // Shape morph with per-transition easing — lingers at each shape, fast through the morph
    progress.value = 0;
    progress.value = withRepeat(
      withSequence(
        ...Array.from({ length: TOTAL_TRANSITIONS }, (_, i) =>
          withTiming((i + 1) / TOTAL_TRANSITIONS, {
            duration: durationPerShape,
            easing: easingCurve,
          })),
      ),
      -1,
      false,
    );

    // Clockwise rotation with matching per-shape easing
    rotation.value = 0;
    rotation.value = withRepeat(
      withSequence(
        ...Array.from({ length: TOTAL_TRANSITIONS }, (_, i) =>
          withTiming(degreesPerShape * (i + 1), {
            duration: durationPerShape,
            easing: easingCurve,
          })),
      ),
      -1,
      false,
    );
  }, [progress, rotation]);

  // Bridge shared value to React state
  useAnimatedReaction(
    () => progress.value,
    (value) => {
      'worklet';
      const frameIndex = Math.min(Math.floor(value * TOTAL_FRAMES), TOTAL_FRAMES - 1);
      scheduleOnRN(setCurrentPath, ALL_FRAMES[frameIndex]!);
    },
  );

  // Rotation runs on UI thread for smooth 60fps
  const rotationStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  // Active indicator size maintains 38/48 ratio
  const indicatorSize = size * (38 / 48);

  return (
    <View
      accessibilityRole="progressbar"
      accessibilityLabel={accessibilityLabel}
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        style,
      ]}
    >
      <Animated.View style={rotationStyle}>
        <Svg viewBox="0 0 380 380" width={indicatorSize} height={indicatorSize}>
          <ThemedPath
            d={currentPath}
            uniProps={(theme) => ({
              fill: contained ? theme.scheme.onPrimaryContainer : theme.scheme.primary,
            })}
          />
        </Svg>
      </Animated.View>
    </View>
  );
}

// =============================================================================
// Styles
// =============================================================================

const styles = StyleSheet.create((theme) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',

    variants: {
      contained: {
        true: {
          backgroundColor: theme.scheme.primaryContainer,
        },
        false: {
          backgroundColor: 'transparent',
        },
      },
    },
  },
}));

// =============================================================================
// Exports
// =============================================================================

LoadingIndicator.displayName = 'LoadingIndicator';

export type { LoadingIndicatorProps };
export { LoadingIndicator };
