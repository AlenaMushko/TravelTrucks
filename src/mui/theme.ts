import { createTheme, type ThemeOptions } from "@mui/material/styles";
import { colors } from "@/styles/tokens/colors";
import { typography } from "@/styles/tokens/typography";
import { spacing } from "@/styles/tokens/spacing";
import { borderRadius } from "@/styles/tokens/borderRadius";
import { transitions } from "@/styles/tokens/transitions";

// Custom theme options
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
    borderRadius: 8, // 0.5rem = 8px //todo
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

  spacing: 4, // Base unit for MUI spacing (4px)

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
