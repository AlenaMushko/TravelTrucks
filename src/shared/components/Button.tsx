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
        backgroundColor: colors.accent.primary,
        color: colors.background.white,
        padding: `${spacing[4]} ${spacing[16]}`,
        fontSize: typography.fontSizes.base,
        fontWeight: 500,
        borderRadius: borderRadius.btn,
        textTransform: "none",
        "&:hover": {
          backgroundColor: colors.accent.primaryDark,
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
