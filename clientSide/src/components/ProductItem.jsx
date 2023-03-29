import React from "react";

import { Card, Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CardActionArea } from "@mui/material";

import { Link } from "react-router-dom";

const ProductItem = ({ id, title, price, image }) => {
  return (
    <Box sx={{ width: 240 }}>
      <Link
        to={`/products/${id}`}
        style={{
          textDecoration: "none",
        }}
      >
        <Card sx={{ maxWidth: "100%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              width="240"
              image={image}
              alt={title}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  textTransform: "capitalize",
                }}
              >
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Box>
  );
};

export default ProductItem;
