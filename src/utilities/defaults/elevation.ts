import type { Elevation } from '@/theme';

export function buildElevation(): Elevation {
  return {
    0: { elevation: 0, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0, shadowRadius: 0 },
    1: { elevation: 1, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.15, shadowRadius: 2 },
    2: { elevation: 3, shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, shadowRadius: 4 },
    3: { elevation: 6, shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.15, shadowRadius: 10 },
    4: { elevation: 8, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.15, shadowRadius: 13 },
    5: { elevation: 12, shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.15, shadowRadius: 18 },
  };
}
