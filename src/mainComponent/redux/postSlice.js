import { createSlice } from '@reduxjs/toolkit';
import { initialPosts } from 'assets/initialPosts/initialPosts';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: initialPosts,
  },
  reducers: {
    addPost: ({ posts }, { payload }) => {
      posts.unshift(payload);
    },
    removePost: (state, action) => {
      const index = state.posts.findIndex((post) => post.id === action.payload);
      state.posts.splice(index, 1);
    },
    editPost: (state, { payload }) => {
      const index = state.posts.findIndex((post) => post.id === payload.id);
      state.posts[index] = payload;
    },
  },
});

export const { addPost, removePost, editPost } = postsSlice.actions;

const selectPostsState = (state) => state.posts;

export const selectPosts = (state) => selectPostsState(state).posts;

/* export const getTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId); */

export default postsSlice.reducer;
