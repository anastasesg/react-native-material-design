import React from 'react';
import { IconButton } from 'react-native-material-design/ui/icon-button';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  variant: {
    type: 'select',
    label: 'Variant',
    options: ['filled', 'tonal', 'outlined', 'standard'],
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
} as const satisfies ConfigSchema;

export default function IconButtonsScreen() {
  const config = useConfig(schema);

  return (
    <DemoPage
      title="Icon buttons"
      description="Help people take minor actions with one tap"
      schema={schema}
      config={config}
      preview={(v) => (
        <IconButton
          name="stars"
          variant={v.variant}
          size={v.size}
          shape={v.shape}
          disabled={v.disabled}
          toggle={v.toggle}
          defaultSelected={false}
        />
      )}
    />
  );
}
