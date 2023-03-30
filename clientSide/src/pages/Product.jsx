import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../utlis";

import { Box } from "@mui/material";
import ProductDetails from "../components/ProductDetails";

const product = products[0];

const Product = () => {
  let { productId } = useParams();

  return (
    <Box
      sx={{
        height: "calc(100vh - 205px)",
        p: "100px 16px 30px",
        color: "#000",
        display: "flex",
        // alignItems: "top",
        justifyContent: "center",
      }}
    >
      <ProductDetails {...product} />
    </Box>
  );
};

export default Product;
