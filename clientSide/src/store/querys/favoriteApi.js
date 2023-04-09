import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../httpRequest";

export const favoriteApi = createApi({
  reducerPath: "favoriteApi",
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
  tagTypes: ["Favorite"],
  endpoints: (builder) => ({
    getFavorites: builder.query({
      query: () => `/onlineStore/favourites`,
      providesTags: ["Favorite"],
    }),
    addToFavorites: builder.mutation({
      query: (id) => ({
        url: `/onlineStore/favourites/add/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["Favorite"],
    }),
    removeFromFavorites: builder.mutation({
      query: (id) => ({
        url: `/onlineStore/favourites/remove/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Favorite"],
    }),
  }),
});

export const {
  useGetFavoritesQuery,
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
} = favoriteApi;
