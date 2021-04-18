import styled from 'styled-components';

export const LogoText = styled.h1`
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  color: ${({ theme }) => theme.colors.emperor};
  text-align: center;
`;
