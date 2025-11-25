import React from 'react';
import { IconButton } from 'react-native-material-design/ui/icon-button';
import {
  Menu,
  MenuDivider,
  MenuItem,
  MenuItemLabel,
  MenuItemLeadingIcon,
  MenuItemTrailingIcon,
  MenuItemTrailingText,
} from 'react-native-material-design/ui/menus';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const ITEM_DATA = [
  { icon: 'content_cut', label: 'Cut', shortcut: 'Ctrl+X' },
  { icon: 'content_copy', label: 'Copy', shortcut: 'Ctrl+C' },
  { icon: 'content_paste', label: 'Paste', shortcut: 'Ctrl+V' },
  { icon: 'select_all', label: 'Select all', shortcut: 'Ctrl+A' },
  { icon: 'delete', label: 'Delete', shortcut: 'Del' },
  { icon: 'share', label: 'Share', shortcut: '' },
  { icon: 'edit', label: 'Rename', shortcut: 'F2' },
  { icon: 'info', label: 'Properties', shortcut: '' },
] as const;

const schema = {
  variant: {
    type: 'select',
    label: 'Variant',
    options: ['baseline', 'vertical'],
    default: 'baseline',
  },
  colorStyle: {
    type: 'select',
    label: 'Color style',
    options: ['standard', 'vibrant'],
    default: 'standard',
  },
  itemCount: {
    type: 'number',
    label: 'Item count',
    min: 2,
    max: 8,
    default: 4,
  },
  icons: { type: 'switch', label: 'Leading icons', default: true },
  trailing: {
    type: 'select',
    label: 'Trailing',
    options: ['none', 'icon', 'text'],
    default: 'none',
  },
  dividers: { type: 'switch', label: 'Dividers', default: false },
} as const satisfies ConfigSchema;

export default function MenusScreen() {
  const config = useConfig(schema);
  const [open, setOpen] = React.useState(false);
  const v = config.values;

  const items = ITEM_DATA.slice(0, v.itemCount);

  return (
    <DemoPage
      title="Menus"
      description="Display a list of choices on a temporary surface"
      schema={schema}
      config={config}
      preview={() => (
        <Menu
          variant={v.variant}
          colorStyle={v.variant === 'vertical' ? v.colorStyle : undefined}
          open={open}
          onOpenChange={setOpen}
          anchor={<IconButton name="more_vert" onPress={() => setOpen(true)} />}
        >
          {items.map((item, i) => (
            <React.Fragment key={item.label}>
              {i > 0 && v.dividers && <MenuDivider />}
              <MenuItem onPress={() => setOpen(false)}>
                {v.icons && <MenuItemLeadingIcon name={item.icon} />}
                <MenuItemLabel>{item.label}</MenuItemLabel>
                {v.trailing === 'icon' && <MenuItemTrailingIcon name="chevron_right" />}
                {v.trailing === 'text' && item.shortcut !== '' && (
                  <MenuItemTrailingText>{item.shortcut}</MenuItemTrailingText>
                )}
              </MenuItem>
            </React.Fragment>
          ))}
        </Menu>
      )}
    />
  );
}
