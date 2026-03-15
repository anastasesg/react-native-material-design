# Button — Implementation Reference

> M3 Buttons prompt most actions in a UI. This document describes the library's `Button` implementation, its API surface, internal architecture, and how it maps to the M3 spec.

Source: [`src/components/ui/button.tsx`](../src/components/ui/button.tsx)

M3 Spec: [Overview](https://m3.material.io/components/buttons/overview) · [Specs](https://m3.material.io/components/buttons/specs) · [Guidelines](https://m3.material.io/components/buttons/guidelines) · [Accessibility](https://m3.material.io/components/buttons/accessibility)

---

## Composition Pattern

Button uses a **compound component** pattern. Instead of passing content via props, consumers assemble sub-components as children:

```tsx
import { Button, ButtonIcon, ButtonLabel } from 'react-native-material-design/ui/button';

<Button variant="filled" size="medium" onPress={handleSave}>
  <ButtonIcon name="save" />
  <ButtonLabel>Save</ButtonLabel>
</Button>;
```

State flows from `Button` to sub-components via React Context (`createComponentContext`). Sub-components call `useButton()` to read parent state — no prop injection or `cloneElement`.

### Sub-components

| Component     | Purpose                                          |
| ------------- | ------------------------------------------------ |
| `Button`      | Root — manages state, renders Pressable + layers |
| `ButtonIcon`  | Icon — auto-sizes based on parent `size`         |
| `ButtonLabel` | Text label — auto-selects typography variant     |

Sub-components **must** be used inside a `Button`. Using them outside throws:

```
<Button> sub-component used outside of <Button>.
```

### Ordering

`ButtonIcon` must appear **before** `ButtonLabel` in JSX order (icon-leading per M3 spec). The container uses `flexDirection: 'row'`, so this produces icon-left in LTR and icon-right in RTL automatically. A dev warning fires if the icon comes after the label.

---

## Props

### ButtonProps

| Prop                | Type                                                        | Default     | Description                                                            |
| ------------------- | ----------------------------------------------------------- | ----------- | ---------------------------------------------------------------------- |
| `variant`           | `'filled' \| 'elevated' \| 'tonal' \| 'outlined' \| 'text'` | `'filled'`  | Visual variant — determines container color, elevation, and border     |
| `size`              | `'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'`    | `'small'`   | Size tier — controls padding, gap, typography, corner radii            |
| `shape`             | `'rounded' \| 'square'`                                     | `'rounded'` | Shape style — pill or size-dependent corner radius                     |
| `disabled`          | `boolean`                                                   | `false`     | Disables press events, dims content, removes elevation                 |
| `toggle`            | `boolean`                                                   | `false`     | Enables toggle mode (M3 Expressive). Not supported on `'text'` variant |
| `selected`          | `boolean`                                                   | —           | Controlled selected state (only when `toggle={true}`)                  |
| `defaultSelected`   | `boolean`                                                   | `false`     | Initial selected state for uncontrolled toggle                         |
| `onSelectedChange`  | `(selected: boolean) => void`                               | —           | Called when toggle state changes                                       |
| `restShape`         | `ShapeSpec`                                                 | auto        | Override the rest (unpressed) shape token or value                     |
| `interactionShapes` | `InteractionShapes`                                         | auto        | Override per-interaction target shapes. Pass `{}` to disable morphing  |
| `elevation`         | `ElevationLevel \| SharedValue<number>`                     | auto        | Elevation level (0–5). SharedValue enables smooth animation            |
| `style`             | `StyleProp<ViewStyle>`                                      | —           | Style applied to the root Pressable                                    |
| `containerStyle`    | `StyleProp<ViewStyle>`                                      | —           | Style for the inner ShapeContainer                                     |
| `accessibilityHint` | `string`                                                    | —           | Additional context for screen readers                                  |
| `onPress`           | `(e: TapEvent) => void`                                     | —           | Press callback                                                         |

Plus all other `PressableProps` (e.g., `onPressIn`, `onHoverIn`, `onLongPress`, `hitSlop`, `speed`, `scheme`, `gesture`).

### ButtonIconProps

Extends `IconProps` from the `Icon` component.

| Prop           | Type             | Description                                             |
| -------------- | ---------------- | ------------------------------------------------------- |
| `name`         | `MaterialSymbol` | Icon name (from Material Symbols)                       |
| `selectedName` | `MaterialSymbol` | Alternate icon name used when parent toggle is selected |

### ButtonLabelProps

Extends `TextProps` with an optional `numberOfLines` prop (default: `1`). Typography `variant` and `size` are derived from the parent Button's `size` automatically — consumer-supplied values for these two inherited `TextProps` fields are silently ignored to ensure M3 spec compliance.

---

## Variants

### Visual Variants (`variant`)

Each variant controls the container color, elevation behavior, and border treatment:

| Variant    | Container Color              | Resting Elevation | Hover Elevation | Border                         |
| ---------- | ---------------------------- | ----------------- | --------------- | ------------------------------ |
| `filled`   | `scheme.primary`             | 0                 | 1               | None                           |
| `elevated` | `scheme.surfaceContainerLow` | 1                 | 2               | None                           |
| `tonal`    | `scheme.secondaryContainer`  | 0                 | 1               | None                           |
| `outlined` | transparent                  | 0                 | 0               | `scheme.outlineVariant`, 1-3dp |
| `text`     | transparent                  | 0                 | 0               | None                           |

Outlined border width scales with size: 1dp (xsmall/small/medium), 2dp (large), 3dp (xlarge).

Label and icon colors per variant (non-toggle):

| Variant    | Label/Icon Color              |
| ---------- | ----------------------------- |
| `filled`   | `scheme.onPrimary`            |
| `elevated` | `scheme.primary`              |
| `tonal`    | `scheme.onSecondaryContainer` |
| `outlined` | `scheme.onSurfaceVariant`     |
| `text`     | `scheme.primary`              |

### Size Variants (`size`)

| Size     | Min Height | Gap  | Padding (V×H) | Icon Size | Typography     | M3 Type               |
| -------- | ---------- | ---- | ------------- | --------- | -------------- | --------------------- |
| `xsmall` | 32dp       | 8dp  | 6×12          | 20        | label/large    | Expressive            |
| `small`  | 40dp       | 8dp  | 10×16         | 20        | label/large    | Standard + Expressive |
| `medium` | 56dp       | 8dp  | 16×24         | 24        | title/medium   | Expressive            |
| `large`  | 96dp       | 12dp | 32×48         | 32        | headline/small | Expressive            |
| `xlarge` | 136dp      | 16dp | 48×64         | 40        | headline/large | Expressive            |

Sizes smaller than 48dp get automatic `hitSlop` to meet the 48dp minimum touch target:

- `xsmall` (32dp): +8dp each side
- `small` (40dp): +4dp each side

### Shape Variants (`shape`)

| Shape     | Rest corners                   | Press target   |
| --------- | ------------------------------ | -------------- |
| `rounded` | `full` (pill)                  | Size-dependent |
| `square`  | Size-dependent (medium→xlarge) | Size-dependent |

When `toggle` is active and selection is `'selected'`, the shape **inverts**: rounded becomes square and square becomes rounded.

---

## Toggle Mode

Toggle mode turns the button into a binary selection control. Enable with `toggle={true}`.

### Controlled vs Uncontrolled

Powered by `useControllableState`, toggle supports both patterns:

```tsx
// Uncontrolled — manages its own state
<Button toggle defaultSelected={false}>
  <ButtonIcon name="favorite" selectedName="favorite_filled" />
  <ButtonLabel>Like</ButtonLabel>
</Button>

// Controlled — parent manages state
<Button toggle selected={isLiked} onSelectedChange={setIsLiked}>
  <ButtonIcon name="favorite" selectedName="favorite_filled" />
  <ButtonLabel>Like</ButtonLabel>
</Button>
```

### Toggle Visual Changes

When toggled, the component changes:

1. **Container color** — e.g., filled unselected uses `surfaceContainer` instead of `primary`
2. **Label/icon color** — changes to match the new container
3. **Shape** — inverts between rounded and square
4. **State layer color** — switches to the selected variant

| Variant    | Unselected Container  | Selected Container | Unselected Label/Icon  | Selected Label/Icon |
| ---------- | --------------------- | ------------------ | ---------------------- | ------------------- |
| `filled`   | `surfaceContainer`    | `primary`          | `onSurfaceVariant`     | `onPrimary`         |
| `elevated` | `surfaceContainerLow` | `primary`          | `primary`              | `onPrimary`         |
| `tonal`    | `secondaryContainer`  | `secondary`        | `onSecondaryContainer` | `onSecondary`       |
| `outlined` | transparent           | `inverseSurface`   | `onSurfaceVariant`     | `inverseOnSurface`  |
| `text`     | N/A (not supported)   | —                  | —                      | —                   |

---

## Internal Architecture

### Layer Stack

The Button renders this component tree:

```
Pressable                       ← gesture handling, interaction progress context
  └─ ElevationContainer         ← shadow rendering, hover elevation animation
      └─ ShapeContainer         ← animated border radius (shape morphing)
          ├─ StateLayer          ← interaction feedback overlay (press/hover/focus tint)
          └─ ButtonProvider      ← Button context (size, variant, selection, disabled)
              ├─ ButtonIcon      ← auto-sized icon
              └─ ButtonLabel     ← auto-typed text label
```

### Building Block Responsibilities

| Component            | What It Does                                                                                                                                                                                                                      |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Pressable`          | RNGH-based gesture tracking. Emits spring-animated `InteractionProgress` (press/hover/focus/drag) via context. All gestures run on UI thread — zero JS bridge crossings for interaction state.                                    |
| `ElevationContainer` | Renders platform shadows. Animates elevation level on hover (e.g., level 1→2 for elevated variant). Reads interaction progress from Pressable context.                                                                            |
| `ShapeContainer`     | Animates `borderRadius` between rest shape and interaction target shapes. Reads spatial interaction progress for spring-based corner morphing. Also renders the keyboard focus ring (3dp outline, `secondary` color, 2dp offset). |
| `StateLayer`         | Absolute-positioned overlay that tints based on interaction state. Opacity follows M3 state opacities: hover 8%, focus 10%, press 10%, drag 16%. Also renders disabled container overlay.                                         |

### How Interaction Flows

1. User presses → RNGH tap gesture fires `onBegin` on UI thread
2. `Pressable` spring-animates `press` progress from 0 → 1
3. `ShapeContainer` reads spatial press progress, interpolates corners toward pressed shape
4. `StateLayer` reads effects press progress, applies 10% opacity tint
5. `ElevationContainer` reads effects hover progress (if configured), interpolates elevation
6. User releases → progress springs back to 0

No React re-renders occur during the interaction. All animation is driven by Reanimated SharedValues on the UI thread.

---

## Shape Morphing

Buttons animate their border radius during press interactions (the M3 "squish" effect).

### Rest Shape Resolution

The rest shape is computed by `getRestShapeToken(size, shape, selection)`:

| Configuration             | Rest Shape Token | dp Value                           |
| ------------------------- | ---------------- | ---------------------------------- |
| `rounded` (any size)      | `full`           | pill (capped at containerHeight/2) |
| `square` + `xsmall/small` | `medium`         | 12dp                               |
| `square` + `medium`       | `large`          | 16dp                               |
| `square` + `large/xlarge` | `xlarge`         | 28dp                               |

Selected toggle buttons invert the shape: `rounded` becomes `square` and vice versa.

### Pressed Shape Targets

The pressed shape is computed by `getPressedShapeToken(size)`:

| Size               | Pressed Shape Token | dp Value |
| ------------------ | ------------------- | -------- |
| `large` / `xlarge` | `large`             | 16dp     |
| `medium`           | `medium`            | 12dp     |
| `xsmall` / `small` | `small`             | 8dp      |

### Overriding Shape

```tsx
// Custom rest shape
<Button restShape="medium">...</Button>

// Custom press shape
<Button interactionShapes={{ press: 'small', hover: 'large' }}>...</Button>

// Disable all shape morphing (e.g., inside ButtonGroup)
<Button interactionShapes={{}}>...</Button>
```

---

## State Layer Colors

The state layer color depends on variant and selection state:

| Variant    | None / Unselected      | Selected           |
| ---------- | ---------------------- | ------------------ |
| `filled`   | `onPrimary`            | `onPrimary`        |
| `elevated` | `primary`              | `onPrimary`        |
| `tonal`    | `onSecondaryContainer` | `onSecondary`      |
| `outlined` | `onSurfaceVariant`     | `inverseOnSurface` |
| `text`     | `primary`              | N/A                |

State layer opacities follow the M3 system tokens: hover 8% (`theme.state.hover`), focus 10% (`theme.state.focus`), press 10% (`theme.state.pressed`), drag 16% (`theme.state.dragged`).

---

## Disabled State

When `disabled={true}`:

- All variant-applied `backgroundColor` and `borderColor` are cleared
- `StateLayer` renders a disabled container overlay at 10% opacity (`BUTTON_DISABLED_CONTAINER_OPACITY = 0.1`), which differs from the system default of 12%
- Label and icon colors change to `onSurface` at `theme.state.disabledContent` opacity
- Elevation drops to 0 (no hover elevation interaction)
- Press events are suppressed

Exception: disabled outlined buttons retain `borderColor: scheme.outlineVariant` at full opacity (per M3 spec).

---

## Accessibility

### Roles and States

- `accessibilityRole="button"` — always, even for toggle buttons (`"togglebutton"` has no native equivalent on iOS/Android and silently falls back)
- `accessibilityState.disabled` — reflects the `disabled` prop
- `accessibilityState.checked` — set on **native** platforms (iOS/Android) when toggle is active. VoiceOver announces "checked/not checked" and TalkBack announces toggle state reliably for `checked`. Not used on web.
- `aria-pressed` — set on **web** for toggle buttons. This is the correct ARIA semantic for toggles (`aria-selected` would be wrong for a button role). React Native Web maps `accessibilityState.selected` to `aria-selected`, so we bypass that and set `aria-pressed` explicitly.
- `ButtonIcon` is hidden from the accessibility tree (`importantForAccessibility="no"`, `accessibilityElementsHidden`) so screen readers don't announce the icon name as a separate element alongside the label text.

### Touch Targets

Minimum 48dp touch target ensured via `hitSlop`:

- `xsmall` (32dp container): 8dp hit slop on each side → 48dp total
- `small` (40dp container): 4dp hit slop on each side → 48dp total
- `medium`+ containers already exceed 48dp

Consumer-supplied `hitSlop` overrides these defaults — the library never fights an explicit override.

### Keyboard Navigation (Web)

- **Tab** navigates to the button (`tabIndex={0}`; disabled buttons get `tabIndex={-1}`)
- **Space / Enter** activates the button. A shared-value guard prevents the double-fire issue where browsers generate a synthetic click after `keyup` on `role="button"` elements.
- **Focus ring** is rendered by `ShapeContainer` as a 3dp `secondary`-colored outline with 2dp offset. The browser's native focus outline is suppressed (set to `transparent`, not `none`, so Windows High Contrast mode can still override it).

### Dev Warnings

In `__DEV__` mode, warnings fire for:

- Icon-only buttons without `accessibilityLabel`
- More than one `ButtonIcon` in the same button
- `ButtonIcon` placed after `ButtonLabel` (should be leading)
- Using `toggle` with `text` variant (not supported per M3 spec)
- Using `selected`, `defaultSelected`, or `onSelectedChange` without `toggle={true}`

---

## Styling

### Unistyles Variants

The stylesheet uses unistyles variants for conditional styling. All three components (`Button`, `ButtonIcon`, `ButtonLabel`) call `useVariants` with the same complete set of axes:

```tsx
styles.useVariants({ size, variant, selection, disabled });
```

This activates the matching variant styles from the `container` and `label` style definitions. Compound variants handle cross-variant combinations (e.g., outlined border width scaling with size, toggle selection colors).

### Shared `label` Style

The `styles.label` object is shared between `ButtonIcon` and `ButtonLabel`. It contains only `color` and `opacity` variants (no typography properties), so it applies correctly to both `Icon` (which accepts `TextStyle` color) and `Text`. The M3 spec calls the text+icon content the "label layer", hence the name.

### Style Override Points

| Prop                                    | Target                                      |
| --------------------------------------- | ------------------------------------------- |
| `style`                                 | Root `Pressable` wrapper                    |
| `containerStyle`                        | Inner `ShapeContainer` (the visible button) |
| `style` on `ButtonIcon` / `ButtonLabel` | Individual sub-component                    |

---

## Exports

```tsx
// Components
export { Button, ButtonIcon, ButtonLabel };

// Context hook — allows custom sub-components to read parent Button state.
// Used by ButtonGroup and SplitButton to access variant/size/selection from
// an ancestor Button. Returns { size, shape, variant, selection, disabled }.
export { useButton };

// Types
export type { ButtonProps, ButtonIconProps, ButtonLabelProps, ButtonSize, ButtonShape, ButtonVariant };

// ButtonSelection is also exported — it's the derived tri-state ('none' | 'selected' | 'unselected')
// computed internally from toggle + selected. Consumers don't set it directly; it's available
// for extension components reading useButton() that need to branch on selection state.
export type { ButtonSelection };
```

---

## Usage Examples

### Basic Variants

```tsx
<Button variant="filled" onPress={handleSave}>
  <ButtonIcon name="save" />
  <ButtonLabel>Save</ButtonLabel>
</Button>

<Button variant="outlined">
  <ButtonLabel>Cancel</ButtonLabel>
</Button>

<Button variant="text">
  <ButtonLabel>Learn more</ButtonLabel>
</Button>
```

### Icon-Only Button

```tsx
<Button variant="tonal" accessibilityLabel="Add to favorites">
  <ButtonIcon name="favorite" />
</Button>
```

### Toggle Button

```tsx
<Button toggle defaultSelected={false} variant="outlined">
  <ButtonIcon name="bookmark_border" selectedName="bookmark" />
  <ButtonLabel>Save</ButtonLabel>
</Button>
```

### Expressive Sizes

```tsx
<Button size="xlarge" shape="square" variant="tonal">
  <ButtonIcon name="play_arrow" />
  <ButtonLabel>Play</ButtonLabel>
</Button>
```

### Custom Shape Override (e.g., in ButtonGroup)

```tsx
<Button restShape="medium" interactionShapes={{}}>
  <ButtonLabel>Flat corners</ButtonLabel>
</Button>
```

### Animated Elevation

```tsx
const elevation = useSharedValue(1);

<Button variant="elevated" elevation={elevation}>
  <ButtonLabel>Hoverable</ButtonLabel>
</Button>;
```
