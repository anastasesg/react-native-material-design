import type { Elevation } from './elevation';
import type { Motion } from './motion';
import type { Palettes } from './pallette';
import type { Scheme } from './scheme';
import type { Shape } from './shape';
import type { State } from './state';
import type { Typography } from './typography';

export type Theme = {
  elevation: Elevation;
  motion: Motion;
  shape: Shape;
  scheme: Scheme;
  state: State;
  pallettes: Palettes;
  typography: Typography;
};

export type Themes = {
  dark: Theme;
  light: Theme;
};
