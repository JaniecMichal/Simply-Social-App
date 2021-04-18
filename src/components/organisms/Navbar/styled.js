import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.nav`
  max-width: 100%;
  padding: 20px;
  z-index: 100;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.mainBackground};

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    justify-content: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
  }
`;

export const NavListItem = styled.li`
  list-style-type: none;
  margin-right: 50px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-right: 0;
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const activeClassName = 'link-active';

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  &.${activeClassName} {
    border: 2px solid ${({ theme }) => theme.colors.mainText};
  }

  text-decoration: none;
  color: ${({ theme }) => theme.colors.mainText};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.big};
  text-transform: uppercase;
  padding: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.mainText};
  }
`;
