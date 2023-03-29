import React from "react";
import { Drawer, Box, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";

const Cart = ({ showCart, onSetShowCart }) => {
  return (
    <Drawer onClose={() => onSetShowCart(false)} anchor="right" open={showCart}>
      <Box sx={{}}>
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
          <IconButton onClick={() => onSetShowCart(false)}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default Cart;
