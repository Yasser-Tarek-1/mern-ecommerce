import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../httpRequest";

export const cartApi = createApi({
  reducerPath: "cartApi",
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
      }),
      invalidatesTags: ["Cart"],
    }),
    removeCartItem: builder.mutation({
      query: (id) => ({
        url: `/onlineStore/cart/order/remove/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
    updateCartItemQuantity: builder.mutation({
      query: ({ id, quantity }) => ({
        url: `/onlineStore/cart/order/updateQty/${id}`,
        method: "POST",
        body: { quantity },
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetCartItemsQuery,
  useAddCartItemMutation,
  useRemoveCartItemMutation,
  useUpdateCartItemQuantityMutation,
} = cartApi;
