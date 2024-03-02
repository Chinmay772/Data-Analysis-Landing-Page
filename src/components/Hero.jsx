import React from 'react';
import {ReactTyped} from 'react-typed';

function Hero() {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[96] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold pb-2'>GROWING WITH DATA ANALYTICS</p>
          <h1 className='md:text-7xl sm:text-6xl sm:pb-1 text-4xl font-bold md:py-1'>Grow with data.</h1> 
          <div className='flex justify-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-1'>Fast, flexible financing for </p>
            <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-4 py-2 text-[#00df9a]' strings={['BTB','SASS','BTC']} typeSpeed={120} backSpeed={140} loop />
          </div>
          <p className='md:text-2xl text-xl font-bold text-gray-600'>Monitor your data anlytics to increase revenue for BTC, BTB, & SASS</p>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero