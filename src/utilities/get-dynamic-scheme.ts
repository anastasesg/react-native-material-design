import { DynamicScheme, type Theme } from '@material/material-color-utilities';

export function getDynamicScheme(dark: boolean, theme: Theme): DynamicScheme {
  return new DynamicScheme({
    isDark: dark,
    sourceColorArgb: theme.source,
    variant: 4,
    contrastLevel: 0,
    primaryPalette: theme.palettes.primary,
    secondaryPalette: theme.palettes.secondary,
    tertiaryPalette: theme.palettes.tertiary,
    neutralPalette: theme.palettes.neutral,
    neutralVariantPalette: theme.palettes.neutralVariant,
  });
}
