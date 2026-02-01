import { Box, Typography, Divider } from "@mui/material";

import type { FiltersState } from "@/store/types/filters";
import { getTypeFilter } from "@/utils";
import { FilterChip } from "@/shared/components";
import { spacing, colors, typography } from "@/styles/tokens";

interface TypeFiltersProps {
  localFilters: FiltersState;
  onTypeFilterToggle: (key: string) => void;
}

const TypeFilters = ({
  localFilters,
  onTypeFilterToggle,
}: TypeFiltersProps) => {
  const typeFilters = getTypeFilter();

  return (
    <Box
      sx={{
        mb: {
          xs: spacing[6],
          md: spacing[8],
        },
      }}
    >
      <Typography
        variant="h4"
        component="h4"
        sx={{
          fontSize: {
            xs: typography.h5.fontSize,
            md: typography.h4.fontSize,
          },
        }}
      >
        Vehicle type
      </Typography>
      <Divider
        sx={{
          my: {
            xs: spacing[4],
            md: spacing[6],
          },
        }}
      />
      {typeFilters.length > 0 && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: {
              xs: spacing[2],
              md: spacing[3],
            },
            "@media (min-width: 1440px)": {
              justifyContent: "flex-start",
            },
          }}
        >
          {typeFilters.map((feature) => {
            const isSelected = localFilters[
              feature.key as keyof FiltersState
            ] as boolean;
            return (
              <FilterChip
                key={feature.key}
                icon={feature.icon}
                label={feature.label}
                onClick={() => onTypeFilterToggle(feature.key)}
                sx={{
                  border: isSelected
                    ? `1px solid ${colors.accent.primary} !important`
                    : `1px solid ${colors.border.default} !important`,
                  backgroundColor: `${colors.background.white} !important`,
                  "&:hover": {
                    backgroundColor: `${colors.background.secondary} !important`,
                    border: `1px solid ${colors.accent.primary} !important`,
                  },
                }}
              />
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default TypeFilters;
