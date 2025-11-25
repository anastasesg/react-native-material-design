import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import { useAnimatedTheme } from 'react-native-unistyles/reanimated';

import type { Scheme } from '@/theme/scheme';

import type { InteractionProgress } from '../../hooks';

type StateLayerProps = {
  /** Interaction progress values from useInteraction(). */
  progress: InteractionProgress;
  /** Scheme color key for the state layer. Defaults to 'onSurface'. */
  color?: keyof Scheme;
  /** Show disabled overlay. */
  disabled?: boolean;
  /** Additional style for the state layer. */
  style?: React.ComponentProps<typeof Animated.View>['style'];
};

function StateLayer({ progress, color = 'onSurface', disabled = false, style }: StateLayerProps) {
  const animatedTheme = useAnimatedTheme();

  const animatedStyle = useAnimatedStyle(() => {
    const t = animatedTheme.value;
    const drag = progress.drag.value * t.state.dragged;
    const press = progress.press.value * t.state.pressed;
    const focus = progress.focus.value * t.state.focus;
    const hover = progress.hover.value * t.state.hover;
    return {
      backgroundColor: t.scheme[color],
      opacity: Math.max(drag, press, focus, hover),
    };
  });

  return (
    <>
      {disabled && <Animated.View pointerEvents="none" style={styles.disabledOverlay} />}
      <Animated.View pointerEvents="none" style={[styles.layer, style, animatedStyle]} />
    </>
  );
}

const styles = StyleSheet.create((theme) => ({
  disabledOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.scheme.onSurface,
    opacity: theme.state.disabledContainer,
  },
  layer: {
    ...StyleSheet.absoluteFillObject,
  },
}));

export type { StateLayerProps };
export { StateLayer };
