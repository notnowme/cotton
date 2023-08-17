// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../css/style.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import seaView from "../assets/ht_seaside.jpg";
import pool from "../assets/hiltonPool.jpg";
import highball from "../assets/highball.jpg";
import buffet from "../assets/buffet.jpg";
import infinity from "../assets/infinityPool.jpg";
import seoulSky from "../assets/seoulSky.jpg";
import sunset from "../assets/seoulSunset.png";
import bistro from "../assets/bistro.jpg";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={100}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        centeredSlides={true}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img className="mainTopImg" src={pool}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="mainTopImg" src={seaView} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="mainTopImg" src={highball} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={buffet} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={infinity} className="slideImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={seoulSky} className="slideImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sunset} className="slideImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bistro} className="slideImg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
