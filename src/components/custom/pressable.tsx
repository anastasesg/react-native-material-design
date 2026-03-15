import React, { useMemo } from 'react';
import type { Insets, NativeSyntheticEvent, StyleProp, TargetedEvent, ViewProps, ViewStyle } from 'react-native';
import { View } from 'react-native';
import type {
  ComposedGesture,
  GestureStateChangeEvent,
  GestureType,
  LongPressGestureHandlerEventPayload,
  TapGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { type SharedValue, useSharedValue, withSpring } from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
import { scheduleOnRN } from 'react-native-worklets';

import type { MotionScheme, SpringSet, Theme } from '@/theme';
import { createOptionalComponentContext } from '@/utilities';

// ---------------------------------------------------------------------------
// Event types — re-exported for consumers
// ---------------------------------------------------------------------------

/** Tap gesture state change event (press, pressIn, pressOut). */
type TapEvent = GestureStateChangeEvent<TapGestureHandlerEventPayload>;

/** Hover gesture state change event (hoverIn, hoverOut). */
type HoverEvent = GestureStateChangeEvent<{ x: number; y: number; absoluteX: number; absoluteY: number }>;

/** Long press gesture state change event. */
type LongPressEvent = GestureStateChangeEvent<LongPressGestureHandlerEventPayload>;

// ---------------------------------------------------------------------------
// Interaction context
// ---------------------------------------------------------------------------

/** A set of spring-animated progress values (0–1) for each interaction state. */
type InteractionSet = {
  press: SharedValue<number>;
  hover: SharedValue<number>;
  focus: SharedValue<number>;
  drag: SharedValue<number>;
};

/**
 * Spring-animated progress values for each interaction state, split by spring type.
 *
 * - `effects` — driven by effects springs (no overshoot). Use for opacity, color,
 *   elevation, and other visual effects.
 * - `spatial` — driven by spatial springs (allows overshoot). Use for shape morphing,
 *   position, and other physical/spatial properties.
 *
 * Read by child components via {@link useInteraction}.
 */
type InteractionProgress = {
  effects: InteractionSet;
  spatial: InteractionSet;
};

const [InteractionProvider, useInteraction] = createOptionalComponentContext<InteractionProgress>('Interaction');

// ---------------------------------------------------------------------------
// Spring key helpers
// ---------------------------------------------------------------------------

/** Controls which speed tier of springs to use for interaction animations. */
type MotionSpeed = 'fast' | 'default' | 'slow';

/** Maps (speed, kind) to the corresponding spring key on SpringSet. */
function springKey(speed: MotionSpeed, kind: 'effects' | 'spatial'): keyof SpringSet {
  if (speed === 'fast') return kind === 'effects' ? 'fastEffects' : 'fastSpatial';
  if (speed === 'slow') return kind === 'effects' ? 'slowEffects' : 'slowSpatial';
  return kind === 'effects' ? 'defaultEffects' : 'defaultSpatial';
}

/** Resolves the spring config for a given speed tier and kind (effects/spatial). */
function resolveSpring(theme: Theme, speed: MotionSpeed, kind: 'effects' | 'spatial', scheme?: MotionScheme) {
  const s = scheme ?? theme.motion.scheme;
  return theme.motion.springs[s][springKey(speed, kind)];
}

// ---------------------------------------------------------------------------
// PressableProps
// ---------------------------------------------------------------------------

type PressableProps = Omit<ViewProps, 'style' | 'hitSlop'> & {
  ref?: React.Ref<React.ComponentRef<typeof View>>;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;

  /** Called when a tap gesture completes successfully. */
  onPress?: (e: TapEvent) => void;
  /** Called when a touch begins (finger down). */
  onPressIn?: (e: TapEvent) => void;
  /** Called when a touch ends or is cancelled (finger up). */
  onPressOut?: (e: TapEvent) => void;
  /** Called when a long press gesture is recognized. */
  onLongPress?: (e: LongPressEvent) => void;

  /** Called when a pointer enters the view bounds (web/desktop). */
  onHoverIn?: (e: HoverEvent) => void;
  /** Called when a pointer leaves the view bounds (web/desktop). */
  onHoverOut?: (e: HoverEvent) => void;

  /** Called when the view receives focus (keyboard/screen reader). */
  onFocus?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  /** Called when the view loses focus. */
  onBlur?: (e: NativeSyntheticEvent<TargetedEvent>) => void;

  /** Disables all gestures and interaction state tracking. */
  disabled?: boolean;
  /** Extends the touchable area beyond the view bounds. Accepts a number for uniform padding. */
  hitSlop?: Insets | number;
  /** Secondary contextual description announced after the accessibility label by screen readers. */
  accessibilityHint?: string;
  /** Minimum press duration (ms) before `onLongPress` fires. Default: 500 */
  delayLongPress?: number;

  /** Enable built-in drag state tracking via Pan gesture. Default: false */
  draggable?: boolean;

  /**
   * Spring speed tier for interaction animations (press, hover, focus, drag).
   * Maps to the effects spring at this speed: `fastEffects`, `defaultEffects`, or `slowEffects`.
   * @default 'default'
   */
  speed?: MotionSpeed;

  /**
   * Override the active motion scheme for this Pressable's interaction springs.
   * When omitted, uses the theme's active scheme (`expressive` or `standard`).
   */
  scheme?: MotionScheme;

  /**
   * Additional gesture composed simultaneously with the built-in gestures.
   * Use this to add Pan, Pinch, or custom gestures while keeping press/hover/focus behavior.
   *
   * @example
   * ```tsx
   * const swipe = Gesture.Pan().onEnd(() => { ... });
   * <Pressable gesture={swipe} onPress={handlePress}>
   * ```
   */
  gesture?: GestureType;
};

// ---------------------------------------------------------------------------
// Pressable component
// ---------------------------------------------------------------------------

/**
 * Custom Pressable built on React Native Gesture Handler.
 *
 * Replaces RN's Pressable with a gesture-driven state machine that tracks
 * press, hover, focus, and drag interactions as spring-animated SharedValues.
 * Interaction progress is provided to children via React context — child
 * components like {@link StateLayer} and {@link ShapeContainer} read it
 * automatically without prop drilling.
 *
 * ## Architecture
 *
 * All touch/hover gestures run on the UI thread via RNGH. Spring animations
 * fire directly in gesture callbacks (zero JS bridge crossings, zero React
 * re-renders for interaction state). Focus/blur use RN's native events on the
 * JS thread since RNGH has no focus gesture.
 *
 * ## Gesture composition
 *
 * Built-in gestures (tap, long press, hover, drag) are composed internally.
 * Pass an additional `gesture` prop to compose consumer gestures simultaneously.
 *
 * @example
 * ```tsx
 * <Pressable onPress={handlePress} speed="fast" scheme="expressive">
 *   <ShapeContainer shape="full" shapes={{ press: 'medium' }}>
 *     <StateLayer color="onPrimary" />
 *     <ButtonLabel>Click me</ButtonLabel>
 *   </ShapeContainer>
 * </Pressable>
 * ```
 */
function Pressable({
  ref,
  children,
  style,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  onHoverIn,
  onHoverOut,
  onFocus,
  onBlur,
  disabled = false,
  hitSlop,
  delayLongPress,
  draggable = false,
  speed = 'default',
  scheme,
  gesture: externalGesture,
  ...viewProps
}: PressableProps) {
  styles.useVariants({ disabled });

  // Effects springs — for opacity, color, elevation (no overshoot)
  const ePress = useSharedValue(0);
  const eHover = useSharedValue(0);
  const eFocus = useSharedValue(0);
  const eDrag = useSharedValue(0);

  // Spatial springs — for shape morphing, position (allows overshoot)
  const sPress = useSharedValue(0);
  const sHover = useSharedValue(0);
  const sFocus = useSharedValue(0);
  const sDrag = useSharedValue(0);

  // Guard to prevent double-firing onPress from both keyboard handler and gesture.
  // Browsers generate synthetic click events for role="button" elements on Enter/Space,
  // which RNGH's tap gesture captures. The keyboard handler sets this flag so the
  // gesture can skip the duplicate onPress call.
  const keyboardActive = useSharedValue(0);

  // Resolve spring configs on JS thread (reliable) and share with UI thread worklets.
  // Reading nested theme properties via useAnimatedTheme() inside worklets may not
  // serialize correctly across the JS/UI bridge, causing withSpring to use slow defaults.
  const initTheme = UnistylesRuntime.getTheme();
  const effectsConfig = useSharedValue(resolveSpring(initTheme, speed, 'effects', scheme));
  const spatialConfig = useSharedValue(resolveSpring(initTheme, speed, 'spatial', scheme));
  // Sync shared values when speed/scheme changes — done in useEffect to avoid
  // writing to .value during render (Reanimated strict mode violation).
  // Deps use only the primitive props (not the theme object, which is a fresh reference
  // every render from UnistylesRuntime.getTheme()). Theme changes are rare and handled
  // by unistyles' own reactivity — the spring configs only depend on speed/scheme.
  React.useEffect(() => {
    const theme = UnistylesRuntime.getTheme();
    effectsConfig.value = resolveSpring(theme, speed, 'effects', scheme);
    spatialConfig.value = resolveSpring(theme, speed, 'spatial', scheme);
  }, [effectsConfig, spatialConfig, speed, scheme]);

  // Normalize hitSlop to Insets once — used by both gesture handlers and the native View
  // (TalkBack uses View bounds, not gesture hitSlop)
  const hitSlopInsets: Insets | undefined =
    typeof hitSlop === 'number' ? { top: hitSlop, right: hitSlop, bottom: hitSlop, left: hitSlop } : hitSlop;

  // --- Tap gesture ---
  // onBegin: finger down → press springs to 1
  // onEnd: successful tap → fires onPress callback
  // onFinalize: any completion → press springs to 0
  const tap = Gesture.Tap()
    .enabled(!disabled)
    .hitSlop(hitSlopInsets ?? 0)
    .onBegin((e) => {
      'worklet';
      ePress.value = withSpring(1, effectsConfig.value);
      sPress.value = withSpring(1, spatialConfig.value);
      if (onPressIn) scheduleOnRN(onPressIn, e);
    })
    .onEnd((e) => {
      'worklet';
      // Skip if keyboard handler already fired onPress (prevents double-toggle)
      if (keyboardActive.value > 0) return;
      if (onPress) scheduleOnRN(onPress, e);
    })
    .onFinalize((e) => {
      'worklet';
      ePress.value = withSpring(0, effectsConfig.value);
      sPress.value = withSpring(0, spatialConfig.value);
      if (onPressOut) scheduleOnRN(onPressOut, e);
    });

  // --- Long press gesture ---
  // Takes priority over tap via Gesture.Exclusive(longPress, tap)
  const longPress = Gesture.LongPress()
    .enabled(!disabled && !!onLongPress)
    .minDuration(delayLongPress ?? 500)
    .onStart((e) => {
      'worklet';
      if (onLongPress) scheduleOnRN(onLongPress, e);
    });

  // --- Hover gesture ---
  // Tracks pointer enter/leave for web and desktop platforms
  const hoverGesture = Gesture.Hover()
    .enabled(!disabled)
    .onBegin((e) => {
      'worklet';
      eHover.value = withSpring(1, effectsConfig.value);
      sHover.value = withSpring(1, spatialConfig.value);
      if (onHoverIn) scheduleOnRN(onHoverIn, e);
    })
    .onFinalize((e) => {
      'worklet';
      eHover.value = withSpring(0, effectsConfig.value);
      sHover.value = withSpring(0, spatialConfig.value);
      if (onHoverOut) scheduleOnRN(onHoverOut, e);
    });

  // --- Drag gesture (opt-in) ---
  // Only tracks drag state (0/1) for state layer opacity.
  // Does not move the view — consumers handle translation via the `gesture` prop.
  const dragGesture = Gesture.Pan()
    .enabled(!disabled && draggable)
    .onStart(() => {
      'worklet';
      eDrag.value = withSpring(1, effectsConfig.value);
      sDrag.value = withSpring(1, spatialConfig.value);
    })
    .onFinalize(() => {
      'worklet';
      eDrag.value = withSpring(0, effectsConfig.value);
      sDrag.value = withSpring(0, spatialConfig.value);
    });

  // --- Compose gestures ---
  // Only include gestures that are actually needed to avoid RNGH recognition latency.
  // Disabled gestures in Simultaneous/Exclusive trees can still add processing overhead.
  let pressGesture: GestureType | ComposedGesture = tap;
  if (onLongPress) {
    pressGesture = Gesture.Exclusive(longPress, tap);
  }

  const parts: (GestureType | ComposedGesture)[] = [pressGesture, hoverGesture];
  if (draggable) parts.push(dragGesture);
  if (externalGesture) parts.push(externalGesture);

  const composed = parts.length === 1 ? parts[0]! : Gesture.Simultaneous(...(parts as [GestureType, ...GestureType[]]));

  // --- Focus / blur (JS thread — no RNGH equivalent) ---
  const handleFocus = React.useCallback((e: NativeSyntheticEvent<TargetedEvent>) => {
    // Skip focus animation if caused by pointer (press/hover active = pointer-triggered focus)
    if (ePress.value > 0.1 || eHover.value > 0.1) {
      onFocus?.(e);
      return;
    }
    eFocus.value = withSpring(1, effectsConfig.value);
    sFocus.value = withSpring(1, spatialConfig.value);
    onFocus?.(e);
  }, [eFocus, ePress, eHover, sFocus, onFocus, effectsConfig, spatialConfig]);

  const handleBlur = React.useCallback((e: NativeSyntheticEvent<TargetedEvent>) => {
    eFocus.value = withSpring(0, effectsConfig.value);
    sFocus.value = withSpring(0, spatialConfig.value);
    onBlur?.(e);
  }, [eFocus, sFocus, onBlur, effectsConfig, spatialConfig]);

  const progress = useMemo<InteractionProgress>(
    () => ({
      effects: { press: ePress, hover: eHover, focus: eFocus, drag: eDrag },
      spatial: { press: sPress, hover: sHover, focus: sFocus, drag: sDrag },
    }),
    [ePress, eHover, eFocus, eDrag, sPress, sHover, sFocus, sDrag],
  );

  // Web keyboard activation — mirrors the touch gesture pattern:
  // keyDown (non-repeat) → press animation starts (like gesture onBegin)
  // keyUp → press animation ends + fires callbacks (like gesture onEnd + onFinalize)
  // This avoids unreliable withSpring completion callbacks and prevents double-firing
  // from synthetic click events that browsers generate after Enter/Space keyup.
  const handleKeyDown = React.useCallback((e: any) => {
    if (disabled) return;
    const key = e.key ?? e.nativeEvent?.key;
    if (key === ' ' || key === 'Enter') {
      e.preventDefault?.();
      if (!e.repeat) {
        keyboardActive.value = 1;
        ePress.value = withSpring(1, effectsConfig.value);
        sPress.value = withSpring(1, spatialConfig.value);
        if (onPressIn) onPressIn({} as TapEvent);
      }
    }
  }, [disabled, keyboardActive, ePress, sPress, effectsConfig, spatialConfig, onPressIn]);

  const handleKeyUp = React.useCallback((e: any) => {
    if (disabled) return;
    const key = e.key ?? e.nativeEvent?.key;
    if (key === ' ' || key === 'Enter') {
      // Fire onPress first (matches gesture onEnd → onFinalize order)
      onPress?.({} as TapEvent);
      // Then release press animation (matches gesture onFinalize)
      ePress.value = withSpring(0, effectsConfig.value);
      sPress.value = withSpring(0, spatialConfig.value);
      if (onPressOut) onPressOut({} as TapEvent);
      // Clear keyboard guard after the synthetic click would have fired.
      // requestAnimationFrame ensures the guard is still active when the browser
      // dispatches the synthetic click event (which RNGH's tap gesture would capture).
      requestAnimationFrame(() => {
        keyboardActive.value = 0;
      });
    }
  }, [disabled, onPress, onPressOut, keyboardActive, ePress, sPress, effectsConfig, spatialConfig]);

  // Suppress synthetic click events generated by the browser after Enter/Space keyup
  // on role="button" elements. Without this, RNGH's tap gesture captures the synthetic
  // click and fires onPress a second time — causing double-toggle (cancels out).
  // event.detail === 0 identifies keyboard-initiated clicks (mouse clicks have detail >= 1).
  const handleClick = React.useCallback((e: any) => {
    if (e.detail === 0 || e.nativeEvent?.detail === 0) {
      e.stopPropagation();
    }
  }, []);

  return (
    <GestureDetector gesture={composed}>
      <View
        ref={ref}
        accessible
        tabIndex={disabled ? -1 : 0}
        hitSlop={hitSlopInsets}
        onFocus={handleFocus}
        onBlur={handleBlur}
        // Web-only event handlers — exist on react-native-web but not in RN types
        {...({ onClick: handleClick, onKeyDown: handleKeyDown, onKeyUp: handleKeyUp } as any)}
        style={[styles.root, style]}
        {...viewProps}
      >
        <InteractionProvider value={progress}>{children}</InteractionProvider>
      </View>
    </GestureDetector>
  );
}

Pressable.displayName = 'Pressable';

const styles = StyleSheet.create({
  root: {
    cursor: 'pointer',
    _web: {
      _focus: {
        // Use transparent instead of 'none' — in forced-colors mode (Windows High Contrast),
        // the system overrides transparent to the system highlight color, preserving a visible
        // focus indicator. The M3 focus ring is rendered by ShapeContainer's animated outline.
        outline: '2px solid transparent',
      },
    },
    variants: {
      disabled: {
        true: { cursor: 'auto' },
        false: {},
      },
    },
  },
});

export type { HoverEvent, InteractionProgress, InteractionSet, LongPressEvent, MotionSpeed, PressableProps, TapEvent };
export { Pressable, useInteraction };
