import React from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { FABMenu, FABMenuItem } from 'react-native-material-design/ui/fab-menu';
import { Text } from 'react-native-material-design/ui/text';
import { StyleSheet } from 'react-native-unistyles';

import { ConfigPanel } from '../../components/demo/config-panel';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const ITEMS = [
  { name: 'edit', label: 'Edit' },
  { name: 'share', label: 'Share' },
  { name: 'delete', label: 'Delete' },
  { name: 'content_copy', label: 'Copy' },
  { name: 'bookmark', label: 'Bookmark' },
  { name: 'download', label: 'Download' },
] as const;

const schema = {
  color: {
    type: 'color',
    label: 'Color',
    options: ['primary', 'secondary', 'tertiary'],
    default: 'primary',
  },
  size: {
    type: 'slider',
    label: 'Size',
    stops: ['small', 'medium', 'large'],
    default: 'small',
  },
  itemCount: {
    type: 'number',
    label: 'Item count',
    min: 2,
    max: 6,
    default: 3,
  },
} as const satisfies ConfigSchema;

export default function FABMenuScreen() {
  const config = useConfig(schema);
  const v = config.values;

  const items = ITEMS.slice(0, v.itemCount);

  return (
    <View style={styles.root}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text variant="headline" size="small">
            FAB Menu
          </Text>
          <Text variant="body" size="large" style={styles.description}>
            Opens from a FAB to display multiple related actions
          </Text>
        </View>

        <Text variant="body" size="medium" style={styles.hint}>
          Tap the FAB in the bottom-right corner to open the menu
        </Text>

        <ConfigPanel schema={schema} config={config} />
      </ScrollView>

      <FABMenu key={`${v.color}-${v.size}-${v.itemCount}`} icon="add" color={v.color} size={v.size} style={styles.fab}>
        {items.map((item) => (
          <FABMenuItem
            key={item.name}
            name={item.name as any}
            label={item.label}
            onPress={() => Alert.alert(`${item.label} pressed`)}
          />
        ))}
      </FABMenu>
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
