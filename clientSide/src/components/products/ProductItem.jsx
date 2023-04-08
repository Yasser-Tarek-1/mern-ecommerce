import React from "react";

import { Card, Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CardActionArea } from "@mui/material";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductItem = ({ _id, title, price, image }) => {
  const scrollHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Box sx={{ width: 240 }} onClick={scrollHandler}>
      <Link
        to={`/products/${_id}`}
        style={{
          textDecoration: "none",
        }}
      >
        <Card
          sx={{ maxWidth: "100%" }}
          component={motion.div}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <CardActionArea
            sx={
              {
                // minHeight: "280px",
              }
            }
          >
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
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {title}
              </Typography>
              <Typography variant="h6" color="text.secondary">
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
