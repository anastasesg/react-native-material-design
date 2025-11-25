import React from 'react';
import { View } from 'react-native';
import {
  Dialog,
  DialogAction,
  DialogActions,
  DialogContent,
  DialogDivider,
  DialogHeadline,
  DialogIcon,
} from 'react-native-material-design/ui/dialog';
import { Text } from 'react-native-material-design/ui/text';
import { StyleSheet } from 'react-native-unistyles';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  variant: {
    type: 'select',
    label: 'Variant',
    options: ['basic', 'full-screen'],
    default: 'basic',
  },
  icon: { type: 'switch', label: 'Icon', default: false },
  headline: { type: 'text', label: 'Headline', default: 'Dialog title' },
  content: { type: 'text', label: 'Content', default: 'Dialog content goes here.' },
  divider: { type: 'switch', label: 'Divider', default: false },
  show: { type: 'action', label: 'Show dialog' },
} as const satisfies ConfigSchema;

export default function DialogScreen() {
  const config = useConfig(schema);
  const v = config.values;
  const [visible, setVisible] = React.useState(false);

  config.setAction('show', () => setVisible(true));

  const isFullScreen = v.variant === 'full-screen';

  return (
    <View style={styles.screen}>
      <DemoPage
        title="Dialogs"
        description="Provide important prompts in a user flow"
        schema={schema}
        config={config}
        preview={() => (
          <Text variant="body" size="small" style={styles.hint}>
            Use the &quot;Show dialog&quot; button below
          </Text>
        )}
      />

      <Dialog variant={isFullScreen ? 'full-screen' : undefined} visible={visible} onDismiss={() => setVisible(false)}>
        {v.icon && !isFullScreen && <DialogIcon name="info" />}
        <DialogHeadline>{v.headline}</DialogHeadline>
        {isFullScreen && <DialogAction onPress={() => setVisible(false)}>Save</DialogAction>}
        {v.divider && <DialogDivider />}
        <DialogContent>
          <Text variant="body" size="medium" style={styles.dialogBody}>
            {v.content}
          </Text>
        </DialogContent>
        {!isFullScreen && (
          <DialogActions>
            <DialogAction onPress={() => setVisible(false)}>Cancel</DialogAction>
            <DialogAction onPress={() => setVisible(false)}>Confirm</DialogAction>
          </DialogActions>
        )}
      </Dialog>
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
  dialogBody: {
    color: theme.scheme.onSurfaceVariant,
  },
}));
