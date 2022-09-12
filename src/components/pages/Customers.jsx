import React from 'react';
import { HiPlusSm } from 'react-icons/hi';

import Button from '../layouts/inputs/Button';
import CustomersTable from '../layouts/CustomersTable';

function Customers() {
  return (
    <div className="mt-28 pl-14 pr-4 w-full">
      <div>
        <Button
          className="font-semibold text-white"
          paddingY="py-3"
        >
          Add Customer
          <HiPlusSm className="text-white w-5 h-auto mr-4" />
        </Button>
      </div>
      <CustomersTable />
    </div>

  );
}

export default Customers;
