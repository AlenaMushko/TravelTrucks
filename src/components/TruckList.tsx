import { List } from "@mui/material";

import { useCatalog } from "@/hooks";
import Button from "@/shared/components/Button";
import { GradientCircularProgress } from "@/shared/components";
import type { Camper } from "@/store/types";
import { TruckCard } from "@/components";

const TruckList = () => {
  const { trucks, isLoading, isFetching, hasMore, onLoadMore } = useCatalog();

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <GradientCircularProgress />
      </div>
    );
  }

  console.log({ trucks });
  console.log({ isFetching });
  console.log({ hasMore });

  if (!trucks?.total && !trucks?.items?.length) {
    return <div>No trucks found</div>;
  }

  return (
    <>
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
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Button
            text={isFetching ? "Loading..." : "Load More"}
            onClick={onLoadMore}
            disabled={isFetching}
          />
        </div>
      )}
    </>
  );
};

export default TruckList;
