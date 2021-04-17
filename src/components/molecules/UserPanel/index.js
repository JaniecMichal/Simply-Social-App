import React from 'react';
import { useSelector } from 'react-redux';
import { StyledHeader, ProfilePhoto } from './styled';
import BioData from 'components/atoms/BioData';
import { selectUser } from 'mainComponent/redux/userSlice';

const UserPanel = () => {
  const loggedUser = useSelector(selectUser);

  return (
    <StyledHeader>
      <ProfilePhoto src={loggedUser.photo} alt="yourPhoto" />
      <BioData user={loggedUser} />
    </StyledHeader>
  );
};

export default UserPanel;
