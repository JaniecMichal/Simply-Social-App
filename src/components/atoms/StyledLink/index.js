import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.yaleBlue};
  font-weight: 700;
  margin-left: 10px;

  &:hover {
    filter: brightness(1.3);
  }
`;
