export * from "./colors";
export * from "./typography";
export * from "./spacing";
export * from "./borderRadius";
export * from "./shadows";
export * from "./transitions";

import { colors } from "./colors";
import { typography } from "./typography";
import { spacing } from "./spacing";
import { borderRadius } from "./borderRadius";
import { shadows } from "./shadows";
import { transitions } from "./transitions";

export const tokens = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  transitions,
} as const;
