import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../httpRequest";

export const userInfoApi = createApi({
  reducerPath: "userInfoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("Authentication", localStorage.userToken);
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
        url: `/onlineStore/user/getMe`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["UserInfo"],
    }),
  }),
});

export const { useGetUserInfoQuery, useUpdateUserInfoMutation } = userInfoApi;
