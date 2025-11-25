import React from 'react';
import { Chip, ChipIcon, ChipLabel, ChipTrailingIcon } from 'react-native-material-design/ui/chips';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  type: {
    type: 'select',
    label: 'Type',
    options: ['assist', 'filter', 'input', 'suggestion'],
    default: 'assist',
  },
  elevation: {
    type: 'select',
    label: 'Elevation',
    options: ['flat', 'elevated'],
    default: 'flat',
  },
  disabled: { type: 'switch', label: 'Disabled', default: false },
  selected: { type: 'switch', label: 'Selected', default: false },
  icon: { type: 'switch', label: 'Show icon', default: false },
  trailing: { type: 'switch', label: 'Show trailing icon', default: false },
  label: { type: 'text', label: 'Label', default: 'Chip' },
} as const satisfies ConfigSchema;

export default function ChipsScreen() {
  const config = useConfig(schema);

  return (
    <DemoPage
      title="Chips"
      description="Enter info, make selections, filter, or trigger actions"
      schema={schema}
      config={config}
      preview={(v) => (
        <Chip
          type={v.type}
          elevation={v.elevation}
          disabled={v.disabled}
          {...(v.type === 'filter' || v.type === 'input' ? { selected: v.selected } : {})}
        >
          {v.icon && <ChipIcon name="stars" variant="outlined" />}
          <ChipLabel>{v.label}</ChipLabel>
          {v.trailing && v.type === 'input' && <ChipTrailingIcon name="close" />}
        </Chip>
      )}
    />
  );
}
