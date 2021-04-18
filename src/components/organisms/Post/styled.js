import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px 10px 15px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.yaleBlue};
`;

export const ShowComments = styled.span`
  color: ${({ theme }) => theme.colors.yaleBlue};
  font-weight: 700;
`;
