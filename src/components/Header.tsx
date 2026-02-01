import { NavLink } from "react-router-dom";
import { Box, Link as MuiLink } from "@mui/material";

import LogoIcon from "@/shared/icons/LogoIcon";
import Section from "../shared/components/Section";
import { ROUTES } from "@/constants";
import { colors } from "@/styles/tokens/colors";
import { spacing } from "@/styles/tokens/spacing";

const Header = () => {
  return (
    <Section sx={{ backgroundColor: colors.background.secondary }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: spacing[6],
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute", left: 0, top: spacing[6] }}>
          <LogoIcon width={136} height={16} />
        </Box>

        <Box
          component="nav"
          sx={{
            display: "flex",
            gap: spacing[8],
          }}
        >
          <MuiLink component={NavLink} to={ROUTES.HOME}>
            Home
          </MuiLink>
          <MuiLink component={NavLink} to={ROUTES.CATALOG}>
            Catalog
          </MuiLink>
        </Box>
      </Box>
    </Section>
  );
};

export default Header;
