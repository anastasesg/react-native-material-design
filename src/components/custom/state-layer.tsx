import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import { useAnimatedTheme } from 'react-native-unistyles/reanimated';

import type { Scheme } from '@/theme';

import { useInteraction } from './pressable';

type StateLayerProps = {
  /**
   * Theme color key for the state layer tint.
   * Should match the content color of the parent surface (e.g. 'onPrimary' for filled buttons).
   * @default 'onSurface'
   */
  color?: keyof Scheme;
  /** When true, renders a semi-transparent disabled overlay above the state layer. */
  disabled?: boolean;
  /**
   * Override the disabled container overlay opacity.
   * When omitted, uses `theme.state.disabledContainer` (0.12).
   * M3 buttons spec requires 0.1 instead of the system default.
   */
  disabledOpacity?: number;
  /** Additional style merged onto the state layer view. */
  style?: React.ComponentProps<typeof Animated.View>['style'];
};

/**
 * M3 State Layer — renders the interaction feedback overlay inside a {@link Pressable}.
 *
 * Reads interaction progress (press, hover, focus, drag) from the nearest
 * Pressable via context. When used outside a Pressable (no context), the
 * layer renders transparent — no error, no visual effect.
 *
 * The layer's opacity is the maximum of all active interaction opacities,
 * following M3's state layer priority model (drag > press > focus > hover).
 *
 * @example
 * ```tsx
 * <Pressable onPress={handlePress}>
 *   <Surface shape="full">
 *     <StateLayer color="onPrimary" />
 *     <ButtonLabel>Click me</ButtonLabel>
 *   </Surface>
 * </Pressable>
 * ```
 */
function StateLayer({ color = 'onSurface', disabled = false, disabledOpacity, style }: StateLayerProps) {
  const progress = useInteraction();
  const animatedTheme = useAnimatedTheme();

  const animatedStyle = useAnimatedStyle(() => {
    if (!progress) return { backgroundColor: 'transparent', opacity: 0 };

    const t = animatedTheme.value;
    const e = progress.effects;
    // M3 state opacities: dragged 0.16, pressed 0.10, focused 0.10, hovered 0.08
    // Each progress value (0–1) is multiplied by its state opacity, then max wins.
    const drag = e.drag.value * t.state.dragged;
    const press = e.press.value * t.state.pressed;
    const focus = e.focus.value * t.state.focus;
    const hover = e.hover.value * t.state.hover;
    return {
      backgroundColor: t.scheme[color],
      opacity: Math.max(drag, press, focus, hover),
    };
  });

  return (
    <>
      {disabled && <Animated.View pointerEvents="none" style={styles.disabledOverlay(disabledOpacity)} />}
      <Animated.View pointerEvents="none" style={[styles.layer, style, animatedStyle]} />
    </>
  );
}

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

export type { StateLayerProps };
export { StateLayer };
