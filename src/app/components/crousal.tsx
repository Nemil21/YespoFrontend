"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Fullscreen } from "lucide-react";
const images = [
  "/Static/Image/Banner.png",
  "/Static/Image/Banner.png",
  "/Static/Image/Banner.png",
];

const Carousel = () => {
  return (
    <div className="w-full  mx-auto bg-gray-600 h-30">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        className="rounded-2xl shadow-lg w-100"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image 
              src={src}
              alt={`Slide ${index + 1}`}
              width={100000}
              height={10000}
              className="w-full h-full object-fill rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
