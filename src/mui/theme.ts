import { createTheme, type ThemeOptions } from "@mui/material/styles";
import { colors } from "@/styles/tokens/colors";
import { typography } from "@/styles/tokens/typography";
import { spacing } from "@/styles/tokens/spacing";
import { borderRadius } from "@/styles/tokens/borderRadius";
import { transitions } from "@/styles/tokens/transitions";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: colors.primary,
      dark: colors.accent.primaryDark,
      contrastText: colors.background.white,
    },
    error: {
      main: colors.error,
    },
    warning: {
      main: colors.warning,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      disabled: colors.text.tertiary,
    },
    background: {
      default: colors.background.white,
      paper: colors.background.secondary,
    },
    divider: colors.border.default,
  },

  typography: {
    fontFamily: typography.fontFamily,
    h1: typography.h1,
    h2: typography.h2,
    h3: typography.h3,
    h4: typography.h4,
    h5: typography.h5,
    h6: typography.h6,
  },

  shape: {
    borderRadius: 8,
  },

  transitions: {
    duration: {
      shorter: 150,
      short: 200,
      standard: 300,
    },
    easing: {
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      easeOut: "cubic-bezier(0, 0, 0.2, 1)",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },

  spacing: 4,

  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: colors.text.primary,
          fontWeight: 500,
          fontSize: typography.fontSizes.base,
          lineHeight: typography.lineHeights.normal,
          transition: `color ${transitions.default}`,
          "&:hover": {
            color: colors.accent.primaryDark,
          },
          "&.active": {
            color: colors.accent.primaryDark,
            fontWeight: 600,
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: typography.fontSizes.xl,
          fontWeight: typography.fontWeights.semibold,
          color: colors.text.primary,
          position: "relative",
          paddingBottom: spacing[6],
          "&.Mui-selected": {
            color: colors.text.primary,
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "5px",
              backgroundColor: colors.accent.primary,
            },
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "5px",
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: colors.background.tertiary,
            borderRadius: borderRadius.md,
            "& fieldset": {
              border: "none",
            },
            "&:hover fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: "none",
            },
          },
          "& .MuiInputBase-input": {
            padding: `${spacing[5]} !important`,
            fontSize: typography.fontSizes.base,
            fontWeight: typography.fontWeights.regular,
            lineHeight: typography.lineHeights.normal,
            color: colors.text.primary,
            "&::placeholder": {
              color: colors.text.tertiary,
              opacity: 1,
            },
          },
          "& .MuiInputLabel-root": {
            color: colors.text.tertiary,
            "&.Mui-focused": {
              color: colors.text.tertiary,
            },
            "&.MuiInputLabel-shrink": {
              color: colors.text.tertiary,
            },
          },
          "& .MuiInputLabel-root.MuiInputLabel-shrink + .MuiInputBase-root .MuiInputBase-input":
            {
              color: colors.text.primary,
            },
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions);

theme.custom = {
  spacing,
  borderRadius,
  transitions,
};

declare module "@mui/material/styles" {
  interface Theme {
    custom?: {
      spacing: typeof spacing;
      borderRadius: typeof borderRadius;
      transitions: typeof transitions;
    };
  }
}
