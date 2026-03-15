import React from 'react';
import { Button, ButtonIcon, ButtonLabel } from 'react-native-material-design/ui/button';

import { DemoPage } from '../../components/demo/demo-page';
import { IconPicker } from '../../components/demo/icon-picker';
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
  icon: {
    type: 'select',
    label: 'Icon',
    options: ['leading', 'icon-only', 'none'],
    default: 'leading',
  },
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
  label: { type: 'text', label: 'Label', default: 'Label' },
  elevation: {
    type: 'number',
    label: 'Elevation',
    min: 0,
    max: 5,
    step: 1,
    default: -1,
  },
  shapeMorph: { type: 'switch', label: 'Shape morph on press', default: true },
} as const satisfies ConfigSchema;

const NO_SHAPE_MORPH = {} as const;

export default function ButtonsScreen() {
  const config = useConfig(schema);

  return (
    <DemoPage
      title="Buttons"
      description="Prompt most actions in a UI"
      schema={schema}
      config={config}
      preview={(v) => {
        const showIcon = v.icon !== 'none';
        const iconOnly = v.icon === 'icon-only';
        const elevation = v.elevation >= 0 ? v.elevation : undefined;
        const interactionShapes = v.shapeMorph ? undefined : NO_SHAPE_MORPH;

        return (
          <Button
            variant={v.variant}
            size={v.size}
            shape={v.shape}
            disabled={v.disabled}
            toggle={v.toggle}
            defaultSelected={false}
            elevation={elevation as any}
            interactionShapes={interactionShapes}
            accessibilityLabel={iconOnly ? v.iconName : undefined}
          >
            {showIcon && (
              <ButtonIcon
                name={v.iconName as any}
                selectedName={v.selectedIconName ? (v.selectedIconName as any) : undefined}
                variant="outlined"
              />
            )}
            {!iconOnly && <ButtonLabel>{v.label}</ButtonLabel>}
          </Button>
        );
      }}
    />
  );
}
