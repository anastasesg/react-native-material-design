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
import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { AppbarHeader, type AppbarHeaderProps } from '../components/ui/app-bar';
import { Divider } from '../components/ui/divider';
import type { MaterialSymbol } from '../components/ui/icon';
import {
  NavigationDrawer as NavigationDrawerComponent,
  NavigationDrawerIcon,
  NavigationDrawerItem,
  NavigationDrawerLabel,
  NavigationDrawerSectionLabel,
  type NavigationDrawerVariant,
} from '../components/ui/navigation-drawer';
import { getDisplayName } from '../utilities';

// =============================================================================
// Types
// =============================================================================

type DrawerNavigationEventMap = {
  /** Fires when the user taps a drawer item. */
  drawerItemPress: { data: undefined; canPreventDefault: true };
  /** Fires when the drawer opens. */
  drawerOpen: { data: undefined };
  /** Fires when the drawer closes. */
  drawerClose: { data: undefined };
};

type DrawerScreenOptions = {
  /** Material Symbol icon name for the drawer item. */
  drawerIcon?: MaterialSymbol;
  /** Label text for the drawer item. Falls back to screen name if omitted. */
  drawerLabel?: string;
  /** Section group this screen belongs to. Items with the same section are grouped together. */
  drawerSection?: string;
};

type DrawerNavigationHelpers = NavigationHelpers<ParamListBase, DrawerNavigationEventMap> &
  TabActionHelpers<ParamListBase>;

type DrawerNavigationProp<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = keyof ParamList,
  NavigatorID extends string | undefined = undefined,
> = NavigationProp<
  ParamList,
  RouteName,
  NavigatorID,
  TabNavigationState<ParamList>,
  DrawerScreenOptions,
  DrawerNavigationEventMap
> &
  TabActionHelpers<ParamList>;

type DrawerScreenProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = keyof ParamList,
  NavigatorID extends string | undefined = undefined,
> = {
  navigation: DrawerNavigationProp<ParamList, RouteName, NavigatorID>;
  route: RouteProp<ParamList, RouteName>;
};

type DrawerNavigatorProps = DefaultNavigatorOptions<
  ParamListBase,
  string | undefined,
  TabNavigationState<ParamListBase>,
  DrawerScreenOptions,
  DrawerNavigationEventMap,
  DrawerNavigationProp<ParamListBase>
> &
  TabRouterOptions & {
    /** Drawer variant. Default: 'modal'. */
    variant?: NavigationDrawerVariant;
    /** Composable app bar rendered above the content area. Use DrawerAppbar. */
    appbar?: React.ReactElement<DrawerAppbarProps>;
  };

// =============================================================================
// Drawer context (for useDrawer hook)
// =============================================================================

type DrawerContextValue = {
  open: () => void;
  close: () => void;
  toggle: () => void;
  isOpen: boolean;
  /** Label of the currently focused screen. */
  focusedLabel: string;
};

const DrawerContext = React.createContext<DrawerContextValue | null>(null);

function useDrawer(): DrawerContextValue {
  const ctx = React.useContext(DrawerContext);
  if (!ctx) {
    throw new Error('useDrawer must be used within a Drawer navigator');
  }
  return ctx;
}

// =============================================================================
// DrawerAppbar (composable app bar slot)
// =============================================================================

const DRAWER_APPBAR = 'DrawerAppbar';

type DrawerAppbarProps = AppbarHeaderProps;

function DrawerAppbar({ children, ...props }: DrawerAppbarProps) {
  const { toggle, focusedLabel } = useDrawer();

  const enhancedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    const displayName = getDisplayName(child);

    // Auto-wire leading action: the first AppbarAction without onPress
    // gets the drawer toggle. With the compound API, the icon name is on
    // the child IconButtonIcon, not on AppbarAction itself.
    if (displayName === 'AppbarAction' && !(child.props as any).onPress) {
      return React.cloneElement(child, { onPress: toggle } as any);
    }

    // Auto-wire title: AppbarTitle without explicit title gets the screen label
    if (displayName === 'AppbarTitle') {
      if (!(child.props as any).title) {
        return React.cloneElement(child, { title: focusedLabel } as any);
      }
    }

    return child;
  });

  return <AppbarHeader {...props}>{enhancedChildren}</AppbarHeader>;
}
DrawerAppbar.displayName = DRAWER_APPBAR;

// =============================================================================
// Navigator
// =============================================================================

function DrawerNavigator({
  id,
  initialRouteName,
  backBehavior,
  children,
  layout,
  screenListeners,
  screenOptions,
  variant = 'modal',
  appbar,
}: DrawerNavigatorProps) {
  const { state, descriptors, navigation, NavigationContent } = useNavigationBuilder<
    TabNavigationState<ParamListBase>,
    TabRouterOptions,
    TabActionHelpers<ParamListBase>,
    DrawerScreenOptions,
    DrawerNavigationEventMap
  >(TabRouter, {
    id,
    initialRouteName,
    backBehavior,
    children,
    layout,
    screenListeners,
    screenOptions,
  });

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleOpenChange = React.useCallback((open: boolean) => {
    setDrawerOpen(open);
    navigation.emit({
      type: open ? 'drawerOpen' : 'drawerClose',
      target: state.routes[state.index]?.key,
    });
  }, [navigation, state.routes, state.index]);

  const focusedRoute = state.routes[state.index]!;
  const focusedDescriptor = descriptors[focusedRoute.key]!;
  const focusedLabel = focusedDescriptor.options.drawerLabel ?? focusedRoute.name;

  const drawerCtx = React.useMemo<DrawerContextValue>(
    () => ({
      open: () => handleOpenChange(true),
      close: () => handleOpenChange(false),
      toggle: () =>
        setDrawerOpen((prev) => {
          const next = !prev;
          navigation.emit({
            type: next ? 'drawerOpen' : 'drawerClose',
            target: state.routes[state.index]?.key,
          });
          return next;
        }),
      isOpen: drawerOpen,
      focusedLabel,
    }),

    [drawerOpen, handleOpenChange, navigation, state.routes, state.index, focusedLabel],
  );

  // Group routes by drawerSection (consecutive items with the same section are grouped)
  type RouteEntry = TabNavigationState<ParamListBase>['routes'][number];
  const sections = React.useMemo(() => {
    const groups: { section: string | undefined; routes: RouteEntry[] }[] = [];
    for (const route of state.routes as RouteEntry[]) {
      const descriptor = descriptors[route.key]!;
      const section = descriptor.options.drawerSection;
      const last = groups[groups.length - 1];
      if (last && last.section === section) {
        last.routes.push(route);
      } else {
        groups.push({ section, routes: [route] });
      }
    }
    return groups;
  }, [state.routes, descriptors]);

  return (
    <DrawerContext.Provider value={drawerCtx}>
      <NavigationContent>
        <View style={styles.container}>
          {appbar}
          <View style={styles.content}>{focusedDescriptor.render()}</View>
        </View>

        <NavigationDrawerComponent
          variant={variant}
          open={drawerOpen}
          onOpenChange={handleOpenChange}
          value={focusedRoute.name}
          onValueChange={(name: string) => {
            const target = state.routes.find((r) => r.name === name)?.key;

            const event = navigation.emit({
              type: 'drawerItemPress',
              target,
              canPreventDefault: true,
            });

            if (!event.defaultPrevented) {
              navigation.navigate(name);
              setDrawerOpen(false);
            }
          }}
        >
          {sections.map((group, groupIndex) => (
            <React.Fragment key={group.section ?? groupIndex}>
              {groupIndex > 0 && <Divider />}
              {group.section && <NavigationDrawerSectionLabel>{group.section}</NavigationDrawerSectionLabel>}
              {group.routes.map((route) => {
                const { options } = descriptors[route.key]!;
                return (
                  <NavigationDrawerItem key={route.key} value={route.name}>
                    {options.drawerIcon && <NavigationDrawerIcon name={options.drawerIcon} />}
                    <NavigationDrawerLabel>{options.drawerLabel ?? route.name}</NavigationDrawerLabel>
                  </NavigationDrawerItem>
                );
              })}
            </React.Fragment>
          ))}
        </NavigationDrawerComponent>
      </NavigationContent>
    </DrawerContext.Provider>
  );
}

// =============================================================================
// Factory
// =============================================================================

const _createDrawer = createNavigatorFactory(DrawerNavigator);
const { Navigator, Screen, Group } = _createDrawer();
const Drawer = Object.assign(Navigator, { Screen, Group });

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
  DrawerAppbarProps,
  DrawerContextValue,
  DrawerNavigationEventMap,
  DrawerNavigationHelpers,
  DrawerNavigationProp,
  DrawerNavigatorProps,
  DrawerScreenOptions,
  DrawerScreenProps,
};
export { Drawer, DrawerAppbar, DrawerNavigator, useDrawer };
