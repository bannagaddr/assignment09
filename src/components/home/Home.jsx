import React from "react";
import SwiperSlider from "./swiper/SwiperSlider";
import Toy from "./toy/Toy";
import WhyOurToys from "../pages/WhyOurToys";
import CreativeChild from "../pages/CreativeChild";

const Home = () => {
  return (
    <div className="">
      {/* slider */}
      <SwiperSlider></SwiperSlider>
      {/* popular toys */}
      <Toy></Toy>
      {/* section 1 */}
      <WhyOurToys></WhyOurToys>
      {/* section 2 */}
      <CreativeChild></CreativeChild>
    </div>
  );
};

export default Home;
