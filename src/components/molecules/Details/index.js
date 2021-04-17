import { selectUser } from 'mainComponent/redux/userSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import { ButtonWrapper, StyledButton } from '../../atoms/Button';
import { Wrapper, ProfileIcon, AuthorName, PostDate } from './styled';

const Details = ({ icon, name, date }) => {
  const loggedUser = useSelector(selectUser);

  return (
    <Wrapper>
      <ProfileIcon src={icon} alt="author profileIcon" />
      <div>
        <AuthorName>{name}</AuthorName>
        <PostDate>{date}</PostDate>
      </div>
      <ButtonWrapper isVisible={loggedUser.name === name ? true : false}>
        <StyledButton>Edit</StyledButton>
        <StyledButton remove>Remove</StyledButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Details;
