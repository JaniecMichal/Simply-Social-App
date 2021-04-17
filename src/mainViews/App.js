import React from 'react';
import { MainWrapper } from './styled';
import UserPanel from 'components/molecules/UserPanel';
import PostingPanel from 'components/molecules/PostingPanel';
import PostWall from 'components/templates/PostWall';

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
