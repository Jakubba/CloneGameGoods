import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import arrowRight from './../../assets/arrow-right.svg';
export const SliderProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Beast Form',
      brand: 'One Piece',
      price: '100 PLN',
      oldPrice: '100 PLN',
      newPrice: '150 PLN',
      img: '/src/assets/ProductsFunko/(Beast Form) 1596.webp',
      links: '/#',
    },
    {
      id: 2,
      name: 'Trigon',
      brand: 'DC Comics',
      price: '120 PLN',
      oldPrice: '100 PLN',
      newPrice: '150 PLN',
      img: '/src/assets/ProductsFunko/DC comics Trigon 473 SDCC 2023.webp',
      links: '/#',
    },
    {
      id: 3,
      name: 'Hunter Eddie',
      brand: 'Stranger Things',
      price: '120 PLN',
      oldPrice: '100 PLN',
      newPrice: '150 PLN',
      img: '/src/assets/ProductsFunko/Hunter Eddie wGuitar 1462 Metalic Special Edition.webp',
      links: '/#',
    },
    {
      id: 4,
      name: 'Jar Jar Binks',
      brand: 'Star Wars',
      price: '120 PLN',
      oldPrice: '100 PLN',
      newPrice: '150 PLN',
      img: '/src/assets/ProductsFunko/JarAJrbinks.webp',
      links: '/#',
    },
    {
      id: 5,
      name: 'Kaido Man Man',
      brand: 'One Piece',
      price: '120 PLN',
      oldPrice: '100 PLN',
      newPrice: '150 PLN',
      img: '/src/assets/ProductsFunko/Kaido Man Man (Beast Form) 1624.webp',
      links: '/#',
    },
    {
      id: 6,
      name: 'Stitch',
      brand: 'Lilo & Stitch',
      price: '120 PLN',
      oldPrice: '100 PLN',
      newPrice: '150 PLN',
      img: '/src/assets/ProductsFunko/Lilo & Stitch Stitch in Rollers 1124 NYCC 2021 Exclusive.webp',
      links: '/#',
    },
    {
      id: 7,
      name: 'Momoshiki',
      brand: 'Naruto Boruto',
      price: '120 PLN',
      oldPrice: '100 PLN',
      newPrice: '150 PLN',
      img: '/src/assets/ProductsFunko/Naruto Boruto Momoshiki 1310 Exclusive (Lekko Uszkodzone Pudełko).webp',
      links: '/#',
    },
    {
      id: 8,
      name: 'Reinhardt Nycc',
      brand: 'Overwatch',
      price: '120 PLN',
      oldPrice: '100 PLN',
      newPrice: '150 PLN',
      img: '/src/assets/ProductsFunko/Overwatch Reinhardt Nycc 2018 Exclusive.webp',
      links: '/#',
    },
    {
      id: 9,
      name: 'Tanjiro with Dragon ',
      brand: 'Demon Slayer',
      price: '120 PLN',
      oldPrice: '100 PLN',
      newPrice: '150 PLN',
      img: '/src/assets/ProductsFunko/Tanjiro with Dragon Translucent Glow in the Dark Special Edition 873.webp',
      links: '/#',
    },
    {
      id: 10,
      name: 'Venomized Jack',
      brand: 'Marvel',
      price: '120 PLN',
      oldPrice: '100 PLN',
      newPrice: '150 PLN',
      img: '/src/assets/ProductsFunko/Venomized Jack O&#39; Lantern 922 Exc.webp',
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
            <img
              className='rotate-180 h-[100%] w-[auto] '
              src={arrowRight}
              alt='Arrow'
            ></img>
          </button>
          <button
            className=' ml-2 h-[20px] w-[20px]'
            onClick={() => swiperRef.current.slideNext()}
          >
            <img className='h-[100%] w-[auto] ' src={arrowRight} alt='Arrow'></img>
          </button>
          <a
            className='hidden md:block whitespace-nowrap px-6 cursor-pointer text-[#898989] text-[13px] border-px rounded-full md:flex justify-center items-center p-[12px] border-[#C4C4C4] '
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
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1600: {
              slidesPerView: 6,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className='relative w-auto h-[350px] p-[20px] flex flex-col items-center justify-center bg-[#fff] hover:z-30 border-gray-100 border-2 rounded-lg shadow-md mb-4 hover:shadow-2xl cursor-pointer'>
                <div className='relative z-30 h-[180px] w-[180px] overflow-hidden group'>
                  <img
                    className=' h-full w-full object-contain transition-all duration-300'
                    src={product.img}
                    alt={product.name}
                  />
                  <a className='absolute w-max bottom-[-100px] left-2/4 translate-x-[-50%] group-hover:bottom-8  bg-gradient-to-r from-[#FD3E14] via-[#FF7F00] to-[#FF6B08] text-white font-semibold rounded-full p-[10px] transition-all duration-400 cursor-pointer'>
                    Powieksz +
                  </a>
                </div>
                <button className='absolute top-2 right-2 bg-[#f5f5f5] rounded-full p-[10px]'>
                  <img
                    className='w-[20px] h-[20px]'
                    src='/src/assets/heart-icon.svg'
                    alt='Heart'
                  ></img>
                </button>

                <div className='relative z-10 flex flex-col items-center'>
                  <p className='text-[12px] uppercase text-[#919191] mb-[5px]'>
                    {product.brand}
                  </p>
                  <p className='text-[18px] font-bold mb-[5px]'>{product.name}</p>
                  <p className='text-[14px] font-bold text-[#909090] mb-[10px]'>
                    {product.price}
                  </p>
                  <a
                    className='border-[1.5px] rounded-2xl px-4 py-2 cursor-pointer border-[#FF7107]  text-[#FF7107] hover:bg-[#FF7107] hover:text-[#fff] transition-all duration-300'
                    href={product.links}
                  >
                    Do koszyka
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
