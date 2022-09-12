/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { HiPlusSm } from 'react-icons/hi';
import { IoIosSearch } from 'react-icons/io';
import Destination from '../../assests/images/destination-line.svg';
import Import from '../../assests/images/import.png';
import Export from '../../assests/images/export.png';
import useFetchData from '../../api/useFetchData';
import { formatDate } from '../data/dateTime';
import Button from './inputs/Button';

function ShipmentTable() {
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [listBackup, setListBackup] = useState([]);
  const [search, setSearch] = useState('');
  const [shipmentType, setShipmentType] = useState(null);
  const [shipmentDate, setShipmentDate] = useState('Shipment Date');

  const { data, status: listStatus } = useFetchData({
    endpoint: '/get_single_customer_shipments',
    queryKey: [123456789],
    param: 123456789
  });
  console.log(data);

  useEffect(() => {
    if (listStatus === 'success') {
      setList(data?.data);
      setListBackup(data?.data);
    }
  }, [listStatus, data]);

  const handleSearch = (value, listToFilter) => {
    if (!value) return listToFilter;

    const filteredList = listToFilter
      ?.filter((t) => (t?.origin_port_code?.toLowerCase().includes(value.toLowerCase()))
                || (t?._id?.toLowerCase().includes(value.toLowerCase()))
                || (t?.origin_port_city?.toLowerCase().includes(value.toLowerCase()))
                || (t?.origin_port_country?.toLowerCase().includes(value.toLowerCase()))
                || (t?.destination_port_code?.toLowerCase().includes(value.toLowerCase()))
                || (t?.destination_port_country?.toLowerCase().includes(value.toLowerCase()))
                || (t?.destination_port_city?.toLowerCase().includes(value.toLowerCase())));
    return filteredList;
  };

  const handleTypeFilter = (value, listToFilter) => {
    if (!value?.value) return listToFilter;
    const filteredList = listToFilter?.filter((t) => t?.shipping_type === value?.value);
    return filteredList;
  };

  useEffect(() => {
    const listToFilter = listBackup.slice();
    let filteredList = handleSearch(search, listToFilter);
    filteredList = handleTypeFilter(shipmentType, filteredList);
    setList(filteredList);
  }, [search, shipmentType]);

  const dateOption = [
  ];
  const typeOption = [
    { value: 'export', label: 'Export' },
    { value: 'import', label: 'Import' }
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mt-10 justify-between py-5">
        <div className="w-1/2 flex flex-wrap gap-2 justify-between">
          <Button
            className="font-semibold text-white w-16 min-w-max py-2"
            paddingY=""
          >
            Add Customer
            <HiPlusSm className="text-white w-5 h-auto mr-4" />
          </Button>
          <Select
            className="w-16 min-w-max"
            onChange={(value) => setShipmentType(value)}
            options={typeOption}
            value={shipmentType}
            isClearable
            placeholder="Shipment Type"
          />
          <Select
            className="w-16 min-w-max"
            defaultValue={shipmentDate}
            onChange={setShipmentDate}
            options={dateOption}
            placeholder="Shipment Date"
          />
        </div>
        <div className="relative w-80">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="border-2 border-borderColor w-full h-10 rounded outline-none pl-7"
            type="text"
            placeholder="Search by shipment ID, Destination"
          />
          <IoIosSearch className="absolute top-3 left-2 h-5 w-5 " />
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

          {list?.map((detail) => (
            <tbody className="" key={detail?.createdAt}>
              <tr className="border border-borderColor hover:bg-secondary">
                <td className="flex items-center py-3 px-4 text-lg text-black font-semibold">
                  {detail?.shipping_type === 'import'
                    ? <img className="bg-secondary rounded-full" src={Import} alt="" />
                    : <img className="bg-secondary rounded-full" src={Export} alt="" />}
                  <span className="first-letter:uppercase">
                    {detail?.shipping_type}
                  </span>
                </td>
                <td className="font-semibold px-4">
                  <p className="text-lg text-black">
                    {detail?.shipping_type === 'import'
                      ? detail?.delivery_location : detail?.pickup_location}
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
                    {detail?.shipping_type === 'import'
                      ? detail?.origin_port_code : detail?.destination_port_code}
                  </p>
                  <p>
                    {detail?.shipping_type === 'import'
                      ? detail?.origin_port_country : detail?.destination_port_country}
                  </p>
                </td>
                <td className="text-lg text-black font-semibold px-4">
                  {formatDate(detail?.createdAt)}
                </td>
                <td className="text-lg text-black font-semibold px-4">
                  {detail?._id}
                </td>

                <td className="px-4">
                  <Button
                    onClick={() => navigate('/shipment/shipment-details')}
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

export default ShipmentTable;
