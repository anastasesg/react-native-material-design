# React Native Material Design

A cross-platform **Material Design 3** component library for React Native, featuring dynamic theming, smooth animations, and full TypeScript support.

[![npm version](https://img.shields.io/npm/v/react-native-material-design.svg)](https://www.npmjs.com/package/react-native-material-design)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/platform-ios%20%7C%20android%20%7C%20web-lightgrey.svg)](https://reactnative.dev/)

## Features

- **Material Design 3** - Implements Google's latest design system
- **Dynamic Theming** - Generate complete themes from a single source color
- **Adaptive Colors** - Automatic light/dark mode support that follows system settings
- **Smooth Animations** - Built on `react-native-reanimated` for 60fps animations
- **Cross-Platform** - Works on iOS, Android, and Web
- **TypeScript First** - Full type definitions for all components and utilities
- **Tree-Shakeable** - Import only the components you need
- **Material Symbols** - 4000+ icons included with three styles (Outlined, Rounded, Sharp)

## Installation

```bash
# Using bun
bun add react-native-material-design

# Using npm
npm install react-native-material-design

# Using yarn
yarn add react-native-material-design
```

### Peer Dependencies

Install the required peer dependencies:

```bash
bun add react-native-unistyles react-native-reanimated
```

For Expo projects, also install:

```bash
npx expo install expo-font
```

### Babel Plugin Configuration

This library uses `react-native-unistyles` internally for theming. Since the Unistyles babel plugin doesn't process `node_modules` by default, you must whitelist this package in your babel config:

```js
// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], // or your preset
    plugins: [
      [
        'react-native-unistyles/plugin',
        {
          autoProcessPaths: ['react-native-material-design'],
        },
      ],
    ],
  };
};
```

If you already have the Unistyles plugin configured, just add `'react-native-material-design'` to your existing `autoProcessPaths` array.

## Quick Start

### 1. Initialize the Library

Import the init module once at the root of your application. This configures the theming system and loads the required fonts.

```tsx
// App.tsx or _layout.tsx
import 'react-native-material-design/init';
```

### 2. Use Components

```tsx
import { View } from 'react-native';
import { Button, ButtonIcon, ButtonLabel } from 'react-native-material-design/ui/button';
import { Text } from 'react-native-material-design/ui/text';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text variant="headline" size="large">
        Welcome to Material Design 3
      </Text>

      <Button variant="filled" size="medium">
        <ButtonIcon name="stars" />
        <ButtonLabel>Get Started</ButtonLabel>
      </Button>
    </View>
  );
}
```

## Components

### Button

Material Design 3 buttons with multiple variants and sizes.

```tsx
import { Button, ButtonIcon, ButtonLabel } from 'react-native-material-design/ui/button';
```

| Prop       | Type                                                        | Default     | Description                 |
| ---------- | ----------------------------------------------------------- | ----------- | --------------------------- |
| `variant`  | `'filled' \| 'elevated' \| 'tonal' \| 'outlined' \| 'text'` | `'filled'`  | Button style variant        |
| `size`     | `'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'`    | `'small'`   | Button size                 |
| `shape`    | `'rounded' \| 'square'`                                     | `'rounded'` | Border radius style         |
| `disabled` | `boolean`                                                   | `false`     | Disable button interactions |
| `onPress`  | `() => void`                                                | -           | Press handler               |

**Variants:**

```tsx
// Filled button (highest emphasis)
<Button variant="filled">
  <ButtonLabel>Filled</ButtonLabel>
</Button>

// Elevated button (with shadow)
<Button variant="elevated">
  <ButtonLabel>Elevated</ButtonLabel>
</Button>

// Tonal button (secondary emphasis)
<Button variant="tonal">
  <ButtonLabel>Tonal</ButtonLabel>
</Button>

// Outlined button (medium emphasis)
<Button variant="outlined">
  <ButtonLabel>Outlined</ButtonLabel>
</Button>

// Text button (lowest emphasis)
<Button variant="text">
  <ButtonLabel>Text</ButtonLabel>
</Button>
```

**With Icons:**

```tsx
<Button variant="filled">
  <ButtonIcon name="add" />
  <ButtonLabel>Add Item</ButtonLabel>
</Button>

// Icon only
<Button variant="tonal">
  <ButtonIcon name="favorite" />
</Button>
```

### IconButton

Compact buttons for icon-only actions.

```tsx
import { IconButton } from 'react-native-material-design/ui/icon-button';
```

| Prop       | Type                                                     | Default      | Description                     |
| ---------- | -------------------------------------------------------- | ------------ | ------------------------------- |
| `name`     | `MaterialSymbol`                                         | -            | Icon name from Material Symbols |
| `variant`  | `'filled' \| 'outlined' \| 'standard' \| 'tonal'`        | `'standard'` | Button style variant            |
| `size`     | `'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | `'small'`    | Button size                     |
| `shape`    | `'rounded' \| 'square'`                                  | `'rounded'`  | Border radius style             |
| `disabled` | `boolean`                                                | `false`      | Disable button interactions     |

```tsx
<IconButton name="favorite" variant="filled" />
<IconButton name="share" variant="outlined" />
<IconButton name="more_vert" variant="standard" />
<IconButton name="edit" variant="tonal" />
```

### Text

Typography component following M3 type scale.

```tsx
import { Text } from 'react-native-material-design/ui/text';
```

| Prop      | Type                                                      | Default    | Description         |
| --------- | --------------------------------------------------------- | ---------- | ------------------- |
| `variant` | `'label' \| 'body' \| 'title' \| 'headline' \| 'display'` | `'body'`   | Typography variant  |
| `size`    | `'small' \| 'medium' \| 'large'`                          | `'medium'` | Size within variant |

```tsx
<Text variant="display" size="large">Display Large</Text>
<Text variant="headline" size="medium">Headline Medium</Text>
<Text variant="title" size="small">Title Small</Text>
<Text variant="body" size="large">Body Large</Text>
<Text variant="label" size="medium">Label Medium</Text>
```

### Icon

Material Symbols icons with 4000+ icons available.

```tsx
import { Icon } from 'react-native-material-design/ui/icon';
```

| Prop    | Type             | Default             | Description         |
| ------- | ---------------- | ------------------- | ------------------- |
| `name`  | `MaterialSymbol` | -                   | Icon name           |
| `size`  | `number`         | `24`                | Icon size in pixels |
| `color` | `string`         | Theme's `onSurface` | Icon color          |

```tsx
<Icon name="home" />
<Icon name="settings" size={32} />
<Icon name="favorite" color="#ff0000" />
```

### Appbar

Top app bar for navigation and actions.

```tsx
import {
  Appbar,
  AppbarAction,
  AppbarTitle,
  AppbarContent,
  AppbarActions,
} from 'react-native-material-design/ui/app-bar';
```

| Prop        | Type                                                                                      | Default   | Description      |
| ----------- | ----------------------------------------------------------------------------------------- | --------- | ---------------- |
| `variant`   | `'small' \| 'small-centered' \| 'small-content' \| 'small-search' \| 'medium' \| 'large'` | `'small'` | App bar layout   |
| `elevation` | `'flat' \| 'elevated'`                                                                    | `'flat'`  | Visual elevation |

```tsx
<Appbar variant="small">
  <AppbarAction icon="menu" onPress={() => {}} />
  <AppbarTitle title="Page Title" />
  <AppbarActions>
    <AppbarAction icon="search" onPress={() => {}} />
    <AppbarAction icon="more_vert" onPress={() => {}} />
  </AppbarActions>
</Appbar>

// With supporting text
<Appbar variant="medium">
  <AppbarAction icon="arrow_back" onPress={() => {}} />
  <AppbarTitle title="Settings" supportingText="Manage your preferences" />
</Appbar>
```

### Search

Search bar with expandable full-screen or docked layouts.

```tsx
import {
  Search,
  SearchLeadingIcon,
  SearchInput,
  SearchTrailingIcon,
  SearchContent,
} from 'react-native-material-design/ui/search';
```

| Prop               | Type                          | Default         | Description                         |
| ------------------ | ----------------------------- | --------------- | ----------------------------------- |
| `expanded`         | `boolean`                     | -               | Whether the search view is expanded |
| `onExpandedChange` | `(expanded: boolean) => void` | -               | Called when expanded state changes  |
| `layout`           | `'full-screen' \| 'docked'`   | `'full-screen'` | Layout mode for expanded view       |
| `disabled`         | `boolean`                     | `false`         | Disable interactions                |

```tsx
const [expanded, setExpanded] = useState(false);
const [query, setQuery] = useState('');

// Full-screen search
<Search expanded={expanded} onExpandedChange={setExpanded}>
  <SearchLeadingIcon name="search" />
  <SearchInput placeholder="Search" value={query} onChangeText={setQuery} />
  <SearchTrailingIcon name="mic" onPress={() => {}} />
  <SearchContent>
    <Text variant="body" size="large">Suggestions go here</Text>
  </SearchContent>
</Search>

// Docked search (dropdown below bar)
<Search expanded={expanded} onExpandedChange={setExpanded} layout="docked">
  <SearchLeadingIcon name="search" />
  <SearchInput placeholder="Search" />
  <SearchTrailingIcon name="mic" onPress={() => {}} />
  <SearchTrailingIcon name="more_vert" onPress={() => {}} />
  <SearchContent>
    <Text variant="body" size="large">Results go here</Text>
  </SearchContent>
</Search>
```

### FAB

Floating action buttons for primary screen actions.

```tsx
import { FAB } from 'react-native-material-design/ui/fab';
```

| Prop       | Type                                                                                                          | Default              | Description          |
| ---------- | ------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------- |
| `name`     | `MaterialSymbol`                                                                                              | -                    | Icon name            |
| `size`     | `'small' \| 'medium' \| 'large'`                                                                              | `'medium'`           | FAB size             |
| `color`    | `'primaryContainer' \| 'secondaryContainer' \| 'tertiaryContainer' \| 'primary' \| 'secondary' \| 'tertiary'` | `'primaryContainer'` | Color style          |
| `disabled` | `boolean`                                                                                                     | `false`              | Disable interactions |

```tsx
<FAB name="add" />
<FAB name="edit" size="large" color="tertiary" />
<FAB name="brush" size="small" color="secondary" />
```

### Extended FAB

Extended floating action buttons with a text label.

```tsx
import { ExtendedFAB, ExtendedFABIcon, ExtendedFABLabel } from 'react-native-material-design/ui/extended-fab';
```

| Prop       | Type                                                                                                          | Default              | Description          |
| ---------- | ------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------- |
| `size`     | `'small' \| 'medium' \| 'large'`                                                                              | `'small'`            | FAB size             |
| `color`    | `'primaryContainer' \| 'secondaryContainer' \| 'tertiaryContainer' \| 'primary' \| 'secondary' \| 'tertiary'` | `'primaryContainer'` | Color style          |
| `disabled` | `boolean`                                                                                                     | `false`              | Disable interactions |

```tsx
// With icon and label
<ExtendedFAB>
  <ExtendedFABIcon name="edit" />
  <ExtendedFABLabel>Compose</ExtendedFABLabel>
</ExtendedFAB>

// Label only
<ExtendedFAB color="tertiary" size="medium">
  <ExtendedFABLabel>Create</ExtendedFABLabel>
</ExtendedFAB>
```

### Button Group

Groups related buttons together with shared sizing and optional selection.

```tsx
import { ButtonGroup } from 'react-native-material-design/ui/button-group';
```

| Prop            | Type                                                     | Default      | Description                    |
| --------------- | -------------------------------------------------------- | ------------ | ------------------------------ |
| `variant`       | `'standard' \| 'connected'`                              | `'standard'` | Layout variant                 |
| `size`          | `'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | `'medium'`   | Button size                    |
| `shape`         | `'rounded' \| 'square'`                                  | `'rounded'`  | Border radius style            |
| `selectionMode` | `'single' \| 'multi'`                                    | -            | Enable group-managed selection |
| `disabled`      | `boolean`                                                | `false`      | Disable all buttons            |

```tsx
// Standard variant with Button/IconButton children
<ButtonGroup variant="standard" size="medium">
  <Button variant="filled"><ButtonLabel>One</ButtonLabel></Button>
  <Button variant="filled"><ButtonLabel>Two</ButtonLabel></Button>
</ButtonGroup>

// Connected variant with selection
<ButtonGroup variant="connected" selectionMode="single" defaultSelectedIndex={0}>
  <IconButton name="format_bold" variant="tonal" />
  <IconButton name="format_italic" variant="tonal" />
  <IconButton name="format_underlined" variant="tonal" />
</ButtonGroup>
```

### Split Button

Compound button with a leading action and trailing dropdown.

```tsx
import {
  SplitButton,
  SplitButtonLeading,
  SplitButtonTrailing,
  SplitButtonIcon,
  SplitButtonLabel,
} from 'react-native-material-design/ui/split-button';
```

| Prop       | Type                                                     | Default | Description          |
| ---------- | -------------------------------------------------------- | ------- | -------------------- |
| `variant`  | `'filled' \| 'elevated' \| 'tonal' \| 'outlined'`        | -       | Button style variant |
| `size`     | `'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | -       | Button size          |
| `disabled` | `boolean`                                                | `false` | Disable interactions |

```tsx
<SplitButton variant="tonal" size="medium">
  <SplitButtonLeading onPress={handleAction}>
    <SplitButtonIcon name="add" />
    <SplitButtonLabel>Create</SplitButtonLabel>
  </SplitButtonLeading>
  <SplitButtonTrailing onPress={handleDropdown}>
    <SplitButtonIcon name="arrow_drop_down" />
  </SplitButtonTrailing>
</SplitButton>
```

### Checkbox

Selection control for toggling options on or off.

```tsx
import { Checkbox, CheckboxToggle, CheckboxLabel } from 'react-native-material-design/ui/checkbox';
```

| Prop           | Type                                            | Default        | Description                  |
| -------------- | ----------------------------------------------- | -------------- | ---------------------------- |
| `value`        | `'unselected' \| 'selected' \| 'indeterminate'` | -              | Controlled value             |
| `defaultValue` | `'unselected' \| 'selected' \| 'indeterminate'` | `'unselected'` | Initial value (uncontrolled) |
| `onChange`     | `(value: CheckboxValue) => void`                | -              | Change handler               |
| `error`        | `boolean`                                       | `false`        | Show error styling           |
| `disabled`     | `boolean`                                       | `false`        | Disable interactions         |

```tsx
// Basic usage
<Checkbox value={value} onChange={setValue}>
  <CheckboxToggle />
  <CheckboxLabel>Accept terms</CheckboxLabel>
</Checkbox>

// Error state
<Checkbox value={value} onChange={setValue} error>
  <CheckboxToggle />
  <CheckboxLabel>Required field</CheckboxLabel>
</Checkbox>

// Uncontrolled
<Checkbox defaultValue="unselected">
  <CheckboxToggle />
  <CheckboxLabel>Remember me</CheckboxLabel>
</Checkbox>

// Toggle only (no label)
<Checkbox value={value} onChange={setValue}>
  <CheckboxToggle />
</Checkbox>
```

### Divider

Visual separator for content sections.

```tsx
import { Divider } from 'react-native-material-design/ui/divider';

<Divider />;
```

### Navigation Rail

Navigation rails let people switch between UI views on mid-sized devices. The rail starts collapsed (96dp) and expands via a built-in menu toggle button.

```tsx
import {
  NavigationRail,
  NavigationRailItem,
  NavigationRailIcon,
  NavigationRailLabel,
  NavigationRailBadge,
  NavigationRailSectionLabel,
} from 'react-native-material-design/ui/navigation-rail';
```

| Prop               | Type                          | Default      | Description                                |
| ------------------ | ----------------------------- | ------------ | ------------------------------------------ |
| `mode`             | `'standard' \| 'modal'`       | `'standard'` | Standard pushes content; modal overlays it |
| `expanded`         | `boolean`                     | -            | Controlled expanded state                  |
| `defaultExpanded`  | `boolean`                     | `false`      | Initial expanded state (uncontrolled)      |
| `onExpandedChange` | `(expanded: boolean) => void` | -            | Called when expanded state changes         |
| `showMenuButton`   | `boolean`                     | `true`       | Show the built-in menu toggle button       |
| `value`            | `string`                      | -            | Active item value (controlled)             |
| `defaultValue`     | `string`                      | -            | Initial active item value (uncontrolled)   |
| `onValueChange`    | `(value: string) => void`     | -            | Called when active item changes            |
| `header`           | `ReactNode`                   | -            | Content above items (FAB, etc.)            |
| `alignItems`       | `'top' \| 'center'`           | `'top'`      | Vertical alignment of items                |
| `expandedWidth`    | `number`                      | `280`        | Expanded width (clamped to 220–360dp)      |

```tsx
const [active, setActive] = useState('home');

// Standard mode — rail expands inline, pushing content
<View style={{ flex: 1, flexDirection: 'row' }}>
  <NavigationRail mode="standard" value={active} onValueChange={setActive}>
    <NavigationRailItem value="home">
      <NavigationRailIcon name="home" />
      <NavigationRailLabel>Home</NavigationRailLabel>
    </NavigationRailItem>
    <NavigationRailItem value="explore">
      <NavigationRailIcon name="explore" />
      <NavigationRailLabel>Explore</NavigationRailLabel>
    </NavigationRailItem>
    <NavigationRailItem value="saved">
      <NavigationRailIcon name="bookmark" />
      <NavigationRailLabel>Saved</NavigationRailLabel>
    </NavigationRailItem>
  </NavigationRail>
  <View style={{ flex: 1 }}>{/* Page content */}</View>
</View>

// Modal mode — collapsed rail stays inline, expansion overlays content
<NavigationRail mode="modal" value={active} onValueChange={setActive}>
  {/* Same items */}
</NavigationRail>
```

## Theming

### Dynamic Color Generation

The library generates complete M3 color schemes from a single source color using `@material/material-color-utilities`.

```tsx
import { generateTheme } from 'react-native-material-design';

// Generate a custom theme
const customTheme = generateTheme(false, '#1976D2'); // light theme from blue
const darkTheme = generateTheme(true, '#1976D2'); // dark theme from blue
```

### Theme Structure

Each theme contains:

```typescript
interface Theme {
  scheme: Scheme; // 100+ color roles
  shape: Shape; // Border radius tokens
  pallettes: Palettes; // Tonal palettes
  typography: Typography; // Type scale
  elevation: Elevation; // Shadow styles (levels 0–5)
  motion: Motion; // Easing curves and durations
  state: State; // Interaction state opacities
}
```

### Color Scheme

The scheme provides semantic color roles following M3 guidelines:

```typescript
// Primary colors
theme.scheme.primary;
theme.scheme.onPrimary;
theme.scheme.primaryContainer;
theme.scheme.onPrimaryContainer;

// Surface colors
theme.scheme.surface;
theme.scheme.onSurface;
theme.scheme.surfaceContainer;
theme.scheme.surfaceContainerHigh;

// Additional roles
(theme.scheme.secondary, theme.scheme.tertiary);
(theme.scheme.error, theme.scheme.outline);
// ... and 90+ more
```

### Using Theme in Styles

```tsx
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

function MyComponent() {
  const { theme } = useUnistyles();

  return (
    <View style={[styles.container, { backgroundColor: theme.scheme.surface }]}>
      <Text style={{ color: theme.scheme.onSurface }}>Themed content</Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    padding: 16,
    backgroundColor: theme.scheme.surfaceContainer,
    borderRadius: theme.shape.medium,
  },
}));
```

### Shape Tokens

```typescript
theme.shape.xsmall; // 4
theme.shape.small; // 8
theme.shape.medium; // 12
theme.shape.large; // 16
theme.shape.xlarge; // 28
```

### Typography Scale

15 type styles organized by variant and size:

```typescript
theme.typography.display.large; // fontSize: 57
theme.typography.display.medium; // fontSize: 45
theme.typography.display.small; // fontSize: 36

theme.typography.headline.large; // fontSize: 32
theme.typography.headline.medium; // fontSize: 28
theme.typography.headline.small; // fontSize: 24

theme.typography.title.large; // fontSize: 22
theme.typography.title.medium; // fontSize: 16
theme.typography.title.small; // fontSize: 14

theme.typography.body.large; // fontSize: 16
theme.typography.body.medium; // fontSize: 14
theme.typography.body.small; // fontSize: 12

theme.typography.label.large; // fontSize: 14
theme.typography.label.medium; // fontSize: 12
theme.typography.label.small; // fontSize: 11
```

### Custom Theme Configuration

To use a custom source color, configure unistyles before any component renders:

```tsx
// theme-config.ts
import { StyleSheet } from 'react-native-unistyles';
import { generateTheme } from 'react-native-material-design';

const sourceColor = '#00796B'; // Teal

StyleSheet.configure({
  themes: {
    light: generateTheme(false, sourceColor),
    dark: generateTheme(true, sourceColor),
  },
  settings: {
    adaptiveThemes: true, // Follows system dark mode
  },
});

// App.tsx
import './theme-config'; // Import before components
import { Button } from 'react-native-material-design/ui/button';
```

## Import Structure

### Main Entry

Theme utilities and types:

```tsx
import { generateTheme, loadFonts } from 'react-native-material-design';
import type { Theme, Themes, Scheme, Shape, Typography } from 'react-native-material-design';
```

### Init Entry

Auto-configures theming with default purple source color (`#6750A4`):

```tsx
import 'react-native-material-design/init';
```

### Component Imports

Each component is exported from its own path:

```tsx
import { Badge } from 'react-native-material-design/ui/badge';
import { Carousel, CarouselItem, CarouselItemImage, CarouselItemLabel } from 'react-native-material-design/ui/carousel';
import { BottomSheet, BottomSheetDragHandle } from 'react-native-material-design/ui/bottom-sheet';
import { Button, ButtonIcon, ButtonLabel } from 'react-native-material-design/ui/button';
import { ButtonGroup } from 'react-native-material-design/ui/button-group';
import { Card } from 'react-native-material-design/ui/card';
import { Checkbox, CheckboxToggle, CheckboxLabel } from 'react-native-material-design/ui/checkbox';
import { Chip, ChipIcon, ChipLabel, ChipTrailingIcon } from 'react-native-material-design/ui/chips';
import {
  Dialog,
  DialogIcon,
  DialogHeadline,
  DialogContent,
  DialogDivider,
  DialogActions,
  DialogAction,
} from 'react-native-material-design/ui/dialog';
import { FAB } from 'react-native-material-design/ui/fab';
import { FABMenu, FABMenuItem } from 'react-native-material-design/ui/fab-menu';
import { ExtendedFAB, ExtendedFABIcon, ExtendedFABLabel } from 'react-native-material-design/ui/extended-fab';
import { IconButton } from 'react-native-material-design/ui/icon-button';
import { LoadingIndicator } from 'react-native-material-design/ui/loading-indicator';
import {
  List,
  ListItem,
  ListItemLabel,
  ListItemSupportingText,
  ListItemOverline,
  ListItemTrailingText,
  ListItemLeadingIcon,
  ListItemLeadingAvatar,
  ListItemLeadingImage,
  ListItemTrailingIcon,
  ListDivider,
} from 'react-native-material-design/ui/lists';
import {
  Menu,
  MenuItem,
  MenuItemLabel,
  MenuItemLeadingIcon,
  MenuItemTrailingIcon,
  MenuItemTrailingText,
  MenuItemSupportingText,
  MenuDivider,
  MenuGap,
} from 'react-native-material-design/ui/menus';
import { LinearProgressIndicator, CircularProgressIndicator } from 'react-native-material-design/ui/progress-indicator';
import {
  RadioButton,
  RadioButtonGroup,
  RadioButtonToggle,
  RadioButtonLabel,
} from 'react-native-material-design/ui/radio-button';
import {
  SplitButton,
  SplitButtonLeading,
  SplitButtonTrailing,
  SplitButtonIcon,
  SplitButtonLabel,
} from 'react-native-material-design/ui/split-button';
import { Slider, RangeSlider } from 'react-native-material-design/ui/slider';
import { Switch, SwitchToggle, SwitchLabel } from 'react-native-material-design/ui/switch';
import { Tabs, Tab, TabIcon, TabLabel } from 'react-native-material-design/ui/tabs';
import { DatePicker } from 'react-native-material-design/ui/date-picker';
import { TimePicker } from 'react-native-material-design/ui/time-picker';
import { Text } from 'react-native-material-design/ui/text';
import {
  TextField,
  TextFieldInput,
  TextFieldLeadingIcon,
  TextFieldTrailingIcon,
  TextFieldSupportingText,
} from 'react-native-material-design/ui/text-field';
import { Icon } from 'react-native-material-design/ui/icon';
import {
  Appbar,
  AppbarAction,
  AppbarTitle,
  AppbarContent,
  AppbarActions,
} from 'react-native-material-design/ui/app-bar';
import { Divider } from 'react-native-material-design/ui/divider';
import {
  Search,
  SearchLeadingIcon,
  SearchInput,
  SearchTrailingIcon,
  SearchContent,
} from 'react-native-material-design/ui/search';
import {
  NavigationBar,
  NavigationBarItem,
  NavigationBarIcon,
  NavigationBarLabel,
} from 'react-native-material-design/ui/navigation-bar';
import {
  NavigationDrawer,
  NavigationDrawerItem,
  NavigationDrawerIcon,
  NavigationDrawerLabel,
  NavigationDrawerBadge,
  NavigationDrawerSectionLabel,
} from 'react-native-material-design/ui/navigation-drawer';
import {
  NavigationRail,
  NavigationRailItem,
  NavigationRailIcon,
  NavigationRailLabel,
  NavigationRailBadge,
  NavigationRailSectionLabel,
} from 'react-native-material-design/ui/navigation-rail';
import { SideSheet } from 'react-native-material-design/ui/side-sheets';
import { Snackbar } from 'react-native-material-design/ui/snackbar';
import { DockedToolbar, FloatingToolbar } from 'react-native-material-design/ui/toolbars';
import { PlainTooltip, RichTooltip } from 'react-native-material-design/ui/tooltips';
```

## Component Pattern

Components use a compound pattern for flexible composition:

```tsx
// Parent passes context to children automatically
<Button variant="filled" size="large">
  <ButtonIcon name="send" /> {/* Receives size, variant context */}
  <ButtonLabel>Send Message</ButtonLabel>
</Button>
```

This allows:

- Flexible ordering of children
- Automatic style coordination
- Clean, readable JSX

## Roadmap

Progress: **37 / 37** components implemented

### Actions

- [x] Button
- [x] Button Group
- [x] Extended FAB
- [x] FAB
- [x] FAB Menu
- [x] Icon Button
- [x] Split Button

### Communication

- [x] Badge
- [x] Loading Indicator
- [x] Progress Indicator
- [x] Snackbar
- [x] Tooltip

### Containment

- [x] Bottom Sheet
- [x] Card
- [x] Carousel
- [x] Dialog
- [x] Divider
- [x] List
- [x] Side Sheet

### Navigation

- [x] App Bar
- [x] Navigation Bar
- [x] Navigation Drawer
- [x] Navigation Rail
- [x] Search
- [x] Tabs
- [x] Toolbar

### Selection

- [x] Checkbox
- [x] Chips
- [x] Date Picker
- [x] Menu
- [x] Radio Button
- [x] Slider
- [x] Switch
- [x] Time Picker

### Text Input

- [x] Text Field

### Foundations

- [x] Icon
- [x] Text

## Development

```bash
# Clone the repository
git clone https://github.com/anastasesg/react-native-material-design.git
cd react-native-material-design

# Install dependencies
bun install

# Build the library
bun run build

# Watch mode for development
bun run watch

# Run the example app
bun run example

# Platform-specific
bun run example:ios
bun run example:android
bun run example:web

# Type checking
bun run typecheck

# Linting
bun run lint
```

## Requirements

- React Native >= 0.78
- react-native-unistyles ~3.0.18
- react-native-reanimated >= 4
- TypeScript > 5.0

## License

MIT License - see [LICENSE](LICENSE) for details.

## Resources

- [Material Design 3](https://m3.material.io/)
- [M3 Components](https://m3.material.io/components)
- [Material Symbols](https://fonts.google.com/icons)
- [react-native-unistyles](https://reactnativeunistyles.vercel.app/)
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)
