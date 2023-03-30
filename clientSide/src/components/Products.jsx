import React from "react";
import { Box, Stack, Container, Typography } from "@mui/material";

import ProductItem from "./ProductItem";

import { useGetProductsQuery } from "../store/productsApi";

const Products = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  return (
    <Box
      id="products"
      sx={{
        py: "60px",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" component="h3" mb={6}>
          Products
        </Typography>
        {isLoading && <Typography>Loding</Typography>}
        {error && <Typography>{error.error}</Typography>}
        <Stack direction="row" flexWrap="wrap" gap={5} justifyContent="center">
          {data?.products.map((product) => {
            return <ProductItem {...product} key={product._id} />;
          })}
        </Stack>
      </Container>
    </Box>
  );
};

export default Products;
