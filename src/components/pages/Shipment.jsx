/* eslint-disable no-underscore-dangle */
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';

import { useNavigate } from 'react-router-dom';
import useFetchData from '../../api/useFetchData';

import Button from '../layouts/inputs/Button';
import ShipmentTable from '../layouts/ShipmentTable';

function Shipment() {
  const navigate = useNavigate();

  const { data: customer, status } = useFetchData({
    endpoint: '/get_single_customer',
    param: 123456789
  });

  return (
    <div className="mt-28 w-full">
      <div className="pl-12 pr-4">
        {status === 'loading' && <p>Loading...</p>}
        <BiArrowBack
          onClick={() => navigate('/customer')}
          className="w-8 h-auto"
        />
        <div className="w-1/2 min-w-max bg-[#f9fafb]">
          <div className="mt-7 flex justify-between items-center
        border-2 w-full min-w-max px-4 py-5 rounded-lg"
          >
            <div key={customer?.data?.id} className="flex gap-5">
              <img src={customer?.data?.Avatar} className="object-contain" alt="Customer Avatar" />
              <div className="text-[#000000]">
                <h2 className="font-bold text-lg ">
                  {customer?.data?.first_name}
                  <span className="ml-2">{customer?.data?.last_name}</span>
                </h2>
                <p className="sm:text-sm lg:text-lg font-semibold">{customer?.data?.email}</p>
                <p className="sm:text-sm lg:text-lg font-semibold">{customer?.data?.phone}</p>
              </div>
            </div>
            <div>
              <Button
                className="font-semibold text-white"
                paddingY="py-2"
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
        <ShipmentTable />

      </div>
    </div>
  );
}

export default Shipment;
