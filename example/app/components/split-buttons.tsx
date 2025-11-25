import React from 'react';
import {
  SplitButton,
  SplitButtonIcon,
  SplitButtonLabel,
  SplitButtonLeading,
  SplitButtonTrailing,
} from 'react-native-material-design/ui/split-button';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  variant: {
    type: 'select',
    label: 'Variant',
    options: ['filled', 'elevated', 'tonal', 'outlined'],
    default: 'filled',
  },
  size: {
    type: 'slider',
    label: 'Size',
    stops: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
    default: 'medium',
  },
  disabled: { type: 'switch', label: 'Disabled', default: false },
  icon: { type: 'switch', label: 'Show icon', default: true },
  label: { type: 'text', label: 'Label', default: 'Create' },
} as const satisfies ConfigSchema;

export default function SplitButtonsScreen() {
  const config = useConfig(schema);

  return (
    <DemoPage
      title="Split buttons"
      description="Open a menu for more options related to an action"
      schema={schema}
      config={config}
      preview={(v) => (
        <SplitButton variant={v.variant} size={v.size} disabled={v.disabled}>
          <SplitButtonLeading>
            {v.icon && <SplitButtonIcon name="add" />}
            <SplitButtonLabel>{v.label}</SplitButtonLabel>
          </SplitButtonLeading>
          <SplitButtonTrailing />
        </SplitButton>
      )}
    />
  );
}
