import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { StyledForm, Button } from './styled';
import { addPost } from 'core/redux/postSlice';
import { selectUser } from 'core/redux/userSlice';
import { useCurrentDate } from 'assets/customHooks/useCurrentDate';
import { createDate } from 'assets/customFunctions/createDate';
import { StyledTextInput } from 'components/atoms/Textarea';
import { StyledTitleInput } from 'components/atoms/Input';

const PostForm = () => {
  const [newTitleValue, setNewTitleValue] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newFullContent, setNewFullContent] = useState('');
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
        fullContent: newFullContent.trim(),
        date: createDate(date),
        comments: [],
      })
    );
    setNewTitleValue('');
    setNewPostContent('');
    setNewFullContent('');
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <p>
        <label htmlFor="title">Write post tite</label>
        <StyledTitleInput
          id="title"
          name="title"
          placeholder="Write post title"
          value={newTitleValue}
          onChange={({ target }) => setNewTitleValue(target.value)}
          required
        />
      </p>
      <p>
        <label htmlFor="abstract">Write post abstract</label>
        <StyledTextInput
          id="abstract"
          name="abstract"
          value={newPostContent}
          onChange={({ target }) => setNewPostContent(target.value)}
          required
        />
      </p>
      <p>
        <label htmlFor="mainContent">Write post main content</label>
        <StyledTextInput
          id="mainContent"
          name="mainContent"
          value={newFullContent}
          onChange={({ target }) => setNewFullContent(target.value)}
          required
        />
      </p>
      <Button>Submit new post</Button>
    </StyledForm>
  );
};

export default PostForm;
