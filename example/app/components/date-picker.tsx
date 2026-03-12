import React from 'react';
import { View } from 'react-native';
import { DatePicker } from 'react-native-material-design/ui/date-picker';
import { Text } from 'react-native-material-design/ui/text';
import { StyleSheet } from 'react-native-unistyles';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  show: { type: 'action', label: 'Show date picker' },
} as const satisfies ConfigSchema;

export default function DatePickerScreen() {
  const config = useConfig(schema);
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  config.setAction('show', () => setOpen(true));

  const formatDate = (date: Date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  return (
    <View style={styles.screen}>
      <DemoPage
        title="Date Pickers"
        description="Allow people to select a date from a calendar"
        schema={schema}
        config={config}
        preview={() => (
          <View style={styles.preview}>
            <Text variant="body" size="medium" style={styles.dateDisplay}>
              Selected: {formatDate(selectedDate)}
            </Text>
            <Text variant="body" size="small" style={styles.hint}>
              Use the &quot;Show date picker&quot; button below
            </Text>
          </View>
        )}
      />

      <DatePicker
        open={open}
        onOpenChange={setOpen}
        onConfirm={(date) => {
          setSelectedDate(date);
        }}
        value={selectedDate}
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
  dateDisplay: {
    color: theme.scheme.onSurface,
  },
  hint: {
    color: theme.scheme.onSurfaceVariant,
    fontStyle: 'italic',
  },
}));
