import React from 'react';
import { View } from 'react-native';
import { Snackbar } from 'react-native-material-design/ui/snackbar';
import { Text } from 'react-native-material-design/ui/text';
import { StyleSheet } from 'react-native-unistyles';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  message: { type: 'text', label: 'Message', default: 'Item archived' },
  action: { type: 'text', label: 'Action', default: 'Undo' },
  showClose: { type: 'switch', label: 'Close button', default: false },
  duration: {
    type: 'number',
    label: 'Duration (ms)',
    min: 2000,
    max: 10000,
    step: 1000,
    default: 4000,
  },
  show: { type: 'action', label: 'Show snackbar' },
} as const satisfies ConfigSchema;

export default function SnackbarScreen() {
  const config = useConfig(schema);
  const v = config.values;
  const [visible, setVisible] = React.useState(false);

  config.setAction('show', () => setVisible(true));

  return (
    <View style={styles.screen}>
      <DemoPage
        title="Snackbar"
        description="Show short updates about app processes at the bottom of the screen"
        schema={schema}
        config={config}
        preview={() => (
          <Text variant="body" size="small" style={styles.hint}>
            Use the &quot;Show snackbar&quot; button below
          </Text>
        )}
      />

      <Snackbar
        message={v.message}
        action={v.action || undefined}
        onAction={() => setVisible(false)}
        showClose={v.showClose}
        open={visible}
        onOpenChange={setVisible}
        duration={v.action ? 0 : v.duration}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  screen: {
    flex: 1,
  },
  hint: {
    color: theme.scheme.onSurfaceVariant,
    fontStyle: 'italic',
  },
}));
