export type Palette = {
  tone(tone: number): string;
};

export type Palettes = {
  primary: Palette;
  secondary: Palette;
  tertiary: Palette;
  neutral: Palette;
  neutralVariant: Palette;
  error: Palette;
};
