import React from 'react';
import { View } from 'react-native';
import { CircularProgressIndicator, LinearProgressIndicator } from 'react-native-material-design/ui/progress-indicator';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  type: {
    type: 'select',
    label: 'Type',
    options: ['linear', 'circular'],
    default: 'linear',
  },
  determinate: { type: 'switch', label: 'Determinate', default: true },
  progress: { type: 'number', label: 'Progress (%)', min: 0, max: 100, step: 5, default: 50 },
  showStopIndicator: { type: 'switch', label: 'Stop indicator', default: true },
  circularSize: { type: 'number', label: 'Circular size', min: 24, max: 80, default: 40 },
} as const satisfies ConfigSchema;

export default function ProgressIndicatorsScreen() {
  const config = useConfig(schema);

  return (
    <DemoPage
      title="Progress indicators"
      description="Show the status of a process in real time"
      schema={schema}
      config={config}
      preview={(v) =>
        v.type === 'linear' ? (
          <View style={{ width: '100%', paddingHorizontal: 24 }}>
            <LinearProgressIndicator
              {...(v.determinate ? { progress: v.progress / 100 } : {})}
              showStopIndicator={v.showStopIndicator}
            />
          </View>
        ) : (
          <CircularProgressIndicator {...(v.determinate ? { progress: v.progress / 100 } : {})} size={v.circularSize} />
        )
      }
    />
  );
}
