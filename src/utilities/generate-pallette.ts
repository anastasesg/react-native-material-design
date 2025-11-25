import { hexFromArgb, TonalPalette } from '@material/material-color-utilities';

import type { Palette } from '@/theme/pallette';

export function generatePallette(palette: TonalPalette): Palette {
  return {
    tone: (tone: number) => hexFromArgb(palette.tone(tone)),
  };
}
