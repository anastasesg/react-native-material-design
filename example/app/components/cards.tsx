import React from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-material-design/ui/card';
import { Text } from 'react-native-material-design/ui/text';
import { StyleSheet } from 'react-native-unistyles';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  variant: {
    type: 'select',
    label: 'Variant',
    options: ['elevated', 'filled', 'outlined'],
    default: 'elevated',
  },
  actionable: { type: 'switch', label: 'Actionable', default: false },
  disabled: { type: 'switch', label: 'Disabled', default: false },
} as const satisfies ConfigSchema;

export default function CardsScreen() {
  const config = useConfig(schema);

  return (
    <DemoPage
      title="Cards"
      description="Display content and actions about a single subject"
      schema={schema}
      config={config}
      preview={(v) => (
        <Card
          variant={v.variant}
          disabled={v.disabled}
          {...(v.actionable ? { onPress: () => {} } : {})}
          style={styles.card}
        >
          <View style={styles.cardContent}>
            <Text variant="title" size="large">
              Card title
            </Text>
            <Text variant="body" size="medium" style={styles.cardBody}>
              This is some sample content inside the card to demonstrate layout.
            </Text>
          </View>
        </Card>
      )}
    />
  );
}

const styles = StyleSheet.create((theme) => ({
  card: {
    width: '100%',
    maxWidth: 320,
  },
  cardContent: {
    padding: 20,
    gap: 8,
  },
  cardBody: {
    color: theme.scheme.onSurfaceVariant,
  },
}));
