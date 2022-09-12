/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { BsArrowLeftCircle } from 'react-icons/bs';
import SidebarMenu from '../../data/SidebarMenu';
import Logo from '../../../assests/images/oneport-logo.png';

function Sidebar() {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  return (
    <div
      className={`${open ? 'w-80' : 'w-fit'
      } h-screen duration-300 fixed border-r border-borderColor p-4 z-30 bg-white`}
    >
      <BsArrowLeftCircle
        className={`${!open && 'rotate-180'
        } absolute text-3xl bg-white fill-slate  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800  md:hidden block`}
        onClick={() => setOpen(!open)}
      />
      <Link to="/">
        <div className={`flex ${open && 'gap-x-4'} items-center`}>
          <img
            src={Logo}
            alt=""
            className={`${!open && 'hidden'
            } pl-8`}
          />
        </div>
      </Link>

      <ul className="pt-10">
        {SidebarMenu.map((menu) => (
          <Link to={menu.path} key={menu.title}>
            <li
              className={`flex items-center gap-x-8 sm:pl-8 pl-2 py-2 text-xl rounded-lg cursor-pointer text-[#6b7280] font-semibold ${menu.gap ? 'mt-9' : 'mt-2'} 
                         ${location.pathname === menu.path && ''}`}
            >
              <span className={`${location.pathname === menu.path ? ' text-white bg-primary' : ''} hover:text-white hover:bg-primary  text-2xl rounded p-2`}>{menu.src}</span>
              <span
                className={`${!open && 'hidden'
                } ${location.pathname === menu.path ? ' text-black' : ''} origin-left duration-300 hover:block hover:text-black `}
              >
                {menu.title}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
