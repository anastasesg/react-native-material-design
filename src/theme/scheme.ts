/**
 * Material Design 3 color scheme type.
 * Defines all color roles used in Material Design 3 for consistent theming.
 * @see https://m3.material.io/styles/color/roles
 */
export type Scheme = {
  /** The base background color for the entire app. */
  get background(): string;
  /** Color for text and icons displayed on the background. */
  get onBackground(): string;
  /** Background color for surfaces such as cards, sheets, and menus. */
  get surface(): string;
  /** A dimmed variant of the surface color. */
  get surfaceDim(): string;
  /** A brightened variant of the surface color. */
  get surfaceBright(): string;
  /** The lowest elevation surface container color. */
  get surfaceContainerLowest(): string;
  /** A low elevation surface container color. */
  get surfaceContainerLow(): string;
  /** The standard surface container color. */
  get surfaceContainer(): string;
  /** A high elevation surface container color. */
  get surfaceContainerHigh(): string;
  /** The highest elevation surface container color. */
  get surfaceContainerHighest(): string;
  /** Color for text and icons displayed on surfaces. */
  get onSurface(): string;
  /** A variant of the surface color used for subtle differentiation. */
  get surfaceVariant(): string;
  /** Color for text and icons displayed on the surface variant. */
  get onSurfaceVariant(): string;
  /** A contrasting surface color used for inverse surfaces. */
  get inverseSurface(): string;
  /** Color for text and icons displayed on the inverse surface. */
  get inverseOnSurface(): string;
  /** Color used for component outlines and borders. */
  get outline(): string;
  /** A variant of the outline color for subtle outlines. */
  get outlineVariant(): string;
  /** Color used for shadows. */
  get shadow(): string;
  /** Color used for scrim overlays (e.g., modal backdrops). */
  get scrim(): string;
  /** Tint color applied to surfaces for elevation effects. */
  get surfaceTint(): string;
  /** The primary brand color used for prominent components like buttons and active states. */
  get primary(): string;
  /** Color for text and icons displayed on the primary color. */
  get onPrimary(): string;
  /** A container variant of the primary color used for less prominent primary elements. */
  get primaryContainer(): string;
  /** Color for text and icons displayed on the primary container. */
  get onPrimaryContainer(): string;
  /** A contrasting primary color used on inverse surfaces. */
  get inversePrimary(): string;
  /** A secondary accent color used for less prominent components. */
  get secondary(): string;
  /** Color for text and icons displayed on the secondary color. */
  get onSecondary(): string;
  /** A container variant of the secondary color used for less prominent secondary elements. */
  get secondaryContainer(): string;
  /** Color for text and icons displayed on the secondary container. */
  get onSecondaryContainer(): string;
  /** A tertiary accent color used for additional contrasting elements. */
  get tertiary(): string;
  /** Color for text and icons displayed on the tertiary color. */
  get onTertiary(): string;
  /** A container variant of the tertiary color used for less prominent tertiary elements. */
  get tertiaryContainer(): string;
  /** Color for text and icons displayed on the tertiary container. */
  get onTertiaryContainer(): string;
  /** Color used to indicate errors and destructive actions. */
  get error(): string;
  /** Color for text and icons displayed on the error color. */
  get onError(): string;
  /** A container variant of the error color used for error backgrounds. */
  get errorContainer(): string;
  /** Color for text and icons displayed on the error container. */
  get onErrorContainer(): string;
  /** A fixed primary color that doesn't change with elevation. */
  get primaryFixed(): string;
  /** A dimmed variant of the fixed primary color. */
  get primaryFixedDim(): string;
  /** Color for text and icons displayed on the fixed primary color. */
  get onPrimaryFixed(): string;
  /** Color for text and icons displayed on the dimmed fixed primary color. */
  get onPrimaryFixedVariant(): string;
  /** A fixed secondary color that doesn't change with elevation. */
  get secondaryFixed(): string;
  /** A dimmed variant of the fixed secondary color. */
  get secondaryFixedDim(): string;
  /** Color for text and icons displayed on the fixed secondary color. */
  get onSecondaryFixed(): string;
  /** Color for text and icons displayed on the dimmed fixed secondary color. */
  get onSecondaryFixedVariant(): string;
  /** A fixed tertiary color that doesn't change with elevation. */
  get tertiaryFixed(): string;
  /** A dimmed variant of the fixed tertiary color. */
  get tertiaryFixedDim(): string;
  /** Color for text and icons displayed on the fixed tertiary color. */
  get onTertiaryFixed(): string;
  /** Color for text and icons displayed on the dimmed fixed tertiary color. */
  get onTertiaryFixedVariant(): string;
};
