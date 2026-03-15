# Pressable

> Custom gesture-driven Pressable that tracks interaction states as spring-animated SharedValues.

Source: [`src/components/custom/pressable.tsx`](../../src/components/custom/pressable.tsx)

---

## Purpose

Replaces React Native's built-in `Pressable` with a system built on React Native Gesture Handler. Every interactive M3 component wraps its content in this Pressable — it's the outermost layer in the [layer stack](../architecture.md#layer-stack) and the source of all interaction state.

The key difference from RN's Pressable: interaction state is tracked as **spring-animated SharedValues** rather than boolean callbacks. This means child building blocks (StateLayer, ShapeContainer, ElevationContainer) can read interaction progress continuously and animate in response — all on the UI thread, with zero React re-renders.

---

## Props

```tsx
type PressableProps = Omit<ViewProps, 'style' | 'hitSlop'> & {
  ref?: React.Ref<React.ComponentRef<typeof View>>;
  style?: StyleProp<ViewStyle>;

  // Gesture callbacks
  onPress?: (e: TapEvent) => void;
  onPressIn?: (e: TapEvent) => void;
  onPressOut?: (e: TapEvent) => void;
  onLongPress?: (e: LongPressEvent) => void;
  onHoverIn?: (e: HoverEvent) => void;
  onHoverOut?: (e: HoverEvent) => void;
  onFocus?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  onBlur?: (e: NativeSyntheticEvent<TargetedEvent>) => void;

  // Configuration
  disabled?: boolean; // Default: false
  hitSlop?: Insets | number;
  accessibilityHint?: string;
  delayLongPress?: number; // Default: 500ms
  draggable?: boolean; // Default: false
  speed?: 'fast' | 'default' | 'slow'; // Default: 'default'
  scheme?: 'expressive' | 'standard'; // Default: theme's active scheme
  gesture?: GestureType; // Additional gesture composed simultaneously
};
```

---

## Interaction Progress

Pressable creates 8 SharedValues (4 interactions × 2 spring channels) and provides them to children via `InteractionProvider`:

```
InteractionProgress
├─ effects                      ← critically damped (no overshoot)
│   ├─ press: SharedValue<number>     0 → 1 on press
│   ├─ hover: SharedValue<number>     0 → 1 on hover
│   ├─ focus: SharedValue<number>     0 → 1 on focus
│   └─ drag:  SharedValue<number>     0 → 1 on drag
└─ spatial                      ← underdamped (allows overshoot)
    ├─ press: SharedValue<number>
    ├─ hover: SharedValue<number>
    ├─ focus: SharedValue<number>
    └─ drag:  SharedValue<number>
```

### Why Two Channels?

M3's motion guidelines distinguish between:

- **Effects** — opacity, color, elevation. Overshoot would be visually wrong (e.g., opacity > 1, color past target). Uses critically damped springs.
- **Spatial** — shape, position, scale. Overshoot adds physical feel (elastic bounce on corners). Uses underdamped springs.

Building blocks self-select which channel to read:

| Building Block     | Channel   | Reason                                               |
| ------------------ | --------- | ---------------------------------------------------- |
| StateLayer         | `effects` | Opacity tint — must not overshoot                    |
| ElevationContainer | `effects` | Shadow level — must not overshoot                    |
| ShapeContainer     | `spatial` | Border radius morphing — overshoot adds elastic feel |

---

## Gesture Architecture

### Built-in Gestures

| Gesture        | Trigger             | Thread | Progress                                        |
| -------------- | ------------------- | ------ | ----------------------------------------------- |
| **Tap**        | Touch down/up       | UI     | `onBegin` → 1, `onFinalize` → 0                 |
| **Long press** | Hold > delay        | UI     | Takes priority over tap via `Gesture.Exclusive` |
| **Hover**      | Pointer enter/leave | UI     | `onBegin` → 1, `onFinalize` → 0                 |
| **Drag**       | Pan (opt-in)        | UI     | `onStart` → 1, `onFinalize` → 0                 |

All gesture callbacks run as RNGH worklets on the **UI thread**. Spring animations fire directly inside callbacks via `withSpring`. JS callbacks (onPress, onPressIn, etc.) are scheduled back to the RN thread via `scheduleOnRN`.

### Composition Strategy

Gestures are only included when needed to minimize RNGH recognition latency:

```
If onLongPress:
  pressGesture = Exclusive(longPress, tap)   ← long press wins over tap
Else:
  pressGesture = tap

parts = [pressGesture, hover]
if draggable: parts.push(drag)
if gesture prop: parts.push(externalGesture)

composed = Simultaneous(...parts)
```

### External Gesture Composition

Consumers can pass additional gestures via the `gesture` prop. These are composed simultaneously with the built-in gestures:

```tsx
const swipe = Gesture.Pan().onEnd(() => { ... });
<Pressable gesture={swipe} onPress={handlePress}>
  <Content />
</Pressable>
```

---

## Focus Handling

RNGH has no focus gesture, so focus/blur use RN's native `onFocus`/`onBlur` events on the JS thread.

### Pointer Focus Suppression

When focus is triggered by a pointer interaction (press or hover already active), the focus animation is suppressed:

```tsx
if (ePress.value > 0.1 || eHover.value > 0.1) {
  onFocus?.(e);
  return; // Skip focus spring animation
}
```

This prevents double visual feedback — the press/hover state layer is already showing, and adding a focus animation on top would be redundant.

---

## Web Keyboard Support

Keyboard activation is split across two events to mirror the touch gesture pattern:

| Event     | Key         | Action                                                                 |
| --------- | ----------- | ---------------------------------------------------------------------- |
| `keydown` | Space/Enter | `preventDefault`, starts press animation (non-repeat only), sets guard |
| `keyup`   | Space/Enter | Fires `onPress`, releases press animation, clears guard after rAF      |

This mirrors the gesture lifecycle: `keydown` = gesture `onBegin` (press in), `keyup` = gesture `onEnd` + `onFinalize` (press + press out).

### Synthetic Click Suppression

Browsers generate synthetic click events for `role="button"` elements after Enter/Space keyup. Without suppression, RNGH's tap gesture captures these and fires `onPress` a second time — causing double-toggle.

Two mechanisms prevent this:

1. **`keyboardActive` SharedValue guard** — set to 1 on keydown, cleared after `requestAnimationFrame` on keyup. The tap gesture's `onEnd` checks this guard and skips `onPress` if active.
2. **`handleClick` suppression** — stops propagation of click events where `event.detail === 0` (keyboard-initiated clicks have detail 0; mouse clicks have detail >= 1).

---

## Spring Resolution

Spring configs are resolved via the centralized `useMotionConfig` hook and provided as SharedValues for use on both JS and UI threads:

```tsx
const motion = useMotionConfig(speed, scheme);

// In gesture callbacks / useEffect:
ePress.value = withSpring(1, motion.effects.value);
sPress.value = withSpring(1, motion.spatial.value);
```

`useMotionConfig` handles:

- Mapping the `speed` prop (`'fast'` / `'default'` / `'slow'`) to the correct spring keys
- Resolving the active motion scheme (expressive/standard) from the theme
- Reduced motion — spatial springs become near-instant snaps, effect springs become fast fades
- Re-resolving when `speed`, `scheme`, or reduced motion preference changes

This avoids reading nested theme properties inside worklets — Reanimated's JS/UI bridge may not serialize deeply nested objects correctly, causing `withSpring` to fall back to slow defaults.

---

## Accessibility

- Renders as a `View` with `accessible={true}` and `tabIndex={disabled ? -1 : 0}`
- Hit slop is applied to both the gesture detector and the native View (TalkBack uses View bounds, not gesture hitSlop)
- Disabled state sets `cursor: 'auto'` (web) and removes from tab order
- Web focus outline uses `transparent` (not `none`) — in forced-colors mode (Windows High Contrast), the system overrides `transparent` to the system highlight color, preserving a visible focus indicator. The M3 focus ring is rendered separately by ShapeContainer's animated outline.

---

## Exports

```tsx
// Components
export { Pressable };

// Context hook
export { useInteraction };

// Types
export type { PressableProps, InteractionProgress, InteractionSet, TapEvent, HoverEvent, LongPressEvent };
```

---

## Usage in Components

Components don't interact with Pressable's internals directly. They compose it as the outermost layer:

```tsx
<Pressable onPress={handlePress} speed="fast" disabled={disabled} hitSlop={hitSlop}>
  <ElevationContainer level={1} elevations={{ hover: 2 }}>
    <ShapeContainer shape="full" shapes={{ press: 'medium' }}>
      <StateLayer color="onPrimary" />
      <MyContent />
    </ShapeContainer>
  </ElevationContainer>
</Pressable>
```

The building blocks inside read interaction progress automatically via `useInteraction()` — no wiring needed.
