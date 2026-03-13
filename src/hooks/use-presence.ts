import { useEffect, useRef, useState } from 'react';
import { type SharedValue, useSharedValue, withSpring } from 'react-native-reanimated';
import { UnistylesRuntime } from 'react-native-unistyles';
import { scheduleOnRN } from 'react-native-worklets';

import type { MotionScheme, SpringSet } from '@/theme';

type SpringType = keyof SpringSet;

type PresenceOptions = {
  /** Override the active motion scheme for this animation */
  scheme?: MotionScheme;
  /** Callback after exit animation finishes and mounted becomes false */
  onExitComplete?: () => void;
};

type PresenceResult = {
  mounted: boolean;
  value: SharedValue<number>;
};

function usePresence(open: boolean, springType: SpringType, options?: PresenceOptions): PresenceResult {
  const [mounted, setMounted] = useState(open);
  const isFirstRender = useRef(true);
  const value = useSharedValue(open ? 1 : 0);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (open) {
      setMounted(true);
      const { motion } = UnistylesRuntime.getTheme();
      const config = motion.springs[options?.scheme ?? motion.scheme][springType];
      value.value = withSpring(1, config);
    } else {
      const { motion } = UnistylesRuntime.getTheme();
      const config = motion.springs[options?.scheme ?? motion.scheme][springType];
      value.value = withSpring(0, config, (finished) => {
        'worklet';
        if (finished) {
          scheduleOnRN(setMounted, false);
          if (options?.onExitComplete) {
            scheduleOnRN(options.onExitComplete);
          }
        }
      });
    }
  }, [open, springType, options?.scheme]); // eslint-disable-line react-hooks/exhaustive-deps

  return { mounted, value };
}

export type { PresenceOptions };
export { usePresence };
