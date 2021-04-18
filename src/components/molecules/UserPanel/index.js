import React from 'react';
import { useSelector } from 'react-redux';
import { StyledWrapper } from './styled';
import LoggedUser from 'components/atoms/LoggedUser';
import { selectUser } from 'core/redux/userSlice';

const UserPanel = () => {
  const loggedUser = useSelector(selectUser);

  return (
    <StyledWrapper>
      <LoggedUser user={loggedUser} />
    </StyledWrapper>
  );
};

export default UserPanel;
