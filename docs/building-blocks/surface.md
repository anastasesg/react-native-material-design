# Surface

> M3 container building block — animated shape (borderRadius), elevation (shadow), and focus ring in a single composable component.

Source: [`src/components/custom/surface.tsx`](../../src/components/custom/surface.tsx)

---

## Purpose

Surface is the foundational container for every M3 component in this library. It gives components their shape (the rounded pill of a Button, the rectangle of a Card), their shadow (elevation that lifts on hover), and their keyboard focus ring — all animated and driven by interaction progress from the nearest [Pressable](./pressable.md).

Previously, these concerns were split across `ShapeContainer` (borderRadius + clip) and `ElevationContainer` (shadow). Surface unifies them into a single component with a cleaner API.

---

## Props

```tsx
type SurfaceProps = {
  shape: ShapeSpec;
  elevation?: ElevationLevel | SharedValue<number>;
  interactions?: SurfaceInteractions;
  focus?: FocusRing | false;
  speed?: MotionSpeed;
  shadowColor?: keyof Scheme;
  style?: StyleProp<AnimatedStyle<ViewStyle>>;
  children: React.ReactNode;
};
```

| Prop           | Default     | Description                                                                         |
| -------------- | ----------- | ----------------------------------------------------------------------------------- |
| `shape`        | —           | Rest shape — token, number, or per-corner object                                    |
| `elevation`    | —           | Rest elevation level (0–5). Static number or `SharedValue` for animated transitions |
| `interactions` | —           | Grouped shape + elevation targets per interaction state                             |
| `focus`        | M3 defaults | Focus ring appearance (`{ color, width, offset }`). Pass `false` to disable         |
| `speed`        | `'fast'`    | Motion speed tier for shape spring animations                                       |
| `shadowColor`  | `'shadow'`  | Theme scheme color key for the shadow                                               |
| `style`        | —           | Applied to the inner (content) view. Accepts static, unistyles, and animated styles |

---

## Two-View Architecture

Surface always renders two `Animated.View`s:

```
Animated.View (outer)      ← borderRadius + shadow (no overflow clip)
  └─ Animated.View (inner) ← borderRadius + overflow:hidden + focus ring + style
       └─ children
```

**Why?** iOS `CALayer` cannot render shadow AND clip content on the same view — `overflow: 'hidden'` clips the shadow. The outer view casts the shadow with matching `borderRadius` (so shadows follow the rounded shape), while the inner view clips children.

Both views share the same animated corner radii via a `useDerivedValue` — the heavy corner computation (token resolution, rest-shape lerping, interaction blending) runs **once per frame**, not twice.

---

## Shape Specification

### Token (string)

A key from `theme.shape`, applied uniformly to all four corners.

```tsx
<Surface shape="full">      // pill (9999px, capped at height/2)
<Surface shape="medium">    // 12px corners
<Surface shape="none">      // sharp corners (0px)
```

### Number

Raw pixel value, applied uniformly.

```tsx
<Surface shape={16}>        // 16px corners
```

### Per-corner object

Asymmetric shapes using logical (RTL-aware) directions.

```tsx
<Surface shape={{
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

## Interactions

The `interactions` prop groups shape morphing and elevation changes:

```tsx
type SurfaceInteractions = {
  shapes?: InteractionShapes; // uses spatial progress (overshoot springs)
  elevations?: InteractionElevations; // uses effects progress (clamped springs)
};
```

### Shape Morphing

```tsx
<Surface shape="full" interactions={{ shapes: { press: 'small' } }}>
```

On press, corners animate from `full` (pill) toward `small` (8px). On release, they spring back with elastic bounce (spatial spring).

### Elevation Changes

```tsx
<Surface shape="large" elevation={3} interactions={{ elevations: { hover: 4 } }}>
```

On hover, shadow lifts from level 3 toward level 4. Uses effects spring (no overshoot).

### Combined

```tsx
<Surface
  shape="full"
  elevation={0}
  interactions={{
    shapes: { press: 'small' },
    elevations: { hover: 1 },
  }}
>
```

### Blending Model

Both shape and elevation use **additive blending** in M3 priority order:

```
hover → focus → press → drag  (lowest → highest)
```

Each active interaction shifts the value from current toward its target proportionally to its progress. Higher-priority interactions layer on top:

```
let corner = restCorner;
if (hover active)  corner += (hoverTarget - corner) × hoverProgress;
if (focus active)  corner += (focusTarget - corner) × focusProgress;
if (press active)  corner += (pressTarget - corner) × pressProgress;
if (drag active)   corner += (dragTarget  - corner) × dragProgress;
```

---

## Elevation

### M3 Levels

| Level | Typical Use                                    |
| ----- | ---------------------------------------------- |
| 0     | Flat — filled buttons, cards at rest           |
| 1     | Slight lift — elevated buttons, cards on hover |
| 2     | Hover state for elevated components            |
| 3     | Navigation bars, FABs                          |
| 4     | Search bars, FABs on hover                     |
| 5     | Top app bars on scroll                         |

### Fractional Interpolation

Elevation can be fractional during animation (e.g., 2.5 during hover-in). The worklet linearly interpolates between adjacent levels:

```
l=2.5 → lo=2, hi=3, frac=0.5 → blend level 2 and 3 shadow properties 50/50
```

Android `elevation` is rounded to integer (Android doesn't support fractional elevation).

### Static vs Animated

```tsx
// Static — most common
<Surface elevation={3}>

// SharedValue — for scroll-linked elevation
const elevation = useSharedValue(0);
onScroll: (e) => { elevation.value = e.contentOffset.y > 0 ? 2 : 0; }
<Surface elevation={elevation}>
```

---

## Focus Ring

Customizable via the `focus` prop:

```tsx
type FocusRing = {
  color?: keyof Scheme; // default: 'secondary'
  width?: number; // default: 3
  offset?: number; // default: 2
};
```

```tsx
// Default M3 focus ring
<Surface shape="full">

// Custom color + width
<Surface shape="full" focus={{ color: 'primary', width: 2 }}>

// Disabled
<Surface shape="full" focus={false}>
```

The ring renders as CSS `outline` (web only). It's suppressed when press or drag is active (higher-priority interactions per M3 spec).

---

## Motion Speed

| Speed       | M3 Spring Token                        | Use Case                                  |
| ----------- | -------------------------------------- | ----------------------------------------- |
| `'fast'`    | `md.sys.motion.spring.fast.spatial`    | Small controls — buttons, switches, FABs  |
| `'default'` | `md.sys.motion.spring.default.spatial` | Medium components — Extended FABs, cards  |
| `'slow'`    | `md.sys.motion.spring.slow.spatial`    | Large components — bottom sheets, dialogs |

---

## Animated Style Support

The `style` prop accepts `StyleProp<AnimatedStyle<ViewStyle>>`, so consumers can pass `useAnimatedStyle()` results directly:

```tsx
const bgStyle = useAnimatedStyle(() => ({
  backgroundColor: interpolateColor(progress.value, [0, 1], [colorA, colorB]),
}));

<Surface shape="full" style={bgStyle}>
```

This eliminates the need for an extra inner `Animated.View` when animating container properties like `backgroundColor` or `transform`.

---

## maxRadius Capping

Border radius is capped at `containerHeight / 2`:

```tsx
const maxRadius = containerHeight.value > 0 ? containerHeight.value / 2 : 100;
```

The `full` token resolves to 9999px. Animating from 9999 to a small value causes **iOS CoreAnimation artifacts** — corners visually "zero out" mid-animation. Values above `height/2` are visually identical (full pill), so capping produces the same visual result without artifacts.

---

## RTL Support

Surface uses **logical** directions in its API (`topStart`, `topEnd`) but maps to **physical** CSS properties in the worklet:

```
LTR: topStart → topLeft,  topEnd → topRight
RTL: topStart → topRight, topEnd → topLeft
```

Done manually because Reanimated's web runtime silently drops logical border-radius properties.

---

## Consumers

| Component   | Shape                | Elevation | Interactions                                | Speed       |
| ----------- | -------------------- | --------- | ------------------------------------------- | ----------- |
| Button      | `'full'` or size-dep | 0 or 1    | shapes: press morph, elevations: hover lift | `'fast'`    |
| FAB         | Size-dependent       | 3         | elevations: hover 4                         | `'fast'`    |
| ExtendedFAB | Size-dependent       | 3         | elevations: hover 4                         | `'default'` |
| IconButton  | `'full'` or size-dep | —         | shapes: press morph                         | `'fast'`    |
| SplitButton | Per-segment corners  | 0 or 1    | elevations: hover lift                      | `'fast'`    |
| Card        | `'medium'`           | —         | —                                           | `'fast'`    |
| Chips       | `'small'`            | —         | shapes: press morph                         | `'fast'`    |
| ButtonGroup | Per-segment corners  | —         | shapes: `{}`                                | `'fast'`    |

---

## Exports

```tsx
// Component
export { Surface, normalizeShape };

// Types
export type {
  SurfaceProps,
  SurfaceInteractions,
  FocusRing,
  ShapeSpec,
  ShapeToken,
  ShapeCorner,
  PerCornerShape,
  InteractionShapes,
  InteractionElevations,
};
```
