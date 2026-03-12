# React Native Material Design

A cross-platform **Material Design 3** component library for React Native.

[![Alpha](https://img.shields.io/badge/status-alpha-orange.svg)]()
[![npm version](https://img.shields.io/npm/v/react-native-material-design.svg)](https://www.npmjs.com/package/react-native-material-design)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/platform-ios%20%7C%20android%20%7C%20web-lightgrey.svg)](https://reactnative.dev/)

> **Alpha Software** — This library is under active development. APIs may change between releases. We welcome contributors, but don't use this in production yet.

## Design Philosophy

### Compose, don't configure

Components are assembled from sub-components rather than configured through props. You control the structure — the library handles the styling.

```tsx
<Button variant="filled" size="medium">
  <ButtonIcon name="send" />
  <ButtonLabel>Send Message</ButtonLabel>
</Button>
```

There's no `icon` prop, no `label` prop, no `trailing` slot. You compose what you need, in the order you want. The parent coordinates styles across its children automatically.

### Built against the spec

Every component is implemented against the actual [Material Design 3 specifications](https://m3.material.io/components) — dimensions, color roles, state layers, motion, and accessibility. The repository includes extracted M3 reference documentation that is checked during development.

### Animations that feel native

All animations run on the UI thread via `react-native-reanimated`. State layers, ripple-like interactions, layout transitions, and gesture-driven components all target 60fps without touching the JS thread.

### Theming from a single color

One source color generates an entire Material Design 3 color scheme — 100+ semantic color roles, light and dark variants, tonal palettes — using Google's own [`@material/material-color-utilities`](https://github.com/nicknisi/material-color-utilities). The theme system is built on `react-native-unistyles` for C++-level style binding performance.

## Features

- **38 M3 components** — actions, navigation, selection, containment, communication, text input
- **Dynamic color** — generate complete themes from a single hex color
- **Adaptive themes** — automatic light/dark mode following system settings
- **4000+ icons** — Material Symbols in Outlined, Rounded, and Sharp styles
- **Cross-platform** — iOS, Android, and Web
- **TypeScript** — full type definitions for all components and theme tokens
- **Tree-shakeable** — import only what you use

## Quick Start

### Install

#### Expo

```bash
npx expo install react-native-material-design react-native-unistyles@~3.0.18 react-native-reanimated react-native-gesture-handler react-native-svg react-native-nitro-modules@~0.31.10
```

#### React Native (bare)

```bash
bun add react-native-material-design react-native-unistyles@~3.0.18 react-native-reanimated react-native-gesture-handler react-native-svg react-native-nitro-modules@~0.31.10
cd ios && pod install
```

### Babel configuration

The library uses `react-native-unistyles` internally. Since the Unistyles Babel plugin doesn't process `node_modules` by default, whitelist this package:

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

### Initialize

Import the init module once at the root of your app. This configures the default theme and loads the icon fonts.

```tsx
// App.tsx or _layout.tsx
import 'react-native-material-design/init';
```

### Use a component

```tsx
import { Button, ButtonIcon, ButtonLabel } from 'react-native-material-design/ui/button';
import { Text } from 'react-native-material-design/ui/text';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text variant="headline" size="large">
        Hello, Material Design 3
      </Text>

      <Button variant="filled" size="medium">
        <ButtonIcon name="stars" />
        <ButtonLabel>Get Started</ButtonLabel>
      </Button>
    </View>
  );
}
```

## Theming

Generate a complete M3 color scheme from a single source color:

```tsx
import { generateTheme } from 'react-native-material-design';

const light = generateTheme(false, '#1976D2'); // light theme from blue
const dark = generateTheme(true, '#1976D2'); // dark theme from blue
```

To use a custom source color instead of the default purple, configure Unistyles before any component renders:

```tsx
// theme-config.ts — import this before components
import { StyleSheet } from 'react-native-unistyles';
import { generateTheme } from 'react-native-material-design';

const sourceColor = '#00796B';

StyleSheet.configure({
  themes: {
    light: generateTheme(false, sourceColor),
    dark: generateTheme(true, sourceColor),
  },
  settings: {
    adaptiveThemes: true,
  },
});
```

Each theme provides `scheme` (100+ color roles), `shape` (border radii), `typography` (15-step type scale), `elevation` (shadow levels 0-5), `motion` (easing curves and durations), and `state` (interaction opacities).

## Components

Components are imported individually from `react-native-material-design/ui/*`.

### Actions

Button, Button Group, Extended FAB, FAB, FAB Menu, Icon Button, Split Button

### Communication

Badge, Loading Indicator, Progress Indicator, Snackbar, Tooltip

### Containment

Bottom Sheet, Card, Carousel, Dialog, Divider, List, Side Sheet

### Navigation

App Bar, Navigation Bar, Navigation Drawer, Navigation Rail, Search, Tabs, Toolbar

### Selection

Checkbox, Chips, Date Picker, Menu, Radio Button, Slider, Switch, Time Picker

### Text Input

Text Field

### Foundations

Icon, Text

## Requirements

| Dependency                   | Version  |
| ---------------------------- | -------- |
| React Native                 | >= 0.78  |
| react-native-unistyles       | ~3.0.18  |
| react-native-reanimated      | >= 4     |
| react-native-gesture-handler | >= 2.20  |
| react-native-svg             | >= 13    |
| react-native-nitro-modules   | ~0.31.10 |
| TypeScript                   | > 5.0    |

Optional: `expo-router ^4` and `@react-navigation/native >=7` for navigation integration.

## Contributing

This project is open to contributions. It's early — things will break, APIs will change, and that's fine.

### Getting started

```bash
git clone https://github.com/anastasesg/react-native-material-design.git
cd react-native-material-design
bun install
bun run build
```

To run the example app:

```bash
bun run example:ios    # or example:android, example:web
```

The library builds via `react-native-builder-bob`. Run `bun run watch` during development for automatic rebuilds.

### What we need help with

- **Bug reports** — if something doesn't match the M3 spec or doesn't work on a platform, open an issue
- **New component variants** — many components implement the baseline variant only; expressive and other variants are unimplemented
- **Accessibility** — screen reader support, focus management, and keyboard navigation need attention
- **Testing** — there is no test suite yet
- **Documentation** — component-level docs, usage guides, and a docs site

### Before you submit a PR

- Run `bun run typecheck` and `bun run lint`
- Keep changes focused — one component or concern per PR
- If you're making a large change, open an issue first to discuss the approach

## Roadmap

The component set is largely complete. What's missing is everything around it:

- [ ] Test suite
- [ ] Component documentation site
- [ ] API stabilization (current APIs may change before 1.0)
- [ ] Expressive component variants
- [ ] Accessibility audit
- [ ] Storybook or equivalent interactive catalog
- [ ] CI/CD pipeline

## License

MIT License — see [LICENSE](LICENSE) for details.

## Resources

- [Material Design 3](https://m3.material.io/)
- [M3 Components](https://m3.material.io/components)
- [Material Symbols](https://fonts.google.com/icons)
- [react-native-unistyles](https://reactnativeunistyles.vercel.app/)
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)
