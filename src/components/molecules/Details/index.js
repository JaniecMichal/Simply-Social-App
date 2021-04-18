import React from 'react';
import { Wrapper, ProfileIcon, AuthorName, PostDate } from './styled';

const Details = ({ icon, name, date, comment }) => {
  return (
    <Wrapper comment>
      <ProfileIcon src={icon} alt="author profileIcon" />
      <div>
        <AuthorName>{name}</AuthorName>
        <PostDate>{date}</PostDate>
      </div>
    </Wrapper>
  );
};

export default Details;
