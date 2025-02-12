"use client"; // Required for Next.js to render this client-side

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

// Define the prop types for the component
interface CarouselProps {
  images: string[]; // Array of image URLs to be displayed
  autoplayDelay?: number; // Autoplay delay in milliseconds
  slidesPerView?: number; // Number of slides visible at once
  spaceBetween?: number; // Space between slides
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 3000,
  slidesPerView = 1,
  spaceBetween = 20,
}) => {
  return (
    <div className="w-full mx-auto bg-gray-600 h-30">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={true}
        autoplay={{ delay: autoplayDelay }}
        navigation
        pagination={{ clickable: true }}
        className="rounded-2xl shadow-lg w-100"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={1000}
              height={600}
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
