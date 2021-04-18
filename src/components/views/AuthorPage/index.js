import React from 'react';
import { useSelector } from 'react-redux';
import { Section } from 'components/atoms/Section';
import { PostContent } from 'components/atoms/PostContent';
import { Title } from 'components/atoms/Title';
import { selectUser } from 'mainComponent/redux/userSlice';
import Image from 'components/atoms/Image';

const AuthorPage = () => {
  const loggedUser = useSelector(selectUser);

  return (
    <>
      <Section singlePost>
        <Title>About me</Title>
        <PostContent>
          {loggedUser.name} future {loggedUser.position}
        </PostContent>
        <Image source={loggedUser.photo} altText={loggedUser.name} />
        <PostContent>{loggedUser.description}</PostContent>
      </Section>
    </>
  );
};

export default AuthorPage;
