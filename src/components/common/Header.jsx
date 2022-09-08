import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RiArrowDropDownLine } from 'react-icons/ri';
import headerLogo from '../../assests/images/header-logo.png';

function Header() {
  return (
    <header className="fixed w-full bg-white top-0 pl-60 z-20">
      <div className="flex justify-between border-b border-borderColor mt-10 px-10 pb-5">
        <h1 className="text-xl text-black font-semibold">Shipments</h1>
        <div className="flex items-center gap-6">
          <div className="relative">
            <IoMdNotificationsOutline className="h-7 w-auto" />
            <p className="absolute -top-1 -right-1 h-5 w-5 items-center bg-[#DD2747] font-semibold text-center rounded-full text-white">2</p>
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
