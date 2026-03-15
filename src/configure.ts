import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';

import type { Breakpoints, Themes } from './theme';
import { generateThemes, type GenerateThemesOptions, loadFonts } from './utilities';
import { buildBreakpoints } from './utilities/defaults';

// ---------------------------------------------------------------------------
// Configuration types
// ---------------------------------------------------------------------------

/** Options for {@link configure}. Extends theme generation with unistyles settings. */
type ConfigureOptions = GenerateThemesOptions & {
  /**
   * Automatically switch between light and dark themes based on device settings.
   * @default true
   */
  adaptiveThemes?: boolean;
  /**
   * M3 window size class breakpoints. Override to customize responsive behavior.
   * @default M3 defaults: compact=0, medium=600, expanded=840, large=1200, xlarge=1600
   */
  breakpoints?: Breakpoints;
};

// ---------------------------------------------------------------------------
// configure()
// ---------------------------------------------------------------------------

/**
 * Configures unistyles with M3 themes and loads fonts.
 *
 * Call this once at your app's entry point. Calling it again reconfigures
 * the themes (useful for runtime source color changes).
 *
 * @example
 * ```tsx
 * import { configure } from 'react-native-material-design';
 *
 * // Minimal — uses M3 default purple
 * configure();
 *
 * // Custom brand color
 * configure({ sourceColor: '#1B6B52' });
 *
 * // Full control
 * configure({
 *   sourceColor: '#1B6B52',
 *   motionScheme: 'standard',
 *   fontFamily: 'Inter',
 *   overrides: { shape: { full: 100 } },
 *   adaptiveThemes: false,
 * });
 * ```
 */
function configure(options: ConfigureOptions = {}): Themes {
  const { adaptiveThemes = true, breakpoints, ...themeOptions } = options;
  const themes = generateThemes(themeOptions);

  StyleSheet.configure({
    themes,
    breakpoints: breakpoints ?? buildBreakpoints(),
    settings: {
      adaptiveThemes,
    },
  });

  loadFonts().catch((error) => {
    if (__DEV__) {
      console.warn('Failed to load Material Symbols fonts:', error);
    }
  });

  return themes;
}

// ---------------------------------------------------------------------------
// Runtime helpers
// ---------------------------------------------------------------------------

/** Sets the active theme to 'light' or 'dark'. Disables adaptive themes. */
function setTheme(theme: 'light' | 'dark'): void {
  UnistylesRuntime.setTheme(theme);
}

/** Enables or disables automatic light/dark switching based on device settings. */
function setAdaptiveThemes(enabled: boolean): void {
  UnistylesRuntime.setAdaptiveThemes(enabled);
}

/**
 * Regenerates themes from a new source color and applies them immediately.
 * Useful for apps that let users pick a brand color at runtime.
 *
 * @example
 * ```tsx
 * import { updateSourceColor } from 'react-native-material-design';
 *
 * updateSourceColor('#FF5722');
 * ```
 */
function updateSourceColor(sourceColor: string, options: Omit<ConfigureOptions, 'sourceColor'> = {}): Themes {
  return configure({ ...options, sourceColor });
}

export type { ConfigureOptions };
export { configure, setAdaptiveThemes, setTheme, updateSourceColor };
