import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../layouts/inputs/Sidebar';
import Header from '../common/Header';

function PageWrapper({ children }) {
  return (
    <div className="w-full flex h-full min-h-screen relative md">
      <Sidebar />
      <Header />
      <div className="w-full lg:pl-80 pl-12 pt-12">
        {children}
      </div>
    </div>
  );
}

export default PageWrapper;

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired
};
