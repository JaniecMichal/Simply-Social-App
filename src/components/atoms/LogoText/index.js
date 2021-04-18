import styled from 'styled-components';

export const LogoText = styled.h1`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  color: ${({ theme }) => theme.colors.mainText};
  text-align: center;
`;

export const LogoSubText = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.big};
  color: ${({ theme }) => theme.colors.mainText};
  text-align: center;
  text-transform: uppercase;
`;
