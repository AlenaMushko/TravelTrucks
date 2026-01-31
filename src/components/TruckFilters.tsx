import { useDispatch } from "react-redux";
import { useState, useMemo, useEffect } from "react";

import { setFilters } from "@/store/slices/catalogSlice";
import { useCatalog } from "@/hooks";
import type { AppDispatch } from "@/store";
import type { FiltersState } from "@/store/types/filters";
import { getEquipmentFilter, getTypeFilter } from "@/utils";
import {
  Box,
  Autocomplete,
  TextField,
  Typography,
  InputAdornment,
  Divider,
} from "@mui/material";
import { spacing, colors, borderRadius, typography } from "@/styles/tokens";
import { FilterChip, Button } from "@/shared/components";
import { LocationIcon } from "@/shared/icons";
import { ukraineCities, type UkraineCity } from "@/utils/ukraineCities";

const TruckFilters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filters: currentFilters } = useCatalog();
  const [inputValue, setInputValue] = useState("");

  const [localFilters, setLocalFilters] = useState<FiltersState>({
    location: currentFilters.location,
    AC: currentFilters.AC,
    automatic: currentFilters.automatic,
    kitchen: currentFilters.kitchen,
    TV: currentFilters.TV,
    bathroom: currentFilters.bathroom,
    van: currentFilters.van,
    fullyIntegrated: currentFilters.fullyIntegrated,
    alcove: currentFilters.alcove,
  });

  const typeFilters = getTypeFilter();
  const equipmentFilters = getEquipmentFilter();

  const selectedCity = useMemo(() => {
    if (!localFilters.location) return null;
    return (
      ukraineCities.find((city) => city.name === localFilters.location) || null
    );
  }, [localFilters.location]);

  useEffect(() => {
    if (selectedCity) {
      setInputValue(`${selectedCity.name}, Ukraine`);
    } else if (!localFilters.location) {
      setInputValue("");
    }
  }, [selectedCity, localFilters.location]);

  const handleCityChange = (
    _event: React.SyntheticEvent,
    newValue: UkraineCity | null,
  ) => {
    setLocalFilters((prev) => ({
      ...prev,
      location: newValue?.name || "",
    }));
  };

  const handleInputChange = (
    _event: React.SyntheticEvent,
    newInputValue: string,
  ) => {
    setInputValue(newInputValue);
  };

  const handleEquipmentFilterToggle = (key: string) => {
    if (key in localFilters) {
      setLocalFilters((prev) => ({
        ...prev,
        [key]: !prev[key as keyof FiltersState],
      }));
    }
  };

  const handleTypeFilterToggle = (key: string) => {
    setLocalFilters((prev) => {
      const isCurrentlySelected = prev[key as keyof FiltersState] as boolean;
      return {
        ...prev,
        van: key === "van" ? !isCurrentlySelected : false,
        fullyIntegrated:
          key === "fullyIntegrated" ? !isCurrentlySelected : false,
        alcove: key === "alcove" ? !isCurrentlySelected : false,
      };
    });
  };

  const handleSearch = () => {
    dispatch(setFilters(localFilters));
  };

  return (
    <Box sx={{ width: "360px", flexShrink: 0 }}>
      <Box sx={{ mb: spacing[10] }}>
        <Typography variant="h6" component="h3">
          Location
        </Typography>
        <Box sx={{ marginTop: spacing[2] }}>
          <Autocomplete
            fullWidth
            options={ukraineCities}
            getOptionLabel={(option) => `${option.name}, Ukraine`}
            value={selectedCity}
            onChange={handleCityChange}
            inputValue={inputValue}
            onInputChange={handleInputChange}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="City"
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <>
                      <InputAdornment position="start">
                        <LocationIcon sx={{ color: colors.text.primary }} />
                      </InputAdornment>
                      {params.InputProps.startAdornment}
                    </>
                  ),
                }}
                sx={{
                  cursor: "pointer",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: borderRadius.md,
                    backgroundColor: colors.background.tertiary,
                    cursor: "pointer",
                    height: "56px",
                    padding: `${spacing[5]} ${spacing[7]}`,
                    "& fieldset": {
                      border: "none",
                    },
                  },
                  "& .MuiInputBase-input": {
                    cursor: "pointer",
                    fontSize: typography.h6.fontSize,
                    fontWeight: typography.h6.fontWeight,
                    lineHeight: typography.h6.lineHeight,
                  },
                }}
              />
            )}
            renderOption={(props, option) => {
              const { key, ...otherProps } = props;
              return (
                <Box
                  key={key}
                  component="li"
                  {...otherProps}
                  sx={{
                    padding: `${spacing[2]} ${spacing[4]}`,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{ color: colors.text.primary }}
                  >
                    {option.name}
                  </Typography>
                </Box>
              );
            }}
            slotProps={{
              paper: {
                sx: {
                  marginTop: spacing[2],
                },
              },
            }}
            sx={{
              "& .MuiAutocomplete-popupIndicator": {
                color: colors.text.primary,
              },
            }}
          />
        </Box>
      </Box>

      <Box sx={{ mb: spacing[10] }}>
        <Typography variant="h6" component="h3" sx={{ mb: spacing[8] }}>
          Filters
        </Typography>

        <Box sx={{ mb: spacing[8] }}>
          <Typography variant="h4" component="h4">
            Vehicle equipment
          </Typography>
          <Divider sx={{ my: spacing[6] }} />
          {equipmentFilters.length > 0 && (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: spacing[3],
              }}
            >
              {equipmentFilters.map((feature) => {
                const isSelected = localFilters[
                  feature.key as keyof FiltersState
                ] as boolean;
                return (
                  <FilterChip
                    key={feature.key}
                    icon={feature.icon}
                    label={feature.label}
                    onClick={() => handleEquipmentFilterToggle(feature.key)}
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

        <Box sx={{ mb: spacing[8] }}>
          <Typography variant="h4" component="h4">
            Vehicle type
          </Typography>
          <Divider sx={{ my: spacing[6] }} />
          {typeFilters.length > 0 && (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: spacing[3],
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
                    onClick={() => handleTypeFilterToggle(feature.key)}
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
      </Box>

      <Box sx={{ mt: spacing[10] }}>
        <Button
          text="Search"
          onClick={handleSearch}
          sx={{
            width: "100%",
            height: "56px",
          }}
        />
      </Box>
    </Box>
  );
};

export default TruckFilters;
