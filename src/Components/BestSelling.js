import React from "react";
import Tns from "./Tns";

const BestSelling = () => {
  let container = "best-selling-slider";

  return (
    <>
      <h2 className="product-list-header">Çok satanlar</h2>
      <Tns container={container} />
    </>
  );
};
export default BestSelling;
