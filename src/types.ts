/**
 * Unistyles module augmentation.
 *
 * Provides type safety for `StyleSheet.create((theme) => ...)` by declaring
 * that `UnistylesThemes` extends the library's `Themes` type and
 * `UnistylesBreakpoints` extends the library's `Breakpoints` type.
 *
 * This file is included in the library's own tsconfig for internal type
 * safety. Consumers must add this augmentation in their own entry file:
 *
 * ```tsx
 * import { type Breakpoints, type Themes } from 'react-native-material-design';
 *
 * declare module 'react-native-unistyles' {
 *   export interface UnistylesThemes extends Themes {}
 *   export interface UnistylesBreakpoints extends Breakpoints {}
 * }
 * ```
 */
import type { Breakpoints, Themes } from './theme';

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends Themes {}
  export interface UnistylesBreakpoints extends Breakpoints {}
}
