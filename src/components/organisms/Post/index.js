import React, { useState } from 'react';
import { ShowComments } from './styled';
import Details from 'components/molecules/Details';
import { Section } from 'components/atoms/Section';
import { Title } from 'components/atoms/Title';
import { PostContent } from 'components/atoms/PostContent';
import { PostWrapper } from 'components/atoms/PostWrapper';
import Comments from 'components/templates/Comments';

const Post = ({
  postDetails: { author, date, profileIcon, title, content, comments },
}) => {
  const [showComments, setShowComments] = useState(false);

  const showCommentList = () => setShowComments(!showComments);

  return (
    <PostWrapper>
      <Details icon={profileIcon} name={author} date={date} />
      <Section post>
        <Title>{title}</Title>
        <PostContent>{content}</PostContent>
      </Section>
      <ShowComments onClick={showCommentList}>
        Show comments ({comments.length})
      </ShowComments>
      <Comments comments={comments} isVisible={showComments} />
    </PostWrapper>
  );
};

export default Post;
