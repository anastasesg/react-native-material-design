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
  NavigationRail as NavigationRailComponent,
  NavigationRailIcon,
  NavigationRailItem,
  NavigationRailLabel,
  type NavigationRailMode,
  NavigationRailSectionLabel,
} from '../components/ui/navigation-rail';
import { getDisplayName } from '../utilities';

// =============================================================================
// Types
// =============================================================================

type RailNavigationEventMap = {
  /** Fires when the user taps a rail item. */
  railItemPress: { data: undefined; canPreventDefault: true };
  /** Fires when the rail expands. */
  railOpen: { data: undefined };
  /** Fires when the rail collapses. */
  railClose: { data: undefined };
};

type RailScreenOptions = {
  /** Material Symbol icon name for the rail item. */
  railIcon?: MaterialSymbol;
  /** Label text for the rail item. Falls back to screen name if omitted. */
  railLabel?: string;
  /** Section group this screen belongs to. Items with the same section are grouped together. */
  railSection?: string;
};

type RailNavigationHelpers = NavigationHelpers<ParamListBase, RailNavigationEventMap> & TabActionHelpers<ParamListBase>;

type RailNavigationProp<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = keyof ParamList,
  NavigatorID extends string | undefined = undefined,
> = NavigationProp<
  ParamList,
  RouteName,
  NavigatorID,
  TabNavigationState<ParamList>,
  RailScreenOptions,
  RailNavigationEventMap
> &
  TabActionHelpers<ParamList>;

type RailScreenProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = keyof ParamList,
  NavigatorID extends string | undefined = undefined,
> = {
  navigation: RailNavigationProp<ParamList, RouteName, NavigatorID>;
  route: RouteProp<ParamList, RouteName>;
};

type RailNavigatorProps = DefaultNavigatorOptions<
  ParamListBase,
  string | undefined,
  TabNavigationState<ParamListBase>,
  RailScreenOptions,
  RailNavigationEventMap,
  RailNavigationProp<ParamListBase>
> &
  TabRouterOptions & {
    /** How the expanded rail behaves: standard (inline) or modal (overlay). Default: 'modal'. */
    mode?: NavigationRailMode;
    /** Header content rendered below the menu button in the rail (FAB, etc.). */
    header?: React.ReactNode;
    /** Alignment of items within the rail. */
    alignItems?: 'top' | 'center';
    /** Width of the expanded rail. Clamped to 220-360dp. */
    expandedWidth?: number;
    /** Composable app bar rendered above the content area. Use RailAppbar. */
    appbar?: React.ReactElement<RailAppbarProps>;
  };

// =============================================================================
// Rail context (for useRail hook)
// =============================================================================

type RailContextValue = {
  expand: () => void;
  collapse: () => void;
  toggle: () => void;
  isExpanded: boolean;
  /** Label of the currently focused screen. */
  focusedLabel: string;
};

const RailContext = React.createContext<RailContextValue | null>(null);

function useRail(): RailContextValue {
  const ctx = React.useContext(RailContext);
  if (!ctx) {
    throw new Error('useRail must be used within a Rail navigator');
  }
  return ctx;
}

// =============================================================================
// RailAppbar (composable app bar slot)
// =============================================================================

const RAIL_APPBAR = 'RailAppbar';

type RailAppbarProps = AppbarHeaderProps;

function RailAppbar({ children, ...props }: RailAppbarProps) {
  const { focusedLabel } = useRail();

  const enhancedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    const displayName = getDisplayName(child);

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
RailAppbar.displayName = RAIL_APPBAR;

// =============================================================================
// Navigator
// =============================================================================

function RailNavigator({
  id,
  initialRouteName,
  backBehavior,
  children,
  layout,
  screenListeners,
  screenOptions,
  mode = 'modal',
  header: railHeader,
  alignItems,
  expandedWidth,
  appbar,
}: RailNavigatorProps) {
  const { state, descriptors, navigation, NavigationContent } = useNavigationBuilder<
    TabNavigationState<ParamListBase>,
    TabRouterOptions,
    TabActionHelpers<ParamListBase>,
    RailScreenOptions,
    RailNavigationEventMap
  >(TabRouter, {
    id,
    initialRouteName,
    backBehavior,
    children,
    layout,
    screenListeners,
    screenOptions,
  });

  const [railExpanded, setRailExpanded] = React.useState(false);

  const handleExpandedChange = React.useCallback((expanded: boolean) => {
    setRailExpanded(expanded);
    navigation.emit({
      type: expanded ? 'railOpen' : 'railClose',
      target: state.routes[state.index]?.key,
    });
  }, [navigation, state.routes, state.index]);

  const focusedRoute = state.routes[state.index]!;
  const focusedDescriptor = descriptors[focusedRoute.key]!;
  const focusedLabel = focusedDescriptor.options.railLabel ?? focusedRoute.name;

  const railCtx = React.useMemo<RailContextValue>(
    () => ({
      expand: () => handleExpandedChange(true),
      collapse: () => handleExpandedChange(false),
      toggle: () =>
        setRailExpanded((prev) => {
          const next = !prev;
          navigation.emit({
            type: next ? 'railOpen' : 'railClose',
            target: state.routes[state.index]?.key,
          });
          return next;
        }),
      isExpanded: railExpanded,
      focusedLabel,
    }),

    [railExpanded, handleExpandedChange, navigation, state.routes, state.index, focusedLabel],
  );

  // Group routes by railSection
  type RouteEntry = TabNavigationState<ParamListBase>['routes'][number];
  const sections = React.useMemo(() => {
    const groups: { section: string | undefined; routes: RouteEntry[] }[] = [];
    for (const route of state.routes as RouteEntry[]) {
      const descriptor = descriptors[route.key]!;
      const section = descriptor.options.railSection;
      const last = groups[groups.length - 1];
      if (last && last.section === section) {
        last.routes.push(route);
      } else {
        groups.push({ section, routes: [route] });
      }
    }
    return groups;
  }, [state.routes, descriptors]);

  const handleValueChange = React.useCallback((name: string) => {
    const target = state.routes.find((r) => r.name === name)?.key;

    const event = navigation.emit({
      type: 'railItemPress',
      target,
      canPreventDefault: true,
    });

    if (!event.defaultPrevented) {
      navigation.navigate(name);
    }
  }, [state.routes, navigation]);

  const railItems = sections.map((group, groupIndex) => (
    <React.Fragment key={group.section ?? groupIndex}>
      {groupIndex > 0 && <Divider />}
      {group.section && <NavigationRailSectionLabel>{group.section}</NavigationRailSectionLabel>}
      {group.routes.map((route) => {
        const { options } = descriptors[route.key]!;
        return (
          <NavigationRailItem key={route.key} value={route.name}>
            {options.railIcon && <NavigationRailIcon name={options.railIcon} />}
            <NavigationRailLabel>{options.railLabel ?? route.name}</NavigationRailLabel>
          </NavigationRailItem>
        );
      })}
    </React.Fragment>
  ));

  return (
    <RailContext.Provider value={railCtx}>
      <NavigationContent>
        <View style={styles.row}>
          {/* NavigationRail handles collapsed/expanded internally */}
          <NavigationRailComponent
            mode={mode}
            open={railExpanded}
            onOpenChange={handleExpandedChange}
            value={focusedRoute.name}
            onValueChange={handleValueChange}
            header={railHeader}
            alignItems={alignItems}
            expandedWidth={expandedWidth}
          >
            {railItems}
          </NavigationRailComponent>

          {/* Content area */}
          <View style={styles.content}>
            {appbar}
            <View style={styles.content}>{focusedDescriptor.render()}</View>
          </View>
        </View>
      </NavigationContent>
    </RailContext.Provider>
  );
}

// =============================================================================
// Factory
// =============================================================================

const _createRail = createNavigatorFactory(RailNavigator);
const { Navigator, Screen, Group } = _createRail();
const Rail = Object.assign(Navigator, { Screen, Group });

// =============================================================================
// Styles
// =============================================================================

const styles = StyleSheet.create(() => ({
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
  },
}));

// =============================================================================
// Exports
// =============================================================================

export type {
  RailAppbarProps,
  RailContextValue,
  RailNavigationEventMap,
  RailNavigationHelpers,
  RailNavigationProp,
  RailNavigatorProps,
  RailScreenOptions,
  RailScreenProps,
};
export { Rail, RailAppbar, RailNavigator, useRail };
