import React from 'react';
import Post from 'components/molecules/Post';
import { StyledList } from './styled';

const PostsList = ({ initialPosts }) => {
  return (
    <StyledList>
      {initialPosts.map((initialPost) => (
        <Post
          postDetails={initialPost}
          key={`${initialPost.author}${initialPost.data}`}
        />
      ))}
    </StyledList>
  );
};

export default PostsList;
