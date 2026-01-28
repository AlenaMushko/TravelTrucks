export const typography = {
  fontFamily:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',

  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.6,
  },

  // Typography scale (for MUI theme mapping)
  h1: {
    fontSize: "3rem", // 48px
    fontWeight: 600,
    lineHeight: 0.67,
  },
  h2: {
    fontSize: "1.5rem", // 30px
    fontWeight: 600,
    lineHeight: 1.33,
  },
  h3: {
    fontSize: "1.5rem", // 24px
    fontWeight: 600,
    lineHeight: 1.33,
  },
  h4: {
    fontSize: "1.25rem", // 20px
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h5: {
    fontSize: "1rem", // 16px
    fontWeight: 500,
    lineHeight: 1.5,
  },
  h6: {
    fontSize: "1rem", // 16px
    fontWeight: 400,
    lineHeight: 1.5,
  },
} as const;

export type Typography = typeof typography;
