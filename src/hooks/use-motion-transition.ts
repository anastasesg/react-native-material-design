import { useEffect, useRef } from 'react';
import { type SharedValue, useSharedValue, withSpring } from 'react-native-reanimated';
import { UnistylesRuntime } from 'react-native-unistyles';

import type { MotionScheme } from '@/theme';

type MotionSpeed = 'fast' | 'default' | 'slow';

type MotionOptions = {
  /** Skip animating on first render (default: true) */
  skipInitial?: boolean;
  /** Override the active motion scheme for this animation */
  scheme?: MotionScheme;
  /** Callback when both springs settle */
  onComplete?: (finished?: boolean) => void;
};

type MotionTransitionResult = {
  spatial: SharedValue<number>;
  effects: SharedValue<number>;
};

function useMotionTransition(
  target: boolean | number,
  speed: MotionSpeed,
  options?: MotionOptions,
): MotionTransitionResult {
  const numericTarget = typeof target === 'boolean' ? (target ? 1 : 0) : target;
  const isFirstRender = useRef(true);
  const skipInitial = options?.skipInitial ?? true;

  const spatial = useSharedValue(numericTarget);
  const effects = useSharedValue(numericTarget);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (skipInitial) {
        spatial.value = numericTarget;
        effects.value = numericTarget;
        return;
      }
    }

    const { motion } = UnistylesRuntime.getTheme();
    const springSet = motion.springs[options?.scheme ?? motion.scheme];

    const spatialKey = `${speed}Spatial` as const;
    const effectsKey = `${speed}Effects` as const;

    spatial.value = withSpring(numericTarget, springSet[spatialKey]);
    effects.value = withSpring(numericTarget, springSet[effectsKey], options?.onComplete);
  }, [numericTarget, speed, options?.scheme]); // eslint-disable-line react-hooks/exhaustive-deps

  return { spatial, effects };
}

export type { MotionSpeed };
export { useMotionTransition };
