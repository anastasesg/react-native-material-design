import { useWindowDimensions } from 'react-native';
import { Drawer, DrawerAppbar } from 'react-native-material-design/navigation/expo/drawer';
import { Rail, RailAppbar } from 'react-native-material-design/navigation/expo/rail';
import { AppbarAction, AppbarActions, AppbarTitle } from 'react-native-material-design/ui/app-bar';
import type { MaterialSymbol } from 'react-native-material-design/ui/icon';
import { IconButtonIcon } from 'react-native-material-design/ui/icon-button';

// M3 expanded breakpoint — switch from Drawer to Rail
const EXPANDED_BREAKPOINT = 840;

type ScreenDef = {
  name: string;
  label: string;
  icon: MaterialSymbol;
  section?: string;
};

const SCREENS: ScreenDef[] = [
  // Landing
  { name: 'index', label: 'Home', icon: 'home' },

  // Buttons
  { name: 'buttons', label: 'Buttons', icon: 'smart_button', section: 'Buttons' },
  { name: 'icon-buttons', label: 'Icon buttons', icon: 'radio_button_checked', section: 'Buttons' },
  { name: 'split-buttons', label: 'Split button', icon: 'call_split', section: 'Buttons' },
  { name: 'button-groups', label: 'Button groups', icon: 'view_column', section: 'Buttons' },
  { name: 'fabs', label: 'FABs', icon: 'add_circle', section: 'Buttons' },
  { name: 'extended-fabs', label: 'Extended FABs', icon: 'add_box', section: 'Buttons' },
  { name: 'fab-menu', label: 'FAB menu', icon: 'menu_open', section: 'Buttons' },

  // Date & time pickers
  { name: 'date-picker', label: 'Date picker', icon: 'calendar_today', section: 'Date & time pickers' },
  { name: 'time-picker', label: 'Time picker', icon: 'schedule', section: 'Date & time pickers' },

  // Loading & progress
  { name: 'loading-indicator', label: 'Loading indicator', icon: 'progress_activity', section: 'Loading & progress' },
  { name: 'progress-indicators', label: 'Progress indicators', icon: 'clock_loader_40', section: 'Loading & progress' },

  // Navigation
  { name: 'navigation-bar', label: 'Navigation bar', icon: 'bottom_navigation', section: 'Navigation' },
  { name: 'navigation-drawer', label: 'Navigation drawer', icon: 'menu', section: 'Navigation' },
  { name: 'navigation-rail', label: 'Navigation rail', icon: 'side_navigation', section: 'Navigation' },

  // Sheets
  { name: 'bottom-sheets', label: 'Bottom sheets', icon: 'bottom_sheets', section: 'Sheets' },
  { name: 'side-sheets', label: 'Side sheets', icon: 'side_navigation', section: 'Sheets' },

  // All other
  { name: 'app-bars', label: 'App bars', icon: 'web_asset', section: 'All other' },
  { name: 'badges', label: 'Badges', icon: 'notifications', section: 'All other' },
  { name: 'cards', label: 'Cards', icon: 'cards', section: 'All other' },
  { name: 'carousel', label: 'Carousel', icon: 'view_carousel', section: 'All other' },
  { name: 'checkbox', label: 'Checkbox', icon: 'check_box', section: 'All other' },
  { name: 'chips', label: 'Chips', icon: 'label', section: 'All other' },
  { name: 'dialog', label: 'Dialogs', icon: 'dialogs', section: 'All other' },
  { name: 'divider', label: 'Divider', icon: 'horizontal_rule', section: 'All other' },
  { name: 'lists', label: 'Lists', icon: 'list', section: 'All other' },
  { name: 'menus', label: 'Menus', icon: 'menu', section: 'All other' },
  { name: 'radio-button', label: 'Radio button', icon: 'radio_button_checked', section: 'All other' },
  { name: 'search', label: 'Search', icon: 'search', section: 'All other' },
  { name: 'slider', label: 'Sliders', icon: 'tune', section: 'All other' },
  { name: 'snackbar', label: 'Snackbar', icon: 'info', section: 'All other' },
  { name: 'switch', label: 'Switch', icon: 'toggle_on', section: 'All other' },
  { name: 'tabs', label: 'Tabs', icon: 'tab', section: 'All other' },
  { name: 'text-field', label: 'Text fields', icon: 'text_fields', section: 'All other' },
  { name: 'toolbars', label: 'Toolbars', icon: 'toolbar', section: 'All other' },
  { name: 'tooltip', label: 'Tooltips', icon: 'tooltip', section: 'All other' },
];

function DrawerLayout() {
  return (
    <Drawer
      appbar={
        <DrawerAppbar>
          <AppbarAction accessibilityLabel="Menu">
            <IconButtonIcon name="menu" />
          </AppbarAction>
          <AppbarTitle title="Components" />
          <AppbarActions>
            <AppbarAction accessibilityLabel="Search">
              <IconButtonIcon name="search" />
            </AppbarAction>
          </AppbarActions>
        </DrawerAppbar>
      }
    >
      {SCREENS.map((s) => (
        <Drawer.Screen
          key={s.name}
          name={s.name}
          options={{ drawerLabel: s.label, drawerIcon: s.icon, drawerSection: s.section }}
        />
      ))}
    </Drawer>
  );
}

function RailLayout() {
  return (
    <Rail
      mode="standard"
      appbar={
        <RailAppbar>
          <AppbarTitle title="Components" />
          <AppbarActions>
            <AppbarAction accessibilityLabel="Search">
              <IconButtonIcon name="search" />
            </AppbarAction>
          </AppbarActions>
        </RailAppbar>
      }
    >
      {SCREENS.map((s) => (
        <Rail.Screen
          key={s.name}
          name={s.name}
          options={{ railLabel: s.label, railIcon: s.icon, railSection: s.section }}
        />
      ))}
    </Rail>
  );
}

export default function ComponentsLayout() {
  const { width } = useWindowDimensions();
  const useRailLayout = width >= EXPANDED_BREAKPOINT;

  if (useRailLayout) return <RailLayout />;
  return <DrawerLayout />;
}
