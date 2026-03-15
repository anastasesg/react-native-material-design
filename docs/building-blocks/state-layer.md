# StateLayer

> M3 interaction feedback overlay — tints the component surface during press, hover, focus, and drag.

Source: [`src/components/custom/state-layer.tsx`](../../src/components/custom/state-layer.tsx)

---

## Purpose

StateLayer is the visual feedback mechanism defined by the M3 spec. It renders an absolute-positioned semi-transparent overlay inside a [ShapeContainer](./shape-container.md), clipped to the component's shape. It reads interaction progress from the nearest [Pressable](./pressable.md) via context — no prop wiring needed.

The state layer is separate from the component's content and container color. This separation is a core M3 principle: interaction feedback should be composable and consistent across all components.

---

## Props

```tsx
type StateLayerProps = {
  color?: keyof Scheme; // Default: 'onSurface'
  disabled?: boolean; // Default: false
  disabledOpacity?: number; // Default: theme.state.disabledContainer (0.12)
  style?: React.ComponentProps<Animated.View>['style'];
};
```

| Prop              | Description                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------------------- |
| `color`           | Theme color key for the tint. Should match content color (e.g., `'onPrimary'` for filled surfaces) |
| `disabled`        | When true, renders an additional disabled container overlay                                        |
| `disabledOpacity` | Override disabled overlay opacity. Button uses 0.10 instead of the default 0.12                    |
| `style`           | Additional style merged onto the state layer view                                                  |

---

## How It Works

### Opacity Calculation

The state layer's opacity is computed in a `useAnimatedStyle` worklet:

1. Read each interaction's **effects** progress (0–1) from `useInteraction()`
2. Multiply each by its M3 state opacity from the theme
3. Take the **max** as the final opacity

```
opacity = max(
  press  × theme.state.pressed,   // 0.10
  hover  × theme.state.hover,     // 0.08
  focus  × theme.state.focus,     // 0.10
  drag   × theme.state.dragged,   // 0.16
)
```

This means at full press, the overlay is 10% opaque in the specified color. During hover, 8%. If both press and hover are active simultaneously, press wins (10% > 8%).

### M3 State Opacities

| State   | Opacity | Token                 |
| ------- | ------- | --------------------- |
| Hover   | 0.08    | `theme.state.hover`   |
| Focus   | 0.10    | `theme.state.focus`   |
| Pressed | 0.10    | `theme.state.pressed` |
| Dragged | 0.16    | `theme.state.dragged` |

### Color Selection

The `color` prop specifies which theme color to tint with. The M3 rule: use the **content color** of the surface. For example:

| Surface Color        | State Layer Color      | Why                                      |
| -------------------- | ---------------------- | ---------------------------------------- |
| `primary`            | `onPrimary`            | Content on primary surfaces is onPrimary |
| `secondaryContainer` | `onSecondaryContainer` | Content on tonal surfaces                |
| `surface`            | `onSurface`            | Default surface content                  |

---

## Disabled State

When `disabled={true}`, two overlays render:

```
ShapeContainer (clips both)
  ├─ Disabled overlay    ← semi-transparent onSurface fill
  └─ State layer         ← transparent (no interactions when disabled)
```

The disabled overlay sits **above** the state layer (rendered first in the fragment). It uses:

- Color: `scheme.onSurface`
- Opacity: `theme.state.disabledContainer` (0.12) by default

Components can override the opacity via `disabledOpacity`. For example, M3 Button spec requires 0.10 instead of 0.12:

```tsx
<StateLayer color={stateLayerColor} disabled={disabled} disabledOpacity={0.1} />
```

---

## Graceful Degradation

When used outside a Pressable (no `InteractionProgress` context), the worklet returns:

```tsx
{ backgroundColor: 'transparent', opacity: 0 }
```

No error, no visual effect. This allows components to include a StateLayer unconditionally — it simply does nothing without a Pressable ancestor.

---

## Rendering

The component renders as a fragment containing up to two `Animated.View` elements:

```tsx
<>
  {disabled && <Animated.View style={styles.disabledOverlay(disabledOpacity)} />}
  <Animated.View style={[styles.layer, style, animatedStyle]} />
</>
```

Both views use:

- `...StyleSheet.absoluteFillObject` — fills the parent ShapeContainer
- `pointerEvents="none"` — passes through all touch events to content below

---

## Stylesheet

```tsx
const styles = StyleSheet.create((theme) => ({
  disabledOverlay: (opacityOverride?: number) => ({
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.scheme.onSurface,
    opacity: opacityOverride ?? theme.state.disabledContainer,
  }),
  layer: {
    ...StyleSheet.absoluteFillObject,
  },
}));
```

Note: `disabledOverlay` uses unistyles' **dynamic function style** pattern — `(opacityOverride?) => ({...})` — to accept the override parameter while still accessing the theme.

---

## Exports

```tsx
export type { StateLayerProps };
export { StateLayer };
```
