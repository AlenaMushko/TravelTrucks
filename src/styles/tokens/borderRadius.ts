export const borderRadius = {
  none: "0",
  xs: "0.625rem", // 10px
  md: "0.75rem", // 12px
  lg: "1.25rem", // 20px
  xl: "1.25rem", // 20px
  btn: "12.5rem", //200px
} as const;

export type BorderRadius = typeof borderRadius;
