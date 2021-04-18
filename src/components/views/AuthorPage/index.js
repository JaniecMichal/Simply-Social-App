import React from 'react';
import { useSelector } from 'react-redux';
import { Section } from 'components/atoms/Section';
import { PostContent } from 'components/atoms/PostContent';
import { Title } from 'components/atoms/Title';
import { selectUser } from 'mainComponent/redux/userSlice';
import { ImageWrapper, StyledImg } from './styled';

const AuthorPage = () => {
  const loggedUser = useSelector(selectUser);

  return (
    <>
      <Section singlePost>
        <Title>About me</Title>
        <PostContent>
          {loggedUser.name} working as {loggedUser.position}
        </PostContent>
        <ImageWrapper>
          <StyledImg src={loggedUser.photo} alt={loggedUser.name} />
        </ImageWrapper>
        <PostContent>{loggedUser.description}</PostContent>
      </Section>
    </>
  );
};

export default AuthorPage;
