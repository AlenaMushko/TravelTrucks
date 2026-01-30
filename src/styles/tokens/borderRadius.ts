export const borderRadius = {
  none: "0",
  // sm: "0.25rem", // 4px
  // base: "0.5rem", // 8px
  xs: "0.625rem", // 10px
  // md: "0.75rem", // 12px
  // lg: "1rem", // 16px
  lg: "1.25rem", // 20px
  // xl: "1.5rem", // 24px
  xl: "1.25rem", // 20px
  btn: "12.5rem", //200px
} as const;

export type BorderRadius = typeof borderRadius;
