import styled from 'styled-components';

export const AddingPost = styled.section`
  max-width: 100%;
  margin-top: 50px;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.platinum};
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 700;
  margin: 0 0 18px 0;
`;
