import styled from 'styled-components';

export const BioDataWrapper = styled.section`
  margin-left: 60px;
`;

export const Name = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.yaleBlue};
  margin: 24px 0 0 0;
`;

export const Position = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.bGrey};
`;

export const Description = styled.p`
  margin: 50px 0 0 0;
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.mainText};
`;
