'use client';
import Image from 'next/image';
import { Unbounded } from '@next/font/google';
import { RenderItem } from './RenderItem';
import RenderLabel from './RenderLabel';
const unbounded = Unbounded({ weight: ['200', '900'], subsets: ['latin'] });
import useFetchData from '@/hooks/useFetchData';

const Destinations = () => {
  const { data, error, isLoading } = useFetchData('itinerary');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data.data);

  return (
    <div className='w-full lg:w-4/5 lg:m-auto p-[16px]' id='destinations'>
      <RenderLabel unbounded={unbounded} />

      {data?.data?.map((item, index) => {
        return (
          <RenderItem
            key={item?.itinerary_id}
            unbounded={unbounded}
            flex='flex-row'
            item={item}
            index={index}
          />
        );
      })}

      {/* gallery scroll */}
      <div className='mt-20 flex overflow-x-auto space-x-4'>
        <div className='w-[262px] flex-shrink-0'>
          <RenderItem unbounded={unbounded} isGridView />
        </div>
        <div className='w-[262px] flex-shrink-0'>
          <RenderItem unbounded={unbounded} isGridView />
        </div>
        <div className='w-[262px] flex-shrink-0'>
          <RenderItem unbounded={unbounded} isGridView />
        </div>
        <div className='w-[262px] flex-shrink-0'>
          <RenderItem unbounded={unbounded} isGridView />
        </div>
        <div className='w-[262px] flex-shrink-0'>
          <RenderItem unbounded={unbounded} isGridView />
        </div>
      </div>

      <div className='flex justify-center items-center mt-20 lg:justify-end'>
        <div>
          <Image
            src='/images/icon_arrowRight.png'
            alt='Image description'
            width={40}
            height={40}
          />
        </div>
        <h1 className='uppercase font-thin text-[16px] ml-3 text-[#004040]'>
          Explore more
        </h1>
      </div>
    </div>
  );
};

export default Destinations;
