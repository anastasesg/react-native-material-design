import React from 'react';
import { View } from 'react-native';
import { Button, ButtonLabel } from 'react-native-material-design/ui/button';
import { IconButton, IconButtonIcon } from 'react-native-material-design/ui/icon-button';
import { Text } from 'react-native-material-design/ui/text';
import {
  Tooltip,
  TooltipActions,
  TooltipContent,
  TooltipSubhead,
  TooltipTrigger,
} from 'react-native-material-design/ui/tooltips';
import { StyleSheet } from 'react-native-unistyles';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const noop = () => {};

const schema = {
  variant: {
    type: 'select',
    label: 'Variant',
    options: ['plain', 'rich'],
    default: 'plain',
  },
  content: { type: 'text', label: 'Content', default: 'Tooltip message' },
  subhead: { type: 'text', label: 'Subhead', default: 'Subhead' },
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

  const isRich = v.variant === 'rich';

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
          <Tooltip variant={v.variant}>
            <TooltipTrigger>
              <IconButton variant="outlined" accessibilityLabel={isRich ? 'Info' : 'Favorite'}>
                <IconButtonIcon name={isRich ? 'info' : 'favorite'} />
              </IconButton>
            </TooltipTrigger>
            {isRich && v.subhead ? <TooltipSubhead>{v.subhead}</TooltipSubhead> : null}
            <TooltipContent>{v.content}</TooltipContent>
            {isRich && v.actions !== 'none' && (
              <TooltipActions>
                {v.actions === 'both' && (
                  <Button variant="text" size="small" onPress={noop}>
                    <ButtonLabel>Dismiss</ButtonLabel>
                  </Button>
                )}
                <Button variant="text" size="small" onPress={noop}>
                  <ButtonLabel>Learn more</ButtonLabel>
                </Button>
              </TooltipActions>
            )}
          </Tooltip>
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
