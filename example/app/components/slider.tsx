import React from 'react';
import { View } from 'react-native';
import { RangeSlider, Slider } from 'react-native-material-design/ui/slider';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  type: {
    type: 'select',
    label: 'Type',
    options: ['standard', 'centered', 'range'],
    default: 'standard',
  },
  size: {
    type: 'slider',
    label: 'Size',
    stops: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
    default: 'medium',
  },
  disabled: { type: 'switch', label: 'Disabled', default: false },
  discrete: { type: 'switch', label: 'Discrete', default: false },
  steps: {
    type: 'number',
    label: 'Steps',
    min: 2,
    max: 20,
    default: 5,
  },
  valueIndicator: { type: 'switch', label: 'Value indicator', default: false },
  icon: { type: 'switch', label: 'Inset icon', default: false },
} as const satisfies ConfigSchema;

export default function SliderScreen() {
  const config = useConfig(schema);
  const v = config.values;

  const sliderKey = `${v.type}-${v.size}-${v.discrete}-${v.steps}-${v.icon}`;
  const stepsProps = v.discrete ? { steps: v.steps } : {};
  const indicatorProps = v.valueIndicator ? { min: 0, max: 100, showValueIndicator: true } : {};
  const iconProps = v.icon && v.type === 'standard' ? { icon: 'volume_up' as const } : {};

  return (
    <DemoPage
      title="Sliders"
      description="Let users make selections from a range of values"
      schema={schema}
      config={config}
      preview={() => (
        <View style={{ alignSelf: 'stretch', paddingVertical: 14 }}>
          {v.type === 'range' ? (
            <RangeSlider
              key={sliderKey}
              size={v.size}
              disabled={v.disabled}
              defaultValue={[0.2, 0.8]}
              {...stepsProps}
              {...indicatorProps}
            />
          ) : (
            <Slider
              key={sliderKey}
              variant={v.type}
              size={v.size}
              disabled={v.disabled}
              defaultValue={0.5}
              {...stepsProps}
              {...indicatorProps}
              {...iconProps}
            />
          )}
        </View>
      )}
    />
  );
}
