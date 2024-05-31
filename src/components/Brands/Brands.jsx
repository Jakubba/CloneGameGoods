import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import arrowRight from './../../assets/arrow-right.svg';
export const Brands = () => {
  const brands = [
    {
      id: 1,
      name: 'dc',
      img: '/src/assets/Brands/dc-logo.png',
      links: '/#',
    },
    {
      id: 2,
      name: 'deadpool',
      img: '/src/assets/Brands/deadpool-icon.jpg',
      links: '/#',
    },
    {
      id: 3,
      name: 'disney',
      img: '/src/assets/Brands/disney-logo.png',
      links: '/#',
    },
    {
      id: 4,
      name: 'dragonball',
      img: '/src/assets/Brands/dragonball-logo.png',
      links: '/#',
    },
    {
      id: 5,
      name: 'games of thrones',
      img: '/src/assets/Brands/games-of-thrones-logo.png',
      links: '/#',
    },
    {
      id: 6,
      name: 'god of war',
      img: '/src/assets/Brands/god-of-war-logo.jpg',
      links: '/#',
    },
    {
      id: 7,
      name: 'halo',
      img: '/src/assets/Brands/halo-logo.png',
      links: '/#',
    },
    {
      id: 8,
      name: 'harry potter',
      img: '/src/assets/Brands/harry-potter-logo.png',
      links: '/#',
    },
    {
      id: 9,
      name: 'league of legends',
      img: '/src/assets/Brands/league-of-legneds-logo.jpg',
      links: '/#',
    },
    {
      id: 10,
      name: 'lord of the rings',
      img: '/src/assets/Brands/lord-of-the-rings-logo.png',
      links: '/#',
    },
    {
      id: 11,
      name: 'marvel',
      img: '/src/assets/Brands/marvel-logo.png',
      links: '/#',
    },
    {
      id: 12,
      name: 'master of the universe',
      img: '/src/assets/Brands/master-of-the-universe-logo.jpg',
      links: '/#',
    },
    {
      id: 13,
      name: 'one piece',
      img: '/src/assets/Brands/one-piece-logo.png',
      links: '/#',
    },
    {
      id: 14,
      name: 'overwatch',
      img: '/src/assets/Brands/overwatch-logo.png',
      links: '/#',
    },
    {
      id: 15,
      name: 'spider man',
      img: '/src/assets/Brands/spider-man-logo.png',
      links: '/#',
    },
    {
      id: 16,
      name: 'star wars',
      img: '/src/assets/Brands/star-wars-logo.png',
      links: '/#',
    },
    {
      id: 17,
      name: 'stranger things',
      img: '/src/assets/Brands/stranger-things-logo.jpg',
      links: '/#',
    },
    {
      id: 18,
      name: 'tekken',
      img: '/src/assets/Brands/tekken-icon.jpg',
      links: '/#',
    },
    {
      id: 19,
      name: 'witcher',
      img: '/src/assets/Brands/witcher-logo.jpg',
      links: '/#',
    },
  ];
  const swiperRef = useRef();
  return (
    <>
      <div className='max-w-[1600px] m-auto mb-[45px] px-4 2xl:px-0 '>
        <div className='flex flex-wrap items-center'>
          <h3 className='text-[21px] mt-[1.5rem] mb-[1.5rem] font-bold pr-4 whitespace-nowrap heading-md-black md:text-[24px] md:mt-[2.5rem] md:mb-[2.5rem] uppercase'>
            Najpopularniejsze brandy
          </h3>
          <div className='w-0 md:w-[46%] lg:w-[63%] bg-[#c4c4c4] h-[1px]'></div>
          <button
            className=' ml-2 mr-2 h-[20px] w-[20px]'
            onClick={() => swiperRef.current.slidePrev()}
          >
            <img className='rotate-180 h-[100%] w-[auto] ' src={arrowRight}></img>
          </button>
          <button
            className=' ml-2 h-[20px] w-[20px]'
            onClick={() => swiperRef.current.slideNext()}
          >
            <img className='h-[100%] w-[auto] ' src={arrowRight}></img>
          </button>
          <a
            className='hidden md:visible whitespace-nowrap px-6 cursor-pointer text-[#898989] text-[13px] border-px rounded-full md:flex justify-center items-center p-[12px] border-[#C4C4C4] '
            href='#'
          >
            Sprawdź wszystkie
          </a>
        </div>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={8}
          spaceBetween={5}
          className='brandsSwiper'
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 6,
            },
            1600: {
              slidesPerView: 8,
            },
          }}
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <a
                href={brand.links}
                className='w-auto h-[150px] p-[20px] flex items-center justify-center border-gray-100 border-2 rounded-lg shadow-lg shadow-gray-300 mb-4 group'
              >
                <img
                  className='h-full w-[150px] object-contain p-2 group-hover:scale-110 transition-all duration-300'
                  src={brand.img}
                  alt={brand.name}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
