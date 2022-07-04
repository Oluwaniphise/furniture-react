import React from 'react';
import {navigation} from '../data';

export const NavMobile = () => {
  return (
    <div className='bg-white w-full h-full shadow-2xl '>

    <ul className='text-center h-full flex flex-col items-center justify-center gap-y-6'>
        {navigation.map((item, index) =>{
            return (
                <div>
                    <li key={index}>
                        <a className='capitalize text-xl font-medium transition-all' href={item.href}>{item.name}</a>
                    </li>
                </div>
            )
        })}
    </ul>
    </div>
  )
}
