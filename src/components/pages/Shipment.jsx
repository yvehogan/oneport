/* eslint-disable no-underscore-dangle */
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import Select from 'react-select';
import { HiPlusSm } from 'react-icons/hi';
import { IoIosSearch } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Destination from '../../assests/images/destination-line.svg';
import Import from '../../assests/images/import.png';
import Export from '../../assests/images/export.png';
import useFetchData from '../../api/useFetchData';

import Button from '../layouts/inputs/Button';

function Shipment() {
  const navigate = useNavigate();
  const [shipmentType, setShipmentType] = ('Shipment Type');
  const [shipmentDate, setShipmentDate] = ('Shipment Date');

  const { data: customer, status } = useFetchData({
    endpoint: '/get_single_customer',
    extra: 123456789
  });

  const { data: count } = useFetchData({
    endpoint: '/get_single_customer_shipments',
    queryKey: [123456789],
    param: 123456789
  });
  console.log(count);

  const dateOption = [
    { value: 'export', label: 'Nigeria' },
    { value: 'others', label: 'Others' }
  ];
  const typeOption = [
    { value: 'export', label: 'Export' },
    { value: 'import', label: 'Import' }
  ];

  return (
    <div className="mt-28 px-10 w-full">

      {status === 'loading' && <p>Loading...</p>}
      <BiArrowBack
        onClick={() => navigate('/')}
        className="w-8 h-auto"
      />
      <div className="w-1/2 bg-[#f9fafb]">
        <div className="mt-7 flex justify-between items-center
        border-2 w-full min-w-max px-4 py-5 rounded-lg"
        >
          <div key={customer?.data?.id} className="flex gap-5">
            <img src={customer?.data?.Avatar} className="object-contain" alt="Customer Avatar" />
            <div className="text-[#000000]">
              <h2 className="font-bold text-lg ">
                {customer?.data?.first_name}
                <span>{customer?.data?.last_name}</span>
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

      <div className="flex flex-wrap mt-10 justify-between py-5">
        <div className="w-1/2 flex gap-5   justify-between">
          <Button
            className="font-semibold text-white w-full md:w-1/3 min-w-max"
            paddingY=""
          >
            Add Customer
            <HiPlusSm className="text-white w-5 h-auto mr-4" />
          </Button>
          <Select
            className="w-full md:w-1/3 min-w-max"
            defaultValue={shipmentType}
            onChange={setShipmentType}
            options={typeOption}
            placeholder="Shipment Type"
          />
          <Select
            className="w-full md:w-1/3 min-w-max"
            defaultValue={shipmentDate}
            onChange={setShipmentDate}
            options={dateOption}
            placeholder="Shipment Date"
          />
        </div>
        <div className="relative w-72">
          <input className="border-2 border-borderColor w-full h-10 rounded outline-none placeholder:pl-8" type="text" placeholder="Search by shipment ID, Destination" />
          <IoIosSearch className="absolute top-3 left-2 h-5 w-5" />
        </div>
      </div>

      <div className=" overflow-auto mt-8 pb-24">
        <table className=" w-full min-w-max" style={{ borderSpacing: '0 10px' }}>
          <thead className="">
            <tr className="text-left text-xs">
              <th className="pb-3 font-semibold ">SHIPMENT TYPE</th>
              <th className="pb-3 px-4 font-semibold">ORIGIN</th>
              <th>{null}</th>
              <th className="pb-3 px-4 font-semibold">DESTINATION</th>
              <th className="pb-3 px-4 font-semibold">SHIPMENT DATE</th>
              <th className="pb-3 px-4 font-semibold">SHIPING ID</th>
              <th className="pb-3">{null}</th>
            </tr>
          </thead>

          {count?.data?.map((detail) => (
            <tbody className="" key={detail?.createdAt}>
              <tr className="border border-borderColor">
                <td className="flex items-center py-3 px-4 text-lg text-black font-semibold">
                  {detail?.shipping_type === 'import'
                    ? <img className="" src={Import} alt="" />
                    : <img className="" src={Export} alt="" />}
                  <span className="first-letter:uppercase">
                    {detail?.shipping_type}
                  </span>
                </td>
                <td className="font-semibold px-4">
                  <p className="text-lg text-black">
                    {detail?.delivery_location.length === 0
                      ? detail?.pickup_location : detail?.delivery_location}
                  </p>
                  <p>
                    {detail?.state}
                  </p>
                </td>

                <td className="px-4">
                  <img className="h-2 w-auto" src={Destination} alt="" />
                </td>

                <td className="font-semibold px-4">
                  <p className="text-lg text-black">
                    {detail?.origin_port_code === null
                      ? detail?.destination_port_code : detail?.origin_port_code}
                  </p>
                  <p>
                    {detail?.origin_port_country === null
                      ? detail?.destination_port_country : detail?.origin_port_country}
                  </p>
                </td>
                <td className="text-lg text-black font-semibold px-4">
                  Apr 02, 2022
                </td>
                <td className="text-lg text-black font-semibold px-4">
                  {detail?._id}
                </td>

                <td className="">
                  <Button
                    onClick={() => navigate('/shipment-details')}
                    className="text-white mr-5"
                    fontSize="text-sm"
                    paddingY="py-3"
                    paddingX="px-3"
                  >
                    View Details
                  </Button>
                </td>
              </tr>
            </tbody>

          ))}
        </table>
      </div>
    </div>
  );
}

export default Shipment;
