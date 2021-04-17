import styled, { css } from 'styled-components';

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: none;

  ${({ isPostList }) =>
    isPostList &&
    css`
      display: inherit;
    `}

  ${({ isVisible }) =>
    isVisible &&
    css`
      display: inherit;
    `}
`;
