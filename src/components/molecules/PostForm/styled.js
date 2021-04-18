import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  background-color: ${({ theme }) => theme.colors.platinum};
`;

export const Button = styled.button`
  width: 25%;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.yaleBlue};
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.yaleBlue};
  border-radius: 10px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 700;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.frost};
  }
`;
