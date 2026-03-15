import React from 'react';
import {
  SplitButton,
  SplitButtonIcon,
  SplitButtonLabel,
  SplitButtonLeading,
  SplitButtonTrailing,
} from 'react-native-material-design/ui/split-button';

import { DemoPage } from '../../components/demo/demo-page';
import { IconPicker } from '../../components/demo/icon-picker';
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
  icon: {
    type: 'select',
    label: 'Icon',
    options: ['leading', 'icon-only', 'none'],
    default: 'leading',
  },
  iconName: {
    type: 'custom',
    label: 'Icon name',
    default: 'add',
    render: (value: string, onChange: (v: string) => void) => (
      <IconPicker value={value} onChange={onChange} placeholder="Search icons..." />
    ),
  },
  label: { type: 'text', label: 'Label', default: 'Create' },
  toggle: { type: 'switch', label: 'Toggle mode (leading)', default: false },
  open: { type: 'switch', label: 'Controlled open (trailing)', default: false },
  shapeMorph: { type: 'switch', label: 'Shape morph on press', default: true },
} as const satisfies ConfigSchema;

const NO_SHAPE_MORPH = {} as const;

export default function SplitButtonsScreen() {
  const config = useConfig(schema);

  return (
    <DemoPage
      title="Split buttons"
      description="Open a menu for more options related to an action"
      schema={schema}
      config={config}
      preview={(v) => {
        const showIcon = v.icon !== 'none';
        const iconOnly = v.icon === 'icon-only';
        const interactionShapes = v.shapeMorph ? undefined : NO_SHAPE_MORPH;

        return (
          <SplitButton variant={v.variant} size={v.size} disabled={v.disabled}>
            <SplitButtonLeading
              toggle={v.toggle}
              defaultSelected={false}
              interactionShapes={interactionShapes}
              accessibilityLabel={iconOnly ? v.iconName : undefined}
            >
              {showIcon && <SplitButtonIcon name={v.iconName as any} />}
              {!iconOnly && <SplitButtonLabel>{v.label}</SplitButtonLabel>}
            </SplitButtonLeading>
            <SplitButtonTrailing
              open={v.open || undefined}
              interactionShapes={interactionShapes}
              accessibilityLabel={`More ${v.label.toLowerCase()} options`}
            />
          </SplitButton>
        );
      }}
    />
  );
}
