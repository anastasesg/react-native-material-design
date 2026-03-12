import React from 'react';
import { Switch, SwitchLabel, SwitchToggle } from 'react-native-material-design/ui/switch';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  icon: {
    type: 'select',
    label: 'Icon',
    options: ['none', 'selected', 'both'],
    default: 'none',
  },
  disabled: { type: 'switch', label: 'Disabled', default: false },
  label: { type: 'text', label: 'Label', default: 'Wi-Fi' },
} as const satisfies ConfigSchema;

export default function SwitchScreen() {
  const config = useConfig(schema);

  return (
    <DemoPage
      title="Switch"
      description="Toggle the selection of an item on or off"
      schema={schema}
      config={config}
      preview={(v) => (
        <Switch defaultSelected={false} icon={v.icon} disabled={v.disabled}>
          <SwitchToggle />
          <SwitchLabel>{v.label}</SwitchLabel>
        </Switch>
      )}
    />
  );
}
