import React from 'react';
import { AddingPost, Title } from './styled';
import PostForm from 'components/atoms/PostForm';

const PostingPanel = () => (
  <AddingPost>
    <Title>Write your post ✍ only interested post are permitted 😛</Title>
    <PostForm />
  </AddingPost>
);

export default PostingPanel;
