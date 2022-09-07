import React from 'react';
import { RiMicLine, RiDashboardLine } from 'react-icons/ri';
import { BsPersonCircle } from 'react-icons/bs'
import { HiUserGroup, HiTruck, HiOutlineDocumentText, HiDocumentDuplicate, HiDocumentRemove } from 'react-icons/hi'


const sidebarMenu = [
  { title: 'Dashboard', link: '/business-unit/dashboard', icon: <RiDashboardLine className="icon" /> },
  { title: 'Admin', link: '/business-unit/shared-ideas', icon: <BsPersonCircle className="icon" /> },
  { title: 'Customers', link: '/business-unit/assigned-ideas', icon: <HiUserGroup className="icon" /> },
  { title: 'Shipments', link: '/business-unit/settings', icon: <HiTruck className="icon" /> },
  { title: 'Tracking', link: '/business-unit/settings', icon: <RiMicLine className="icon" /> },
  { title: 'Documents', link: '/business-unit/settings', icon: <HiOutlineDocumentText className="icon" /> },
  { title: 'Rates', link: '/business-unit/settings', icon: <HiOutlineDocumentText className="icon" /> },
  { title: 'Quotes', link: '/business-unit/settings', icon: <HiDocumentDuplicate className="icon" /> },
  { title: 'Invoices', link: '/business-unit/settings', icon: <HiDocumentRemove className="icon" /> }
];

export default sidebarMenu;