import { useEffect, useRef, useState } from 'react';
import { type SharedValue, useSharedValue, withSpring } from 'react-native-reanimated';
import { UnistylesRuntime } from 'react-native-unistyles';
import { scheduleOnRN } from 'react-native-worklets';

import type { MotionScheme } from '@/theme';

type MotionSpeed = 'fast' | 'default' | 'slow';

type PresenceOptions = {
  /** Override the active motion scheme for this animation */
  scheme?: MotionScheme;
  /** Callback after exit animation finishes and mounted becomes false */
  onExitComplete?: () => void;
};

type PresenceTransitionResult = {
  mounted: boolean;
  spatial: SharedValue<number>;
  effects: SharedValue<number>;
};

function usePresenceTransition(open: boolean, speed: MotionSpeed, options?: PresenceOptions): PresenceTransitionResult {
  const [mounted, setMounted] = useState(open);
  const isFirstRender = useRef(true);
  const spatial = useSharedValue(open ? 1 : 0);
  const effects = useSharedValue(open ? 1 : 0);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const spatialKey = `${speed}Spatial` as const;
    const effectsKey = `${speed}Effects` as const;

    if (open) {
      setMounted(true);
      const { motion } = UnistylesRuntime.getTheme();
      const springSet = motion.springs[options?.scheme ?? motion.scheme];
      spatial.value = withSpring(1, springSet[spatialKey]);
      effects.value = withSpring(1, springSet[effectsKey]);
    } else {
      // On close: fade only — spatial stays at 1, reset to 0 after unmount
      const { motion } = UnistylesRuntime.getTheme();
      const springSet = motion.springs[options?.scheme ?? motion.scheme];
      effects.value = withSpring(0, springSet[effectsKey], (finished) => {
        'worklet';
        if (finished) {
          spatial.value = 0;
          scheduleOnRN(setMounted, false);
          if (options?.onExitComplete) {
            scheduleOnRN(options.onExitComplete);
          }
        }
      });
    }
  }, [open, speed, options?.scheme]); // eslint-disable-line react-hooks/exhaustive-deps

  return { mounted, spatial, effects };
}

export { usePresenceTransition };
