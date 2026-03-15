import 'expo-router/entry';

import { type Breakpoints, type Themes, configure } from 'react-native-material-design';

configure({ sourceColor: '#ad355f' });

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends Themes {}
  export interface UnistylesBreakpoints extends Breakpoints {}
}
