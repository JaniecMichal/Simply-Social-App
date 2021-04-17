import React from 'react';
import PostForm from 'components/atoms/PostForm';
import { Section } from 'components/atoms/Section';
import { Title } from 'components/atoms/Title';

const PostingPanel = () => (
  <Section>
    <Title>Write your post ✍ only interested post are permitted 😛</Title>
    <PostForm />
  </Section>
);

export default PostingPanel;
