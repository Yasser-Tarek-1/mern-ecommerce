import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../components/httpServices";
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/onlineStore/products`,
      providesTags: ["Product"],
    }),
    getProductById: builder.query({
      query: (id) => `/onlineStore/products/${id}`,
      providesTags: ["Product"],
    }),
    // For example => delete request
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/onlineStore/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    //  For example => post request
    createProduct: builder.mutation({
      query: (payload) => ({
        url: `endpoint`,
        method: "POST",
        // If request need a token
        body: payload,
        header: {
          Authentication: localStorage.getItem("token"),
        },
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});
/* 
   
  1. getProductById =>  useGetProductByIdQuery
  2. deleteProduct => useDeleteProductMutatuin
  3. addProduct  => useAddProductMutation
*/

export const {
  useGetProductsQuery,
  useGetProductByIdQuery /* , useDeleteProductMutatuin ,  useCreateProductMutation  */,
} = productsApi;
