import { useEffect, useState } from "react";
import { useGetProductsQuery } from "./store/querys/productsApi";
import { useGetUserInfoQuery } from "./store/querys/userInfoApi";
import { baseUrl } from "./httpRequest";
import { skipToken } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";

export const productsData = (category = null) => {
  const {
    data = [],
    error,
    isLoading,
    isSuccess,
    isError,
  } = useGetProductsQuery(category);
  return { data, error, isLoading, isSuccess, isError };
};

export const userInfo = () => {
  const [url, setUrl] = useState("");
  const { token } = useSelector((state) => state.user);

  const {
    data = [],
    isLoading,
    isSuccess,
    isError,
  } = useGetUserInfoQuery(!token && skipToken);

  useEffect(() => {
    const getImage = async () => {
      if (data?.success) {
        const image = await fetch(
          `${baseUrl}/onlineStore/uploads/${data?.res?.user?.image || "qq.png"}`
        );
        const url = image?.url;
        setUrl(url);
      }
    };

    getImage();
  }, [data?.res?.user?.image]);

  return { data, isLoading, isSuccess, isError, url };
};
