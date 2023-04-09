import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Stack, Container, Alert } from "@mui/material";
import ProductDetails from "../components/products/ProductDetails";
import { useGetProductByIdQuery } from "../store/querys/productsApi";
import ProductItem from "../components/products/ProductItem";
import { productsData } from "../services";
import { RotatingLines } from "react-loader-spinner";

const Product = () => {
  let { productId } = useParams();
  const { data, error, isLoading, isSuccess, isError } =
    useGetProductByIdQuery(productId);
  const category = data?.product.category;

  const { data: categorysData, isSuccess: categorysIsSuccess } =
    productsData(category);
  const categoryData = categorysData?.products || [];

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
      {isLoading && (
        <Stack alignItems="center">
          <RotatingLines
            strokeColor="#9c27b0"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </Stack>
      )}
      {isSuccess && (
        <>
          <Container maxWidth="lg">
            <ProductDetails {...data?.product} />
          </Container>

          <Box
            id="products"
            sx={{
              py: "60px",
            }}
          >
            {categorysIsSuccess && (
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
                  {categoryData?.map((product) => {
                    return <ProductItem key={product._id} {...product} />;
                  })}
                </Stack>
              </Container>
            )}
          </Box>
        </>
      )}
      {isError && (
        <Alert severity="error">
          Problem displaying Cart Item, Please try later
        </Alert>
      )}
    </Stack>
  );
};

export default Product;
