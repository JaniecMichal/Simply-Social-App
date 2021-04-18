import React from 'react';
import { useSelector } from 'react-redux';
import Post from 'components/organisms/Post';
import { StyledList } from 'components/atoms/List';
import { selectPosts } from 'mainComponent/redux/postSlice';

const PostsList = () => {
  const posts = useSelector(selectPosts);

  if (posts.length === 0)
    return <p>Sorry... I was lazy and I don't have new posts for you 😥</p>;

  return (
    <StyledList isPostList>
      {posts.map((post) => (
        <Post postDetails={post} key={`${post.author}${post.date}`} />
      ))}
    </StyledList>
  );
};

export default PostsList;
