import React from 'react';
import Image from 'next/image';
import RenderSlideShow from './RenderSlideShow';

export const RenderItem = ({ unbounded, isGridView = false, item, index }) => {
  const formatCurrency = (price) => {
    const amount = Number(price);
    const formattedCurrency = amount.toLocaleString('id-ID', {
      minimumFractionDigits: 0,
    });

    return `IDR ${formattedCurrency}`;
  };
  const isEven = index % 2 === 0;

  if (isGridView) {
    return (
      <div className='mt-10 flex flex-col'>
        <Image
          src='/images/contoh.jpeg'
          alt='Image description'
          width={256}
          height={256}
          layout='responsive'
        />
        <div>
          <p className='text-[12px] text-[#004040] mt-[10px]'>
            7 DAYS 6 NIGHTS
          </p>
          <h2
            className={`text-[16px] font-bold text-[#0B7373] mt-[8px] ${unbounded.className}`}
          >
            Paradise Gateway: Labuan Bajo
          </h2>
          <p className='mt-[10px] text-[16px]'>
            Labuan Bajo is a tropical paradise nestled in the westernmost part
            of Flores Island, Indonesia. With its stunning landscapes,
            crystal-clear waters, and vibrant marine life, its a gateway to
            explore the mesmerizing Komodo National Park.
          </p>
          <p className='mt-[10px] text-[#004040] font-bold'>
            Organized by Pandooin
          </p>
          <div>
            <p className='text-[#004040] text-[14px]'>Start From</p>
            <h1
              className={`text-[18px] text-[#004040] font-bold ${unbounded.className} font-bold`}
            >
              IDR 5,200,000
            </h1>
          </div>
          <button className='w-[116px] h-[54px] border border-[#004040] rounded-full mt-8'>
            See Details
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        key={item?.itinerary_id}
        className={`grid grid-cols-1 lg:grid-cols-2 lg:gap-x-5 mt-10 ${
          isEven ? '' : 'lg:grid-flow-col-dense'
        }`}
      >
        <div
          className={`w-full h-[256px] ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
        >
          <RenderSlideShow data={item?.related_galleries} />
        </div>
        <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <p className='text-[12px] text-[#004040] mt-[10px] lg:mt-0'>
            7 DAYS 6 NIGHTS
          </p>
          <h2
            className={`text-[16px] font-bold text-[#0B7373] mt-[8px] ${unbounded.className} lg:text-[36px]`}
          >
            {item?.itinerary_name}
          </h2>
          <p className='mt-4'>{item?.itinerary_short_description}</p>
          <p className='mt-[10px] text-[#004040] font-bold'>
            Organized by {item?.partner_name}
          </p>
          <div className='flex mt-5 justify-between'>
            <div>
              <p className='text-[#004040] text-[14px]'>Start From</p>
              {item?.related_variant?.itinerary_variant_disc_price !== '0' && (
                <h2
                  className={`text-[#B8B8B8] font-medium ${unbounded.className} line-through `}
                >
                  {formatCurrency(
                    item?.related_variant?.itinerary_variant_disc_price
                  )}
                </h2>
              )}

              <h1
                className={`text-[18px] text-[#004040] font-bold ${unbounded.className} font-bold`}
              >
                {formatCurrency(
                  item?.related_variant?.itinerary_variant_pub_price
                )}
              </h1>
            </div>
            <button className='w-[116px] h-[54px] border border-[#004040] rounded-full'>
              See Details
            </button>
          </div>
        </div>
      </div>
    );
  }
};
