import React from 'react'
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-black text-center font-medium'>
                    <p className='py-2 border-b my-8 mx-8'>500 GB Storage</p>
                    <p className='py-2 border-b my-8 mx-8'>1 Granted USer</p>
                    <p className='py-2 border-b my-8 mx-8'>Send upto 2 GB</p>
                </div>
                <button className='bg-[#00df9a] rounded-md w-[32%] font-medium py-3 text-black self-center'>Start Trail</button>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-black text-center font-medium'>
                    <p className='py-2 border-b my-8 mx-8'>500 GB Storage</p>
                    <p className='py-2 border-b my-8 mx-8'>1 Granted USer</p>
                    <p className='py-2 border-b my-8 mx-8'>Send upto 2 GB</p>
                </div>
                <button className='bg-black rounded-md w-[32%] font-medium py-3 text-[#00df9a] self-center'>Start Trail</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-black text-center font-medium'>
                    <p className='py-2 border-b my-8 mx-8'>500 GB Storage</p>
                    <p className='py-2 border-b my-8 mx-8'>1 Granted USer</p>
                    <p className='py-2 border-b my-8 mx-8'>Send upto 2 GB</p>
                </div>
                <button className='bg-[#00df9a] rounded-md w-[32%] font-medium py-3 text-black self-center'>Start Trail</button>
            </div>
        </div>
    </div>
  )
}

export default Cards