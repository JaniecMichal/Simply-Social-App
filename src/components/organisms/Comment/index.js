import React from 'react';
import Details from 'components/molecules/Details';
import { Section } from 'components/atoms/Section';
import { PostContent } from 'components/atoms/PostContent';
import { PostWrapper } from 'components/atoms/PostWrapper';

const Comment = ({ comment: { id, author, date, profileIcon, content } }) => {
  return (
    <PostWrapper comment>
      <Details comment icon={profileIcon} name={author} date={date} id={id} />
      <Section post>
        <PostContent>{content}</PostContent>
      </Section>
    </PostWrapper>
  );
};

export default Comment;
