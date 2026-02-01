import {
  Box,
  Autocomplete,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";

import { LocationIcon } from "@/shared/icons";
import { ukraineCities, type UkraineCity } from "@/utils/ukraineCities";
import { spacing, colors, borderRadius, typography } from "@/styles/tokens";

interface LocationFilterProps {
  inputValue: string;
  selectedCity: UkraineCity | null;
  onCityChange: (
    _event: React.SyntheticEvent,
    newValue: UkraineCity | null,
  ) => void;
  onInputChange: (_event: React.SyntheticEvent, newInputValue: string) => void;
}

const LocationFilter = ({
  inputValue,
  selectedCity,
  onCityChange,
  onInputChange,
}: LocationFilterProps) => {
  return (
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
          fontSize: {
            xs: typography.h6.fontSize,
            md: typography.h6.fontSize,
          },
        }}
      >
        Location
      </Typography>
      <Box sx={{ marginTop: spacing[2] }}>
        <Autocomplete
          fullWidth
          options={ukraineCities}
          getOptionLabel={(option) => `${option.name}, Ukraine`}
          value={selectedCity}
          onChange={onCityChange}
          inputValue={inputValue}
          onInputChange={onInputChange}
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
                  height: {
                    xs: "48px",
                    md: "56px",
                  },
                  padding: {
                    xs: `${spacing[4]} ${spacing[5]}`,
                    md: `${spacing[5]} ${spacing[7]}`,
                  },
                  "& fieldset": {
                    border: "none",
                  },
                },
                "& .MuiInputBase-input": {
                  cursor: "pointer",
                  fontSize: {
                    xs: typography.fontSizes.base,
                    md: typography.h6.fontSize,
                  },
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
                  padding: {
                    xs: `${spacing[2]} ${spacing[3]}`,
                    md: `${spacing[2]} ${spacing[4]}`,
                  },
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{
                    color: colors.text.primary,
                    fontSize: {
                      xs: typography.fontSizes.base,
                      md: typography.h6.fontSize,
                    },
                  }}
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
  );
};

export default LocationFilter;
