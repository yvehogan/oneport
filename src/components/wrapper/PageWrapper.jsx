import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../layouts/inputs/Sidebar';
import Header from '../common/Header';


function PageWrapper({ children }) {

  return (
    <div className="w-full h-full min-h-screen relative md">
      <Sidebar />
      <div className="w-full text-textColor lg:pl-60">
        <div className="w-full relative max-w-screen-xl px-8 md:px-14 pt-14 pb-24">
          {/* <div className="absolute top-5 right-5 md:right-10"> */}
          <Header />
          {/* </div> */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default PageWrapper;

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired
};
