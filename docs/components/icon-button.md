# Icon Button — Implementation Reference

> M3 Icon Buttons enable actions with a single icon tap. This document describes the library's `IconButton` implementation, its API surface, internal architecture, and how it maps to the M3 spec.

Source: [`src/components/ui/icon-button.tsx`](../../src/components/ui/icon-button.tsx)

M3 Spec: [Overview](https://m3.material.io/components/icon-buttons/overview) · [Specs](https://m3.material.io/components/icon-buttons/specs) · [Guidelines](https://m3.material.io/components/icon-buttons/guidelines) · [Accessibility](https://m3.material.io/components/icon-buttons/accessibility)

---

## Composition Pattern

IconButton uses a **compound component** pattern. Instead of passing content via props, consumers assemble sub-components as children:

```tsx
import { IconButton, IconButtonIcon } from 'react-native-material-design/ui/icon-button';

<IconButton variant="filled" onPress={handleClose} accessibilityLabel="Close">
  <IconButtonIcon name="close" />
</IconButton>;
```

State flows from `IconButton` to sub-components via React Context (`createComponentContext`). Sub-components call `useIconButton()` to read parent state — no prop injection or `cloneElement`.

### Sub-components

| Component        | Purpose                                                                  |
| ---------------- | ------------------------------------------------------------------------ |
| `IconButton`     | Root — manages state, renders Pressable + layers                         |
| `IconButtonIcon` | Icon — auto-sizes based on parent `size`, swaps icon on toggle selection |

Sub-components **must** be used inside an `IconButton`. Using them outside throws:

```
<IconButton> sub-component used outside of <IconButton>.
```

---

## Props

### IconButtonProps

| Prop               | Type                                                     | Default     | Description                                                          |
| ------------------ | -------------------------------------------------------- | ----------- | -------------------------------------------------------------------- |
| `variant`          | `'filled' \| 'outlined' \| 'standard' \| 'tonal'`        | `'filled'`  | Visual variant — determines container color and border treatment     |
| `size`             | `'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | `'small'`   | Size tier — controls container dimensions, icon size, padding        |
| `shape`            | `'rounded' \| 'square'`                                  | `'rounded'` | Shape style — pill or size-dependent corner radius                   |
| `width`            | `'narrow' \| 'regular' \| 'wide'`                        | `'regular'` | Container width — controls horizontal padding (M3 Expressive)        |
| `disabled`         | `boolean`                                                | `false`     | Disables press events, dims content                                  |
| `toggle`           | `boolean`                                                | `false`     | Enables toggle mode (alternates selected/unselected on press)        |
| `selected`         | `boolean`                                                | —           | Controlled selected state (only when `toggle={true}`)                |
| `defaultSelected`  | `boolean`                                                | `false`     | Initial selected state for uncontrolled toggle                       |
| `onSelectedChange` | `(selected: boolean) => void`                            | —           | Called when toggle state changes                                     |
| `tooltip`          | `string`                                                 | —           | Tooltip text on hover/long-press. Falls back as `accessibilityLabel` |
| `style`            | `StyleProp<ViewStyle>`                                   | —           | Style applied to the root Pressable (margin, positioning)            |
| `containerStyle`   | `StyleProp<ViewStyle>`                                   | —           | Style for the inner ShapeContainer (the visible container)           |
| `onPress`          | `(e: TapEvent) => void`                                  | —           | Press callback                                                       |

Plus all other `PressableProps` (e.g., `onPressIn`, `onHoverIn`, `onLongPress`, `hitSlop`, `speed`, `scheme`, `gesture`).

### IconButtonIconProps

Extends `IconProps` from the `Icon` component.

| Prop           | Type             | Description                                             |
| -------------- | ---------------- | ------------------------------------------------------- |
| `name`         | `MaterialSymbol` | Icon name (from Material Symbols)                       |
| `selectedName` | `MaterialSymbol` | Alternate icon name used when parent toggle is selected |

---

## Variants

### Visual Variants (`variant`)

Each variant controls the container color and border treatment:

| Variant    | Container Color             | Border                         |
| ---------- | --------------------------- | ------------------------------ |
| `filled`   | `scheme.primary`            | None                           |
| `outlined` | transparent                 | `scheme.outlineVariant`, 1-3dp |
| `standard` | transparent                 | None                           |
| `tonal`    | `scheme.secondaryContainer` | None                           |

Outlined border width scales with size: 1dp (xsmall/small/medium), 2dp (large), 3dp (xlarge).

Icon colors per variant (non-toggle):

| Variant    | Icon Color                    |
| ---------- | ----------------------------- |
| `filled`   | `scheme.onPrimary`            |
| `outlined` | `scheme.onSurfaceVariant`     |
| `standard` | `scheme.onSurfaceVariant`     |
| `tonal`    | `scheme.onSecondaryContainer` |

### Size Variants (`size`)

| Size     | Container Height | Icon Size | M3 Type               |
| -------- | ---------------- | --------- | --------------------- |
| `xsmall` | 32dp             | 20        | Expressive            |
| `small`  | 40dp             | 24        | Standard + Expressive |
| `medium` | 56dp             | 24        | Expressive            |
| `large`  | 96dp             | 32        | Expressive            |
| `xlarge` | 136dp            | 40        | Expressive            |

Sizes smaller than 48dp get minimum touch target padding via the root `minWidth`/`minHeight`:

- `xsmall` (32dp container): root expands to 48×48dp
- `small` (40dp container): root expands to 48×48dp

### Width Variants (`width`)

Width controls horizontal padding, making the container narrower or wider than the default square:

| Size   | Narrow | Regular | Wide |
| ------ | ------ | ------- | ---- |
| xsmall | 4dp    | 6dp     | 10dp |
| small  | 4dp    | 8dp     | 14dp |
| medium | 12dp   | 16dp    | 24dp |
| large  | 16dp   | 32dp    | 48dp |
| xlarge | 32dp   | 48dp    | 72dp |

With `width="regular"`, all sizes produce a square container (padding + icon size = container height).

### Shape Variants (`shape`)

| Shape     | Rest corners                   | Press target   |
| --------- | ------------------------------ | -------------- |
| `rounded` | `full` (pill)                  | Size-dependent |
| `square`  | Size-dependent (medium→xlarge) | Size-dependent |

When `toggle` is active and selection is `'selected'`, the shape **inverts**: rounded becomes square and square becomes rounded.

---

## Toggle Mode

Toggle mode turns the icon button into a binary selection control. Enable with `toggle={true}`.

### Controlled vs Uncontrolled

Powered by `useControllableState`, toggle supports both patterns:

```tsx
// Uncontrolled — manages its own state
<IconButton toggle defaultSelected={false} variant="tonal" accessibilityLabel="Bookmark">
  <IconButtonIcon name="bookmark_border" selectedName="bookmark" />
</IconButton>

// Controlled — parent manages state
<IconButton toggle selected={isBookmarked} onSelectedChange={setIsBookmarked}
  variant="outlined" accessibilityLabel="Bookmark">
  <IconButtonIcon name="bookmark_border" selectedName="bookmark" />
</IconButton>
```

### Toggle Visual Changes

When toggled, the component changes:

1. **Container color** — e.g., filled unselected uses `surfaceContainer` instead of `primary`
2. **Icon color** — changes to match the new container
3. **Shape** — inverts between rounded and square (animated via ShapeContainer)
4. **State layer color** — switches to the selected variant
5. **Icon name** — swaps to `selectedName` (if provided via IconButtonIcon)

| Variant    | Unselected Container | Selected Container | Unselected Icon    | Selected Icon      |
| ---------- | -------------------- | ------------------ | ------------------ | ------------------ |
| `filled`   | `surfaceContainer`   | `primary`          | `onSurfaceVariant` | `onPrimary`        |
| `tonal`    | `secondaryContainer` | `secondary`        | `onSurfaceVariant` | `onSecondary`      |
| `outlined` | transparent          | `inverseSurface`   | `onSurfaceVariant` | `inverseOnSurface` |
| `standard` | transparent          | transparent        | `onSurfaceVariant` | `primary`          |

---

## Internal Architecture

### Layer Stack

The IconButton renders this component tree:

```
Pressable                       ← gesture handling, interaction progress context
  └─ ShapeContainer             ← animated border radius (shape morphing + focus ring)
      ├─ StateLayer             ← interaction feedback overlay (press/hover/focus tint)
      └─ IconButtonProvider     ← IconButton context (size, shape, variant, selection, disabled)
          └─ IconButtonIcon     ← auto-sized icon
```

Unlike `Button`, `IconButton` does not use `ElevationContainer` — the M3 spec does not define elevation tiers for icon buttons.

### Building Block Responsibilities

| Component        | What It Does                                                                                                                                                                              |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Pressable`      | RNGH-based gesture tracking. Emits spring-animated `InteractionProgress` (press/hover/focus/drag) via context. All gestures run on UI thread — zero JS bridge crossings.                  |
| `ShapeContainer` | Animates `borderRadius` between rest shape and interaction target shapes. Reads spatial interaction progress for spring-based corner morphing. Renders keyboard focus ring.               |
| `StateLayer`     | Absolute-positioned overlay that tints based on interaction state. Opacity follows M3 state opacities: hover 8%, focus 10%, press 10%, drag 16%. Also renders disabled container overlay. |

### How Interaction Flows

1. User presses → RNGH tap gesture fires `onBegin` on UI thread
2. `Pressable` spring-animates `press` progress from 0 → 1
3. `ShapeContainer` reads spatial press progress, interpolates corners toward pressed shape
4. `StateLayer` reads effects press progress, applies 10% opacity tint
5. User releases → progress springs back to 0

No React re-renders occur during the interaction. All animation is driven by Reanimated SharedValues on the UI thread.

---

## Shape Morphing

Icon buttons animate their border radius during press interactions (the M3 "squish" effect).

### Rest Shape Resolution

The rest shape is computed by `getIconButtonRestShapeToken(size, shape, selection)`:

| Configuration             | Rest Shape Token | dp Value                           |
| ------------------------- | ---------------- | ---------------------------------- |
| `rounded` (any size)      | `full`           | pill (capped at containerHeight/2) |
| `square` + `xsmall/small` | `medium`         | 12dp                               |
| `square` + `medium`       | `large`          | 16dp                               |
| `square` + `large/xlarge` | `xlarge`         | 28dp                               |

Selected toggle buttons invert the shape: `rounded` becomes `square` and vice versa.

### Pressed Shape Targets

The pressed shape is computed by `getIconButtonPressedShapeToken(size)`:

| Size               | Pressed Shape Token | dp Value |
| ------------------ | ------------------- | -------- |
| `large` / `xlarge` | `large`             | 16dp     |
| `medium`           | `medium`            | 12dp     |
| `xsmall` / `small` | `small`             | 8dp      |

### ButtonGroup Suppression

When used inside a `ButtonGroup`, the pressed shape morph is suppressed via `useButtonGroupItem().suppressCornerAnimation` to prevent adjacent button corners from fighting.

---

## State Layer Colors

The state layer color depends on variant and selection state:

| Variant    | None / Unselected      | Selected           |
| ---------- | ---------------------- | ------------------ |
| `filled`   | `onPrimary` / `onSVar` | `onPrimary`        |
| `tonal`    | `onSecondaryContainer` | `onSecondary`      |
| `outlined` | `onSurfaceVariant`     | `inverseOnSurface` |
| `standard` | `onSurfaceVariant`     | `primary`          |

For non-toggle buttons (`selection = 'none'`), filled uses `onPrimary` and tonal uses `onSecondaryContainer`. For toggle unselected, filled uses `onSurfaceVariant` and tonal uses `onSecondaryContainer`.

State layer opacities follow the M3 system tokens: hover 8% (`theme.state.hover`), focus 10% (`theme.state.focus`), press 10% (`theme.state.pressed`), drag 16% (`theme.state.dragged`).

---

## Disabled State

When `disabled={true}`:

- All variant-applied `backgroundColor` is cleared
- `StateLayer` renders a disabled container overlay at 10% opacity (`DISABLED_STATE_LAYER_OPACITY = 0.1`), which differs from the system default of 12%
- Icon color changes to `onSurface` at `theme.state.disabledContent` opacity (0.38)
- Press events are suppressed (both at the `Pressable` level and in `handlePress`)

Exception: disabled outlined buttons retain `borderColor: scheme.outlineVariant` at full opacity (per M3 spec).

---

## Tooltip

M3 spec requires icon buttons to display a tooltip describing their action. When the `tooltip` prop is provided:

1. The entire button is wrapped in `<Tooltip variant="plain">`
2. The tooltip text is shown on hover (web) or long press (native)
3. If `accessibilityLabel` is not provided, `tooltip` is used as the fallback label
4. If both `accessibilityLabel` and `tooltip` are provided, the tooltip becomes `accessibilityHint`

A `__DEV__` warning fires when `tooltip` is omitted.

---

## Accessibility

### Roles and States

- `accessibilityRole="button"` — always, even for toggle buttons (`"togglebutton"` has no native equivalent on iOS/Android and silently falls back to a plain View, losing button semantics)
- `accessibilityState.disabled` — reflects the `disabled` prop
- `accessibilityState.selected` — set when toggle is active, reflecting current selection
- `IconButtonIcon` is hidden from the accessibility tree (`importantForAccessibility="no"`) so screen readers don't announce the icon glyph name as a separate element alongside the button label

### Touch Targets

Minimum 48dp touch target ensured via `minWidth`/`minHeight` on the root:

- `xsmall` (32dp container): root expands to 48×48dp
- `small` (40dp container): root expands to 48×48dp
- `medium`+ containers already exceed 48dp

### Keyboard Navigation (Web)

- **Tab** navigates to the button (`tabIndex={0}`; disabled buttons get `tabIndex={-1}`)
- **Space / Enter** activates the button. A shared-value guard prevents the double-fire issue where browsers generate a synthetic click after `keyup` on `role="button"` elements.
- **Focus ring** is rendered by `ShapeContainer` as a 3dp `secondary`-colored outline with 2dp offset. The browser's native focus outline is suppressed (set to `transparent`, not `none`, so Windows High Contrast mode can still override it).

### Dev Warnings

In `__DEV__` mode, warnings fire for:

- Missing `accessibilityLabel` and `tooltip` (icon-only buttons need a label)
- Missing `tooltip` (required by M3 spec)
- Using `selected`, `defaultSelected`, or `onSelectedChange` without `toggle={true}`
- Toggle `IconButtonIcon` without `selectedName` (no visual selection feedback)

---

## Styling

### Unistyles Variants

The stylesheet uses unistyles variants for conditional styling. Both `IconButton` and `IconButtonIcon` call `useVariants`:

```tsx
// IconButton
styles.useVariants({ size, variant, width, selection, disabled });

// IconButtonIcon
styles.useVariants({ size, variant, selection, disabled });
```

This activates the matching variant styles from the `root`, `content`, and `icon` style definitions. Compound variants handle cross-variant combinations (e.g., width×size padding, outlined border width scaling, toggle selection colors).

### Style Override Points

| Prop                        | Target                                      |
| --------------------------- | ------------------------------------------- |
| `style`                     | Root `Pressable` wrapper                    |
| `containerStyle`            | Inner `ShapeContainer` (the visible button) |
| `style` on `IconButtonIcon` | Individual icon sub-component               |

---

## Exports

```tsx
// Components
export { IconButton, IconButtonIcon };

// Context hook — allows custom sub-components to read parent IconButton state.
// Returns { size, shape, variant, selection, disabled }.
export { useIconButton };

// Types
export type {
  IconButtonProps,
  IconButtonIconProps,
  IconButtonSize,
  IconButtonShape,
  IconButtonVariant,
  IconButtonWidth,
};

// IconButtonSelection is also exported — it's the derived tri-state ('none' | 'selected' | 'unselected')
// computed internally from toggle + selected. Consumers don't set it directly; it's available
// for extension components reading useIconButton() that need to branch on selection state.
export type { IconButtonSelection };
```

---

## Differences from Button

| Aspect               | Button                                  | IconButton                                   |
| -------------------- | --------------------------------------- | -------------------------------------------- |
| Sub-components       | `ButtonIcon` + `ButtonLabel`            | `IconButtonIcon` only                        |
| Elevation            | `ElevationContainer` with hover lift    | No elevation layer                           |
| Variants             | filled, elevated, tonal, outlined, text | filled, outlined, standard, tonal            |
| Width                | N/A (content-driven)                    | narrow / regular / wide (padding-controlled) |
| Touch target         | `hitSlop` on smaller sizes              | `minWidth`/`minHeight` on root               |
| `restShape` override | Supported                               | Not yet supported                            |
| `interactionShapes`  | Supported (pass `{}` to disable)        | Not yet supported                            |
| `React.memo`         | Wrapped                                 | Not wrapped                                  |

---

## Usage Examples

### Basic Variants

```tsx
<IconButton variant="filled" onPress={handleClose} accessibilityLabel="Close">
  <IconButtonIcon name="close" />
</IconButton>

<IconButton variant="outlined" tooltip="Settings" accessibilityLabel="Settings">
  <IconButtonIcon name="settings" />
</IconButton>

<IconButton variant="standard" tooltip="More options" accessibilityLabel="More">
  <IconButtonIcon name="more_vert" />
</IconButton>

<IconButton variant="tonal" tooltip="Share" accessibilityLabel="Share">
  <IconButtonIcon name="share" />
</IconButton>
```

### Toggle Icon Button

```tsx
// Uncontrolled
<IconButton toggle defaultSelected={false} variant="filled" accessibilityLabel="Favorite">
  <IconButtonIcon name="favorite_border" selectedName="favorite" />
</IconButton>

// Controlled
<IconButton toggle selected={isFavorite} onSelectedChange={setIsFavorite}
  variant="outlined" accessibilityLabel="Favorite">
  <IconButtonIcon name="favorite_border" selectedName="favorite" />
</IconButton>
```

### Expressive Sizes

```tsx
<IconButton size="xlarge" shape="square" variant="tonal" tooltip="Play" accessibilityLabel="Play">
  <IconButtonIcon name="play_arrow" />
</IconButton>
```

### Width Variants

```tsx
<IconButton width="wide" variant="filled" tooltip="Add" accessibilityLabel="Add">
  <IconButtonIcon name="add" />
</IconButton>

<IconButton width="narrow" variant="outlined" tooltip="Edit" accessibilityLabel="Edit">
  <IconButtonIcon name="edit" />
</IconButton>
```

### Inside ButtonGroup

```tsx
<ButtonGroup>
  <IconButton variant="outlined" accessibilityLabel="Bold">
    <IconButtonIcon name="format_bold" />
  </IconButton>
  <IconButton variant="outlined" accessibilityLabel="Italic">
    <IconButtonIcon name="format_italic" />
  </IconButton>
  <IconButton variant="outlined" accessibilityLabel="Underline">
    <IconButtonIcon name="format_underlined" />
  </IconButton>
</ButtonGroup>
```
