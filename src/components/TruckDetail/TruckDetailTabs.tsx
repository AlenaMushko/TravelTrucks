import { Box } from "@mui/material";

import type { Camper } from "@/store/types";
import { FeaturesTab, ReviewsTab } from "@/components";

interface TruckDetailTabsProps {
  truck: Camper;
  value: number;
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
      {value === index && children}
    </div>
  );
};

const TruckDetailTabs: React.FC<TruckDetailTabsProps> = ({ truck, value }) => {
  return (
    <Box>
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
