import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getPostById } from 'mainComponent/redux/postSlice';
import { Section } from 'components/atoms/Section';
import { PostContent } from 'components/atoms/PostContent';
import { Title } from 'components/atoms/Title';
import { Wrapper } from 'components/organisms/Post/styled';
import Details from 'components/molecules/Details';
import Button from 'components/atoms/Button';
import { selectUser } from 'mainComponent/redux/userSlice';
import { ImageWrapper, StyledImg } from './styled';
import Comments from 'components/templates/Comments';

const PostPage = () => {
  const { id } = useParams();
  const post = useSelector((state) => getPostById(state, id));
  const loggedUser = useSelector(selectUser);

  return (
    <>
      <Section singlePost>
        <Wrapper>
          <Details
            icon={post.profileIcon}
            name={post.author}
            date={post.date}
            id={post.id}
          />
          <Button isVisible={loggedUser.name === post.author ? true : false} />
          <Button
            isVisible={loggedUser.name === post.author ? true : false}
            remove={true}
          />
        </Wrapper>
        <Title>{post.title}</Title>
        <PostContent>{post.content}</PostContent>
        <ImageWrapper>
          <StyledImg src={post.contentPhoto} alt={post.title} />
        </ImageWrapper>
        <PostContent>{post.fullContent}</PostContent>
      </Section>

      <Comments comments={post.comments} />
    </>
  );
};

export default PostPage;
