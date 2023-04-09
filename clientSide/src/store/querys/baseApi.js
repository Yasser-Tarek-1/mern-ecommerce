import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../httpRequest";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      if (token) {
        headers.set("Authentication", token);
      }
      return headers;
    },
  }),
  tagTypes: ["Cart", "UserInfo", "Favorite"],
  endpoints: () => ({}),
});
