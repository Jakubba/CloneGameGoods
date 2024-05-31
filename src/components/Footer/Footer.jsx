import React from 'react';

import footerImg from '../../assets/footerImg.webp';
export const Footer = () => {
  return (
    <footer className='bg-[#1D1D1D] w-full'>
      <div className='text-sm pt-[30px] sm:pt-5 z-10 md:p-5'>
        <div className='wrapper flex flex-col gap-10 max-w-[1600px] mx-auto'>
          <div className='flex justify-center items-center w-[100%] px-4 gap-[80px] mb-[45px] flex-col md:flex-row'>
            <div className='flex flex-col w-[100%] md:w-3/5 '>
              <h4 className='pb-4 text-white uppercase text-xl font-semibold'>O Nas</h4>
              <p className='text-[#E5E5E5] leading-6 font-thin'>
                Witaj w świecie GameGoods! Jesteśmy sklepem stworzonym z myślą o
                wszystkich kolekcjonerach figurek jak i maniakach komputerowych. W naszej
                ofercie znajdziesz największą ilość figurek Funko Pop Exclusive na polskim
                rynku, jak i gadżety, breloki i akcesoria z gier. W GameGoods możemy
                pochwalić się ekspresową wysyłką i najbezpieczniejszym pakowaniem spośród
                wszystkich polskich sklepów z figurkami, z racji że zdajemy sobie sprawę,
                że Wam - Kolekcjonerom zależy najbardziej na tym, aby figurki i przedmioty
                dotarły do Was w nienaruszonym stanie.
              </p>
            </div>
            <div className='flex justify-center items-center w-[100%] lg:p-[40px] md:w-2/5 h-[100%]'>
              <img className='w-auto h-[100%] max-h-[150px]' src={footerImg}></img>
            </div>
          </div>
        </div>
        <div className='wrapper grid grid-cols-4 gap-10 max-w-[1600px] mx-auto px-4 mb-[45px]'>
          <div className='col-span-4 sm:col-span-2 md:col-span-1'>
            <h4 className='pb-4 text-white uppercase text-xl font-semibold'>
              INFORMACJE
            </h4>
            <ul>
              <li>
                <a href='#' className='text-[#E5E5E5] cursor-pointer py-1 font-thin'>
                  Dostawa
                </a>
              </li>
              <li>
                <a href='#' className='text-[#E5E5E5] cursor-pointer py-1 font-thin'>
                  O Nas
                </a>
              </li>
              <li>
                <a href='#' className='text-[#E5E5E5] cursor-pointer py-1 font-thin'>
                  Współpraca
                </a>
              </li>
              <li>
                <a href='#' className='text-[#E5E5E5] cursor-pointer py-1 font-thin'>
                  Polityka prywatności
                </a>
              </li>
              <li>
                <a href='#' className='text-[#E5E5E5] cursor-pointer py-1 font-thin'>
                  Regulamin Sklepu
                </a>
              </li>
            </ul>
          </div>
          <div className='col-span-4 sm:col-span-2 md:col-span-1'>
            <h4 className='pb-4 text-white uppercase text-xl font-semibold'>
              MOJE KONTO
            </h4>
            <ul>
              <li>
                <a href='#' className='text-[#E5E5E5] cursor-pointer py-1 font-thin'>
                  Moje Konto
                </a>
              </li>
              <li>
                <a href='#' className='text-[#E5E5E5] cursor-pointer py-1 font-thin'>
                  Moje Adresy
                </a>
              </li>
              <li>
                <a href='#' className='text-[#E5E5E5] cursor-pointer py-1 font-thin'>
                  Historia zamównień
                </a>
              </li>
              <li>
                <a href='#' className='text-[#E5E5E5] cursor-pointer py-1 font-thin'>
                  Schowek
                </a>
              </li>
            </ul>
          </div>
          <div className='col-span-4 sm:col-span-2 md:col-span-1'>
            <h4 className='pb-4 text-white uppercase text-xl font-semibold'>KONTAKT</h4>
            <ul>
              <li>
                <a
                  href='mailto:kontakt@test.pl'
                  className='text-[#E5E5E5] cursor-pointer py-1 font-thin'
                >
                  kontakt@test.pl
                </a>
              </li>
              <li>
                <a href='#' className='text-[#E5E5E5] cursor-pointer py-1 font-thin'>
                  Kontakt
                </a>
              </li>
              <li>
                <a href='#' className='text-[#E5E5E5] cursor-pointer py-1 font-thin'>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className='col-span-4 sm:col-span-2 md:col-span-1'>
            <h4 className='pb-4 text-white uppercase text-xl font-semibold'>
              ŚLEDŹ NAS NA
            </h4>
            <p className='text-[#E5E5E5]  py-1 font-thin'>
              Sledź nas na socialach, i bądź na bieżąco z nowościami!
            </p>
          </div>
        </div>
      </div>

      <div className='py-6 bg-[#232324]'>
        <p className='text-center text-[#ffffff] w-full px-3'>
          Copyright © 2022 GameGoods.pl. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
};
