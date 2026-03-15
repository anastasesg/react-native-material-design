import type { Breakpoints } from '@/theme';

/** M3 window size classes. */
export function buildBreakpoints(): Breakpoints {
  return {
    compact: 0,
    medium: 600,
    expanded: 840,
    large: 1200,
    xlarge: 1600,
  };
}
