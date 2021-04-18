import React from 'react';
import { Section } from 'components/atoms/Section';
import { Title } from 'components/atoms/Title';
import PostsList from 'components/templates/PostsList';

const PostWall = () => {
  return (
    <Section>
      <Title>Latest posts</Title>
      <PostsList />
    </Section>
  );
};

export default PostWall;
