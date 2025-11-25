import type { TabNavigationState } from '@react-navigation/native';
import { withLayoutContext } from 'expo-router';

import {
  type TopTabsNavigationEventMap,
  TopTabsNavigator,
  type TopTabsNavigatorProps,
  type TopTabsScreenOptions,
} from '../top-tabs';

const TopTabs = withLayoutContext<
  TopTabsScreenOptions,
  typeof TopTabsNavigator,
  TabNavigationState<Record<string, object | undefined>>,
  TopTabsNavigationEventMap
>(TopTabsNavigator);

export type { TopTabsNavigatorProps, TopTabsScreenOptions };
export { TopTabs };
export type {
  TopTabsNavigationEventMap,
  TopTabsNavigationHelpers,
  TopTabsNavigationProp,
  TopTabsScreenProps,
} from '../top-tabs';
