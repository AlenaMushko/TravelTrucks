const colorValues = {
  text: {
    primary: "#101828",
    secondary: "#475467",
    tertiary: "#6c717b",
  },

  accent: {
    primary: "#e44848",
    primaryDark: "#d84343",
    secondary: "#ffc531",
  },

  background: {
    white: "#ffffff",
    secondary: "#f2f4f7",
    tertiary: "#f7f7f7",
  },

  border: {
    default: "#dadde1",
  },
} as const;

export const colors = {
  ...colorValues,
  primary: colorValues.accent.primary,
  error: colorValues.accent.primaryDark,
  warning: colorValues.accent.secondary,
} as const;

export type Colors = typeof colors;
