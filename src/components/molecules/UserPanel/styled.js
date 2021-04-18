import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 10px 10px;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    position: static;
    align-self: flex-end;
  }
`;
