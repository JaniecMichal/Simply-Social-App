import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledForm, Button } from './styled';
import { StyledTextInput } from 'components/atoms/Textarea';
import { StyledTitleInput } from 'components/atoms/Input';
import { useCurrentDate } from 'assets/customHooks/useCurrentDate';
import { createDate } from 'assets/customFunctions/createDate';
import { editPost } from 'core/redux/postSlice';

const EditForm = ({ postDetails, togglePostEdit }) => {
  const [editedTitleValue, setEditedTitleValue] = useState(postDetails.title);
  const [editedPostContent, setEdtedPostContent] = useState(
    postDetails.content
  );
  const [editedPostFullContent, setEdtedPostFullContent] = useState(
    postDetails.fullContent
  );
  const date = useCurrentDate();
  const dispatch = useDispatch();
  const edit = true;

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!editedTitleValue.trim() || !editedPostContent.trim()) {
      return;
    }

    dispatch(
      editPost({
        ...postDetails,
        title: editedTitleValue.trim(),
        content: editedPostContent.trim(),
        fullContent: editedPostFullContent.trim(),
        date: createDate(date, edit),
      })
    );
    togglePostEdit();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledTitleInput
        placeholder="Write post title"
        value={editedTitleValue}
        onChange={({ target }) => setEditedTitleValue(target.value)}
        required
      />
      <StyledTextInput
        value={editedPostContent}
        onChange={({ target }) => setEdtedPostContent(target.value)}
        required
      />
      <StyledTextInput
        value={editedPostFullContent}
        onChange={({ target }) => setEdtedPostFullContent(target.value)}
        required
      />
      <Button>Submit</Button>
    </StyledForm>
  );
};

export default EditForm;
