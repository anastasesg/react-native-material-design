export type TypographyStyle = {
  fontFamily: string;
  fontSize: number;
  lineHeight: number | undefined;
  letterSpacing: number;
  fontWeight: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  fontStyle?: 'normal' | 'italic' | undefined;
};

export type TypographyStyles = {
  small: TypographyStyle;
  medium: TypographyStyle;
  large: TypographyStyle;
};

export type LabelTypographyStyles = TypographyStyles & {
  largeProminent: TypographyStyle;
  mediumProminent: TypographyStyle;
};

export type Typography = {
  label: LabelTypographyStyles;
  body: TypographyStyles;
  title: TypographyStyles;
  headline: TypographyStyles;
  display: TypographyStyles;
  emphasized: {
    label: TypographyStyles;
    body: TypographyStyles;
    title: TypographyStyles;
    headline: TypographyStyles;
    display: TypographyStyles;
  };
};
