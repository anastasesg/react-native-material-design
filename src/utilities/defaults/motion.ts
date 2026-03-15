import type { Motion, MotionScheme, SpringSet } from '@/theme';

function buildSprings(): { expressive: SpringSet; standard: SpringSet } {
  return {
    expressive: {
      fastSpatial: { damping: 33.9, stiffness: 800 },
      fastEffects: { damping: 123.3, stiffness: 3800 },
      defaultSpatial: { damping: 31.2, stiffness: 380 },
      defaultEffects: { damping: 80, stiffness: 1600 },
      slowSpatial: { damping: 22.6, stiffness: 200 },
      slowEffects: { damping: 56.6, stiffness: 800 },
    },
    standard: {
      fastSpatial: { damping: 67.3, stiffness: 1400 },
      fastEffects: { damping: 123.3, stiffness: 3800 },
      defaultSpatial: { damping: 47.6, stiffness: 700 },
      defaultEffects: { damping: 80, stiffness: 1600 },
      slowSpatial: { damping: 31.2, stiffness: 300 },
      slowEffects: { damping: 56.6, stiffness: 800 },
    },
  };
}

export function buildMotion(motionScheme: MotionScheme): Motion {
  const springs = buildSprings();
  return {
    scheme: motionScheme,
    spring: springs[motionScheme],
    springs,
    easing: {
      emphasized: [0.2, 0, 0, 1],
      emphasizedDecelerate: [0.05, 0.7, 0.1, 1],
      emphasizedAccelerate: [0.3, 0, 0.8, 0.15],
      standard: [0.2, 0, 0, 1],
      standardDecelerate: [0, 0, 0, 1],
      standardAccelerate: [0.3, 0, 1, 1],
      legacy: [0.4, 0, 0.2, 1],
      legacyAccelerate: [0.4, 0, 1, 1],
      legacyDecelerate: [0, 0, 0.2, 1],
      linear: [0, 0, 1, 1],
    },
    duration: {
      short1: 50,
      short2: 100,
      short3: 150,
      short4: 200,
      medium1: 250,
      medium2: 300,
      medium3: 350,
      medium4: 400,
      long1: 450,
      long2: 500,
      long3: 550,
      long4: 600,
      extraLong1: 700,
      extraLong2: 800,
      extraLong3: 900,
      extraLong4: 1000,
    },
  };
}
