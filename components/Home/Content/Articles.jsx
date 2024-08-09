'use client';
import Image from 'next/image';
import { Unbounded } from '@next/font/google';
const unbounded = Unbounded({ weight: ['200', '900'], subsets: ['latin'] });
import screen from '@/hooks/useWindowSize';
import useFetchData from '@/hooks/useFetchData';

const Articles = () => {
  const responsiveDesign = screen();
  const gadgetScreen = responsiveDesign.width < 980;
  const { data, error, isLoading } = useFetchData('article');

  if (isLoading) return <p className='text-center text-black'>Loading...</p>;
  if (error)
    return <p className='text-center text-red-500'>Error: {error.message}</p>;

  const renderGalleryLayout = () => {
    if (gadgetScreen) {
      return (
        <div>
          {data?.data?.map((item) => {
            return (
              <div key={item?.id}>
                <div className='relative h-[256px] w-full mt-4'>
                  <Image
                    src={item?.featured_image}
                    alt='Image description'
                    layout='fill'
                    className='object-cover'
                  />
                </div>
                <div className='bg-[#0B7373] p-[24px]'>
                  <p className='text-white font-bold'>{item?.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className='grid grid-cols-[1fr_256px_256px] grid-rows-[1fr_1fr] gap-3 h-[calc(512px+48px+3px)] mt-4'>
          {data?.data?.map((item, ids) => {
            return (
              <div
                key={item?.id}
                className={`${
                  ids === 0 ? 'row-span-2' : 'row-span-0'
                }  flex flex-col h-full`}
              >
                <div className='relative w-full flex-grow'>
                  <Image
                    src={item?.featured_image}
                    alt='Image description'
                    layout='fill'
                    objectFit='cover'
                  />
                  <div className='absolute inset-0 bg-black opacity-50'></div>
                </div>
                <div className='bg-[#0B7373] py-[16px] px-[8px]  text-[12px]'>
                  <p className='text-white font-bold'>
                    7 Best Places to Dive in Indonesia: From Bali to Wakatobi
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div
      id='articles'
      className='text-[#0B7373] w-full p-[16px] mt-10 relative lg:w-4/5 lg:m-auto lg:mt-16'
    >
      <h1 className={`font-bold ${unbounded.className} text-[22px] `}>
        Articles
      </h1>
      <h2 className='text-[16px] font-normal'>
        Our curated writings, offering something for every reader.
      </h2>

      {renderGalleryLayout()}
    </div>
  );
};

export default Articles;
