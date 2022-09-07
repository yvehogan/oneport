import React from 'react'
import headerLogo from '../../assests/images/header-logo.png'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1>Shipments</h1>
      <div className="flex items-center">
        <div className="relative">
          <IoMdNotificationsOutline className="h-7 w-auto" />
          <p className="absolute top- h-5 w-5 items-center bg-[#DD2747] p-1 rounded-full text-white">2</p>
        </div>
        <div>
          <img className="h-[56px] w-auto" src={headerLogo} alt="Temoc Logo" />
          <p>Temoc</p>
          <RiArrowDropDownLine  />
        </div>
      </div>
    </div>
  )
}

export default Header