'use client';
import React, { useState } from 'react';
import 'react-modern-drawer/dist/index.css';
import DrawerMenu from './DrawerMenu';
import screen from '@/hooks/useWindowSize';
import NavbarMobile from './NavbarMobile';
import NavbarDesktop from './NavbarDesktop';

export default function Navbar() {
  const responsiveDesign = screen();
  const gadgetScreen = responsiveDesign.width < 980;

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      {gadgetScreen ? (
        <NavbarMobile toggleDrawer={toggleDrawer} />
      ) : (
        <NavbarDesktop />
      )}
      <DrawerMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleDrawer={toggleDrawer}
      />
    </>
  );
}
