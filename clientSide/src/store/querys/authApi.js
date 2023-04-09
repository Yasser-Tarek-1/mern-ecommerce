import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../httpRequest";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    // credentials: "include",
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    registerHandler: builder.mutation({
      query: (body) => ({
        url: `/onlineStore/user/register`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),

    loginHandler: builder.mutation({
      query: (body) => ({
        url: `/onlineStore/user/login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useLoginHandlerMutation, useRegisterHandlerMutation } = authApi;
