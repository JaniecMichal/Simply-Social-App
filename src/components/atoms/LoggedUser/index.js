import React from 'react';
import { StyledLink } from '../StyledLink';
import { Wrapper, LogInfo, Name, Caption, AddNewWrapper } from './styled';
import { toAddPage } from 'mainComponent/routes';

const LoggedUser = ({ user: { name } }) => {
  return (
    <Wrapper>
      <LogInfo>
        <Caption>You are logged as</Caption>
        <Name>{name}</Name>
      </LogInfo>
      <AddNewWrapper>
        <StyledLink to={toAddPage()}>Add new post</StyledLink>
      </AddNewWrapper>
    </Wrapper>
  );
};

export default LoggedUser;
