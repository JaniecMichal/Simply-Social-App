import styled from 'styled-components';

export const PostWrapper = styled.li`
  border-bottom: 2px solid ${({ theme }) => theme.colors.bGrey};
  margin-bottom: 20px;
  padding: 24px;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

export const PostContent = styled.p`
  margin: 24px 0;
  padding: 0 15px;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.fontSize.normal};
`;

export const ShowMore = styled.button`
  color: ${({ theme }) => theme.colors.yaleBlue};
  font-weight: 700;
  background: transparent;
  border: none;
  padding: 15px;

  &:hover {
    color: ${({ theme }) => theme.colors.frost};
    font-size: ${({ theme }) => theme.fontSize.normal};
    cursor: pointer;
    text-decoration: underline;
  }
`;
