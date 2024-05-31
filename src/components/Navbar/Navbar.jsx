import React from 'react';
import Logo from './../../assets/logo-white.svg';
import personIcon from './../../assets/user.svg';
import cartIcon from './../../assets/cart-icon.svg';
import arrowDown from './../../assets/arrow-down-nav.svg';
import { IoSearch } from 'react-icons/io5';
import { DarkMode } from './DarkMode';

export const Navbar = () => {
  const Menu = [
    {
      id: 1,
      name: 'Figurki & gadżety',
      subcategory: [
        {
          id: 1,
          name: 'Funko Exclusive',
          link: '/#',
        },
        {
          id: 2,
          name: 'Funko US Exlusive',
          link: '/#',
        },
        {
          id: 3,
          name: 'Breloki funko pop ',
          link: '/#',
        },
      ],
    },
    {
      id: 2,
      name: 'Karta podarunkowa',
      link: '/#',
    },
    {
      id: 3,
      name: 'Nowości',
      link: '/#',
    },
    {
      id: 4,
      name: 'Promocje',
      link: '/#',
    },
    {
      id: 5,
      name: 'Wkrótce',
      link: '/#',
    },
    {
      id: 6,
      name: 'Pre-order',
      link: '/#',
    },
    {
      id: 7,
      name: 'Licencje',
      subcategory: [
        {
          id: 1,
          name: 'Star wars',
          link: '/#',
        },
        {
          id: 2,
          name: 'Disney',
          link: '/#',
        },
        {
          id: 3,
          name: 'DC comics',
          link: '/#',
        },
        {
          id: 4,
          name: 'Marvel',
          link: '/#',
        },
        {
          id: 5,
          name: 'Harry Potter',
          link: '/#',
        },
      ],
    },
    {
      id: 8,
      name: 'Program lojalnościowy',
      link: '/#',
    },
  ];
  return (
    <div className='navbar bg-primaryWhite py-3 sm:py-0 shadow-md dark:bg-primary dark:text-white duration-200 relative z-40 flex flex-col justify-center items-center'>
      {/* upper Navbar */}
      <div className='upper-navbar w-[100%] max-w-[1600px]  md:mx-auto  flex justify-between items-center py-3'>
        <div className='md:hidden z-999'>
          <button className='w-8 h-7 flex flex-col justify-between cursor-pointer p-1 m-1'>
            <div className='w-full h-1 bg-white rounded-full'></div>
            <div className='w-2/3 h-1 bg-white rounded-full'></div>
            <div className='w-1/3 h-1 bg-white rounded-full'></div>
          </button>
        </div>

        <div className='mr-auto'>
          <a href='#'>
            <img src={Logo} alt='Logo' className='w-[200px] '></img>
          </a>
        </div>
        {/* Search Bar */}
        <div className='flex justify-between items-center gap-4'>
          <div className='group relative hidden sm:block'>
            <input
              type='text'
              placeholder='Szukaj produktu...'
              className='w-[200px] sm:w-[200px] group-hover:w-[300px] text-black  transition-all duration-300 rounded-full border-gray-400 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400'
            />
            <span className='opacity-60 absolute top-1/2 -translate-y-1/2 right-0 bg-secondary cursor-pointer py-2 px-5 rounded-full  text-white group-hover:opacity-100 '>
              <IoSearch />
            </span>
          </div>
          {/* Account Buttons*/}
          <div className='flex items-center gap-2 '>
            <button>
              <img src={personIcon} className='w-6 h-6' />
            </button>
            <div className='hidden md:flex flex-col'>
              <a href='#' className='text-xs hover:text-secondary'>
                Zaloguj się
              </a>
              <a href='#' className='text-xs hover:text-secondary'>
                Zarejestruj się
              </a>
            </div>
          </div>
          {/* Order button */}
          <button
            onClick={() => alert('Niepoprawny adres URL')}
            className='  text-white px-3 py-1  h-12 w-16 flex items-center gap-3 transition-all duration-300 group relative border-r-2 border-gray-500'
          >
            <img
              src={cartIcon}
              className='absolute text-xl text-white drop-shadow-sm cursor-pointer  group-hover:rotate-[-45deg] transition-all duration-300 '
            />
            <div className='opacity-0 group-hover:opacity-100 bg-white p-2 absolute top-[50px] text-black w-max border-2 border-secondary rounded-lg '>
              <p>Pusty koszyk</p>
            </div>
          </button>
        </div>
        {/* DarkMode Swicher*/}
        <DarkMode />
      </div>
      {/* lower Navbar */}
      <div className='lower-navbar flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
          {Menu.map((data) => (
            <li
              key={data?.id}
              className='relative group py-1 px-3 rounded-full text-white'
            >
              <a
                href={data?.link}
                className='inline-block px-4  py-2 duration-200  cursor-pointer uppercase font-semibold '
              >
                {data?.name}
                {data.subcategory && (
                  <img
                    className='ml-2 inline-block group-hover:rotate-180 transition-all duration-300'
                    src={arrowDown}
                  ></img>
                )}
                {data?.subcategory && (
                  <ul className='absolute left-4 bg-primaryWhite dark:bg-primary py-4 px-6 min-w-[250px] hidden group-hover:block'>
                    {data.subcategory.map((sub) => (
                      <li key={sub.id}>
                        <a
                          className='cursor-pointer text-white hover:text-secondary '
                          href={sub.link}
                        >
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
