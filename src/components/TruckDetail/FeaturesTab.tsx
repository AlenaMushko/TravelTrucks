import { Box, Typography, ListItem, List } from "@mui/material";

import type { Camper } from "@/store/types";
import { FeatureChip } from "@/shared/components";
import { getTruckFeatures } from "@/utils";
import { spacing, colors, borderRadius } from "@/styles/tokens";

interface FeaturesTabProps {
  truck: Camper;
}

const FeaturesTab: React.FC<FeaturesTabProps> = ({ truck }) => {
  const features = getTruckFeatures(truck);

  const featuresData = [
    truck.form && { label: "Form", value: truck.form },
    truck.length && { label: "Length", value: truck.length },
    truck.width && { label: "Width", value: truck.width },
    truck.height && { label: "Height", value: truck.height },
    truck.tank && { label: "Tank", value: truck.tank },
    truck.consumption && { label: "Consumption", value: truck.consumption },
  ].filter((item): item is { label: string; value: string } => Boolean(item));

  return (
    <Box
      sx={{
        py: spacing[11],
        px: spacing[20],
        backgroundColor: colors.background.quaternary,
        borderRadius: borderRadius.xs,
        display: "flex",
        flexDirection: "column",
        gap: spacing[26],
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: spacing[2],
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
            mb: spacing[6],
          }}
        >
          Vehicle details
        </Typography>

        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: colors.border.default,
            mb: spacing[6],
          }}
        />

        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: spacing[4],
          }}
        >
          {featuresData.map((item) => (
            <ListItem
              key={item.label}
              sx={{ display: "flex", justifyContent: "space-between", p: 0 }}
            >
              <Typography component="span" variant="h5">
                {item.label}
              </Typography>
              <Typography component="span" variant="h5">
                {item.value}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default FeaturesTab;
