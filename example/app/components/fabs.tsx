import React from 'react';
import { ScrollView, View } from 'react-native';
import { FAB, FABIcon } from 'react-native-material-design/ui/fab';
import { Text } from 'react-native-material-design/ui/text';
import { StyleSheet } from 'react-native-unistyles';

import { ConfigPanel } from '../../components/demo/config-panel';
import { IconPicker } from '../../components/demo/icon-picker';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  size: {
    type: 'slider',
    label: 'Size',
    stops: ['regular', 'medium', 'large'],
    default: 'medium',
  },
  color: {
    type: 'color',
    label: 'Color style',
    options: [
      'primaryContainer',
      'secondaryContainer',
      'tertiaryContainer',
      'primary',
      'secondary',
      'tertiary',
      'surface',
    ],
    default: 'primaryContainer',
  },
  disabled: { type: 'switch', label: 'Disabled', default: false },
  toggle: { type: 'switch', label: 'Toggle mode', default: false },
  iconName: {
    type: 'custom',
    label: 'Icon name',
    default: 'add',
    render: (value: string, onChange: (v: string) => void) => (
      <IconPicker value={value} onChange={onChange} placeholder="Search icons..." />
    ),
  },
  selectedIconName: {
    type: 'custom',
    label: 'Selected icon (toggle)',
    default: '',
    render: (value: string, onChange: (v: string) => void) => (
      <IconPicker value={value} onChange={onChange} placeholder="Search selected icon..." />
    ),
  },
  tooltip: { type: 'text', label: 'Tooltip', default: '' },
  shapeMorph: { type: 'switch', label: 'Shape morph on press', default: true },
} as const satisfies ConfigSchema;

const NO_SHAPE_MORPH = {} as const;

export default function FABsScreen() {
  const config = useConfig(schema);
  const v = config.values;

  const interactionShapes = v.shapeMorph ? undefined : NO_SHAPE_MORPH;

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

        <ConfigPanel schema={schema} config={config} />
      </ScrollView>

      <FAB
        style={styles.fab}
        size={v.size}
        colorStyle={v.color}
        disabled={v.disabled}
        toggle={v.toggle}
        defaultSelected={false}
        interactionShapes={interactionShapes}
        tooltip={v.tooltip || undefined}
        accessibilityLabel={v.tooltip || v.iconName}
      >
        <FABIcon
          name={v.iconName as any}
          selectedName={v.selectedIconName ? (v.selectedIconName as any) : undefined}
          variant="outlined"
        />
      </FAB>
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
    paddingBottom: rt.insets.bottom + 120,
  },
  header: {
    padding: 20,
    gap: 4,
  },
  description: {
    color: theme.scheme.onSurfaceVariant,
  },
  fab: {
    position: 'absolute',
    bottom: rt.insets.bottom + 16,
    right: 16,
  },
}));
