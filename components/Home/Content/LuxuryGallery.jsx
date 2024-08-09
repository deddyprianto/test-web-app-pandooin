'use client';
import Image from 'next/image';
import screen from '@/hooks/useWindowSize';
import Separator from './Separator';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const LuxuryGallery = () => {
  const responsiveDesign = screen();
  const gadgetScreen = responsiveDesign.width < 980;

  if (gadgetScreen) {
    return (
      <div className='bg-[#D6B66B] mt-10 p-[36px] lg:py-[7px] lg:px-[172px]'>
        <h1 className='signature-font text-[54px] font-normal text-[#004040]'>
          Luxury Footages
        </h1>
        <Swiper
          style={{ width: '100%' }}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            type: 'fraction',
          }}
          modules={[Pagination]}
          className='mySwiper'
          autoHeight
        >
          <SwiperSlide>
            <img
              src='/images/gallery1.png'
              sizes='(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px'
              width='100%'
              height={300}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='/images/gallery4.jpeg'
              sizes='(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px'
              width='100%'
              height={300}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='/images/gallery1.png'
              sizes='(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px'
              width='100%'
              height={300}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  } else {
    return (
      <div className='bg-[#D6B66B] mt-10 p-[36px] lg:py-[7px] lg:px-[172px]'>
        <h1 className='signature-font text-[54px] font-normal text-[#004040]'>
          Luxury Footages
        </h1>
        <div className='grid grid-cols-3 gap-3'>
          <Image
            src='/images/gallery1.png'
            alt='Image description'
            width={349.33}
            height={349.33}
          />
          <Image
            src='/images/gallery2.jpeg'
            alt='Image description'
            width={349.33}
            height={349.33}
          />

          <Image
            src='/images/gallery1.png'
            alt='Image description'
            width={349.33}
            height={349.33}
          />
        </div>
        <Separator src='/images/separator2.png' />
        <div className='flex justify-between items-center'>
          <Image
            src='/images/gallery5.jpeg'
            alt='Image description'
            width={349.33}
            height={349.33}
          />
          <Image
            src='/images/gallery6.jpeg'
            alt='Image description'
            width={349.33}
            height={349.33}
          />
          <Image
            src='/images/gallery5.jpeg'
            alt='Image description'
            width={349.33}
            height={349.33}
          />
        </div>
      </div>
    );
  }
};

export default LuxuryGallery;
