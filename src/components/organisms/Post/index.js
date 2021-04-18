import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Details from 'components/molecules/Details';
import Button from 'components/atoms/Button';
import { Wrapper, ShowComments } from './styled';
import { Section } from 'components/atoms/Section';
import { Title } from 'components/atoms/Title';
import { PostContent } from 'components/atoms/PostContent';
import { PostWrapper } from 'components/atoms/PostWrapper';
import { removePost } from 'core/redux/postSlice';
import { selectUser } from 'core/redux/userSlice';
import { StyledLink } from 'components/atoms/StyledLink';
import { toEditPage, toPostPage } from 'core/routes';

const Post = ({ postDetails }) => {
  const dispatch = useDispatch();
  const loggedUser = useSelector(selectUser);

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
        <Title>{postDetails.title}</Title>
        <PostContent>
          {postDetails.content}
          <StyledLink to={toPostPage({ id: postDetails.id })}>
            Read more
          </StyledLink>
        </PostContent>
      </Section>
      <Wrapper>
        <StyledLink to={toEditPage({ id: postDetails.id })}>
          <Button
            isVisible={loggedUser.name === postDetails.author ? true : false}
          />
        </StyledLink>
        <Button
          isVisible={loggedUser.name === postDetails.author ? true : false}
          remove={true}
          onClick={handleRemovePost}
        />
        <StyledLink to={toPostPage({ id: postDetails.id })}>
          <ShowComments>Comments ({postDetails.comments.length})</ShowComments>
        </StyledLink>
      </Wrapper>
    </PostWrapper>
  );
};

export default Post;
