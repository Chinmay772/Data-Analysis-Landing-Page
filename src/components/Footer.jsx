import React from 'react';
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto pt-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4 pr-19">Centrally manage data analytics for efficient organization-wide insights.</p>
        <div className="flex justify-between md:w-[75%]  my-2">
          <FaLinkedin size={30} />
          <FaFacebook size={30}/>
          <FaGithub size={30}/>
          <FaInstagram size={30}/>
          <FaTwitter size={30}/>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-0'>
      <div>
            <h6 className='text-2xl font-medium text-gray-400'>Company</h6>
            <ul className='pt-4'>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Jobs</li>
            </ul>
        </div>
        <div className=''>
            <h6 className='text-2xl font-medium text-gray-400'>Solutions</h6>
            <ul className='pt-4'>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insights</li>
            </ul>
        </div>
        <div>
            <h6 className='text-2xl font-medium text-gray-400'>Support</h6>
            <ul className='pt-4'>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Documentation</li>
                <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>API Status</li>
            </ul>
        </div>
        <div>
            <h6 className='text-2xl font-medium text-gray-400'>Legal</h6>
            <ul className='pt-4'>
                <li className='py-2 text-sm'>Claims</li>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>Terms</li>
            </ul>
        </div>
      </div>
      <div className="lg:col-span-3 text-sm text-center py-4 mt-10">
        <p>Copyright © 2024 | Designed by <a href="/" className='text-blue-400'>Chinamy Harane</a></p>
      </div>
    </div>
  );
};

export default Footer;
