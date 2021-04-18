import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ comment }) =>
    comment &&
    css`
      display: flex;
      align-items: center;
    `}
`;

export const ProfileIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 15px;
`;

export const AuthorName = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.big};
  color: ${({ theme }) => theme.colors.yaleBlue};
`;

export const PostDate = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.bGrey};
`;
