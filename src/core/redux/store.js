import { configureStore } from '@reduxjs/toolkit';
import postsReducers from './postSlice';
import userReducers from './userSlice';

const store = configureStore({
  reducer: {
    posts: postsReducers,
    user: userReducers,
  },
});

export default store;
