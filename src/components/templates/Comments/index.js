import React from 'react';
import Comment from 'components/organisms/Comment';
import { StyledList } from 'components/atoms/List';
import { Title } from 'components/atoms/Title';

const Comments = ({ comments }) => {
  return (
    <>
      <Title comments>Comments</Title>
      <StyledList>
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </StyledList>
    </>
  );
};

export default Comments;
