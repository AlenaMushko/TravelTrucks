import { Box, Typography, Avatar } from "@mui/material";

import type { Review } from "@/store/types";
import { StarIcon } from "@/shared/icons";
import { spacing, colors, typography } from "@/styles/tokens";

interface ReviewsTabProps {
  reviews: Review[];
}

const ReviewsTab: React.FC<ReviewsTabProps> = ({ reviews }) => {
  const getInitials = (name: string): string => {
    return name.charAt(0).toUpperCase();
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
          padding: spacing[6],
        }}
      >
        <Typography
          variant="h5"
          component="h5"
          sx={{
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
        display: "flex",
        flexDirection: "column",
        gap: spacing[11],
      }}
    >
      {reviews.map((review, index) => (
        <Box key={index}>
          <Box
            sx={{
              display: "flex",
              gap: spacing[4],
              alignItems: "center",
              mb: spacing[4],
            }}
          >
            <Avatar
              sx={{
                backgroundColor: colors.background.secondary,
                color: colors.accent.primary,
                width: spacing[16],
                height: spacing[16],
                fontSize: typography.fontSizes["2xl"],
                fontWeight: typography.fontWeights.semibold,
              }}
            >
              {getInitials(review.reviewer_name)}
            </Avatar>

            <Box
              sx={{ display: "flex", flexDirection: "column", gap: spacing[1] }}
            >
              <Typography variant="h5" component="h5">
                {review.reviewer_name}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: spacing[1],
                }}
              >
                {renderStars(review.reviewer_rating)}
              </Box>
            </Box>
          </Box>

          <Typography
            variant="h6"
            component="p"
            sx={{
              color: colors.text.secondary,
            }}
          >
            {review.comment}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ReviewsTab;
