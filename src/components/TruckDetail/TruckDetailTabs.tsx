import { Box, Tabs, Tab } from "@mui/material";

import type { Camper } from "@/store/types";
import FeaturesTab from "./FeaturesTab";
import ReviewsTab from "./ReviewsTab";
import { spacing, colors, typography } from "@/styles/tokens";

interface TruckDetailTabsProps {
  truck: Camper;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = ({ children, value, index }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`truck-tabpanel-${index}`}
      aria-labelledby={`truck-tab-${index}`}
    >
      {value === index && <Box sx={{ pt: spacing[4] }}>{children}</Box>}
    </div>
  );
};

const TruckDetailTabs: React.FC<TruckDetailTabsProps> = ({
  truck,
  value,
  onChange,
}) => {
  return (
    <Box>
      <Box>
        <Tabs
          value={value}
          onChange={onChange}
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
            sx={{
              textTransform: "none",
              fontSize: typography.fontSizes.base,
              fontWeight:
                value === 0
                  ? typography.fontWeights.semibold
                  : typography.fontWeights.regular,
              color:
                value === 0 ? colors.text.primary : colors.text.secondary,
              minHeight: 48,
              position: "relative",
              "&.Mui-selected": {
                color: colors.text.primary,
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "3px",
                backgroundColor:
                  value === 0 ? colors.accent.primary : "transparent",
              },
            }}
          />
          <Tab
            label="Reviews"
            id="truck-tab-1"
            aria-controls="truck-tabpanel-1"
            sx={{
              textTransform: "none",
              fontSize: typography.fontSizes.base,
              fontWeight:
                value === 1
                  ? typography.fontWeights.semibold
                  : typography.fontWeights.regular,
              color:
                value === 1 ? colors.text.primary : colors.text.secondary,
              minHeight: 48,
              position: "relative",
              "&.Mui-selected": {
                color: colors.text.primary,
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "3px",
                backgroundColor:
                  value === 1 ? colors.accent.primary : "transparent",
              },
            }}
          />
        </Tabs>
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: colors.border.default,
            mt: -1,
          }}
        />
      </Box>

      <TabPanel value={value} index={0}>
        <FeaturesTab truck={truck} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <ReviewsTab reviews={truck.reviews || []} />
      </TabPanel>
    </Box>
  );
};

export default TruckDetailTabs;
