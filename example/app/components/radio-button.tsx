import React from 'react';
import {
  RadioButton,
  RadioButtonGroup,
  RadioButtonLabel,
  RadioButtonToggle,
} from 'react-native-material-design/ui/radio-button';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  disabled: { type: 'switch', label: 'Disabled', default: false },
  optionCount: { type: 'number', label: 'Option count', min: 2, max: 5, default: 3 },
} as const satisfies ConfigSchema;

export default function RadioButtonScreen() {
  const config = useConfig(schema);

  return (
    <DemoPage
      title="Radio button"
      description="Select one option from a set of options"
      schema={schema}
      config={config}
      preview={(v) => (
        <RadioButtonGroup defaultValue="option-1" disabled={v.disabled}>
          {Array.from({ length: v.optionCount }, (_, i) => (
            <RadioButton key={i} value={`option-${i + 1}`}>
              <RadioButtonToggle />
              <RadioButtonLabel>{`Option ${i + 1}`}</RadioButtonLabel>
            </RadioButton>
          ))}
        </RadioButtonGroup>
      )}
    />
  );
}
