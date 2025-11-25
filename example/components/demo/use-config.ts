import { useCallback, useRef, useState } from 'react';

import type { ActionKeys, ConfigActions, ConfigSchema, ConfigValues, UseConfigReturn, ValueKeys } from './types';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Extract default values from a schema, skipping action fields. */
function getDefaults<S extends ConfigSchema>(schema: S): ConfigValues<S> {
  const defaults = {} as Record<string, unknown>;
  for (const [key, field] of Object.entries(schema)) {
    if (field.type !== 'action') {
      defaults[key] = field.default;
    }
  }
  return defaults as ConfigValues<S>;
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useConfig<S extends ConfigSchema>(schema: S): UseConfigReturn<S> {
  const [values, setValues] = useState<ConfigValues<S>>(() => getDefaults(schema));
  const actionsRef = useRef<Partial<Record<string, () => void>>>({});

  const set = useCallback(<K extends ValueKeys<S>>(key: K, value: ConfigValues<S>[K]) => {
    setValues((prev) => ({ ...prev, [key as string]: value }));
  }, []);

  const reset = useCallback(() => {
    setValues(getDefaults(schema));
  }, [schema]);

  const setAction = useCallback(<K extends ActionKeys<S>>(key: K, callback: () => void) => {
    actionsRef.current[key as string] = callback;
  }, []);

  // Build a proxy-like actions object that delegates to the ref
  const actions = useRef(
    new Proxy({} as ConfigActions<S>, {
      get(_target, prop: string) {
        return () => actionsRef.current[prop]?.();
      },
    }),
  ).current;

  return { values, set, reset, actions, setAction };
}
