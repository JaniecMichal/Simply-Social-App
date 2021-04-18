import styled, { css } from 'styled-components';

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  font-weight: 700;
  margin: 24px 0 18px 0;

  ${({ comments }) =>
    comments &&
    css`
      display: none;

      ${({ isVisible }) =>
        isVisible &&
        css`
          display: inherit;
        `}
    `}
`;
