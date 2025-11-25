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
import { Tab, TabIcon, TabLabel, Tabs as TabsComponent, type TabVariant } from '../components/ui/tabs';

// =============================================================================
// Types
// =============================================================================

type TopTabsNavigationEventMap = {
  /** Fires when the user taps a tab. */
  tabPress: { data: undefined; canPreventDefault: true };
  /** Fires when the user long-presses a tab. */
  tabLongPress: { data: undefined };
};

type TopTabsScreenOptions = {
  /** Material Symbol icon name for the tab. */
  tabIcon?: MaterialSymbol;
  /** Label text for the tab. Falls back to screen name if omitted. */
  tabLabel?: string;
};

type TopTabsNavigationHelpers = NavigationHelpers<ParamListBase, TopTabsNavigationEventMap> &
  TabActionHelpers<ParamListBase>;

type TopTabsNavigationProp<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = keyof ParamList,
  NavigatorID extends string | undefined = undefined,
> = NavigationProp<
  ParamList,
  RouteName,
  NavigatorID,
  TabNavigationState<ParamList>,
  TopTabsScreenOptions,
  TopTabsNavigationEventMap
> &
  TabActionHelpers<ParamList>;

type TopTabsScreenProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = keyof ParamList,
  NavigatorID extends string | undefined = undefined,
> = {
  navigation: TopTabsNavigationProp<ParamList, RouteName, NavigatorID>;
  route: RouteProp<ParamList, RouteName>;
};

type TopTabsNavigatorProps = DefaultNavigatorOptions<
  ParamListBase,
  string | undefined,
  TabNavigationState<ParamListBase>,
  TopTabsScreenOptions,
  TopTabsNavigationEventMap,
  TopTabsNavigationProp<ParamListBase>
> &
  TabRouterOptions & {
    /** Tab bar variant: 'primary' or 'secondary'. */
    variant?: TabVariant;
    /** Whether the tab bar is horizontally scrollable. */
    scrollable?: boolean;
  };

// =============================================================================
// Navigator
// =============================================================================

function TopTabsNavigator({
  id,
  initialRouteName,
  backBehavior,
  children,
  layout,
  screenListeners,
  screenOptions,
  variant = 'primary',
  scrollable = false,
}: TopTabsNavigatorProps) {
  const { state, descriptors, navigation, NavigationContent } = useNavigationBuilder<
    TabNavigationState<ParamListBase>,
    TabRouterOptions,
    TabActionHelpers<ParamListBase>,
    TopTabsScreenOptions,
    TopTabsNavigationEventMap
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
        <TabsComponent
          variant={variant}
          scrollable={scrollable}
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
        >
          {state.routes.map((route) => {
            const { options } = descriptors[route.key]!;
            return (
              <Tab key={route.key} value={route.name}>
                {options.tabIcon && <TabIcon name={options.tabIcon} />}
                <TabLabel>{options.tabLabel ?? route.name}</TabLabel>
              </Tab>
            );
          })}
        </TabsComponent>
        <View style={styles.content}>{focusedDescriptor.render()}</View>
      </View>
    </NavigationContent>
  );
}

// =============================================================================
// Factory
// =============================================================================

const _createTopTabs = createNavigatorFactory(TopTabsNavigator);
const { Navigator, Screen, Group } = _createTopTabs();
const TopTabs = Object.assign(Navigator, { Screen, Group });

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
  TopTabsNavigationEventMap,
  TopTabsNavigationHelpers,
  TopTabsNavigationProp,
  TopTabsNavigatorProps,
  TopTabsScreenOptions,
  TopTabsScreenProps,
};
export { TopTabs, TopTabsNavigator };
