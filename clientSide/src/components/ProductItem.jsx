import React from "react";

import { Card, Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CardActionArea } from "@mui/material";

import { Link } from "react-router-dom";

const ProductItem = ({ _id, title, price, image, description }) => {
  return (
    <Box sx={{ width: 240 }}>
      <Link
        to={`/products/${_id}`}
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
                {title.slice(0, 10)}
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
