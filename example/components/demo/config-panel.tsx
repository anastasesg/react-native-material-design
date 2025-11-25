import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, ButtonLabel } from 'react-native-material-design/ui/button';
import { Chip, ChipLabel } from 'react-native-material-design/ui/chips';
import { IconButton } from 'react-native-material-design/ui/icon-button';
import { Slider } from 'react-native-material-design/ui/slider';
import { Switch, SwitchLabel, SwitchToggle } from 'react-native-material-design/ui/switch';
import { Text } from 'react-native-material-design/ui/text';
import { TextField, TextFieldInput } from 'react-native-material-design/ui/text-field';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

import type {
  ActionField,
  ColorField,
  ConfigField,
  ConfigSchema,
  CustomField,
  NumberField,
  SelectField,
  SliderField,
  SwitchField,
  TextField as TextFieldType,
  UseConfigReturn,
} from './types';

// ---------------------------------------------------------------------------
// Field renderers
// ---------------------------------------------------------------------------

function SelectControl({
  field,
  value,
  onChange,
}: {
  field: SelectField;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipRow}>
      {field.options.map((option) => (
        <Chip key={option} type="filter" selected={value === option} onSelectionChange={() => onChange(option)}>
          <ChipLabel>{capitalize(option)}</ChipLabel>
        </Chip>
      ))}
    </ScrollView>
  );
}

function SwitchControl({
  field,
  value,
  onChange,
}: {
  field: SwitchField;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <Switch value={value} onChange={onChange}>
      <SwitchToggle />
      <SwitchLabel>{field.label}</SwitchLabel>
    </Switch>
  );
}

function TextControl({
  field,
  value,
  onChange,
}: {
  field: TextFieldType;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <TextField label={field.label} variant="outlined">
      <TextFieldInput value={value} onChangeText={onChange} />
    </TextField>
  );
}

function SliderControl({
  field,
  value,
  onChange,
}: {
  field: SliderField;
  value: string;
  onChange: (v: string) => void;
}) {
  const index = field.stops.indexOf(value);

  return (
    <View style={styles.sliderContainer}>
      <Slider
        min={0}
        max={field.stops.length - 1}
        steps={field.stops.length - 1}
        defaultValue={index >= 0 ? index : 0}
        onValueChange={(v) => {
          const stop = field.stops[Math.round(v)];
          if (stop !== undefined) onChange(stop);
        }}
      />
    </View>
  );
}

function NumberControl({
  field,
  value,
  onChange,
}: {
  field: NumberField;
  value: number;
  onChange: (v: number) => void;
}) {
  const step = field.step ?? 1;

  return (
    <View style={styles.numberRow}>
      <IconButton
        name="remove"
        variant="outlined"
        size="small"
        disabled={value <= field.min}
        onPress={() => onChange(Math.max(field.min, value - step))}
      />
      <View style={styles.numberFieldWrapper}>
        <TextField label={field.label} variant="outlined">
          <TextFieldInput
            value={String(value)}
            onChangeText={(text) => {
              const n = Number(text);
              if (!Number.isNaN(n)) onChange(Math.min(field.max, Math.max(field.min, n)));
            }}
            keyboardType="numeric"
          />
        </TextField>
      </View>
      <IconButton
        name="add"
        variant="outlined"
        size="small"
        disabled={value >= field.max}
        onPress={() => onChange(Math.min(field.max, value + step))}
      />
    </View>
  );
}

function ColorControl({ field, value, onChange }: { field: ColorField; value: string; onChange: (v: string) => void }) {
  const { theme } = useUnistyles();

  return (
    <View style={styles.colorRow}>
      {field.options.map((colorRole) => {
        const color = theme.scheme[colorRole as keyof typeof theme.scheme] as string;
        const isSelected = value === colorRole;
        return (
          <View
            key={colorRole}
            style={[
              styles.colorSwatch,
              { backgroundColor: color },
              isSelected && { borderColor: theme.scheme.outline, borderWidth: 3 },
            ]}
            onTouchEnd={() => onChange(colorRole)}
          />
        );
      })}
    </View>
  );
}

function ActionControl({ field, onPress }: { field: ActionField; onPress: () => void }) {
  return (
    <Button variant="tonal" onPress={onPress}>
      <ButtonLabel>{field.label}</ButtonLabel>
    </Button>
  );
}

function CustomControl({ field, value, onChange }: { field: CustomField; value: any; onChange: (v: any) => void }) {
  return <>{field.render(value, onChange)}</>;
}

// ---------------------------------------------------------------------------
// ConfigPanel
// ---------------------------------------------------------------------------

type ConfigPanelProps<S extends ConfigSchema> = {
  schema: S;
  config: UseConfigReturn<S>;
};

export function ConfigPanel<S extends ConfigSchema>({ schema, config }: ConfigPanelProps<S>) {
  return (
    <View style={styles.container}>
      {Object.entries(schema).map(([key, field]) => (
        <FieldRow key={key} fieldKey={key} field={field} config={config} />
      ))}
    </View>
  );
}

function FieldRow<S extends ConfigSchema>({
  fieldKey,
  field,
  config,
}: {
  fieldKey: string;
  field: ConfigField;
  config: UseConfigReturn<S>;
}) {
  const value = (config.values as Record<string, any>)[fieldKey];
  const onChange = (v: any) => config.set(fieldKey as any, v);

  // Switch renders its own label inline
  if (field.type === 'switch') {
    return (
      <View style={styles.field}>
        <SwitchControl field={field} value={value} onChange={onChange} />
      </View>
    );
  }

  return (
    <View style={styles.field}>
      {field.type !== 'action' && (
        <View style={styles.fieldLabelRow}>
          <Text variant="label" size="medium" style={styles.fieldLabel}>
            {field.label}
          </Text>
          {field.type === 'slider' && (
            <Text variant="label" size="medium" style={styles.sliderValue}>
              {value}
            </Text>
          )}
        </View>
      )}
      {field.type === 'select' && <SelectControl field={field} value={value} onChange={onChange} />}
      {field.type === 'text' && <TextControl field={field} value={value} onChange={onChange} />}
      {field.type === 'slider' && <SliderControl field={field} value={value} onChange={onChange} />}
      {field.type === 'number' && <NumberControl field={field} value={value} onChange={onChange} />}
      {field.type === 'color' && <ColorControl field={field} value={value} onChange={onChange} />}
      {field.type === 'action' && (
        <ActionControl field={field} onPress={() => config.actions[fieldKey as keyof typeof config.actions]()} />
      )}
      {field.type === 'custom' && <CustomControl field={field} value={value} onChange={onChange} />}
    </View>
  );
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create((theme) => ({
  container: {
    padding: 20,
    gap: 20,
  },

  field: {
    gap: 8,
  },
  fieldLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fieldLabel: {
    color: theme.scheme.onSurfaceVariant,
  },

  // Select (chip row)
  chipRow: {
    gap: 8,
  },

  // Slider — the Slider component's handle (44dp) overflows its layout container
  // (which is only track-height tall), so we add vertical padding to prevent overlap
  sliderContainer: {
    paddingVertical: 14,
  },
  sliderValue: {
    color: theme.scheme.primary,
  },

  // Number
  numberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  numberFieldWrapper: {
    flex: 1,
  },
  // Color swatches
  colorRow: {
    flexDirection: 'row',
    gap: 12,
  },
  colorSwatch: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
}));
