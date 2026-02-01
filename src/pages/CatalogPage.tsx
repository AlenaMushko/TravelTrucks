import { Box, Snackbar, Alert } from "@mui/material";
import { useState, useEffect } from "react";

import { Section, TruckList, TruckFilters } from "@/components";
import { useCatalog } from "@/hooks";
import { spacing } from "@/styles/tokens";

const CatalogPage = () => {
  const { isError } = useCatalog();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    if (isError) {
      setOpenSnackbar(true);
    }
  }, [isError]);

  const handleCloseSnackbar = (
    _event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Section>
      <h1 className="visually-hidden">Travel Trucks</h1>

      <Box
        sx={{
          pt: spacing[12],
          pb: spacing[14],
          display: "flex",
          flexDirection: "column",
          gap: spacing[10],
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          "@media (min-width: 1220px)": {
            flexDirection: "row",
            gap: spacing[8],
            justifyContent: "center",
          },
          "@media (min-width: 1440px)": {
            gap: spacing[18],
          },
        }}
      >
        <TruckFilters />
        <TruckList />
      </Box>

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
    </Section>
  );
};

export default CatalogPage;
