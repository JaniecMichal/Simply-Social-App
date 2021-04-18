import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  padding: 10px 10px;
  display: flex;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.platinum};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
`;
