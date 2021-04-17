import styled from 'styled-components';

export const ShowComments = styled.button`
  color: ${({ theme }) => theme.colors.yaleBlue};
  font-weight: 700;
  background: transparent;
  border: none;
  padding: 15px;

  &:hover {
    color: ${({ theme }) => theme.colors.frost};
    font-size: ${({ theme }) => theme.fontSize.normal};
    cursor: pointer;
    text-decoration: underline;
  }
`;
