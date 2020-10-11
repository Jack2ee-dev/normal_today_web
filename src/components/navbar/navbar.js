import React from 'react';
import { Link } from 'react-router-dom';

import NavItem from './navItem';
import { StyledNavbar, StyledNavItem } from './styled';

const PAGE_INCLUDING_NAVBAR = [
  '/today',
  '/plan',
  '/calendar',
  '/my',
];

const NAVITEMS = [
  {
    path: '/today',
    name: '오늘',
  },
  {
    path: '/plan',
    name: '계획',
  },
  {
    path: '/calendar',
    name: '달력',
  },
  {
    path: '/my',
    name: '나',
  },
];

const Navbar = (props) => {
  return (
    <StyledNavbar>
      {NAVITEMS.map(({ path, name }, key) => (
        <NavItem
          key={key}
          data={{
            navItemCount: NAVITEMS.length,
            path: path,
            name: name,
          }}
        />
      ))}
    </StyledNavbar>
  );
};

export default Navbar;
