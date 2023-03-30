import React from "react";
import { categories } from "../utlis";
import {
  Stack,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

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
      {categories.map(({ title, image }) => {
        return (
          <Link key={title} to={`categories/${title}`}>
            <Card
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
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="160"
                  image={image}
                  alt="categories-img"
                />
              </CardActionArea>
            </Card>
          </Link>
        );
      })}
    </Stack>
  );
};

export default Categories;
