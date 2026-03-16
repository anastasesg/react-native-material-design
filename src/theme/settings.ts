/**
 * Theme Settings Store
 *
 * Centralized, reactive store for all runtime-mutable theme settings.
 *
 * ## Architecture
 *
 * The store holds a frozen snapshot of {@link ThemeSettings} (source color,
 * theme mode, motion scheme, reduced motion). Every call to
 * {@link updateThemeSettings} replaces the snapshot with a new frozen object,
 * selectively applies side effects (theme regeneration, adaptive mode toggle),
 * and notifies subscribers.
 *
 * ## Reactivity
 *
 * React integration uses `useSyncExternalStore` — the standard React 18
 * primitive for subscribing to external mutable state. The frozen-snapshot
 * pattern gives React a cheap `Object.is` reference check: if nothing
 * changed, the same object reference is returned and re-renders are skipped.
 *
 * ## Side Effects
 *
 * `updateThemeSettings` is lazy about side effects:
 *
 * - **Theme regeneration** (`generateThemes` + `UnistylesRuntime.updateTheme`)
 *   only runs when `sourceColor` or `motionScheme` actually changed. This
 *   avoids the cost of running `@material/material-color-utilities` on every
 *   settings update.
 *
 * - **Adaptive theme mode** (`UnistylesRuntime.setAdaptiveThemes` /
 *   `setTheme`) only runs when `themeMode` changed.
 *
 * - **Reduced motion** has no side effect — it's purely reactive. Components
 *   read it via {@link useThemeSettings} and respond in their own render.
 *
 * ## Persistence
 *
 * The store itself is ephemeral (resets on app restart). Consumers can plug
 * in persistence via {@link onThemeSettingsChange}, which fires after every
 * update with the full settings snapshot.
 *
 * @module
 */

import { useSyncExternalStore } from 'react';
import { UnistylesRuntime } from 'react-native-unistyles';

import { generateThemes, type GenerateThemesOptions } from '../utilities';
import { buildMotion } from '../utilities/defaults';
import type { MotionScheme } from './motion';
import type { Themes } from './theme';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/**
 * Reduced motion override.
 *
 * - `'device'` — defer to the OS accessibility setting (default)
 * - `true` — force all animations to use reduced-motion springs
 * - `false` — force full animation even if the OS requests reduced motion
 */
type ReducedMotionMode = 'device' | boolean;

/**
 * Theme mode — controls light/dark switching.
 *
 * - `'auto'` — follow the device's color scheme (unistyles adaptive themes)
 * - `'light'` — force light theme regardless of device setting
 * - `'dark'` — force dark theme regardless of device setting
 */
type ThemeMode = 'auto' | 'light' | 'dark';

/**
 * The complete set of runtime-mutable theme settings.
 *
 * These are the values that can change after `configure()` has been called.
 * Static options (fontFamily, overrides, breakpoints) are fixed at
 * configuration time and not included here.
 */
type ThemeSettings = {
  /** Hex color used as the seed for M3 dynamic color generation. */
  sourceColor: string;
  /** Controls light/dark theme switching. */
  themeMode: ThemeMode;
  /** Active motion scheme — determines spring bounciness. */
  motionScheme: MotionScheme;
  /** Reduced motion override — affects all spring-animated components. */
  reducedMotion: ReducedMotionMode;
};

/**
 * Callback invoked after every settings change.
 * Receives the full, frozen settings snapshot.
 */
type ThemeSettingsListener = (settings: ThemeSettings) => void;

// ---------------------------------------------------------------------------
// Defaults
// ---------------------------------------------------------------------------

const DEFAULT_SOURCE_COLOR = '#6750A4';

const DEFAULT_SETTINGS: ThemeSettings = Object.freeze({
  sourceColor: DEFAULT_SOURCE_COLOR,
  themeMode: 'auto' as ThemeMode,
  motionScheme: 'expressive' as MotionScheme,
  reducedMotion: 'device' as ReducedMotionMode,
});

// ---------------------------------------------------------------------------
// Store internals
// ---------------------------------------------------------------------------

/**
 * Current settings snapshot — replaced (never mutated) on every update.
 * Frozen to guarantee referential stability for `useSyncExternalStore`.
 */
let _settings: ThemeSettings = DEFAULT_SETTINGS;

/** React subscription listeners for `useSyncExternalStore`. */
const _reactListeners = new Set<() => void>();

/** Optional persistence / side-effect callback registered via {@link onThemeSettingsChange}. */
let _onChangeCallback: ThemeSettingsListener | null = null;

/**
 * Theme generation options that don't change at runtime.
 * Captured from `configure()` so that theme regeneration preserves
 * fontFamily, overrides, lightOverrides, and darkOverrides.
 */
let _staticOptions: Omit<GenerateThemesOptions, 'sourceColor' | 'motionScheme'> = {};

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

/** Notify all React subscribers and the optional persistence callback. */
function _notify(): void {
  for (const listener of _reactListeners) listener();
  _onChangeCallback?.(_settings);
}

/**
 * Regenerates both light and dark themes from the current settings
 * (merged with static options from configure) and applies them to
 * unistyles via `UnistylesRuntime.updateTheme`.
 */
function _applyThemes(): Themes {
  const themes = generateThemes({
    ..._staticOptions,
    sourceColor: _settings.sourceColor,
    motionScheme: _settings.motionScheme,
  });
  UnistylesRuntime.updateTheme('light', () => themes.light);
  UnistylesRuntime.updateTheme('dark', () => themes.dark);
  return themes;
}

/**
 * Updates only the motion field on both themes. Skips the expensive
 * color generation pipeline — `buildMotion` is just object literals.
 */
function _applyMotionOnly(): void {
  const motion = buildMotion(_settings.motionScheme);
  UnistylesRuntime.updateTheme('light', (current) => ({ ...current, motion }));
  UnistylesRuntime.updateTheme('dark', (current) => ({ ...current, motion }));
}

/**
 * Applies the themeMode setting to unistyles.
 * `'auto'` enables adaptive themes; `'light'`/`'dark'` disables adaptive
 * and forces the specified theme.
 */
function _applyThemeMode(mode: ThemeMode): void {
  if (mode === 'auto') {
    UnistylesRuntime.setAdaptiveThemes(true);
  } else {
    UnistylesRuntime.setAdaptiveThemes(false);
    UnistylesRuntime.setTheme(mode);
  }
}

// ---------------------------------------------------------------------------
// Public API — initialization (called by configure, not consumers)
// ---------------------------------------------------------------------------

/**
 * Initializes the settings store with values from `configure()`.
 *
 * This is an internal API — consumers should not call it directly.
 * It captures the initial settings and the static generation options
 * so that future `updateThemeSettings` calls can regenerate themes
 * with the correct fontFamily, overrides, etc.
 *
 * @internal
 */
function initThemeSettings(
  initial: Partial<ThemeSettings>,
  staticOptions: Omit<GenerateThemesOptions, 'sourceColor' | 'motionScheme'>,
): void {
  _staticOptions = staticOptions;
  // Filter out undefined values so they don't overwrite DEFAULT_SETTINGS.
  const defined = Object.fromEntries(Object.entries(initial).filter(([, v]) => v !== undefined));
  _settings = Object.freeze({ ...DEFAULT_SETTINGS, ...defined });
}

// ---------------------------------------------------------------------------
// Public API — reading
// ---------------------------------------------------------------------------

/**
 * Returns the current theme settings snapshot.
 *
 * This is a plain function (not a hook) for use outside React components:
 * event handlers, middleware, or as the `getSnapshot` argument to
 * `useSyncExternalStore`. For reactive access inside components,
 * prefer {@link useThemeSettings}.
 *
 * @example
 * ```tsx
 * import { getThemeSettings } from 'react-native-material-design';
 *
 * const current = getThemeSettings();
 * console.log(current.sourceColor); // '#6750A4'
 * ```
 */
function getThemeSettings(): ThemeSettings {
  return _settings;
}

/**
 * Subscribes to settings changes. Returns an unsubscribe function.
 *
 * Primarily used as the `subscribe` argument to `useSyncExternalStore`
 * (which {@link useThemeSettings} does internally). Can also be used
 * for non-React subscriptions.
 */
function subscribeThemeSettings(listener: () => void): () => void {
  _reactListeners.add(listener);
  return () => _reactListeners.delete(listener);
}

// ---------------------------------------------------------------------------
// Public API — writing
// ---------------------------------------------------------------------------

/**
 * Updates one or more theme settings and applies the changes immediately.
 *
 * Accepts a partial — only the fields you pass are changed. Unchanged
 * fields retain their current values.
 *
 * **Side effects are conditional:**
 * - Themes are only regenerated when `sourceColor` or `motionScheme` change.
 * - Adaptive/manual theme mode is only reconfigured when `themeMode` changes.
 * - `reducedMotion` has no side effect — components react via re-render.
 *
 * All React components using {@link useThemeSettings} re-render after
 * the update. The optional {@link onThemeSettingsChange} callback fires
 * after React subscribers are notified.
 *
 * @example
 * ```tsx
 * import { updateThemeSettings } from 'react-native-material-design';
 *
 * // Single field
 * updateThemeSettings({ sourceColor: '#FF5722' });
 *
 * // Multiple fields in one atomic update
 * updateThemeSettings({
 *   sourceColor: '#1B6B52',
 *   motionScheme: 'standard',
 *   themeMode: 'dark',
 * });
 * ```
 */
function updateThemeSettings(partial: Partial<ThemeSettings>): void {
  const prev = _settings;

  // Short-circuit: if no value actually changed, skip the update entirely.
  // This preserves referential stability for useSyncExternalStore consumers.
  const hasChange = (Object.keys(partial) as (keyof ThemeSettings)[]).some((k) => partial[k] !== prev[k]);
  if (!hasChange) return;

  _settings = Object.freeze({ ...prev, ...partial });

  // Split side effects: full regeneration only when color changes.
  // Motion-only changes skip the expensive @material/material-color-utilities pipeline.
  const colorChanged = _settings.sourceColor !== prev.sourceColor;
  const motionChanged = _settings.motionScheme !== prev.motionScheme;
  if (colorChanged) {
    _applyThemes();
  } else if (motionChanged) {
    _applyMotionOnly();
  }

  // Only touch adaptive/theme mode if it changed
  if (_settings.themeMode !== prev.themeMode) _applyThemeMode(_settings.themeMode);

  _notify();
}

// ---------------------------------------------------------------------------
// Public API — persistence
// ---------------------------------------------------------------------------

/**
 * Registers a callback invoked after every settings change.
 *
 * Use this to persist settings to AsyncStorage, MMKV, or any other
 * storage layer. The callback receives the full frozen snapshot, so
 * you can serialize it directly.
 *
 * Only one callback is supported at a time — calling this again replaces
 * the previous callback. Returns an unsubscribe function.
 *
 * @example
 * ```tsx
 * import { onThemeSettingsChange } from 'react-native-material-design';
 * import AsyncStorage from '@react-native-async-storage/async-storage';
 *
 * const unsubscribe = onThemeSettingsChange((settings) => {
 *   AsyncStorage.setItem('theme-settings', JSON.stringify(settings));
 * });
 *
 * // Later, to stop persisting:
 * unsubscribe();
 * ```
 */
function onThemeSettingsChange(callback: ThemeSettingsListener): () => void {
  if (__DEV__ && _onChangeCallback !== null && _onChangeCallback !== callback) {
    console.warn(
      'onThemeSettingsChange: replacing an existing callback. ' +
        'Only one persistence callback is supported at a time.',
    );
  }
  _onChangeCallback = callback;
  return () => {
    if (_onChangeCallback === callback) _onChangeCallback = null;
  };
}

// ---------------------------------------------------------------------------
// React hook
// ---------------------------------------------------------------------------

/**
 * Returns the current theme settings, re-rendering when any setting changes.
 *
 * Built on `useSyncExternalStore` — the returned object is referentially
 * stable between updates, so `Object.is` checks in React skip re-renders
 * when nothing changed.
 *
 * @example
 * ```tsx
 * import { useThemeSettings } from 'react-native-material-design';
 *
 * function ThemeIndicator() {
 *   const { sourceColor, themeMode } = useThemeSettings();
 *   return <Text>Color: {sourceColor}, Mode: {themeMode}</Text>;
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Combined with updateThemeSettings for a settings screen
 * function SettingsToggle() {
 *   const { themeMode } = useThemeSettings();
 *   return (
 *     <Switch
 *       value={themeMode === 'dark'}
 *       onValueChange={(dark) =>
 *         updateThemeSettings({ themeMode: dark ? 'dark' : 'light' })
 *       }
 *     />
 *   );
 * }
 * ```
 */
function useThemeSettings(): ThemeSettings {
  return useSyncExternalStore(subscribeThemeSettings, getThemeSettings);
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export type { ReducedMotionMode, ThemeMode, ThemeSettings, ThemeSettingsListener };
export {
  getThemeSettings,
  initThemeSettings,
  onThemeSettingsChange,
  subscribeThemeSettings,
  updateThemeSettings,
  useThemeSettings,
};
