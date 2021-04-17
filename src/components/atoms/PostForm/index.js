import React from 'react';
import {
  StyledForm,
  StyledTitleInput,
  StyledTextInput,
  Button,
} from './styled';

const PostForm = () => {
  return (
    <StyledForm>
      <StyledTitleInput placeholder="Write post title" required />
      <StyledTextInput required></StyledTextInput>
      <Button>Add your post</Button>
    </StyledForm>
  );
};

export default PostForm;
