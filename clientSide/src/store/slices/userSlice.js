import { createSlice } from "@reduxjs/toolkit";

const userToken = localStorage.getItem("userToken");

const initialState = {
  user: null,
  token: userToken || null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logOut: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
