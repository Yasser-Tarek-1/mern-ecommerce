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

import { useGetProductsQuery } from "../store/rtk-query/productsApi";
import { useState } from "react";

const Products = () => {
  const [active, setActive] = useState("all");
  const { data, error, isLoading } = useGetProductsQuery();

  const filterProducts = () => {
    // category
    if (active !== "all") {
      return data?.products?.filter((item) => {
        return item.category === active;
      });
    } else {
      return data?.products;
    }
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
          // data-aos-delay="50"
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
              <ListItemButton
                onClick={() => setActive("all")}
                sx={{
                  borderRadius: "12px",
                  padding: {
                    xs: "4px 12px",
                    md: "4px 24px",
                  },
                  transition: "all 0.5s",
                  textAlign: "center",
                  mx: "4px",
                  backgroundColor: active === "all" && "#9c27b0",
                  color: active === "all" && "#fff",
                  "&:hover": {
                    backgroundColor: "#9c27b0",
                    color: "#fff",
                  },
                }}
              >
                <ListItemText primary="All" />
              </ListItemButton>
              <ListItemButton
                onClick={() => setActive("phones")}
                sx={{
                  borderRadius: "12px",
                  padding: {
                    xs: "4px 12px",
                    md: "4px 24px",
                  },
                  transition: "all 0.5s",
                  textAlign: "center",
                  mx: "4px",
                  backgroundColor: active === "phones" && "#9c27b0",
                  color: active === "phones" && "#fff",
                  "&:hover": {
                    backgroundColor: "#9c27b0",
                    color: "#fff",
                  },
                }}
              >
                <ListItemText primary="Phones" />
              </ListItemButton>
              <ListItemButton
                onClick={() => setActive("shoes")}
                sx={{
                  borderRadius: "12px",
                  padding: {
                    xs: "4px 12px",
                    md: "4px 24px",
                  },
                  transition: "all 0.5s",
                  textAlign: "center",
                  mx: "4px",
                  backgroundColor: active === "shoes" && "#9c27b0",
                  color: active === "shoes" && "#fff",
                  "&:hover": {
                    backgroundColor: "#9c27b0",
                    color: "#fff",
                  },
                }}
              >
                <ListItemText primary="Shoes" />
              </ListItemButton>
              <ListItemButton
                onClick={() => setActive("headphones")}
                sx={{
                  borderRadius: "12px",
                  padding: {
                    xs: "4px 12px",
                    md: "4px 24px",
                  },
                  transition: "all 0.5s",
                  textAlign: "center",
                  backgroundColor: active === "headphones" && "#9c27b0",
                  color: active === "headphones" && "#fff",
                  mx: "4px",
                  "&:hover": {
                    backgroundColor: "#9c27b0",
                    color: "#fff",
                  },
                }}
              >
                <ListItemText primary="Headphones" />
              </ListItemButton>
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
