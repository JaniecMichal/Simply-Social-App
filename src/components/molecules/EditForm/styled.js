import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.platinum};
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
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
