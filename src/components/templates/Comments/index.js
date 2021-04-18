import React from 'react';
import { StyledList } from 'components/atoms/List';
import Comment from 'components/organisms/Comment';
import { Title } from 'components/atoms/Title';

const Comments = ({ isVisible, comments }) => {
  return (
    <>
      <Title comments isVisible={isVisible}>
        Comments
      </Title>
      <StyledList isVisible={isVisible}>
        {comments.map((comment) => (
          <Comment comment={comment} key={`${comment.author}${comment.date}`} />
        ))}
      </StyledList>
    </>
  );
};

export default Comments;
