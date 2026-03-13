import { useEffect, useRef } from 'react';
import { type SharedValue, useSharedValue, withSpring } from 'react-native-reanimated';
import { UnistylesRuntime } from 'react-native-unistyles';

import type { MotionScheme, SpringSet } from '@/theme';

type SpringType = keyof SpringSet;

type MotionOptions = {
  /** Skip animating on first render (default: true) */
  skipInitial?: boolean;
  /** Override the active motion scheme for this animation */
  scheme?: MotionScheme;
  /** Callback when spring settles */
  onComplete?: (finished?: boolean) => void;
};

function useMotionValue(
  target: boolean | number,
  springType: SpringType,
  options?: MotionOptions,
): SharedValue<number> {
  const numericTarget = typeof target === 'boolean' ? (target ? 1 : 0) : target;
  const isFirstRender = useRef(true);
  const skipInitial = options?.skipInitial ?? true;

  const value = useSharedValue(numericTarget);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (skipInitial) {
        value.value = numericTarget;
        return;
      }
    }

    const { motion } = UnistylesRuntime.getTheme();
    const config = motion.springs[options?.scheme ?? motion.scheme][springType];

    value.value = withSpring(numericTarget, config, options?.onComplete);
  }, [numericTarget, springType, options?.scheme]); // eslint-disable-line react-hooks/exhaustive-deps

  return value;
}

export type { MotionOptions, SpringType };
export { useMotionValue };
