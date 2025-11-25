import {
  createNavigatorFactory,
  type DefaultNavigatorOptions,
  type NavigationHelpers,
  type NavigationProp,
  type ParamListBase,
  type RouteProp,
  type TabActionHelpers,
  type TabNavigationState,
  TabRouter,
  type TabRouterOptions,
  useNavigationBuilder,
} from '@react-navigation/native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import type { MaterialSymbol } from '../components/ui/icon';
import {
  NavigationBar,
  NavigationBarIcon,
  NavigationBarItem,
  type NavigationBarItemLayout,
  NavigationBarLabel,
} from '../components/ui/navigation-bar';

// =============================================================================
// Types
// =============================================================================

type TabsNavigationEventMap = {
  /** Fires when the user taps a tab in the navigation bar. */
  tabPress: { data: undefined; canPreventDefault: true };
  /** Fires when the user long-presses a tab in the navigation bar. */
  tabLongPress: { data: undefined };
};

type TabsScreenOptions = {
  /** Material Symbol icon name for the tab. */
  tabIcon?: MaterialSymbol;
  /** Label text for the tab. Falls back to screen name if omitted. */
  tabLabel?: string;
};

type TabsNavigationHelpers = NavigationHelpers<ParamListBase, TabsNavigationEventMap> & TabActionHelpers<ParamListBase>;

type TabsNavigationProp<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = keyof ParamList,
  NavigatorID extends string | undefined = undefined,
> = NavigationProp<
  ParamList,
  RouteName,
  NavigatorID,
  TabNavigationState<ParamList>,
  TabsScreenOptions,
  TabsNavigationEventMap
> &
  TabActionHelpers<ParamList>;

type TabsScreenProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = keyof ParamList,
  NavigatorID extends string | undefined = undefined,
> = {
  navigation: TabsNavigationProp<ParamList, RouteName, NavigatorID>;
  route: RouteProp<ParamList, RouteName>;
};

type TabsNavigatorProps = DefaultNavigatorOptions<
  ParamListBase,
  string | undefined,
  TabNavigationState<ParamListBase>,
  TabsScreenOptions,
  TabsNavigationEventMap,
  TabsNavigationProp<ParamListBase>
> &
  TabRouterOptions & {
    /** Item layout direction passed to NavigationBar. */
    itemLayout?: NavigationBarItemLayout;
  };

// =============================================================================
// Navigator
// =============================================================================

function TabsNavigator({
  id,
  initialRouteName,
  backBehavior,
  children,
  layout,
  screenListeners,
  screenOptions,
  itemLayout = 'vertical',
}: TabsNavigatorProps) {
  const { state, descriptors, navigation, NavigationContent } = useNavigationBuilder<
    TabNavigationState<ParamListBase>,
    TabRouterOptions,
    TabActionHelpers<ParamListBase>,
    TabsScreenOptions,
    TabsNavigationEventMap
  >(TabRouter, {
    id,
    initialRouteName,
    backBehavior,
    children,
    layout,
    screenListeners,
    screenOptions,
  });

  const focusedRoute = state.routes[state.index]!;
  const focusedDescriptor = descriptors[focusedRoute.key]!;

  return (
    <NavigationContent>
      <View style={styles.container}>
        <View style={styles.content}>{focusedDescriptor.render()}</View>
        <NavigationBar
          value={focusedRoute.name}
          onValueChange={(name: string) => {
            const target = state.routes.find((r) => r.name === name)?.key;

            const event = navigation.emit({
              type: 'tabPress',
              target,
              canPreventDefault: true,
            });

            if (!event.defaultPrevented) {
              navigation.navigate(name);
            }
          }}
          itemLayout={itemLayout}
        >
          {state.routes.map((route) => {
            const { options } = descriptors[route.key]!;
            return (
              <NavigationBarItem key={route.key} value={route.name}>
                {options.tabIcon && <NavigationBarIcon name={options.tabIcon} />}
                <NavigationBarLabel>{options.tabLabel ?? route.name}</NavigationBarLabel>
              </NavigationBarItem>
            );
          })}
        </NavigationBar>
      </View>
    </NavigationContent>
  );
}

// =============================================================================
// Factory
// =============================================================================

const _createTabs = createNavigatorFactory(TabsNavigator);
const { Navigator, Screen, Group } = _createTabs();
const Tabs = Object.assign(Navigator, { Screen, Group });

// =============================================================================
// Styles
// =============================================================================

const styles = StyleSheet.create(() => ({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
}));

// =============================================================================
// Exports
// =============================================================================

export type {
  TabsNavigationEventMap,
  TabsNavigationHelpers,
  TabsNavigationProp,
  TabsNavigatorProps,
  TabsScreenOptions,
  TabsScreenProps,
};
export { Tabs, TabsNavigator };
