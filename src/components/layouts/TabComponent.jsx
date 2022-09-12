/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Select from 'react-select';

import Button from './inputs/Button';
import Upload from '../../assests/images/upload.png';
import Icon from '../../assests/images/Icon.png';
import Delete from '../../assests/images/delete.png';
import FileUpload from '../../assests/images/file-upload.png';

function TabComponent() {
  const [fileType, setFileType] = useState('Select document type');
  const [showModal, setShowModal] = useState(false);

  const typeOption = [
    { value: 'pdf', label: 'PDF' },
    { value: 'gif', label: 'Gif' },
    { value: 'jpg', label: 'JPG' }
  ];

  return (
    <div>
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
            onClick={() => setShowModal(true)}
            className="font-semibold text-white"
            paddingY="py-3"
          >
            Upload Document
            <img className="pl-2" src={Upload} alt="" />
          </Button>
        </div>
      </div>
      <div className="flex justify-between mt-7 border p-5 rounded">
        <div className="flex">
          <img className="pr-5 object-contain" src={Icon} alt="" />
          <div className="">
            <h1>NXP Form</h1>
            <h2>NXP-Form.pdf</h2>
            <p>uploaded by you</p>
          </div>
        </div>
        <img className="object-contain" src={Delete} alt="" />
      </div>

      <div className="flex justify-between mt-7 border p-5 rounded">
        <div className="flex">
          <img className="pr-5 object-contain" src={Icon} alt="" />
          <div className="">
            <h1>NXP Form</h1>
            <h2>NXP-Form.pdf</h2>
            <p>uploaded by you</p>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 "
          >
            <div className="relative w-1/2 ml-auto">
              <div className="shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-2">
                  <div className="flex items-center justify-end p-5">
                    <AiOutlineClose
                      onClick={() => setShowModal(false)}
                    />
                  </div>
                </div>
                <div className="relative p-6 flex-auto h-screen">
                  <h1 className="text-xl font-bold">Documents Upload</h1>
                  <p className="mt-2 text-slate-500 text-lg leading-relaxed">
                    Rhoncus dui convallis lorem egestas molestie vitae nibh.
                  </p>
                  <p className="mt-10 text-sm font-semibold mb-3">Select Document type to upload</p>
                  <Select
                    className="w-full"
                    defaultValue={fileType}
                    onChange={setFileType}
                    options={typeOption}
                    placeholder="Select document type"
                  />

                  <button
                    className="bg-secondary border w-full py-10 mt-7 rounded"
                    type="button"
                  >
                    <label htmlFor="image-upload" className="text-lg items-center text-textColor flex flex-col justify-between w-full px-4">
                      <img src={FileUpload} alt="" />
                      <p className="text-primary">
                        Click to upload a file
                        <span className="text-black"> or drag and drop</span>
                      </p>
                      <p>PNG, JPG, GIF upto 5MB</p>
                      <input type="file" hidden id="image-upload" />
                    </label>
                  </button>

                  <Button
                    className="font-semibold text-white float-right mt-5"
                    paddingY="py-3"
                  >
                    Upload
                  </Button>

                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-30 bg-black" />
        </>
      ) : null}

    </div>

  );
}

export default TabComponent;
