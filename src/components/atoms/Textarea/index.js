import styled from 'styled-components';

export const StyledTextInput = styled.textarea`
  width: 100%;
  height: 400px;
  resize: none;
  margin-right: 20px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.bbEyes};
  border: 2px solid ${({ theme }) => theme.colors.frost};
  border-radius: 10px;
`;
