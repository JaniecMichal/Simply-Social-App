import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, ShowComments } from './styled';
import Details from 'components/molecules/Details';
import Button from 'components/atoms/Button';
import { Section } from 'components/atoms/Section';
import { Title } from 'components/atoms/Title';
import { PostContent } from 'components/atoms/PostContent';
import { PostWrapper } from 'components/atoms/PostWrapper';
import { removePost } from 'mainComponent/redux/postSlice';
import { selectUser } from 'mainComponent/redux/userSlice';
import EditForm from 'components/molecules/EditForm';
import { StyledLink } from 'components/atoms/StyledLink';

const Post = ({ postDetails }) => {
  const dispatch = useDispatch();
  const loggedUser = useSelector(selectUser);
  const [editedPostId, setEditedPostId] = useState(null);

  const togglePostEdit = (id) => {
    editedPostId !== id ? setEditedPostId(id) : setEditedPostId(null);
  };

  const handleRemovePost = () => {
    dispatch(removePost(postDetails.id));
  };

  return (
    <PostWrapper>
      <Wrapper>
        <Details
          icon={postDetails.profileIcon}
          name={postDetails.author}
          date={postDetails.date}
          id={postDetails.id}
        />
      </Wrapper>
      <Section post>
        {editedPostId === postDetails.id ? (
          <EditForm togglePostEdit={togglePostEdit} postDetails={postDetails} />
        ) : (
          <>
            <Title>{postDetails.title}</Title>
            <PostContent>
              {postDetails.content}
              <StyledLink to={`/post/${postDetails.id}`}>Read more</StyledLink>
            </PostContent>
          </>
        )}
      </Section>
      <Wrapper>
        <Button
          isVisible={loggedUser.name === postDetails.author ? true : false}
          onClick={() => togglePostEdit(postDetails.id)}
        />
        <Button
          isVisible={loggedUser.name === postDetails.author ? true : false}
          remove={true}
          onClick={handleRemovePost}
        />
        <ShowComments>Comments ({postDetails.comments.length})</ShowComments>
      </Wrapper>
    </PostWrapper>
  );
};

export default Post;
