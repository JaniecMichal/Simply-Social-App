import { createSlice } from '@reduxjs/toolkit';
import { user } from 'assets/userData/user';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: user,
  },
  reducers: {},
});

const selectUserState = (state) => state.user;

export const selectUser = (state) => selectUserState(state).user;

export default userSlice.reducer;
