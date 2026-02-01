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
  9: "1.75rem", // 28px
  10: "2.5rem", // 40px
  11: "2.75rem", // 44px
  12: "3rem", // 48px
  14: "3.25rem", // 52px
  16: "3.75rem", // 60px
  18: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
} as const;

export const getSpacing = (pixels: number): string => {
  return `${pixels / 16}rem`;
};

export type Spacing = typeof spacing;
