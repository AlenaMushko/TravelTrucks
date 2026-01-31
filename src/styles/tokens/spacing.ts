export const spacing = {
  0: "0",
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  5: "1.125rem", // 18px
  6: "1.5rem", // 24px
  7: "1.25rem", // 20px
  8: "2rem", // 32px
  10: "2.5rem", // 40px
  12: "3rem", // 48px
  14: "3.25rem", // 52px
  16: "3.75rem", // 60px
  18: "4rem", // 64px
  24: "6rem", // 96px
} as const;

export const getSpacing = (multiplier: number): string => {
  if (multiplier === 0) return "0";

  if (multiplier in spacing) {
    return spacing[multiplier as keyof typeof spacing];
  }

  return `${multiplier * 0.25}rem`;
};

export type Spacing = typeof spacing;
