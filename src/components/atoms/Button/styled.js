import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme }) => theme.colors.yaleBlue};
  margin-right: 15px;
  padding: 10px 20px;
  background-color: transparent;
  border-color: transparent;

  ${({ comment }) =>
    comment &&
    css`
      display: none;
    `}

  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
  &:last-child {
    margin-right: 0;
  }
`;
