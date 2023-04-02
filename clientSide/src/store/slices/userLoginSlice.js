import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../components/httpReq";
import axios from "axios";

export const login = createAsyncThunk(
  "userLogin/login",
  async (body, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const req = await axios.post(
        `${baseUrl}/onlineStore/user/login`,
        body,
        config
      );
      return await req.data;
    } catch (error) {
      throw rejectWithValue(error.response.data.error);
    }
  }
);

const userToken = localStorage.getItem("userToken");
const userId = localStorage.getItem("userId");

const initialState = {
  isLoading: false,
  success: null,
  token: userToken ? userToken : null,
  userId: userId ? userId : null,
  error: null,
};

export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userId = action.payload.res.userId;
      state.token = action.payload.res.token;
      state.success = action.payload.res.message;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { logOut } = userLoginSlice.actions;

export default userLoginSlice.reducer;
