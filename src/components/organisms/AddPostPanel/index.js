import React from 'react';
import AddPostForm from 'components/molecules/AddPostForm';
import { Section } from 'components/atoms/Section';
import { Title } from 'components/atoms/Title';

const AddPostingPanel = () => (
  <Section>
    <Title>Write your post ✍ only interesting post are permitted 😛</Title>
    <AddPostForm />
  </Section>
);

export default AddPostingPanel;
