import type { TabNavigationState } from '@react-navigation/native';
import { withLayoutContext } from 'expo-router';

import { type RailNavigationEventMap, RailNavigator, type RailNavigatorProps, type RailScreenOptions } from '../rail';

const Rail = withLayoutContext<
  RailScreenOptions,
  typeof RailNavigator,
  TabNavigationState<Record<string, object | undefined>>,
  RailNavigationEventMap
>(RailNavigator);

export type { RailNavigatorProps, RailScreenOptions };
export { Rail };
export type {
  RailAppbarProps,
  RailContextValue,
  RailNavigationEventMap,
  RailNavigationHelpers,
  RailNavigationProp,
  RailScreenProps,
} from '../rail';
export { RailAppbar, useRail } from '../rail';
