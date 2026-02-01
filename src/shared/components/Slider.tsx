import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import type { GalleryImage } from "@/store/types";
import { spacing, borderRadius, colors } from "@/styles/tokens";

interface SliderProps {
  images: GalleryImage[];
  alt: string;
}

const Slider: React.FC<SliderProps> = ({ images, alt }) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const checkWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    if (swiper && windowWidth > 0) {
      if (windowWidth > 1440) {
        swiper.disable();
      } else {
        swiper.enable();
      }
    }
  }, [windowWidth, swiper]);

  if (!images || images.length === 0) {
    return null;
  }

  const shouldShowNavigation = windowWidth > 0 && windowWidth <= 1440;

  return (
    <Box
      sx={{
        mb: spacing[9],
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        "& .swiper": {
          paddingTop: spacing[3],
          paddingBottom: spacing[3],
        },
        "& .swiper-button-next, & .swiper-button-prev": {
          color: colors.accent.secondary,
          "&::after": {
            fontSize: spacing[5],
          },
        },
        "& .swiper-button-disabled": {
          opacity: 0.35,
        },
      }}
    >
      <Swiper
        onSwiper={setSwiper}
        modules={[Navigation]}
        navigation={shouldShowNavigation}
        spaceBetween={48}
        slidesPerView="auto"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 28,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 36,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 48,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={image.original + index || image.thumb + index}
            style={{
              width: "292px",
              height: "312px",
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src={image.original || image.thumb}
              alt={alt}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: borderRadius.xs,
                display: "block",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Slider;
