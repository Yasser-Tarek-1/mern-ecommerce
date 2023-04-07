import { useGetProductsQuery } from "./store/rtk-query/productsApi";

export const productsData = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetProductsQuery();

  return { data, error, isLoading, isSuccess, isError };
};
