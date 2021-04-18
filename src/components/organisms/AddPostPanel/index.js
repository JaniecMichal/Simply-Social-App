import React from 'react';
import PostForm from 'components/molecules/PostForm';
import { Section } from 'components/atoms/Section';
import { Title } from 'components/atoms/Title';

const AddPostingPanel = () => (
  <Section>
    <Title>Write your post ✍ only interesting post are permitted 😛</Title>
    <PostForm />
  </Section>
);

export default AddPostingPanel;
