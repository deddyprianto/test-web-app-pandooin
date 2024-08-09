import Image from 'next/image';

const Footer = () => {
  return (
    <div className='bg-[#004040] w-full mt-20  py-[24px]'>
      <div className='w-full lg:w-4/5 m-auto flex flex-col lg:flex-row lg:justify-between items-center'>
        <h1 className='text-white'>
          © 2023 Zamrood by PT Teknologi Pandu Wisata
        </h1>
        <div className='flex justify-center items-center mt-5 lg:mt-0'>
          <Image
            src='/images/logoFB.png'
            alt='Image description'
            width={24}
            height={24}
          />
          <Image
            src='/images/logoIG.png'
            alt='Image description'
            width={24}
            height={24}
            className='mx-4'
          />
          <Image
            src='/images/logoMail.png'
            alt='Image description'
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
