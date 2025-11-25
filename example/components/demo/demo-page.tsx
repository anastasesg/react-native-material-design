import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-material-design/ui/text';
import { StyleSheet } from 'react-native-unistyles';

import { ConfigPanel } from './config-panel';
import { DemoPreview } from './demo-preview';
import type { ConfigSchema, ConfigValues, UseConfigReturn } from './types';

// ---------------------------------------------------------------------------
// DemoPage
// ---------------------------------------------------------------------------

type DemoPageProps<S extends ConfigSchema> = {
  title: string;
  description: string;
  schema: S;
  config: UseConfigReturn<S>;
  preview: (values: ConfigValues<S>) => React.ReactNode;
};

export function DemoPage<S extends ConfigSchema>({ title, description, schema, config, preview }: DemoPageProps<S>) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text variant="headline" size="small">
          {title}
        </Text>
        <Text variant="body" size="large" style={styles.description}>
          {description}
        </Text>
      </View>

      <DemoPreview>{preview(config.values)}</DemoPreview>

      <ConfigPanel schema={schema} config={config} />
    </ScrollView>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    backgroundColor: theme.scheme.background,
  },
  content: {
    paddingBottom: rt.insets.bottom + 24,
  },
  header: {
    padding: 20,
    gap: 4,
  },
  description: {
    color: theme.scheme.onSurfaceVariant,
  },
}));
