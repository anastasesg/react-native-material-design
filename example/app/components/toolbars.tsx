import React from 'react';
import { IconButton } from 'react-native-material-design/ui/icon-button';
import { Toolbar } from 'react-native-material-design/ui/toolbars';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  type: {
    type: 'select',
    label: 'Type',
    options: ['docked', 'floating'],
    default: 'docked',
  },
  colorStyle: {
    type: 'select',
    label: 'Color style',
    options: ['standard', 'vibrant'],
    default: 'standard',
  },
  layout: {
    type: 'select',
    label: 'Layout',
    options: ['horizontal', 'vertical'],
    default: 'horizontal',
  },
} as const satisfies ConfigSchema;

const TOOLBAR_ICONS = ['format_bold', 'format_italic', 'format_underlined', 'link'] as const;

export default function ToolbarsScreen() {
  const config = useConfig(schema);

  return (
    <DemoPage
      title="Toolbars"
      description="Display frequently used actions for the current page"
      schema={schema}
      config={config}
      preview={(v) => {
        const icons = TOOLBAR_ICONS.map((name) => <IconButton key={name} name={name} variant="standard" />);

        return (
          <Toolbar variant={v.type} colorStyle={v.colorStyle} layout={v.layout}>
            {icons}
          </Toolbar>
        );
      }}
    />
  );
}
