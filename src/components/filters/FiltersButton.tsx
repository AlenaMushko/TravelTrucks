import { Box, Button as MuiButton } from "@mui/material";

import { FilterIcon } from "@/shared/icons";
import { spacing, colors, borderRadius, typography } from "@/styles/tokens";

interface FiltersButtonProps {
  onClick: () => void;
}

const FiltersButton = ({ onClick }: FiltersButtonProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        mb: spacing[4],
      }}
    >
      <MuiButton
        variant="contained"
        onClick={onClick}
        startIcon={<FilterIcon />}
        sx={{
          backgroundColor: colors.accent.primary,
          color: colors.background.white,
          padding: `${spacing[4]} ${spacing[8]}`,
          fontSize: typography.fontSizes.base,
          fontWeight: 500,
          lineHeight: 1.5,
          borderRadius: borderRadius.btn,
          textTransform: "none",
          minWidth: "120px",
          height: {
            xs: "48px",
            md: "56px",
          },
          "&:hover": {
            backgroundColor: colors.accent.primaryDark,
          },
        }}
      >
        Filters
      </MuiButton>
    </Box>
  );
};

export default FiltersButton;
