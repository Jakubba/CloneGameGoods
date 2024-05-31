import React from 'react';

export const Newsletter = () => {
  return (
    <section>
      <div className='relative flex justify-center items-center'>
        <div className='absolute'>
          <img className='' src=''></img>
        </div>
        <div className='flex flex-col'>
          <h4 className='text-white text-xl xl:text-sm'></h4>
          <p className='text-white text-4xl xl:text-xl'></p>
        </div>
        <form className='relative border border-white bg-transparen px-4 flex items-center rounded-[999px] md:w-full'>
          <input
            type='text'
            name='email'
            placeholder='Wpisz e-mail.'
            className='pl-3 pr-32 my-3 bg-transparent placeholder:text-white outline-none text-white'
          />
          <button
            type='submit'
            className='bg-white px-8 h-full absolute -right-px rounded-[999px]"'
          ></button>
        </form>
      </div>
    </section>
  );
};
