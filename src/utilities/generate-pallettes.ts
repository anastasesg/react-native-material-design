import type { Theme } from '@material/material-color-utilities';

import type { Palettes } from '@/theme';

import { generatePallette } from './generate-pallette';

export function generatePalettes(palettes: Theme['palettes']): Palettes {
  return {
    primary: generatePallette(palettes.primary),
    secondary: generatePallette(palettes.secondary),
    tertiary: generatePallette(palettes.tertiary),
    neutral: generatePallette(palettes.neutral),
    neutralVariant: generatePallette(palettes.neutralVariant),
    error: generatePallette(palettes.error),
  };
}
