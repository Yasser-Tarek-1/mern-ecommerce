import React, { useState } from "react";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Search from "./components/search/Search";
import Favorite from "./components/favorite/Favorite";
import { useGetCartItemsQuery } from "./store/rtk-query/cartApi";

const Root = () => {
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showFavorite, setShowFavorite] = useState(false);

  const { data } = useGetCartItemsQuery();

  const cart = data?.cartItems;

  return (
    <>
      <Cart show={showCart} onSetShow={setShowCart} cart={cart} />
      <Search show={showSearch} onSetShow={setShowSearch} />
      <Favorite
        show={showFavorite}
        onSetShow={setShowFavorite}
        favoriteTest={cart}
      />

      <Header
        cartLength={cart?.length}
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
