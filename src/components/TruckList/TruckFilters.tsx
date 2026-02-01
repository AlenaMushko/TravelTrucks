import { useDispatch } from "react-redux";
import { useState, useMemo, useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";

import { setFilters } from "@/store/slices/catalogSlice";
import { useCatalog } from "@/hooks";
import type { AppDispatch } from "@/store";
import type { FiltersState } from "@/store/types/filters";
import { ukraineCities, type UkraineCity } from "@/utils/ukraineCities";
import {
  FilterContent,
  FiltersDrawer,
  FiltersButton,
} from "@/components";

const TruckFilters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filters: currentFilters } = useCatalog();
  const [inputValue, setInputValue] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1220px)");

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
    if (!isDesktop) {
      setDrawerOpen(false);
    }
  };

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  if (!isDesktop) {
    return (
      <>
        <FiltersButton onClick={handleOpenDrawer} />
        <FiltersDrawer
          open={drawerOpen}
          onClose={handleCloseDrawer}
          localFilters={localFilters}
          inputValue={inputValue}
          selectedCity={selectedCity}
          onCityChange={handleCityChange}
          onInputChange={handleInputChange}
          onEquipmentFilterToggle={handleEquipmentFilterToggle}
          onTypeFilterToggle={handleTypeFilterToggle}
          onSearch={handleSearch}
        />
      </>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        maxWidth: "360px",
        flexShrink: 1,
        minWidth: 0,
        "@media (min-width: 1440px)": {
          width: "360px",
          flexShrink: 0,
        },
      }}
    >
      <FilterContent
        localFilters={localFilters}
        inputValue={inputValue}
        selectedCity={selectedCity}
        onCityChange={handleCityChange}
        onInputChange={handleInputChange}
        onEquipmentFilterToggle={handleEquipmentFilterToggle}
        onTypeFilterToggle={handleTypeFilterToggle}
        onSearch={handleSearch}
      />
    </Box>
  );
};

export default TruckFilters;
