import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { RiDashboardLine } from 'react-icons/ri';
import { FaMap } from 'react-icons/fa';
import {
  HiUserGroup, HiTruck, HiOutlineDocumentText, HiDocumentDuplicate, HiDocumentRemove
} from 'react-icons/hi';

const SidebarMenu = [
  { title: 'Dashboard', path: '/dashboard', src: <RiDashboardLine /> },
  { title: 'Admin', path: '/admin', src: <BsPersonCircle /> },
  { title: 'Customers', path: '/customer', src: <HiUserGroup /> },
  { title: 'Shipments', path: '/shipment', src: <HiTruck /> },
  { title: 'Tracking', path: '/tracking', src: <FaMap /> },
  { title: 'Documents', path: '/documents', src: <HiOutlineDocumentText /> },
  { title: 'Rates', path: '/rates', src: <HiOutlineDocumentText /> },
  { title: 'Quotes', path: '/quotes', src: <HiDocumentDuplicate /> },
  { title: 'Invoices', path: '/invoices', src: <HiDocumentRemove /> }
];
export default SidebarMenu;
