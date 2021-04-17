import React from 'react';
import { StyledList } from 'components/atoms/List';
import Comment from 'components/organisms/Comment';

const Comments = ({ isVisible, comments }) => {
  return (
    <StyledList isVisible={isVisible}>
      {comments.map((comment) => (
        <Comment comment={comment} key={`${comment.author}${comment.date}`} />
      ))}
    </StyledList>
  );
};

export default Comments;
