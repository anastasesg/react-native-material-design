/// Material Design Time Pickers
/// Overview: https://m3.material.io/components/time-pickers/overview
/// Specs: https://m3.material.io/components/time-pickers/specs
/// Guidelines: https://m3.material.io/components/time-pickers/guidelines
/// Accessibility: https://m3.material.io/components/time-pickers/accessibility

import React from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Modal, TextInput, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import { useAnimatedTheme } from 'react-native-unistyles/reanimated';

import type { Scheme } from '@/theme/scheme';

import { useControllableState, useMotionConfig } from '../../hooks';
import { Pressable, StateLayer } from '../custom';
import { Button, ButtonLabel } from './button';
import { IconButton, IconButtonIcon } from './icon-button';
import { Text } from './text';

// =============================================================================
// Types
// =============================================================================

type TimeValue = {
  hours: number;
  minutes: number;
};

type TimePickerMode = 'dial' | 'input';
type SelectionMode = 'hours' | 'minutes';
type Period = 'AM' | 'PM';

type TimePickerProps = {
  /** Controls modal visibility (controlled). */
  open?: boolean;
  /** Initial open state (uncontrolled). Default: false. */
  defaultOpen?: boolean;
  /** Called when the open state changes. */
  onOpenChange?: (open: boolean) => void;
  /** Called when the picker is dismissed (Cancel or backdrop press). */
  onDismiss?: () => void;
  /** Called when the user confirms with OK. Receives the selected time. */
  onConfirm?: (time: TimeValue) => void;
  /** Controlled time value (hours 0-23, minutes 0-59). */
  value?: TimeValue;
  /** Default time value for uncontrolled mode. */
  defaultValue?: TimeValue;
  /** Whether to use 24-hour mode. Default false. */
  is24Hour?: boolean;
  /** Initial display mode. Default 'dial'. */
  initialMode?: TimePickerMode;
  /** Custom headline text. */
  headline?: string;
  /** Style applied to the container. */
  style?: StyleProp<ViewStyle>;
};

// =============================================================================
// Constants (from M3 specs)
// =============================================================================

// Container
const CONTAINER_PADDING = 24;
const CONTAINER_CORNER_RADIUS = 28; // theme.shape.xlarge

// Time selector
const TIME_SELECTOR_WIDTH = 96;
const TIME_SELECTOR_WIDTH_24H = 114;
const TIME_SELECTOR_HEIGHT = 80;
const TIME_SELECTOR_CORNER_RADIUS = 8; // theme.shape.small

// Period selector (vertical layout)
const PERIOD_SELECTOR_WIDTH = 52;
const PERIOD_SELECTOR_HEIGHT = 80;
const PERIOD_SELECTOR_CORNER_RADIUS = 8; // theme.shape.small
const PERIOD_SELECTOR_OUTLINE_WIDTH = 1;

// Clock dial
const CLOCK_DIAL_SIZE = 256;
const CLOCK_DIAL_HANDLE_SIZE = 48;
const CLOCK_DIAL_CENTER_SIZE = 8;
const CLOCK_DIAL_TRACK_WIDTH = 2;

// Input variant
const INPUT_FIELD_WIDTH = 96;
const INPUT_FIELD_HEIGHT = 72;
const INPUT_FIELD_CORNER_RADIUS = 8; // theme.shape.small
const INPUT_PERIOD_HEIGHT = 72;
const INPUT_FOCUS_OUTLINE_WIDTH = 2;

// Clock dial geometry
const DIAL_RADIUS = CLOCK_DIAL_SIZE / 2;
const OUTER_NUMBER_RADIUS = DIAL_RADIUS - CLOCK_DIAL_HANDLE_SIZE / 2;
const INNER_NUMBER_RADIUS = OUTER_NUMBER_RADIUS * 0.66;

// Scrim
const SCRIM_OPACITY = 0.32;

// Separator gap between hour and minute selectors
const SEPARATOR_GAP = 12;

// Gap between time selectors and period selector
const PERIOD_GAP = 12;

// Bottom actions area top margin
const ACTIONS_TOP_MARGIN = 20;

// Space between headline and selectors
const HEADLINE_BOTTOM_MARGIN = 20;

// Space between selectors and dial
const DIAL_TOP_MARGIN = 24;

// =============================================================================
// Helpers
// =============================================================================

function padTwo(n: number): string {
  return n.toString().padStart(2, '0');
}

function hoursTo12(hours: number): { display: number; period: Period } {
  const period: Period = hours >= 12 ? 'PM' : 'AM';
  let display = hours % 12;
  if (display === 0) display = 12;
  return { display, period };
}

function to24Hours(display12: number, period: Period): number {
  if (period === 'AM') {
    return display12 === 12 ? 0 : display12;
  }
  return display12 === 12 ? 12 : display12 + 12;
}

/** Get angle in degrees (0-360, 0 = 12 o'clock, clockwise) from position relative to center. */
function positionToAngle(dx: number, dy: number): number {
  'worklet';
  const angle = (Math.atan2(dx, -dy) * 180) / Math.PI;
  return ((angle % 360) + 360) % 360;
}

/** Distance from center. */
function positionToDistance(dx: number, dy: number): number {
  'worklet';
  return Math.sqrt(dx * dx + dy * dy);
}

/** Snap angle to nearest hour (30 degree increments). Returns 1-12 for 12h, or 0-11 index for further processing. */
function angleToHourIndex(angle: number): number {
  'worklet';
  return Math.round(angle / 30) % 12;
}

/** Snap angle to nearest minute (6 degree increments). Returns 0-59. */
function angleToMinute(angle: number): number {
  'worklet';
  return Math.round(angle / 6) % 60;
}

/** Get the angle for a given value on the dial. */
function valueToAngle(value: number, isMinutes: boolean): number {
  if (isMinutes) {
    return (value * 6) % 360;
  }
  return ((value % 12) * 30) % 360;
}

/** Get x,y position on a circle for an angle (0=top) and radius. */
function angleToPosition(angleDeg: number, radius: number): { x: number; y: number } {
  'worklet';
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: radius * Math.cos(angleRad),
    y: radius * Math.sin(angleRad),
  };
}

// =============================================================================
// TimeSelectorButton (pressable time display with state layer)
// =============================================================================

type TimeSelectorButtonProps = {
  label: string;
  selected: boolean;
  width: number;
  onPress: () => void;
  accessibilityLabel: string;
};

function TimeSelectorButton({ label, selected, width, onPress, accessibilityLabel }: TimeSelectorButtonProps) {
  const stateLayerColor: keyof Scheme = selected ? 'onPrimaryContainer' : 'onSurface';

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ selected }}
    >
      <View
        style={[
          pickerStyles.timeSelector,
          { width },
          selected ? pickerStyles.timeSelectorSelected : pickerStyles.timeSelectorUnselected,
        ]}
      >
        <StateLayer color={stateLayerColor} />
        <Text
          style={[
            pickerStyles.timeSelectorText,
            selected ? pickerStyles.timeSelectorTextSelected : pickerStyles.timeSelectorTextUnselected,
          ]}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

// =============================================================================
// PeriodButton (single AM or PM button with state layer)
// =============================================================================

type PeriodButtonProps = {
  label: 'AM' | 'PM';
  selected: boolean;
  onPress: () => void;
  style?: any;
};

function PeriodButton({ label, selected, onPress, style }: PeriodButtonProps) {
  const stateLayerColor: keyof Scheme = selected ? 'onTertiaryContainer' : 'onSurfaceVariant';

  return (
    <Pressable
      onPress={onPress}
      style={[pickerStyles.periodButton, style, selected && pickerStyles.periodButtonSelected]}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ selected }}
    >
      <StateLayer color={stateLayerColor} />
      <Text
        style={[
          pickerStyles.periodText,
          selected ? pickerStyles.periodTextSelected : pickerStyles.periodTextUnselected,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

// =============================================================================
// TimePicker
// =============================================================================

function TimePicker({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  onDismiss,
  onConfirm,
  value: controlledValue,
  defaultValue = { hours: 0, minutes: 0 },
  is24Hour = false,
  initialMode = 'dial',
  headline,
  style,
}: TimePickerProps) {
  // --- Open state (controlled/uncontrolled) ---
  const [open, setOpen] = useControllableState({
    value: openProp,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  // ---- Mount/unmount for exit animation ----
  const [mounted, setMounted] = React.useState(false);

  const scrimOpacity = useSharedValue(0);
  const containerScale = useSharedValue(0.9);
  const containerOpacity = useSharedValue(0);

  const onCloseAnimationEnd = React.useCallback((finished?: boolean) => {
    'worklet';
    if (finished) {
      runOnJS(setMounted)(false);
    }
  }, []);

  const motion = useMotionConfig('fast');

  React.useEffect(() => {
    if (open) {
      setMounted(true);
      scrimOpacity.value = withSpring(SCRIM_OPACITY, motion.effects.value);
      containerScale.value = withSpring(1, motion.spatial.value);
      containerOpacity.value = withSpring(1, motion.effects.value);
    } else if (mounted) {
      scrimOpacity.value = withSpring(0, motion.effects.value);
      containerScale.value = withSpring(0.9, motion.effects.value);
      containerOpacity.value = withSpring(0, motion.effects.value, onCloseAnimationEnd);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const animatedScrimStyle = useAnimatedStyle(() => ({
    opacity: scrimOpacity.value,
  }));

  const animatedContainerStyle = useAnimatedStyle(() => ({
    transform: [{ scale: containerScale.value }],
    opacity: containerOpacity.value,
  }));

  // ---- Internal state ----
  const initialValue = controlledValue ?? defaultValue;
  const [hours, setHours] = React.useState(initialValue.hours);
  const [minutes, setMinutes] = React.useState(initialValue.minutes);
  const [mode, setMode] = React.useState<TimePickerMode>(initialMode);
  const [selection, setSelection] = React.useState<SelectionMode>('hours');

  // Sync controlled value
  React.useEffect(() => {
    if (controlledValue !== undefined) {
      setHours(controlledValue.hours);
      setMinutes(controlledValue.minutes);
    }
  }, [controlledValue]);

  // Reset state when picker opens
  React.useEffect(() => {
    if (open) {
      const val = controlledValue ?? defaultValue;
      setHours(val.hours);
      setMinutes(val.minutes);
      setMode(initialMode);
      setSelection('hours');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Derived period
  const period: Period = hours >= 12 ? 'PM' : 'AM';
  const { display: display12 } = hoursTo12(hours);

  const handlePeriodChange = React.useCallback((newPeriod: Period) => {
    if (newPeriod === period) return;
    setHours((prev) => {
      if (newPeriod === 'AM') return prev >= 12 ? prev - 12 : prev;
      return prev < 12 ? prev + 12 : prev;
    });
  }, [period]);

  const handleHourSelect = React.useCallback((hour: number, autoAdvance: boolean) => {
    if (is24Hour) {
      setHours(hour);
    } else {
      // Convert 12h display value to 24h using current period
      setHours(to24Hours(hour, period));
    }
    if (autoAdvance) {
      setSelection('minutes');
    }
  }, [is24Hour, period]);

  const handleMinuteSelect = React.useCallback((minute: number) => {
    setMinutes(minute);
  }, []);

  const handleConfirm = React.useCallback(() => {
    setOpen(false);
    onConfirm?.({ hours, minutes });
  }, [setOpen, onConfirm, hours, minutes]);

  const handleDismiss = React.useCallback(() => {
    setOpen(false);
    onDismiss?.();
  }, [setOpen, onDismiss]);

  const toggleMode = React.useCallback(() => {
    setMode((prev) => (prev === 'dial' ? 'input' : 'dial'));
  }, []);

  // Input mode handlers
  const handleInputHoursChange = React.useCallback((text: string) => {
    const num = parseInt(text, 10);
    if (isNaN(num)) return;
    if (is24Hour) {
      if (num >= 0 && num <= 23) setHours(num);
    } else {
      if (num >= 1 && num <= 12) {
        setHours(to24Hours(num, period));
      }
    }
  }, [is24Hour, period]);

  const handleInputMinutesChange = React.useCallback((text: string) => {
    const num = parseInt(text, 10);
    if (isNaN(num)) return;
    if (num >= 0 && num <= 59) setMinutes(num);
  }, []);

  // Headline text
  const headlineText = headline ?? (mode === 'dial' ? 'Select time' : 'Enter time');

  if (!mounted) return null;

  const timeSelectorWidth = is24Hour ? TIME_SELECTOR_WIDTH_24H : TIME_SELECTOR_WIDTH;
  const displayHours = is24Hour ? hours : display12;

  return (
    <Modal transparent visible onRequestClose={handleDismiss} statusBarTranslucent>
      <Pressable
        style={StyleSheet.absoluteFillObject}
        onPress={handleDismiss}
        accessibilityRole="button"
        accessibilityLabel="Close time picker"
      >
        <Animated.View style={[pickerStyles.scrim, animatedScrimStyle]} />
      </Pressable>

      <View style={pickerStyles.anchor} pointerEvents="box-none">
        <Animated.View
          style={[pickerStyles.container, animatedContainerStyle, style]}
          accessibilityRole="alert"
          accessibilityLabel="Time picker"
        >
          {/* Headline */}
          <Text variant="label" size="medium" style={pickerStyles.headline}>
            {headlineText}
          </Text>

          <View style={pickerStyles.headlineGap} />

          {/* Mode-specific content */}
          {mode === 'dial' ? (
            <>
              {/* Time selector row (dial mode only) */}
              <View style={pickerStyles.timeSelectorRow}>
                <TimeSelectorButton
                  label={padTwo(displayHours)}
                  selected={selection === 'hours'}
                  width={timeSelectorWidth}
                  onPress={() => setSelection('hours')}
                  accessibilityLabel={`Hours: ${displayHours}`}
                />

                {/* Separator */}
                <Text style={pickerStyles.separator}>:</Text>

                <TimeSelectorButton
                  label={padTwo(minutes)}
                  selected={selection === 'minutes'}
                  width={timeSelectorWidth}
                  onPress={() => setSelection('minutes')}
                  accessibilityLabel={`Minutes: ${minutes}`}
                />

                {/* Period selector (12h only) */}
                {!is24Hour && (
                  <View style={pickerStyles.periodSelectorGap}>
                    <PeriodSelector period={period} onPeriodChange={handlePeriodChange} />
                  </View>
                )}
              </View>

              <View style={pickerStyles.dialTopGap}>
                <ClockDial
                  value={selection === 'hours' ? hours : minutes}
                  selectionMode={selection}
                  is24Hour={is24Hour}
                  onHourSelect={handleHourSelect}
                  onMinuteSelect={handleMinuteSelect}
                />
              </View>
            </>
          ) : (
            <View style={pickerStyles.inputContent}>
              <InputFields
                hours={hours}
                minutes={minutes}
                is24Hour={is24Hour}
                period={period}
                selection={selection}
                onSelectionChange={setSelection}
                onHoursChange={handleInputHoursChange}
                onMinutesChange={handleInputMinutesChange}
                onPeriodChange={handlePeriodChange}
              />
            </View>
          )}

          {/* Bottom bar: mode toggle + actions */}
          <View style={pickerStyles.bottomBar}>
            <IconButton
              onPress={toggleMode}
              accessibilityLabel={mode === 'dial' ? 'Switch to keyboard input' : 'Switch to clock dial'}
            >
              <IconButtonIcon name={mode === 'dial' ? 'keyboard' : 'schedule'} />
            </IconButton>
            <View style={pickerStyles.actions}>
              <Button variant="text" onPress={handleDismiss}>
                <ButtonLabel>Cancel</ButtonLabel>
              </Button>
              <Button variant="text" onPress={handleConfirm}>
                <ButtonLabel>OK</ButtonLabel>
              </Button>
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

// =============================================================================
// PeriodSelector
// =============================================================================

type PeriodSelectorProps = {
  period: Period;
  onPeriodChange: (period: Period) => void;
};

function PeriodSelector({ period, onPeriodChange }: PeriodSelectorProps) {
  return (
    <View style={pickerStyles.periodContainer}>
      <PeriodButton
        label="AM"
        selected={period === 'AM'}
        onPress={() => onPeriodChange('AM')}
        style={pickerStyles.periodButtonTop}
      />
      <View style={pickerStyles.periodDivider} />
      <PeriodButton
        label="PM"
        selected={period === 'PM'}
        onPress={() => onPeriodChange('PM')}
        style={pickerStyles.periodButtonBottom}
      />
    </View>
  );
}

// =============================================================================
// ClockDial
// =============================================================================

type ClockDialProps = {
  value: number;
  selectionMode: SelectionMode;
  is24Hour: boolean;
  onHourSelect: (hour: number, autoAdvance: boolean) => void;
  onMinuteSelect: (minute: number) => void;
};

function ClockDial({ value, selectionMode, is24Hour, onHourSelect, onMinuteSelect }: ClockDialProps) {
  const animatedTheme = useAnimatedTheme();

  // Current angle/distance for selector rendering
  const currentAngle = useSharedValue(0);
  const isInnerRing = useSharedValue(false);

  // Sync initial angle from value
  React.useEffect(() => {
    const angle = valueToAngle(value, selectionMode === 'minutes');
    currentAngle.value = angle;
    if (selectionMode === 'hours' && is24Hour) {
      // Hours 0-11 on outer ring, 12-23 on inner ring (per M3 spec)
      isInnerRing.value = value >= 12;
    }
  }, [value, selectionMode, is24Hour, currentAngle, isInnerRing]);

  // Selector line length depends on inner/outer ring
  const selectorRadius = useDerivedValue(() => {
    if (selectionMode === 'hours' && is24Hour && isInnerRing.value) {
      return INNER_NUMBER_RADIUS;
    }
    return OUTER_NUMBER_RADIUS;
  });

  // Selector track (line from center to handle)
  const selectorTrackStyle = useAnimatedStyle(() => {
    const len = selectorRadius.value - CLOCK_DIAL_HANDLE_SIZE / 2;
    return {
      position: 'absolute' as const,
      left: DIAL_RADIUS - CLOCK_DIAL_TRACK_WIDTH / 2,
      top: DIAL_RADIUS - len,
      width: CLOCK_DIAL_TRACK_WIDTH,
      height: Math.max(0, len),
      backgroundColor: animatedTheme.value.scheme.primary,
      transformOrigin: [CLOCK_DIAL_TRACK_WIDTH / 2, len, 0],
      transform: [{ rotate: `${currentAngle.value}deg` }],
    };
  });

  // Selector handle (circle at the end)
  const selectorHandleStyle = useAnimatedStyle(() => {
    const pos = angleToPosition(currentAngle.value, selectorRadius.value);
    return {
      position: 'absolute' as const,
      left: DIAL_RADIUS + pos.x - CLOCK_DIAL_HANDLE_SIZE / 2,
      top: DIAL_RADIUS + pos.y - CLOCK_DIAL_HANDLE_SIZE / 2,
      width: CLOCK_DIAL_HANDLE_SIZE,
      height: CLOCK_DIAL_HANDLE_SIZE,
      borderRadius: CLOCK_DIAL_HANDLE_SIZE / 2,
      backgroundColor: animatedTheme.value.scheme.primary,
    };
  });

  // Touch gesture
  const gesture = React.useMemo(() => {
    const processTouch = (x: number, y: number, autoAdvance: boolean) => {
      'worklet';
      const dx = x - DIAL_RADIUS;
      const dy = y - DIAL_RADIUS;
      const angle = positionToAngle(dx, dy);
      const distance = positionToDistance(dx, dy);

      currentAngle.value = angle;

      if (selectionMode === 'minutes') {
        const minute = angleToMinute(angle);
        runOnJS(onMinuteSelect)(minute);
      } else {
        const hourIdx = angleToHourIndex(angle);
        if (is24Hour) {
          const innerThreshold = (OUTER_NUMBER_RADIUS + INNER_NUMBER_RADIUS) / 2;
          const inner = distance < innerThreshold;
          isInnerRing.value = inner;
          const hour24 = inner ? (hourIdx + 12) % 24 : hourIdx;
          runOnJS(onHourSelect)(hour24, autoAdvance);
        } else {
          const hour12 = hourIdx === 0 ? 12 : hourIdx;
          runOnJS(onHourSelect)(hour12, autoAdvance);
        }
      }
    };

    const tap = Gesture.Tap().onEnd((e) => {
      'worklet';
      processTouch(e.x, e.y, true);
    });

    const pan = Gesture.Pan()
      .minDistance(0)
      .onUpdate((e) => {
        'worklet';
        processTouch(e.x, e.y, false);
      })
      .onEnd((e) => {
        'worklet';
        processTouch(e.x, e.y, true);
      });

    return Gesture.Race(tap, pan);
  }, [selectionMode, is24Hour, currentAngle, isInnerRing, onHourSelect, onMinuteSelect]);

  // Generate number labels
  type DialNumber = { label: string; x: number; y: number; value: number; isInner: boolean };
  const numbers = React.useMemo((): DialNumber[] => {
    if (selectionMode === 'minutes') {
      return Array.from({ length: 12 }, (_, i) => {
        const minute = i * 5;
        const angle = i * 30;
        const pos = angleToPosition(angle, OUTER_NUMBER_RADIUS);
        return { label: padTwo(minute), x: pos.x, y: pos.y, value: minute, isInner: false };
      });
    }

    if (is24Hour) {
      // Outer ring: 0-11, Inner ring: 12-23 (per M3 spec)
      const outerNumbers: DialNumber[] = Array.from({ length: 12 }, (_, i) => {
        const hourVal = i;
        const angle = i * 30;
        const pos = angleToPosition(angle, OUTER_NUMBER_RADIUS);
        return { label: padTwo(hourVal), x: pos.x, y: pos.y, value: hourVal, isInner: false };
      });

      const innerNumbers: DialNumber[] = Array.from({ length: 12 }, (_, i) => {
        const hourVal = i + 12;
        const angle = i * 30;
        const pos = angleToPosition(angle, INNER_NUMBER_RADIUS);
        return { label: padTwo(hourVal), x: pos.x, y: pos.y, value: hourVal, isInner: true };
      });

      return [...outerNumbers, ...innerNumbers];
    }

    // 12h hours: 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
    return Array.from({ length: 12 }, (_, i) => {
      const hour = i === 0 ? 12 : i;
      const angle = i * 30;
      const pos = angleToPosition(angle, OUTER_NUMBER_RADIUS);
      return { label: String(hour), x: pos.x, y: pos.y, value: hour, isInner: false };
    });
  }, [selectionMode, is24Hour]);

  // Determine which number is currently selected
  const selectedValue = value;

  return (
    <GestureDetector gesture={gesture}>
      <View
        style={pickerStyles.clockDialContainer}
        accessibilityRole="adjustable"
        accessibilityLabel={selectionMode === 'hours' ? 'Hour dial' : 'Minute dial'}
      >
        {/* Selector: center dot + track + handle (rendered first so numbers paint on top) */}
        <View style={pickerStyles.clockDialCenter} pointerEvents="none" />
        <Animated.View style={selectorTrackStyle} pointerEvents="none" />
        <Animated.View style={selectorHandleStyle} pointerEvents="none" />

        {/* Number labels */}
        {numbers.map((num) => {
          const isSelected =
            selectionMode === 'hours'
              ? is24Hour
                ? num.value === selectedValue
                : num.value === (selectedValue % 12 === 0 ? 12 : selectedValue % 12)
              : num.value === selectedValue;

          return (
            <View
              key={`${num.label}-${num.x}-${num.y}`}
              style={[
                pickerStyles.clockDialNumber,
                {
                  left: DIAL_RADIUS + num.x - CLOCK_DIAL_HANDLE_SIZE / 2,
                  top: DIAL_RADIUS + num.y - CLOCK_DIAL_HANDLE_SIZE / 2,
                },
              ]}
              pointerEvents="none"
            >
              <Text style={[pickerStyles.clockDialNumberText, isSelected && pickerStyles.clockDialNumberTextSelected]}>
                {num.label}
              </Text>
            </View>
          );
        })}
      </View>
    </GestureDetector>
  );
}

// =============================================================================
// InputFields
// =============================================================================

type InputFieldsProps = {
  hours: number;
  minutes: number;
  is24Hour: boolean;
  period: Period;
  selection: SelectionMode;
  onSelectionChange: (sel: SelectionMode) => void;
  onHoursChange: (text: string) => void;
  onMinutesChange: (text: string) => void;
  onPeriodChange: (period: Period) => void;
};

function InputFields({
  hours,
  minutes,
  is24Hour,
  period,
  selection,
  onSelectionChange,
  onHoursChange,
  onMinutesChange,
  onPeriodChange,
}: InputFieldsProps) {
  const hoursRef = React.useRef<any>(null);
  const minutesRef = React.useRef<any>(null);

  const displayHours = is24Hour ? hours : hoursTo12(hours).display;

  // Local text state so the user can freely type without immediate reformatting.
  // Values commit to the parent on blur.
  const [hoursText, setHoursText] = React.useState(padTwo(displayHours));
  const [minutesText, setMinutesText] = React.useState(padTwo(minutes));
  const [editingHours, setEditingHours] = React.useState(false);
  const [editingMinutes, setEditingMinutes] = React.useState(false);

  // Sync from parent when not actively editing (e.g., period toggle, dial mode switch)
  React.useEffect(() => {
    if (!editingHours) setHoursText(padTwo(displayHours));
  }, [displayHours, editingHours]);

  React.useEffect(() => {
    if (!editingMinutes) setMinutesText(padTwo(minutes));
  }, [minutes, editingMinutes]);

  const handleHoursFocus = React.useCallback(() => {
    setEditingHours(true);
    onSelectionChange('hours');
  }, [onSelectionChange]);

  const handleHoursBlur = React.useCallback(() => {
    setEditingHours(false);
    onHoursChange(hoursText);
  }, [hoursText, onHoursChange]);

  const handleMinutesFocus = React.useCallback(() => {
    setEditingMinutes(true);
    onSelectionChange('minutes');
  }, [onSelectionChange]);

  const handleMinutesBlur = React.useCallback(() => {
    setEditingMinutes(false);
    onMinutesChange(minutesText);
  }, [minutesText, onMinutesChange]);

  return (
    <View>
      <View style={pickerStyles.inputRow}>
        {/* Hour input */}
        <View>
          <Pressable
            onPress={() => {
              onSelectionChange('hours');
              hoursRef.current?.focus();
            }}
          >
            <View style={[pickerStyles.inputField, selection === 'hours' && pickerStyles.inputFieldFocused]}>
              <TextInput
                ref={hoursRef}
                style={[
                  pickerStyles.inputFieldText as TextStyle,
                  selection === 'hours' && (pickerStyles.inputFieldTextFocused as TextStyle),
                ]}
                value={hoursText}
                onChangeText={setHoursText}
                keyboardType="number-pad"
                maxLength={2}
                selectTextOnFocus
                onFocus={handleHoursFocus}
                onBlur={handleHoursBlur}
                accessibilityLabel="Hours"
              />
            </View>
          </Pressable>
          <Text style={pickerStyles.inputSupportingText}>Hour</Text>
        </View>

        {/* Separator */}
        <View style={pickerStyles.inputSeparatorWrap}>
          <Text style={pickerStyles.inputSeparator}>:</Text>
        </View>

        {/* Minute input */}
        <View>
          <Pressable
            onPress={() => {
              onSelectionChange('minutes');
              minutesRef.current?.focus();
            }}
          >
            <View style={[pickerStyles.inputField, selection === 'minutes' && pickerStyles.inputFieldFocused]}>
              <TextInput
                ref={minutesRef}
                style={[
                  pickerStyles.inputFieldText as TextStyle,
                  selection === 'minutes' && (pickerStyles.inputFieldTextFocused as TextStyle),
                ]}
                value={minutesText}
                onChangeText={setMinutesText}
                keyboardType="number-pad"
                maxLength={2}
                selectTextOnFocus
                onFocus={handleMinutesFocus}
                onBlur={handleMinutesBlur}
                accessibilityLabel="Minutes"
              />
            </View>
          </Pressable>
          <Text style={pickerStyles.inputSupportingText}>Minute</Text>
        </View>

        {/* Period selector (12h only) */}
        {!is24Hour && (
          <View style={pickerStyles.inputPeriodGap}>
            <InputPeriodSelector period={period} onPeriodChange={onPeriodChange} />
          </View>
        )}
      </View>
    </View>
  );
}

// =============================================================================
// InputPeriodSelector (for input variant — same height as input fields)
// =============================================================================

type InputPeriodSelectorProps = {
  period: Period;
  onPeriodChange: (period: Period) => void;
};

function InputPeriodSelector({ period, onPeriodChange }: InputPeriodSelectorProps) {
  return (
    <View style={pickerStyles.inputPeriodContainer}>
      <PeriodButton
        label="AM"
        selected={period === 'AM'}
        onPress={() => onPeriodChange('AM')}
        style={pickerStyles.inputPeriodButtonTop}
      />
      <View style={pickerStyles.periodDivider} />
      <PeriodButton
        label="PM"
        selected={period === 'PM'}
        onPress={() => onPeriodChange('PM')}
        style={pickerStyles.inputPeriodButtonBottom}
      />
    </View>
  );
}

// =============================================================================
// Styles
// =============================================================================

const pickerStyles = StyleSheet.create((theme) => ({
  // ---- Modal scaffolding ----
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.scheme.scrim,
  },

  anchor: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  // ---- Container (surfaceContainerHigh, 28dp corners, 24dp padding) ----
  container: {
    backgroundColor: theme.scheme.surfaceContainerHigh,
    borderRadius: CONTAINER_CORNER_RADIUS,
    padding: CONTAINER_PADDING,
  },

  // ---- Headline (labelMedium, onSurfaceVariant) ----
  // M3 spec: 12pt size, 16pt line-height, 500 weight, 0.5pt tracking
  // Maps to theme.typography.label.medium
  headline: {
    color: theme.scheme.onSurfaceVariant,
    ...theme.typography.label.medium,
  },

  headlineGap: {
    height: HEADLINE_BOTTOM_MARGIN,
  },

  // ---- Time selector row ----
  timeSelectorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // ---- Time selector container (96dp x 80dp, 8dp corners) ----
  timeSelector: {
    height: TIME_SELECTOR_HEIGHT,
    borderRadius: TIME_SELECTOR_CORNER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  timeSelectorSelected: {
    backgroundColor: theme.scheme.primaryContainer,
  },

  timeSelectorUnselected: {
    backgroundColor: theme.scheme.surfaceContainerHighest,
  },

  // ---- Time selector label text (displayLarge 57pt) ----
  // M3 spec: 57pt size, 64pt line-height, weight 400, tracking -0.25pt
  // Maps to theme.typography.display.large
  timeSelectorText: {
    ...theme.typography.display.large,
  },

  timeSelectorTextSelected: {
    color: theme.scheme.onPrimaryContainer,
  },

  timeSelectorTextUnselected: {
    color: theme.scheme.onSurface,
  },

  // ---- Separator (displayLarge 57pt, onSurface) ----
  // M3 spec: same typography as time selector text
  separator: {
    ...theme.typography.display.large,
    color: theme.scheme.onSurface,
    marginHorizontal: SEPARATOR_GAP / 2,
  },

  // ---- Period selector gap ----
  periodSelectorGap: {
    marginLeft: PERIOD_GAP,
  },

  // ---- Period selector container (52dp x 80dp, outline) ----
  periodContainer: {
    width: PERIOD_SELECTOR_WIDTH,
    height: PERIOD_SELECTOR_HEIGHT,
    borderRadius: PERIOD_SELECTOR_CORNER_RADIUS,
    borderWidth: PERIOD_SELECTOR_OUTLINE_WIDTH,
    borderColor: theme.scheme.outline,
    overflow: 'hidden',
  },

  periodButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  periodButtonTop: {
    borderTopLeftRadius: PERIOD_SELECTOR_CORNER_RADIUS - PERIOD_SELECTOR_OUTLINE_WIDTH,
    borderTopRightRadius: PERIOD_SELECTOR_CORNER_RADIUS - PERIOD_SELECTOR_OUTLINE_WIDTH,
  },

  periodButtonBottom: {
    borderBottomLeftRadius: PERIOD_SELECTOR_CORNER_RADIUS - PERIOD_SELECTOR_OUTLINE_WIDTH,
    borderBottomRightRadius: PERIOD_SELECTOR_CORNER_RADIUS - PERIOD_SELECTOR_OUTLINE_WIDTH,
  },

  periodButtonSelected: {
    backgroundColor: theme.scheme.tertiaryContainer,
  },

  periodDivider: {
    height: PERIOD_SELECTOR_OUTLINE_WIDTH,
    backgroundColor: theme.scheme.outline,
  },

  // ---- Period selector label text (titleMedium 16pt) ----
  // M3 spec: 16pt size, 24pt line-height, 500 weight, 0.15pt tracking
  // Maps to theme.typography.title.medium
  periodText: {
    ...theme.typography.title.medium,
  },

  periodTextSelected: {
    color: theme.scheme.onTertiaryContainer,
  },

  periodTextUnselected: {
    color: theme.scheme.onSurfaceVariant,
  },

  // ---- Clock dial ----
  dialTopGap: {
    marginTop: DIAL_TOP_MARGIN,
    alignItems: 'center',
  },

  // Clock dial container (256dp circle, surfaceContainerHighest)
  clockDialContainer: {
    width: CLOCK_DIAL_SIZE,
    height: CLOCK_DIAL_SIZE,
    borderRadius: CLOCK_DIAL_SIZE / 2,
    backgroundColor: theme.scheme.surfaceContainerHighest,
  },

  // Clock dial number label (48dp hit area, centered text)
  clockDialNumber: {
    position: 'absolute',
    width: CLOCK_DIAL_HANDLE_SIZE,
    height: CLOCK_DIAL_HANDLE_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Clock dial label text (bodyLarge 16pt, onSurface)
  // M3 spec: 16pt size, 24pt line-height, 400 weight, 0.5pt tracking
  // Maps to theme.typography.body.large
  clockDialNumberText: {
    ...theme.typography.body.large,
    color: theme.scheme.onSurface,
    textAlign: 'center',
  },

  clockDialNumberTextSelected: {
    color: theme.scheme.onPrimary,
  },

  // Clock dial selector center (8dp circle, primary)
  clockDialCenter: {
    position: 'absolute',
    left: DIAL_RADIUS - CLOCK_DIAL_CENTER_SIZE / 2,
    top: DIAL_RADIUS - CLOCK_DIAL_CENTER_SIZE / 2,
    width: CLOCK_DIAL_CENTER_SIZE,
    height: CLOCK_DIAL_CENTER_SIZE,
    borderRadius: CLOCK_DIAL_CENTER_SIZE / 2,
    backgroundColor: theme.scheme.primary,
  },

  // ---- Bottom bar ----
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: ACTIONS_TOP_MARGIN,
  },

  actions: {
    flexDirection: 'row',
    gap: 8,
  },

  // ---- Input variant ----
  inputContent: {
    marginTop: DIAL_TOP_MARGIN,
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  // Input field container (96dp x 72dp, surfaceContainerHighest, 8dp corners)
  inputField: {
    width: INPUT_FIELD_WIDTH,
    height: INPUT_FIELD_HEIGHT,
    borderRadius: INPUT_FIELD_CORNER_RADIUS,
    backgroundColor: theme.scheme.surfaceContainerHighest,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputFieldFocused: {
    backgroundColor: theme.scheme.primaryContainer,
    borderWidth: INPUT_FOCUS_OUTLINE_WIDTH,
    borderColor: theme.scheme.primary,
  },

  // Input field label text (displayMedium 45pt)
  // M3 spec: 45pt size, 52pt line-height, 400 weight, tracking 0
  // Maps to theme.typography.display.medium
  inputFieldText: {
    ...theme.typography.display.medium,
    color: theme.scheme.onSurface,
    textAlign: 'center',
    width: '100%',
    padding: 0,
  },

  inputFieldTextFocused: {
    color: theme.scheme.onPrimaryContainer,
  },

  // Input separator (displayLarge 57pt, onSurface)
  inputSeparator: {
    ...theme.typography.display.large,
    color: theme.scheme.onSurface,
    marginHorizontal: SEPARATOR_GAP / 2,
  },

  // Wrapper to vertically center separator against input field height
  inputSeparatorWrap: {
    height: INPUT_FIELD_HEIGHT,
    justifyContent: 'center',
  },

  // Supporting text below input fields (bodySmall 12pt, onSurfaceVariant)
  // M3 spec: 12pt size, 16pt line-height, 400 weight, 0.4pt tracking
  // Maps to theme.typography.body.small
  inputSupportingText: {
    ...theme.typography.body.small,
    color: theme.scheme.onSurfaceVariant,
    marginTop: 4,
    textAlign: 'center',
  },

  // Input period gap
  inputPeriodGap: {
    marginLeft: PERIOD_GAP,
  },

  // Input period selector (same as dial but 72dp height)
  inputPeriodContainer: {
    width: PERIOD_SELECTOR_WIDTH,
    height: INPUT_PERIOD_HEIGHT,
    borderRadius: PERIOD_SELECTOR_CORNER_RADIUS,
    borderWidth: PERIOD_SELECTOR_OUTLINE_WIDTH,
    borderColor: theme.scheme.outline,
    overflow: 'hidden',
  },

  inputPeriodButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputPeriodButtonTop: {
    borderTopLeftRadius: PERIOD_SELECTOR_CORNER_RADIUS - PERIOD_SELECTOR_OUTLINE_WIDTH,
    borderTopRightRadius: PERIOD_SELECTOR_CORNER_RADIUS - PERIOD_SELECTOR_OUTLINE_WIDTH,
  },

  inputPeriodButtonBottom: {
    borderBottomLeftRadius: PERIOD_SELECTOR_CORNER_RADIUS - PERIOD_SELECTOR_OUTLINE_WIDTH,
    borderBottomRightRadius: PERIOD_SELECTOR_CORNER_RADIUS - PERIOD_SELECTOR_OUTLINE_WIDTH,
  },
}));

// =============================================================================
// Exports
// =============================================================================

TimePicker.displayName = 'TimePicker';

export type { Period, SelectionMode, TimePickerMode, TimePickerProps, TimeValue };
export { TimePicker };
