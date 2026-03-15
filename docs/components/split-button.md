# Split Button — Implementation Reference

> M3 Split Buttons combine a primary action with a secondary menu trigger in a single component. This document describes the library's `SplitButton` implementation, its API surface, internal architecture, and how it maps to the M3 spec.

Source: [`src/components/ui/split-button.tsx`](../../src/components/ui/split-button.tsx)

M3 Spec: [Overview](https://m3.material.io/components/split-button/overview) · [Specs](https://m3.material.io/components/split-button/specs) · [Guidelines](https://m3.material.io/components/split-button/guidelines) · [Accessibility](https://m3.material.io/components/split-button/accessibility)

---

## Composition Pattern

SplitButton uses a **compound component** pattern. Instead of passing content via props, consumers assemble sub-components as children:

```tsx
import {
  SplitButton,
  SplitButtonIcon,
  SplitButtonLabel,
  SplitButtonLeading,
  SplitButtonTrailing,
} from 'react-native-material-design/ui/split-button';

<SplitButton variant="filled" size="medium">
  <SplitButtonLeading onPress={handleSave}>
    <SplitButtonIcon name="save" />
    <SplitButtonLabel>Save</SplitButtonLabel>
  </SplitButtonLeading>
  <SplitButtonTrailing onOpenChange={setMenuOpen} />
</SplitButton>;
```

State flows from `SplitButton` to sub-components via React Context (`createComponentContext`). Sub-components call `useSplitButton()` to read parent state — no prop injection or `cloneElement`.

### Sub-components

| Component                 | Purpose                                                                  |
| ------------------------- | ------------------------------------------------------------------------ |
| `SplitButton`             | Root — non-pressable View, provides context (size, variant, disabled)    |
| `SplitButtonLeading`      | Primary action half — Pressable with shape morphing and optional toggle  |
| `SplitButtonTrailing`     | Menu trigger half — Pressable with chevron rotation and open/close state |
| `SplitButtonTrailingIcon` | Chevron icon — renders `keyboard_arrow_down`, auto-sized per parent size |
| `SplitButtonIcon`         | Leading icon — auto-sized Material Symbol icon for the leading half      |
| `SplitButtonLabel`        | Leading label — auto-typed Text for the leading half                     |

Sub-components **must** be used inside a `SplitButton`. Using them outside throws:

```
<SplitButton> sub-component used outside of <SplitButton>.
```

### Two-Half Architecture

Unlike `Button` (where the root is the Pressable), `SplitButton`'s root is a non-pressable `View` that lays out two independently pressable halves side-by-side with a 2dp gap. Each half manages its own gesture handling, shape morphing, and state layer independently.

---

## Props

### SplitButtonProps

| Prop       | Type                                                     | Default    | Description                                                        |
| ---------- | -------------------------------------------------------- | ---------- | ------------------------------------------------------------------ |
| `variant`  | `'filled' \| 'elevated' \| 'tonal' \| 'outlined'`        | `'filled'` | Visual variant — determines container color, elevation, and border |
| `size`     | `'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | `'small'`  | Size tier — controls padding, corner radii, icon size, typography  |
| `disabled` | `boolean`                                                | `false`    | Disables both halves — prevents presses, dims content              |
| `style`    | `StyleProp<ViewStyle>`                                   | —          | Style applied to the root View container                           |

Plus all other `ViewProps` (except `style`, which is narrowed to `StyleProp<ViewStyle>`).

### SplitButtonLeadingProps

| Prop                | Type                          | Default | Description                                                  |
| ------------------- | ----------------------------- | ------- | ------------------------------------------------------------ |
| `toggle`            | `boolean`                     | `false` | Enables toggle mode on the leading half                      |
| `selected`          | `boolean`                     | —       | Controlled selected state (only when `toggle={true}`)        |
| `defaultSelected`   | `boolean`                     | `false` | Initial selected state for uncontrolled toggle               |
| `onSelectedChange`  | `(selected: boolean) => void` | —       | Called when toggle state changes                             |
| `restShape`         | `ShapeSpec`                   | auto    | Override the rest (unpressed) shape token or value           |
| `interactionShapes` | `InteractionShapes`           | auto    | Override per-interaction target shapes. Pass `{}` to disable |
| `style`             | `StyleProp<ViewStyle>`        | —       | Style applied to the outer Pressable wrapper                 |
| `containerStyle`    | `StyleProp<ViewStyle>`        | —       | Style for the inner ShapeContainer (visible container)       |
| `onPress`           | `(e: TapEvent) => void`       | —       | Press callback                                               |

Plus all other `PressableProps` (e.g., `onPressIn`, `onHoverIn`, `onLongPress`, `hitSlop`, `speed`, `scheme`, `gesture`).

### SplitButtonTrailingProps

| Prop                | Type                      | Default | Description                                                  |
| ------------------- | ------------------------- | ------- | ------------------------------------------------------------ |
| `open`              | `boolean`                 | —       | Controlled open state (fully controlled when provided)       |
| `defaultOpen`       | `boolean`                 | `false` | Initial open state for uncontrolled usage                    |
| `onOpenChange`      | `(open: boolean) => void` | —       | Called when open state changes (on each press)               |
| `restShape`         | `ShapeSpec`               | auto    | Override the rest (unpressed) shape token or value           |
| `interactionShapes` | `InteractionShapes`       | auto    | Override per-interaction target shapes. Pass `{}` to disable |
| `style`             | `StyleProp<ViewStyle>`    | —       | Style applied to the outer Pressable wrapper                 |
| `containerStyle`    | `StyleProp<ViewStyle>`    | —       | Style for the inner ShapeContainer (visible container)       |
| `onPress`           | `(e: TapEvent) => void`   | —       | Press callback                                               |

Plus all other `PressableProps`.

### SplitButtonTrailingIconProps

Extends `IconProps` (minus `size` and `name`, which are controlled internally).

| Prop   | Type             | Default                 | Description                                       |
| ------ | ---------------- | ----------------------- | ------------------------------------------------- |
| `name` | `MaterialSymbol` | `'keyboard_arrow_down'` | Icon name. Overriding triggers a dev-mode warning |

### SplitButtonIconProps

Extends `IconProps` from the `Icon` component. Icon size is derived from the parent SplitButton's `size` automatically.

### SplitButtonLabelProps

Extends `TextProps`. Typography `variant` and `size` are derived from the parent SplitButton's `size` automatically — consumer-supplied values are overridden.

---

## Variants

### Visual Variants (`variant`)

Each variant controls the container color, elevation behavior, and border treatment. Both halves share the same variant.

| Variant    | Container Color              | Resting Elevation | Hover Elevation | Border                  |
| ---------- | ---------------------------- | ----------------- | --------------- | ----------------------- |
| `filled`   | `scheme.primary`             | 0                 | 0               | None                    |
| `elevated` | `scheme.surfaceContainerLow` | 1                 | 2               | None                    |
| `tonal`    | `scheme.secondaryContainer`  | 0                 | 0               | None                    |
| `outlined` | transparent                  | 0                 | 0               | `scheme.outlineVariant` |

Unlike `Button`, split buttons do not have the `'text'` variant, and only the `elevated` variant has hover elevation interaction.

Label, icon, and trailing chevron colors per variant:

| Variant    | Content Color                 |
| ---------- | ----------------------------- |
| `filled`   | `scheme.onPrimary`            |
| `elevated` | `scheme.primary`              |
| `tonal`    | `scheme.onSecondaryContainer` |
| `outlined` | `scheme.onSurfaceVariant`     |

### Size Variants (`size`)

#### Leading Half

| Size     | Min Height | Padding (Start×End) | Icon Size | Typography     | M3 Type               |
| -------- | ---------- | ------------------- | --------- | -------------- | --------------------- |
| `xsmall` | 32dp       | 12×10               | 20        | label/large    | Expressive            |
| `small`  | 40dp       | 16×12               | 20        | label/large    | Standard + Expressive |
| `medium` | 56dp       | 24×24               | 24        | title/medium   | Expressive            |
| `large`  | 96dp       | 48×48               | 32        | headline/small | Expressive            |
| `xlarge` | 136dp      | 64×64               | 40        | headline/large | Expressive            |

Leading padding uses `paddingStart`/`paddingEnd` (not `paddingHorizontal`) because the outer edge (pill end) typically needs different visual weight than the inner edge adjacent to the split gap.

#### Trailing Half

| Size     | Min Height | Padding (H) | Chevron Icon Size |
| -------- | ---------- | ----------- | ----------------- |
| `xsmall` | 32dp       | 13          | 22                |
| `small`  | 40dp       | 13          | 22                |
| `medium` | 56dp       | 15          | 26                |
| `large`  | 96dp       | 29          | 38                |
| `xlarge` | 136dp      | 43          | 50                |

Trailing padding is symmetric (`paddingHorizontal`) since it only contains a centered icon.

---

## Open/Close State (Trailing)

The trailing half manages an open/close state that controls the chevron rotation and shape. Supports both controlled and uncontrolled modes via `useControllableState`.

### Controlled vs Uncontrolled

```tsx
// Uncontrolled — manages its own state
<SplitButtonTrailing onOpenChange={(open) => console.log('Menu:', open)} />

// Controlled — parent manages state
<SplitButtonTrailing open={isMenuOpen} onOpenChange={setIsMenuOpen} />
```

### Open State Visual Changes

When `open` is true:

1. **Chevron rotation** — rotates 180° (points up) via spring animation
2. **Inner corners** — expand to `'full'` (trailing becomes a complete pill), visually merging with a dropdown below
3. **Vertical offset** — animates from the optical correction value to 0

---

## Toggle Mode (Leading)

The leading half supports an optional toggle mode via `toggle={true}`. Unlike `Button`, toggle only affects `accessibilityState.selected` — the M3 split button spec does not define visual toggle states (no container color change, no shape inversion).

### Controlled vs Uncontrolled

```tsx
// Uncontrolled
<SplitButtonLeading toggle defaultSelected={false} onPress={handleSave}>
  <SplitButtonIcon name="save" />
  <SplitButtonLabel>Save</SplitButtonLabel>
</SplitButtonLeading>

// Controlled
<SplitButtonLeading toggle selected={isSaved} onSelectedChange={setIsSaved}>
  <SplitButtonIcon name="save" />
  <SplitButtonLabel>Save</SplitButtonLabel>
</SplitButtonLeading>
```

---

## Internal Architecture

### Layer Stack

The SplitButton renders this component tree:

```
View (root)                           ← non-pressable layout container, 2dp gap
  ├─ Pressable                        ← leading half gesture handling
  │    └─ ElevationContainer          ← shadow rendering (elevated variant only)
  │        └─ ShapeContainer          ← animated asymmetric border radius + focus ring
  │            ├─ StateLayer          ← press/hover/focus tint + disabled overlay
  │            ├─ SplitButtonIcon     ← auto-sized icon
  │            └─ SplitButtonLabel    ← auto-typed text label
  │
  └─ Pressable                        ← trailing half gesture handling
       └─ ElevationContainer          ← shadow rendering (elevated variant only)
           └─ ShapeContainer          ← animated asymmetric border radius + focus ring
               ├─ StateLayer          ← press/hover/focus tint + disabled overlay
               └─ Animated.View       ← chevron rotation animation
                   └─ SplitButtonTrailingIcon
```

### Building Block Responsibilities

| Component            | What It Does                                                                                                                                                                              |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Pressable`          | RNGH-based gesture tracking. Emits spring-animated `InteractionProgress` (press/hover/focus/drag) via context. All gestures run on UI thread — zero JS bridge crossings.                  |
| `ElevationContainer` | Renders platform shadows. Animates elevation level on hover (level 1→2 for elevated variant). Only active on `elevated` variant.                                                          |
| `ShapeContainer`     | Animates `borderRadius` between rest and interaction target shapes. Uses asymmetric per-corner tokens — outer corners stay `'full'`, inner corners morph. Renders keyboard focus ring.    |
| `StateLayer`         | Absolute-positioned overlay that tints based on interaction state. Opacity follows M3 state opacities: hover 8%, focus 10%, press 10%, drag 16%. Also renders disabled container overlay. |
| `Animated.View`      | Wraps the trailing chevron icon. Drives a spring-based 180° rotation + vertical offset correction, independent of the shape morphing animation.                                           |

### Two Independent Animation Channels

The trailing half has two animation systems running independently:

1. **Shape morphing** — driven by `Pressable` interaction progress (SharedValues on UI thread). Corners morph on press/hover/focus.
2. **Chevron rotation** — driven by the `open` state via `useMotionConfig('fast', 'standard')` + `withSpring`. Rotates 0°↔180° with a vertical offset correction for optical centering.

### How Interaction Flows

1. User presses a half → RNGH tap gesture fires `onBegin` on UI thread
2. `Pressable` spring-animates `press` progress from 0 → 1
3. `ShapeContainer` reads spatial press progress, interpolates inner corners toward pressed shape
4. `StateLayer` reads effects press progress, applies 10% opacity tint
5. `ElevationContainer` reads effects hover progress (elevated variant only), interpolates elevation
6. User releases → progress springs back to 0

No React re-renders occur during the interaction. All animation is driven by Reanimated SharedValues on the UI thread.

---

## Shape Morphing

Split buttons use **asymmetric** corner shapes — outer corners (the pill ends) stay at `'full'` while inner corners (at the split seam) animate during interactions.

### Inner Corner Rest Shape

The rest shape is computed by `getSplitInnerRestToken(size)`:

| Size                          | Inner Rest Token | dp Value |
| ----------------------------- | ---------------- | -------- |
| `xsmall` / `small` / `medium` | `xsmall`         | 4dp      |
| `large`                       | `small`          | 8dp      |
| `xlarge`                      | `medium`         | 12dp     |

### Inner Corner Pressed Shape

The pressed shape is computed by `getSplitInnerPressedToken(size)`:

| Size               | Inner Pressed Token | dp Value |
| ------------------ | ------------------- | -------- |
| `xsmall`           | `small`             | 8dp      |
| `small` / `medium` | `medium`            | 12dp     |
| `large` / `xlarge` | `largeIncreased`    | 20dp     |

Unlike `Button` (which only morphs on press), split button halves morph on all three interaction states — press, hover, and focus.

### Open State Shape Override

When the trailing half is `open`, its inner corners expand to `'full'`, making the trailing half a complete pill. This visually indicates the expanded state and aligns with a dropdown appearing below.

### Overriding Shape

```tsx
// Custom rest shape on leading half
<SplitButtonLeading restShape={{ topStart: 'full', bottomStart: 'full', topEnd: 'medium', bottomEnd: 'medium' }}>
  ...
</SplitButtonLeading>

// Disable all shape morphing
<SplitButtonLeading interactionShapes={{}}>...</SplitButtonLeading>
<SplitButtonTrailing interactionShapes={{}}>...</SplitButtonTrailing>
```

---

## Chevron Animation

The trailing chevron (`keyboard_arrow_down`) rotates 180° when toggled between collapsed and expanded states.

### Animation Config

- **Spring type**: `useMotionConfig('fast', 'standard')` — reads the theme's motion config for consistent spring parameters
- **Progress**: `expandProgress` SharedValue animates 0→1 (open) or 1→0 (close) via `withSpring`
- **Rotation**: `interpolate(progress, [0, 1], [0, 180])` degrees
- **Vertical offset**: `interpolate(progress, [0, 1], [iconOffset, 0])` — corrects for optical centering

### Vertical Offset Correction

The downward-pointing chevron needs a slight upward nudge (`translateY: negative`) for optical centering because the arrow's visual center of gravity sits below its geometric center. When rotated 180° (pointing up), no offset is needed. The offset scales with size:

| Size     | Offset (dp) |
| -------- | ----------- |
| `xsmall` | -1          |
| `small`  | -1          |
| `medium` | -2          |
| `large`  | -3          |
| `xlarge` | -6          |

---

## State Layer Colors

The state layer color depends on variant only (no selection state, unlike Button):

| Variant    | State Layer Color      |
| ---------- | ---------------------- |
| `filled`   | `onPrimary`            |
| `elevated` | `primary`              |
| `tonal`    | `onSecondaryContainer` |
| `outlined` | `onSurfaceVariant`     |

State layer opacities follow the M3 system tokens: hover 8% (`theme.state.hover`), focus 10% (`theme.state.focus`), press 10% (`theme.state.pressed`), drag 16% (`theme.state.dragged`).

---

## Disabled State

When `disabled={true}` (set on the root `SplitButton`):

- Both halves are disabled simultaneously via context
- All variant-applied `backgroundColor` is cleared
- `StateLayer` renders a disabled container overlay at 10% opacity (`disabledOpacity={0.1}`), matching the M3 spec token `md.comp.split-button.disabled.container.opacity`
- Content (label, icon, trailing chevron) colors change to `onSurface` at `theme.state.disabledContent` opacity (0.38)
- Elevation drops to 0 (no hover elevation interaction)
- Press events are suppressed

Exception: disabled outlined buttons retain `borderColor: scheme.outlineVariant` at full opacity (per M3 spec).

---

## Accessibility

### Roles and States

- **Root View**: `accessibilityRole="none"` — the root is a layout container, not an interactive element. Each half has its own role.
- **Leading half**: `accessibilityRole="button"` with `accessibilityState={{ disabled, selected }}` (selected only when `toggle={true}`)
- **Trailing half**: `accessibilityRole="button"` with `accessibilityState={{ expanded, disabled }}` — the `expanded` state tells screen readers this is a disclosure control. VoiceOver announces: "More options, collapsed/expanded, button".
- **Trailing label**: Falls back to `"More options"` when `accessibilityLabel` is not provided. A dev warning encourages providing a descriptive label (e.g., "More save options").

### Touch Targets

Minimum 48dp touch target ensured via vertical `hitSlop` on each half:

- `xsmall` (32dp container): 8dp top + 8dp bottom → 48dp total
- `small` (40dp container): 4dp top + 4dp bottom → 48dp total
- `medium`+ containers already exceed 48dp

Hit slop is vertical-only (`top`/`bottom`) because the halves are side-by-side and their horizontal extent is determined by content width.

### Keyboard Navigation (Web)

- **Tab** navigates between the two halves (leading first, then trailing in LTR). Note: RTL keyboard focus order reversal is a known TODO.
- **Space / Enter** activates the focused half
- **Focus ring** is rendered by `ShapeContainer` as a 3dp `secondary`-colored outline with 2dp offset

### Dev Warnings

In `__DEV__` mode, warnings fire for:

- Leading half without `SplitButtonLabel` and without `accessibilityLabel` (icon-only leading buttons need a label)
- Trailing half without `accessibilityLabel` (should describe the action, e.g., "More save options")
- Using `selected`, `defaultSelected`, or `onSelectedChange` without `toggle={true}` on the leading half
- Overriding `SplitButtonTrailingIcon`'s `name` prop away from `'keyboard_arrow_down'` (M3 spec prohibits modifying the trailing icon)

---

## Styling

### Unistyles Variants

The stylesheet uses unistyles variants for conditional styling. All components call `useVariants` with the same axes:

```tsx
styles.useVariants({ size, variant, disabled });
```

This activates the matching variant styles from the style definitions. The root's variant definitions are structural placeholders (empty objects) — they exist because unistyles requires all variant keys declared in `useVariants()` to be present in every participating style object.

### Shared `label` Style

The `styles.label` object is shared between `SplitButtonIcon` and `SplitButtonLabel`. It contains only `color` and `opacity` variants (no typography properties), so it applies correctly to both `Icon` (which accepts `TextStyle` color) and `Text`. The M3 spec calls the text+icon content layer the "label layer", hence the name. Same pattern as `Button`.

The trailing chevron has its own separate `trailingIcon` style — same color mapping but applied independently since `SplitButtonTrailingIcon` is a different sub-component.

### Style Override Points

| Prop                                              | Target                                        |
| ------------------------------------------------- | --------------------------------------------- |
| `style` on `SplitButton`                          | Root `View` container                         |
| `style` on `SplitButtonLeading`                   | Leading `Pressable` wrapper                   |
| `containerStyle` on `SplitButtonLeading`          | Leading `ShapeContainer` (visible container)  |
| `style` on `SplitButtonTrailing`                  | Trailing `Pressable` wrapper                  |
| `containerStyle` on `SplitButtonTrailing`         | Trailing `ShapeContainer` (visible container) |
| `style` on `SplitButtonIcon` / `SplitButtonLabel` | Individual sub-component                      |
| `style` on `SplitButtonTrailingIcon`              | Trailing chevron icon                         |

---

## Exports

```tsx
// Components
export { SplitButton, SplitButtonLeading, SplitButtonTrailing };
export { SplitButtonIcon, SplitButtonLabel, SplitButtonTrailingIcon };

// Context hook — allows custom sub-components to read parent SplitButton state.
// Returns { size, variant, disabled }.
export { useSplitButton };

// Types
export type {
  SplitButtonProps,
  SplitButtonLeadingProps,
  SplitButtonTrailingProps,
  SplitButtonTrailingIconProps,
  SplitButtonIconProps,
  SplitButtonLabelProps,
  SplitButtonSize,
  SplitButtonVariant,
};
```

---

## Differences from Button

| Aspect               | Button                                      | SplitButton                                                        |
| -------------------- | ------------------------------------------- | ------------------------------------------------------------------ |
| Root element         | `Pressable` (single interactive area)       | `View` (non-pressable, two independent halves)                     |
| Pressable areas      | 1                                           | 2 (leading + trailing)                                             |
| Sub-components       | `ButtonIcon` + `ButtonLabel`                | `SplitButtonIcon` + `SplitButtonLabel` + `SplitButtonTrailingIcon` |
| Variants             | filled, elevated, tonal, outlined, text     | filled, elevated, tonal, outlined (no text)                        |
| Shape                | Uniform corners (all same token)            | Asymmetric corners (outer=full, inner=size-based)                  |
| Shape morph triggers | Press only                                  | Press, hover, and focus                                            |
| Toggle               | Full visual toggle (color, shape inversion) | Accessibility-only (`accessibilityState.selected`)                 |
| Open/close state     | N/A                                         | Trailing half with chevron rotation                                |
| Elevation            | filled/tonal hover lift (0→1)               | elevated hover lift only (1→2)                                     |
| Touch target         | `hitSlop` (uniform)                         | `hitSlop` (vertical only, per half)                                |
| `React.memo`         | Wrapped                                     | Not wrapped                                                        |

---

## Usage Examples

### Basic Variants

```tsx
<SplitButton variant="filled">
  <SplitButtonLeading onPress={handleSave}>
    <SplitButtonIcon name="save" />
    <SplitButtonLabel>Save</SplitButtonLabel>
  </SplitButtonLeading>
  <SplitButtonTrailing onOpenChange={setMenuOpen} accessibilityLabel="More save options" />
</SplitButton>

<SplitButton variant="outlined">
  <SplitButtonLeading onPress={handleAction}>
    <SplitButtonLabel>Options</SplitButtonLabel>
  </SplitButtonLeading>
  <SplitButtonTrailing accessibilityLabel="More options" />
</SplitButton>

<SplitButton variant="tonal">
  <SplitButtonLeading onPress={handleEdit}>
    <SplitButtonIcon name="edit" />
    <SplitButtonLabel>Edit</SplitButtonLabel>
  </SplitButtonLeading>
  <SplitButtonTrailing accessibilityLabel="More edit options" />
</SplitButton>

<SplitButton variant="elevated">
  <SplitButtonLeading onPress={handleShare}>
    <SplitButtonIcon name="share" />
    <SplitButtonLabel>Share</SplitButtonLabel>
  </SplitButtonLeading>
  <SplitButtonTrailing accessibilityLabel="More share options" />
</SplitButton>
```

### Controlled Trailing State

```tsx
const [menuOpen, setMenuOpen] = useState(false);

<SplitButton variant="filled">
  <SplitButtonLeading onPress={handleSave}>
    <SplitButtonIcon name="save" />
    <SplitButtonLabel>Save</SplitButtonLabel>
  </SplitButtonLeading>
  <SplitButtonTrailing open={menuOpen} onOpenChange={setMenuOpen} accessibilityLabel="More save options" />
</SplitButton>;
```

### Toggle Leading (Accessibility-Only)

```tsx
<SplitButton variant="filled">
  <SplitButtonLeading toggle defaultSelected={false} onPress={handleBookmark}>
    <SplitButtonIcon name="bookmark" />
    <SplitButtonLabel>Bookmark</SplitButtonLabel>
  </SplitButtonLeading>
  <SplitButtonTrailing accessibilityLabel="More bookmark options" />
</SplitButton>
```

### Expressive Sizes

```tsx
<SplitButton size="xlarge" variant="tonal">
  <SplitButtonLeading onPress={handlePlay}>
    <SplitButtonIcon name="play_arrow" />
    <SplitButtonLabel>Play</SplitButtonLabel>
  </SplitButtonLeading>
  <SplitButtonTrailing accessibilityLabel="More play options" />
</SplitButton>
```

### Trailing with Badge

```tsx
<SplitButton variant="filled">
  <SplitButtonLeading onPress={handleNotifications}>
    <SplitButtonIcon name="notifications" />
    <SplitButtonLabel>Notifications</SplitButtonLabel>
  </SplitButtonLeading>
  <SplitButtonTrailing accessibilityLabel="More notification options">
    <Badge count={3}>
      <SplitButtonTrailingIcon />
    </Badge>
  </SplitButtonTrailing>
</SplitButton>
```

### Disabled

```tsx
<SplitButton variant="filled" disabled>
  <SplitButtonLeading onPress={handleSave}>
    <SplitButtonIcon name="save" />
    <SplitButtonLabel>Save</SplitButtonLabel>
  </SplitButtonLeading>
  <SplitButtonTrailing accessibilityLabel="More save options" />
</SplitButton>
```

### Custom Shape Override

```tsx
<SplitButton variant="tonal">
  <SplitButtonLeading
    restShape={{ topStart: 'medium', bottomStart: 'medium', topEnd: 'small', bottomEnd: 'small' }}
    interactionShapes={{}}
    onPress={handleAction}
  >
    <SplitButtonLabel>Custom corners</SplitButtonLabel>
  </SplitButtonLeading>
  <SplitButtonTrailing interactionShapes={{}} accessibilityLabel="More options" />
</SplitButton>
```
