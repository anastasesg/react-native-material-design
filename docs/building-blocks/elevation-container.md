# ElevationContainer

> Animated shadow container that interpolates between M3 elevation levels with interaction-driven transitions.

Source: [`src/components/custom/elevation-container.tsx`](../../src/components/custom/elevation-container.tsx)

---

## Purpose

ElevationContainer renders platform shadows by interpolating shadow properties (offset, opacity, radius) from the theme's elevation system. It supports both static elevation levels and animated transitions (e.g., hover lift on elevated buttons).

In the [layer stack](../architecture.md#layer-stack), it sits between Pressable and ShapeContainer — shadows must extend beyond the clipped shape, not be clipped by it.

---

## Props

```tsx
type ElevationContainerProps = {
  level: ElevationLevel | SharedValue<number>; // Rest elevation (0–5)
  elevations?: InteractionElevations; // Per-interaction target levels
  shadowColor?: keyof Scheme; // Default: 'shadow'
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

type InteractionElevations = {
  press?: ElevationLevel;
  hover?: ElevationLevel;
  focus?: ElevationLevel;
  drag?: ElevationLevel;
};

type ElevationLevel = 0 | 1 | 2 | 3 | 4 | 5;
```

| Prop          | Description                                                                   |
| ------------- | ----------------------------------------------------------------------------- |
| `level`       | Rest elevation. Number snaps; `SharedValue<number>` animates smoothly.        |
| `elevations`  | Target levels per interaction. Reads effects progress from Pressable context. |
| `shadowColor` | Theme color key for the shadow. Almost always `'shadow'`.                     |
| `style`       | Additional style on the container.                                            |

---

## M3 Elevation Levels

| Level | Typical Use                                    |
| ----- | ---------------------------------------------- |
| 0     | Flat — filled buttons, cards at rest           |
| 1     | Slight lift — elevated buttons, cards on hover |
| 2     | Hover state for elevated components            |
| 3     | Navigation bars, FABs                          |
| 4     | Search bars                                    |
| 5     | Top app bars on scroll                         |

Each level maps to shadow properties in the theme: `shadowOffset`, `shadowOpacity`, `shadowRadius`, and Android `elevation`.

---

## How It Works

### Level Normalization

The `level` prop accepts either a static number or a `SharedValue<number>`. Internally, static numbers are mirrored into a fallback SharedValue so the worklet has a single code path:

```tsx
const isAnimated = typeof level !== 'number';
const fallbackLevel = useSharedValue(isAnimated ? 0 : level);
// ... sync fallbackLevel when static level changes
const effectiveLevel = isAnimated ? level : fallbackLevel;
```

### Fractional Interpolation

Elevation values can be fractional (e.g., 1.5 during a hover-in animation). The worklet interpolates between adjacent levels:

```tsx
const lo = Math.floor(l); // e.g., 1
const hi = Math.min(5, lo + 1); // e.g., 2
const frac = l - lo; // e.g., 0.5

// Interpolate each shadow property
shadowOffset.height = loStyle.height + (hiStyle.height - loStyle.height) * frac;
shadowOpacity = loStyle.opacity + (hiStyle.opacity - loStyle.opacity) * frac;
shadowRadius = loStyle.radius + (hiStyle.radius - loStyle.radius) * frac;
elevation = Math.round(loStyle.elevation + (hiStyle.elevation - loStyle.elevation) * frac);
```

Android `elevation` is rounded to integer (Android doesn't support fractional elevation).

### Interaction Blending

When `elevations` is provided, the container reads **effects** progress (no overshoot) from the nearest Pressable and blends from the rest level toward the interaction target:

```
let level = restLevel;
if (hover active) level += (hoverTarget - level) × hoverProgress;
if (focus active) level += (focusTarget - level) × focusProgress;
if (press active) level += (pressTarget - level) × pressProgress;
if (drag active)  level += (dragTarget  - level) × dragProgress;
level = clamp(0, 5, level);
```

Same priority model as other building blocks: drag > press > focus > hover.

---

## Common Patterns

### Filled/Tonal Button

Rest at 0, lift to 1 on hover:

```tsx
<ElevationContainer level={0} elevations={{ hover: 1 }}>
```

### Elevated Button

Rest at 1, lift to 2 on hover:

```tsx
<ElevationContainer level={1} elevations={{ hover: 2 }}>
```

### Disabled Component

No elevation, no interactions:

```tsx
<ElevationContainer level={0}>
```

### Animated Elevation (e.g., scroll-linked)

Pass a SharedValue for smooth animation:

```tsx
const elevation = useSharedValue(0);

// Animate on scroll
scrollHandler = useAnimatedScrollHandler({
  onScroll: (e) => {
    elevation.value = e.contentOffset.y > 0 ? 2 : 0;
  },
});

<ElevationContainer level={elevation}>
```

---

## Rendering

```tsx
<Animated.View style={[style, animatedStyle]}>{children}</Animated.View>
```

The `animatedStyle` contains:

- `shadowColor` — from theme scheme
- `shadowOffset` — `{ width: 0, height: interpolated }`
- `shadowOpacity` — interpolated
- `shadowRadius` — interpolated
- `elevation` — Android elevation (rounded integer)

---

## Exports

```tsx
export type { ElevationContainerProps, InteractionElevations };
export { ElevationContainer };
```
