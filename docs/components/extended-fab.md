# Extended FAB — Implementation Reference

> M3 Extended FABs are the labeled variant of FABs, combining an icon with a text label for the most important action on a screen. This document describes the library's `ExtendedFAB` implementation, its API surface, internal architecture, and how it maps to the M3 Expressive spec. For icon-only FABs, see `FAB`.

Source: [`src/components/ui/extended-fab.tsx`](../../src/components/ui/extended-fab.tsx)

M3 Spec: [Overview](https://m3.material.io/components/extended-fab/overview) · [Specs](https://m3.material.io/components/extended-fab/specs) · [Guidelines](https://m3.material.io/components/extended-fab/guidelines) · [Accessibility](https://m3.material.io/components/extended-fab/accessibility)

---

## Composition Pattern

ExtendedFAB uses a **compound component** pattern. Consumers assemble sub-components as children:

```tsx
import { ExtendedFAB, ExtendedFABIcon, ExtendedFABLabel } from 'react-native-material-design/ui/extended-fab';

// accessibilityLabel is optional — the visible label text provides the accessible name
<ExtendedFAB onPress={handleCompose}>
  <ExtendedFABIcon name="edit" />
  <ExtendedFABLabel>Compose</ExtendedFABLabel>
</ExtendedFAB>;
```

State flows from `ExtendedFAB` to sub-components via React Context (`createComponentContext`). Sub-components call `useExtendedFAB()` to read parent state — no prop injection or `cloneElement`.

### Sub-components

| Component          | Purpose                                                                     |
| ------------------ | --------------------------------------------------------------------------- |
| `ExtendedFAB`      | Root — manages state, renders Pressable + building block layer stack        |
| `ExtendedFABIcon`  | Icon — auto-sizes based on parent `size`, swaps on toggle selection         |
| `ExtendedFABLabel` | Text label — auto-selects typography variant (`title medium`/`title large`) |

Sub-components **must** be used inside an `ExtendedFAB`. Using them outside throws:

```
<ExtendedFAB> sub-component used outside of <ExtendedFAB>.
```

---

## Props

### ExtendedFABProps

| Prop                         | Type                                    | Default              | Description                                                                     |
| ---------------------------- | --------------------------------------- | -------------------- | ------------------------------------------------------------------------------- |
| `size`                       | `'small' \| 'medium' \| 'large'`        | `'medium'`           | Size tier — controls height, icon size, padding, gap, shape, and typography     |
| `colorStyle`                 | `ExtendedFABColorStyle`                 | `'primaryContainer'` | Color scheme — determines container, icon/label, and state layer colors         |
| `disabled`                   | `boolean`                               | `false`              | Disables press events, dims content, drops elevation to 0                       |
| `toggle`                     | `boolean`                               | `false`              | Enables toggle mode — FAB alternates selected/unselected on each press          |
| `selected`                   | `boolean`                               | —                    | Controlled selected state (only when `toggle={true}`)                           |
| `defaultSelected`            | `boolean`                               | `false`              | Initial selected state for uncontrolled toggle                                  |
| `onSelectedChange`           | `(selected: boolean) => void`           | —                    | Called when toggle state changes                                                |
| `restShape`                  | `ShapeSpec`                             | auto (from `size`)   | Override the rest (unpressed) shape token or value                              |
| `interactionShapes`          | `InteractionShapes`                     | auto (press morph)   | Override per-interaction target shapes. Pass `{}` to disable all shape morphing |
| `elevation`                  | `ElevationLevel \| SharedValue<number>` | `3`                  | Elevation level (0–5). `SharedValue` enables smooth animated transitions        |
| `tooltip`                    | `string`                                | —                    | Tooltip text shown on long press (native) / hover (web)                         |
| `selectedTooltip`            | `string`                                | —                    | Tooltip text for toggle selected state. Ignored unless `toggle={true}`          |
| `accessibilityLabel`         | `string`                                | —                    | Screen reader label override                                                    |
| `selectedAccessibilityLabel` | `string`                                | —                    | A11y label for toggle selected state. Falls back to `selectedTooltip`           |
| `style`                      | `StyleProp<ViewStyle>`                  | —                    | Style applied to the root Pressable wrapper                                     |
| `containerStyle`             | `StyleProp<ViewStyle>`                  | —                    | Style for the inner ShapeContainer (the visible FAB)                            |
| `onPress`                    | `(e: TapEvent) => void`                 | —                    | Press callback                                                                  |

Plus all other `PressableProps` (e.g., `onPressIn`, `onHoverIn`, `onLongPress`, `hitSlop`, `speed`, `scheme`, `gesture`) except `disabled`, `style`, and `children` (which are declared explicitly).

Unlike icon-only `FAB`, `accessibilityLabel` is not strictly required — the visible `ExtendedFABLabel` text provides the accessible name via RN's child text aggregation. `accessibilityLabel` can be provided to override the default (e.g., when the visible label is abbreviated: if the button says "Create", the label might say "Create a new invite").

### ExtendedFABIconProps

Extends `IconProps` from the `Icon` component.

| Prop           | Type             | Description                                             |
| -------------- | ---------------- | ------------------------------------------------------- |
| `name`         | `MaterialSymbol` | Icon name (from Material Symbols)                       |
| `selectedName` | `MaterialSymbol` | Alternate icon name used when parent toggle is selected |

Size and color are derived from the parent `ExtendedFAB` context — do not set them manually.

### ExtendedFABLabelProps

Extends `TextProps`. Typography `variant` (`title`) and `size` are derived from the parent `ExtendedFAB`'s size — consumer-supplied values for these two fields are ignored.

---

## Size Variants

ExtendedFAB implements three M3 Expressive sizes. The `small` size replaces the deprecated baseline Extended FAB; `medium` is the Expressive default.

| Size   | Height | MinWidth | Icon Size | Shape (rest)     | dp   | Padding (h) | Gap  | Label Typography | M3 Status            |
| ------ | ------ | -------- | --------- | ---------------- | ---- | ----------- | ---- | ---------------- | -------------------- |
| small  | 56dp   | 80dp     | 24dp      | `large`          | 16dp | 16dp        | 8dp  | title/medium     | Baseline replacement |
| medium | 80dp   | 80dp     | 28dp      | `largeIncreased` | 20dp | 26dp        | 12dp | title/medium     | Expressive (default) |
| large  | 96dp   | 96dp     | 36dp      | `xlarge`         | 28dp | 28dp        | 16dp | title/large      | Expressive           |

---

## Color Styles

Each `colorStyle` fully determines the container, icon/label content, and state layer colors:

| Color Style              | Container              | Icon/Label             | State Layer            |
| ------------------------ | ---------------------- | ---------------------- | ---------------------- |
| `primaryContainer`       | `primaryContainer`     | `onPrimaryContainer`   | `onPrimaryContainer`   |
| `secondaryContainer`     | `secondaryContainer`   | `onSecondaryContainer` | `onSecondaryContainer` |
| `tertiaryContainer`      | `tertiaryContainer`    | `onTertiaryContainer`  | `onTertiaryContainer`  |
| `primary`                | `primary`              | `onPrimary`            | `onPrimary`            |
| `secondary`              | `secondary`            | `onSecondary`          | `onSecondary`          |
| `tertiary`               | `tertiary`             | `onTertiary`           | `onTertiary`           |
| `surface` _(deprecated)_ | `surfaceContainerHigh` | `primary`              | `primary`              |

M3 Expressive deprecates the `surface` style — "No longer recommended." Use a container variant instead.

> **Note:** The spec prose for `primary` style says "state layer = primary", but the token table says `onPrimary`. The implementation follows the token table as the authoritative source.

---

## Interaction States

### Elevation

| State    | Level | Notes                                                    |
| -------- | ----- | -------------------------------------------------------- |
| Enabled  | 3     | Default resting elevation                                |
| Hover    | 4     | Animated via `ElevationContainer` interaction elevations |
| Focus    | 3     | No elevation change on focus                             |
| Pressed  | 3     | No elevation change on press                             |
| Disabled | 0     | Flat, no shadow                                          |

### State Layer Opacity

Standard M3 system tokens applied by `StateLayer`:

| State   | Opacity |
| ------- | ------- |
| Hover   | 8%      |
| Focus   | 10%     |
| Pressed | 10%     |

### Shape Morphing (Press "Squish")

On press, the border radius animates from rest shape toward a smaller pressed shape:

| Size   | Rest Shape Token | Rest dp | Pressed Shape Token | Pressed dp |
| ------ | ---------------- | ------- | ------------------- | ---------- |
| small  | `large`          | 16dp    | `medium`            | 12dp       |
| medium | `largeIncreased` | 20dp    | `medium`            | 12dp       |
| large  | `xlarge`         | 28dp    | `large`             | 16dp       |

> Note: Pressed shape targets are inferred from M3 spec videos — no published tokens exist.

Shape morphing is handled by `ShapeContainer`, which reads the spatial press progress from `Pressable` context and spring-animates each corner radius individually. ExtendedFAB passes `speed="default"` to `ShapeContainer` — this selects the M3 default spatial spring tier, appropriate for medium-coverage components (as opposed to `'fast'` used for small selection controls like switches and icon-only FABs).

---

## Toggle Mode

Toggle mode turns the Extended FAB into a binary selection control. Enable with `toggle={true}`.

### Controlled vs Uncontrolled

Powered by `useControllableState`:

```tsx
// Uncontrolled — manages its own state
<ExtendedFAB toggle>
  <ExtendedFABIcon name="bookmark_border" selectedName="bookmark" />
  <ExtendedFABLabel>Bookmark</ExtendedFABLabel>
</ExtendedFAB>

// Controlled — parent manages state
<ExtendedFAB toggle selected={isSaved} onSelectedChange={setIsSaved}>
  <ExtendedFABIcon name="bookmark_border" selectedName="bookmark" />
  <ExtendedFABLabel>Bookmark</ExtendedFABLabel>
</ExtendedFAB>
```

### Current Toggle Behavior

Toggle currently drives **icon glyph swap only** (`ExtendedFABIcon.selectedName`). Container color and other visual differentiation are not yet implemented — pending M3 Expressive publication of toggle FAB visual tokens.

### Toggle-Aware Labels

In toggle mode, `selectedTooltip` and `selectedAccessibilityLabel` provide state-aware descriptions:

```tsx
<ExtendedFAB
  toggle
  tooltip="Add to bookmarks"
  selectedTooltip="Remove from bookmarks"
  accessibilityLabel="Bookmark this page"
  selectedAccessibilityLabel="Remove bookmark from this page"
>
  <ExtendedFABIcon name="bookmark_border" selectedName="bookmark" />
  <ExtendedFABLabel>Bookmark</ExtendedFABLabel>
</ExtendedFAB>
```

Fallback chain for selected state: `selectedAccessibilityLabel` → `selectedTooltip` → `accessibilityLabel`.

### Toggle Accessibility

- On web, `aria-pressed` communicates the toggle state
- On native, `accessibilityState.selected` triggers idiomatic "selected / not selected" announcements in VoiceOver/TalkBack
- `accessibilityValue.text` is kept as a supplementary hint for screen readers that announce it

---

## Internal Architecture

### Layer Stack

```
Pressable                         ← RNGH gesture tracking, interaction progress context
  └─ ElevationContainer           ← platform shadow, hover elevation animation (level 3 → 4)
      └─ ShapeContainer           ← animated borderRadius (shape morphing + focus ring)
          ├─ StateLayer           ← interaction feedback overlay (press/hover/focus tint)
          │                         + disabled container overlay (onSurface @ 12% opacity)
          └─ ExtendedFABProvider  ← React Context (size, colorStyle, disabled, selected)
              ├─ ExtendedFABIcon  ← auto-sized Material Symbol icon
              └─ ExtendedFABLabel ← auto-typed Text label
```

### Building Block Responsibilities

| Component            | Responsibility                                                                                                                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Pressable`          | RNGH gesture tracking. Emits spring-animated `InteractionProgress` via context. All gestures run on UI thread.                                                                                    |
| `ElevationContainer` | Platform shadows. Hover elevation animation (level 3→4). Reads interaction progress from Pressable context.                                                                                       |
| `ShapeContainer`     | Animated `borderRadius` morphing between rest and interaction shapes. Accepts a `speed` prop for motion tier selection. Renders keyboard focus ring (3dp outline, `secondary` color, 2dp offset). |
| `StateLayer`         | Absolute overlay for interaction tint. Also renders the disabled container overlay (`onSurface` at `theme.state.disabledContainer` = 12%).                                                        |

### How Interaction Flows

1. User presses → RNGH tap gesture fires `onBegin` on UI thread
2. `Pressable` spring-animates `press` progress from 0 → 1
3. `ShapeContainer` reads spatial press progress, interpolates corners toward pressed shape
4. `StateLayer` reads effects press progress, applies 10% opacity tint
5. `ElevationContainer` reads effects hover progress, interpolates elevation level
6. User releases → all progress values spring back to 0

No React re-renders occur during the interaction. All animation is driven by Reanimated SharedValues on the UI thread.

---

## Disabled State

When `disabled={true}`:

- Container `backgroundColor` is cleared (via variant)
- `StateLayer` renders a disabled container overlay at `theme.state.disabledContainer` opacity (12%) — this matches the M3 system token and intentionally differs from Button's 10% override
- Icon and label colors change to `onSurface` at `theme.state.disabledContent` (38%) opacity
- Elevation drops to 0 (no hover interaction)
- Press events are suppressed
- A `__DEV__` warning fires: M3 recommends hiding the FAB instead of disabling it

---

## Accessibility

### Roles and States

- `accessibilityRole="button"` — always set
- `accessibilityState.disabled` — reflects the `disabled` prop
- `accessibilityState.selected` — reflects toggle state on **native** (idiomatic VoiceOver/TalkBack announcement)
- `aria-pressed` — set on **web** for toggle FABs (correct ARIA semantic for toggle buttons)
- `accessibilityValue.text` — supplementary hint for toggle FABs ("selected" / "not selected")

### Labeling

Extended FABs have visible text via `ExtendedFABLabel`, so a separate `accessibilityLabel` is not strictly required — the label text provides the accessible name automatically via RN's child text aggregation. When `accessibilityLabel` is provided, it overrides the default.

Unlike icon-only `FAB`, `tooltip` is **not** used as a fallback `accessibilityLabel` — the M3 spec states "the extended FAB doesn't need a tooltip because it already has a visible label." The tooltip prop only renders the tooltip overlay; it does not affect the accessible name.

In toggle mode, `selectedAccessibilityLabel` overrides the label when selected. Fallback chain: `selectedAccessibilityLabel` → `selectedTooltip` → `accessibilityLabel`.

### Tooltip

When the `tooltip` prop is set, the Extended FAB is wrapped in a `<Tooltip variant="plain">` that shows the text on hover (web) or long press (native), per M3 guidelines.

### Touch Targets

All Extended FAB sizes exceed the 48dp minimum touch target in both dimensions:

| Size   | Height | MinWidth | Exceeds 48dp? |
| ------ | ------ | -------- | ------------- |
| small  | 56dp   | 80dp     | Yes           |
| medium | 80dp   | 80dp     | Yes           |
| large  | 96dp   | 96dp     | Yes           |

The `minWidth` constraint ensures that even short labels cannot produce a container narrower than 48dp. Consumer-supplied `hitSlop` is accepted via `PressableProps` for further expansion.

### Keyboard Navigation (Web)

- **Tab** navigates to the Extended FAB (`tabIndex={0}`; disabled FABs get `tabIndex={-1}`)
- **Space / Enter** activates the FAB. A shared-value guard prevents the double-fire issue where browsers generate a synthetic click after `keyup` on `role="button"` elements.
- **Focus ring** is rendered by `ShapeContainer` as a 3dp `secondary`-colored outline with 2dp offset, shown only for keyboard focus (suppressed during press/drag interactions)

### Dev Warnings

In `__DEV__` mode, warnings fire for:

- Using `disabled={true}` (M3 recommends hiding instead)
- Using `selected`, `defaultSelected`, or `onSelectedChange` without `toggle={true}`
- Using `colorStyle="surface"` (M3 Expressive deprecates this — "no longer recommended")
- Passing unexpected children (not `ExtendedFABIcon` or `ExtendedFABLabel`)
- Having an `ExtendedFABIcon` without an `ExtendedFABLabel` (M3 spec requires a text label)

---

## Styling

### Unistyles Variants

The stylesheet uses three variant axes: `size`, `colorStyle`, and `disabled`. All three components call `useVariants` with the full set:

```tsx
// ExtendedFAB root, ExtendedFABIcon, and ExtendedFABLabel
styles.useVariants({ size, colorStyle, disabled });
```

### Style Override Points

| Prop                          | Target                                   |
| ----------------------------- | ---------------------------------------- |
| `style`                       | Root `Pressable` wrapper                 |
| `containerStyle`              | Inner `ShapeContainer` (the visible FAB) |
| `style` on `ExtendedFABIcon`  | Icon sub-component                       |
| `style` on `ExtendedFABLabel` | Label sub-component                      |

---

## Exports

```tsx
// Components
export { ExtendedFAB, ExtendedFABIcon, ExtendedFABLabel };

// Context hook — allows custom sub-components to read parent ExtendedFAB state.
// Returns { size, colorStyle, disabled, selected }.
export { useExtendedFAB };

// Types
export type {
  ExtendedFABProps,
  ExtendedFABIconProps,
  ExtendedFABLabelProps,
  ExtendedFABSize,
  ExtendedFABColorStyle,
  ExtendedFABShapeSpec, // Re-export of ShapeSpec
  ExtendedFABInteractionShapes, // Re-export of InteractionShapes
};
```

---

## Differences from FAB

| Aspect              | FAB (icon-only)                                 | ExtendedFAB (icon + label)                                           |
| ------------------- | ----------------------------------------------- | -------------------------------------------------------------------- |
| Size names          | `regular`, `medium`, `large`                    | `small`, `medium`, `large`                                           |
| Layout              | Square (width = height)                         | Flexible width (with minWidth), fixed height, `flexDirection: 'row'` |
| Sub-components      | `FABIcon`                                       | `ExtendedFABIcon`, `ExtendedFABLabel`                                |
| Accessibility label | Required (`accessibilityLabel` or `tooltip`)    | Optional (label text provides accessible name)                       |
| Toggle a11y         | `selectedAccessibilityLabel`, `selectedTooltip` | `selectedAccessibilityLabel`, `selectedTooltip`                      |
| Tooltip → a11y      | `tooltip` falls back as `accessibilityLabel`    | `tooltip` does **not** fall back (visible label suffices)            |
| Shape motion speed  | `'fast'` (ShapeContainer default)               | `'default'` (medium-coverage component)                              |
| Child guard         | Validates `FABIcon` only                        | Validates `ExtendedFABIcon` + `ExtendedFABLabel`                     |

---

## Spec Gaps & Inferred Values

Several values in the implementation are inferred from M3 spec diagrams/videos rather than published tokens:

| Value                             | Status                                                                          |
| --------------------------------- | ------------------------------------------------------------------------------- |
| Pressed shape morph targets       | Inferred from spec videos — `medium`/`large` depending on size                  |
| Label typography                  | No published Expressive token — uses `title medium`/`title large` from baseline |
| Toggle FAB visual differentiation | Pending M3 Expressive publication — icon swap only, no container color change   |

All inferred values are documented in source comments with explicit notes about their status.

---

## Usage Examples

### Basic Extended FAB

```tsx
<ExtendedFAB onPress={handleCompose}>
  <ExtendedFABIcon name="edit" />
  <ExtendedFABLabel>Compose</ExtendedFABLabel>
</ExtendedFAB>
```

### Size Variants

```tsx
// Small (56dp) — compact
<ExtendedFAB size="small">
  <ExtendedFABIcon name="add" />
  <ExtendedFABLabel>New</ExtendedFABLabel>
</ExtendedFAB>

// Large (96dp) — prominent
<ExtendedFAB size="large">
  <ExtendedFABIcon name="add" />
  <ExtendedFABLabel>Create Project</ExtendedFABLabel>
</ExtendedFAB>
```

### Color Styles

```tsx
<ExtendedFAB colorStyle="tertiary">
  <ExtendedFABIcon name="navigation" />
  <ExtendedFABLabel>Navigate</ExtendedFABLabel>
</ExtendedFAB>

<ExtendedFAB colorStyle="secondary">
  <ExtendedFABIcon name="search" />
  <ExtendedFABLabel>Search</ExtendedFABLabel>
</ExtendedFAB>
```

### Toggle Extended FAB

```tsx
// Uncontrolled
<ExtendedFAB toggle>
  <ExtendedFABIcon name="bookmark_border" selectedName="bookmark" />
  <ExtendedFABLabel>Bookmark</ExtendedFABLabel>
</ExtendedFAB>

// Controlled
<ExtendedFAB toggle selected={isSaved} onSelectedChange={setIsSaved}>
  <ExtendedFABIcon name="bookmark_border" selectedName="bookmark" />
  <ExtendedFABLabel>Bookmark</ExtendedFABLabel>
</ExtendedFAB>
```

### Custom Shape Override

```tsx
// Custom rest shape
<ExtendedFAB restShape="full">
  <ExtendedFABIcon name="add" />
  <ExtendedFABLabel>Add</ExtendedFABLabel>
</ExtendedFAB>

// Disable shape morphing
<ExtendedFAB interactionShapes={{}}>
  <ExtendedFABIcon name="add" />
  <ExtendedFABLabel>Add</ExtendedFABLabel>
</ExtendedFAB>
```

### With Tooltip

```tsx
<ExtendedFAB tooltip="Create a new document">
  <ExtendedFABIcon name="add" />
  <ExtendedFABLabel>New</ExtendedFABLabel>
</ExtendedFAB>
```

### Toggle with State-Aware Tooltip

```tsx
<ExtendedFAB
  toggle
  tooltip="Add to bookmarks"
  selectedTooltip="Remove from bookmarks"
  accessibilityLabel="Bookmark this page"
  selectedAccessibilityLabel="Remove bookmark from this page"
>
  <ExtendedFABIcon name="bookmark_border" selectedName="bookmark" />
  <ExtendedFABLabel>Bookmark</ExtendedFABLabel>
</ExtendedFAB>
```
