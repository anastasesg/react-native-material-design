import React, { useCallback, useState } from 'react';
import { Pressable, ScrollView, useWindowDimensions, View } from 'react-native';
import {
  type MotionScheme,
  type ReducedMotionMode,
  type ThemeMode,
  updateThemeSettings,
  useThemeSettings,
} from 'react-native-material-design';
import { Chip, ChipLabel } from 'react-native-material-design/ui/chips';
import { Dialog, DialogAction, DialogContent, DialogHeadline } from 'react-native-material-design/ui/dialog';
import { Divider } from 'react-native-material-design/ui/divider';
import {
  SideSheet,
  SideSheetClose,
  SideSheetContent,
  SideSheetHeader,
  SideSheetHeadline,
} from 'react-native-material-design/ui/side-sheets';
import { Text } from 'react-native-material-design/ui/text';
import { TextField, TextFieldInput, TextFieldLeadingIcon } from 'react-native-material-design/ui/text-field';
import { StyleSheet } from 'react-native-unistyles';

import { EXPANDED_BREAKPOINT } from '../constants/breakpoints';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const SOURCE_COLORS = [
  { label: 'Baseline', hex: '#6750A4' },
  { label: 'Teal', hex: '#00695C' },
  { label: 'Blue', hex: '#1565C0' },
  { label: 'Red', hex: '#B71C1C' },
  { label: 'Green', hex: '#2E7D32' },
  { label: 'Orange', hex: '#E65100' },
  { label: 'Pink', hex: '#AD1457' },
  { label: 'Indigo', hex: '#283593' },
] as const;

// ---------------------------------------------------------------------------
// Settings content (shared between Dialog and SideSheet)
// ---------------------------------------------------------------------------

function SettingsContent() {
  const settings = useThemeSettings();
  const [hexInput, setHexInput] = useState('');

  const handleHexSubmit = useCallback(() => {
    const cleaned = hexInput.trim();
    if (/^#?[0-9A-Fa-f]{6}$/.test(cleaned)) {
      const hex = cleaned.startsWith('#') ? cleaned : `#${cleaned}`;
      updateThemeSettings({ sourceColor: hex });
      setHexInput('');
    }
  }, [hexInput]);

  return (
    <ScrollView contentContainerStyle={styles.content}>
      {/* Theme mode */}
      <Text variant="label" size="large" style={styles.sectionLabel}>
        Theme
      </Text>
      <View style={styles.chipRow}>
        {(['auto', 'light', 'dark'] as const).map((mode: ThemeMode) => (
          <Chip
            key={mode}
            type="filter"
            selected={settings.themeMode === mode}
            onPress={() => updateThemeSettings({ themeMode: mode })}
          >
            <ChipLabel>{mode.charAt(0).toUpperCase() + mode.slice(1)}</ChipLabel>
          </Chip>
        ))}
      </View>

      <Divider />

      {/* Source color */}
      <Text variant="label" size="large" style={styles.sectionLabel}>
        Source color
      </Text>
      <View style={styles.swatchRow}>
        {SOURCE_COLORS.map((c) => (
          <Pressable
            key={c.hex}
            onPress={() => updateThemeSettings({ sourceColor: c.hex })}
            accessibilityLabel={c.label}
            accessibilityRole="button"
            style={styles.swatchOuter(settings.sourceColor === c.hex)}
          >
            <View style={styles.swatch(c.hex)} />
          </Pressable>
        ))}
      </View>
      <TextField variant="outlined" label="Custom hex" style={styles.hexField}>
        <TextFieldLeadingIcon name="palette" />
        <TextFieldInput
          value={hexInput}
          onChangeText={setHexInput}
          onSubmitEditing={handleHexSubmit}
          placeholder="#FF5722"
          autoCapitalize="characters"
        />
      </TextField>

      <Divider />

      {/* Motion scheme */}
      <Text variant="label" size="large" style={styles.sectionLabel}>
        Motion scheme
      </Text>
      <View style={styles.chipRow}>
        {(['expressive', 'standard'] as const).map((scheme: MotionScheme) => (
          <Chip
            key={scheme}
            type="filter"
            selected={settings.motionScheme === scheme}
            onPress={() => updateThemeSettings({ motionScheme: scheme })}
          >
            <ChipLabel>{scheme.charAt(0).toUpperCase() + scheme.slice(1)}</ChipLabel>
          </Chip>
        ))}
      </View>

      <Divider />

      {/* Reduced motion */}
      <Text variant="label" size="large" style={styles.sectionLabel}>
        Reduced motion
      </Text>
      <View style={styles.chipRow}>
        {[
          { value: 'device' as ReducedMotionMode, label: 'Device' },
          { value: true as ReducedMotionMode, label: 'On' },
          { value: false as ReducedMotionMode, label: 'Off' },
        ].map((opt) => (
          <Chip
            key={String(opt.value)}
            type="filter"
            selected={settings.reducedMotion === opt.value}
            onPress={() => updateThemeSettings({ reducedMotion: opt.value })}
          >
            <ChipLabel>{opt.label}</ChipLabel>
          </Chip>
        ))}
      </View>
    </ScrollView>
  );
}

// ---------------------------------------------------------------------------
// Settings panel (responsive container)
// ---------------------------------------------------------------------------

type SettingsPanelProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SettingsPanel({ open, onOpenChange }: SettingsPanelProps) {
  const { width } = useWindowDimensions();
  const useSheet = width >= EXPANDED_BREAKPOINT;

  if (useSheet) {
    return (
      <SideSheet variant="modal" open={open} onOpenChange={onOpenChange}>
        <SideSheetHeader>
          <SideSheetHeadline>Settings</SideSheetHeadline>
          <SideSheetClose />
        </SideSheetHeader>
        <SideSheetContent>
          <SettingsContent />
        </SideSheetContent>
      </SideSheet>
    );
  }

  return (
    <Dialog variant="full-screen" open={open} onOpenChange={onOpenChange}>
      <DialogHeadline>Settings</DialogHeadline>
      <DialogAction onPress={() => onOpenChange(false)}>Done</DialogAction>
      <DialogContent>
        <SettingsContent />
      </DialogContent>
    </Dialog>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create((theme) => ({
  content: {
    gap: 20,
    paddingBottom: 24,
  },
  sectionLabel: {
    color: theme.scheme.onSurfaceVariant,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  swatchRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  swatchOuter: (selected: boolean) => ({
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: selected ? 3 : 0,
    borderColor: theme.scheme.primary,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
  }),
  swatch: (color: string) => ({
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: color,
  }),
  hexField: {
    maxWidth: 200,
  },
}));
