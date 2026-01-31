import {
  Button as MuiButton,
  type ButtonProps as MuiButtonProps,
} from "@mui/material";

import { colors, typography, spacing, borderRadius } from "@/styles/tokens";

interface CustomButtonProps extends Omit<MuiButtonProps, "children"> {
  text: string;
  variant?: "contained" | "outlined" | "text";
  sx?: MuiButtonProps["sx"];
}

const Button = ({
  text,
  variant = "contained",
  sx,
  ...props
}: CustomButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      sx={{
        backgroundColor:
          variant === "contained" ? colors.accent.primary : "transparent",
        color:
          variant === "contained"
            ? colors.background.white
            : colors.text.primary,
        padding: `${spacing[4]} ${spacing[16]}`,
        fontSize: typography.fontSizes.base,
        fontWeight: 500,
        lineHeight: 1.5,
        borderRadius: borderRadius.btn,
        border:
          variant === "outlined"
            ? `1px solid ${colors.border.default}`
            : "none",
        textTransform: "none",
        width: "auto",
        "&:hover": {
          backgroundColor:
            variant === "contained" ? colors.accent.primaryDark : "transparent",
          border:
            variant === "outlined"
              ? `1px solid ${colors.accent.primaryDark}`
              : "none",
        },
        ...sx,
      }}
      {...props}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
