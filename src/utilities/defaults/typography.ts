import type { Typography } from '@/theme';

const f = 'Roboto';

export function buildTypography(): Typography {
  return {
    display: {
      large: { fontFamily: f, letterSpacing: -0.25, fontWeight: '400', lineHeight: 64, fontSize: 57 },
      medium: { fontFamily: f, letterSpacing: 0, fontWeight: '400', lineHeight: 52, fontSize: 45 },
      small: { fontFamily: f, letterSpacing: 0, fontWeight: '400', lineHeight: 44, fontSize: 36 },
    },
    headline: {
      large: { fontFamily: f, letterSpacing: 0, fontWeight: '400', lineHeight: 40, fontSize: 32 },
      medium: { fontFamily: f, letterSpacing: 0, fontWeight: '400', lineHeight: 36, fontSize: 28 },
      small: { fontFamily: f, letterSpacing: 0, fontWeight: '400', lineHeight: 32, fontSize: 24 },
    },
    title: {
      large: { fontFamily: f, letterSpacing: 0, fontWeight: '400', lineHeight: 28, fontSize: 22 },
      medium: { fontFamily: f, letterSpacing: 0.15, fontWeight: '500', lineHeight: 24, fontSize: 16 },
      small: { fontFamily: f, letterSpacing: 0.1, fontWeight: '500', lineHeight: 20, fontSize: 14 },
    },
    body: {
      large: { fontFamily: f, letterSpacing: 0.5, fontWeight: '400', lineHeight: 24, fontSize: 16 },
      medium: { fontFamily: f, letterSpacing: 0.25, fontWeight: '400', lineHeight: 20, fontSize: 14 },
      small: { fontFamily: f, letterSpacing: 0.4, fontWeight: '400', lineHeight: 16, fontSize: 12 },
    },
    label: {
      large: { fontFamily: f, letterSpacing: 0.1, fontWeight: '500', lineHeight: 20, fontSize: 14 },
      largeProminent: { fontFamily: f, letterSpacing: 0.1, fontWeight: '700', lineHeight: 20, fontSize: 14 },
      medium: { fontFamily: f, letterSpacing: 0.5, fontWeight: '500', lineHeight: 16, fontSize: 12 },
      mediumProminent: { fontFamily: f, letterSpacing: 0.5, fontWeight: '700', lineHeight: 16, fontSize: 12 },
      small: { fontFamily: f, letterSpacing: 0.5, fontWeight: '500', lineHeight: 16, fontSize: 11 },
    },
    emphasized: {
      display: {
        large: { fontFamily: f, letterSpacing: -0.25, fontWeight: '500', lineHeight: 64, fontSize: 57 },
        medium: { fontFamily: f, letterSpacing: 0, fontWeight: '500', lineHeight: 52, fontSize: 45 },
        small: { fontFamily: f, letterSpacing: 0, fontWeight: '500', lineHeight: 44, fontSize: 36 },
      },
      headline: {
        large: { fontFamily: f, letterSpacing: 0, fontWeight: '500', lineHeight: 40, fontSize: 32 },
        medium: { fontFamily: f, letterSpacing: 0, fontWeight: '500', lineHeight: 36, fontSize: 28 },
        small: { fontFamily: f, letterSpacing: 0, fontWeight: '500', lineHeight: 32, fontSize: 24 },
      },
      title: {
        large: { fontFamily: f, letterSpacing: 0, fontWeight: '500', lineHeight: 28, fontSize: 22 },
        medium: { fontFamily: f, letterSpacing: 0.15, fontWeight: '700', lineHeight: 24, fontSize: 16 },
        small: { fontFamily: f, letterSpacing: 0.1, fontWeight: '700', lineHeight: 20, fontSize: 14 },
      },
      body: {
        large: { fontFamily: f, letterSpacing: 0.5, fontWeight: '500', lineHeight: 24, fontSize: 16 },
        medium: { fontFamily: f, letterSpacing: 0.25, fontWeight: '500', lineHeight: 20, fontSize: 14 },
        small: { fontFamily: f, letterSpacing: 0.4, fontWeight: '500', lineHeight: 16, fontSize: 12 },
      },
      label: {
        large: { fontFamily: f, letterSpacing: 0.1, fontWeight: '700', lineHeight: 20, fontSize: 14 },
        medium: { fontFamily: f, letterSpacing: 0.5, fontWeight: '700', lineHeight: 16, fontSize: 12 },
        small: { fontFamily: f, letterSpacing: 0.5, fontWeight: '700', lineHeight: 16, fontSize: 11 },
      },
    },
  };
}
