import React from 'react';
import Details from 'components/molecules/Details';
import Button from 'components/atoms/Button';
import Comments from 'components/templates/Comments';
import Image from 'components/atoms/Image';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getPostById } from 'mainComponent/redux/postSlice';
import { selectUser } from 'mainComponent/redux/userSlice';
import { Section } from 'components/atoms/Section';
import { PostContent } from 'components/atoms/PostContent';
import { Title } from 'components/atoms/Title';
import { Wrapper } from 'components/organisms/Post/styled';
import { StyledLink } from 'components/atoms/StyledLink';
import { toEditPage } from 'mainComponent/routes';

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
          <StyledLink to={toEditPage({ id: id })}>
            <Button
              isVisible={loggedUser.name === post.author ? true : false}
            />
          </StyledLink>
          <Button
            isVisible={loggedUser.name === post.author ? true : false}
            remove={true}
          />
        </Wrapper>
        <Title>{post.title}</Title>
        <PostContent>{post.content}</PostContent>
        <Image source={post.contentPhoto} altText={post.title} />
        <PostContent>{post.fullContent}</PostContent>
      </Section>

      <Comments comments={post.comments} />
    </>
  );
};

export default PostPage;
