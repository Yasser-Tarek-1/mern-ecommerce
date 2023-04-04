import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Stack, Container } from "@mui/material";
import ProductDetails from "../components/products/ProductDetails";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "../store/rtk-query/productsApi";
import ProductItem from "../components/products/ProductItem";

const Product = () => {
  let { productId } = useParams();
  const { data, error, isLoading } = useGetProductByIdQuery(productId);
  const category = data?.product.category;

  const result = useGetProductsQuery(category);
  const categoryData = result?.data?.products || [];

  return (
    <Stack
      direction="column"
      sx={{
        minHeight: "calc(100vh - 205px)",
        p: "100px 16px 50px",
        color: "#000",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <ProductDetails {...data?.product} />
      </Container>
      <Box
        id="products"
        sx={{
          py: "60px",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h3"
            textTransform={"capitalize"}
            mb={6}
            data-aos="fade-right"
            data-aos-duration="750"
          >
            {category}
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            gap={5}
            justifyContent="center"
          >
            {categoryData.map((product) => {
              return <ProductItem key={product._id} {...product} />;
            })}
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
};

export default Product;
