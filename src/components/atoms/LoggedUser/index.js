import React from 'react';
import { Wrapper, Name, Caption } from './styled';

const LoggedUser = ({ user: { name } }) => {
  return (
    <Wrapper>
      <Caption>You are logged as</Caption>
      <Name>{name}</Name>
    </Wrapper>
  );
};

export default LoggedUser;
