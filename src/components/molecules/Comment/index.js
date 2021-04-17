import React from 'react';
import Details from 'components/atoms/Details';
import { Section } from 'components/atoms/Section';
import { PostContent } from 'components/atoms/PostContent';
import { PostWrapper } from 'components/atoms/PostWrapper';

const Comment = ({ comment: { author, data, profileIcon, content } }) => {
  return (
    <PostWrapper>
      <Details icon={profileIcon} name={author} data={data} />
      <Section post>
        <PostContent>{content}</PostContent>
      </Section>
    </PostWrapper>
  );
};

export default Comment;
