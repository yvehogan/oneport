import React from 'react';
import { HiPlusSm } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useFetchData from '../../api/useFetchData';
import Button from '../layouts/inputs/Button';

function Customers() {
  const navigate = useNavigate();
  const { data, status } = useFetchData({ endpoint: 'get_customers' });
  console.log(data);

  return (
    <div className="mt-28 px-10 w-full">
      {status === 'loading' && <p>Loading...</p>}
      <div>
        <Button
          className="font-semibold text-white"
          paddingY="py-3"
        >
          Add Customer
          <HiPlusSm className="text-white w-5 h-auto mr-4" />
        </Button>
      </div>
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
            <tr key={item?.id} className="border border-borderColor">
              <td className="flex items-center pl-5 py-3">
                <img
                  className="rounded-full w-12 h-12 mr-2"
                  src={item?.Avatar}
                  alt="gallery"
                />
                {item?.first_name}
              </td>

              <td className="">
                {item?.last_name}
              </td>

              <td className="">
                {item?.email}
              </td>

              <td className="">
                {item?.phone}
              </td>
              <td className="">
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
Customers.propTypes = {
  data: PropTypes.shape({
    status: PropTypes.string
  })
};

Customers.defaultProps = {
  data: {
    status: ''
  }
};

export default Customers;
