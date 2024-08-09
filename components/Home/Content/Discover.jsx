'use client';
import React from 'react';
import Image from 'next/image';
import { Unbounded } from '@next/font/google';
import screen from '@/hooks/useWindowSize';

const unbounded = Unbounded({ weight: ['200', '900'], subsets: ['latin'] });

const Discover = () => {
  const responsiveDesign = screen();
  const gadgetScreen = responsiveDesign.width < 980;
  return (
    <div
      id='discover'
      className='grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 items-center w-full lg:w-4/5 p-[16px] lg:mt-28 m-auto'
    >
      <div className='flex justify-center lg:justify-end'>
        <Image
          src='/images/icon_discover.png'
          alt='Image description'
          width={gadgetScreen ? 298 : 398}
          height={188}
        />
      </div>
      <div>
        <h1
          className={`text-center lg:text-left text-[32px] ${unbounded.className} font-semibold text-[#004040] mt-5`}
        >
          Discover Tailored Experiences
        </h1>
        <p className='text-center lg:text-left text-[16px] text-black mt-[16px] lg:mt-0'>
          Create your own journey, personalized to suit your preferences and
          interests, ensuring a once-in-a-lifetime adventure awaits.
        </p>
        <div className='w-full lg:w-[40%]'>
          <button className='w-full bg-[#004040] rounded-full text-white mt-[24px] lg:mt-0 py-[24px] px-[10px] font-bold lg:py-[16px] lg:mt-[16px]'>
            Customize Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discover;
