import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";

import DrawerLayout from "../../layout/DrawerLayout";
import CartItem from "./CartItem";

const Cart = ({ show, onSetShow, cart }) => {
  return (
    <DrawerLayout open={show} setOpen={onSetShow}>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={16}
          borderBottom="1px solid gray"
          p="10px 30px"
        >
          <Typography
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "20px",
              color: "gray",
            }}
          >
            Cart
          </Typography>
          <IconButton onClick={() => onSetShow(false)}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Stack
          gap={2}
          direction="column"
          alignContent="center"
          justifyContent="center"
          p="16px"
          sx={{
            mt: {
              xs: "10px",
              md: "20px",
            },
          }}
        >
          {cart?.length > 0 ? (
            cart.map(({ product }) => {
              return (
                <CartItem
                  onSetShow={onSetShow}
                  key={product._id}
                  {...product}
                />
              );
            })
          ) : (
            <Typography>Cart is empty...</Typography>
          )}
        </Stack>
        <Stack></Stack>
      </Box>
    </DrawerLayout>
  );
};

export default Cart;
