import React from 'react'
import Logo from '../../../assests/images/oneport-logo.png'
import menuList from '../../data/sidebarMenu.js'

const Sidebar = () => {
    
  return (
    <div>
      <nav className='z-30 page-sidebar fixed w-60 bg-white overflow-auto h-screen border-r border-borderColor'>
        <div className="sidebar-menu text-textColor text-sm flex flex-col justify-between pt-4 pb-10">
          <div className="pl-6 pt-6">
            <img src={Logo} alt="Logo" className="w-36 h-auto" />
            <ul className="menu-items pr-7 pt-14">
              {menuList.map((item) => (
                <li className="flex gap-6 items-center text-lg py-3" key={item.title}>{item.icon} 
                  <span>{item.title}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar