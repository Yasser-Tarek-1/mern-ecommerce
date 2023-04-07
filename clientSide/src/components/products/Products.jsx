import React from "react";
import {
  Box,
  Stack,
  Container,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import ProductItem from "./ProductItem";

import { productsData } from "../../services";
import { useState } from "react";

const categories = ["all", "phones", "shoes", "headphones"];

const Products = () => {
  const [active, setActive] = useState("all");
  const { data, error, isLoading } = productsData();

  const filterProducts = () => {
    // category
    return active === "all"
      ? data?.products
      : data?.products?.filter((item) => {
          return item.category === active;
        });
  };

  return (
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
          mb={6}
          data-aos="fade-right"
          data-aos-duration="750"
        >
          Products
        </Typography>
        <>
          <List
            sx={{
              width: "fit-content",
              m: "0 auto 26px",
              textAlign: "center",
            }}
          >
            <ListItem disablePadding>
              {categories.map((category, idx) => {
                return (
                  <ListItemButton
                    key={idx}
                    onClick={() => setActive(category)}
                    sx={{
                      borderRadius: "12px",
                      padding: {
                        xs: "4px 12px",
                        md: "4px 24px",
                      },
                      transition: "all 0.5s",
                      textAlign: "center",
                      mx: "4px",
                      backgroundColor: active === category && "#9c27b0",
                      color: active === category && "#fff",
                      "&:hover": {
                        backgroundColor: "#9c27b0",
                        color: "#fff",
                      },
                    }}
                  >
                    <ListItemText
                      sx={{
                        textTransform: "capitalize",
                      }}
                      primary={category}
                    />
                  </ListItemButton>
                );
              })}
            </ListItem>
          </List>
        </>
        <Stack direction="row" flexWrap="wrap" gap={5} justifyContent="center">
          {filterProducts()?.map((product) => {
            return <ProductItem {...product} key={product._id} />;
          })}
        </Stack>
      </Container>
    </Box>
  );
};

export default Products;
