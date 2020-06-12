import React from "react";
import ProductPreviewList from "../Components/ProductPreviewList";
import Jumbotron from "../Components/Jumbotron";
import FilterMenu from "../Components/FilterMenu";

const ProductList = () => {
  return (
    <main id="product-list-page">
      <Jumbotron history />
      <FilterMenu />
      <ProductPreviewList />
    </main>
  );
};

export default ProductList;
