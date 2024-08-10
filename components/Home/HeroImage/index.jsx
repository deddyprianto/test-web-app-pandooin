'use client';
import React from 'react';
import Image from 'next/image';
import { Unbounded } from '@next/font/google';
import screen from '@/hooks/useWindowSize';

const unbounded = Unbounded({ weight: ['200', '900'], subsets: ['latin'] });

const HeroImage = () => {
  const responsiveDesign = screen();
  const gadgetScreen = responsiveDesign.width < 980;

  return (
    <div id='homepage' className='w-full relative'>
      {gadgetScreen ? (
        <Image
          src='/images/heroMobile.png'
          alt='Image description'
          width={430}
          height={756}
          layout='responsive'
          className='bg-cover'
        />
      ) : (
        <Image
          src='/images/hero.jpeg'
          alt='Image description'
          width={810}
          height={810}
          layout='responsive'
          className='bg-cover'
        />
      )}
      <div className='absolute inset-0 flex flex-col justify-center items-center lg:items-start text-white p-4 lg:left-[6%]'>
        <h1 className='signature-font text-[#D6B66B] text-[70px]'>
          Premium Travel
        </h1>
        <h2
          className={`text-lg lg:text-[54px] font-semibold mb-2 ${unbounded.className} mt-[-40px] lg:mt-[-35px]`}
        >
          Beyond Expectation
        </h2>
        <p className='max-w-lg mt-3 text-center lg:text-left'>
          Experience the finest that Indonesia has to offer with our curated
          selection of premium trips, ensuring comfort every step of the way.
        </p>
        <button className='mt-10 text-white font-bold h-[54px] w-[154px] border border-white rounded-full'>
          Take me there
        </button>
      </div>
    </div>
  );
};

export default HeroImage;
