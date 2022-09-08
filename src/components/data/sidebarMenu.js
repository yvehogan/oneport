import React from 'react';
import { RiDashboardLine } from 'react-icons/ri';
import { BsPersonCircle } from 'react-icons/bs';
import { FaMap } from 'react-icons/fa';
import {
  HiUserGroup, HiTruck, HiOutlineDocumentText, HiDocumentDuplicate, HiDocumentRemove
} from 'react-icons/hi';

const sidebarMenu = [
  { title: 'Dashboard', icon: <RiDashboardLine /> },
  { title: 'Admin', icon: <BsPersonCircle /> },
  { title: 'Customers', link: '/', icon: <HiUserGroup /> },
  { title: 'Shipments', link: '/shipment', icon: <HiTruck /> },
  { title: 'Tracking', icon: <FaMap /> },
  { title: 'Documents', icon: <HiOutlineDocumentText /> },
  { title: 'Rates', icon: <HiOutlineDocumentText /> },
  { title: 'Quotes', icon: <HiDocumentDuplicate /> },
  { title: 'Invoices', icon: <HiDocumentRemove /> }
];

export default sidebarMenu;
