import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  background-color: ${({ theme }) => theme.colors.platinum};
`;

export const StyledTextInput = styled.textarea`
  width: 80%;
  height: 100px;
  resize: none;
  margin-right: 20px;
  background-color: ${({ theme }) => theme.colors.bbEyes};
  border: 2px solid ${({ theme }) => theme.colors.frost};
  border-radius: 10px;
`;

export const Button = styled.button`
  width: 20%;
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
