import React from 'react';

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 gap-8'>
        <div>
          <h1 className='text-4xl md:text-5xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
          <p className='text-lg'>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div>
          <div className='flex flex-col justify-between'>
            <input className='w-[80%] p-3 rounded-md text-black mb-4' type="email" placeholder="Enter your Email" />
            <button className='bg-[#00df9a] rounded-md w-[32%] font-medium py-3 text-black'>Notify Me</button>
          </div>
          <p className='text-lg mt-4'>We care about the protection of your data. Read our <span className='text-[#00df9a] hover:cursor-pointer'>Privacy Policy.</span></p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
