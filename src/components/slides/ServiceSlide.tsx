"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";


const Slide = ({
  items,
  spaceBetween,
  className,
  speed,
}: {
  items: React.ReactNode[];
  spaceBetween: number;
  className?: string;
  speed?: number;
}) => {
  return (
    <Swiper
      dir="rtl"
      loop={true}
      autoplay={{
        delay: 1700,
        disableOnInteraction: false,
      }}
      speed={speed}
      slidesPerView="auto"
      spaceBetween={spaceBetween}
      grabCursor={true}
      modules={[FreeMode, Autoplay]}
      className={`${className} h-min`}
    >
      {items.map((item, index) => (
        <SwiperSlide
          key={index}
          style={{ width: "fit-content", paddingLeft : 0 }}
          className={`my-auto`}
        >
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slide;
