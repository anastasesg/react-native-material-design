import 'react-native-material-design/init';
import 'expo-router/entry';

import type { Breakpoints, Themes } from 'react-native-material-design';

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends Themes {}
  export interface UnistylesBreakpoints extends Breakpoints {}
}
