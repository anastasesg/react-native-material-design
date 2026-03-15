import { argbFromHex, themeFromSourceColor } from '@material/material-color-utilities';

import type { Motion, MotionScheme, Shape, State, Theme, Themes, Typography } from '@/theme';

import { buildElevation, buildMotion, buildShape, buildState, buildTypography } from './defaults';
import { generatePalettes } from './generate-pallettes';
import { generateScheme } from './generate-scheme';
import { getDynamicScheme } from './get-dynamic-scheme';

// ---------------------------------------------------------------------------
// Options types
// ---------------------------------------------------------------------------

/** Options for generating a single theme (light or dark). */
type GenerateThemeOptions = {
  /** Whether to generate a dark theme. */
  dark: boolean;
  /** Hex color string used as the source for M3 dynamic color. @default '#6750A4' */
  sourceColor?: string;
  /** Motion scheme — controls spring bounciness. @default 'expressive' */
  motionScheme?: MotionScheme;
  /** Font family applied to all typography styles. @default 'Roboto' */
  fontFamily?: string;
  /** Deep-merged partial overrides applied after generation. */
  overrides?: ThemeOverrides;
};

/** Options for generating both light and dark themes in one call. */
type GenerateThemesOptions = Omit<GenerateThemeOptions, 'dark'> & {
  /** Overrides applied only to the light theme (merged after shared overrides). */
  lightOverrides?: ThemeOverrides;
  /** Overrides applied only to the dark theme (merged after shared overrides). */
  darkOverrides?: ThemeOverrides;
};

/** Partial theme structure for deep-merge overrides. */
type ThemeOverrides = {
  shape?: Partial<Shape>;
  state?: Partial<State>;
  motion?: DeepPartial<Pick<Motion, 'springs' | 'easing' | 'duration'>>;
};

type DeepPartial<T> = T extends Record<string, any> ? { [K in keyof T]?: DeepPartial<T[K]> } : T;

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const DEFAULT_SOURCE_COLOR = '#6750A4';
const DEFAULT_FONT_FAMILY = 'Roboto';

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function deepMerge<T extends Record<string, unknown>>(target: T, source: Record<string, unknown>): T {
  for (const key of Object.keys(source)) {
    const sourceVal = source[key];
    const targetVal = (target as Record<string, unknown>)[key];
    if (isPlainObject(sourceVal) && isPlainObject(targetVal)) {
      deepMerge(targetVal as Record<string, unknown>, sourceVal);
    } else {
      (target as Record<string, unknown>)[key] = sourceVal;
    }
  }
  return target;
}

/** Recursively sets `fontFamily` on every TypographyStyle leaf. */
function applyFontFamily(typography: Typography, fontFamily: string): void {
  const walk = (obj: Record<string, unknown>) => {
    for (const value of Object.values(obj)) {
      if (!isPlainObject(value)) continue;
      if ('fontFamily' in value && 'fontSize' in value) {
        value.fontFamily = fontFamily;
      } else {
        walk(value);
      }
    }
  };
  walk(typography);
}

function applyOverrides(theme: Theme, overrides: ThemeOverrides): void {
  if (overrides.shape) deepMerge(theme.shape, overrides.shape);
  if (overrides.state) deepMerge(theme.state, overrides.state);
  if (overrides.motion) {
    deepMerge(theme.motion, overrides.motion);
    theme.motion.spring = theme.motion.springs[theme.motion.scheme];
  }
}

// ---------------------------------------------------------------------------
// Core generation
// ---------------------------------------------------------------------------

function buildTheme(dark: boolean, sourceColor: string, motionScheme: MotionScheme, fontFamily: string): Theme {
  const mcuTheme = themeFromSourceColor(argbFromHex(sourceColor));
  const palettes = generatePalettes(mcuTheme.palettes);
  const typography = buildTypography();
  if (fontFamily !== DEFAULT_FONT_FAMILY) applyFontFamily(typography, fontFamily);

  return {
    elevation: buildElevation(),
    motion: buildMotion(motionScheme),
    shape: buildShape(),
    scheme: generateScheme(getDynamicScheme(dark, mcuTheme)),
    state: buildState(),
    pallettes: palettes,
    typography,
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Generates a single M3 theme (light or dark).
 *
 * @example
 * ```tsx
 * const light = generateTheme({ dark: false, sourceColor: '#1B6B52' });
 * const dark = generateTheme({ dark: true, sourceColor: '#1B6B52', fontFamily: 'Inter' });
 * ```
 */
export function generateTheme(options: GenerateThemeOptions): Theme {
  const theme = buildTheme(
    options.dark,
    options.sourceColor ?? DEFAULT_SOURCE_COLOR,
    options.motionScheme ?? 'expressive',
    options.fontFamily ?? DEFAULT_FONT_FAMILY,
  );
  if (options.overrides) applyOverrides(theme, options.overrides);
  return theme;
}

/**
 * Generates both light and dark M3 themes from a single set of options.
 *
 * @example
 * ```tsx
 * const { light, dark } = generateThemes({ sourceColor: '#1B6B52' });
 *
 * const { light, dark } = generateThemes({
 *   sourceColor: '#1B6B52',
 *   motionScheme: 'standard',
 *   fontFamily: 'Inter',
 *   overrides: { shape: { full: 100 } },
 * });
 * ```
 */
export function generateThemes(options: GenerateThemesOptions = {}): Themes {
  const light = generateTheme({ ...options, dark: false });
  const dark = generateTheme({ ...options, dark: true });

  if (options.lightOverrides) applyOverrides(light, options.lightOverrides);
  if (options.darkOverrides) applyOverrides(dark, options.darkOverrides);

  return { light, dark };
}

export type { GenerateThemeOptions, GenerateThemesOptions, ThemeOverrides };
