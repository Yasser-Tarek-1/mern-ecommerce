import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { useDeleteCartItemMutation } from "../../store/querys/cartApi";
import { toast } from "react-toastify";

const CartTotal = ({ totalCart: { total } }) => {
  const [deleteCartItem] = useDeleteCartItemMutation();

  const cheakoutHandler = () => {
    deleteCartItem()
      .unwrap()
      .then(() => {
        toast.success("The operation was completed successfully");
      })
      .catch(() => {
        toast.error("Something is wrong");
      });
  };

  return (
    <Box sx={{ p: "12px", mt: "12px" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        py="12px"
        sx={{
          borderTop: "1px solid #1d1d1c",
          borderBottom: "1px solid #1d1d1c",
          my: "12px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "20px",
            textTransform: "uppercase",
          }}
        >
          SubTotal:
        </Typography>
        <Typography color="secondary" sx={{ fontWeight: "bold" }}>
          ${total}
        </Typography>
      </Stack>
      <Button
        onClick={cheakoutHandler}
        fullWidth
        variant="contained"
        color="secondary"
        size="medium"
        sx={{ borderRadius: 0 }}
      >
        Cheakout
      </Button>
    </Box>
  );
};

export default CartTotal;
