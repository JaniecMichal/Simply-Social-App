import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from 'components/atoms/Navbar';
import PostPage from 'components/views/PostPage';
import AuthorPage from 'components/views/AuthorPage';
import EditPage from 'components/views/EditPage';
import PostsListPage from 'components/views/PostsListPage';
import AddPostPage from 'components/views/AddPostPage';
import { MainWrapper } from './styled';
import { navigationItems } from 'assets/navigationItems';
import { LogoText, LogoSubText } from 'components/atoms/LogoText';
import { Hero } from 'components/atoms/Hero';
import {
  toAddPage,
  toAuthorPage,
  toEditPage,
  toHomePage,
  toPostPage,
} from './routes';

const App = () => (
  <HashRouter>
    <Navbar navigationItems={navigationItems} />
    <Hero />
    <MainWrapper>
      <LogoText>My life, my passion, my style</LogoText>
      <LogoSubText>Michał janiec Personal blog</LogoSubText>
      <Switch>
        <Route path={toEditPage()}>
          <EditPage />
        </Route>
        <Route path={toPostPage()}>
          <PostPage />
        </Route>
        <Route path={toHomePage()}>
          <PostsListPage />
        </Route>
        <Route path={toAuthorPage()}>
          <AuthorPage />
        </Route>
        <Route path={toAddPage()}>
          <AddPostPage />
        </Route>
        <Route path="/">
          <Redirect to={toHomePage()} />
        </Route>
      </Switch>
    </MainWrapper>
  </HashRouter>
);

export default App;
