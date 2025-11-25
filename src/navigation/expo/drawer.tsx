import type { TabNavigationState } from '@react-navigation/native';
import { withLayoutContext } from 'expo-router';

import {
  type DrawerNavigationEventMap,
  DrawerNavigator,
  type DrawerNavigatorProps,
  type DrawerScreenOptions,
} from '../drawer';

const Drawer = withLayoutContext<
  DrawerScreenOptions,
  typeof DrawerNavigator,
  TabNavigationState<Record<string, object | undefined>>,
  DrawerNavigationEventMap
>(DrawerNavigator);

export type { DrawerNavigatorProps, DrawerScreenOptions };
export { Drawer };
export type {
  DrawerAppbarProps,
  DrawerContextValue,
  DrawerNavigationEventMap,
  DrawerNavigationHelpers,
  DrawerNavigationProp,
  DrawerScreenProps,
} from '../drawer';
export { DrawerAppbar, useDrawer } from '../drawer';
