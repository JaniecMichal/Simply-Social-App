import React from 'react';
import { useSelector } from 'react-redux';
import { StyledHeader } from './styled';
import LoggedUser from 'components/atoms/LoggedUser';
import { selectUser } from 'core/redux/userSlice';

const UserPanel = () => {
  const loggedUser = useSelector(selectUser);

  return (
    <StyledHeader>
      <LoggedUser user={loggedUser} />
    </StyledHeader>
  );
};

export default UserPanel;
