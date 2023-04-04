import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

const CartTotal = ({ totalCart: { total } }) => {
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
