import React from 'react';
import {
  List,
  ListDivider,
  ListItem,
  ListItemLabel,
  ListItemLeadingAvatar,
  ListItemLeadingIcon,
  ListItemLeadingImage,
  ListItemOverline,
  ListItemSupportingText,
  ListItemTrailingIcon,
  ListItemTrailingText,
} from 'react-native-material-design/ui/lists';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const ITEMS = [
  {
    icon: 'person',
    label: 'Alice Johnson',
    overline: 'Contact',
    support: 'Product designer at Acme',
    avatar: 'A',
    trailing: 'Mar 8',
  },
  {
    icon: 'call',
    label: 'Bob Smith',
    overline: 'Recent',
    support: 'Called you 2 hours ago',
    avatar: 'B',
    trailing: 'Mar 7',
  },
  {
    icon: 'mail',
    label: 'Carol Lee',
    overline: 'Message',
    support: 'Sent you a new proposal',
    avatar: 'C',
    trailing: 'Mar 6',
  },
] as const;

const schema = {
  lines: {
    type: 'select',
    label: 'Lines',
    options: ['1', '2', '3'],
    default: '1',
  },
  leading: {
    type: 'select',
    label: 'Leading',
    options: ['none', 'icon', 'avatar', 'image'],
    default: 'none',
  },
  trailing: {
    type: 'select',
    label: 'Trailing',
    options: ['none', 'icon', 'text'],
    default: 'none',
  },
  overline: { type: 'switch', label: 'Overline', default: false },
  selected: { type: 'switch', label: 'Selected', default: false },
  disabled: { type: 'switch', label: 'Disabled', default: false },
  divider: {
    type: 'select',
    label: 'Divider',
    options: ['none', 'fullWidth', 'inset'],
    default: 'none',
  },
} as const satisfies ConfigSchema;

export default function ListsScreen() {
  const config = useConfig(schema);

  return (
    <DemoPage
      title="Lists"
      description="Continuous, vertical indexes of text and images"
      schema={schema}
      config={config}
      preview={(v) => (
        <List style={{ alignSelf: 'stretch' }}>
          {ITEMS.map((item, i) => (
            <React.Fragment key={item.label}>
              {i > 0 && v.divider !== 'none' && <ListDivider variant={v.divider} />}
              <ListItem selected={v.selected} disabled={v.disabled}>
                {v.leading === 'icon' && <ListItemLeadingIcon name={item.icon} />}
                {v.leading === 'avatar' && <ListItemLeadingAvatar label={item.avatar} />}
                {v.leading === 'image' && (
                  <ListItemLeadingImage source={{ uri: `https://picsum.photos/seed/list${i}/56/56` }} />
                )}
                {(v.lines === '3' || v.overline) && <ListItemOverline>{item.overline}</ListItemOverline>}
                <ListItemLabel>{item.label}</ListItemLabel>
                {v.lines !== '1' && <ListItemSupportingText>{item.support}</ListItemSupportingText>}
                {v.trailing === 'icon' && <ListItemTrailingIcon name="chevron_right" />}
                {v.trailing === 'text' && <ListItemTrailingText>{item.trailing}</ListItemTrailingText>}
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      )}
    />
  );
}
