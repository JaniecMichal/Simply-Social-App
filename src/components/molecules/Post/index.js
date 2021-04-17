import React from 'react';
import { PostContent, PostWrapper, CommentsQunatity, ShowMore } from './styled';
import Details from 'components/atoms/Details';

const Post = ({
  postDetails: { author, data, profileIcon, content, comments },
}) => {
  return (
    <PostWrapper>
      <Details icon={profileIcon} name={author} data={data} />
      <PostContent>{content}</PostContent>
      <ShowMore>Show more comments ({comments.length})</ShowMore>
    </PostWrapper>
  );
};

export default Post;
