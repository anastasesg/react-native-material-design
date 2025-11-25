import React from 'react';
import { View } from 'react-native';
import { Badge } from 'react-native-material-design/ui/badge';
import { IconButton } from 'react-native-material-design/ui/icon-button';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  type: {
    type: 'select',
    label: 'Type',
    options: ['small', 'large'],
    default: 'large',
  },
  count: { type: 'number', label: 'Count', min: 0, max: 9999, default: 3 },
  visible: { type: 'switch', label: 'Visible', default: true },
} as const satisfies ConfigSchema;

export default function BadgesScreen() {
  const config = useConfig(schema);

  return (
    <DemoPage
      title="Badges"
      description="Show notifications, counts, or status info"
      schema={schema}
      config={config}
      preview={(v) => (
        <View style={{ overflow: 'visible', padding: 12 }}>
          <Badge type={v.type} count={v.type === 'large' ? v.count : undefined} visible={v.visible}>
            <IconButton name="notifications" variant="standard" />
          </Badge>
        </View>
      )}
    />
  );
}
