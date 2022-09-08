import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../layouts/inputs/Sidebar';
import Header from '../common/Header';

function PageWrapper({ children }) {
  return (
    <div className="w-full h-full min-h-screen relative md">
      <Sidebar />
      <Header />
      <div className="w-full text-textColor pl-60">
        <div className="w-full relative max-w-screen-xl pt-12 pb-">
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
