import React from 'react';
import { LoadingIndicator } from 'react-native-material-design/ui/loading-indicator';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  contained: { type: 'switch', label: 'Contained', default: false },
  size: { type: 'number', label: 'Size', min: 24, max: 120, step: 12, default: 48 },
} as const satisfies ConfigSchema;

export default function LoadingIndicatorScreen() {
  const config = useConfig(schema);

  return (
    <DemoPage
      title="Loading indicator"
      description="Show progress for a short wait time"
      schema={schema}
      config={config}
      preview={(v) => <LoadingIndicator contained={v.contained} size={v.size} />}
    />
  );
}
