import { baseApi } from "./baseApi";

export const cartApi = baseApi.injectEndpoints({
  reducerPath: "cartApi",
  // tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getCartItems: builder.query({
      query: () => `/cart`,
      providesTags: (_) => ["Cart"],
    }),
    addCartItem: builder.mutation({
      query: (payload) => ({
        url: `/cart/order/add`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: (_) => ["Cart"],
    }),
    removeCartItem: builder.mutation({
      query: (id) => ({
        url: `/cart/order/remove/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_) => ["Cart"],
    }),
    updateCartItemQuantity: builder.mutation({
      query: ({ id, quantity }) => ({
        url: `/cart/order/updateQty/${id}`,
        method: "POST",
        body: { quantity },
      }),
      invalidatesTags: (_) => ["Cart"],
    }),
    deleteCartItem: builder.mutation({
      query: () => ({
        url: `/cart/orders/clear`,
        method: "DELETE",
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
  useDeleteCartItemMutation,
} = cartApi;
