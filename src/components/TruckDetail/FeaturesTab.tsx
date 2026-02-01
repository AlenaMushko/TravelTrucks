import { Box, Typography, Grid } from "@mui/material";

import type { Camper } from "@/store/types";
import { FeatureChip } from "@/shared/components";
import { getTruckFeatures } from "@/utils";
import { spacing, colors, borderRadius, typography } from "@/styles/tokens";

interface FeaturesTabProps {
  truck: Camper;
}

const FeaturesTab: React.FC<FeaturesTabProps> = ({ truck }) => {
  const features = getTruckFeatures(truck);

  return (
    <Box
      sx={{
        backgroundColor: colors.background.white,
        borderRadius: borderRadius.lg,
        padding: spacing[6],
        boxShadow: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
        display: "flex",
        flexDirection: "column",
        gap: spacing[6],
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: spacing[3],
        }}
      >
        {features.map((feature) => (
          <FeatureChip
            key={feature.key}
            label={feature.label}
            icon={feature.icon}
          />
        ))}
      </Box>

      <Box>
        <Typography
          variant="h4"
          component="h3"
          sx={{
            mb: spacing[4],
            fontWeight: typography.fontWeights.semibold,
            fontSize: typography.fontSizes.xl,
            lineHeight: typography.lineHeights.tight,
          }}
        >
          Vehicle details
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography
              variant="body2"
              sx={{
                color: colors.text.secondary,
                fontSize: typography.fontSizes.sm,
                lineHeight: typography.lineHeights.normal,
                mb: spacing[1],
              }}
            >
              Form
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: typography.fontWeights.medium,
                fontSize: typography.fontSizes.base,
                lineHeight: typography.lineHeights.normal,
              }}
            >
              {truck.form}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography
              variant="body2"
              sx={{
                color: colors.text.secondary,
                fontSize: typography.fontSizes.sm,
                lineHeight: typography.lineHeights.normal,
                mb: spacing[1],
              }}
            >
              Length
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: typography.fontWeights.medium,
                fontSize: typography.fontSizes.base,
                lineHeight: typography.lineHeights.normal,
              }}
            >
              {truck.length}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography
              variant="body2"
              sx={{
                color: colors.text.secondary,
                fontSize: typography.fontSizes.sm,
                lineHeight: typography.lineHeights.normal,
                mb: spacing[1],
              }}
            >
              Width
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: typography.fontWeights.medium,
                fontSize: typography.fontSizes.base,
                lineHeight: typography.lineHeights.normal,
              }}
            >
              {truck.width}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography
              variant="body2"
              sx={{
                color: colors.text.secondary,
                fontSize: typography.fontSizes.sm,
                lineHeight: typography.lineHeights.normal,
                mb: spacing[1],
              }}
            >
              Height
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: typography.fontWeights.medium,
                fontSize: typography.fontSizes.base,
                lineHeight: typography.lineHeights.normal,
              }}
            >
              {truck.height}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography
              variant="body2"
              sx={{
                color: colors.text.secondary,
                fontSize: typography.fontSizes.sm,
                lineHeight: typography.lineHeights.normal,
                mb: spacing[1],
              }}
            >
              Tank
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: typography.fontWeights.medium,
                fontSize: typography.fontSizes.base,
                lineHeight: typography.lineHeights.normal,
              }}
            >
              {truck.tank}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography
              variant="body2"
              sx={{
                color: colors.text.secondary,
                fontSize: typography.fontSizes.sm,
                lineHeight: typography.lineHeights.normal,
                mb: spacing[1],
              }}
            >
              Consumption
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: typography.fontWeights.medium,
                fontSize: typography.fontSizes.base,
                lineHeight: typography.lineHeights.normal,
              }}
            >
              {truck.consumption}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FeaturesTab;
