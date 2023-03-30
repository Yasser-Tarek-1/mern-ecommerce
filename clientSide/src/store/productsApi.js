import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (id) => `/onlineStore/products`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
