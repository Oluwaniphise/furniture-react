import React from 'react';

import { newsletter } from '../data';

export const NewsLetter = () => {

  const {title, subtitle, placeholder, buttonText} = newsletter
  return (
    <section className="section min-h-[490px] bg-newsletter">
      <div className="container mx-auto flex justify-center lg:justify-end
      ">
        <div className='w-full max-w-[558px] text-center text-white
        lg:text-left'>
          <h2 className='text-4xl font-semibold max-w-[350px] mx-auto lg:mx-0 mb-5
          leading-normal'>{title}</h2>
          <p className='text-xl font-light mb-10'>{subtitle}</p>
          <div className='flex flex-col gap-[22px] lg:flex-row'>
            <input type="text" className='h-[60px] px-6 outline-none
            rounded-lg lg:flex-1 placeholder:text-gray-400 text-gray-500' placeholder={placeholder} />
            <button className='bg-primary h-[60px] hover:bg-slate-900 px-7 rounded-lg font-medium texl-xl transition'>{buttonText}</button>
          </div>
        </div>
      </div>

    </section>
  )
}
