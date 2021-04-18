import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-left: 60px;
  display: flex;
`;

export const Name = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.yaleBlue};
  margin: 0;
  margin-left: 10px;
`;

export const Caption = styled.p`
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme }) => theme.colors.bGrey};
  margin: 0;
`;
