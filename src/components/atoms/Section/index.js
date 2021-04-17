import styled, { css } from 'styled-components';

export const Section = styled.section`
  max-width: 100%;
  margin-top: 50px;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.platinum};

  ${({ post }) =>
    post &&
    css`
      margin-top: 16px;
      padding: 0;
    `}
`;
