import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";

import type { Camper } from "@/store/types";
import { TruckDetailTabs, BookingForm } from "@/components";
import { spacing, colors } from "@/styles/tokens";

interface TruckDetailContentProps {
  truck: Camper;
}

const TruckDetailContent: React.FC<TruckDetailContentProps> = ({ truck }) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: spacing[15] }}>
      <Box>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="truck details tabs"
          sx={{
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab
            label="Features"
            id="truck-tab-0"
            aria-controls="truck-tabpanel-0"
          />
          <Tab
            label="Reviews"
            id="truck-tab-1"
            aria-controls="truck-tabpanel-1"
          />
        </Tabs>

        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: colors.border.default,
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: spacing[10],
          "@media (min-width: 1100px)": {
            flexDirection: "row",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            "@media (min-width: 1100px)": {
              flex: 1,
              minWidth: 0,
            },
          }}
        >
          <TruckDetailTabs truck={truck} value={tabValue} />
        </Box>
        <Box
          sx={{
            width: "100%",
            "@media (min-width: 1100px)": {
              width: "641px",
              flexShrink: 0,
            },
          }}
        >
          <BookingForm />
        </Box>
      </Box>
    </Box>
  );
};

export default TruckDetailContent;
