import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-material-design/ui/icon-button';
import { Text } from 'react-native-material-design/ui/text';
import { PlainTooltip, RichTooltip } from 'react-native-material-design/ui/tooltips';
import { StyleSheet } from 'react-native-unistyles';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const noop = () => {};

const schema = {
  type: {
    type: 'select',
    label: 'Type',
    options: ['plain', 'rich'],
    default: 'plain',
  },
  message: { type: 'text', label: 'Message', default: 'Tooltip message' },
  subhead: { type: 'text', label: 'Subhead', default: 'Subhead' },
  supporting: { type: 'text', label: 'Supporting text', default: 'Supporting text here' },
  actions: {
    type: 'select',
    label: 'Actions',
    options: ['none', 'primary', 'both'],
    default: 'none',
  },
} as const satisfies ConfigSchema;

export default function TooltipsScreen() {
  const config = useConfig(schema);
  const v = config.values;

  const primaryAction = v.actions !== 'none' ? { label: 'Learn more', onPress: noop } : undefined;
  const secondaryAction = v.actions === 'both' ? { label: 'Dismiss', onPress: noop } : undefined;

  return (
    <DemoPage
      title="Tooltips"
      description="Display brief labels or messages"
      schema={schema}
      config={config}
      preview={() => (
        <View style={styles.previewContent}>
          <Text variant="body" size="small" style={styles.hint}>
            Long press the icon
          </Text>
          {v.type === 'plain' ? (
            <PlainTooltip message={v.message}>
              <IconButton name="favorite" variant="outlined" />
            </PlainTooltip>
          ) : (
            <RichTooltip
              subhead={v.subhead || undefined}
              supportingText={v.supporting}
              primaryAction={primaryAction}
              secondaryAction={secondaryAction}
            >
              <IconButton name="info" variant="outlined" />
            </RichTooltip>
          )}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create((theme) => ({
  previewContent: {
    alignItems: 'center',
    gap: 12,
  },
  hint: {
    color: theme.scheme.onSurfaceVariant,
    fontStyle: 'italic',
  },
}));
