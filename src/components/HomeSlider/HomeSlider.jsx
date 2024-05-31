import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './../HomeSlider/HomeSlider.scss';
import { Autoplay, Pagination } from 'swiper/modules';
import mobBanner1 from './../../assets/HomeSlider/mobile-baner1.png';
import mobBanner2 from './../../assets/HomeSlider/mobile-baner2.png';
import mobBanner3 from './../../assets/HomeSlider/mobile-baner3.png';
import mobBanner4 from './../../assets/HomeSlider/mobile-baner4.png';
import mobBanner5 from './../../assets/HomeSlider/mobile-baner5.png';
import mobBanner6 from './../../assets/HomeSlider/mobile-baner6.png';
import deskBanner1 from './../../assets/HomeSlider/desktop-baner1.png';
import deskBanner2 from './../../assets/HomeSlider/desktop-baner2.png';
import deskBanner3 from './../../assets/HomeSlider/desktop-baner3.png';
import deskBanner4 from './../../assets/HomeSlider/desktop-baner4.png';
import deskBanner5 from './../../assets/HomeSlider/desktop-baner5.png';
import deskBanner6 from './../../assets/HomeSlider/desktop-baner6.png';

export const HomeSlider = () => {
  return (
    <>
      <Swiper
        className='mySwiper'
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        pauseOnMouseEnter={true}
        modules={[Autoplay, Pagination]}
        loop={true}
      >
        <SwiperSlide>
          <a href='#' className='sm:min-h-[300px] h-[100%]'>
            <img className='sm:hidden w-full' src={mobBanner1}></img>
            <img className='hidden sm:block w-full' src={deskBanner1}></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#' className='sm:min-h-[300px] h-[100%]'>
            <img className='sm:hidden w-full' src={mobBanner2}></img>
            <img className='hidden sm:block w-full' src={deskBanner2}></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#' className='sm:min-h-[300px] h-[100%]'>
            <img className='sm:hidden w-full' src={mobBanner3}></img>
            <img className='hidden sm:block w-full' src={deskBanner3}></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#' className='sm:min-h-[300px] h-[100%]'>
            <img className='sm:hidden w-full' src={mobBanner4}></img>
            <img className='hidden sm:block w-full' src={deskBanner4}></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#' className='sm:min-h-[300px] h-[100%]'>
            <img className='sm:hidden w-full' src={mobBanner5}></img>
            <img className='hidden lg:block w-full' src={deskBanner5}></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#' className='sm:min-h-[300px] h-[100%]'>
            <img className='sm:hidden w-full' src={mobBanner6}></img>
            <img className='hidden sm:block w-full' src={deskBanner6}></img>
          </a>
        </SwiperSlide>
        <div className='swiper-pagination homeSlider'></div>
      </Swiper>
    </>
  );
};
