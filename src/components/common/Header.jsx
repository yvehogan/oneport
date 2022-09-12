import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RiArrowDropDownLine } from 'react-icons/ri';
import headerLogo from '../../assests/images/header-logo.png';
import SidebarMenu from '../data/SidebarMenu';

function Header() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    const current = SidebarMenu.filter((item) => item.path === location.pathname);
    setPageTitle(current?.[0]?.title);
  }, [location.pathname]);

  return (
    <header className="fixed w-full bg-white top-0 lg:pl-72 pl-24 z-20">
      <div className="flex justify-between border-b border-borderColor mt-10 lg:pl-[85px] pl-3 pr-3 pb-5">
        <h1 className="text-xl text-black font-semibold">{pageTitle}</h1>
        <div className="flex items-center gap-6">
          <div className="relative">
            <IoMdNotificationsOutline className="h-7 w-auto" />
            <p className="absolute -top-1 -right-1 h-5 w-5 items-center bg-[#DD2747] font-semibold text-center rounded-full text-white text-sm">2</p>
          </div>
          <div className="flex items-center gap-2">
            <img className="h-10 w-auto" src={headerLogo} alt="Temoc Logo" />
            <p className="text-[#374151] font-semibold">Temoc</p>
            <RiArrowDropDownLine className="h-7 w-auto" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
