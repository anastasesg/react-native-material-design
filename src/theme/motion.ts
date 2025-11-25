export type EasingCurve = [number, number, number, number];

export type SpringConfig = {
  damping: number;
  stiffness: number;
};

export type Motion = {
  easing: {
    emphasized: EasingCurve;
    emphasizedDecelerate: EasingCurve;
    emphasizedAccelerate: EasingCurve;
    standard: EasingCurve;
    standardDecelerate: EasingCurve;
    standardAccelerate: EasingCurve;
  };
  duration: {
    short1: 50;
    short2: 100;
    short3: 150;
    short4: 200;
    medium1: 250;
    medium2: 300;
    medium3: 350;
    medium4: 400;
    long1: 450;
    long2: 500;
    long3: 550;
    long4: 600;
    extraLong1: 700;
    extraLong2: 800;
    extraLong3: 900;
    extraLong4: 1000;
  };
  spring: {
    fastSpatial: SpringConfig;
    fastEffects: SpringConfig;
    defaultSpatial: SpringConfig;
    defaultEffects: SpringConfig;
    slowSpatial: SpringConfig;
    slowEffects: SpringConfig;
  };
};
