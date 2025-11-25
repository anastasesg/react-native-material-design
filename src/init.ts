import { StyleSheet } from 'react-native-unistyles';

import type { Breakpoints, Themes } from './theme';
import { generateTheme, loadFonts } from './utilities';

const sourceColor = '#6750A4';

const darkTheme = generateTheme(true, sourceColor);
const lightTheme = generateTheme(false, sourceColor);

const themes: Themes = {
  dark: darkTheme,
  light: lightTheme,
};

// M3 window size classes
// https://m3.material.io/foundations/layout/applying-layout/window-size-classes
const breakpoints: Breakpoints = {
  compact: 0,
  medium: 600,
  expanded: 840,
  large: 1200,
  xlarge: 1600,
} as const;

StyleSheet.configure({
  themes,
  breakpoints,
  settings: {
    adaptiveThemes: true,
  },
});

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends Themes {}
  export interface UnistylesBreakpoints extends Breakpoints {}
}

// Automatically load fonts when this module is imported
loadFonts().catch((error) => {
  if (__DEV__) {
    console.warn('Failed to load Material Symbols fonts:', error);
  }
});
