import { createContext, useContext } from 'react';

/**
 * Creates a required component context.
 * The hook throws if used outside the provider.
 */
export function createComponentContext<T>(name: string) {
  const Context = createContext<T | null>(null);
  Context.displayName = name;

  function useComponentContext(): T {
    const ctx = useContext(Context);
    if (ctx === null) {
      throw new Error(`<${name}> sub-component used outside of <${name}>.`);
    }
    return ctx;
  }

  return [Context.Provider, useComponentContext] as const;
}

/**
 * Creates an optional component context.
 * The hook returns null when no provider is present.
 */
export function createOptionalComponentContext<T>(name: string) {
  const Context = createContext<T | null>(null);

  function useComponentContext(): T | null {
    return useContext(Context);
  }

  Context.displayName = name;

  return [Context.Provider, useComponentContext] as const;
}
