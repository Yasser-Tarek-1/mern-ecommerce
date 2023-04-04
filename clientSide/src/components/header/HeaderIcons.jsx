import React from "react";
import { Box, Badge } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { motion } from "framer-motion";

const HeaderIcons = ({
  onSetShowCart,
  onSetShowSearch,
  onSetShowFavorite,
  cartLength,
  userToken,
  token,
}) => {
  return (
    <Box
      sx={{
        textAlign: "right",
      }}
    >
      {token && userToken && (
        <>
          <IconButton
            component={motion.button}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            onClick={() => onSetShowSearch(true)}
          >
            <SearchIcon
              sx={{
                color: "white",
                fontSize: {
                  xs: "22px",
                  md: "26px",
                },
              }}
            />
          </IconButton>
          <IconButton
            component={motion.button}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            onClick={() => onSetShowFavorite(true)}
          >
            <FavoriteBorderIcon
              sx={{
                color: "white",
                fontSize: {
                  xs: "22px",
                  md: "26px",
                },
              }}
            />
          </IconButton>
          <IconButton
            component={motion.button}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            onClick={() => onSetShowCart(true)}
          >
            <Badge badgeContent={cartLength ? cartLength : 0} color="secondary">
              <ShoppingCartOutlinedIcon
                sx={{
                  color: "white",
                  fontSize: {
                    xs: "22px",
                    md: "26px",
                  },
                }}
              />
            </Badge>
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default HeaderIcons;
