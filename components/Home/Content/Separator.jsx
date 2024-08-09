import Image from 'next/image';

const Separator = ({ src = '/images/Separator.png' }) => {
  return (
    <div className='w-4/5 m-auto mt-[30px] lg:mt-10 lg:mb-10'>
      <Image
        src={src}
        alt='Image description'
        width={128}
        height={128}
        layout='responsive'
      />
    </div>
  );
};

export default Separator;
