import React from 'react';
import type { GestureResponderEvent, MouseEvent, NativeSyntheticEvent, TargetedEvent } from 'react-native';
import { type SharedValue, useSharedValue, withSpring } from 'react-native-reanimated';
import { UnistylesRuntime } from 'react-native-unistyles';

type InteractionKind = 'press' | 'hover' | 'focus';

type InteractionProgress = {
  press: SharedValue<number>;
  hover: SharedValue<number>;
  focus: SharedValue<number>;
  drag: SharedValue<number>;
};

type HandlersFor<T extends InteractionKind> = (T extends 'press'
  ? { onPressIn: (e: GestureResponderEvent) => void; onPressOut: (e: GestureResponderEvent) => void }
  : {}) &
  (T extends 'hover' ? { onHoverIn: (e: MouseEvent) => void; onHoverOut: (e: MouseEvent) => void } : {}) &
  (T extends 'focus'
    ? {
        onFocus: (e: NativeSyntheticEvent<TargetedEvent>) => void;
        onBlur: (e: NativeSyntheticEvent<TargetedEvent>) => void;
      }
    : {});

type Interaction<T extends InteractionKind> = {
  progress: InteractionProgress;
  handlers: HandlersFor<T>;
};

function useInteraction<T extends InteractionKind>(...kinds: T[]): Interaction<T> {
  const press = useSharedValue(0);
  const hover = useSharedValue(0);
  const focus = useSharedValue(0);
  const drag = useSharedValue(0);

  const handlers = React.useMemo(() => {
    const h: Record<string, (e: any) => void> = {};

    if (kinds.includes('press' as T)) {
      h.onPressIn = () => {
        const { spring } = UnistylesRuntime.getTheme().motion;
        press.value = withSpring(1, spring.fastSpatial);
      };
      h.onPressOut = () => {
        const { spring } = UnistylesRuntime.getTheme().motion;
        press.value = withSpring(0, spring.fastSpatial);
      };
    }

    if (kinds.includes('hover' as T)) {
      h.onHoverIn = () => {
        const { spring } = UnistylesRuntime.getTheme().motion;
        hover.value = withSpring(1, spring.fastEffects);
      };
      h.onHoverOut = () => {
        const { spring } = UnistylesRuntime.getTheme().motion;
        hover.value = withSpring(0, spring.fastEffects);
      };
    }

    if (kinds.includes('focus' as T)) {
      h.onFocus = () => {
        const { spring } = UnistylesRuntime.getTheme().motion;
        focus.value = withSpring(1, spring.fastEffects);
      };
      h.onBlur = () => {
        const { spring } = UnistylesRuntime.getTheme().motion;
        focus.value = withSpring(0, spring.fastEffects);
      };
    }

    return h as HandlersFor<T>;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { progress: { press, hover, focus, drag }, handlers };
}

export type { HandlersFor, Interaction, InteractionKind, InteractionProgress };
export { useInteraction };
