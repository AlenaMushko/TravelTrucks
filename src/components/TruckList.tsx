import { Box, List } from "@mui/material";

import { useCatalog } from "@/hooks";
import Button from "@/shared/components/Button";
import { GradientCircularProgress } from "@/shared/components";
import type { Camper } from "@/store/types";
import { TruckCard, EmptyState } from "@/components";
import { spacing } from "@/styles/tokens";

const TruckList = () => {
  const { trucks, isLoading, isFetching, hasMore, onLoadMore } = useCatalog();

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <GradientCircularProgress />
    </Box>
  );
  }

  if (!trucks?.total && !trucks?.items?.length) {
    return (
      <EmptyState
        title="No trucks found"
        description="We couldn't find any trucks matching your criteria. Try adjusting your filters or check back later."
        images={{
          mobile: "/images/not_found_1x.jpg",
          tablet: "/images/not_found_2x.jpg",
          desktop: "/images/not_found_3x.jpg",
        }}
      />
    );
  }

  return (
    <Box>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          padding: 0,
        }}
      >
        {trucks?.items &&
          trucks?.items?.map((truck: Camper) => (
            <TruckCard key={truck.id} truck={truck} />
          ))}
      </List>

      {hasMore && (
        <Box sx={{ mt: spacing[10], textAlign: "center" }}>
          <Button
            text={isFetching ? "Loading..." : "Load More"}
            onClick={onLoadMore}
            disabled={isFetching}
            variant="outlined"
          />
        </Box>
      )}
    </Box>
  );
};

export default TruckList;
