import Image from 'next/image';

const RenderLabel = ({ unbounded }) => {
  return (
    <div className='flex flex-col lg:flex-row lg:items-center mt-16'>
      <h2
        className={`text-[22px] font-bold text-[#004040] ${unbounded.className}`}
      >
        Destinations
      </h2>
      <div className='flex  items-center mt-[16px] lg:mt-0 lg:ml-5'>
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

export default RenderLabel;
