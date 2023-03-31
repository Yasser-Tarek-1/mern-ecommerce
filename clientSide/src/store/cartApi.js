import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../components/httpServices";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getCartItems: builder.query({
      query: () => `/onlineStore/cart`,
      providesTags: ["Cart"],
    }),
    addCartItem: builder.mutation({
      query: (payload) => ({
        url: `/onlineStore/cart/order`,
        method: "POST",
        body: payload,
        header: {
          Authentication: localStorage.getItem("token"),
        },
      }),
      invalidatesTags: ["Cart"],
    }),
    removeCartItem: builder.mutation({
      query: (id) => ({
        url: `/onlineStore/cart/remove/${id}`,
        method: "DELETE",
        header: {
          Authentication: localStorage.getItem("token"),
        },
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetCartItemsQuery,
  useAddCartItemMutatuin,
  useRemoveCartItemMutatuin,
} = cartApi;
