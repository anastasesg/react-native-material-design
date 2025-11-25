import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-material-design/ui/divider';
import { Text } from 'react-native-material-design/ui/text';
import { StyleSheet } from 'react-native-unistyles';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  variant: {
    type: 'select',
    label: 'Variant',
    options: ['fullWidth', 'inset', 'middleInset'],
    default: 'fullWidth',
  },
  orientation: {
    type: 'select',
    label: 'Orientation',
    options: ['horizontal', 'vertical'],
    default: 'horizontal',
  },
} as const satisfies ConfigSchema;

export default function DividerScreen() {
  const config = useConfig(schema);

  return (
    <DemoPage
      title="Divider"
      description="Thin lines that group content in lists or containers"
      schema={schema}
      config={config}
      preview={(v) =>
        v.orientation === 'horizontal' ? (
          <View style={styles.horizontalContainer}>
            <Text variant="body" size="medium">
              Item above
            </Text>
            <Divider variant={v.variant} />
            <Text variant="body" size="medium">
              Item below
            </Text>
          </View>
        ) : (
          <View style={styles.verticalContainer}>
            <Text variant="body" size="medium">
              Left
            </Text>
            <Divider variant={v.variant} orientation="vertical" />
            <Text variant="body" size="medium">
              Right
            </Text>
          </View>
        )
      }
    />
  );
}

const styles = StyleSheet.create(() => ({
  horizontalContainer: {
    width: '100%',
    gap: 16,
    paddingHorizontal: 16,
  },
  verticalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    gap: 16,
  },
}));
