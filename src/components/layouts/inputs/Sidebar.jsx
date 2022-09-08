import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assests/images/oneport-logo.png';
import menuList from '../../data/sidebarMenu';

function Sidebar() {
  return (
    <div>
      <nav className="z-30 page-sidebar fixed w-60 bg-white overflow-auto h-screen border-r border-borderColor">
        <div className="sidebar-menu text-textColor text-sm flex flex-col justify-between pt-4 pb-10">
          <div className="pl-6 pt-6">
            <img src={Logo} alt="Logo" className="w-36 h-auto" />
            <ul className="menu-items pr-7 pt-14">
              {menuList.map((item) => (
                <Link key={item?.title} to={{ pathname: item.link }}>
                  <li className="flex gap-6 items-center text-xl py-4">
                    {item.icon}
                    {' '}
                    <span>{item.title}</span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
