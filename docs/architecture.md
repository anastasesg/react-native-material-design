# Architecture Overview

This document describes the internal architecture of the component library — the building blocks, patterns, and systems that every M3 component is built on.

Source: [`src/components/custom/`](../src/components/custom/) · [`src/hooks/`](../src/hooks/) · [`src/utilities/`](../src/utilities/) · [`src/theme/`](../src/theme/) · [`src/configure.ts`](../src/configure.ts)

---

## Design Principles

### Compound Composition Over Props

Components use a **composable/compound** pattern. Consumers assemble sub-components as children rather than passing content via props:

```tsx
// Correct — composable
<Button>
  <ButtonIcon name="save" />
  <ButtonLabel>Save</ButtonLabel>
</Button>

// Wrong — props-based
<Button icon="save" label="Save" />
```

This gives consumers full control over ordering, conditional rendering, and per-child props without the component needing to anticipate every layout permutation.

### Context-Driven State

Parent components share state with sub-components via React Context, not `cloneElement` or prop injection. Two factory functions create contexts:

| Factory                                   | Behavior                                 | Use Case                                 |
| ----------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `createComponentContext<T>(name)`         | Hook **throws** if used outside provider | Required parent (Button → ButtonIcon)    |
| `createOptionalComponentContext<T>(name)` | Hook returns **null** if no provider     | Optional parent (Pressable → StateLayer) |

Both return a `[Provider, useHook]` tuple:

```tsx
const [ButtonProvider, useButton] = createComponentContext<ButtonCtx>('Button');

// In Button:
<ButtonProvider value={ctx}>{children}</ButtonProvider>;

// In ButtonLabel:
const { size, variant, disabled } = useButton();
```

### Controllable State

All stateful components support both **controlled** and **uncontrolled** modes via `useControllableState`:

```tsx
const [value, setValue] = useControllableState({
  value: controlledValue, // undefined = uncontrolled
  defaultValue: initialValue,
  onChange: callback,
});
```

When `value` is `undefined`, the hook manages internal state. When `value` is provided, it acts as a pass-through and only calls `onChange`. The returned `setValue` has a stable reference (never changes), which avoids unnecessary re-renders in consumers.

---

## Layer Stack

Every interactive M3 component is built from the same four building blocks, composed in a fixed order:

```
Pressable                       ← gesture handling + interaction progress
  └─ ElevationContainer         ← animated shadow
      └─ ShapeContainer         ← animated border radius + focus ring
          ├─ StateLayer          ← interaction feedback overlay + disabled overlay
          └─ [Content]           ← component-specific children (via context provider)
```

Each layer reads from the layer above it via context — no prop wiring between them. This means a component author wires together the layers once, and interaction animations "just work."

### Why This Order Matters

- **Pressable** must be outermost — it owns the gesture detector and provides interaction progress to everything inside it.
- **ElevationContainer** wraps the shape — shadows must extend beyond the clipped shape container, not be clipped by it.
- **ShapeContainer** clips its children with animated `borderRadius` — the state layer and content are visually bounded by the shape.
- **StateLayer** is absolute-positioned inside the shape — it fills the clipped area and overlays the content with interaction tint.

---

## Building Blocks

### Pressable

**Source:** [`src/components/custom/pressable.tsx`](../src/components/custom/pressable.tsx)

Custom Pressable built on React Native Gesture Handler. Replaces RN's Pressable with a gesture-driven system that tracks four interaction states as spring-animated SharedValues.

#### Interaction Progress

Pressable creates and provides `InteractionProgress` via context — a pair of interaction sets:

```
InteractionProgress
├─ effects: { press, hover, focus, drag }    ← no-overshoot springs
└─ spatial: { press, hover, focus, drag }    ← overshoot-allowed springs
```

Each value is a `SharedValue<number>` that springs between 0 (inactive) and 1 (active). The dual-channel design maps to M3's motion model:

| Channel   | Spring Type       | Used For                                           |
| --------- | ----------------- | -------------------------------------------------- |
| `effects` | Effects (damped)  | Opacity, color, elevation — should settle cleanly  |
| `spatial` | Spatial (elastic) | Shape morphing, position — can have elastic bounce |

#### Gesture Composition

Built-in gestures are composed internally:

- **Tap** — `onBegin` → press=1, `onEnd` → fires `onPress`, `onFinalize` → press=0
- **Long press** — takes priority over tap via `Gesture.Exclusive(longPress, tap)`
- **Hover** — tracks pointer enter/leave (web/desktop)
- **Drag** — opt-in via `draggable` prop, tracks drag state only (no translation)
- **External** — consumer can pass additional gestures via the `gesture` prop, composed simultaneously

All gesture callbacks run on the **UI thread** via RNGH worklets. Spring animations fire directly in callbacks — zero JS bridge crossings, zero React re-renders for interaction state.

#### Focus Handling

RNGH has no focus gesture, so focus/blur use RN's native events on the JS thread. Focus animations are suppressed when triggered by pointer interaction (press or hover already active) to prevent double-feedback.

#### Web Keyboard Support

Space and Enter activate the button on `keyup` (matching native button behavior). `keydown` only calls `preventDefault` to stop Space from scrolling and Enter from submitting forms.

#### Motion Speed

The `speed` prop selects which spring tier to use:

| Speed       | Effects Spring Key | Spatial Spring Key |
| ----------- | ------------------ | ------------------ |
| `'fast'`    | `fastEffects`      | `fastSpatial`      |
| `'default'` | `defaultEffects`   | `defaultSpatial`   |
| `'slow'`    | `slowEffects`      | `slowSpatial`      |

Springs are resolved from `theme.motion.springs[scheme]` where `scheme` is `'expressive'` or `'standard'`.

---

### StateLayer

**Source:** [`src/components/custom/state-layer.tsx`](../src/components/custom/state-layer.tsx)

Absolute-positioned overlay that provides visual interaction feedback per M3's state layer model. Renders inside a ShapeContainer so it's clipped to the component's shape.

#### How It Works

1. Reads `InteractionProgress.effects` from the nearest Pressable via `useInteraction()`
2. Multiplies each interaction's progress (0–1) by its M3 state opacity
3. Takes the **max** of all active opacities as the layer opacity
4. Tints with the specified theme color

#### M3 State Opacities

| State   | Opacity | Source                |
| ------- | ------- | --------------------- |
| Hover   | 8%      | `theme.state.hover`   |
| Focus   | 10%     | `theme.state.focus`   |
| Pressed | 10%     | `theme.state.pressed` |
| Dragged | 16%     | `theme.state.dragged` |

#### Disabled Overlay

When `disabled={true}`, an additional overlay renders **above** the state layer:

- Color: `scheme.onSurface`
- Opacity: `theme.state.disabledContainer` (0.12) by default
- Components can override via `disabledOpacity` (e.g., Button uses 0.10 per M3 button spec)

#### Graceful Degradation

When used outside a Pressable (no interaction context), the layer renders transparent with zero opacity — no error, no visual effect. This allows components to optionally support interaction without conditional rendering.

---

### ShapeContainer

**Source:** [`src/components/custom/shape-container.tsx`](../src/components/custom/shape-container.tsx)

Animated `Animated.View` that clips children with theme-aware border radii. Handles shape morphing during interactions and rest-shape transitions.

#### Shape Specification

Shapes can be specified three ways:

| Form              | Example                        | Description                          |
| ----------------- | ------------------------------ | ------------------------------------ |
| Token (string)    | `'full'`, `'medium'`, `'none'` | Resolved from `theme.shape`          |
| Number            | `16`                           | Used as raw pixels                   |
| Per-corner object | `{ topStart: 'xlarge', ... }`  | Asymmetric, using logical directions |

Logical directions (`topStart`/`topEnd`/`bottomStart`/`bottomEnd`) are mapped to physical `Left`/`Right` properties at render time based on RTL state — Reanimated's web runtime drops logical border-radius properties.

#### Shape Token Scale

From `theme.shape`:

| Token             | Pixels |
| ----------------- | ------ |
| `none`            | 0      |
| `xsmall`          | 4      |
| `small`           | 8      |
| `medium`          | 12     |
| `large`           | 16     |
| `largeIncreased`  | 20     |
| `xlarge`          | 28     |
| `xlargeIncreased` | 32     |
| `xxlarge`         | 48     |
| `full`            | 9999   |

#### Interaction Shape Morphing

When `shapes` is provided, the container interpolates from rest shape toward the active interaction's target shape using **spatial** springs (overshoot allowed). Blending is additive in M3 priority order:

```
hover → focus → press → drag
```

Each interaction shifts corners from their current position toward its target proportionally to its progress. Higher-priority interactions layer on top of lower-priority ones.

#### maxRadius Capping

Border radius is capped at `containerHeight / 2` to prevent iOS CoreAnimation artifacts. The `full` token (9999) would cause visual glitches when animating to smaller values — capping at half the view height produces an identical pill shape without the animation artifacts.

#### Rest Shape Transitions

When the `shape` prop changes (e.g., toggle selection inverts shape), the container animates between the previous and new rest shape using the theme's `fastSpatial` spring. This is separate from interaction morphing.

#### Focus Ring

ShapeContainer also renders the M3 focus ring: a 3dp outline with 2dp offset in `scheme.primary`, visible only during keyboard focus (suppressed when press or drag is active).

---

### ElevationContainer

**Source:** [`src/components/custom/elevation-container.tsx`](../src/components/custom/elevation-container.tsx)

Wraps children in an `Animated.View` with platform shadow styles interpolated from the theme's elevation system.

#### Elevation Levels

M3 defines 6 discrete elevation levels (0–5). The container interpolates shadow properties (offset, opacity, radius) between adjacent levels for smooth animation:

```
Level 0: flat (no shadow)
Level 1: slight lift (cards, elevated buttons)
Level 2: hover state for elevated components
Level 3: navigation bars, FABs
Level 4: search bars
Level 5: top app bars on scroll
```

#### Static vs Animated Level

The `level` prop accepts either a plain number (snaps to level) or a `SharedValue<number>` (animates smoothly). Internally, static numbers are mirrored into a SharedValue so the worklet has a single code path.

#### Interaction Elevation

When `elevations` is provided, the container reads **effects** progress from the nearest Pressable and blends from the rest level toward the interaction target. Same priority model as other building blocks: drag > press > focus > hover.

Common patterns:

- Filled/tonal buttons: rest 0, hover 1 (`{ hover: 1 }`)
- Elevated buttons: rest 1, hover 2 (`{ hover: 2 }`)
- Disabled: no elevation interactions

---

## Theming System

### Theme Structure

Generated by `generateTheme(dark, sourceColor)` from a single source color:

```
Theme
├─ scheme: Scheme          ← 45+ color roles (primary, onPrimary, surface, etc.)
├─ shape: Shape            ← border radius scale (none → full)
├─ elevation: Elevation    ← shadow configs per level (0–5)
├─ motion: Motion          ← springs, easing curves, durations
│   ├─ scheme: MotionScheme        ← 'expressive' | 'standard'
│   ├─ springs: { expressive, standard }  ← each has 6 springs (fast/default/slow × effects/spatial)
│   ├─ easing: { ... }            ← cubic bezier curves
│   └─ duration: { ... }          ← timing tokens (short1–extraLong4)
├─ state: State            ← interaction opacities (hover, focus, pressed, dragged, disabled)
├─ pallettes: Palettes     ← tonal palettes for advanced color derivation
└─ typography: Typography  ← type scale (display, headline, title, body, label × small/medium/large)
```

### Runtime Theme Settings

**Source:** [`src/theme/settings.ts`](../src/theme/settings.ts)

A centralized, reactive store for all runtime-mutable theme settings (source color, theme mode, motion scheme, reduced motion). Built on `useSyncExternalStore` for React integration.

#### Architecture

The store holds a frozen `ThemeSettings` snapshot. Every call to `updateThemeSettings` short-circuits if no value actually changed (preserving referential stability), then selectively applies side effects and notifies subscribers:

```
updateThemeSettings({ sourceColor: '#FF5722' })
  │
  ├─ No values changed?   → return (same snapshot reference, no re-renders)
  ├─ Replace _settings with new frozen object
  ├─ sourceColor changed? → generateThemes() + UnistylesRuntime.updateTheme()
  ├─ motionScheme changed? → buildMotion() + patch motion on existing themes
  ├─ themeMode changed?   → UnistylesRuntime.setAdaptiveThemes/setTheme()
  ├─ reducedMotion changed? → (no side effect — components react via re-render)
  └─ Notify all useSyncExternalStore subscribers
```

This design avoids regenerating themes on every update — only `sourceColor` triggers the expensive `@material/material-color-utilities` pipeline. `motionScheme` changes patch only the motion springs on existing themes (via `buildMotion`), skipping color generation entirely.

#### Initialization

`configure()` calls `initThemeSettings()` internally, capturing:

- The initial runtime settings (sourceColor, themeMode, motionScheme, reducedMotion)
- The static generation options (fontFamily, overrides, lightOverrides, darkOverrides) so that future `updateThemeSettings` calls preserve them

#### Persistence

The store is ephemeral by default. `onThemeSettingsChange(callback)` registers a callback invoked after every update — consumers plug in AsyncStorage, MMKV, or any storage layer.

### Unistyles Integration

Styles use `StyleSheet.create` from `react-native-unistyles` for theme-aware styling:

```tsx
const styles = StyleSheet.create((theme) => ({
  container: {
    backgroundColor: theme.scheme.primary,
    borderRadius: theme.shape.medium,
  },
}));
```

#### Variants

Conditional styling based on component state uses unistyles variants:

```tsx
// In stylesheet:
variants: {
  variant: {
    filled: { backgroundColor: theme.scheme.primary },
    outlined: { borderWidth: 1, borderColor: theme.scheme.outlineVariant },
  },
  disabled: {
    true: { backgroundColor: undefined },
    false: {},
  },
}

// In component:
styles.useVariants({ variant, disabled });
```

#### Compound Variants

Cross-variant combinations use `compoundVariants` for rules that depend on multiple variant axes:

```tsx
compoundVariants: [
  { variant: 'outlined', disabled: true, styles: { borderColor: theme.scheme.outlineVariant } },
  { size: 'large', variant: 'outlined', styles: { borderWidth: 2 } },
];
```

### Animated Theme Access

For values needed inside `useAnimatedStyle` worklets, use `useAnimatedTheme()` from `react-native-unistyles/reanimated`:

```tsx
const animatedTheme = useAnimatedTheme();

const animatedStyle = useAnimatedStyle(() => {
  const t = animatedTheme.value;
  return { backgroundColor: t.scheme.primary };
});
```

This provides a SharedValue that tracks theme changes (including dark/light mode transitions) on the UI thread.

---

## Motion System

### Spring-Based Animation

All interaction animations use physics-based springs via Reanimated's `withSpring`. No duration-based timing for interaction feedback.

Springs are organized in a 2×3 matrix:

|             | Fast          | Default          | Slow          |
| ----------- | ------------- | ---------------- | ------------- |
| **Effects** | `fastEffects` | `defaultEffects` | `slowEffects` |
| **Spatial** | `fastSpatial` | `defaultSpatial` | `slowSpatial` |

**Effects springs** are critically damped (no overshoot) — used for opacity, color, and elevation where overshoot would look wrong (negative opacity, color beyond target).

**Spatial springs** allow overshoot — used for shape morphing and position where elastic bounce adds physical feel.

### Motion Schemes

Two spring sets are available:

- **`expressive`** — bouncier, more personality (M3 Expressive default)
- **`standard`** — more restrained, professional

The active scheme is set globally on the theme (`theme.motion.scheme`) and can be overridden per-component via the `scheme` prop on Pressable.

### Duration & Easing Tokens

Available for non-spring animations (layout transitions, enter/exit animations):

- **Durations:** `short1` (50ms) through `extraLong4` (1000ms)
- **Easing:** emphasized, standard, and legacy cubic bezier curves

---

## Hooks

### useControllableState

Core pattern for controlled/uncontrolled components. See [Controllable State](#controllable-state) above.

### useInteraction

Reads `InteractionProgress` from the nearest Pressable context. Returns `null` when used outside a Pressable.

```tsx
const progress = useInteraction();
if (progress) {
  // progress.effects.press.value — effects spring (0–1)
  // progress.spatial.press.value — spatial spring (0–1)
}
```

### useMotionConfig

Centralized spring config resolution for all animations. Returns `{ effects, spatial }` — SharedValues containing the resolved spring configs for use with `withSpring` on either thread. Handles speed-to-spring-key mapping, motion scheme resolution, and reduced motion (spatial springs snap near-instantly, effect springs use faster fades). Reads `reducedMotion` from the theme settings store via `useThemeSettings()`, so changes to reduced motion preference propagate to all animated components automatically.

```tsx
const motion = useMotionConfig('fast', scheme);
value.value = withSpring(target, motion.effects.value);
```

### usePresence

Mount/unmount lifecycle hook — tracks a boolean `present` state and defers unmount until exit animations complete.

---

## File Conventions

### Component File Structure

Each component file starts with M3 spec links:

```tsx
/// Material Design ComponentName
/// Overview: https://m3.material.io/components/{name}/overview
/// Specs: https://m3.material.io/components/{name}/specs
/// Guidelines: https://m3.material.io/components/{name}/guidelines
/// Accessibility: https://m3.material.io/components/{name}/accessibility
```

Followed by:

1. Context definition (if compound component)
2. Helper functions (shape resolution, color mapping, etc.)
3. Types
4. Constants
5. Main component
6. Sub-components
7. Styles (`StyleSheet.create`)
8. Display names
9. Exports (types separately from values)

### Path Aliases

`@/*` resolves to `./src/*` throughout the library source.

### Export Structure

| Entry Point                                      | Contents                                                     |
| ------------------------------------------------ | ------------------------------------------------------------ |
| `react-native-material-design`                   | `configure`, theme settings API, generation utilities, types |
| `react-native-material-design/init`              | Unistyles config + font loading                              |
| `react-native-material-design/ui/*`              | Individual UI components                                     |
| `react-native-material-design/navigation/*`      | React Navigation adapters                                    |
| `react-native-material-design/navigation/expo/*` | Expo Router adapters                                         |
