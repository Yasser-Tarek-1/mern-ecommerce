import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ProductDetails from "../components/products/ProductDetails";
import { useGetProductByIdQuery } from "../store/rtk-query/productsApi";

const Product = () => {
  let { productId } = useParams();
  const { data, error, isLoading } = useGetProductByIdQuery(productId);
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 205px)",
        p: "100px 16px 50px",
        color: "#000",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ProductDetails {...data?.product} />
    </Box>
  );
};

export default Product;
