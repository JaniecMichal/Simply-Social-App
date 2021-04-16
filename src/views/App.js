import React from 'react';
import { MainWrapper } from './styled';
import UserPanel from 'components/molecules/UserPanel';
import PostingPanel from 'components/molecules/PostingPanel';

function App() {
  return (
    <MainWrapper>
      <UserPanel />
      <PostingPanel />
    </MainWrapper>
  );
}

export default App;
