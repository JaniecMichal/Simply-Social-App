import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getPostById } from 'mainComponent/redux/postSlice';
import { Section } from 'components/atoms/Section';
import { Title } from 'components/atoms/Title';
import EditForm from 'components/molecules/EditForm';
import PostPage from '../PostPage';

const EditPage = () => {
  const { id } = useParams();
  const post = useSelector((state) => getPostById(state, id));
  const [editedPostId, setEditedPostId] = useState(id);

  const togglePostEdit = (id) => {
    editedPostId !== id ? setEditedPostId(id) : setEditedPostId(null);
  };

  return editedPostId === post.id ? (
    <Section>
      <Title>Edit your post</Title>
      <EditForm togglePostEdit={togglePostEdit} postDetails={post} />
    </Section>
  ) : (
    <PostPage />
  );
};

export default EditPage;
