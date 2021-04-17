import React from 'react';
import { StyledList } from 'components/atoms/List';
import Comment from 'components/molecules/Comment';

const Comments = ({ isVisible, comments }) => {
  return (
    <StyledList isVisible={isVisible}>
      {comments.map((comment) => (
        <Comment comment={comment} key={`${comment.author}${comment.data}`} />
      ))}
    </StyledList>
  );
};

export default Comments;
