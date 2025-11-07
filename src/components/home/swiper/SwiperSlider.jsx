import React, { use } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// css file
import "../../../index.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const toyPromise = fetch("/toy.json").then((result) => result.json());

const SwiperSlider = () => {
  const toyData = use(toyPromise);
  const firstThreeToys = toyData.slice(0, 3);
  return (
    <div className="w-11/12 mx-auto mt-20 shadow">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1000, // slide change করার delay (ms)
          disableOnInteraction: false,
        }}
        speed={3000} // slide ধীরে ধীরে change হওয়ার speed (ms)
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-2xl"
      >
        {firstThreeToys.map((toy, index) => (
          <SwiperSlide key={index}>
            <img
              src={toy.pictureURL}
              alt={toy.toyName}
              className="w-full max-h-100 md:h-96 object-cover transition-transform duration-500 hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
