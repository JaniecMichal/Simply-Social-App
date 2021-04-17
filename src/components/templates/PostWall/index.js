import React from 'react';
import { initialPosts } from 'assets/initialPosts/initialPosts';
import { Section } from 'components/atoms/Section';
import { Title } from 'components/atoms/Title';
import PostsList from 'components/organisms/PostsList';

const PostWall = () => {
  return (
    <Section>
      <Title>Latest posts</Title>
      <PostsList initialPosts={initialPosts} />
    </Section>
  );
};

export default PostWall;
