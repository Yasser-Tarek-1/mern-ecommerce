import React, { useEffect } from "react";
import { Alert, Box, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";

import DrawerLayout from "../../layout/DrawerLayout";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

import { cartSvg } from "../../assets";
import { useGetCartItemsQuery } from "../../store/querys/cartApi";

const Cart = ({ show, onSetShow, onSetCartAndFavoriteLength }) => {
  const { data, isError, isSuccess, error } = useGetCartItemsQuery();
  const cart = data?.cartItems;

  useEffect(() => {
    onSetCartAndFavoriteLength((prev) => {
      return { ...prev, cart: cart?.length };
    });
  }, [cart]);

  const total = cart?.reduce(
    (cartTotal, item) => {
      const {
        //    product: { price ,quantity},
        product: { price },
        quantity,
      } = item;
      const itemTotal = price * quantity;
      cartTotal.total += itemTotal;
      cartTotal.quantity += quantity;

      return cartTotal;
    },
    { total: 0, quantity: 0 }
  );

  return (
    <DrawerLayout open={show} setOpen={onSetShow}>
      <Stack justifyContent="space-between" sx={{ minHeight: "100vh" }}>
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap={12}
            p="12px 12px"
          >
            <Typography
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: "20px",
              }}
            >
              Cart Items
            </Typography>
            <IconButton onClick={() => onSetShow(false)}>
              <CloseIcon sx={{ color: "#000" }} />
            </IconButton>
          </Stack>
          <Stack
            gap={1}
            direction="column"
            alignContent="center"
            justifyContent="center"
          >
            {cart?.length > 0 &&
              cart.map(({ product, quantity }) => {
                return (
                  <CartItem
                    onSetShow={onSetShow}
                    key={product._id}
                    {...product}
                    quantity={quantity}
                  />
                );
              })}

            {cart?.length <= 0 && isSuccess && (
              <Stack
                sx={{
                  p: "60px 12px",
                }}
                alignItems={"center"}
              >
                <img src={cartSvg} alt="cartSvg" style={{ maxWidth: "100%" }} />
                <Typography sx={{ mb: "6px", textTransform: "uppercase" }}>
                  Cart is empty...
                </Typography>
                <a
                  href="/#products"
                  onClick={() => onSetShow(false)}
                  style={{ color: "#9c27b0" }}
                >
                  Go to products
                </a>
              </Stack>
            )}

            {isError && (
              <Alert severity="error">
                Problem displaying Cart Item, Please try later
              </Alert>
            )}
          </Stack>
        </Box>
        {cart?.length > 0 && <CartTotal totalCart={total} />}
      </Stack>
    </DrawerLayout>
  );
};

export default Cart;
