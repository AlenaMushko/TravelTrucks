import React from "react";
import { Box, Typography, type BoxProps } from "@mui/material";

import { borderRadius, colors, spacing, typography } from "@/styles/tokens";

interface FilterChipProps extends Omit<BoxProps, "children"> {
  label: string;
  icon: React.ReactElement;
}

const FilterChip = ({
  label,
  icon,
  sx,
  onClick,
  ...props
}: FilterChipProps) => {
  const iconWithSize = React.cloneElement(icon, {
    width: 32,
    height: 32,
    color: colors.text.secondary,
  });

  return (
    <Box
      onClick={onClick}
      sx={[
        {
          backgroundColor: `${colors.background.white}`,
          borderRadius: borderRadius.md,
          border: `1px solid ${colors.border.default}`,
          borderColor: colors.border.default,
          color: colors.text.primary,
          padding: `${spacing[4]} ${spacing[3]}`,
          fontWeight: typography.fontWeights.medium,
          fontSize: typography.fontSizes.base,
          height: 96,
          width: 112,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: spacing[2],
          cursor: onClick ? "pointer" : "default",
          transition: "all 0.2s ease",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {iconWithSize}
      <Typography
        sx={{
          padding: 0,
          height: "auto",
          whiteSpace: "normal",
          textAlign: "center",
          wordWrap: "break-word",
          overflowWrap: "break-word",
          fontWeight: typography.fontWeights.medium,
          fontSize: typography.fontSizes.base,
          color: colors.text.primary,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default FilterChip;
