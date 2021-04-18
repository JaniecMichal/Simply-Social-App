import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { StyledForm, Button } from './styled';
import { addPost } from 'mainComponent/redux/postSlice';
import { selectUser } from 'mainComponent/redux/userSlice';
import { useCurrentDate } from 'assets/customHooks/useCurrentDate';
import { createDate } from 'assets/customFunctions/createDate';
import { StyledTextInput } from 'components/atoms/Textarea';
import { StyledTitleInput } from 'components/atoms/Input';

const PostForm = () => {
  const [newTitleValue, setNewTitleValue] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const loggedUser = useSelector(selectUser);
  const dispatch = useDispatch();
  const date = useCurrentDate();

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!newTitleValue.trim() || !newPostContent.trim()) {
      return;
    }

    dispatch(
      addPost({
        id: nanoid(),
        author: loggedUser.name,
        profileIcon: loggedUser.photo,
        title: newTitleValue.trim(),
        content: newPostContent.trim(),
        date: createDate(date),
        comments: [],
      })
    );
    setNewTitleValue('');
    setNewPostContent('');
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledTitleInput
        placeholder="Write post title"
        value={newTitleValue}
        onChange={({ target }) => setNewTitleValue(target.value)}
        required
      />
      <StyledTextInput
        value={newPostContent}
        onChange={({ target }) => setNewPostContent(target.value)}
        required
      ></StyledTextInput>
      <Button>Add your post</Button>
    </StyledForm>
  );
};

export default PostForm;
