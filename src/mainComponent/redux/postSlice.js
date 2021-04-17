import { createSlice } from '@reduxjs/toolkit';
import { initialPosts } from 'assets/initialPosts/initialPosts';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: initialPosts,
  },
  reducers: {
    addPost: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    removePost: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks.splice(index, 1);
    },
  },
});

export const { addPost, removePost } = postsSlice.actions;

const selectPostsState = (state) => state.posts;

export const selectPosts = (state) => selectPostsState(state).posts;

/* export const getTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId); */

export default postsSlice.reducer;
