import React, { useState } from "react";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Search from "./components/search/Search";
import Favorite from "./components/favorite/Favorite";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import LogoutIcon from "@mui/icons-material/Logout";
import { logOut } from "./store/slices/userLoginSlice";
import { SpeedDial, SpeedDialAction, Badge } from "@mui/material";

const Root = () => {
  const [open, setOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showFavorite, setShowFavorite] = useState(false);

  const [cartAndFavoriteLength, setCartAndFavoriteLength] = useState({
    cart: 0,
    favorite: 0,
  });

  const dispatch = useDispatch();

  const actions = [
    {
      icon: <ShoppingCartOutlinedIcon />,
      name: "Cart",
      length: cartAndFavoriteLength.cart,
    },
    { icon: <SearchIcon />, name: "Search" },
    {
      icon: <FavoriteBorderIcon />,
      name: "Favorite",
      length: cartAndFavoriteLength.favorite,
    },
    { icon: <LogoutIcon />, name: "Logout" },
  ];

  const speedHandler = (name) => {
    if (name === "Cart") {
      setShowCart(true);
    }
    if (name === "Search") {
      setShowSearch(true);
    }
    if (name === "Favorite") {
      setShowFavorite(true);
    }
    if (name === "Logout") {
      dispatch(logOut());
      localStorage.clear();
      toast.success("You logout successfully");
    }
  };

  return (
    <>
      <Cart
        show={showCart}
        onSetShow={setShowCart}
        onSetCartAndFavoriteLength={setCartAndFavoriteLength}
      />
      <Search show={showSearch} onSetShow={setShowSearch} />
      <Favorite
        show={showFavorite}
        onSetShow={setShowFavorite}
        onSetCartAndFavoriteLength={setCartAndFavoriteLength}
      />
      <Header />
      <Outlet />
      <Footer />
      {localStorage.getItem("userToken") && (
        <SpeedDial
          onClick={() => setOpen(!open)}
          open={open}
          ariaLabel="SpeedDial openIcon example"
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            color: "red",
          }}
          icon={<SpeedDialIcon color="secondary" />}
          FabProps={{
            sx: {
              bgcolor: "secondary.main",
              "&:hover": {
                bgcolor: "secondary.dark",
              },
            },
          }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              color="secondary"
              key={action.name}
              icon={
                <Badge
                  badgeContent={action.length}
                  color="secondary"
                  children={action.icon}
                />
              }
              tooltipTitle={action.name}
              onClick={() => speedHandler(action.name)}
            />
          ))}
        </SpeedDial>
      )}
    </>
  );
};

export default Root;
