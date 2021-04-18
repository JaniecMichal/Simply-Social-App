import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MainWrapper } from './styled';
import Navbar from 'components/atoms/Navbar';
import PostsListPage from 'components/views/PostsListPage';
import { navigationItems } from 'assets/navigationItems';
import PostPage from 'components/views/PostPage';
import UserPanel from 'components/molecules/UserPanel';
import { LogoText } from 'components/atoms/LogoText';
import AuthorPage from 'components/views/AuthorPage';

const App = () => (
  <HashRouter>
    <UserPanel />
    <Navbar navigationItems={navigationItems} />
    <MainWrapper>
      <LogoText>My life, my passion, my style</LogoText>
      <Switch>
        <Route path="/post/:id">
          <PostPage />
        </Route>
        <Route path="/allPosts">
          <PostsListPage />
        </Route>
        <Route path="/about">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/allPosts" />
        </Route>
      </Switch>
    </MainWrapper>
  </HashRouter>
);

export default App;
