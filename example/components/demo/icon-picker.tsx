import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Icon, Icons, MaterialSymbol } from 'react-native-material-design/ui/icon';
import { Menu, MenuItem, MenuItemLabel, MenuItemLeadingIcon } from 'react-native-material-design/ui/menus';
import { Text } from 'react-native-material-design/ui/text';
import { TextField, TextFieldInput } from 'react-native-material-design/ui/text-field';
import { StyleSheet } from 'react-native-unistyles';

type IconPickerProps = {
  value: string;
  onChange: (name: string) => void;
  /** Placeholder text for the search field. */
  placeholder?: string;
};

const MAX_RESULTS = 30;

export function IconPicker({ value, onChange, placeholder = 'Search icons...' }: IconPickerProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const filtered: MaterialSymbol[] = useMemo(() => {
    if (!query) return Icons.slice(0, MAX_RESULTS);
    const q = query.toLowerCase().replace(/\s+/g, '_');
    const results: MaterialSymbol[] = [];
    for (const name of Icons) {
      if (name.includes(q)) results.push(name);
      if (results.length >= MAX_RESULTS) break;
    }
    return results;
  }, [query]);

  const handleSelect = (name: string) => {
    onChange(name);
    setOpen(false);
    setQuery('');
  };

  return (
    <Menu
      open={open}
      onOpenChange={setOpen}
      anchor={
        <Pressable style={styles.anchor} onPress={() => setOpen(true)}>
          <Icon name={value as any} size={24} style={styles.anchorIcon} />
          <Text variant="body" size="medium" style={styles.anchorName} numberOfLines={1}>
            {value || 'none'}
          </Text>
          <Icon name="arrow_drop_down" size={20} style={styles.anchorChevron} />
        </Pressable>
      }
      style={styles.menu}
    >
      <View style={styles.searchContainer}>
        <TextField label={placeholder} variant="outlined">
          <TextFieldInput value={query} onChangeText={setQuery} autoCapitalize="none" />
        </TextField>
      </View>
      <ScrollView style={styles.list} keyboardShouldPersistTaps="handled">
        {filtered.map((name) => (
          <MenuItem key={name} selected={name === value} onPress={() => handleSelect(name)}>
            <MenuItemLeadingIcon name={name} />
            <MenuItemLabel>{name.replace(/_/g, ' ')}</MenuItemLabel>
          </MenuItem>
        ))}
        {filtered.length === 0 && (
          <View style={styles.empty}>
            <Text variant="body" size="medium" style={styles.emptyText}>
              No icons match "{query}"
            </Text>
          </View>
        )}
      </ScrollView>
    </Menu>
  );
}

const styles = StyleSheet.create((theme) => ({
  anchor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.scheme.surfaceContainerHigh,
  },
  anchorIcon: {
    color: theme.scheme.primary,
  },
  anchorName: {
    flex: 1,
    color: theme.scheme.onSurface,
  },
  anchorChevron: {
    color: theme.scheme.onSurfaceVariant,
  },
  menu: {
    width: 280,
  },
  searchContainer: {
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 4,
  },
  list: {
    maxHeight: 300,
  },
  empty: {
    padding: 16,
    alignItems: 'center',
  },
  emptyText: {
    color: theme.scheme.onSurfaceVariant,
  },
}));
