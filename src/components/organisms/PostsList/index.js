import React from 'react';
import Post from 'components/molecules/Post';
import { StyledList } from 'components/atoms/List';

const PostsList = ({ initialPosts }) => {
  return (
    <StyledList isPostList={true}>
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
