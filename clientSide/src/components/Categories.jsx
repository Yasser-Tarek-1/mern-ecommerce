import React from "react";
import { categories } from "../utlis";
import {
  Stack,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

const Categories = () => {
  return (
    <Stack
      id="categories"
      direction="row"
      justifyContent="center"
      gap={2}
      py="60px"
      flexWrap="wrap"
    >
      {categories.map(({ title, image }, idx) => {
        return (
          <Box
            data-aos={
              idx === 0 ? "fade-right" : idx === 1 ? "fade-up" : "fade-left"
            }
            data-aos-duration="750"
            key={title}
            sx={{
              maxWidth: 445,
              boxShadow: 2,
              borderRadius: 0,
              position: "relative",
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                fontSize: "20px",
                color: "#fff",
                zIndex: 99,
                textTransform: "uppercase",
                transform: "translate(-50%,-50%)",
              }}
            >
              {title}
            </Typography>
            <Box>
              <CardMedia
                component="img"
                height="160"
                image={image}
                alt="categories-img"
              />
            </Box>
          </Box>
        );
      })}
    </Stack>
  );
};

export default Categories;
