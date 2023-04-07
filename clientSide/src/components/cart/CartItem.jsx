import React, { useEffect } from "react";
import {
  Stack,
  Typography,
  IconButton,
  ButtonGroup,
  Box,
  Button,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import {
  useRemoveCartItemMutation,
  useUpdateCartItemQuantityMutation,
} from "../../store/rtk-query/cartApi";

const CartItem = ({ title, quantity, price, image, _id }) => {
  const [removeCartItem, { error, isError, data, isSuccess }] =
    useRemoveCartItemMutation();

  const [updateCartItemQuantity] = useUpdateCartItemQuantityMutation();

  useEffect(() => {
    if (isError) {
      toast.error(error.data.error);
    }
    if (isSuccess) {
      toast.success(data.message);
    }
  }, [isError, isSuccess]);

  const deleteHandler = () => {
    removeCartItem(_id);
  };

  const updateQuantity = (type) => {
    if (type === "increase") {
      updateCartItemQuantity({
        id: _id,
        quantity: quantity + 1,
      });
    } else {
      updateCartItemQuantity({
        id: _id,
        quantity: quantity > 1 ? quantity - 1 : quantity,
      });
    }
  };

  return (
    <Stack
      sx={{
        p: "6px 12px",
        "&:hover": {
          backgroundColor: "#9e9e9e12",
        },
      }}
      direction={"row"}
      alignItems={"start"}
      gap={2}
    >
      <Stack direction="row" alignItems="center" gap={2}>
        <Box>
          <img src={image} alt={title} style={{ width: "90px" }} />
        </Box>
        <Stack gap={1}>
          {/*  */}
          <Typography
            sx={{
              width: "100px",
              textTransform: "capitalize",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: "16px",
            }}
          >
            {title}
          </Typography>
          {/*  */}
          <ButtonGroup color="secondary" variant="outlined" size="small">
            <Button
              onClick={() => updateQuantity("decrease")}
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
              onClick={() => updateQuantity("increase")}
              sx={{
                borderRadius: 0,
              }}
            >
              +
            </Button>
          </ButtonGroup>
          {/*  */}
          <Typography sx={{ fontSize: "14px" }}>
            {quantity} x{" "}
            <Typography
              sx={{ fontSize: "14px" }}
              color="secondary"
              component="span"
            >
              ${price}
            </Typography>
          </Typography>
        </Stack>
      </Stack>
      <IconButton sx={{ p: 0 }} onClick={deleteHandler}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
};

export default CartItem;
