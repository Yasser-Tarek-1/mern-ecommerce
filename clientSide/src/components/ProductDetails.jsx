import React, { useState } from "react";
import { Button, ButtonGroup, Stack, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAddCartItemMutation } from "../store/rtk-query/cartApi";
import { motion } from "framer-motion";

const ProductDetails = ({ _id, image, title, price, description }) => {
  const [quantity, setQuantity] = useState(1);

  const [addCartItem] = useAddCartItemMutation();

  const addHandler = () => {
    addCartItem({
      _id,
      title,
      price,
      description,
      image,
      quantity,
    });
  };

  return (
    <Stack
      direction={{
        md: "row",
      }}
      gap={{
        md: 12,
        xs: 6,
      }}
      alignItems={{
        xs: "center",
        md: "start",
      }}
    >
      <img src={image} alt={title} style={{ height: "250px" }} />
      <Stack
        sx={{
          maxWidth: "370px",
        }}
      >
        <Typography
          component="h3"
          sx={{
            fontSize: "26px",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: "20px",
            my: "10px",
          }}
        >
          ${price}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: "20px",
            my: "10px",
          }}
        >
          {description}
        </Typography>
        <Stack direction="row" gap={1} mt="20px">
          <ButtonGroup
            color="secondary"
            variant="outlined"
            aria-label="outlined button group"
          >
            <Button
              onClick={() =>
                setQuantity((prev) => {
                  return prev > 1 ? prev - 1 : 1;
                })
              }
              sx={{
                borderRadius: 0,
              }}
            >
              -
            </Button>
            <Button
              sx={{
                cursor: "default",
              }}
              disableRipple
            >
              {quantity}
            </Button>
            <Button
              sx={{
                borderRadius: 0,
              }}
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </ButtonGroup>
          <Button
            component={motion.button}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={addHandler}
            sx={{
              borderRadius: 0,
            }}
            color="secondary"
            variant="contained"
            endIcon={<ShoppingCartIcon />}
          >
            Add to Cart
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductDetails;
