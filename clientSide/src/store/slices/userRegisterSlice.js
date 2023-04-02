import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../components/httpReq";
import axios from "axios";

export const register = createAsyncThunk(
  "userRegister/register",
  async (body, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const req = await axios.post(
        `${baseUrl}/onlineStore/user/register`,
        body,
        config
      );
      return await req.data;
    } catch (error) {
      throw rejectWithValue(error.response.data.error);
    }
  }
);

const initialState = {
  isLoading: false,
  success: null,
  error: null,
};

export const userRegisterSlice = createSlice({
  name: "userRegister",
  initialState,
  extraReducers: {
    [register.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = null;
    },
    [register.fulfilled]: (state) => {
      state.isLoading = false;
      state.success = true;
      // action.payload.resala
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userRegisterSlice.reducer;
