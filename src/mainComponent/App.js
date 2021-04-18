import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MainWrapper } from './styled';
import Navbar from 'components/atoms/Navbar';
import PostsListPage from 'components/views/PostsListPage';
import { navigationItems } from 'assets/navigationItems';
import PostPage from 'components/views/PostPage';
import { LogoText, LogoSubText } from 'components/atoms/LogoText';
import AuthorPage from 'components/views/AuthorPage';
import { Hero } from 'components/atoms/Hero';

const App = () => (
  <HashRouter>
    <Navbar navigationItems={navigationItems} />
    <Hero />
    <MainWrapper>
      <LogoText>My life, my passion, my style</LogoText>
      <LogoSubText>Michał janiec Personal blog</LogoSubText>
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
        <Route path="/add">{/*    <AddPostPage /> */}</Route>
        <Route path="/">
          <Redirect to="/allPosts" />
        </Route>
      </Switch>
    </MainWrapper>
  </HashRouter>
);

export default App;
