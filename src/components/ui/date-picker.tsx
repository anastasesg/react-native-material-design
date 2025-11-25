/// Material Design Date Pickers
/// Overview: https://m3.material.io/components/date-pickers/overview
/// Specs: https://m3.material.io/components/date-pickers/specs
/// Guidelines: https://m3.material.io/components/date-pickers/guidelines
/// Accessibility: https://m3.material.io/components/date-pickers/accessibility

import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Modal, Pressable as RNPressable, ScrollView, View } from 'react-native';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';

import type { Scheme } from '@/theme/scheme';

import { useInteraction } from '../../hooks';
import { StateLayer } from '../custom';
import { Button, ButtonLabel } from './button';
import { Divider } from './divider';
import { Icon } from './icon';
import { IconButton } from './icon-button';
import { Text } from './text';

// =============================================================================
// Types
// =============================================================================

type DatePickerProps = {
  /** Controls modal visibility. */
  visible: boolean;
  /** Called when the picker is dismissed (Cancel or backdrop press). */
  onDismiss?: () => void;
  /** Called when the user confirms with OK. Receives the selected date. */
  onConfirm?: (date: Date) => void;
  /** Controlled date value. */
  value?: Date;
  /** Default date value for uncontrolled mode. */
  defaultValue?: Date;
  /** Minimum selectable date. */
  minimumDate?: Date;
  /** Maximum selectable date. */
  maximumDate?: Date;
  /** Custom header supporting text (default "Select date"). */
  headline?: string;
  /** Style applied to the container. */
  style?: StyleProp<ViewStyle>;
};

type DatePickerView = 'calendar' | 'year';

// =============================================================================
// Constants (from M3 specs — Modal date picker)
// =============================================================================

// Container: 360dp x 524dp, extra-large corners (28dp), surfaceContainerHigh, level3
const CONTAINER_WIDTH = 360;
const CONTAINER_HEIGHT = 524;

// Header: 360dp x 120dp
const HEADER_HEIGHT = 120;
const HEADER_PADDING_HORIZONTAL = 24;
const HEADER_PADDING_TOP = 16;
const HEADER_PADDING_BOTTOM = 12;

// Date cell: 40dp x 40dp, full corners (circle)
const DATE_CELL_SIZE = 40;
// Row height: 42dp (fits 6 rows within 524dp container)
const DATE_ROW_HEIGHT = 42;

// Year cell: 72dp x 36dp, full corners
const YEAR_CELL_WIDTH = 72;
const YEAR_CELL_HEIGHT = 36;

// Today outline width
const TODAY_OUTLINE_WIDTH = 1;

// Calendar body padding
const BODY_PADDING_HORIZONTAL = 12;
const BODY_PADDING_TOP = 16;

// Navigation row height
const NAV_ROW_HEIGHT = 40;

// Weekday labels row
const WEEKDAY_ROW_HEIGHT = 32;

// Grid: 7 columns, cell width = (CONTAINER_WIDTH - 2 * BODY_PADDING_HORIZONTAL) / 7
const GRID_WIDTH = CONTAINER_WIDTH - 2 * BODY_PADDING_HORIZONTAL;
const CELL_WIDTH = GRID_WIDTH / 7;

// Year grid: 3 columns
const YEAR_COLUMNS = 3;
const YEAR_GRID_PADDING = 12;
const YEAR_CELL_GAP_VERTICAL = 8;

// Scrim
const SCRIM_OPACITY = 0.32;

// Year range
const YEAR_RANGE_PAST = 100;
const YEAR_RANGE_FUTURE = 50;

// Weekday labels (Sunday-first)
const WEEKDAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

// Month names
const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const SHORT_MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// =============================================================================
// Helpers
// =============================================================================

/** Get array of day numbers for a month with leading null padding for alignment. */
function getMonthStructure(year: number, month: number): (number | null)[] {
  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const padding: null[] = Array(firstDay).fill(null);
  const days: number[] = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  return [...padding, ...days];
}

/** Check if two dates are the same day. */
function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

/** Check if a date is within the min/max bounds. */
function isDateInRange(date: Date, min?: Date, max?: Date): boolean {
  if (min) {
    const minDay = new Date(min.getFullYear(), min.getMonth(), min.getDate());
    if (date < minDay) return false;
  }
  if (max) {
    const maxDay = new Date(max.getFullYear(), max.getMonth(), max.getDate());
    if (date > maxDay) return false;
  }
  return true;
}

/** Format a date as "Wed, Aug 17" for the header headline. */
function formatHeadlineDate(date: Date): string {
  const dayName = DAY_NAMES[date.getDay()];
  const monthName = SHORT_MONTH_NAMES[date.getMonth()];
  return `${dayName}, ${monthName} ${date.getDate()}`;
}

// =============================================================================
// DateCell (individual date with state layer)
// =============================================================================

type DateCellProps = {
  day: number;
  isSelected: boolean;
  isToday: boolean;
  isDisabled: boolean;
  onPress: () => void;
};

const DateCell = React.memo(function DateCell({ day, isSelected, isToday, isDisabled, onPress }: DateCellProps) {
  const { progress, handlers } = useInteraction('press', 'hover', 'focus');

  // State layer color per M3 spec:
  // Selected: onPrimary, Today (unselected): primary, Unselected: onSurfaceVariant
  const stateLayerColor: keyof Scheme = isSelected ? 'onPrimary' : isToday ? 'primary' : 'onSurfaceVariant';

  return (
    <View style={pickerStyles.dateCellWrapper}>
      <RNPressable
        onPress={onPress}
        disabled={isDisabled}
        accessibilityRole="button"
        accessibilityLabel={`${day}`}
        accessibilityState={{ selected: isSelected, disabled: isDisabled }}
        {...handlers}
      >
        <View
          style={[
            pickerStyles.dateCell,
            isSelected && pickerStyles.dateCellSelected,
            isToday && !isSelected && pickerStyles.dateCellToday,
          ]}
        >
          <StateLayer progress={progress} color={stateLayerColor} style={pickerStyles.dateCellStateLayer} />
          <Text
            style={[
              pickerStyles.dateCellText,
              isSelected && pickerStyles.dateCellTextSelected,
              isToday && !isSelected && pickerStyles.dateCellTextToday,
              isDisabled && pickerStyles.dateCellTextDisabled,
            ]}
          >
            {day}
          </Text>
        </View>
      </RNPressable>
    </View>
  );
});

// =============================================================================
// YearCell (individual year with state layer)
// =============================================================================

type YearCellProps = {
  year: number;
  isSelected: boolean;
  isCurrent: boolean;
  onPress: () => void;
};

const YearCell = React.memo(function YearCell({ year, isSelected, isCurrent, onPress }: YearCellProps) {
  const { progress, handlers } = useInteraction('press', 'hover', 'focus');

  // State layer color per M3 spec:
  // Selected: onPrimary, Unselected: onSurfaceVariant
  const stateLayerColor: keyof Scheme = isSelected ? 'onPrimary' : 'onSurfaceVariant';

  return (
    <RNPressable
      style={pickerStyles.yearCellWrapper}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${year}`}
      accessibilityState={{ selected: isSelected }}
      {...handlers}
    >
      <View
        style={[
          pickerStyles.yearCell,
          isSelected && pickerStyles.yearCellSelected,
          isCurrent && !isSelected && pickerStyles.yearCellCurrent,
        ]}
      >
        <StateLayer progress={progress} color={stateLayerColor} style={pickerStyles.yearCellStateLayer} />
        <Text
          style={[
            pickerStyles.yearCellText,
            isSelected && pickerStyles.yearCellTextSelected,
            isCurrent && !isSelected && pickerStyles.yearCellTextCurrent,
          ]}
        >
          {year}
        </Text>
      </View>
    </RNPressable>
  );
});

// =============================================================================
// MonthYearButton (pressable menu button with state layer)
// =============================================================================

type MonthYearButtonProps = {
  label: string;
  onPress: () => void;
};

function MonthYearButton({ label, onPress }: MonthYearButtonProps) {
  const { progress, handlers } = useInteraction('press', 'hover', 'focus');

  return (
    <RNPressable onPress={onPress} {...handlers}>
      <View style={pickerStyles.monthYearButton}>
        <StateLayer progress={progress} color="onSurfaceVariant" />
        <Text style={pickerStyles.monthYearText}>{label}</Text>
        <Icon name="arrow_drop_down" size={24} style={pickerStyles.monthYearIcon} />
      </View>
    </RNPressable>
  );
}

// =============================================================================
// CalendarGrid
// =============================================================================

type CalendarGridProps = {
  viewYear: number;
  viewMonth: number;
  selectedDate: Date;
  today: Date;
  minimumDate?: Date;
  maximumDate?: Date;
  onSelectDate: (day: number) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onOpenYearPicker: () => void;
};

const CalendarGrid = React.memo(function CalendarGrid({
  viewYear,
  viewMonth,
  selectedDate,
  today,
  minimumDate,
  maximumDate,
  onSelectDate,
  onPrevMonth,
  onNextMonth,
  onOpenYearPicker,
}: CalendarGridProps) {
  const grid = React.useMemo(() => getMonthStructure(viewYear, viewMonth), [viewYear, viewMonth]);

  // Pad to 42 cells (6 rows x 7 columns) for consistent height
  const paddedGrid = React.useMemo(() => {
    const cells = [...grid];
    while (cells.length < 42) {
      cells.push(null);
    }
    return cells;
  }, [grid]);

  return (
    <View style={pickerStyles.calendarBody}>
      {/* Navigation row: month/year button + prev/next */}
      <View style={pickerStyles.navRow}>
        <MonthYearButton label={`${MONTH_NAMES[viewMonth]} ${viewYear}`} onPress={onOpenYearPicker} />
        <View style={pickerStyles.navButtons}>
          <IconButton name="chevron_left" onPress={onPrevMonth} accessibilityLabel="Previous month" />
          <IconButton name="chevron_right" onPress={onNextMonth} accessibilityLabel="Next month" />
        </View>
      </View>

      {/* Weekday labels */}
      <View style={pickerStyles.weekdayRow}>
        {WEEKDAY_LABELS.map((label, i) => (
          <View key={i} style={pickerStyles.weekdayCell}>
            <Text style={pickerStyles.weekdayText}>{label}</Text>
          </View>
        ))}
      </View>

      {/* Date grid */}
      <View style={pickerStyles.dateGrid}>
        {paddedGrid.map((day, i) => {
          if (day === null) {
            return <View key={`empty-${i}`} style={pickerStyles.dateCellWrapper} />;
          }

          const cellDate = new Date(viewYear, viewMonth, day);
          const isSelected = isSameDay(cellDate, selectedDate);
          const isToday = isSameDay(cellDate, today);
          const isDisabled = !isDateInRange(cellDate, minimumDate, maximumDate);

          return (
            <DateCell
              key={`day-${day}`}
              day={day}
              isSelected={isSelected}
              isToday={isToday}
              isDisabled={isDisabled}
              onPress={() => onSelectDate(day)}
            />
          );
        })}
      </View>
    </View>
  );
});

// =============================================================================
// YearPicker
// =============================================================================

type YearPickerProps = {
  selectedYear: number;
  currentYear: number;
  minimumDate?: Date;
  maximumDate?: Date;
  onSelectYear: (year: number) => void;
};

const YearPicker = React.memo(function YearPicker({
  selectedYear,
  currentYear,
  minimumDate,
  maximumDate,
  onSelectYear,
}: YearPickerProps) {
  const scrollRef = React.useRef<any>(null);

  const minYear = minimumDate ? minimumDate.getFullYear() : currentYear - YEAR_RANGE_PAST;
  const maxYear = maximumDate ? maximumDate.getFullYear() : currentYear + YEAR_RANGE_FUTURE;
  const years = React.useMemo(() => {
    const arr: number[] = [];
    for (let y = minYear; y <= maxYear; y++) {
      arr.push(y);
    }
    return arr;
  }, [minYear, maxYear]);

  // Auto-scroll to selected year on mount
  React.useEffect(() => {
    const selectedIndex = years.indexOf(selectedYear);
    if (selectedIndex >= 0) {
      const rowIndex = Math.floor(selectedIndex / YEAR_COLUMNS);
      const scrollY = rowIndex * (YEAR_CELL_HEIGHT + YEAR_CELL_GAP_VERTICAL) - 100;
      requestAnimationFrame(() => {
        (scrollRef.current as any)?.scrollTo?.({ y: Math.max(0, scrollY), animated: false });
      });
    }
  }, [years, selectedYear]);

  return (
    <ScrollView
      ref={scrollRef}
      style={pickerStyles.yearPickerScroll}
      contentContainerStyle={pickerStyles.yearPickerContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={pickerStyles.yearGrid}>
        {years.map((year) => (
          <YearCell
            key={year}
            year={year}
            isSelected={year === selectedYear}
            isCurrent={year === currentYear}
            onPress={() => onSelectYear(year)}
          />
        ))}
      </View>
    </ScrollView>
  );
});

// =============================================================================
// DatePicker
// =============================================================================

function DatePicker({
  visible,
  onDismiss,
  onConfirm,
  value: controlledValue,
  defaultValue,
  minimumDate,
  maximumDate,
  headline,
  style,
}: DatePickerProps) {
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

  React.useEffect(() => {
    const { fastSpatial, fastEffects } = UnistylesRuntime.getTheme().motion.spring;
    if (visible) {
      setMounted(true);
      scrimOpacity.value = withSpring(SCRIM_OPACITY, fastEffects);
      containerScale.value = withSpring(1, fastSpatial);
      containerOpacity.value = withSpring(1, fastEffects);
    } else if (mounted) {
      scrimOpacity.value = withSpring(0, fastEffects);
      containerScale.value = withSpring(0.9, fastEffects);
      containerOpacity.value = withSpring(0, fastEffects, onCloseAnimationEnd);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const animatedScrimStyle = useAnimatedStyle(() => ({
    opacity: scrimOpacity.value,
  }));

  const animatedContainerStyle = useAnimatedStyle(() => ({
    transform: [{ scale: containerScale.value }],
    opacity: containerOpacity.value,
  }));

  // ---- Internal state ----
  const today = React.useMemo(() => new Date(), []);
  const initialDate = controlledValue ?? defaultValue ?? today;
  const [selectedDate, setSelectedDate] = React.useState(initialDate);
  const [viewYear, setViewYear] = React.useState(initialDate.getFullYear());
  const [viewMonth, setViewMonth] = React.useState(initialDate.getMonth());
  const [view, setView] = React.useState<DatePickerView>('calendar');

  // Sync controlled value
  React.useEffect(() => {
    if (controlledValue !== undefined) {
      setSelectedDate(controlledValue);
    }
  }, [controlledValue]);

  // Reset state when picker opens
  React.useEffect(() => {
    if (visible) {
      const date = controlledValue ?? defaultValue ?? today;
      setSelectedDate(date);
      setViewYear(date.getFullYear());
      setViewMonth(date.getMonth());
      setView('calendar');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const handlePrevMonth = React.useCallback(() => {
    setViewMonth((prev) => {
      if (prev === 0) {
        setViewYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  }, []);

  const handleNextMonth = React.useCallback(() => {
    setViewMonth((prev) => {
      if (prev === 11) {
        setViewYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  }, []);

  const handleSelectDate = React.useCallback((day: number) => {
    setSelectedDate(new Date(viewYear, viewMonth, day));
  }, [viewYear, viewMonth]);

  const handleSelectYear = React.useCallback((year: number) => {
    setViewYear(year);
    setView('calendar');
  }, []);

  const handleOpenYearPicker = React.useCallback(() => {
    setView((prev) => (prev === 'year' ? 'calendar' : 'year'));
  }, []);

  const handleConfirm = React.useCallback(() => {
    onConfirm?.(selectedDate);
  }, [onConfirm, selectedDate]);

  const handleDismiss = React.useCallback(() => {
    onDismiss?.();
  }, [onDismiss]);

  // Headline text: "Select date" or custom
  const supportingText = headline ?? 'Select date';
  const headlineDate = formatHeadlineDate(selectedDate);

  if (!mounted) return null;

  return (
    <Modal transparent visible onRequestClose={handleDismiss} statusBarTranslucent>
      <RNPressable
        style={StyleSheet.absoluteFillObject}
        onPress={handleDismiss}
        accessibilityRole="button"
        accessibilityLabel="Close date picker"
      >
        <Animated.View style={[pickerStyles.scrim, animatedScrimStyle]} />
      </RNPressable>

      <View style={pickerStyles.anchor} pointerEvents="box-none">
        <Animated.View
          style={[pickerStyles.container, animatedContainerStyle, style]}
          accessibilityRole="alert"
          accessibilityLabel="Date picker"
        >
          {/* Header */}
          <View style={pickerStyles.header}>
            <Text style={pickerStyles.supportingText}>{supportingText}</Text>
            <View style={pickerStyles.headlineRow}>
              <Text style={pickerStyles.headlineText}>{headlineDate}</Text>
              <IconButton name="edit" disabled accessibilityLabel="Input mode not available" />
            </View>
          </View>

          {/* Divider below header */}
          <Divider />

          {/* Body: calendar or year picker */}
          {view === 'calendar' ? (
            <CalendarGrid
              viewYear={viewYear}
              viewMonth={viewMonth}
              selectedDate={selectedDate}
              today={today}
              minimumDate={minimumDate}
              maximumDate={maximumDate}
              onSelectDate={handleSelectDate}
              onPrevMonth={handlePrevMonth}
              onNextMonth={handleNextMonth}
              onOpenYearPicker={handleOpenYearPicker}
            />
          ) : (
            <YearPicker
              selectedYear={viewYear}
              currentYear={today.getFullYear()}
              minimumDate={minimumDate}
              maximumDate={maximumDate}
              onSelectYear={handleSelectYear}
            />
          )}

          {/* Bottom bar: actions */}
          <View style={pickerStyles.bottomBar}>
            <Button variant="text" onPress={handleDismiss}>
              <ButtonLabel>Cancel</ButtonLabel>
            </Button>
            <Button variant="text" onPress={handleConfirm}>
              <ButtonLabel>OK</ButtonLabel>
            </Button>
          </View>
        </Animated.View>
      </View>
    </Modal>
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

  // ---- Container (surfaceContainerHigh, 28dp corners, level3 elevation) ----
  // M3 spec: 360dp x 524dp, md.sys.shape.corner.extra-large, md.sys.elevation.level3
  container: {
    width: CONTAINER_WIDTH,
    height: CONTAINER_HEIGHT,
    backgroundColor: theme.scheme.surfaceContainerHigh,
    borderRadius: theme.shape.xlarge,
    ...theme.elevation[3],
    overflow: 'hidden',
  },

  // ---- Header (120dp height) ----
  header: {
    height: HEADER_HEIGHT,
    paddingHorizontal: HEADER_PADDING_HORIZONTAL,
    paddingTop: HEADER_PADDING_TOP,
    paddingBottom: HEADER_PADDING_BOTTOM,
    justifyContent: 'flex-end',
  },

  // M3 spec: Supporting text — 14pt/20pt, 500 weight, 0.1pt tracking → labelLarge
  // Color: #49454F → onSurfaceVariant
  supportingText: {
    ...theme.typography.label.large,
    color: theme.scheme.onSurfaceVariant,
    marginBottom: 24,
  },

  // Headline row: date text + mode toggle icon
  headlineRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // M3 spec: Headline — 32pt/40pt, 400 weight, 0 tracking → headlineLarge
  // Color: #49454F → onSurfaceVariant
  headlineText: {
    ...theme.typography.headline.large,
    color: theme.scheme.onSurfaceVariant,
  },

  // ---- Calendar body ----
  calendarBody: {
    flex: 1,
    paddingHorizontal: BODY_PADDING_HORIZONTAL,
    paddingTop: BODY_PADDING_TOP,
  },

  // Navigation row: month/year label + prev/next buttons
  navRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: NAV_ROW_HEIGHT,
  },

  monthYearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    overflow: 'hidden',
  },

  // M3 spec: Month/year uses bodyLarge (16pt/24pt, 400wt, 0.5pt tracking)
  // Color: onSurfaceVariant
  monthYearText: {
    ...theme.typography.body.large,
    color: theme.scheme.onSurfaceVariant,
    marginLeft: 12,
  },

  monthYearIcon: {
    color: theme.scheme.onSurfaceVariant,
  },

  navButtons: {
    flexDirection: 'row',
  },

  // Weekday labels row
  weekdayRow: {
    flexDirection: 'row',
    height: WEEKDAY_ROW_HEIGHT,
    alignItems: 'center',
  },

  weekdayCell: {
    width: CELL_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // M3 spec: Weekdays — 16pt/24pt, 400 weight, 0.5pt tracking → bodyLarge
  // Color: #1D1B20 → onSurface
  weekdayText: {
    ...theme.typography.body.large,
    color: theme.scheme.onSurface,
    textAlign: 'center',
  },

  // Date grid: 7 columns, flexWrap
  dateGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  // Date cell wrapper: CELL_WIDTH wide, DATE_ROW_HEIGHT tall
  dateCellWrapper: {
    width: CELL_WIDTH,
    height: DATE_ROW_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Date cell: 40dp x 40dp, full corners (circle)
  // M3 spec: md.sys.shape.corner.full
  dateCell: {
    width: DATE_CELL_SIZE,
    height: DATE_CELL_SIZE,
    borderRadius: theme.shape.full,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  // Selected date: primary background
  // M3 spec: #6750A4 → primary
  dateCellSelected: {
    backgroundColor: theme.scheme.primary,
  },

  // Today (unselected): primary outline, 1dp width
  // M3 spec: #6750A4, 1dp
  dateCellToday: {
    borderWidth: TODAY_OUTLINE_WIDTH,
    borderColor: theme.scheme.primary,
  },

  // State layer for date cells: 40dp x 40dp, full corners
  dateCellStateLayer: {
    borderRadius: theme.shape.full,
  },

  // M3 spec: Date label text — 16pt/24pt, 400wt, 0.5pt tracking → bodyLarge
  // Unselected: #1D1B20 → onSurface
  dateCellText: {
    ...theme.typography.body.large,
    color: theme.scheme.onSurface,
    textAlign: 'center',
  },

  // Selected: #FFFFFF → onPrimary
  dateCellTextSelected: {
    color: theme.scheme.onPrimary,
  },

  // Today: #6750A4 → primary
  dateCellTextToday: {
    color: theme.scheme.primary,
  },

  // Disabled date text
  dateCellTextDisabled: {
    opacity: theme.state.disabledContent,
  },

  // ---- Year picker ----
  yearPickerScroll: {
    flex: 1,
  },

  yearPickerContent: {
    padding: YEAR_GRID_PADDING,
  },

  yearGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: YEAR_CELL_GAP_VERTICAL,
  },

  yearCellWrapper: {
    width: '33.33%',
    alignItems: 'center',
  },

  // Year cell: 72dp x 36dp, full corners
  // M3 spec: md.sys.shape.corner.full
  yearCell: {
    width: YEAR_CELL_WIDTH,
    height: YEAR_CELL_HEIGHT,
    borderRadius: theme.shape.full,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  // Selected year: primary background
  // M3 spec: #6750A4 → primary
  yearCellSelected: {
    backgroundColor: theme.scheme.primary,
  },

  // Current year (unselected): primary outline
  yearCellCurrent: {
    borderWidth: TODAY_OUTLINE_WIDTH,
    borderColor: theme.scheme.primary,
  },

  // Year state layer: 72dp x 36dp, full corners
  yearCellStateLayer: {
    borderRadius: theme.shape.full,
  },

  // M3 spec: Year label text — 16pt/24pt, 400wt, 0.5pt tracking → bodyLarge
  // Unselected: #49454F → onSurfaceVariant
  yearCellText: {
    ...theme.typography.body.large,
    color: theme.scheme.onSurfaceVariant,
    textAlign: 'center',
  },

  // Selected year text: #FFFFFF → onPrimary
  yearCellTextSelected: {
    color: theme.scheme.onPrimary,
  },

  // Current year text (unselected): primary
  yearCellTextCurrent: {
    color: theme.scheme.primary,
  },

  // ---- Bottom bar: actions ----
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
  },
}));

// =============================================================================
// Exports
// =============================================================================

export type { DatePickerProps };
export { DatePicker };
