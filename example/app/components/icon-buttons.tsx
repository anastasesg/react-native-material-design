import React from 'react';
import { IconButton, IconButtonIcon } from 'react-native-material-design/ui/icon-button';

import { DemoPage } from '../../components/demo/demo-page';
import { IconPicker } from '../../components/demo/icon-picker';
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
  width: {
    type: 'select',
    label: 'Width',
    options: ['narrow', 'regular', 'wide'],
    default: 'regular',
  },
  disabled: { type: 'switch', label: 'Disabled', default: false },
  toggle: { type: 'switch', label: 'Toggle mode', default: false },
  iconName: {
    type: 'custom',
    label: 'Icon name',
    default: 'stars',
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
          variant={v.variant}
          size={v.size}
          shape={v.shape}
          width={v.width}
          disabled={v.disabled}
          toggle={v.toggle}
          defaultSelected={false}
          accessibilityLabel={v.iconName}
          tooltip={v.tooltip || undefined}
        >
          <IconButtonIcon
            name={v.iconName as any}
            selectedName={v.selectedIconName ? (v.selectedIconName as any) : undefined}
          />
        </IconButton>
      )}
    />
  );
}
