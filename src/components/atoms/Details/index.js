import React from 'react';
import { ButtonWrapper, StyledButton } from '../Button';
import { Wrapper, ProfileIcon, AuthorName, PostData } from './styled';

const Details = ({ icon, name, data }) => {
  return (
    <Wrapper>
      <ProfileIcon src={icon} alt="author profileIcon" />
      <div>
        <AuthorName>{name}</AuthorName>
        <PostData>{data}</PostData>
      </div>
      <ButtonWrapper>
        <StyledButton>Edit</StyledButton>
        <StyledButton remove>Remove</StyledButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Details;
