import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 15px 10px 15px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.yaleBlue};
`;

export const ShowComments = styled.button`
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
