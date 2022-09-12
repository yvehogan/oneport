import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function TabLink({
  children, className = '', active, link
}) {
  return (
    <Link to={link}>
      <li className={`${className} ${active ? 'after:absolute' : ''} relative hover:text-black hover:after:absolute after:w-28 after:h-1  after:bg-primary after:left-0 after:-bottom-3.5`}>
        {children}
      </li>
    </Link>
  );
}

export default TabLink;

TabLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  link: PropTypes.string,
  active: PropTypes.bool
};

TabLink.defaultProps = {
  children: 'Nav Link',
  className: '',
  link: '',
  active: true
};
