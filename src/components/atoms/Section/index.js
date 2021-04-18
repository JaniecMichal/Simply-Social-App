import styled, { css } from 'styled-components';

export const Section = styled.section`
  max-width: 100%;
  margin-top: 50px;
  padding: 30px;

  ${({ post }) =>
    post &&
    css`
      margin-top: 16px;
      padding: 0;
    `}

  ${({ singlePost }) =>
    singlePost &&
    css`
      display: flex;
      flex-direction: column;
      border-bottom: 4px solid ${({ theme }) => theme.colors.yaleBlue};
    `}
`;
