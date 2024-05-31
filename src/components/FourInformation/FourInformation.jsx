import React from 'react';

import delivery from './../../assets/FourIconInfo/delivery.svg';
import returnIcon from './../../assets/FourIconInfo/returns.svg';
import originalIcon from './../../assets/FourIconInfo/star.svg';
import helpIcon from './../../assets/FourIconInfo/help.svg';

export const FourInformation = () => {
  return (
    <section className='max-w-[1600px] mx-auto border border-[#ccc] h-auto rounded-[50px] mb-[45px] '>
      <div className='px-4 grid grid-cols-4 grid-rows-auto'>
        <div className='flex col-span-4 sm:col-span-2 lg:col-span-1 justify-center items-center gap-4 pl-8 pr-8 my-5 sm:border-r sm:border-[#ccc]'>
          <img src={delivery} alt='' />
          <div>
            <p>Darmowa dostawa</p>
            <span className='text-xs'>Do zamównień powyżej 300zł</span>
          </div>
        </div>
        <div className='flex col-span-4 sm:col-span-2 lg:col-span-1 justify-center items-center gap-4 pl-8 pr-8 my-5 lg:border-r lg:border-[#ccc]'>
          <img src={returnIcon} alt='' />
          <div>
            <p>14 dniowy zwrot</p>
            <span className='text-xs'>14 dni na zwrot towaru</span>
          </div>
        </div>
        <div className='flex col-span-4 sm:col-span-2 lg:col-span-1 justify-center items-center gap-4 pl-8 pr-8 my-5  sm:border-r sm:border-[#ccc]'>
          <img src={originalIcon} alt='' />
          <div>
            <p>Oryginalne produkty</p>
            <span className='text-xs'>Licencjonowanie dystrybutorzy</span>
          </div>
        </div>
        <div className='flex col-span-4 sm:col-span-2 lg:col-span-1 justify-center items-center gap-4 pl-8 pr-8 my-5 '>
          <img src={helpIcon} alt='' />
          <div>
            <p>Pomoc online</p>
            <span className='text-xs'>Jesteśmy do dyspozycji 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
};
