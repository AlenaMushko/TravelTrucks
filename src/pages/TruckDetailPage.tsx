import { Box, Snackbar, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useGetCamperByIdQuery } from "@/store/apis/camperAPI";
import { Section, Hero, TruckDetail } from "@/components";
import { GradientCircularProgress } from "@/shared/components";
import { ROUTES } from "@/constants";
import { spacing } from "@/styles/tokens";

function TruckDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    data: truck,
    isLoading,
    isError,
  } = useGetCamperByIdQuery({ id: id! }, { skip: !id });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    if (isError || (!isLoading && !truck)) {
      setOpenSnackbar(true);
    }
  }, [isError, isLoading, truck]);

  const handleCloseSnackbar = (
    _event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  if (isLoading) {
    return (
      <Section>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh",
            pt: spacing[12],
            pb: spacing[14],
          }}
        >
          <GradientCircularProgress />
        </Box>
      </Section>
    );
  }

  if (isError || !truck) {
    return (
      <>
        <Hero
          images={{
            mobile: "/images/truck_not_founded_1x.jpg",
            tablet: "/images/truck_not_founded_2x.jpg",
            desktop: "/images/truck_not_founded_3x.jpg",
          }}
          title="Truck Not Found"
          subtitle="The listing you're looking for may have been removed or is temporarily unavailable. Please try browsing other available trucks."
          buttonText="Browse Catalog"
          onButtonClick={() => navigate(ROUTES.CATALOG)}
          textAlign="center"
        />
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="error"
            sx={{ width: "100%" }}
          >
            Oops, an error occurred or there are no results for your request
          </Alert>
        </Snackbar>
      </>
    );
  }

  return (
    <Section>
      <TruckDetail truck={truck} />
    </Section>
  );
}

export default TruckDetailPage;
