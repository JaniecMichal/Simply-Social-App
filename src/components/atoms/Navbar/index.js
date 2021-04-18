import React from 'react';
import { NavWrapper, StyledNavLink, NavList, NavListItem } from './styled';

const Navbar = ({ navigationItems }) => {
  return (
    <NavWrapper>
      <NavList>
        {navigationItems.map(({ name, path }) => (
          <NavListItem key={name}>
            <StyledNavLink to={path}>{name}</StyledNavLink>
          </NavListItem>
        ))}
      </NavList>
    </NavWrapper>
  );
};

export default Navbar;
