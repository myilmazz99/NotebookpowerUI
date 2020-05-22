import React from "react";
import Tns from "./Tns";

const SimiliarProducts = () => {
  let container = "similiar-products-slider";

  return (
    <div className="similiar-products">
      <h2 className="product-list-header">Benzer Ürünler</h2>
      <Tns container={container} />
    </div>
  );
};

export default SimiliarProducts;
