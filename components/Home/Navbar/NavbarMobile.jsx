'use client';
import Image from 'next/image';
import scrollWindow from '@/hooks/useScrollWindow';

export default function NavbarMobile({ toggleDrawer }) {
  const isScrolled = scrollWindow();
  return (
    <div
      className={`w-full grid grid-cols-2 p-[16px] mt-[51px] sticky top-0 transition-colors duration-300 ${
        isScrolled
          ? 'bg-white shadow-md text-black'
          : 'bg-transparent text-white'
      } z-50
    `}
    >
      <Image
        src='/images/logo.png'
        alt='Image description'
        width={134.91}
        height={50}
      />
      <button onClick={toggleDrawer} className='justify-self-end'>
        <Image
          src='/images/hamburger.png'
          alt='Image description'
          width={50}
          height={50}
        />
      </button>
    </div>
  );
}
