# ShapeContainer

> Animated container that clips children to theme-aware border radii with interaction-driven shape morphing.

Source: [`src/components/custom/shape-container.tsx`](../../src/components/custom/shape-container.tsx)

---

## Purpose

ShapeContainer is the component that gives M3 components their shape — the rounded pill of a Button, the rounded rectangle of a Card, the square corners of a TextField. It resolves shape tokens from the theme, clips children via `overflow: hidden`, and animates border radii during interactions (the M3 "squish" effect on press).

It reads **spatial** interaction progress from the nearest [Pressable](./pressable.md) — using the overshoot-allowed spring channel so shape morphing has elastic bounce. The spring speed tier is configurable via the `speed` prop to match the M3 motion spec for the component's coverage class.

---

## Props

```tsx
type ShapeContainerProps = {
  shape: ShapeSpec; // Rest shape
  shapes?: InteractionShapes; // Target shapes per interaction state
  speed?: MotionSpeed; // Spring tier: 'fast' | 'default' | 'slow'
  style?: StyleProp<ViewStyle>; // Additional style (background, padding, layout)
  children: React.ReactNode;
};
```

| Prop     | Default  | Description                                                                                                          |
| -------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| `shape`  | —        | The rest (idle) shape — applied when no interaction is active                                                        |
| `shapes` | —        | Per-interaction target shapes. Omit to disable morphing. Pass `{}` explicitly to disable all.                        |
| `speed`  | `'fast'` | Motion speed tier for shape transition springs (see [Motion Speed](#motion-speed) below)                             |
| `style`  | —        | Merged onto the Animated.View. Components pass container styles here (padding, backgroundColor, flexDirection, etc.) |

---

## Shape Specification

Shapes can be specified three ways:

### Token (string)

A key from `theme.shape`. Applied uniformly to all four corners.

```tsx
<ShapeContainer shape="full">      // pill shape (9999px)
<ShapeContainer shape="medium">    // 12px corners
<ShapeContainer shape="none">      // sharp corners (0px)
```

### Number

Raw pixel value applied uniformly.

```tsx
<ShapeContainer shape={16}>        // 16px corners
```

### Per-corner object

Asymmetric shapes using logical (RTL-aware) directions. Each corner is independently a token or number.

```tsx
<ShapeContainer shape={{
  topStart: 'xlarge',       // 28px
  topEnd: 'xlarge',         // 28px
  bottomStart: 'small',     // 8px
  bottomEnd: 'small',       // 8px
}}>
```

### Shape Token Scale

| Token             | Pixels | Typical Use                            |
| ----------------- | ------ | -------------------------------------- |
| `none`            | 0      | Sharp corners (TextField, BottomSheet) |
| `xsmall`          | 4      | Subtle rounding                        |
| `small`           | 8      | Pressed button corners                 |
| `medium`          | 12     | Cards, small square buttons            |
| `large`           | 16     | Medium square buttons                  |
| `largeIncreased`  | 20     | —                                      |
| `xlarge`          | 28     | Large square buttons, FABs             |
| `xlargeIncreased` | 32     | —                                      |
| `xxlarge`         | 48     | —                                      |
| `full`            | 9999   | Pill shape (buttons, chips, badges)    |

---

## Interaction Shape Morphing

When `shapes` is provided, the container interpolates from the rest shape toward the active interaction's target shape.

### Configuration

```tsx
type InteractionShapes = {
  press?: ShapeSpec;
  hover?: ShapeSpec;
  focus?: ShapeSpec;
  drag?: ShapeSpec;
};
```

Example — Button press squish:

```tsx
<ShapeContainer shape="full" shapes={{ press: 'small' }}>
```

On press, corners animate from `full` (pill) toward `small` (8px). On release, they spring back.

### Blending Model

Blending is **additive** in M3 priority order (lowest to highest):

```
hover → focus → press → drag
```

Each active interaction shifts corners from their current position toward its target proportionally to its spatial progress. Higher-priority interactions layer on top:

```
let corner = restCorner;

if (hover active)  corner += (hoverTarget - corner) × hoverProgress;
if (focus active)  corner += (focusTarget - corner) × focusProgress;
if (press active)  corner += (pressTarget - corner) × pressProgress;
if (drag active)   corner += (dragTarget  - corner) × dragProgress;
```

This means a button being pressed during hover smoothly transitions from the hover shape toward the press shape.

### Disabling Morphing

Pass an empty object to suppress all interaction morphing:

```tsx
// No shape animation on any interaction
<ShapeContainer shape="full" shapes={{}}>
```

This is used by ButtonGroup to keep shared edges static while individual button shapes stay fixed.

---

## Rest Shape Transitions

When the `shape` prop changes at runtime (e.g., toggle selection inverts shape), the container **animates** between the old and new rest shape using the spatial spring from the selected `speed` tier.

Implementation:

1. Previous rest corners are captured in `prevRestCornersShared`
2. New rest corners are set in `restCornersShared`
3. A `restProgress` SharedValue springs from 0 → 1
4. The worklet lerps between previous and current corners using `restProgress`

This is independent of interaction morphing — both can happen simultaneously.

### Reduced Motion

Reduced motion is handled by `useMotionConfig`, which returns near-instant spring configs when the system reduced motion preference is active. Rest shape transitions use these springs — spatial springs become critically damped with very high stiffness, producing a near-instant snap without special-casing in ShapeContainer.

---

## Motion Speed

The `speed` prop selects which spring tier from the M3 motion system is used for shape transition animations. This controls how quickly the shape morphs during interactions and rest-shape transitions.

| Speed       | M3 Spring Token                        | Use Case                                              |
| ----------- | -------------------------------------- | ----------------------------------------------------- |
| `'fast'`    | `md.sys.motion.spring.fast.spatial`    | Small selection controls — switches, checkboxes, FABs |
| `'default'` | `md.sys.motion.spring.default.spatial` | Medium-coverage components — Extended FABs, cards     |
| `'slow'`    | `md.sys.motion.spring.slow.spatial`    | Large-coverage components — bottom sheets, dialogs    |

The M3 spec recommends `'fast'` for small selection controls and `'default'` for medium-coverage components. The `speed` prop defaults to `'fast'` for backwards compatibility — components that need a different tier pass it explicitly.

### Current consumer usage

| Component   | Speed       | Reason                            |
| ----------- | ----------- | --------------------------------- |
| Button      | `'fast'`    | Small selection control (default) |
| FAB         | `'fast'`    | Small selection control (default) |
| ExtendedFAB | `'default'` | Medium-coverage component         |
| IconButton  | `'fast'`    | Small selection control (default) |
| Card        | `'fast'`    | Small selection control (default) |
| Chips       | `'fast'`    | Small selection control (default) |

---

## maxRadius Capping

Border radius is capped at `containerHeight / 2` in the worklet:

```tsx
const maxRadius = containerHeight.value > 0 ? containerHeight.value / 2 : 100;
```

### Why

The `full` token resolves to 9999px. Animating from 9999 to a small value (e.g., 8) causes **iOS CoreAnimation artifacts** — corners visually "zero out" mid-animation because iOS's cornerRadius animation produces glitches when the value vastly exceeds the view dimension.

Values above `height/2` are visually identical (full pill), so capping at `height/2` produces the same visual result without the animation artifact.

The container height is tracked via `onLayout` → `containerHeight` SharedValue.

---

## RTL Support

ShapeContainer uses **logical** directions in its API (`topStart`, `topEnd`, `bottomStart`, `bottomEnd`) but maps to **physical** CSS properties in the worklet:

```
LTR: topStart → topLeft,  topEnd → topRight
RTL: topStart → topRight, topEnd → topLeft
```

This mapping is done manually because Reanimated's web runtime silently drops logical border-radius properties (`borderTopStartRadius`). The `isRTL` state is tracked in a SharedValue updated via `I18nManager.isRTL`.

---

## Focus Ring

ShapeContainer also renders the M3 focus ring when keyboard focus is active:

- **Style:** `outline` with `outlineWidth: 3`, `outlineOffset: 2`, `outlineColor: scheme.secondary`
- **Condition:** `focus.value > 0.5 && press.value < 0.1 && drag.value < 0.1`
- **Suppression:** Hidden when press or drag is active (higher-priority interactions take precedence)

This uses CSS `outline` properties which only render on web — native platforms use accessibility system focus indicators.

---

## Rendering

```tsx
<Animated.View onLayout={handleLayout} style={[styles.container, style, animatedStyle]}>
  {children}
</Animated.View>
```

- `styles.container` sets `overflow: 'hidden'` for clipping
- `style` applies component-specific layout (padding, backgroundColor, flexDirection, gap)
- `animatedStyle` applies the four animated `borderRadius` values (+ optional focus ring)

---

## Exports

```tsx
// Component
export { ShapeContainer, normalizeShape };

// Types
export type { ShapeContainerProps, ShapeSpec, ShapeToken, ShapeCorner, PerCornerShape, InteractionShapes };
```

The `normalizeShape` helper is exported for components that need to pre-expand a `ShapeSpec` into per-corner form (e.g., for passing to SharedValues).

---

## Consumers

| Component   | Rest Shape              | Press Morph Target | Speed       | Notes                               |
| ----------- | ----------------------- | ------------------ | ----------- | ----------------------------------- |
| Button      | `'full'` or size-based  | Size-based         | `'fast'`    | Shape inverts on toggle selection   |
| FAB         | Size-based              | Size-based         | `'fast'`    | Square → smaller corners on press   |
| ExtendedFAB | Size-based              | Size-based         | `'default'` | Medium-coverage component           |
| IconButton  | `'full'` or size-based  | Size-based         | `'fast'`    | Shape inverts on toggle selection   |
| SplitButton | Per-segment corners     | —                  | `'fast'`    | Suppresses morphing (`shapes={{}}`) |
| Card        | `'medium'` or custom    | —                  | `'fast'`    | No press morphing                   |
| Chips       | `'small'` or size-based | —                  | `'fast'`    | No press morphing                   |
| ButtonGroup | Per-segment corners     | —                  | `'fast'`    | Suppresses morphing (`shapes={{}}`) |
