import React from 'react';
import { ProfileIcon, AuthorName, PostDate } from './styled';

const Details = ({ icon, name, date }) => {
  return (
    <>
      <ProfileIcon src={icon} alt="author profileIcon" />
      <div>
        <AuthorName>{name}</AuthorName>
        <PostDate>{date}</PostDate>
      </div>
    </>
  );
};

export default Details;
