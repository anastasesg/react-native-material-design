import React from 'react';
import { View } from 'react-native';
import { BottomSheet } from 'react-native-material-design/ui/bottom-sheet';
import { Divider } from 'react-native-material-design/ui/divider';
import { Text } from 'react-native-material-design/ui/text';
import { StyleSheet } from 'react-native-unistyles';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const SNAP_PRESETS: Record<string, number[]> = {
  half: [0.5],
  'half+full': [0.5, 1],
  'third+two-thirds+full': [0.33, 0.66, 1],
};

const schema = {
  variant: {
    type: 'select',
    label: 'Variant',
    options: ['standard', 'modal'],
    default: 'modal',
  },
  dragHandle: { type: 'switch', label: 'Drag handle', default: true },
  snapPoints: {
    type: 'select',
    label: 'Snap points',
    options: ['half', 'half+full', 'third+two-thirds+full'],
    default: 'half',
  },
  show: { type: 'action', label: 'Show bottom sheet' },
} as const satisfies ConfigSchema;

export default function BottomSheetsScreen() {
  const config = useConfig(schema);
  const v = config.values;
  const [open, setOpen] = React.useState(false);

  config.setAction('show', () => setOpen(true));

  return (
    <View style={styles.screen}>
      <DemoPage
        title="Bottom Sheets"
        description="Show secondary content anchored to the bottom of the screen"
        schema={schema}
        config={config}
        preview={() => (
          <Text variant="body" size="small" style={styles.hint}>
            Use the &quot;Show bottom sheet&quot; button below
          </Text>
        )}
      />

      <BottomSheet
        variant={v.variant}
        open={open}
        onOpenChange={setOpen}
        dragHandle={v.dragHandle}
        snapPoints={SNAP_PRESETS[v.snapPoints]}
        initialSnapIndex={0}
      >
        <View style={styles.sheetContent}>
          <Text variant="title" size="medium">
            Sheet Content
          </Text>
          <Text variant="body" size="medium" style={styles.sheetBody}>
            This is an example of content inside a bottom sheet.
          </Text>
          <Divider />
          <Text variant="body" size="medium" style={styles.sheetBody}>
            Drag the handle to resize or swipe down to dismiss.
          </Text>
        </View>
      </BottomSheet>
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
  sheetContent: {
    padding: 24,
    gap: 16,
  },
  sheetBody: {
    color: theme.scheme.onSurfaceVariant,
  },
}));
