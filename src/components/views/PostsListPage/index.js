import React from 'react';
import PostsList from 'components/templates/PostsList';
import { Section } from 'components/atoms/Section';
import { Title } from 'components/atoms/Title';

const PostsListPage = () => {
  return (
    <Section>
      <Title>Latest posts</Title>
      <PostsList />
    </Section>
  );
};

export default PostsListPage;
