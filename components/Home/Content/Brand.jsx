import React from 'react';
import Image from 'next/image';

import { Unbounded } from '@next/font/google';
const unbounded = Unbounded({ weight: ['200', '900'], subsets: ['latin'] });

const Brand = () => {
  const childContent = ({ imgSrc, title, subTitle }) => {
    return (
      <div className={`flex flex-col justify-center items-center m-[16px]`}>
        <Image src={imgSrc} alt='Image description' width={128} height={128} />
        <h1 className='text-[16px] text-[#0B7373] uppercase font-bold'>
          {title}
        </h1>
        <p className='text-black text-center'>{subTitle}</p>
      </div>
    );
  };

  // render
  return (
    <div className='flex flex-col justify-center items-center p-[16px]'>
      <h1 className='signature-font text-[54px] text-[#0B7373]'>
        Beyond Premium
      </h1>
      <h2
        className={`text-[22px] font-bold text-[#004040] ${unbounded.className} mt-[-30px]`}
      >
        Elevate Your Experience
      </h2>
      <div className='flex flex-col lg:flex-row w-full lg:w-4/5'>
        {childContent({
          imgSrc: '/images/icon_personal.png',
          title: 'Personalized Itineraries',
          subTitle:
            'Our premium travel services offer tailor-made itineraries crafted to suit your unique preferences and desires.',
        })}
        {childContent({
          imgSrc: '/images/icon_exclusive.png',
          title: 'Exclusive Experiences',
          subTitle:
            'From private charters to behind-the-scenes tours, we offer access to unique opportunities that are designed to elevate your trip to the next level.',
        })}
        {childContent({
          imgSrc: '/images/icon_best.png',
          title: 'Best Facilities',
          subTitle:
            'Experience the epitome of with our premium facility, designed to provide an unparalleled level of comfort.',
        })}
      </div>
    </div>
  );
};

export default Brand;
