import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, ShowComments } from './styled';
import Details from 'components/molecules/Details';
import { ButtonWrapper, StyledButton } from 'components/atoms/Button';
import { Section } from 'components/atoms/Section';
import { Title } from 'components/atoms/Title';
import { PostContent } from 'components/atoms/PostContent';
import { PostWrapper } from 'components/atoms/PostWrapper';
import Comments from 'components/templates/Comments';
import { removePost } from 'mainComponent/redux/postSlice';
import { selectUser } from 'mainComponent/redux/userSlice';
import EditForm from 'components/molecules/EditForm';

const Post = ({ postDetails }) => {
  const [showComments, setShowComments] = useState(false);
  const dispatch = useDispatch();
  const loggedUser = useSelector(selectUser);
  const [editedPostId, setEditedPostId] = useState(null);

  const togglePostEdit = (id) => {
    editedPostId !== id ? setEditedPostId(id) : setEditedPostId(null);
  };

  const handleRemovePost = () => {
    dispatch(removePost(postDetails.id));
  };

  const showCommentList = () => setShowComments(!showComments);

  return (
    <PostWrapper>
      <Wrapper>
        <Details
          icon={postDetails.profileIcon}
          name={postDetails.author}
          date={postDetails.date}
          id={postDetails.id}
        />
        <ButtonWrapper
          isVisible={loggedUser.name === postDetails.author ? true : false}
        >
          <StyledButton onClick={() => togglePostEdit(postDetails.id)}>
            Edit
          </StyledButton>
          <StyledButton remove onClick={handleRemovePost}>
            Remove
          </StyledButton>
        </ButtonWrapper>
      </Wrapper>
      <Section post>
        {editedPostId === postDetails.id ? (
          <EditForm togglePostEdit={togglePostEdit} postDetails={postDetails} />
        ) : (
          <>
            <Title>{postDetails.title}</Title>
            <PostContent>{postDetails.content}</PostContent>
          </>
        )}
      </Section>
      <ShowComments onClick={showCommentList}>
        Show comments ({postDetails.comments.length})
      </ShowComments>
      <Comments comments={postDetails.comments} isVisible={showComments} />
    </PostWrapper>
  );
};

export default Post;
