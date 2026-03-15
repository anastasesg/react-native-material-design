# Context Factories & Shared Hooks

> Utilities that underpin the compound component pattern and state management.

Source: [`src/utilities/create-component-context.ts`](../../src/utilities/create-component-context.ts) · [`src/hooks/`](../../src/hooks/)

---

## Context Factories

Two factory functions create the context + hook pairs used by every compound component.

### createComponentContext (required)

Creates a context where the hook **throws** if used outside the provider. Use for sub-components that must have a parent.

```tsx
const [ButtonProvider, useButton] = createComponentContext<ButtonCtx>('Button');

// In Button:
<ButtonProvider value={ctx}>{children}</ButtonProvider>;

// In ButtonIcon (throws if used outside Button):
const { size, variant, disabled } = useButton();
```

Error message: `<Button> sub-component used outside of <Button>.`

### createOptionalComponentContext (optional)

Creates a context where the hook returns **null** when no provider is present. Use for building blocks that can work independently.

```tsx
const [InteractionProvider, useInteraction] = createOptionalComponentContext<InteractionProgress>('Interaction');

// In StateLayer (gracefully handles missing Pressable):
const progress = useInteraction();
if (!progress) return { backgroundColor: 'transparent', opacity: 0 };
```

### When to Use Which

| Scenario                                                | Factory             |
| ------------------------------------------------------- | ------------------- |
| Sub-component that only makes sense inside parent       | `create...`         |
| Building block that enhances but doesn't require parent | `createOptional...` |

Examples:

- `ButtonIcon` → required (meaningless outside Button) → `createComponentContext`
- `StateLayer` → optional (renders transparent without Pressable) → `createOptionalComponentContext`

---

## Shared Hooks

### useControllableState

Source: [`src/hooks/use-controllable-state.ts`](../../src/hooks/use-controllable-state.ts)

The core pattern for components that support both controlled and uncontrolled modes.

```tsx
function useControllableState<T>({
  value, // Controlled value (undefined = uncontrolled)
  defaultValue, // Initial value for uncontrolled mode
  onChange, // Called on every state change (both modes)
}): [T, (next: T | ((prev: T) => T)) => void];
```

**Behavior:**

- When `value` is `undefined` → manages internal state via `useState`, fires `onChange` on change
- When `value` is provided → acts as pass-through, only fires `onChange` (doesn't call `setState`)
- `setValue` has a **stable reference** (never changes) — avoids unnecessary re-renders in children
- Uses `Object.is` comparison to skip no-op updates

**Used by:** Button (toggle), Checkbox, RadioButton, Switch, Tabs, DatePicker, TimePicker, etc.

### useInteraction

Source: [`src/components/custom/pressable.tsx`](../../src/components/custom/pressable.tsx)

Reads `InteractionProgress` from the nearest Pressable context. Returns `null` outside a Pressable.

```tsx
const progress = useInteraction();
// progress.effects.press.value — effects spring (0–1)
// progress.spatial.hover.value — spatial spring (0–1)
```

Used by StateLayer, ShapeContainer, and ElevationContainer internally. Also available for custom components that need interaction-driven animation.

### usePresence

Source: [`src/hooks/use-presence.ts`](../../src/hooks/use-presence.ts)

Mount/unmount lifecycle hook. Tracks a boolean `present` state and defers unmount until exit animations complete.

```tsx
const { mounted, progress } = usePresence(isVisible);
// mounted = true while visible OR exit animation is running
// progress = SharedValue animating 0→1 (enter) or 1→0 (exit)

if (!mounted) return null;
// Use progress in useAnimatedStyle for enter/exit animations
```

**Used by:** Dialog, BottomSheet, Menu, Snackbar, Tooltip, FABMenu — any component with animated show/hide.

### useMotionConfig

Source: [`src/hooks/use-motion-config.ts`](../../src/hooks/use-motion-config.ts)

Centralized spring config resolution for all animations. Returns a pair of SharedValues containing the resolved spring configs for use with `withSpring` on either thread.

```tsx
const motion = useMotionConfig('fast', scheme);

// In useEffect, gesture callbacks, or anywhere:
value.value = withSpring(target, motion.effects.value); // opacity, color, elevation
value.value = withSpring(target, motion.spatial.value); // position, shape, scale
```

**Parameters:**

- `speed` — Element size bucket: `'fast'` (small controls), `'default'` (medium), `'slow'` (full-screen)
- `scheme` — Optional override for the active motion scheme (`'expressive'` | `'standard'`)

**Handles:**

- Mapping speed to the correct spring keys (`fastEffects`, `defaultSpatial`, etc.)
- Resolving the active motion scheme from the theme
- Reduced motion — spatial springs snap near-instantly, effect springs use faster fades
- Re-resolving when speed, scheme, or reduced motion preference changes

**Used by:** Pressable (interaction springs), ShapeContainer (rest shape transitions), Dialog, DatePicker, TimePicker, Snackbar, Search, Slider, Switch, TextField, NavigationDrawer, NavigationRail, SideSheet.
