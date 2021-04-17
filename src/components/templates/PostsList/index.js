import React from 'react';
import { useSelector } from 'react-redux';
import Post from 'components/organisms/Post';
import { StyledList } from 'components/atoms/List';
import { selectPosts } from 'mainComponent/redux/postSlice';

const PostsList = () => {
  const posts = useSelector(selectPosts);

  return (
    <StyledList isPostList>
      {posts.map((post) => (
        <Post postDetails={post} key={`${post.author}${post.date}`} />
      ))}
    </StyledList>
  );
};

export default PostsList;
