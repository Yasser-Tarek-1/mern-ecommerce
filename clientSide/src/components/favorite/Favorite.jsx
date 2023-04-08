import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";

import DrawerLayout from "../../layout/DrawerLayout";
import FavoriteItem from "./FavoriteItem";

import { heartSvg } from "../../assets";
import { useGetFavoritesQuery } from "../../store/rtk-query/favoriteApi";
import { useEffect } from "react";

const Favorite = ({ show, onSetShow, onSetCartAndFavoriteLength }) => {
  const { data, isError, isSuccess } = useGetFavoritesQuery();

  const favourites = data?.res?.favourites;

  useEffect(() => {
    onSetCartAndFavoriteLength((prev) => {
      return { ...prev, favorite: favourites?.length };
    });
  }, [favourites]);

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
              Favorite Items
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
            {favourites?.length > 0 ? (
              favourites.map(({ product }) => {
                return (
                  <FavoriteItem
                    onSetShow={onSetShow}
                    key={product._id}
                    {...product}
                  />
                );
              })
            ) : (
              <Stack
                sx={{
                  p: "60px 12px",
                }}
                alignItems={"center"}
              >
                <img
                  src={heartSvg}
                  alt="heartSvg"
                  style={{ maxWidth: "100%" }}
                />
                <Typography sx={{ mb: "6px", textTransform: "uppercase" }}>
                  Favorite is empty...
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
          </Stack>
        </Box>
      </Stack>
    </DrawerLayout>
  );
};

export default Favorite;
