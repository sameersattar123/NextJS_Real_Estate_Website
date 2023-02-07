import React, { useState } from "react";
import { Navigation, FreeMode, Thumbs } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Divider } from "@chakra-ui/react";

const PropertyThumbSlider = ({ photos }) => {
  const [SwiperThumb, setSwiperThumb] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        navigation={true}
        thumbs={{
          swiper: SwiperThumb && !SwiperThumb.destroyed ? SwiperThumb : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {photos.map((image) => {
          return (
            <SwiperSlide key={image}>
              <img src={image} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Divider marginY="1rem" />
      <Swiper
        onSwiper={setSwiperThumb}
        loop={true}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        watchSlidesProgress={true}
        slidesPerView={5}
      >
        {photos.map((image) => {
          return (
            <SwiperSlide key={image}>
              <img src={image} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default PropertyThumbSlider;
