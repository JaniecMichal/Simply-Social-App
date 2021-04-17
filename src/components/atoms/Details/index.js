import React from 'react';
import { Wrapper, ProfileIcon, AuthorName, PostData } from './styled';

const Details = ({ icon, name, data }) => {
  return (
    <Wrapper>
      <ProfileIcon src={icon} alt="author profileIcon" />
      <div>
        <AuthorName>{name}</AuthorName>
        <PostData>{data}</PostData>
      </div>
    </Wrapper>
  );
};

export default Details;
