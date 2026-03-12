/// Material Design Slider
/// Overview: https://m3.material.io/components/sliders/overview
/// Specs: https://m3.material.io/components/sliders/specs
/// Guidelines: https://m3.material.io/components/sliders/guidelines
/// Accessibility: https://m3.material.io/components/sliders/accessibility

import React from 'react';
import type { LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  type SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { StyleSheet, withUnistyles } from 'react-native-unistyles';
import { useAnimatedTheme } from 'react-native-unistyles/reanimated';

import { Icon, type MaterialSymbol } from './icon';
import { Text } from './text';

const UniIcon = withUnistyles(Icon);

// =============================================================================
// Types
// =============================================================================

type SliderSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
type SliderVariant = 'standard' | 'centered';

type SliderProps = {
  /** Variant: standard starts from left, centered starts from middle. */
  variant?: SliderVariant;
  /** Size of the slider track/handle. */
  size?: SliderSize;
  /** Orientation of the slider. */
  orientation?: 'horizontal' | 'vertical';
  /** Controlled value (0-1 by default, or between min-max). */
  value?: number;
  /** Default value for uncontrolled mode. */
  defaultValue?: number;
  /** Called when the value changes. */
  onValueChange?: (value: number) => void;
  /** Minimum value. Default 0. */
  min?: number;
  /** Maximum value. Default 1. */
  max?: number;
  /** Number of discrete stops. Omit for continuous. */
  steps?: number;
  /** Show the value indicator tooltip on press/drag. */
  showValueIndicator?: boolean;
  /** Format the value indicator text. Default: rounds to nearest integer or 2 decimals. */
  formatValue?: (value: number) => string;
  /** Inset icon name. Only rendered for M/L/XL in standard variant. */
  icon?: MaterialSymbol;
  /** Whether the slider is disabled. */
  disabled?: boolean;
  /** Style applied to the outer container. */
  style?: StyleProp<ViewStyle>;
};

type RangeSliderProps = {
  /** Size of the slider track/handle. */
  size?: SliderSize;
  /** Orientation of the slider. */
  orientation?: 'horizontal' | 'vertical';
  /** Controlled value as [min, max] tuple. */
  value?: [number, number];
  /** Default value for uncontrolled mode. */
  defaultValue?: [number, number];
  /** Called when the value changes. */
  onValueChange?: (value: [number, number]) => void;
  /** Minimum value. Default 0. */
  min?: number;
  /** Maximum value. Default 1. */
  max?: number;
  /** Number of discrete stops. Omit for continuous. */
  steps?: number;
  /** Show the value indicator tooltip on press/drag. */
  showValueIndicator?: boolean;
  /** Format the value indicator text. */
  formatValue?: (value: number) => string;
  /** Whether the slider is disabled. */
  disabled?: boolean;
  /** Style applied to the outer container. */
  style?: StyleProp<ViewStyle>;
};

// =============================================================================
// Constants (from M3 specs)
// =============================================================================

// Handle
const HANDLE_WIDTH_DEFAULT = 4;
const HANDLE_WIDTH_PRESSED = 2;
const HANDLE_PADDING = 6; // leading/trailing space

// Stop indicator
const STOP_SIZE = 4;
const STOP_TRAILING_SPACE = 4;

// Value indicator
const VALUE_INDICATOR_BOTTOM_SPACE = 12;

// Size-specific track heights
const TRACK_HEIGHTS: Record<SliderSize, number> = {
  xsmall: 16,
  small: 24,
  medium: 40,
  large: 56,
  xlarge: 96,
};

// Size-specific handle heights
const HANDLE_HEIGHTS: Record<SliderSize, number> = {
  xsmall: 44,
  small: 44,
  medium: 52,
  large: 68,
  xlarge: 108,
};

// Size-specific track outer corner radii
const TRACK_SHAPES: Record<SliderSize, number> = {
  xsmall: 8,
  small: 8,
  medium: 12,
  large: 16,
  xlarge: 28,
};

// Size-specific icon sizes (M/L/XL only)
const ICON_SIZES: Partial<Record<SliderSize, number>> = {
  medium: 24,
  large: 24,
  xlarge: 32,
};

// Size-specific icon padding (M/L/XL only)
const ICON_PADDING: Partial<Record<SliderSize, number>> = {
  medium: 6,
  large: 6,
  xlarge: 8,
};

// Inner corner size (smaller than outer)
const INNER_CORNER_SIZE = 2;

// =============================================================================
// Helpers
// =============================================================================

function clampValue(val: number, min: number, max: number): number {
  'worklet';
  return Math.min(Math.max(val, min), max);
}

function snapToStep(val: number, min: number, max: number, steps: number | undefined): number {
  'worklet';
  if (steps === undefined || steps <= 0) return val;
  const stepSize = (max - min) / steps;
  const snapped = Math.round((val - min) / stepSize) * stepSize + min;
  return clampValue(snapped, min, max);
}

function positionToValue(position: number, trackLength: number, min: number, max: number): number {
  'worklet';
  if (trackLength <= 0) return min;
  const fraction = clampValue(position / trackLength, 0, 1);
  return min + fraction * (max - min);
}

function valueToFraction(val: number, min: number, max: number): number {
  'worklet';
  if (max === min) return 0;
  return clampValue((val - min) / (max - min), 0, 1);
}

function buildStopFractions(steps: number | undefined): number[] | null {
  if (steps === undefined || steps <= 0) return null;
  const stops: number[] = [];
  for (let i = 0; i <= steps; i++) {
    stops.push(i / steps);
  }
  return stops;
}

function defaultFormatValue(val: number): string {
  if (Number.isInteger(val)) return String(val);
  return val.toFixed(1);
}

// =============================================================================
// Slider (Standard / Centered)
// =============================================================================

function Slider({
  variant = 'standard',
  size = 'xsmall',
  orientation = 'horizontal',
  value: controlledValue,
  defaultValue,
  onValueChange,
  min = 0,
  max = 1,
  steps,
  showValueIndicator = false,
  formatValue = defaultFormatValue,
  icon,
  disabled = false,
  style,
}: SliderProps) {
  styles.useVariants({ size, disabled });

  const animatedTheme = useAnimatedTheme();

  const isVertical = orientation === 'vertical';

  // Track whether icon should render (M/L/XL standard only)
  const showIcon =
    icon !== undefined && variant === 'standard' && (size === 'medium' || size === 'large' || size === 'xlarge');

  const trackHeight = TRACK_HEIGHTS[size];
  const handleHeight = HANDLE_HEIGHTS[size];
  const trackShape = TRACK_SHAPES[size];

  // Track dimensions
  const trackLength = useSharedValue(0);

  const handleLayout = React.useCallback((e: LayoutChangeEvent) => {
    const length = isVertical ? e.nativeEvent.layout.height : e.nativeEvent.layout.width;
    trackLength.value = length;
  }, [isVertical, trackLength]);

  // Value state
  const currentValue = useSharedValue(controlledValue ?? defaultValue ?? min);
  const isPressed = useSharedValue(false);
  const handleWidthAnim = useSharedValue(HANDLE_WIDTH_DEFAULT);

  // Sync controlled value
  React.useEffect(() => {
    if (controlledValue !== undefined) {
      currentValue.value = controlledValue;
    }
  }, [controlledValue, currentValue]);

  // Value change callback
  const emitValue = React.useCallback((val: number) => {
    onValueChange?.(val);
  }, [onValueChange]);

  // Fraction derived value
  const fraction = useDerivedValue(() => {
    return valueToFraction(currentValue.value, min, max);
  });

  // Gesture: Tap (pressed state) + Pan (value tracking), composed simultaneously
  const gesture = React.useMemo(() => {
    const springConfig = animatedTheme.value.motion.spring.fastEffects;

    const tap = Gesture.Tap()
      .enabled(!disabled)
      .maxDuration(10_000)
      .onBegin(() => {
        'worklet';
        isPressed.value = true;
        handleWidthAnim.value = withSpring(HANDLE_WIDTH_PRESSED, springConfig);
      })
      .onEnd(() => {
        'worklet';
        isPressed.value = false;
        handleWidthAnim.value = withSpring(HANDLE_WIDTH_DEFAULT, springConfig);
      })
      .onFinalize(() => {
        'worklet';
        isPressed.value = false;
        handleWidthAnim.value = withSpring(HANDLE_WIDTH_DEFAULT, springConfig);
      });

    const pan = Gesture.Pan()
      .enabled(!disabled)
      .minDistance(0)
      .onBegin((e) => {
        'worklet';
        // Jump to position on begin
        const pos = isVertical ? trackLength.value - e.y : e.x;
        let newVal = positionToValue(pos, trackLength.value, min, max);
        newVal = snapToStep(newVal, min, max, steps);
        currentValue.value = newVal;
        runOnJS(emitValue)(newVal);
      })
      .onUpdate((e) => {
        'worklet';
        const pos = isVertical ? trackLength.value - e.y : e.x;
        let newVal = positionToValue(pos, trackLength.value, min, max);
        newVal = snapToStep(newVal, min, max, steps);
        currentValue.value = newVal;
        runOnJS(emitValue)(newVal);
      });

    return Gesture.Simultaneous(tap, pan);
  }, [
    disabled,
    isVertical,
    min,
    max,
    steps,
    trackLength,
    currentValue,
    isPressed,
    handleWidthAnim,
    animatedTheme,
    emitValue,
  ]);

  // Animated styles for active track
  const activeTrackStyle = useAnimatedStyle(() => {
    const f = fraction.value;
    const tl = trackLength.value;
    if (variant === 'centered') {
      const center = 0.5 * tl;
      const handlePos = f * tl;
      // Gap on handle side only; inactive tracks create the center gap
      const left = f >= 0.5 ? center : handlePos + HANDLE_PADDING;
      const w =
        f >= 0.5 ? Math.max(0, handlePos - center - HANDLE_PADDING) : Math.max(0, center - handlePos - HANDLE_PADDING);
      return {
        position: 'absolute' as const,
        left,
        width: w,
        height: '100%',
        backgroundColor: animatedTheme.value.scheme.primary,
        borderRadius: trackShape,
      };
    }
    // Standard: from left to handle, with gap before handle
    const w = Math.max(0, f * tl - HANDLE_PADDING);
    return {
      position: 'absolute' as const,
      left: 0,
      width: w,
      height: '100%',
      backgroundColor: animatedTheme.value.scheme.primary,
      borderTopLeftRadius: trackShape,
      borderBottomLeftRadius: trackShape,
      borderTopRightRadius: INNER_CORNER_SIZE,
      borderBottomRightRadius: INNER_CORNER_SIZE,
    };
  });

  // Standard inactive track: single segment on the right of handle
  const inactiveTrackStyle = useAnimatedStyle(() => {
    const f = fraction.value;
    const tl = trackLength.value;
    const w = Math.max(0, (1 - f) * tl - HANDLE_PADDING);
    return {
      position: 'absolute' as const,
      right: 0,
      width: w,
      height: '100%',
      backgroundColor: disabled ? animatedTheme.value.scheme.onSurface : animatedTheme.value.scheme.secondaryContainer,
      opacity: disabled ? 0.12 : 1,
      borderTopRightRadius: trackShape,
      borderBottomRightRadius: trackShape,
      borderTopLeftRadius: INNER_CORNER_SIZE,
      borderBottomLeftRadius: INNER_CORNER_SIZE,
    };
  });

  // Centered inactive: left segment
  // If handle >= center: left inactive goes from 0 to center (flush with active, no gap)
  // If handle < center: left inactive goes from 0 to handle - gap
  const centeredInactiveLeftStyle = useAnimatedStyle(() => {
    const f = fraction.value;
    const tl = trackLength.value;
    const center = 0.5 * tl;
    const handlePos = f * tl;
    const w = f >= 0.5 ? Math.max(0, center - HANDLE_PADDING) : Math.max(0, handlePos - HANDLE_PADDING);
    const bg = disabled ? animatedTheme.value.scheme.onSurface : animatedTheme.value.scheme.secondaryContainer;
    return {
      position: 'absolute' as const,
      left: 0,
      width: w,
      height: '100%',
      backgroundColor: bg,
      opacity: disabled ? 0.12 : 1,
      borderTopLeftRadius: trackShape,
      borderBottomLeftRadius: trackShape,
      borderTopRightRadius: INNER_CORNER_SIZE,
      borderBottomRightRadius: INNER_CORNER_SIZE,
    };
  });

  // Centered inactive: right segment
  // If handle >= center: right inactive from handle + gap to end
  // If handle < center: right inactive from center + gap to end
  const centeredInactiveRightStyle = useAnimatedStyle(() => {
    const f = fraction.value;
    const tl = trackLength.value;
    const center = 0.5 * tl;
    const handlePos = f * tl;
    const w = f >= 0.5 ? Math.max(0, tl - handlePos - HANDLE_PADDING) : Math.max(0, tl - center - HANDLE_PADDING);
    const bg = disabled ? animatedTheme.value.scheme.onSurface : animatedTheme.value.scheme.secondaryContainer;
    return {
      position: 'absolute' as const,
      right: 0,
      width: w,
      height: '100%',
      backgroundColor: bg,
      opacity: disabled ? 0.12 : 1,
      borderTopRightRadius: trackShape,
      borderBottomRightRadius: trackShape,
      borderTopLeftRadius: INNER_CORNER_SIZE,
      borderBottomLeftRadius: INNER_CORNER_SIZE,
    };
  });

  // Handle position (animated) — uses pixel positioning to match track segments
  const handleStyle = useAnimatedStyle(() => {
    const handlePos = fraction.value * trackLength.value;
    return {
      position: 'absolute' as const,
      left: handlePos - handleWidthAnim.value / 2,
      top: (trackHeight - handleHeight) / 2,
      width: handleWidthAnim.value,
      height: handleHeight,
      borderRadius: handleWidthAnim.value / 2,
      backgroundColor: disabled ? animatedTheme.value.scheme.onSurface : animatedTheme.value.scheme.primary,
      opacity: disabled ? 0.38 : 1,
    };
  });

  // Value indicator style
  const valueIndicatorStyle = useAnimatedStyle(() => {
    const handlePos = fraction.value * trackLength.value;
    return {
      position: 'absolute' as const,
      left: handlePos - 24,
      bottom: trackHeight / 2 + handleHeight / 2 + VALUE_INDICATOR_BOTTOM_SPACE,
      opacity: showValueIndicator && isPressed.value ? 1 : 0,
      backgroundColor: animatedTheme.value.scheme.inverseSurface,
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 8,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
      minWidth: 48,
    };
  });

  // Display value for indicator
  const [displayValue, setDisplayValue] = React.useState(controlledValue ?? defaultValue ?? min);
  useDerivedValue(() => {
    runOnJS(setDisplayValue)(currentValue.value);
  });

  // Disabled active track overlay
  const disabledActiveStyle = useAnimatedStyle(() => {
    const f = fraction.value;
    const tl = trackLength.value;
    if (!disabled) return { position: 'absolute' as const, width: 0, height: 0 };
    if (variant === 'centered') {
      const center = 0.5 * tl;
      const handlePos = f * tl;
      const left = f >= 0.5 ? center : handlePos + HANDLE_PADDING;
      const w =
        f >= 0.5 ? Math.max(0, handlePos - center - HANDLE_PADDING) : Math.max(0, center - handlePos - HANDLE_PADDING);
      return {
        position: 'absolute' as const,
        left,
        width: w,
        height: '100%',
        backgroundColor: animatedTheme.value.scheme.onSurface,
        opacity: 0.38,
        borderRadius: trackShape,
      };
    }
    const w = Math.max(0, f * tl - HANDLE_PADDING);
    return {
      position: 'absolute' as const,
      left: 0,
      width: w,
      height: '100%',
      backgroundColor: animatedTheme.value.scheme.onSurface,
      opacity: 0.38,
      borderTopLeftRadius: trackShape,
      borderBottomLeftRadius: trackShape,
      borderTopRightRadius: INNER_CORNER_SIZE,
      borderBottomRightRadius: INNER_CORNER_SIZE,
    };
  });

  const stopIndicators = React.useMemo(() => buildStopFractions(steps), [steps]);
  const handleFractionsArr = React.useMemo(() => [fraction], [fraction]);
  const stopLow = useDerivedValue(() => (variant === 'centered' ? Math.min(fraction.value, 0.5) : 0));
  const stopHigh = useDerivedValue(() => (variant === 'centered' ? Math.max(fraction.value, 0.5) : fraction.value));

  // Icon on active or inactive track
  const iconStyle = useAnimatedStyle(() => {
    if (!showIcon) return { position: 'absolute' as const, width: 0, height: 0, opacity: 0 };
    const f = fraction.value;
    const iconSize = ICON_SIZES[size] ?? 24;
    const iconPad = ICON_PADDING[size] ?? 6;
    // If fraction is small enough that icon doesn't fit on active track, place on inactive
    const activeWidth = f * trackLength.value;
    const iconTotalWidth = iconSize + iconPad * 2;
    const onActive = activeWidth >= iconTotalWidth + HANDLE_PADDING;
    return {
      position: 'absolute' as const,
      left: onActive ? iconPad : undefined,
      right: onActive ? undefined : iconPad,
      top: (trackHeight - iconSize) / 2,
      width: iconSize,
      height: iconSize,
    };
  });

  const [iconOnActive, setIconOnActive] = React.useState(false);
  const prevIconOnActive = useSharedValue(false);
  useDerivedValue(() => {
    if (!showIcon) return;
    const f = fraction.value;
    const iconSize = ICON_SIZES[size] ?? 24;
    const iconPad = ICON_PADDING[size] ?? 6;
    const activeWidth = f * trackLength.value;
    const iconTotalWidth = iconSize + iconPad * 2;
    const onActive = activeWidth >= iconTotalWidth + HANDLE_PADDING;
    if (onActive !== prevIconOnActive.value) {
      prevIconOnActive.value = onActive;
      runOnJS(setIconOnActive)(onActive);
    }
  });

  const containerRotation = isVertical ? '-90deg' : '0deg';

  return (
    <View
      style={[styles.outerContainer, isVertical && styles.verticalOuter, style]}
      accessibilityRole="adjustable"
      accessibilityValue={{
        min,
        max,
        now: displayValue,
      }}
    >
      <View style={[{ transform: [{ rotate: containerRotation }] }, isVertical && styles.verticalInner]}>
        <GestureDetector gesture={gesture}>
          <Animated.View style={[styles.trackContainer, { height: trackHeight }]} onLayout={handleLayout}>
            {/* Inactive track(s) */}
            {variant === 'centered' ? (
              <>
                <Animated.View style={centeredInactiveLeftStyle} />
                <Animated.View style={centeredInactiveRightStyle} />
              </>
            ) : (
              <Animated.View style={inactiveTrackStyle} />
            )}

            {/* Active track */}
            {disabled ? <Animated.View style={disabledActiveStyle} /> : <Animated.View style={activeTrackStyle} />}

            {/* Stop indicators */}
            {stopIndicators &&
              stopIndicators.map((frac, idx) => (
                <StopDot
                  key={idx}
                  fraction={frac}
                  fractionLow={stopLow}
                  fractionHigh={stopHigh}
                  handleFractions={handleFractionsArr}
                  disabled={disabled}
                  trackHeight={trackHeight}
                  trackLength={trackLength}
                />
              ))}

            {/* Inset icon */}
            {showIcon && icon && (
              <Animated.View style={iconStyle} pointerEvents="none">
                <UniIcon
                  name={icon}
                  size={ICON_SIZES[size] ?? 24}
                  uniProps={(theme) => ({
                    color: iconOnActive ? theme.scheme.onPrimary : theme.scheme.onSecondaryContainer,
                  })}
                />
              </Animated.View>
            )}

            {/* Handle */}
            <Animated.View style={handleStyle} />

            {/* Value indicator */}
            {showValueIndicator && (
              <Animated.View style={valueIndicatorStyle}>
                <Text variant="label" size="large" style={styles.valueIndicatorText}>
                  {formatValue(displayValue)}
                </Text>
              </Animated.View>
            )}
          </Animated.View>
        </GestureDetector>
      </View>
    </View>
  );
}

// =============================================================================
// RangeSlider
// =============================================================================

function RangeSlider({
  size = 'xsmall',
  orientation = 'horizontal',
  value: controlledValue,
  defaultValue,
  onValueChange,
  min = 0,
  max = 1,
  steps,
  showValueIndicator = false,
  formatValue = defaultFormatValue,
  disabled = false,
  style,
}: RangeSliderProps) {
  styles.useVariants({ size, disabled });

  const animatedTheme = useAnimatedTheme();
  const isVertical = orientation === 'vertical';

  const trackHeight = TRACK_HEIGHTS[size];
  const handleHeight = HANDLE_HEIGHTS[size];
  const trackShape = TRACK_SHAPES[size];

  const trackLength = useSharedValue(0);

  const handleLayout = React.useCallback((e: LayoutChangeEvent) => {
    const length = isVertical ? e.nativeEvent.layout.height : e.nativeEvent.layout.width;
    trackLength.value = length;
  }, [isVertical, trackLength]);

  // Two value shared values
  const valueLow = useSharedValue(controlledValue?.[0] ?? defaultValue?.[0] ?? min);
  const valueHigh = useSharedValue(controlledValue?.[1] ?? defaultValue?.[1] ?? max);
  const isPressed = useSharedValue(false);
  const activeHandle = useSharedValue<0 | 1>(0); // 0=low, 1=high
  const handleWidthAnim = useSharedValue(HANDLE_WIDTH_DEFAULT);

  // Sync controlled
  React.useEffect(() => {
    if (controlledValue !== undefined) {
      valueLow.value = controlledValue[0];
      valueHigh.value = controlledValue[1];
    }
  }, [controlledValue, valueLow, valueHigh]);

  const emitValue = React.useCallback((low: number, high: number) => {
    onValueChange?.([low, high]);
  }, [onValueChange]);

  const fractionLow = useDerivedValue(() => valueToFraction(valueLow.value, min, max));
  const fractionHigh = useDerivedValue(() => valueToFraction(valueHigh.value, min, max));

  // Gesture: Tap (pressed state) + Pan (value tracking), composed simultaneously
  const gesture = React.useMemo(() => {
    const springConfig = animatedTheme.value.motion.spring.fastEffects;

    const tap = Gesture.Tap()
      .enabled(!disabled)
      .maxDuration(10_000)
      .onBegin(() => {
        'worklet';
        isPressed.value = true;
        handleWidthAnim.value = withSpring(HANDLE_WIDTH_PRESSED, springConfig);
      })
      .onEnd(() => {
        'worklet';
        isPressed.value = false;
        handleWidthAnim.value = withSpring(HANDLE_WIDTH_DEFAULT, springConfig);
      })
      .onFinalize(() => {
        'worklet';
        isPressed.value = false;
        handleWidthAnim.value = withSpring(HANDLE_WIDTH_DEFAULT, springConfig);
      });

    const pan = Gesture.Pan()
      .enabled(!disabled)
      .minDistance(0)
      .onBegin((e) => {
        'worklet';
        const pos = isVertical ? trackLength.value - e.y : e.x;
        const touchFraction = clampValue(pos / trackLength.value, 0, 1);
        const touchVal = min + touchFraction * (max - min);
        // Determine which handle is closer
        const distLow = Math.abs(touchVal - valueLow.value);
        const distHigh = Math.abs(touchVal - valueHigh.value);
        activeHandle.value = distLow <= distHigh ? 0 : 1;
        let newVal = positionToValue(pos, trackLength.value, min, max);
        newVal = snapToStep(newVal, min, max, steps);
        if (activeHandle.value === 0) {
          valueLow.value = clampValue(newVal, min, valueHigh.value);
        } else {
          valueHigh.value = clampValue(newVal, valueLow.value, max);
        }
        runOnJS(emitValue)(valueLow.value, valueHigh.value);
      })
      .onUpdate((e) => {
        'worklet';
        const pos = isVertical ? trackLength.value - e.y : e.x;
        let newVal = positionToValue(pos, trackLength.value, min, max);
        newVal = snapToStep(newVal, min, max, steps);
        if (activeHandle.value === 0) {
          valueLow.value = clampValue(newVal, min, valueHigh.value);
        } else {
          valueHigh.value = clampValue(newVal, valueLow.value, max);
        }
        runOnJS(emitValue)(valueLow.value, valueHigh.value);
      });

    return Gesture.Simultaneous(tap, pan);
  }, [
    disabled,
    isVertical,
    min,
    max,
    steps,
    trackLength,
    valueLow,
    valueHigh,
    isPressed,
    activeHandle,
    handleWidthAnim,
    animatedTheme,
    emitValue,
  ]);

  // Active track between the two handles
  const activeTrackStyle = useAnimatedStyle(() => {
    const fl = fractionLow.value;
    const fh = fractionHigh.value;
    const tl = trackLength.value;
    const leftPx = fl * tl + HANDLE_PADDING;
    const rightPx = (1 - fh) * tl + HANDLE_PADDING;
    const w = Math.max(0, tl - leftPx - rightPx);
    return {
      position: 'absolute' as const,
      left: leftPx,
      width: w,
      height: '100%',
      backgroundColor: animatedTheme.value.scheme.primary,
      borderRadius: INNER_CORNER_SIZE,
    };
  });

  // Inactive track left
  const inactiveLeftStyle = useAnimatedStyle(() => {
    const fl = fractionLow.value;
    const tl = trackLength.value;
    const w = Math.max(0, fl * tl - HANDLE_PADDING);
    return {
      position: 'absolute' as const,
      left: 0,
      width: w,
      height: '100%',
      backgroundColor: animatedTheme.value.scheme.secondaryContainer,
      borderTopLeftRadius: trackShape,
      borderBottomLeftRadius: trackShape,
      borderTopRightRadius: INNER_CORNER_SIZE,
      borderBottomRightRadius: INNER_CORNER_SIZE,
    };
  });

  // Inactive track right
  const inactiveRightStyle = useAnimatedStyle(() => {
    const fh = fractionHigh.value;
    const tl = trackLength.value;
    const w = Math.max(0, (1 - fh) * tl - HANDLE_PADDING);
    return {
      position: 'absolute' as const,
      right: 0,
      width: w,
      height: '100%',
      backgroundColor: animatedTheme.value.scheme.secondaryContainer,
      borderTopRightRadius: trackShape,
      borderBottomRightRadius: trackShape,
      borderTopLeftRadius: INNER_CORNER_SIZE,
      borderBottomLeftRadius: INNER_CORNER_SIZE,
    };
  });

  // Handle low
  const handleLowStyle = useAnimatedStyle(() => {
    const handlePos = fractionLow.value * trackLength.value;
    const w = activeHandle.value === 0 ? handleWidthAnim.value : HANDLE_WIDTH_DEFAULT;
    return {
      position: 'absolute' as const,
      left: handlePos - w / 2,
      top: (trackHeight - handleHeight) / 2,
      width: w,
      height: handleHeight,
      borderRadius: w / 2,
      backgroundColor: disabled ? animatedTheme.value.scheme.onSurface : animatedTheme.value.scheme.primary,
      opacity: disabled ? 0.38 : 1,
    };
  });

  // Handle high
  const handleHighStyle = useAnimatedStyle(() => {
    const handlePos = fractionHigh.value * trackLength.value;
    const w = activeHandle.value === 1 ? handleWidthAnim.value : HANDLE_WIDTH_DEFAULT;
    return {
      position: 'absolute' as const,
      left: handlePos - w / 2,
      top: (trackHeight - handleHeight) / 2,
      width: w,
      height: handleHeight,
      borderRadius: w / 2,
      backgroundColor: disabled ? animatedTheme.value.scheme.onSurface : animatedTheme.value.scheme.primary,
      opacity: disabled ? 0.38 : 1,
    };
  });

  // Value indicator for active handle
  const valueIndicatorLowStyle = useAnimatedStyle(() => {
    const handlePos = fractionLow.value * trackLength.value;
    return {
      position: 'absolute' as const,
      left: handlePos - 24,
      bottom: trackHeight / 2 + handleHeight / 2 + VALUE_INDICATOR_BOTTOM_SPACE,
      opacity: showValueIndicator && isPressed.value && activeHandle.value === 0 ? 1 : 0,
      backgroundColor: animatedTheme.value.scheme.inverseSurface,
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 8,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
      minWidth: 48,
    };
  });

  const valueIndicatorHighStyle = useAnimatedStyle(() => {
    const handlePos = fractionHigh.value * trackLength.value;
    return {
      position: 'absolute' as const,
      left: handlePos - 24,
      bottom: trackHeight / 2 + handleHeight / 2 + VALUE_INDICATOR_BOTTOM_SPACE,
      opacity: showValueIndicator && isPressed.value && activeHandle.value === 1 ? 1 : 0,
      backgroundColor: animatedTheme.value.scheme.inverseSurface,
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 8,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
      minWidth: 48,
    };
  });

  // Disabled overlays
  const disabledActiveStyle = useAnimatedStyle(() => {
    if (!disabled) return { position: 'absolute' as const, width: 0, height: 0 };
    const fl = fractionLow.value;
    const fh = fractionHigh.value;
    const tl = trackLength.value;
    const leftPx = fl * tl + HANDLE_PADDING;
    const rightPx = (1 - fh) * tl + HANDLE_PADDING;
    const w = Math.max(0, tl - leftPx - rightPx);
    return {
      position: 'absolute' as const,
      left: leftPx,
      width: w,
      height: '100%',
      backgroundColor: animatedTheme.value.scheme.onSurface,
      opacity: 0.38,
      borderRadius: INNER_CORNER_SIZE,
    };
  });

  const disabledInactiveLeftStyle = useAnimatedStyle(() => {
    if (!disabled) return { position: 'absolute' as const, width: 0, height: 0 };
    const fl = fractionLow.value;
    const tl = trackLength.value;
    const w = Math.max(0, fl * tl - HANDLE_PADDING);
    return {
      position: 'absolute' as const,
      left: 0,
      width: w,
      height: '100%',
      backgroundColor: animatedTheme.value.scheme.onSurface,
      opacity: 0.12,
      borderTopLeftRadius: trackShape,
      borderBottomLeftRadius: trackShape,
      borderTopRightRadius: INNER_CORNER_SIZE,
      borderBottomRightRadius: INNER_CORNER_SIZE,
    };
  });

  const disabledInactiveRightStyle = useAnimatedStyle(() => {
    if (!disabled) return { position: 'absolute' as const, width: 0, height: 0 };
    const fh = fractionHigh.value;
    const tl = trackLength.value;
    const w = Math.max(0, (1 - fh) * tl - HANDLE_PADDING);
    return {
      position: 'absolute' as const,
      right: 0,
      width: w,
      height: '100%',
      backgroundColor: animatedTheme.value.scheme.onSurface,
      opacity: 0.12,
      borderTopRightRadius: trackShape,
      borderBottomRightRadius: trackShape,
      borderTopLeftRadius: INNER_CORNER_SIZE,
      borderBottomLeftRadius: INNER_CORNER_SIZE,
    };
  });

  // Display values for indicators
  const [displayLow, setDisplayLow] = React.useState(controlledValue?.[0] ?? defaultValue?.[0] ?? min);
  const [displayHigh, setDisplayHigh] = React.useState(controlledValue?.[1] ?? defaultValue?.[1] ?? max);
  useDerivedValue(() => {
    runOnJS(setDisplayLow)(valueLow.value);
    runOnJS(setDisplayHigh)(valueHigh.value);
  });

  const stopIndicators = React.useMemo(() => buildStopFractions(steps), [steps]);
  const handleFractionsArr = React.useMemo(() => [fractionLow, fractionHigh], [fractionLow, fractionHigh]);

  const containerRotation = isVertical ? '-90deg' : '0deg';

  return (
    <View style={[styles.outerContainer, isVertical && styles.verticalOuter, style]} accessibilityRole="adjustable">
      <View style={[{ transform: [{ rotate: containerRotation }] }, isVertical && styles.verticalInner]}>
        <GestureDetector gesture={gesture}>
          <Animated.View style={[styles.trackContainer, { height: trackHeight }]} onLayout={handleLayout}>
            {/* Inactive tracks */}
            {disabled ? (
              <>
                <Animated.View style={disabledInactiveLeftStyle} />
                <Animated.View style={disabledInactiveRightStyle} />
              </>
            ) : (
              <>
                <Animated.View style={inactiveLeftStyle} />
                <Animated.View style={inactiveRightStyle} />
              </>
            )}

            {/* Active track */}
            {disabled ? <Animated.View style={disabledActiveStyle} /> : <Animated.View style={activeTrackStyle} />}

            {/* Stop indicators */}
            {stopIndicators &&
              stopIndicators.map((frac, idx) => (
                <StopDot
                  key={idx}
                  fraction={frac}
                  fractionLow={fractionLow}
                  fractionHigh={fractionHigh}
                  handleFractions={handleFractionsArr}
                  disabled={disabled}
                  trackHeight={trackHeight}
                  trackLength={trackLength}
                />
              ))}

            {/* Handles */}
            <Animated.View style={handleLowStyle} />
            <Animated.View style={handleHighStyle} />

            {/* Value indicators */}
            {showValueIndicator && (
              <>
                <Animated.View style={valueIndicatorLowStyle}>
                  <Text variant="label" size="large" style={styles.valueIndicatorText}>
                    {formatValue(displayLow)}
                  </Text>
                </Animated.View>
                <Animated.View style={valueIndicatorHighStyle}>
                  <Text variant="label" size="large" style={styles.valueIndicatorText}>
                    {formatValue(displayHigh)}
                  </Text>
                </Animated.View>
              </>
            )}
          </Animated.View>
        </GestureDetector>
      </View>
    </View>
  );
}

// =============================================================================
// StopDot (unified stop indicator for all slider variants)
// =============================================================================

type StopDotProps = {
  fraction: number;
  fractionLow: SharedValue<number>;
  fractionHigh: SharedValue<number>;
  /** Handle positions — dot hides when a handle overlaps it. */
  handleFractions: SharedValue<number>[];
  disabled: boolean;
  trackHeight: number;
  trackLength: SharedValue<number>;
};

function StopDot({
  fraction,
  fractionLow,
  fractionHigh,
  handleFractions,
  disabled,
  trackHeight,
  trackLength,
}: StopDotProps) {
  const animatedTheme = useAnimatedTheme();

  const dotStyle = useAnimatedStyle(() => {
    const tl = trackLength.value;

    // Hide dot when a handle is on top of it
    // HANDLE_PADDING / tl converts the pixel gap to a fraction threshold
    const threshold = tl > 0 ? HANDLE_PADDING / tl : 0;
    let underHandle = false;
    for (let i = 0; i < handleFractions.length; i++) {
      if (Math.abs(fraction - handleFractions[i]!.value) < threshold) {
        underHandle = true;
        break;
      }
    }

    const isOnActive = fraction >= fractionLow.value && fraction <= fractionHigh.value;

    const color = disabled
      ? isOnActive
        ? animatedTheme.value.scheme.inverseOnSurface
        : animatedTheme.value.scheme.onSurface
      : isOnActive
        ? animatedTheme.value.scheme.onPrimary
        : animatedTheme.value.scheme.onSecondaryContainer;

    const pixelLeft = STOP_TRAILING_SPACE + fraction * (tl - 2 * STOP_TRAILING_SPACE) - STOP_SIZE / 2;

    return {
      position: 'absolute' as const,
      left: pixelLeft,
      top: (trackHeight - STOP_SIZE) / 2,
      width: STOP_SIZE,
      height: STOP_SIZE,
      borderRadius: STOP_SIZE / 2,
      backgroundColor: color,
      opacity: underHandle ? 0 : 1,
    };
  });

  return <Animated.View style={dotStyle} pointerEvents="none" />;
}

// =============================================================================
// Styles
// =============================================================================

const styles = StyleSheet.create((theme) => ({
  outerContainer: {
    justifyContent: 'center',
    paddingHorizontal: HANDLE_PADDING,

    variants: {
      size: {
        xsmall: {},
        small: {},
        medium: {},
        large: {},
        xlarge: {},
      },
      disabled: {
        true: {},
        false: {},
      },
    },
  },

  verticalOuter: {
    paddingHorizontal: 0,
    paddingVertical: HANDLE_PADDING,
  },

  verticalInner: {
    width: 200,
    height: 200,
  },

  trackContainer: {
    width: '100%',
    overflow: 'visible',
    justifyContent: 'center',
  },

  valueIndicatorText: {
    color: theme.scheme.inverseOnSurface,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.5,
    fontWeight: '400',
    textAlign: 'center',
  },
}));

// =============================================================================
// Exports
// =============================================================================

Slider.displayName = 'Slider';
RangeSlider.displayName = 'RangeSlider';

export type { RangeSliderProps, SliderProps, SliderSize, SliderVariant };
export { RangeSlider, Slider };
