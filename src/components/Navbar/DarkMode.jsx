import React, { useEffect, useState } from 'react';
import sunIcon from './../../assets/icon-sun.png';
import moonIcon from './../../assets/icon-moon.svg';
export const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return (
    <div className='relative flex w-10 h-10 ml-3'>
      <img
        src={sunIcon}
        alt='icon sun'
        className={`h-10  object-contain cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute top-0 right-0 z-10  ${
          theme == 'dark' ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <img
        src={moonIcon}
        alt='icon moon'
        className={`h-10 object-contain cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute top-0 right-0 z-10 ${
          theme == 'light' ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
    </div>
  );
};
