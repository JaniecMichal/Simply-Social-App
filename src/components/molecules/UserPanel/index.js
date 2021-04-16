import React from 'react';
import photo from 'assets/images/noPhoto.jpeg';
import { StyledHeader, ProfilePhoto } from './styled';
import BioData from 'components/atoms/BioData';
import { user } from 'assets/userData/user';

const UserPanel = () => (
  <StyledHeader>
    <ProfilePhoto src={photo} alt="yourPhoto" />
    <BioData user={user} />
  </StyledHeader>
);

export default UserPanel;
