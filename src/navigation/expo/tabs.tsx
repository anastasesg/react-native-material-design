import type { TabNavigationState } from '@react-navigation/native';
import { withLayoutContext } from 'expo-router';

import { type TabsNavigationEventMap, TabsNavigator, type TabsNavigatorProps, type TabsScreenOptions } from '../tabs';

const Tabs = withLayoutContext<
  TabsScreenOptions,
  typeof TabsNavigator,
  TabNavigationState<Record<string, object | undefined>>,
  TabsNavigationEventMap
>(TabsNavigator);

export type { TabsNavigatorProps, TabsScreenOptions };
export { Tabs };
export type { TabsNavigationEventMap, TabsNavigationHelpers, TabsNavigationProp, TabsScreenProps } from '../tabs';
