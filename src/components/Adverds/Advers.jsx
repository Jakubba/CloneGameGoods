import React from 'react';

import firstAdverd from './../../assets/Advers/blueAdverd.webp';
import secondAdverd from './../../assets/Advers/redAdverd.webp';
import thirdAdverd from './../../assets/Advers/yellowAdverd.webp';

export const Advers = () => {
  return (
    <section className='h-[100%] mb-[45px] mx-auto md:max-w-[1600px]'>
      <div className='w-full h-[100%] px-4 2xl:px-0  grid gap-4 md:gap-2 md:grid-cols-4 md:grid-rows-1'>
        <a
          href=''
          className='relative rounded-lg overflow-hidden h-[180px] w-[100%] md:h-[250px]  md:col-span-1 md:w-full'
        >
          <img
            className='absolute w-[100%] h-[100%] object-cover top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
            src={firstAdverd}
          ></img>
          <div className='absolute bottom-7 left-7 text-white gap-0 flex-col md:bottom-5 md:left-5 md:text-[19px]'>
            <p className='font-bold'>NOWOŚCI</p>
            <span className=''>NA STRONIE</span>
          </div>
        </a>
        <a
          href=''
          className='relative rounded-lg overflow-hidden h-[180px] w-100% md:h-[250px] md:col-span-2 w-full'
        >
          <img
            className='absolute w-[100%] h-[100%] object-cover top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
            src={thirdAdverd}
          ></img>
          <div className='absolute bottom-7 left-7 text-white gap-0 flex-col md:bottom-5 md:left-5 md:text-[19px]'>
            <p className='font-bold'>KUP</p>
            <span className=''>FIGURKI</span>
          </div>
        </a>
        <a
          href=''
          className='relative rounded-lg overflow-hidden h-[180px] md:h-[250px]  md:col-span-1 w-full'
        >
          <img
            className='absolute w-[100%] h-[100%] object-cover top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
            src={secondAdverd}
          ></img>
          <div className='absolute bottom-7 left-7 text-white gap-0 flex-col md:bottom-5 md:left-5 md:text-[19px]'>
            <p className='font-bold'>PROMOCJE</p>
            <span className=''>EXCLUSIVE</span>
          </div>
        </a>
      </div>
    </section>
  );
};
