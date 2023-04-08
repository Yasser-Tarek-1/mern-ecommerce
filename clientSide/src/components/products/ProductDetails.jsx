import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Stack,
  Typography,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAddCartItemMutation } from "../../store/rtk-query/cartApi";
import { useAddToFavoritesMutation } from "../../store/rtk-query/favoriteApi";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ProductDetails = ({ _id, image, title, price, description }) => {
  const [quantity, setQuantity] = useState(1);

  const [addCartItem, { error, isError, data, isSuccess }] =
    useAddCartItemMutation();

  const [addToFavorites, response] = useAddToFavoritesMutation();

  useEffect(() => {
    if (isError) {
      toast.error(error.data.error);
    }
    if (isSuccess) {
      toast.success(data.message);
      setQuantity(1);
    }
  }, [isError, isSuccess]);

  useEffect(() => {
    if (response.isError) {
      toast.error(response.error.data.error);
    }
    if (response.isSuccess) {
      toast.success(response.data.message);
    }
  }, [response]);

  const addHandler = async () => {
    await addCartItem({
      product: _id,
      quantity,
    });
  };

  const addFavHandler = () => {
    addToFavorites(_id);
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
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
          <Tooltip title="Add to favorite">
            <IconButton onClick={addFavHandler}>
              <FavoriteIcon
                sx={{
                  color: "red",
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>
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
            textTransform: "capitalize",
          }}
        >
          {description}
        </Typography>
        <Stack direction="row" gap={1} mt="20px">
          {localStorage.getItem("userToken") ? (
            <>
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
            </>
          ) : (
            <Link
              to={"/login"}
              style={{
                color: "#000",
                fontSize: "18px",
                letterSpacing: "1px",
              }}
            >
              Please login first...
            </Link>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductDetails;
