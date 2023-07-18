import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    // .addCase(register.pending, state => {
    //   state.isLoggedIn = false;
    // })
    // .addCase(register.rejected, state => {
    //   state.isLoggedIn = false;
    // });
  },
});

export const authReducer = authSlice.reducer;
