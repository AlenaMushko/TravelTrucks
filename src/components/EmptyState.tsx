import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

import { colors } from "@/styles/tokens/colors";
import { spacing } from "@/styles/tokens/spacing";

interface EmptyStateProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  images?: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

const EmptyState = ({
  title = "No results found",
  description,
  imageSrc,
  images,
}: EmptyStateProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const getImage = () => {
    if (imageSrc) return imageSrc;
    if (images) {
      if (isMobile) return images.mobile;
      if (isTablet) return images.tablet;
      return images.desktop;
    }
    if (isMobile) return "/images/404_1x.jpg";
    if (isTablet) return "/images/404_2x.jpg";
    return "/images/404_3x.jpg";
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: spacing[10],
        textAlign: "center",
        gap: spacing[4],
      }}
    >
      <Box
        component="img"
        src={getImage()}
        alt={title}
        sx={{
          maxWidth: "100%",
          height: "auto",
          maxHeight: "400px",
          objectFit: "contain",
          borderRadius: 2,
          mb: spacing[2],
        }}
      />
      <Typography
        variant="h4"
        component="h2"
        sx={{
          color: colors.text.primary,
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          variant="body1"
          sx={{
            color: colors.text.secondary,
            maxWidth: "500px",
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default EmptyState;
