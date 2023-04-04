import React, { useEffect } from "react";
import {
  Stack,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  IconButton,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import { useRemoveCartItemMutation } from "../../store/rtk-query/cartApi";

const CartItem = ({ onSetShow, title, quantity, price, image, _id }) => {
  const [removeCartItem, { error, isError, data, isSuccess }] =
    useRemoveCartItemMutation();

  useEffect(() => {
    if (isError) {
      toast.error(error.data.error);
    }
    if (isSuccess) {
      toast.success(data.message);
    }
  }, [isError, isSuccess]);

  const cartHandler = () => {
    onSetShow(flase);
  };

  const deleteHandler = () => {
    removeCartItem(_id);
  };

  return (
    // <Link
    //   to={`/products/${_id}`}
    //   onClick={cartHandler}
    //   style={{
    //     textDecoration: "none",
    //   }}
    // >
    <Card
      sx={{
        maxWidth: 345,
      }}
    >
      <Box
        //CardActionArea
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <CardMedia
          component="img"
          style={{ width: "150px" }}
          image={image}
          alt={title}
        />
        <CardContent sx={{ p: 0, pl: "12px", width: "100%" }}>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"start"}
          >
            <Typography
              component="h3"
              sx={{
                width: "fit-content",
                textTransform: "capitalize",
              }}
            >
              {title}
            </Typography>
            <IconButton
              aria-label="delete"
              onClick={deleteHandler}
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          </Stack>
          <Typography variant="body2" color="text.secondary" my={"4px"}>
            *{quantity}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${price * quantity}
          </Typography>
        </CardContent>
      </Box>
    </Card>
    // </Link>
  );
};

export default CartItem;
