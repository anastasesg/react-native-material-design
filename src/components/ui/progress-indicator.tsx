/// Material Design Progress Indicators
/// Overview: https://m3.material.io/components/progress-indicators/overview
/// Specs: https://m3.material.io/components/progress-indicators/specs
/// Guidelines: https://m3.material.io/components/progress-indicators/guidelines
/// Accessibility: https://m3.material.io/components/progress-indicators/accessibility

import { useEffect, useMemo } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';
import Animated, {
  cancelAnimation,
  Easing,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { Circle, Svg } from 'react-native-svg';
import { StyleSheet, UnistylesRuntime, withUnistyles } from 'react-native-unistyles';

// =============================================================================
// Types
// =============================================================================

type LinearProgressIndicatorProps = {
  /** Progress value 0-1. If omitted, renders indeterminate. */
  progress?: number;
  /** Whether to show the stop indicator (default: true for determinate) */
  showStopIndicator?: boolean;
  /** Accessibility label describing the process */
  accessibilityLabel?: string;
  /** External style */
  style?: StyleProp<ViewStyle>;
};

type CircularProgressIndicatorProps = {
  /** Progress value 0-1. If omitted, renders indeterminate. */
  progress?: number;
  /** Size of the circular indicator in dp. Default 40. */
  size?: number;
  /** Accessibility label describing the process */
  accessibilityLabel?: string;
  /** External style */
  style?: StyleProp<ViewStyle>;
};

// =============================================================================
// Constants (from M3 specs — baseline tokens)
// =============================================================================

// Linear: height 4dp, active indicator thickness 4dp, track thickness 4dp,
// stop indicator size 4dp, stop indicator trailing space 0,
// track-active-indicator-space 4dp
const LINEAR_HEIGHT = 4;
const LINEAR_ACTIVE_THICKNESS = 4;
const LINEAR_TRACK_THICKNESS = 4;
const LINEAR_STOP_SIZE = 4;
const LINEAR_TRACK_INDICATOR_SPACE = 4;

// Circular: size 40dp, active indicator thickness 4dp, track thickness 4dp
const CIRCULAR_DEFAULT_SIZE = 40;
const CIRCULAR_ACTIVE_THICKNESS = 4;
const CIRCULAR_TRACK_THICKNESS = 4;

// =============================================================================
// Themed SVG primitives
// =============================================================================

const ThemedCircle = withUnistyles(Circle);
const ThemedAnimatedCircle = withUnistyles(Animated.createAnimatedComponent(Circle));

// =============================================================================
// Linear Progress Indicator
// =============================================================================

function LinearProgressIndicator({
  progress,
  showStopIndicator,
  accessibilityLabel = 'Progress',
  style,
}: LinearProgressIndicatorProps) {
  const isDeterminate = progress !== undefined;
  const shouldShowStop = showStopIndicator ?? isDeterminate;

  // Determinate progress animation
  const animatedProgress = useSharedValue(isDeterminate ? progress : 0);

  // Indeterminate animation value
  const indeterminatePos = useSharedValue(0);

  useEffect(() => {
    if (isDeterminate) {
      const theme = UnistylesRuntime.getTheme();
      animatedProgress.value = withTiming(progress, {
        duration: theme.motion.duration.medium2,
        easing: Easing.bezier(...theme.motion.easing.standard),
      });
    }
  }, [isDeterminate, progress, animatedProgress]);

  useEffect(() => {
    if (!isDeterminate) {
      const theme = UnistylesRuntime.getTheme();
      const duration = theme.motion.duration.extraLong4;
      const easingCurve = Easing.bezier(...theme.motion.easing.standard);

      indeterminatePos.value = 0;
      indeterminatePos.value = withRepeat(
        withSequence(withTiming(1, { duration, easing: easingCurve }), withTiming(0, { duration: 0 })),
        -1,
        false,
      );
      return () => cancelAnimation(indeterminatePos);
    }
    return undefined;
  }, [isDeterminate, indeterminatePos]);

  // Determinate: indicator fills proportionally
  const determinateStyle = useAnimatedStyle(() => ({
    width: `${animatedProgress.value * 100}%` as unknown as number,
  }));

  // Indeterminate: indicator grows/shrinks while translating
  const indeterminateStyle = useAnimatedStyle(() => {
    const t = indeterminatePos.value;
    const widthPct = interpolate(t, [0, 0.3, 0.5, 0.7, 1], [8, 40, 60, 40, 8]);
    const leftPct = interpolate(t, [0, 0.5, 1], [-10, 30, 100]);
    return {
      width: `${widthPct}%` as unknown as number,
      left: `${leftPct}%` as unknown as number,
    };
  });

  const accessibilityValue = isDeterminate ? { min: 0, max: 100, now: Math.round(progress * 100) } : { min: 0, max: 0 };

  return (
    <View
      accessibilityRole="progressbar"
      accessibilityLabel={accessibilityLabel}
      accessibilityValue={accessibilityValue}
      style={[styles.linearContainer, style]}
    >
      {/* Track */}
      <View style={styles.linearTrack}>
        {/* Inner area inset by track-active-indicator-space (4dp) */}
        <View style={styles.linearTrackInner}>
          {/* Active indicator */}
          {isDeterminate ? (
            <Animated.View style={[styles.linearActiveIndicator, determinateStyle]} />
          ) : (
            <Animated.View
              style={[styles.linearActiveIndicator, styles.linearIndeterminateIndicator, indeterminateStyle]}
            />
          )}
        </View>
      </View>

      {/* Stop indicator — linear determinate only */}
      {shouldShowStop && isDeterminate && <View style={styles.linearStopIndicator} />}
    </View>
  );
}

// =============================================================================
// Circular Progress Indicator
// =============================================================================

function CircularProgressIndicator({
  progress,
  size = CIRCULAR_DEFAULT_SIZE,
  accessibilityLabel = 'Progress',
  style,
}: CircularProgressIndicatorProps) {
  const isDeterminate = progress !== undefined;

  // Circle geometry
  const strokeWidth = CIRCULAR_ACTIVE_THICKNESS;
  const trackStrokeWidth = CIRCULAR_TRACK_THICKNESS;
  const radius = (size - Math.max(strokeWidth, trackStrokeWidth)) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  // Determinate progress
  const animatedProgress = useSharedValue(isDeterminate ? progress : 0);

  // Indeterminate animation
  const indeterminateRotation = useSharedValue(0);
  const indeterminateSweep = useSharedValue(0);

  useEffect(() => {
    if (isDeterminate) {
      const theme = UnistylesRuntime.getTheme();
      animatedProgress.value = withTiming(progress, {
        duration: theme.motion.duration.medium2,
        easing: Easing.bezier(...theme.motion.easing.standard),
      });
    }
  }, [isDeterminate, progress, animatedProgress]);

  useEffect(() => {
    if (!isDeterminate) {
      const theme = UnistylesRuntime.getTheme();
      const rotateDuration = theme.motion.duration.extraLong4 * 1.5;
      const sweepDuration = theme.motion.duration.extraLong4;
      const easingCurve = Easing.bezier(...theme.motion.easing.standard);

      // Continuous rotation
      indeterminateRotation.value = 0;
      indeterminateRotation.value = withRepeat(
        withTiming(360, { duration: rotateDuration, easing: Easing.linear }),
        -1,
        false,
      );

      // Arc grows and shrinks
      indeterminateSweep.value = 0;
      indeterminateSweep.value = withRepeat(
        withSequence(
          withTiming(1, { duration: sweepDuration / 2, easing: easingCurve }),
          withTiming(0, { duration: sweepDuration / 2, easing: easingCurve }),
        ),
        -1,
        false,
      );
      return () => {
        cancelAnimation(indeterminateRotation);
        cancelAnimation(indeterminateSweep);
      };
    }
    return undefined;
  }, [isDeterminate, indeterminateRotation, indeterminateSweep]);

  // Determinate arc props
  const determinateArcProps = useAnimatedProps(() => {
    const dashLength = animatedProgress.value * circumference;
    return {
      strokeDasharray: [dashLength, circumference - dashLength] as number[],
      strokeDashoffset: 0,
    };
  });

  // Indeterminate arc props
  const indeterminateArcProps = useAnimatedProps(() => {
    const minArc = 0.05 * circumference;
    const maxArc = 0.75 * circumference;
    const arcLength = interpolate(indeterminateSweep.value, [0, 1], [minArc, maxArc]);
    return {
      strokeDasharray: [arcLength, circumference - arcLength] as number[],
      strokeDashoffset: 0,
    };
  });

  // Indeterminate rotation transform
  const rotationStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${indeterminateRotation.value}deg` }],
  }));

  // SVG rotation to start arc from top (12 o'clock)
  const svgStyle = useMemo(() => ({ transform: [{ rotate: '-90deg' as const }] }), []);

  const accessibilityValue = isDeterminate ? { min: 0, max: 100, now: Math.round(progress * 100) } : { min: 0, max: 0 };

  return (
    <View
      accessibilityRole="progressbar"
      accessibilityLabel={accessibilityLabel}
      accessibilityValue={accessibilityValue}
      style={[{ width: size, height: size }, style]}
    >
      {isDeterminate ? (
        <View style={svgStyle}>
          <Svg width={size} height={size}>
            {/* Track */}
            <ThemedCircle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              strokeWidth={trackStrokeWidth}
              strokeLinecap="round"
              uniProps={(theme) => ({
                stroke: theme.scheme.secondaryContainer,
              })}
            />
            {/* Active indicator */}
            <ThemedAnimatedCircle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              uniProps={(theme: any) => ({
                stroke: theme.scheme.primary,
              })}
              animatedProps={determinateArcProps}
            />
          </Svg>
        </View>
      ) : (
        <Animated.View style={[styles.circularRotationContainer, rotationStyle]}>
          <View style={svgStyle}>
            <Svg width={size} height={size}>
              {/* Track */}
              <ThemedCircle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                strokeWidth={trackStrokeWidth}
                strokeLinecap="round"
                uniProps={(theme) => ({
                  stroke: theme.scheme.secondaryContainer,
                })}
              />
              {/* Active indicator */}
              <ThemedAnimatedCircle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                uniProps={(theme: any) => ({
                  stroke: theme.scheme.primary,
                })}
                animatedProps={indeterminateArcProps}
              />
            </Svg>
          </View>
        </Animated.View>
      )}
    </View>
  );
}

// =============================================================================
// Styles
// =============================================================================

const styles = StyleSheet.create((theme) => ({
  // Linear styles
  linearContainer: {
    height: LINEAR_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
  },

  linearTrack: {
    flex: 1,
    height: LINEAR_TRACK_THICKNESS,
    backgroundColor: theme.scheme.secondaryContainer,
    borderRadius: LINEAR_TRACK_THICKNESS / 2,
  },

  linearTrackInner: {
    flex: 1,
    height: LINEAR_ACTIVE_THICKNESS,
    marginHorizontal: LINEAR_TRACK_INDICATOR_SPACE,
    borderRadius: LINEAR_ACTIVE_THICKNESS / 2,
    overflow: 'hidden',
  },

  linearActiveIndicator: {
    height: LINEAR_ACTIVE_THICKNESS,
    backgroundColor: theme.scheme.primary,
    borderRadius: LINEAR_ACTIVE_THICKNESS / 2,
  },

  linearIndeterminateIndicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
  },

  linearStopIndicator: {
    width: LINEAR_STOP_SIZE,
    height: LINEAR_STOP_SIZE,
    borderRadius: LINEAR_STOP_SIZE / 2,
    backgroundColor: theme.scheme.primary,
  },

  // Circular styles
  circularRotationContainer: {
    width: '100%',
    height: '100%',
  },
}));

// =============================================================================
// Exports
// =============================================================================

export type { CircularProgressIndicatorProps, LinearProgressIndicatorProps };
export { CircularProgressIndicator, LinearProgressIndicator };
