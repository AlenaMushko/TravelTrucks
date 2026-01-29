import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

import { Button } from "@/shared/components";
import { colors } from "@/styles/tokens/colors";
import { spacing } from "@/styles/tokens/spacing";

interface HeroImages {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface HeroProps {
  images: HeroImages;
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const Hero = ({
  images,
  title,
  subtitle,
  buttonText,
  onButtonClick,
}: HeroProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const getBackgroundImage = () => {
    if (isMobile) {
      return images.mobile;
    }
    if (isTablet) {
      return images.tablet;
    }
    return images.desktop;
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 72px)",
        minHeight: "600px",
        backgroundColor: "#00000033",
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${getBackgroundImage()})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        px: spacing[16],
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            color: colors.background.tertiary,
            mb: spacing[4],
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h2"
          component="h3"
          sx={{
            color: colors.background.tertiary,
            mb: spacing[10],
          }}
        >
          {subtitle}
        </Typography>
        <Button text={buttonText} onClick={onButtonClick} />
      </Box>
    </Box>
  );
};

export default Hero;
