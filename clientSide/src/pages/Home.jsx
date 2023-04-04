import React from "react";
import Categories from "../components/Categories";
import Products from "../components/products/Products";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <Products />
    </>
  );
};

export default Home;
