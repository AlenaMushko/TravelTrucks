import { LocationIcon, StarIcon } from "@/shared/icons";
import { Box, Typography } from "@mui/material";

import type { Camper } from "@/store/types";
import { Slider } from "@/shared/components";
import { TruckDetailContent } from "@/components";
import { spacing, colors } from "@/styles/tokens";

interface TruckDetailProps {
  truck: Camper;
}

const TruckDetail: React.FC<TruckDetailProps> = ({ truck }) => {
  const reviewsCount = truck.reviews?.length || 0;

  return (
    <Box
      sx={{
        pt: spacing[12],
        pb: spacing[20],
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        maxWidth: "1440px",
        mx: "auto",
      }}
    >
      <Typography variant="h3" component="h1" sx={{ mb: spacing[2] }}>
        {truck.name}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: spacing[4],
          minWidth: 0,
          width: "100%",
          overflow: "hidden",
          mb: spacing[4],
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: spacing[1],
          }}
        >
          <StarIcon sx={{ color: colors.accent.secondary }} />
          <Typography
            variant="h6"
            component="h3"
            sx={{ textDecoration: "underline" }}
          >
            {truck.rating.toFixed(1)} ({reviewsCount} Reviews)
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: spacing[1],
          }}
        >
          <LocationIcon sx={{ color: colors.text.primary }} />
          <Typography variant="h6" component="h3">
            {truck.location}
          </Typography>
        </Box>
      </Box>

      <Typography variant="h3" component="h1" sx={{ mb: spacing[9] }}>
        €{truck.price.toFixed(2)}
      </Typography>

      <Slider images={truck.gallery} alt={truck.name} />

      <Typography
        variant="h6"
        component="h4"
        sx={{
          color: colors.text.secondary,
          mb: spacing[16],
        }}
      >
        {truck.description}
      </Typography>

      <TruckDetailContent truck={truck} />
    </Box>
  );
};

export default TruckDetail;
