import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/onlineStore/products`,
    }),
    getProductById: builder.query({
      query: (id) => `/onlineStore/products/${id}`,
    }),
    // this in Cart not in product
    getCartItems: builder.query({
      query: () => `/onlineStore/cart`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCartItemsQuery,
} = productsApi;