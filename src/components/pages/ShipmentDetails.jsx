/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  Tab, Tabs, TabList, TabPanel
} from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import useFetchData from '../../api/useFetchData';
import Export from '../../assests/images/export.png';
import Destination from '../../assests/images/destination-line.svg';
import bgMask from '../../assests/images/bg-mask.png';
import TabComponent from '../layouts/inputs/TabComponent';

function ShipmentDetails() {
  const navigate = useNavigate();

  const { data: shipmentDetail, status } = useFetchData({
    endpoint: '/get_single_shipment_details',
    param: 987654321,
    queryKey: [987654321]
  });
  console.log(shipmentDetail);

  return (
    <div className="mt-28 px-10 max-w-3xl">
      {status === 'loading' && <p>Loading...</p>}

      <div className="w-full">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-4">
            <BiArrowBack
              onClick={() => navigate('/shipment')}
              className="w-8 h-auto"
            />
            <h1>Shipment Details</h1>
          </div>
          <div className="flex gap-2">
            <p className="border-2 border-borderColor p-2 rounded">Invoice</p>
            <p className="border-2 border-borderColor p-2 rounded">Track/Update Shipment</p>
          </div>
        </div>

        <div>
          <div key={shipmentDetail?.data.id} className="bg-primary rounded-t-xl mt-5 text-white flex justify-between p-5">
            <div className="flex gap-3 font-semibold">
              <img className="bg-white" src={Export} alt="" />
              <span className="first-letter:uppercase">{shipmentDetail?.data?.shipping_type}</span>
            </div>
            <p>{shipmentDetail?.data?.shipment_pickup_date}</p>
            <div>
              <p>Shipment ID</p>
              <p>{shipmentDetail?.data?._id}</p>
            </div>
          </div>

          <div
            style={{ background: `url(${bgMask}) ` }}
            className="w-full p-5"
          >
            <div className="max-w-md flex justify-between items-center">
              <div>
                <p>PORT OF DISCHARGE</p>
                <h1>{shipmentDetail?.data?.local_government}</h1>
                <p>{shipmentDetail?.data?.state}</p>
              </div>
              <img className="h-2 w-auto" src={Destination} alt="" />
              <div>
                <p>DELIVERY LOCATION</p>
                <h1>{shipmentDetail?.data?.destination_port_city}</h1>
                <p>{shipmentDetail?.data?.destination_port_country}</p>
              </div>

            </div>
          </div>
          <Tabs className="mt-5 w-full">
            <div className="w-full border-b-2 py-2">
              <TabList className="flex max-w-md justify-between">
                <Tab className="outline-none">Title 1</Tab>
                <Tab className="outline-none">Title 2</Tab>
                <Tab className="outline-none">Title 2</Tab>
                <Tab className="outline-none">Title 2</Tab>
              </TabList>
            </div>

            <TabPanel>
              <TabComponent />
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>

        </div>

      </div>
    </div>
  );
}

export default ShipmentDetails;
