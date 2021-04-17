import { selectUser } from 'mainComponent/redux/userSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import { ButtonWrapper, StyledButton } from '../../atoms/Button';
import { Wrapper, ProfileIcon, AuthorName, PostData } from './styled';

const Details = ({ icon, name, data }) => {
  const loggedUser = useSelector(selectUser);

  return (
    <Wrapper>
      <ProfileIcon src={icon} alt="author profileIcon" />
      <div>
        <AuthorName>{name}</AuthorName>
        <PostData>{data}</PostData>
      </div>
      <ButtonWrapper isVisible={loggedUser.name === name ? true : false}>
        <StyledButton>Edit</StyledButton>
        <StyledButton remove>Remove</StyledButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Details;
