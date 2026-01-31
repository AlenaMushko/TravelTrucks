import { Box, Typography } from "@mui/material";

import type { FiltersState } from "@/store/types/filters";
import { Button } from "@/shared/components";
import type { UkraineCity } from "@/utils/ukraineCities";
import LocationFilter from "./LocationFilter";
import EquipmentFilters from "./EquipmentFilters";
import TypeFilters from "./TypeFilters";
import { spacing, typography } from "@/styles/tokens";

interface FilterContentProps {
  localFilters: FiltersState;
  inputValue: string;
  selectedCity: UkraineCity | null;
  onCityChange: (
    _event: React.SyntheticEvent,
    newValue: UkraineCity | null,
  ) => void;
  onInputChange: (_event: React.SyntheticEvent, newInputValue: string) => void;
  onEquipmentFilterToggle: (key: string) => void;
  onTypeFilterToggle: (key: string) => void;
  onSearch: () => void;
}

const FilterContent = ({
  localFilters,
  inputValue,
  selectedCity,
  onCityChange,
  onInputChange,
  onEquipmentFilterToggle,
  onTypeFilterToggle,
  onSearch,
}: FilterContentProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: spacing[4],
      }}
    >
      <LocationFilter
        inputValue={inputValue}
        selectedCity={selectedCity}
        onCityChange={onCityChange}
        onInputChange={onInputChange}
      />

      <Box
        sx={{
          mb: {
            xs: spacing[8],
            md: spacing[10],
          },
        }}
      >
        <Typography
          variant="h6"
          component="h3"
          sx={{
            mb: {
              xs: spacing[6],
              md: spacing[8],
            },
            fontSize: {
              xs: typography.h6.fontSize,
              md: typography.h6.fontSize,
            },
          }}
        >
          Filters
        </Typography>

        <EquipmentFilters
          localFilters={localFilters}
          onEquipmentFilterToggle={onEquipmentFilterToggle}
        />

        <TypeFilters
          localFilters={localFilters}
          onTypeFilterToggle={onTypeFilterToggle}
        />
      </Box>

      <Box
        sx={{
          mt: {
            xs: spacing[8],
            md: spacing[10],
          },
          mb: {
            xs: spacing[4],
            md: 0,
          },
        }}
      >
        <Button text="Search" onClick={onSearch} />
      </Box>
    </Box>
  );
};

export default FilterContent;
