import React from 'react';

import { StyledLink, StyledNavItem } from './styled';

const NavItem = ({ data }) => {
  const { navItemCount, path, name } = data;

  return (
    <StyledLink to={path} count={navItemCount}>
      <StyledNavItem count={navItemCount}>
        {name}
      </StyledNavItem>
    </StyledLink>
  );
};

export default NavItem;
