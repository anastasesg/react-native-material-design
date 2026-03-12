import { useCallback, useRef, useState } from 'react';

function useControllableState<T>({
  value: controlledValue,
  defaultValue,
  onChange,
}: {
  value?: T;
  defaultValue: T;
  onChange?: (value: T) => void;
}): [T, (next: T | ((prev: T) => T)) => void] {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  // Refs for stable callback identity — setValue never changes reference
  const valueRef = useRef(value);
  const onChangeRef = useRef(onChange);
  const isControlledRef = useRef(isControlled);
  valueRef.current = value;
  onChangeRef.current = onChange;
  isControlledRef.current = isControlled;

  const setValue = useCallback((next: T | ((prev: T) => T)) => {
    const nextValue = typeof next === 'function' ? (next as (prev: T) => T)(valueRef.current) : next;
    if (Object.is(nextValue, valueRef.current)) return;

    if (!isControlledRef.current) {
      setInternalValue(nextValue);
    }
    onChangeRef.current?.(nextValue);
  }, []);

  return [value, setValue];
}

export { useControllableState };
