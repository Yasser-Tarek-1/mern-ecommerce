import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../components/httpServices";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    // login
    loginHandler: builder.mutation({
      query: (payload) => ({
        url: `/onlineStore/user/login`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Auth"],
    }),
    // register
    registerHandler: builder.mutation({
      query: (payload) => ({
        url: `/onlineStore/user/register`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useLoginHandlerMutation, useRegisterHandlerMutation } = authApi;
