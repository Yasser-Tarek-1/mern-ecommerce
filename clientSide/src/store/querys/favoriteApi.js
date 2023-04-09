import { baseApi } from "./baseApi";

export const favoriteApi = baseApi.injectEndpoints({
  reducerPath: "favoriteApi",
  // tagTypes: ["Favorite"],
  endpoints: (builder) => ({
    getFavorites: builder.query({
      query: () => `/onlineStore/favourites`,
      providesTags: (_) => ["Favorite"],
    }),
    addToFavorites: builder.mutation({
      query: (id) => ({
        url: `/onlineStore/favourites/add/${id}`,
        method: "POST",
      }),
      invalidatesTags: (_) => ["Favorite"],
    }),
    removeFromFavorites: builder.mutation({
      query: (id) => ({
        url: `/onlineStore/favourites/remove/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_) => ["Favorite"],
    }),
  }),
});

export const {
  useGetFavoritesQuery,
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
} = favoriteApi;
