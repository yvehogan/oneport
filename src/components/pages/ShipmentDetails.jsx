/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  Tab, Tabs, TabList, TabPanel
} from 'react-tabs';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import useFetchData from '../../api/useFetchData';
import Export from '../../assests/images/export.png';
import Destination from '../../assests/images/destination-line.svg';
import bgMask from '../../assests/images/bg-mask.png';
import TabComponent from '../layouts/TabComponent';
import { formatDate } from '../data/dateTime';
import TabLink from '../common/TabLinks';

function ShipmentDetails() {
  const navigate = useNavigate();

  const { data: shipmentDetail, status } = useFetchData({
    endpoint: '/get_single_shipment_details',
    param: 987654321,
    queryKey: [987654321]
  });

  return (
    <div className="w-full">
      <div className="mt-28 max-w-3xl">
        <div className="px-10">
          {status === 'loading' && <p>Loading...</p>}

          <div className="w-fu overflow-auto mt-8 pb-24">
            <div className="flex justify-between w-full">
              <div className="flex items-center gap-4">
                <BiArrowBack
                  onClick={() => navigate('/shipment')}
                  className="w-8 h-auto"
                />
                <h1 className="text-xl font-semibold">Shipment Details</h1>
              </div>
              <div className="flex gap-2">
                <p className="border-2 border-borderColor p-2 rounded min-w-max">Invoice</p>
                <p className="border-2 border-borderColor p-2 rounded min-w-max">Track/Update Shipment</p>
              </div>
            </div>

            <div>
              <div key={shipmentDetail?.data.id} className="bg-primary rounded-t-xl mt-5 text-white flex justify-between p-5 min-w-max">
                <div className="flex gap-3 font-semibold">
                  <img className="bg-white rounded-full h-8 w-auto min-w-max" src={Export} alt="" />
                  <span className="first-letter:uppercase min-w-max">{shipmentDetail?.data?.shipping_type}</span>
                </div>
                <p className="min-w-max">{formatDate(shipmentDetail?.data?.shipment_pickup_date)}</p>
                <div>
                  <p className="min-w-max">Shipment ID</p>
                  <p className="min-w-max">{shipmentDetail?.data?._id}</p>
                </div>
              </div>

              <div
                style={{ background: `url(${bgMask})` }}
                className="w-full p-5 min-w-max"
              >
                <div className="max-w-md flex justify-between items-center">
                  <div className="font-semibold">
                    <p className="text-sm min-w-max">PORT OF DISCHARGE</p>
                    <h1 className="text-2xl min-w-max">{shipmentDetail?.data?.local_government}</h1>
                    <p className="min-w-max">{shipmentDetail?.data?.state}</p>
                  </div>
                  <img className="h-2 w-auto min-w-max" src={Destination} alt="" />
                  <div className="font-semibold min-w-max">
                    <p className="text-sm font-semibold min-w-max">DELIVERY LOCATION</p>
                    <h1 className="text-2xl min-w-max">{shipmentDetail?.data?.destination_port_city}</h1>
                    <p>{shipmentDetail?.data?.destination_port_country}</p>
                  </div>

                </div>
              </div>
              <Tabs className="mt-5 w-full">
                <div className="w-full border-b-2 py-2">
                  <TabList className="flex max-w-md justify-between">
                    <TabLink>
                      <Tab
                        active
                        className="outline-none ml-4"
                      >
                        Documents
                      </Tab>
                    </TabLink>
                    <Tab className="outline-none ml-6 min-w-max">Cargo Details</Tab>
                    <Tab className="outline-none ml-6 min-w-max">Additional Services</Tab>
                    <Tab className="outline-none ml-6 min-w-max">Rates</Tab>
                  </TabList>
                </div>

                <TabPanel>
                  <TabComponent />
                </TabPanel>
                <TabPanel>
                  <h2>No Content</h2>
                </TabPanel>
                <TabPanel>
                  <h2>No Content</h2>
                </TabPanel>
                <TabPanel>
                  <h2>No Content</h2>
                </TabPanel>
              </Tabs>

            </div>

          </div>
        </div>
      </div>
    </div>

  );
}

export default ShipmentDetails;
