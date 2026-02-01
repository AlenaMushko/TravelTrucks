import { Box, Drawer, Typography, IconButton } from "@mui/material";

import type { FiltersState } from "@/store/types/filters";
import { type UkraineCity } from "@/utils/ukraineCities";
import { CloseIcon } from "@/shared/icons";
import { FilterContent } from "@/components";
import { spacing, colors, typography } from "@/styles/tokens";

interface FiltersDrawerProps {
  open: boolean;
  onClose: () => void;
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

const FiltersDrawer = ({
  open,
  onClose,
  localFilters,
  inputValue,
  selectedCity,
  onCityChange,
  onInputChange,
  onEquipmentFilterToggle,
  onTypeFilterToggle,
  onSearch,
}: FiltersDrawerProps) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: {
            xs: "100%",
            sm: "400px",
            md: "450px",
          },
          maxWidth: "90vw",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: spacing[4],
          borderBottom: `1px solid ${colors.border.default}`,
          flexShrink: 0,
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontWeight: typography.fontWeights.semibold,
          }}
        >
          Filters
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{
            color: colors.text.primary,
          }}
          aria-label="Close filters"
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FilterContent
          localFilters={localFilters}
          inputValue={inputValue}
          selectedCity={selectedCity}
          onCityChange={onCityChange}
          onInputChange={onInputChange}
          onEquipmentFilterToggle={onEquipmentFilterToggle}
          onTypeFilterToggle={onTypeFilterToggle}
          onSearch={onSearch}
        />
      </Box>
    </Drawer>
  );
};

export default FiltersDrawer;
