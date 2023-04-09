import React, { useEffect } from "react";
import { Stack, Typography, IconButton, Box } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useRemoveFromFavoritesMutation } from "../../store/querys/favoriteApi";
const FavoriteItem = ({ title, price, image, description, _id, onSetShow }) => {
  const [removeFromFavorites] = useRemoveFromFavoritesMutation();

  const deleteHandler = () => {
    removeFromFavorites(_id)
      .unwrap()
      .then(({ message }) => {
        toast.success(message);
      })
      .catch(({ data }) => {
        toast.error(data.error);
      });
  };

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Link
        to={`/products/${_id}`}
        onClick={() => onSetShow(false)}
        style={{ textDecoration: "none", color: "#000" }}
      >
        <Stack
          sx={{
            p: "6px 12px",
            position: "relative",
            "&:hover": {
              backgroundColor: "#9e9e9e12",
            },
          }}
          direction="row"
          alignItems="start"
          gap={2}
        >
          <Stack direction="row" alignItems="center" gap={2}>
            <Box>
              <img src={image} alt={title} style={{ width: "90px" }} />
            </Box>
            <Stack gap={"3px"}>
              <Typography
                sx={{
                  width: "150px",
                  textTransform: "capitalize",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontSize: "16px",
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  width: "150px",
                  textTransform: "capitalize",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {description}
              </Typography>
              <Typography sx={{ fontSize: "14px" }} color="secondary">
                ${price}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Link>
      <IconButton
        sx={{
          p: 0,
          position: "absolute",
          zIndex: 99,
          right: 10,
          top: 7,
        }}
        onClick={deleteHandler}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default FavoriteItem;
