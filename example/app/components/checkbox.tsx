import React from 'react';
import { Checkbox, CheckboxLabel, CheckboxToggle } from 'react-native-material-design/ui/checkbox';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  value: {
    type: 'select',
    label: 'Value',
    options: ['unselected', 'selected', 'indeterminate'],
    default: 'unselected',
  },
  error: { type: 'switch', label: 'Error', default: false },
  disabled: { type: 'switch', label: 'Disabled', default: false },
  label: { type: 'text', label: 'Label', default: 'Option' },
} as const satisfies ConfigSchema;

export default function CheckboxScreen() {
  const config = useConfig(schema);

  return (
    <DemoPage
      title="Checkbox"
      description="Select one or more items from a list, or turn an item on or off"
      schema={schema}
      config={config}
      preview={(v) => (
        <Checkbox value={v.value} error={v.error} disabled={v.disabled}>
          <CheckboxToggle />
          <CheckboxLabel>{v.label}</CheckboxLabel>
        </Checkbox>
      )}
    />
  );
}
