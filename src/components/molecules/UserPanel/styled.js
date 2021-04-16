import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.platinum};
`;

export const ProfilePhoto = styled.img`
  width: 100%;
  max-width: 300px;
`;
