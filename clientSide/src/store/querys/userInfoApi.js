import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../httpRequest";

export const userInfoApi = createApi({
  reducerPath: "userInfoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    // credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      if (token) {
        headers.set("Authentication", token);
      }
      return headers;
    },
  }),
  tagTypes: ["UserInfo"],
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => `/onlineStore/user/getMe`,
      providesTags: ["UserInfo"],
    }),
    updateUserInfo: builder.mutation({
      query: (body) => ({
        url: `/onlineStore/user/update`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["UserInfo"],
    }),
    userImage: builder.mutation({
      query: (body) => ({
        url: `/onlineStore/upload`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["UserInfo"],
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
  useUserImageMutation,
} = userInfoApi;
