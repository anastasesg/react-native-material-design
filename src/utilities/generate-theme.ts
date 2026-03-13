import { argbFromHex, themeFromSourceColor } from '@material/material-color-utilities';

import type { Elevation, Motion, MotionScheme, Shape, SpringSet, State, Theme, Typography } from '@/theme';

import { generatePalettes } from './generate-pallettes';
import { generateScheme } from './generate-scheme';
import { getDynamicScheme } from './get-dynamic-scheme';

export function generateTheme(dark: boolean, sourceColor: string, motionScheme: MotionScheme = 'expressive'): Theme {
  const theme = themeFromSourceColor(argbFromHex(sourceColor));
  const palettes = generatePalettes(theme.palettes);

  const elevation: Elevation = {
    0: { elevation: 0, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0, shadowRadius: 0 },
    1: { elevation: 1, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.15, shadowRadius: 2 },
    2: { elevation: 2, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3 },
    3: { elevation: 3, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.15, shadowRadius: 8 },
    4: { elevation: 4, shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.15, shadowRadius: 10 },
    5: { elevation: 5, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.15, shadowRadius: 12 },
  };

  const expressiveSprings: SpringSet = {
    fastSpatial: { damping: 33.9, stiffness: 800 },
    fastEffects: { damping: 123.3, stiffness: 3800 },
    defaultSpatial: { damping: 31.2, stiffness: 380 },
    defaultEffects: { damping: 80, stiffness: 1600 },
    slowSpatial: { damping: 22.6, stiffness: 200 },
    slowEffects: { damping: 56.6, stiffness: 800 },
  };

  const standardSprings: SpringSet = {
    fastSpatial: { damping: 67.3, stiffness: 1400 },
    fastEffects: { damping: 123.3, stiffness: 3800 },
    defaultSpatial: { damping: 47.6, stiffness: 700 },
    defaultEffects: { damping: 80, stiffness: 1600 },
    slowSpatial: { damping: 31.2, stiffness: 300 },
    slowEffects: { damping: 56.6, stiffness: 800 },
  };

  const springs = { expressive: expressiveSprings, standard: standardSprings };

  const motion: Motion = {
    scheme: motionScheme,
    spring: springs[motionScheme],
    springs,
    easing: {
      emphasized: [0.2, 0, 0, 1],
      emphasizedDecelerate: [0.05, 0.7, 0.1, 1],
      emphasizedAccelerate: [0.3, 0, 0.8, 0.15],
      standard: [0.2, 0, 0, 1],
      standardDecelerate: [0, 0, 0, 1],
      standardAccelerate: [0.3, 0, 1, 1],
    },
    duration: {
      short1: 50,
      short2: 100,
      short3: 150,
      short4: 200,
      medium1: 250,
      medium2: 300,
      medium3: 350,
      medium4: 400,
      long1: 450,
      long2: 500,
      long3: 550,
      long4: 600,
      extraLong1: 700,
      extraLong2: 800,
      extraLong3: 900,
      extraLong4: 1000,
    },
  };

  const state: State = {
    hover: 0.08,
    focus: 0.1,
    pressed: 0.1,
    dragged: 0.16,
    disabledContainer: 0.12,
    disabledContent: 0.38,
  };

  const shape: Shape = {
    none: 0,
    xsmall: 4,
    small: 8,
    medium: 12,
    large: 16,
    largeIncreased: 20,
    xlarge: 28,
    xlargeIncreased: 32,
    xxlarge: 48,
    full: 9999,
  };
  const typography: Typography = {
    display: {
      large: {
        fontFamily: 'Roboto',
        letterSpacing: -0.25,
        fontWeight: '400',
        lineHeight: 64,
        fontSize: 57,
      },
      medium: {
        fontFamily: 'Roboto',
        letterSpacing: 0,
        fontWeight: '400',
        lineHeight: 52,
        fontSize: 45,
      },
      small: {
        fontFamily: 'Roboto',
        letterSpacing: 0,
        fontWeight: '400',
        lineHeight: 44,
        fontSize: 36,
      },
    },
    headline: {
      large: {
        fontFamily: 'Roboto',
        letterSpacing: 0,
        fontWeight: '400',
        lineHeight: 40,
        fontSize: 32,
      },
      medium: {
        fontFamily: 'Roboto',
        letterSpacing: 0,
        fontWeight: '400',
        lineHeight: 36,
        fontSize: 28,
      },
      small: {
        fontFamily: 'Roboto',
        letterSpacing: 0,
        fontWeight: '400',
        lineHeight: 32,
        fontSize: 24,
      },
    },
    title: {
      large: {
        fontFamily: 'Roboto',
        letterSpacing: 0,
        fontWeight: '400',
        lineHeight: 28,
        fontSize: 22,
      },
      medium: {
        fontFamily: 'Roboto',
        letterSpacing: 0.15,
        fontWeight: '500',
        lineHeight: 24,
        fontSize: 16,
      },
      small: {
        fontFamily: 'Roboto',
        letterSpacing: 0.1,
        fontWeight: '500',
        lineHeight: 20,
        fontSize: 14,
      },
    },
    body: {
      large: {
        fontFamily: 'Roboto',
        letterSpacing: 0.5,
        fontWeight: '400',
        lineHeight: 24,
        fontSize: 16,
      },
      medium: {
        fontFamily: 'Roboto',
        letterSpacing: 0.25,
        fontWeight: '400',
        lineHeight: 20,
        fontSize: 14,
      },
      small: {
        fontFamily: 'Roboto',
        letterSpacing: 0.4,
        fontWeight: '400',
        lineHeight: 16,
        fontSize: 12,
      },
    },
    label: {
      large: {
        fontFamily: 'Roboto',
        letterSpacing: 0.1,
        fontWeight: '500',
        lineHeight: 20,
        fontSize: 14,
      },
      medium: {
        fontFamily: 'Roboto',
        letterSpacing: 0.5,
        fontWeight: '500',
        lineHeight: 16,
        fontSize: 12,
      },
      small: {
        fontFamily: 'Roboto',
        letterSpacing: 0.5,
        fontWeight: '500',
        lineHeight: 16,
        fontSize: 11,
      },
    },
  };

  return {
    elevation,
    motion,
    shape,
    scheme: generateScheme(getDynamicScheme(dark, theme)),
    state,
    pallettes: palettes,
    typography,
  };
}
