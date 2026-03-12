import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-material-design/ui/text';
import { TimePicker, type TimeValue } from 'react-native-material-design/ui/time-picker';
import { StyleSheet } from 'react-native-unistyles';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  initialMode: {
    type: 'select',
    label: 'Initial mode',
    options: ['dial', 'input'],
    default: 'dial',
  },
  is24Hour: { type: 'switch', label: '24-hour', default: false },
  show: { type: 'action', label: 'Show time picker' },
} as const satisfies ConfigSchema;

export default function TimePickerScreen() {
  const config = useConfig(schema);
  const v = config.values;
  const [open, setOpen] = React.useState(false);
  const [selectedTime, setSelectedTime] = React.useState<TimeValue>({ hours: 7, minutes: 30 });

  config.setAction('show', () => setOpen(true));

  const formatTime = (time: TimeValue) => {
    const h = time.hours;
    const m = time.minutes.toString().padStart(2, '0');
    if (v.is24Hour) {
      return `${h.toString().padStart(2, '0')}:${m}`;
    }
    const period = h >= 12 ? 'PM' : 'AM';
    const display = h % 12 || 12;
    return `${display}:${m} ${period}`;
  };

  return (
    <View style={styles.screen}>
      <DemoPage
        title="Time Pickers"
        description="Allow people to enter a specific time value"
        schema={schema}
        config={config}
        preview={() => (
          <View style={styles.preview}>
            <Text variant="body" size="medium" style={styles.timeDisplay}>
              Selected: {formatTime(selectedTime)}
            </Text>
            <Text variant="body" size="small" style={styles.hint}>
              Use the &quot;Show time picker&quot; button below
            </Text>
          </View>
        )}
      />

      <TimePicker
        open={open}
        onOpenChange={setOpen}
        onConfirm={(time) => {
          setSelectedTime(time);
        }}
        value={selectedTime}
        is24Hour={v.is24Hour}
        initialMode={v.initialMode}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  screen: {
    flex: 1,
  },
  preview: {
    alignItems: 'center',
    gap: 8,
  },
  timeDisplay: {
    color: theme.scheme.onSurface,
  },
  hint: {
    color: theme.scheme.onSurfaceVariant,
    fontStyle: 'italic',
  },
}));
