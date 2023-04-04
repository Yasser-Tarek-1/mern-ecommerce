import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";

import DrawerLayout from "../../layout/DrawerLayout";
import FavoriteItem from "./FavoriteItem";

const Favorite = ({ show, onSetShow, favoriteTest }) => {
  return (
    <DrawerLayout open={show} setOpen={onSetShow}>
      <Stack justifyContent="space-between" sx={{ minHeight: "100vh" }}>
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap={6}
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
            {favoriteTest?.length > 0 ? (
              favoriteTest.map(({ product }) => {
                return (
                  <FavoriteItem
                    onSetShow={onSetShow}
                    key={product._id}
                    {...product}
                  />
                );
              })
            ) : (
              <Box
                sx={{
                  p: " 24px 12px",
                }}
              >
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
              </Box>
            )}
          </Stack>
        </Box>
      </Stack>
    </DrawerLayout>
  );
};

export default Favorite;
