import React, { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Categories from "./components/Categories";
import Products from "./components/Products";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <Cart showCart={showCart} onSetShowCart={setShowCart} />
      <Header onSetShowCart={setShowCart} />
      <Banner />
      <Categories />
      <Products />
    </>
  );
};

export default App;
