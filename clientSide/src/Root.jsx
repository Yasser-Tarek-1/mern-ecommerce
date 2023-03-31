import React, { useState } from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Search from "./components/Search";
import Favorite from "./components/Favorite";
import { useSelector } from "react-redux";

const Root = () => {
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showFavorite, setShowFavorite] = useState(false);

  const { productsApi } = useSelector((state) => state);

  return (
    <>
      <Cart show={showCart} onSetShow={setShowCart} />
      <Search show={showSearch} onSetShow={setShowSearch} />
      <Favorite show={showFavorite} onSetShow={setShowFavorite} />

      <Header
        onSetShowCart={setShowCart}
        onSetShowSearch={setShowSearch}
        onSetShowFavorite={setShowFavorite}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
