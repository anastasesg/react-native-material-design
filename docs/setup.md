# Setup & Configuration

> How to install, initialize, and configure the library. Covers peer dependencies, theme generation, custom theming, and advanced overrides.

---

## Installation

### 1. Install the library

```bash
bun add react-native-material-design
```

### 2. Install peer dependencies

Required:

```bash
bun add react-native-unistyles@~3.0.18 \
        react-native-reanimated@^4 \
        react-native-gesture-handler@^2.20 \
        react-native-nitro-modules@~0.31.10 \
        react-native-svg@^13
```

Optional (for navigation adapter components):

```bash
bun add @react-navigation/native@^7   # React Navigation adapters
bun add expo-router@^4                 # Expo Router adapters
```

### 3. Configure Babel

Both Reanimated and Unistyles require Babel plugins. Add to your `babel.config.js`:

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'react-native-unistyles/plugin',
        {
          root: 'app', // your app's source directory
          // Process library styles through the unistyles plugin
          autoProcessPaths: ['react-native-material-design/lib'],
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
```

The `autoProcessPaths` option tells unistyles to process `StyleSheet.create` calls inside the library's compiled output. The path must be specific enough to avoid matching unistyles' own files — see the [unistyles Babel plugin docs](https://www.unistyl.es/v3/reference/babel-plugin) for full configuration options.

**Important:** `autoProcessPaths` does a **substring match on the full filesystem path**. Since the library is named `react-native-material-design`, using just the package name would match every file in the tree (including unistyles' own internals). Always use the more specific `react-native-material-design/lib` path.

### 4. Wrap your app root

Gesture Handler requires a root view wrapper:

```tsx
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return <GestureHandlerRootView style={{ flex: 1 }}>{/* Your app */}</GestureHandlerRootView>;
}
```

---

## Initialization

There are two ways to initialize the library:

### Option A: Zero-config (side-effect import)

```tsx
import 'react-native-material-design/init';
```

This generates light/dark themes from M3's default purple (`#6750A4`), configures unistyles with adaptive theme switching and M3 breakpoints, and loads fonts.

### Option B: Custom configuration

```tsx
import { configure } from 'react-native-material-design';

configure({ sourceColor: '#1B6B52' });
```

Use `configure()` when you need a custom brand color, motion scheme, font, or overrides. It does the same work as the `init` import — generates themes, configures unistyles, loads fonts — but accepts options. Do **not** combine both; use one or the other.

### TypeScript Setup

Both approaches require a `declare module` block in your entry file for full theme type coverage in `StyleSheet.create((theme) => ...)`:

```tsx
import type { Breakpoints, Themes } from 'react-native-material-design';

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends Themes {}
  export interface UnistylesBreakpoints extends Breakpoints {}
}
```

This is required because TypeScript only applies module augmentations from files in the import graph — external `.d.ts` files don't propagate augmentations.

### Complete Entry File Example

```tsx
// index.ts
import type { Breakpoints, Themes } from 'react-native-material-design';
import { configure } from 'react-native-material-design';

configure({
  sourceColor: '#1B6B52',
  fontFamily: 'Inter',
});

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends Themes {}
  export interface UnistylesBreakpoints extends Breakpoints {}
}
```

---

## configure()

### Options

| Option           | Type                         | Default        | Description                                     |
| ---------------- | ---------------------------- | -------------- | ----------------------------------------------- |
| `sourceColor`    | `string`                     | `'#6750A4'`    | Hex color for M3 dynamic color generation       |
| `motionScheme`   | `'expressive' \| 'standard'` | `'expressive'` | Spring bounciness profile                       |
| `fontFamily`     | `string`                     | `'Roboto'`     | Applied to all typography styles                |
| `adaptiveThemes` | `boolean`                    | `true`         | Auto-switch light/dark based on device settings |
| `breakpoints`    | `Breakpoints`                | M3 defaults    | Window size class breakpoints                   |
| `overrides`      | `ThemeOverrides`             | —              | Deep-merged into both themes                    |
| `lightOverrides` | `ThemeOverrides`             | —              | Deep-merged into light theme only               |
| `darkOverrides`  | `ThemeOverrides`             | —              | Deep-merged into dark theme only                |

`configure()` returns the generated `Themes` object.

### Motion Scheme

| Value          | Behavior                                     |
| -------------- | -------------------------------------------- |
| `'expressive'` | Bouncier springs, more personality (default) |
| `'standard'`   | More restrained, professional motion         |

The motion scheme affects which spring set is used as the default (`theme.motion.spring`), but both sets are always available at `theme.motion.springs.expressive` and `theme.motion.springs.standard`. Components can also override per-instance via the `scheme` prop on Pressable.

---

## generateThemes() / generateTheme()

For advanced use cases where you need direct access to theme objects (e.g., passing them to other libraries or manually configuring unistyles), use the generation functions directly.

### generateThemes() — both themes at once

```tsx
import { generateThemes } from 'react-native-material-design';

const { light, dark } = generateThemes({ sourceColor: '#1B6B52' });

const { light, dark } = generateThemes({
  sourceColor: '#1B6B52',
  motionScheme: 'standard',
  fontFamily: 'Inter',
  overrides: { shape: { full: 100 } },
  darkOverrides: { state: { hover: 0.12 } },
});
```

### generateTheme() — single theme with per-scheme control

```tsx
import { generateTheme } from 'react-native-material-design';

const light = generateTheme({
  dark: false,
  sourceColor: '#1B6B52',
  fontFamily: 'Inter',
});

const dark = generateTheme({
  dark: true,
  sourceColor: '#1B6B52',
  fontFamily: 'Inter',
  overrides: { shape: { full: 100 } },
});
```

These functions only generate theme objects — they do **not** configure unistyles or load fonts. Call `StyleSheet.configure()` and `loadFonts()` yourself if you use these directly.

---

## Overrides

Overrides are deep-merged into the generated theme. Use the `overrides` option on `configure()`, `generateThemes()`, or `generateTheme()`.

### Shape

```tsx
configure({
  sourceColor: '#1B6B52',
  overrides: {
    shape: { full: 100, xlarge: 20 },
  },
});
```

### Typography (font family)

Use the top-level `fontFamily` option — it propagates to all 30+ typography styles automatically:

```tsx
configure({
  sourceColor: '#1B6B52',
  fontFamily: 'Inter',
});
```

### Spring Configs

```tsx
configure({
  sourceColor: '#1B6B52',
  overrides: {
    motion: {
      springs: {
        expressive: {
          defaultSpatial: { damping: 20, stiffness: 300 },
        },
      },
    },
  },
});
```

### State Opacities

```tsx
configure({
  sourceColor: '#1B6B52',
  overrides: {
    state: { hover: 0.12 },
  },
});
```

### Per-Scheme Overrides

Apply overrides to only light or dark themes:

```tsx
configure({
  sourceColor: '#1B6B52',
  overrides: { shape: { full: 100 } },
  darkOverrides: { state: { disabledContent: 0.5 } },
});
```

### Post-Generation Mutation

Since themes are plain objects, you can still mutate them directly for cases not covered by the overrides API (e.g., individual color roles):

```tsx
const { light, dark } = generateThemes({ sourceColor: '#1B6B52' });
light.scheme.primary = '#006B3F';
```

---

## Theme Structure

`generateTheme()` / `generateThemes()` produce `Theme` objects with this structure:

```
Theme
├─ scheme        ← 50+ color roles derived from source color
├─ shape         ← border radius scale (11 tokens)
├─ elevation     ← shadow configs for levels 0–5
├─ motion        ← springs, easing curves, duration tokens
├─ state         ← interaction opacity values
├─ pallettes     ← tonal palettes for custom color derivation
└─ typography    ← full M3 type scale
```

### Color Scheme (`theme.scheme`)

All 50+ M3 color roles, generated from the source color via `@material/material-color-utilities`:

**Surface colors:**

| Role                      | Description                                |
| ------------------------- | ------------------------------------------ |
| `background`              | Base app background                        |
| `surface`                 | Cards, sheets, menus                       |
| `surfaceDim`              | Dimmed surface variant                     |
| `surfaceBright`           | Brightened surface variant                 |
| `surfaceContainerLowest`  | Lowest elevation container                 |
| `surfaceContainerLow`     | Low elevation container (elevated buttons) |
| `surfaceContainer`        | Standard container                         |
| `surfaceContainerHigh`    | High elevation container                   |
| `surfaceContainerHighest` | Highest elevation container                |
| `onSurface`               | Text/icons on surfaces                     |
| `surfaceVariant`          | Subtle surface differentiation             |
| `onSurfaceVariant`        | Text/icons on surface variant              |
| `inverseSurface`          | Contrasting surface (toggle selected)      |
| `inverseOnSurface`        | Text/icons on inverse surface              |

**Primary colors:**

| Role                 | Description                     |
| -------------------- | ------------------------------- |
| `primary`            | Primary brand color             |
| `onPrimary`          | Text/icons on primary           |
| `primaryContainer`   | Less prominent primary elements |
| `onPrimaryContainer` | Text/icons on primary container |
| `inversePrimary`     | Primary on inverse surfaces     |

**Secondary, Tertiary, Error** — same pattern (`secondary`, `onSecondary`, `secondaryContainer`, `onSecondaryContainer`, etc.)

**Fixed colors** — `primaryFixed`, `primaryFixedDim`, `onPrimaryFixed`, `onPrimaryFixedVariant` (same for secondary, tertiary)

**Utility:**

| Role             | Description                |
| ---------------- | -------------------------- |
| `outline`        | Component outlines/borders |
| `outlineVariant` | Subtle outlines            |
| `shadow`         | Shadow color               |
| `scrim`          | Modal backdrop overlays    |
| `surfaceTint`    | Surface tint for elevation |

### Shape Scale (`theme.shape`)

| Token             | Pixels | Use Case                     |
| ----------------- | ------ | ---------------------------- |
| `none`            | 0      | Sharp corners                |
| `xsmall`          | 4      | Subtle rounding              |
| `small`           | 8      | Pressed button corners       |
| `medium`          | 12     | Cards, square buttons        |
| `large`           | 16     | Medium elements              |
| `largeIncreased`  | 20     | —                            |
| `xlarge`          | 28     | FABs, large elements         |
| `xlargeIncreased` | 32     | —                            |
| `xxlarge`         | 48     | —                            |
| `full`            | 9999   | Pill shapes (buttons, chips) |

### Elevation Levels (`theme.elevation`)

6 levels (0–5), each containing platform shadow properties:

```tsx
type ElevationStyle = {
  elevation: number;
  shadowOffset: { width: number; height: number };
  shadowOpacity: number;
  shadowRadius: number;
};
```

| Level | shadowOffset.height | shadowOpacity | shadowRadius | Android elevation |
| ----- | ------------------- | ------------- | ------------ | ----------------- |
| 0     | 0                   | 0             | 0            | 0                 |
| 1     | 1                   | 0.15          | 2            | 1                 |
| 2     | 3                   | 0.20          | 4            | 3                 |
| 3     | 6                   | 0.15          | 10           | 6                 |
| 4     | 8                   | 0.15          | 13           | 8                 |
| 5     | 12                  | 0.15          | 18           | 12                |

### Motion (`theme.motion`)

```tsx
type Motion = {
  scheme: 'expressive' | 'standard';
  spring: SpringSet;
  springs: {
    expressive: SpringSet;
    standard: SpringSet;
  };
  easing: { ... };
  duration: { ... };
};
```

#### Spring Configs

Each `SpringSet` contains 6 springs (3 speeds x 2 channels):

| Spring           | Expressive (d, s) | Standard (d, s) |
| ---------------- | ----------------- | --------------- |
| `fastEffects`    | 123.3, 3800       | 123.3, 3800     |
| `fastSpatial`    | 33.9, 800         | 67.3, 1400      |
| `defaultEffects` | 80, 1600          | 80, 1600        |
| `defaultSpatial` | 31.2, 380         | 47.6, 700       |
| `slowEffects`    | 56.6, 800         | 56.6, 800       |
| `slowSpatial`    | 22.6, 200         | 31.2, 300       |

Note: effects springs are identical across schemes — only spatial springs differ (expressive has lower damping = more bounce).

#### Duration Tokens

| Token     | ms  | Token        | ms   |
| --------- | --- | ------------ | ---- |
| `short1`  | 50  | `long1`      | 450  |
| `short2`  | 100 | `long2`      | 500  |
| `short3`  | 150 | `long3`      | 550  |
| `short4`  | 200 | `long4`      | 600  |
| `medium1` | 250 | `extraLong1` | 700  |
| `medium2` | 300 | `extraLong2` | 800  |
| `medium3` | 350 | `extraLong3` | 900  |
| `medium4` | 400 | `extraLong4` | 1000 |

#### Easing Curves

All curves are `[number, number, number, number]` cubic bezier tuples:

| Curve                  | Values            |
| ---------------------- | ----------------- |
| `emphasized`           | 0.2, 0, 0, 1      |
| `emphasizedDecelerate` | 0.05, 0.7, 0.1, 1 |
| `emphasizedAccelerate` | 0.3, 0, 0.8, 0.15 |
| `standard`             | 0.2, 0, 0, 1      |
| `standardDecelerate`   | 0, 0, 0, 1        |
| `standardAccelerate`   | 0.3, 0, 1, 1      |
| `legacy`               | 0.4, 0, 0.2, 1    |
| `legacyAccelerate`     | 0.4, 0, 1, 1      |
| `legacyDecelerate`     | 0, 0, 0.2, 1      |
| `linear`               | 0, 0, 1, 1        |

### State Opacities (`theme.state`)

| Token               | Value | Use                        |
| ------------------- | ----- | -------------------------- |
| `hover`             | 0.08  | State layer hover tint     |
| `focus`             | 0.10  | State layer focus tint     |
| `pressed`           | 0.10  | State layer press tint     |
| `dragged`           | 0.16  | State layer drag tint      |
| `disabledContainer` | 0.12  | Disabled container overlay |
| `disabledContent`   | 0.38  | Disabled text/icon opacity |

### Tonal Palettes (`theme.pallettes`)

Six tonal palettes for custom color derivation:

```tsx
type Palette = { tone(tone: number): string };

theme.pallettes.primary.tone(40);
theme.pallettes.secondary.tone(90);
theme.pallettes.neutral.tone(10);
```

Palettes: `primary`, `secondary`, `tertiary`, `neutral`, `neutralVariant`, `error`.

Note: The type is spelled `pallettes` (double-l) throughout the codebase — this is intentional and consistent.

### Typography (`theme.typography`)

Full M3 type scale with standard and emphasized variants:

```
typography
├─ display:  { large, medium, small }
├─ headline: { large, medium, small }
├─ title:    { large, medium, small }
├─ body:     { large, medium, small }
├─ label:    { large, largeProminent, medium, mediumProminent, small }
└─ emphasized
    ├─ display:  { large, medium, small }
    ├─ headline: { large, medium, small }
    ├─ title:    { large, medium, small }
    ├─ body:     { large, medium, small }
    └─ label:    { large, medium, small }
```

Each style contains:

```tsx
type TypographyStyle = {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  fontWeight: string;
};
```

The default font family is Roboto (loaded automatically). The `emphasized` variants use heavier font weights.

---

## Breakpoints

M3 window size classes, used as the default when no `breakpoints` option is passed to `configure()`:

| Class      | Min Width | Typical Devices               |
| ---------- | --------- | ----------------------------- |
| `compact`  | 0px       | Phones (portrait)             |
| `medium`   | 600px     | Tablets (portrait), foldables |
| `expanded` | 840px     | Tablets (landscape)           |
| `large`    | 1200px    | Desktop, large tablets        |
| `xlarge`   | 1600px    | Large desktop                 |

Use in styles:

```tsx
const styles = StyleSheet.create((theme, runtime) => ({
  container: {
    padding: runtime.breakpoint === 'compact' ? 16 : 24,
  },
}));
```

---

## Font Loading

The library bundles Material Symbols (Outlined, Rounded, Sharp) and Roboto fonts. Both `configure()` and the `init` import load fonts automatically.

### Expo Projects

Uses `expo-font` to load fonts asynchronously. Fonts are available after the promise resolves.

### Bare React Native Projects

If `expo-font` is not available, fonts must be linked via native asset linking:

```bash
npx react-native-asset
```

---

## Runtime Theme Settings

The library provides a unified store for all runtime-mutable theme settings. Every change is applied immediately — `StyleSheet.create` stylesheets and `useAnimatedTheme()` worklets update automatically.

### Reading Settings

```tsx
import { useThemeSettings } from 'react-native-material-design';

function ThemeIndicator() {
  const { sourceColor, themeMode, motionScheme, reducedMotion } = useThemeSettings();
  return (
    <Text>
      Color: {sourceColor}, Mode: {themeMode}
    </Text>
  );
}
```

For non-React contexts (event handlers, middleware), use `getThemeSettings()` instead.

### Updating Settings

```tsx
import { updateThemeSettings } from 'react-native-material-design';

// Single field
updateThemeSettings({ sourceColor: '#FF5722' });

// Multiple fields in one atomic update
updateThemeSettings({
  sourceColor: '#1B6B52',
  motionScheme: 'standard',
  themeMode: 'dark',
});
```

Updates are efficient — full theme regeneration (the expensive `@material/material-color-utilities` pipeline) only runs when `sourceColor` changes. Changing `motionScheme` patches only the motion springs on existing themes. Changing `themeMode` only toggles unistyles' adaptive/manual mode. Changing `reducedMotion` has no side effect; components react via re-render.

### Available Settings

| Field           | Type                          | Default        | Description                                    |
| --------------- | ----------------------------- | -------------- | ---------------------------------------------- |
| `sourceColor`   | `string`                      | `'#6750A4'`    | Hex color seed for M3 dynamic color generation |
| `themeMode`     | `'auto' \| 'light' \| 'dark'` | `'auto'`       | `'auto'` follows device; others force a scheme |
| `motionScheme`  | `'expressive' \| 'standard'`  | `'expressive'` | Spring bounciness profile                      |
| `reducedMotion` | `'device' \| true \| false`   | `'device'`     | `'device'` defers to OS; `true`/`false` forces |

### Persisting Settings

The settings store is ephemeral — it resets on app restart. To persist settings, register a callback with `onThemeSettingsChange`:

```tsx
import { onThemeSettingsChange, updateThemeSettings } from 'react-native-material-design';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Save on every change
const unsubscribe = onThemeSettingsChange((settings) => {
  AsyncStorage.setItem('theme-settings', JSON.stringify(settings));
});

// Restore on app start (after configure)
const saved = await AsyncStorage.getItem('theme-settings');
if (saved) {
  updateThemeSettings(JSON.parse(saved));
}
```

### API Reference

| Export                   | Kind     | Description                                                |
| ------------------------ | -------- | ---------------------------------------------------------- |
| `useThemeSettings()`     | Hook     | Returns reactive settings snapshot (re-renders on change)  |
| `getThemeSettings()`     | Function | Returns current snapshot (non-reactive, for outside React) |
| `updateThemeSettings(p)` | Function | Merges partial settings and applies changes                |
| `onThemeSettingsChange`  | Function | Registers persistence/side-effect callback                 |
| `subscribeThemeSettings` | Function | Low-level subscribe (for custom `useSyncExternalStore`)    |

---

## Entry Points

| Import Path                                      | Contents                                                                                                                                                         |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `react-native-material-design`                   | `configure`, `generateTheme`, `generateThemes`, `updateThemeSettings`, `useThemeSettings`, `getThemeSettings`, `onThemeSettingsChange`, `loadFonts`, theme types |
| `react-native-material-design/init`              | Side-effect only — calls `configure()` with defaults. No named exports.                                                                                          |
| `react-native-material-design/ui/*`              | UI components (per-component imports)                                                                                                                            |
| `react-native-material-design/navigation/*`      | React Navigation adapters (requires `@react-navigation/native`)                                                                                                  |
| `react-native-material-design/navigation/expo/*` | Expo Router adapters (requires `expo-router`)                                                                                                                    |

### Why Per-Component Imports?

Components are imported individually (`react-native-material-design/ui/button`) rather than from a barrel export. This ensures tree-shaking works correctly — you only bundle the components you use.
