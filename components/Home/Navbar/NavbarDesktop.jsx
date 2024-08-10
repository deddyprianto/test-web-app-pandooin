'use client';
import Image from 'next/image';
import scrollWindow from '@/hooks/useScrollWindow';

export default function NavbarDesktop() {
  const isScrolled = scrollWindow();

  const scrollToSubMenuItem = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className={`p-[16px] flex justify-evenly items-center w-full fixed top-0 transition-colors duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F4] shadow-md text-black'
          : 'bg-transparent text-white'
      } z-50`}
    >
      {isScrolled ? (
        <Image
          src='/images/logo.png'
          alt='Image description'
          width={134.91}
          height={50}
        />
      ) : (
        <Image
          src='/images/logo2.png'
          alt='Image description'
          width={134.91}
          height={50}
        />
      )}
      <div
        onClick={() => scrollToSubMenuItem('homepage')}
        className={`hover:border-b-2 cursor-pointer  font-bold ${
          isScrolled
            ? 'hover:border-[#004040] text-[#004040]'
            : 'hover:border-white text-white'
        }`}
      >
        Home
      </div>
      <div
        onClick={() => scrollToSubMenuItem('discover')}
        className={`hover:border-b-2 cursor-pointer font-bold ${
          isScrolled
            ? 'hover:border-[#004040] text-[#004040]'
            : 'hover:border-white text-white'
        }`}
      >
        Customize Your Trip
      </div>
      <div
        onClick={() => scrollToSubMenuItem('destinations')}
        className={`hover:border-b-2 cursor-pointer  font-bold ${
          isScrolled
            ? 'hover:border-[#004040] text-[#004040]'
            : 'hover:border-white text-white'
        }`}
      >
        Destination
      </div>
      <div
        onClick={() => scrollToSubMenuItem('articles')}
        className={`hover:border-b-2 cursor-pointer  font-bold ${
          isScrolled
            ? 'hover:border-[#004040] text-[#004040]'
            : 'hover:border-white text-white'
        }`}
      >
        Articles
      </div>

      <button
        className={`hidden lg:flex border font-bold ${
          isScrolled
            ? 'border-[rgb(0,64,64)] text-[#004040]'
            : 'border-white text-white'
        }  rounded-full py-[10px] px-[24px] hover:bg-[#004040] hover:border-[#004040] hover:text-white`}
      >
        Need Assistance?
      </button>
    </div>
  );
}
