import styled from 'styled-components';

export const StyledTextInput = styled.textarea`
  width: 50%;
  height: 100px;
  resize: none;
  margin-right: 20px;
  background-color: ${({ theme }) => theme.colors.bbEyes};
  border: 2px solid ${({ theme }) => theme.colors.frost};
  border-radius: 10px;
`;
