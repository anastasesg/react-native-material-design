import React from 'react';
import { Button, ButtonIcon, ButtonLabel } from 'react-native-material-design/ui/button';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  variant: {
    type: 'select',
    label: 'Variant',
    options: ['filled', 'elevated', 'tonal', 'outlined', 'text'],
    default: 'filled',
  },
  size: {
    type: 'slider',
    label: 'Size',
    stops: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
    default: 'medium',
  },
  shape: {
    type: 'select',
    label: 'Shape',
    options: ['rounded', 'square'],
    default: 'rounded',
  },
  disabled: { type: 'switch', label: 'Disabled', default: false },
  toggle: { type: 'switch', label: 'Toggle mode', default: false },
  icon: { type: 'switch', label: 'Show icon', default: true },
  label: { type: 'text', label: 'Label', default: 'Label' },
} as const satisfies ConfigSchema;

export default function ButtonsScreen() {
  const config = useConfig(schema);

  return (
    <DemoPage
      title="Buttons"
      description="Prompt most actions in a UI"
      schema={schema}
      config={config}
      preview={(v) => (
        <Button
          variant={v.variant}
          size={v.size}
          shape={v.shape}
          disabled={v.disabled}
          toggle={v.toggle}
          defaultSelected={false}
        >
          {v.icon && <ButtonIcon name="stars" variant="outlined" />}
          <ButtonLabel>{v.label}</ButtonLabel>
        </Button>
      )}
    />
  );
}
