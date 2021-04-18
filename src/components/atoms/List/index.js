import styled, { css } from 'styled-components';

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;

  ${({ isPostList }) =>
    isPostList &&
    css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      @media (max-width: ${({ theme }) => theme.media.tablet}) {
        display: inherit;
      }
    `}
`;
