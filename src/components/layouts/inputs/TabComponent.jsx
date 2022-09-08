import React from 'react';
import Button from './Button';
import Upload from '../../../assests/images/upload.png';

function TabComponent() {
  return (
    <div className="flex justify-between items-center mt-5">
      <p>Uploaded Documents</p>
      <div className="flex gap-5">
        <Button
          className="font-semibold text-black"
          paddingY="py-3"
          bgColor="transparent"
          border
        >
          Request Document
        </Button>
        <Button
          className="font-semibold text-white"
          paddingY="py-3"
        >
          Add Customer
          <img className="pl-2" src={Upload} alt="" />
        </Button>
      </div>
    </div>
  );
}

export default TabComponent;
