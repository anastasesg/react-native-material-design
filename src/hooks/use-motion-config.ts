import { useEffect, useSyncExternalStore } from 'react';
import { useReducedMotion, useSharedValue } from 'react-native-reanimated';
import { UnistylesRuntime } from 'react-native-unistyles';

import type { Motion, MotionScheme, SpringConfig, SpringSet } from '@/theme';
import { getThemeSettings, subscribeThemeSettings } from '@/theme/settings';

// ---------------------------------------------------------------------------
// Cached motion — avoids synchronous Nitro bridge call on every render.
// Initialized once at module load; updated inside the useEffect when
// motionScheme or reducedMotion actually changes.
// ---------------------------------------------------------------------------

let cachedMotion: Motion = UnistylesRuntime.getTheme().motion;

/** Element size — determines spring speed. */
type MotionSpeed = 'fast' | 'default' | 'slow';

/** Shared-value pair for use with `withSpring` on either JS or UI thread. */
type MotionConfig = {
  effects: { value: SpringConfig };
  spatial: { value: SpringConfig };
  /** Whether the user has reduced motion enabled. */
  reducedMotion: boolean;
};

// ---------------------------------------------------------------------------
// Resolver — the single chokepoint for all spring config resolution.
// Reduced motion, scheme fallback, and any future policies live here.
// ---------------------------------------------------------------------------

const SPRING_KEY_MAP: Record<MotionSpeed, Record<'spatial' | 'effects', keyof SpringSet>> = {
  fast: { spatial: 'fastSpatial', effects: 'fastEffects' },
  default: { spatial: 'defaultSpatial', effects: 'defaultEffects' },
  slow: { spatial: 'slowSpatial', effects: 'slowEffects' },
};

/**
 * Resolve a spring config from theme motion data.
 *
 * @param motion - Theme motion object (read once by the caller, not per-call).
 */
function resolveSpring(
  motion: Motion,
  speed: MotionSpeed,
  kind: 'spatial' | 'effects',
  reducedMotion: boolean,
  scheme?: MotionScheme,
): SpringConfig {
  const s = scheme ?? motion.scheme;
  const config = motion.springs[s][SPRING_KEY_MAP[speed][kind]];

  if (!reducedMotion) return config;

  // M3 reduced motion: disable sliding/scaling/morphing, keep subtle fades.
  // Reanimated's `damping` is an absolute coefficient, not a ratio.
  // Critical damping = 2 * sqrt(mass * stiffness), mass defaults to 1.
  if (kind === 'spatial') {
    // Near-instant snap — very high stiffness, critically damped.
    const stiffness = 1e6;
    return { stiffness, damping: 2 * Math.sqrt(stiffness) };
  }
  // Effects: faster fades, critically damped (no overshoot).
  const stiffness = config.stiffness * 4;
  return { stiffness, damping: 2 * Math.sqrt(stiffness) };
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

/**
 * Pre-resolves M3 spring configs into shared values for use on either thread.
 *
 * This is the centralized animation config for the library. All components
 * that animate should use this hook rather than resolving springs directly.
 *
 * @param speed - Element size bucket: 'fast' (small controls), 'default' (medium), 'slow' (full-screen).
 * @param scheme - Override the active motion scheme for this component.
 */
function useMotionConfig(speed: MotionSpeed, scheme?: MotionScheme): MotionConfig {
  const deviceReducedMotion = useReducedMotion();
  // Subscribe to reducedMotion and motionScheme only — avoids re-renders on sourceColor/themeMode.
  const override = useSyncExternalStore(subscribeThemeSettings, () => getThemeSettings().reducedMotion);
  const motionScheme = useSyncExternalStore(subscribeThemeSettings, () => getThemeSettings().motionScheme);
  const reducedMotion = override === 'device' ? deviceReducedMotion : override;
  const effects = useSharedValue(resolveSpring(cachedMotion, speed, 'effects', reducedMotion, scheme));
  const spatial = useSharedValue(resolveSpring(cachedMotion, speed, 'spatial', reducedMotion, scheme));

  // Sync cached motion and shared values whenever deps change (including on mount).
  // The mount run is intentional: if the module-level cachedMotion was initialized
  // before unistyles setup, shared values from lines above may hold stale springs.
  useEffect(() => {
    cachedMotion = UnistylesRuntime.getTheme().motion;
    effects.value = resolveSpring(cachedMotion, speed, 'effects', reducedMotion, scheme);
    spatial.value = resolveSpring(cachedMotion, speed, 'spatial', reducedMotion, scheme);
  }, [effects, spatial, speed, scheme, reducedMotion, motionScheme]);

  return { effects, spatial, reducedMotion };
}

export type { MotionConfig, MotionSpeed };
export { resolveSpring, useMotionConfig };
