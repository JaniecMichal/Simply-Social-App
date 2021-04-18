import styled, { css } from 'styled-components';

export const PostWrapper = styled.li`
  margin-bottom: 20px;
  padding: 24px;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  &:first-child {
    grid-column-end: span 3;
  }

  ${({ comment }) =>
    comment &&
    css`
      padding: 50px;
      border-bottom: 3px solid ${({ theme }) => theme.colors.emperor};
    `}
`;
