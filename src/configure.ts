import { StyleSheet } from 'react-native-unistyles';

import type { Breakpoints, Themes } from './theme';
import { initThemeSettings } from './theme/settings';
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
  const { adaptiveThemes = true, breakpoints, sourceColor, motionScheme, ...staticOptions } = options;
  const themes = generateThemes({ ...staticOptions, sourceColor, motionScheme });

  StyleSheet.configure({
    themes,
    breakpoints: breakpoints ?? buildBreakpoints(),
    settings: {
      adaptiveThemes,
    },
  });

  // Initialize the runtime settings store with values matching this configuration.
  // sourceColor and motionScheme may be undefined — initThemeSettings merges
  // against DEFAULT_SETTINGS, so undefined fields get the canonical defaults.
  initThemeSettings(
    {
      sourceColor,
      themeMode: adaptiveThemes ? 'auto' : 'light',
      motionScheme,
      reducedMotion: 'device',
    },
    staticOptions,
  );

  loadFonts().catch((error) => {
    if (__DEV__) {
      console.warn('Failed to load Material Symbols fonts:', error);
    }
  });

  return themes;
}

export type { ConfigureOptions };
export { configure };
