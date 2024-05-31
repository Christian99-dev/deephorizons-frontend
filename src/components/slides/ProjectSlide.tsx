"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Icon from "@/components/shared/Icon";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useRef } from "react";

const Slide = ({
  items,
  setActiveIndex,
  activeIndex,
}: {
  items: React.ReactNode[];
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
  activeIndex: number;
}) => {
  const swiperRef = useRef<any>();

  useEffect(() => {
    if (!swiperRef.current || activeIndex == swiperRef.current.realIndex)
      return;
    swiperRef.current.slideToLoop(activeIndex);
  }, [activeIndex]);

  return (
    <div className="relative w-full h-full">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChangeTransitionStart={(swiper) => setActiveIndex(swiper.realIndex)}
        className="absolute w-full h-full z-0"
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden xl:block">
        <Icon className="swiper-button-prev" name="white-left" />
        <Icon className="swiper-button-next" name="white-right" />
      </div>
    </div>
  );
};

export default Slide;
