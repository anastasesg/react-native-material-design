import React from 'react';
import {
  TextField,
  TextFieldInput,
  TextFieldLeadingIcon,
  TextFieldSupportingText,
  TextFieldTrailingIcon,
} from 'react-native-material-design/ui/text-field';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const schema = {
  variant: {
    type: 'select',
    label: 'Variant',
    options: ['filled', 'outlined'],
    default: 'filled',
  },
  error: { type: 'switch', label: 'Error', default: false },
  disabled: { type: 'switch', label: 'Disabled', default: false },
  leadingIcon: { type: 'switch', label: 'Leading icon', default: false },
  trailingIcon: { type: 'switch', label: 'Trailing icon', default: false },
  supportText: { type: 'switch', label: 'Supporting text', default: false },
  label: { type: 'text', label: 'Label', default: 'Label' },
  placeholder: { type: 'text', label: 'Placeholder', default: 'Placeholder' },
  prefix: { type: 'text', label: 'Prefix', default: '' },
  suffix: { type: 'text', label: 'Suffix', default: '' },
} as const satisfies ConfigSchema;

export default function TextFieldScreen() {
  const config = useConfig(schema);

  return (
    <DemoPage
      title="Text Fields"
      description="Text fields let users enter text into a UI"
      schema={schema}
      config={config}
      preview={(v) => (
        <TextField variant={v.variant} label={v.label} error={v.error} disabled={v.disabled}>
          {v.leadingIcon && <TextFieldLeadingIcon name="search" />}
          <TextFieldInput placeholder={v.placeholder} prefix={v.prefix || undefined} suffix={v.suffix || undefined} />
          {v.trailingIcon && <TextFieldTrailingIcon name="cancel" />}
          {v.supportText && <TextFieldSupportingText>Supporting text</TextFieldSupportingText>}
        </TextField>
      )}
    />
  );
}
