import React from 'react';
import { ScrollView, View } from 'react-native';
import { FAB } from 'react-native-material-design/ui/fab';
import { Text } from 'react-native-material-design/ui/text';
import { StyleSheet } from 'react-native-unistyles';

import { ConfigPanel } from '../../components/demo/config-panel';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  size: {
    type: 'slider',
    label: 'Size',
    stops: ['small', 'medium', 'large'],
    default: 'medium',
  },
  color: {
    type: 'color',
    label: 'Color',
    options: ['primaryContainer', 'secondaryContainer', 'tertiaryContainer', 'primary', 'secondary', 'tertiary'],
    default: 'primaryContainer',
  },
  disabled: { type: 'switch', label: 'Disabled', default: false },
} as const satisfies ConfigSchema;

export default function FABsScreen() {
  const config = useConfig(schema);
  const v = config.values;

  return (
    <View style={styles.root}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text variant="headline" size="small">
            FABs
          </Text>
          <Text variant="body" size="large" style={styles.description}>
            Floating action buttons for primary actions
          </Text>
        </View>

        <Text variant="body" size="medium" style={styles.hint}>
          Tap the FAB in the bottom-right corner
        </Text>

        <ConfigPanel schema={schema} config={config} />
      </ScrollView>

      <FAB name="add" size={v.size} color={v.color} disabled={v.disabled} style={styles.fab} />
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  root: {
    flex: 1,
    backgroundColor: theme.scheme.background,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: rt.insets.bottom + 100,
  },
  header: {
    padding: 20,
    gap: 4,
  },
  description: {
    color: theme.scheme.onSurfaceVariant,
  },
  hint: {
    paddingHorizontal: 20,
    paddingBottom: 16,
    color: theme.scheme.onSurfaceVariant,
  },
  fab: {
    position: 'absolute',
    bottom: rt.insets.bottom + 16,
    right: rt.insets.right + 16,
  },
}));
