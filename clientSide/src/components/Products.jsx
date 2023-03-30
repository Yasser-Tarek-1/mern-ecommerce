import React from "react";
import { Box, Stack, Container, Typography } from "@mui/material";

import { products } from "../utlis";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <Box
      sx={{
        py: "60px",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" component="h3" mb={6}>
          Products
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={5} justifyContent="center">
          {products.map((product) => {
            return <ProductItem {...product} key={product.id} />;
          })}
        </Stack>
      </Container>
    </Box>
  );
};

export default Products;
