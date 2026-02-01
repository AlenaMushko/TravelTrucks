import { Box, type BoxProps } from "@mui/material";
import { spacing } from "@/styles/tokens/spacing";

import { colors } from "@/styles/tokens/colors";

interface SectionProps {
  sx?: BoxProps["sx"];
  children: React.ReactNode;
}

const Section = ({ children, sx }: SectionProps) => {
  return (
    <Box
      component="section"
      sx={{
        px: spacing[16],
        backgroundColor: colors.background.white,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Section;
