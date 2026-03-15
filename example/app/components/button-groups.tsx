import React from 'react';
import { Button, ButtonLabel } from 'react-native-material-design/ui/button';
import { ButtonGroup } from 'react-native-material-design/ui/button-group';
import { IconButton, IconButtonIcon } from 'react-native-material-design/ui/icon-button';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  variant: {
    type: 'select',
    label: 'Variant',
    options: ['standard', 'connected'],
    default: 'standard',
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
  selectionMode: {
    type: 'select',
    label: 'Selection mode',
    options: ['single', 'multi'],
    default: 'single',
  },
  buttonCount: { type: 'number', label: 'Button count', min: 2, max: 6, default: 3 },
} as const satisfies ConfigSchema;

const ICONS = [
  'format_align_left',
  'format_align_center',
  'format_align_right',
  'format_align_justify',
  'format_indent_increase',
  'format_indent_decrease',
] as const;

export default function ButtonGroupsScreen() {
  const config = useConfig(schema);

  return (
    <DemoPage
      title="Button groups"
      description="Organize buttons and add interactions between them"
      schema={schema}
      config={config}
      preview={(v) => (
        <ButtonGroup
          variant={v.variant}
          size={v.size}
          shape={v.shape}
          disabled={v.disabled}
          {...(v.variant === 'connected' ? { selectionMode: v.selectionMode } : {})}
        >
          {Array.from({ length: v.buttonCount }, (_, i) =>
            v.variant === 'connected' ? (
              <IconButton key={i} variant="tonal" accessibilityLabel={ICONS[i % ICONS.length]}>
                <IconButtonIcon name={ICONS[i % ICONS.length]} />
              </IconButton>
            ) : (
              <Button key={i} variant={i === 0 ? 'filled' : i === 1 ? 'tonal' : 'outlined'}>
                <ButtonLabel>{`Option ${i + 1}`}</ButtonLabel>
              </Button>
            ))}
        </ButtonGroup>
      )}
    />
  );
}
