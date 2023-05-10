import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getUsers, getUser, deleteUser } from './operations';

const handlePending = state => {
  state.users.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.users.isLoading = false;
  state.users.error = payload;
};

const handleFulfilled = state => {
  state.users.isLoading = false;
  state.users.error = null;
};

const handleAllFulfilled = (state, { payload }) => {
  state.users.items = payload;
};

const handleUserFulfilled = (state, { payload }) => {
  state.users.currentUser = payload;
};

const handleUserDeleteFulfilled = (state, { payload }) => {
  state.users.items = state.users.items.filter(item => item.id !== payload);
};

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: {
      items: [],
      isLoading: false,
      error: null,
      currentUser: null,
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUsers.fulfilled, handleAllFulfilled)
      .addCase(getUser.fulfilled, handleUserFulfilled)
      .addCase(deleteUser.fulfilled, handleUserDeleteFulfilled)
      .addMatcher(
        isAnyOf(getUsers.pending, getUser.pending, deleteUser.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(deleteUser.rejected, getUser.rejected, getUsers.rejected),
        handleRejected
      )
      .addMatcher(
        isAnyOf(getUsers.fulfilled, getUser.fulfilled, deleteUser.fulfilled),
        handleFulfilled
      );
  },
});

export const usersReducer = usersSlice.reducer;
