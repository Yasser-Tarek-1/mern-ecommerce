import { useGetProductsQuery } from "./store/rtk-query/productsApi";

export const productsData = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  return { data, error, isLoading };
};
