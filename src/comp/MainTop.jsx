// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../css/style.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import beach_firework from '../assets/beach_firework.mp4'
import mountainVideo from '../assets/mountain.mp4'
import beachVideo from '../assets/beach.mp4'
import surfingVideo from '../assets/surfing.mp4'

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        speed={1000}
        loop={true}
      >
        <SwiperSlide>
            <video src={surfingVideo} muted loop autoPlay className="slide-video"></video>
        </SwiperSlide>
        <SwiperSlide>
            <video src={mountainVideo} muted loop autoPlay className="slide-video"></video>
        </SwiperSlide>
        <SwiperSlide>
            <video src={beachVideo} muted loop autoPlay className="slide-video"></video>
        </SwiperSlide>
        <SwiperSlide>
            <video src={beach_firework} muted loop autoPlay className="slide-video"></video>
        </SwiperSlide>
      </Swiper>
    </>
  );
}