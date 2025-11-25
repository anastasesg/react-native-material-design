import type React from 'react';

// ---------------------------------------------------------------------------
// Config field definitions
// ---------------------------------------------------------------------------

export type SelectField = {
  type: 'select';
  label: string;
  options: string[];
  default: string;
};

export type SwitchField = {
  type: 'switch';
  label: string;
  default: boolean;
};

export type TextField = {
  type: 'text';
  label: string;
  default: string;
};

export type SliderField = {
  type: 'slider';
  label: string;
  stops: string[];
  default: string;
};

export type NumberField = {
  type: 'number';
  label: string;
  min: number;
  max: number;
  step?: number;
  default: number;
};

export type ColorField = {
  type: 'color';
  label: string;
  options: string[];
  default: string;
};

export type ActionField = {
  type: 'action';
  label: string;
};

export type CustomField = {
  type: 'custom';
  label: string;
  render: (value: any, onChange: (v: any) => void) => React.ReactNode;
  default: any;
};

export type ConfigField =
  | SelectField
  | SwitchField
  | TextField
  | SliderField
  | NumberField
  | ColorField
  | ActionField
  | CustomField;

export type ConfigSchema = Record<string, ConfigField>;

// ---------------------------------------------------------------------------
// Inferred value types from a schema
// ---------------------------------------------------------------------------

/** Maps a single field to its value type. ActionField produces `never` (no value). */
type FieldValue<F extends ConfigField> = F extends ActionField
  ? never
  : F extends SwitchField
    ? boolean
    : F extends NumberField
      ? number
      : F extends SelectField
        ? F['options'][number]
        : F extends SliderField
          ? F['stops'][number]
          : F extends ColorField
            ? F['options'][number]
            : F extends TextField
              ? string
              : F extends CustomField
                ? any
                : never;

/** Keys from the schema that produce values (excludes ActionField). */
export type ValueKeys<S extends ConfigSchema> = {
  [K in keyof S]: S[K] extends ActionField ? never : K;
}[keyof S];

/** Keys from the schema that are actions. */
export type ActionKeys<S extends ConfigSchema> = {
  [K in keyof S]: S[K] extends ActionField ? K : never;
}[keyof S];

/** The values object returned by useConfig — only non-action fields. */
export type ConfigValues<S extends ConfigSchema> = {
  [K in ValueKeys<S>]: FieldValue<S[K]>;
};

/** The actions map returned by useConfig — callbacks for action fields. */
export type ConfigActions<S extends ConfigSchema> = {
  [K in ActionKeys<S>]: () => void;
};

/** Return type of useConfig. */
export type UseConfigReturn<S extends ConfigSchema> = {
  values: ConfigValues<S>;
  set: <K extends ValueKeys<S>>(key: K, value: ConfigValues<S>[K]) => void;
  reset: () => void;
  actions: ConfigActions<S>;
  setAction: <K extends ActionKeys<S>>(key: K, callback: () => void) => void;
};
