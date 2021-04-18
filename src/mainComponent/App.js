import React from 'react';
import { MainWrapper } from './styled';
import UserPanel from 'components/molecules/UserPanel';
import PostingPanel from 'components/organisms/PostingPanel';
import PostWall from 'components/views/PostWall';

function App() {
  return (
    <MainWrapper>
      <UserPanel />
      <PostingPanel />
      <PostWall />
    </MainWrapper>
  );
}

export default App;
