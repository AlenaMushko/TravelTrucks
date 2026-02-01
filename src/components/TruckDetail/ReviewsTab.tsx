import { Box, Typography, Avatar } from "@mui/material";

import type { Review } from "@/store/types";
import { StarIcon } from "@/shared/icons";
import { spacing, colors, borderRadius, typography } from "@/styles/tokens";

interface ReviewsTabProps {
  reviews: Review[];
}

const ReviewsTab: React.FC<ReviewsTabProps> = ({ reviews }) => {
  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon
        key={index}
        sx={{
          color:
            index < rating
              ? colors.accent.secondary
              : colors.background.secondary,
          width: 16,
          height: 16,
        }}
      />
    ));
  };

  if (reviews.length === 0) {
    return (
      <Box
        sx={{
          backgroundColor: colors.background.white,
          borderRadius: borderRadius.lg,
          padding: spacing[6],
          boxShadow: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: colors.text.secondary,
            textAlign: "center",
          }}
        >
          No reviews yet. Be the first to review!
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: colors.background.white,
        borderRadius: borderRadius.lg,
        padding: spacing[6],
        boxShadow: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
        display: "flex",
        flexDirection: "column",
        gap: spacing[6],
      }}
    >
      {reviews.map((review, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            gap: spacing[4],
            "&:not(:last-child)": {
              paddingBottom: spacing[6],
              borderBottom: `1px solid ${colors.border.default}`,
            },
          }}
        >
          <Avatar
            sx={{
              backgroundColor: colors.background.secondary,
              color: colors.accent.primary,
              width: 60,
              height: 60,
              fontSize: typography.fontSizes.xl,
              fontWeight: typography.fontWeights.semibold,
            }}
          >
            {getInitials(review.reviewer_name)}
          </Avatar>

          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              component="h4"
              sx={{
                mb: spacing[2],
                fontWeight: typography.fontWeights.semibold,
                fontSize: typography.fontSizes.base,
                lineHeight: typography.lineHeights.tight,
              }}
            >
              {review.reviewer_name}
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: spacing[1],
                mb: spacing[2],
              }}
            >
              {renderStars(review.reviewer_rating)}
            </Box>

            <Typography
              variant="body1"
              sx={{
                color: colors.text.primary,
                fontSize: typography.fontSizes.base,
                lineHeight: typography.lineHeights.normal,
              }}
            >
              {review.comment}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ReviewsTab;
