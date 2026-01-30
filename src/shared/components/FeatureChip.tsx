import React from "react";
import { Chip, type ChipProps } from "@mui/material";

import { borderRadius, colors, spacing, typography } from "@/styles/tokens";

interface FeatureChipProps extends Omit<ChipProps, "icon" | "label"> {
  label: string;
  icon: React.ReactElement;
}

const FeatureChip = ({ label, icon, sx, ...props }: FeatureChipProps) => {
  const iconWithSize = React.cloneElement(icon, {
    width: 20,
    height: 20,
  });

  return (
    <Chip
      icon={iconWithSize}
      label={label}
      variant="outlined"
      size="small"
      sx={{
        backgroundColor: colors.background.secondary,
        borderRadius: borderRadius.xl,
        borderColor: colors.background.secondary,
        color: colors.text.primary,
        padding: `${spacing[3]} ${spacing[5]} !important`,
        fontWeight: typography.fontWeights.medium,
        fontSize: typography.fontSizes.base,
        height: 48,

        "& .MuiChip-label": {
          padding: 0,
          height: 20,
        },

        "& .MuiChip-icon": {
          color: colors.text.secondary,
          marginRight: spacing[2],
          marginLeft: 0,
          width: 20,
          height: 20,
          fontSize: 20,
        },
        ...sx,
      }}
      {...props}
    />
  );
};

export default FeatureChip;
