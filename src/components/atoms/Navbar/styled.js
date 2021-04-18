import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.nav`
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.yaleBlue};
  padding: 20px;
  z-index: 100;
  position: sticky;
  top: 38.4px;
  left: 0;
`;

export const NavList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const NavListItem = styled.li`
  list-style-type: none;
  margin-right: 50px;

  &::last-child {
    margin-right: 0px;
  }
`;

const activeClassName = 'link-active';

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  &.${activeClassName} {
    color: ${({ theme }) => theme.colors.mainText};
    border: 2px solid ${({ theme }) => theme.colors.mainText};
  }

  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.big};
  text-transform: uppercase;
  padding: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.mainText};
  }
`;
