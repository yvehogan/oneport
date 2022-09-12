import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchData from '../../api/useFetchData';
import Button from './inputs/Button';

function CustomersTable() {
  const navigate = useNavigate();
  const { data, status } = useFetchData({ endpoint: 'get_customers' });

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      <div className=" overflow-auto mt-8 pb-24">
        <table className=" w-full min-w-max" style={{ borderSpacing: '0 10px' }}>
          <thead className="">
            <tr className="text-left text-xs">
              <th className="pb-3 font-semibold ">FIRST NAME</th>
              <th className="pb-3 font-semibold">LAST NAME</th>
              <th className="pb-3 font-semibold">EMAIL ADDRESS</th>
              <th className="pb-3 font-semibold">PHONE NUMBER</th>
              <th className="pb-3 font-semibold">LAST LOGIN</th>
              <th>{null}</th>
              <th className="pb-3 px-2">{null}</th>
            </tr>
          </thead>

          {data?.data?.map((item) => (
            <tr key={item?.id} className="border border-borderColor font-bold text-black">
              <td className="flex items-center pl-5 py-3 px-4">
                <img
                  className="rounded-full w-12 h-12 mr-2"
                  src={item?.Avatar}
                  alt="gallery"
                />
                {item?.first_name}
              </td>

              <td className="pr-4">
                {item?.last_name}
              </td>

              <td className="pr-4">
                {item?.email}
              </td>

              <td className="pr-4">
                {item?.phone}
              </td>
              <td className="pr-4">
                Apr 02, 2022
              </td>

              <td className="">
                <Button
                  onClick={() => navigate('/shipment')}
                  className=" text-black"
                  bgColor=""
                  border
                  fontSize="text-sm"
                >
                  Shipments
                </Button>
              </td>
              <td className="">
                <Button
                  className="text-white"
                  fontSize="text-sm"
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default CustomersTable;
