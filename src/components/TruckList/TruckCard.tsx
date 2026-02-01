import { ListItem, Box, Typography, IconButton } from "@mui/material";
import React from "react";

import type { Camper } from "@/store/types";
import { Button, FeatureChip } from "@/shared/components";
import { LikeIcon, LocationIcon, StarIcon } from "@/shared/icons";
import { useFavorite } from "@/hooks";
import { ROUTES } from "@/constants";
import { getTruckFeatures } from "@/utils";
import { spacing, colors, borderRadius } from "@/styles/tokens";

interface TruckCardProps {
  truck: Camper;
}

const TruckCard: React.FC<TruckCardProps> = ({ truck }) => {
  const imagesCard = truck.gallery?.[0];
  const reviewsCount = truck.reviews?.length || 0;
  const { isFavorite, toggleFavorite } = useFavorite(truck.id);

  const handleShowMore = () => {
    const url = `${window.location.origin}${ROUTES.TRUCK_DETAILS.replace(":id", truck.id)}`;
    window.open(url, "_blank");
  };

  const activeFeatures = getTruckFeatures(truck);

  return (
    <ListItem
      component="li"
      sx={{
        padding: spacing[6],
        border: `1px solid ${colors.border.default}`,
        borderRadius: borderRadius.lg,
        backgroundColor: colors.background.white,
        flexDirection: {
          xs: "column",
          md: "row",
        },
        gap: spacing[6],
        alignItems: {
          xs: "stretch",
          md: "flex-start",
        },
        maxWidth: {
          xs: "100%",
          sm: "100%",
          md: "888px",
        },
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: {
            xs: "100%",
            md: 292,
          },
          minWidth: {
            xs: "100%",
            md: 292,
          },
          flexShrink: 0,
        }}
        height={320}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: {
              xs: "auto",
              md: 320,
            },
          }}
        >
          {!!imagesCard ? (
            <Box
              component="img"
              src={imagesCard.original || imagesCard.thumb}
              alt={truck.name}
              loading="lazy"
              sx={{
                width: "100%",
                height: {
                  xs: "auto",
                  md: "100%",
                },
                objectFit: "cover",
                borderRadius: borderRadius.xs,
              }}
            />
          ) : (
            <Box
              component="img"
              src="/images/ravel_truck_card.png"
              alt={truck.name}
              loading="lazy"
              sx={{
                width: "100%",
                height: {
                  xs: "auto",
                  md: "100%",
                },
                objectFit: "cover",
                borderRadius: borderRadius.xs,
              }}
            />
          )}
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: spacing[6],
          width: "100%",
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: spacing[2],
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: spacing[2],
              minWidth: 0,
              width: "100%",
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                minWidth: 0,
                flex: 1,
              }}
            >
              {truck.name}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: spacing[2],
                flexShrink: 0,
              }}
            >
              <Typography variant="h3" component="h2">
                €{truck.price.toFixed(2)}
              </Typography>
              <IconButton
                onClick={toggleFavorite}
                sx={{
                  padding: spacing[1],
                }}
                aria-label="add to favorites"
              >
                <LikeIcon
                  sx={{
                    color: isFavorite
                      ? colors.accent.primary
                      : colors.text.secondary,
                    "&:hover": {
                      color: isFavorite
                        ? colors.text.primary
                        : colors.accent.primary,
                    },
                  }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: spacing[4],
              minWidth: 0,
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: spacing[1],
              }}
            >
              <StarIcon sx={{ color: colors.accent.secondary }} />
              <Typography
                variant="h6"
                component="h3"
                sx={{ textDecoration: "underline" }}
              >
                {truck.rating.toFixed(1)} ({reviewsCount} Reviews)
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: spacing[1],
              }}
            >
              <LocationIcon sx={{ color: colors.text.primary }} />
              <Typography variant="h6" component="h3">
                {truck.location}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            minWidth: 0,
            overflow: "hidden",
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            component="h4"
            sx={{
              color: colors.text.secondary,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "100%",
            }}
          >
            {truck.description}
          </Typography>
        </Box>

        {activeFeatures.length > 0 && (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: spacing[2],
              maxHeight: "104px",
              overflow: "hidden",
            }}
          >
            {activeFeatures.map((feature) => (
              <FeatureChip
                key={feature.key}
                icon={feature.icon}
                label={feature.label}
              />
            ))}
          </Box>
        )}

        <Box sx={{ alignSelf: "flex-start" }}>
          <Button text="Show more" onClick={handleShowMore} />
        </Box>
      </Box>
    </ListItem>
  );
};

export default TruckCard;
