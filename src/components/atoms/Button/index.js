import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 50px;
`;

export const StyledButton = styled.button`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme }) => theme.colors.yaleBlue};
  margin-right: 15px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.bbEyes};
  border-color: ${({ theme }) => theme.colors.bbEyes};

  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }

  ${({ remove }) =>
    remove &&
    css`
      background-color: crimson;
      border-color: crimson;
      color: ${({ theme }) => theme.colors.text};
    `}

  &::last-child {
    margin-right: 0;
  }
`;
