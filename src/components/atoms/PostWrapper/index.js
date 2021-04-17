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
