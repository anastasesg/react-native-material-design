import React from 'react';
import { View } from 'react-native';
import { Button, ButtonLabel } from 'react-native-material-design/ui/button';
import { Divider } from 'react-native-material-design/ui/divider';
import {
  SideSheet,
  SideSheetActions,
  SideSheetBack,
  SideSheetClose,
  SideSheetContent,
  SideSheetHeader,
  SideSheetHeadline,
} from 'react-native-material-design/ui/side-sheets';
import { Text } from 'react-native-material-design/ui/text';
import { StyleSheet } from 'react-native-unistyles';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  variant: {
    type: 'select',
    label: 'Variant',
    options: ['standard', 'modal'],
    default: 'modal',
  },
  headline: { type: 'text', label: 'Headline', default: 'Filters' },
  closeButton: { type: 'switch', label: 'Close button', default: true },
  backButton: { type: 'switch', label: 'Back button', default: false },
  showActions: { type: 'switch', label: 'Actions', default: false },
  actionDivider: { type: 'switch', label: 'Action divider', default: false },
  show: { type: 'action', label: 'Show side sheet' },
} as const satisfies ConfigSchema;

export default function SideSheetsScreen() {
  const config = useConfig(schema);
  const v = config.values;
  const [open, setOpen] = React.useState(false);

  config.setAction('show', () => setOpen(true));

  const isStandard = v.variant === 'standard';
  const isModal = !isStandard;

  const sheet = (
    <SideSheet variant={v.variant} open={open} onOpenChange={setOpen}>
      <SideSheetHeader>
        {isModal && v.backButton ? <SideSheetBack onPress={() => setOpen(false)} /> : null}
        <SideSheetHeadline>{v.headline}</SideSheetHeadline>
        {v.closeButton ? <SideSheetClose /> : null}
      </SideSheetHeader>
      <SideSheetContent>
        <View style={styles.sheetContent}>
          <Text variant="body" size="medium" style={styles.sheetBody}>
            This is an example of content inside a side sheet.
          </Text>
          <Divider />
          <Text variant="body" size="medium" style={styles.sheetBody}>
            Side sheets can contain filters, details, or supplementary content.
          </Text>
        </View>
      </SideSheetContent>
      {v.showActions ? (
        <SideSheetActions showDivider={v.actionDivider}>
          <Button variant="text" size="small" onPress={() => setOpen(false)}>
            <ButtonLabel>Cancel</ButtonLabel>
          </Button>
          <Button variant="filled" size="small" onPress={() => setOpen(false)}>
            <ButtonLabel>Save</ButtonLabel>
          </Button>
        </SideSheetActions>
      ) : null}
    </SideSheet>
  );

  return (
    <View style={styles.screen}>
      <View style={styles.mainContent}>
        <DemoPage
          title="Side Sheets"
          description="Show secondary content anchored to the side of the screen"
          schema={schema}
          config={config}
          preview={() => (
            <Text variant="body" size="small" style={styles.hint}>
              Use the &quot;Show side sheet&quot; button below
            </Text>
          )}
        />
        {isStandard && open && sheet}
      </View>
      {isModal && sheet}
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  screen: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    flexDirection: 'row',
  },
  hint: {
    color: theme.scheme.onSurfaceVariant,
    fontStyle: 'italic',
  },
  sheetContent: {
    gap: 16,
  },
  sheetBody: {
    color: theme.scheme.onSurfaceVariant,
  },
}));
