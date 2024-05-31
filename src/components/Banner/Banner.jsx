import React from 'react';

import banner from './../../assets/banner.svg';
export const Banner = () => {
  return (
    <section className='w-full'>
      <a
        href='#'
        className='max-w-[1600px] block mx-auto px-4 2xl:px-0 h-[100%] mb-[45px] '
      >
        <div className='w-[100%] h-[100%]'>
          <img className='hidden md:block h-[100%] w-[100%] ' src={banner} alt='' />
          <img className='md:hidden h-[100%] w-[100%]' src=''></img>
        </div>
      </a>
    </section>
  );
};
