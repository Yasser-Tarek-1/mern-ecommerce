import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../httpRequest";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("Authentication", localStorage.userToken);
      return headers;
    },
  }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getCartItems: builder.query({
      query: () => `/onlineStore/cart`,
      providesTags: ["Cart"],
    }),
    addCartItem: builder.mutation({
      query: (payload) => ({
        url: `/onlineStore/cart/order/add`,
        method: "POST",
        body: payload,
        // header: {
        //   Authentication: localStorage.getItem("userToken"),
        // },
      }),
      invalidatesTags: ["Cart"],
    }),
    removeCartItem: builder.mutation({
      query: (id) => ({
        url: `/onlineStore/cart/order/remove/${id}`,
        method: "DELETE",
        // header: {
        //   Authentication: localStorage.getItem("userToken"),
        // },
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetCartItemsQuery,
  useAddCartItemMutation,
  useRemoveCartItemMutation,
} = cartApi;
