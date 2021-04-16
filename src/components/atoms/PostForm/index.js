import React from 'react';
import { StyledForm, StyledTextInput, Button } from './styled';

const PostForm = () => {
  return (
    <StyledForm>
      <StyledTextInput></StyledTextInput>
      <Button>Add your post</Button>
    </StyledForm>
  );
};

export default PostForm;
