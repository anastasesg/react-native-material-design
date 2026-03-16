# FAB (Floating Action Button) — Implementation Reference

> M3 FABs represent the most important action on a screen. This document describes the library's icon-only `FAB` implementation, its API surface, internal architecture, and how it maps to the M3 Expressive spec. For labeled FABs, see `ExtendedFAB`.

Source: [`src/components/ui/fab.tsx`](../../src/components/ui/fab.tsx)

M3 Spec: [Overview](https://m3.material.io/components/floating-action-button/overview) · [Specs](https://m3.material.io/components/floating-action-button/specs) · [Guidelines](https://m3.material.io/components/floating-action-button/guidelines) · [Accessibility](https://m3.material.io/components/floating-action-button/accessibility)

---

## Composition Pattern

FAB uses a **compound component** pattern. Instead of passing content via props, consumers assemble sub-components as children:

```tsx
import { FAB, FABIcon } from 'react-native-material-design/ui/fab';

<FAB onPress={handleCompose} tooltip="Compose">
  <FABIcon name="edit" />
</FAB>;
```

State flows from `FAB` to sub-components via React Context (`createComponentContext`). Sub-components call `useFAB()` to read parent state — no prop injection or `cloneElement`.

### Sub-components

| Component | Purpose                                                              |
| --------- | -------------------------------------------------------------------- |
| `FAB`     | Root — manages state, renders Pressable + building block layer stack |
| `FABIcon` | Icon — auto-sizes based on parent `size`, swaps on toggle selection  |

Sub-components **must** be used inside a `FAB`. Using them outside throws:

```
<FAB> sub-component used outside of <FAB>.
```

---

## Props

### FABProps

| Prop                         | Type                                    | Default              | Description                                                                     |
| ---------------------------- | --------------------------------------- | -------------------- | ------------------------------------------------------------------------------- |
| `size`                       | `FABSize`                               | `'medium'`           | Size tier — controls dimensions, icon size, and shape. `'small'` is deprecated  |
| `colorStyle`                 | `FABColorStyle`                         | `'primaryContainer'` | Color scheme — determines container, icon, and state layer colors               |
| `disabled`                   | `boolean`                               | `false`              | Disables press events, dims content, drops elevation to 0                       |
| `toggle`                     | `boolean`                               | `false`              | Enables toggle mode — FAB alternates selected/unselected on each press          |
| `selected`                   | `boolean`                               | —                    | Controlled selected state (only when `toggle={true}`)                           |
| `defaultSelected`            | `boolean`                               | `false`              | Initial selected state for uncontrolled toggle                                  |
| `onSelectedChange`           | `(selected: boolean) => void`           | —                    | Called when toggle state changes                                                |
| `selectedAccessibilityLabel` | `string`                                | —                    | Accessibility label for selected toggle state                                   |
| `selectedTooltip`            | `string`                                | —                    | Tooltip text for selected toggle state                                          |
| `restShape`                  | `ShapeSpec`                             | auto (from `size`)   | Override the rest (unpressed) shape token or value                              |
| `interactionShapes`          | `InteractionShapes`                     | auto (press morph)   | Override per-interaction target shapes. Pass `{}` to disable all shape morphing |
| `elevation`                  | `ElevationLevel \| SharedValue<number>` | `3`                  | Elevation level (0–5). `SharedValue` enables smooth animated transitions        |
| `tooltip`                    | `string`                                | —                    | Tooltip text. Also used as fallback `accessibilityLabel`                        |
| `accessibilityLabel`         | `string`                                | —                    | Screen reader label. At least one of `accessibilityLabel` or `tooltip` required |
| `style`                      | `StyleProp<ViewStyle>`                  | —                    | Style applied to the root Pressable wrapper                                     |
| `containerStyle`             | `StyleProp<ViewStyle>`                  | —                    | Style for the inner ShapeContainer (the visible FAB)                            |
| `onPress`                    | `(e: TapEvent) => void`                 | —                    | Press callback                                                                  |

Plus all other `PressableProps` (e.g., `onPressIn`, `onHoverIn`, `onLongPress`, `hitSlop`, `speed`, `scheme`, `gesture`) except `disabled`, `style`, `children`, and `accessibilityLabel` (which are declared explicitly).

### FABIconProps

Extends `IconProps` from the `Icon` component.

| Prop           | Type             | Description                                             |
| -------------- | ---------------- | ------------------------------------------------------- |
| `name`         | `MaterialSymbol` | Icon name (from Material Symbols)                       |
| `selectedName` | `MaterialSymbol` | Alternate icon name used when parent toggle is selected |

Size and color are derived from the parent `FAB` context — do not set them manually.

---

## Size Variants

FAB implements four sizes. `medium` is the Expressive default; `small` is deprecated.

| Size    | Dimensions | Icon Size | Shape (rest)     | dp   | M3 Status                      |
| ------- | ---------- | --------- | ---------------- | ---- | ------------------------------ |
| small   | 40×40      | 24dp      | `medium`         | 12dp | **Deprecated** — baseline only |
| regular | 56×56      | 24dp      | `large`          | 16dp | Baseline (kept in Expressive)  |
| medium  | 80×80      | 28dp      | `largeIncreased` | 20dp | Expressive (recommended)       |
| large   | 96×96      | 36dp      | `xlarge`         | 28dp | Expressive                     |

---

## Color Styles

Each `colorStyle` fully determines the container, icon content, and state layer colors:

| Color Style              | Container              | Icon                   | State Layer            |
| ------------------------ | ---------------------- | ---------------------- | ---------------------- |
| `primaryContainer`       | `primaryContainer`     | `onPrimaryContainer`   | `onPrimaryContainer`   |
| `secondaryContainer`     | `secondaryContainer`   | `onSecondaryContainer` | `onSecondaryContainer` |
| `tertiaryContainer`      | `tertiaryContainer`    | `onTertiaryContainer`  | `onTertiaryContainer`  |
| `primary`                | `primary`              | `onPrimary`            | `onPrimary`            |
| `secondary`              | `secondary`            | `onSecondary`          | `onSecondary`          |
| `tertiary`               | `tertiary`             | `onTertiary`           | `onTertiary`           |
| `surface` _(deprecated)_ | `surfaceContainerHigh` | `primary`              | `primary`              |

M3 Expressive deprecates the `surface` style — "No longer recommended." Use a container variant instead.

> **Note:** For non-container Expressive styles (`primary`, `secondary`, `tertiary`), no state layer tokens are published. The spec prose says "state layer = primary" for the `primary` style, but this contradicts the general M3 rule "state layer = icon color" (icon = `onPrimary`). The implementation follows the general rule until Compose or published tokens clarify.

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

On press, the FAB's border radius animates from its rest shape toward a smaller pressed shape:

| Size    | Rest Shape Token | Rest dp | Pressed Shape Token | Pressed dp |
| ------- | ---------------- | ------- | ------------------- | ---------- |
| small   | `medium`         | 12dp    | `small`             | 8dp        |
| regular | `large`          | 16dp    | `medium`            | 12dp       |
| medium  | `largeIncreased` | 20dp    | `medium`            | 12dp       |
| large   | `xlarge`         | 28dp    | `large`             | 16dp       |

> Note: Pressed shape targets are inferred from M3 spec videos — no published tokens exist.

Shape morphing is handled by `ShapeContainer`, which reads the spatial press progress from `Pressable` context and spring-animates each corner radius individually.

---

## Toggle Mode

Toggle mode turns the FAB into a binary selection control. Enable with `toggle={true}`.

### Controlled vs Uncontrolled

Powered by `useControllableState`:

```tsx
// Uncontrolled — manages its own state
<FAB toggle tooltip="Bookmark">
  <FABIcon name="bookmark_border" selectedName="bookmark" />
</FAB>

// Controlled — parent manages state
<FAB toggle selected={isSaved} onSelectedChange={setIsSaved} tooltip="Bookmark">
  <FABIcon name="bookmark_border" selectedName="bookmark" />
</FAB>
```

### Current Toggle Behavior

Toggle currently drives **icon glyph swap only** (`FABIcon.selectedName`). Container color and shape visual differentiation are not yet implemented — pending M3 Expressive publication of toggle FAB visual tokens. When the spec is published, a `selection` variant axis will be added to the stylesheet.

### Toggle Accessibility

- On web, `aria-pressed` communicates the toggle state
- On native, `accessibilityState.selected` triggers idiomatic "selected/not selected" announcements in VoiceOver/TalkBack. `accessibilityValue.text` is kept as a supplementary hint.
- `selectedAccessibilityLabel` and `selectedTooltip` props allow state-specific labeling

---

## Internal Architecture

### Layer Stack

```
Pressable                       ← RNGH gesture tracking, interaction progress context
  └─ ElevationContainer         ← platform shadow, hover elevation animation (level 3 → 4)
      └─ ShapeContainer         ← animated borderRadius (shape morphing + focus ring)
          ├─ StateLayer          ← interaction feedback overlay (press/hover/focus tint)
          │                        + disabled container overlay (onSurface @ 12% opacity)
          └─ FABProvider         ← FAB context (size, colorStyle, disabled, selected)
              └─ FABIcon         ← auto-sized Material Symbol icon
```

### Building Block Responsibilities

| Component            | Responsibility                                                                                                                                  |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `Pressable`          | RNGH gesture tracking. Emits spring-animated `InteractionProgress` via context. All gestures run on UI thread.                                  |
| `ElevationContainer` | Platform shadows. Hover elevation animation (level 3→4). Reads interaction progress from Pressable context.                                     |
| `ShapeContainer`     | Animated `borderRadius` morphing between rest and interaction shapes. Renders keyboard focus ring (3dp outline, `secondary` color, 2dp offset). |
| `StateLayer`         | Absolute overlay for interaction tint. Also renders the disabled container overlay (`onSurface` at `theme.state.disabledContainer` = 12%).      |

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
- Icon color changes to `onSurface` at `theme.state.disabledContent` (38%) opacity
- Elevation drops to 0 (no hover interaction)
- Press events are suppressed
- A `__DEV__` warning fires: M3 recommends hiding the FAB instead of disabling it

---

## Accessibility

### Roles and States

- `accessibilityRole="button"` — always set
- `accessibilityState.disabled` — reflects the `disabled` prop
- `accessibilityState.selected` — set for toggle FABs on **native** (idiomatic VoiceOver/TalkBack announcements)
- `aria-pressed` — set on **web** for toggle FABs (correct ARIA semantic for toggle buttons)
- `accessibilityValue.text` — supplementary hint for toggle FABs ("selected" / "not selected")

### Labeling

Icon-only FABs **require** either `accessibilityLabel` or `tooltip` for screen reader accessibility. The type system enforces this via a discriminated union — at least one must be provided. When both are present, `accessibilityLabel` takes precedence. When only `tooltip` is provided, it serves double duty as the accessible label.

A `console.warn` fires **in all builds** if neither is provided (not just `__DEV__`), as a missing label makes the FAB invisible to screen readers.

### Tooltip

When the `tooltip` prop is set, the FAB is wrapped in a `<Tooltip variant="plain">` that shows the text on hover (web) or long press (native), per M3 guidelines: "When hovering over a FAB on web products, FABs should display a tooltip."

### Touch Targets

All FAB sizes meet or exceed the 48dp minimum touch target:

| Size    | Dimensions | Exceeds 48dp? |
| ------- | ---------- | ------------- |
| small   | 40×40      | No (40dp)     |
| regular | 56×56      | Yes           |
| medium  | 80×80      | Yes           |
| large   | 96×96      | Yes           |

The root `Pressable` has `minWidth`/`minHeight` set per size variant to guarantee touch targets even under clipping parents. Consumer-supplied `hitSlop` is accepted via `PressableProps` for further expansion — particularly relevant for `small` (40dp) which falls below the 48dp minimum.

### Keyboard Navigation (Web)

- **Tab** navigates to the FAB (`tabIndex={0}`; disabled FABs get `tabIndex={-1}`)
- **Space / Enter** activates the FAB. A shared-value guard prevents the double-fire issue where browsers generate a synthetic click after `keyup` on `role="button"` elements.
- **Focus ring** is rendered by `ShapeContainer` as a 3dp `secondary`-colored outline with 2dp offset, shown only for keyboard focus (suppressed during press/drag interactions)

### Runtime Warnings

**All builds:**

- Icon-only FABs without `accessibilityLabel` or `tooltip` (accessibility-critical)

**`__DEV__` only:**

- Using `disabled={true}` (M3 recommends hiding instead)
- Using `selected`, `defaultSelected`, or `onSelectedChange` without `toggle={true}`
- Unexpected children (non-`FABIcon` elements) via `childGuard`

---

## Styling

### Unistyles Variants

The stylesheet uses three variant axes: `size`, `colorStyle`, and `disabled`. Both components call `useVariants` with the full set:

```tsx
// FAB root and FABIcon
styles.useVariants({ size, colorStyle, disabled });
```

### Style Override Points

| Prop                 | Target                                   |
| -------------------- | ---------------------------------------- |
| `style`              | Root `Pressable` wrapper                 |
| `containerStyle`     | Inner `ShapeContainer` (the visible FAB) |
| `style` on `FABIcon` | Icon sub-component                       |

---

## Exports

```tsx
// Components
export { FAB, FABIcon };

// Context hook — allows custom sub-components to read parent FAB state.
// Returns { size, colorStyle, disabled, selected }.
export { useFAB };

// Types
export type {
  FABProps,
  FABIconProps,
  FABSize,
  FABColorStyle,
  FABShapeSpec, // Re-export of ShapeSpec
  FABInteractionShapes, // Re-export of InteractionShapes
};
```

---

## Spec Gaps & Inferred Values

Several values in the implementation are inferred from M3 spec diagrams/videos rather than published tokens:

| Value                             | Status                                                                             |
| --------------------------------- | ---------------------------------------------------------------------------------- |
| Regular (56dp) FAB rest shape     | No published Expressive token — uses `large` (16dp) inferred from size progression |
| Pressed shape morph targets       | Inferred from spec videos — `small`/`medium`/`large` depending on size             |
| Toggle FAB visual differentiation | Pending M3 Expressive publication — icon swap only, no container color change      |
| Non-container state layer colors  | No published tokens — follows general "state layer = icon color" rule              |

All inferred values are documented in source comments with explicit notes about their status.

---

## Usage Examples

### Standard FAB (Icon-Only)

```tsx
<FAB onPress={handleCompose} tooltip="Compose">
  <FABIcon name="edit" />
</FAB>
```

### Size Variants

```tsx
// Regular (56dp) — compact
<FAB size="regular" tooltip="Add">
  <FABIcon name="add" />
</FAB>

// Large (96dp) — prominent
<FAB size="large" tooltip="Create">
  <FABIcon name="add" />
</FAB>
```

### Color Styles

```tsx
<FAB colorStyle="tertiary" tooltip="Navigate">
  <FABIcon name="navigation" />
</FAB>

<FAB colorStyle="secondary" tooltip="Search">
  <FABIcon name="search" />
</FAB>
```

### Toggle FAB

```tsx
// Uncontrolled
<FAB toggle tooltip="Bookmark">
  <FABIcon name="bookmark_border" selectedName="bookmark" />
</FAB>

// Controlled
<FAB toggle selected={isSaved} onSelectedChange={setIsSaved} tooltip="Bookmark">
  <FABIcon name="bookmark_border" selectedName="bookmark" />
</FAB>
```

### Custom Shape Override

```tsx
// Custom rest shape
<FAB restShape="full" tooltip="Add">
  <FABIcon name="add" />
</FAB>

// Disable shape morphing (e.g., inside a FAB menu)
<FAB interactionShapes={{}} tooltip="Add">
  <FABIcon name="add" />
</FAB>
```

### Animated Elevation

```tsx
const elevation = useSharedValue(3);

<FAB elevation={elevation} tooltip="Create">
  <FABIcon name="add" />
</FAB>;
```
