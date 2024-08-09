'use client';
import Image from 'next/image';
import screen from '@/hooks/useWindowSize';

const InfoCheckIn = () => {
  const responsiveDesign = screen();
  const gadgetScreen = responsiveDesign.width < 980;
  if (gadgetScreen) {
    return (
      <div className='w-full p-[16px] mt-10 relative lg:w-4/5 lg:m-auto '>
        <div className='relative h-[168px] w-full'>
          <Image
            src='/images/gallery7.jpeg'
            alt='Image description'
            layout='fill'
            className='object-cover'
          />
          <div className='absolute inset-0 bg-black opacity-50'></div>
        </div>

        <div className='absolute inset-0 flex flex-col justify-center items-center lg:items-start text-white p-4 lg:left-[6%]'>
          <Image
            src='/images/logo2.png'
            alt='Image description'
            width={134.91}
            height={50}
          />

          <h2 className='max-w-lg mt-3 text-center lg:text-left'>
            Want to see other destinations? <br /> Check us out at our website
          </h2>
          <div className='flex justify-center items-center'>
            <a href='https://www.zamrood.com/' target='_blank'>
              <h1 className='text-[16px] font-bold'>pandooin.com</h1>
            </a>
            <Image
              src='/images/arrowIcon.png'
              alt='Image description'
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <Image
        src='/images/frameInfoCheckIn.png'
        alt='Image description'
        layout='responsive'
        width={1096}
        height={102}
      />
    );
  }
};

export default InfoCheckIn;
