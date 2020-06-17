import React, { useEffect } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
import ProductPreviewList from "./ProductPreviewList";

const Tns = ({ container, products }) => {
  useEffect(() => {
    tns({
      container: "." + container,
      items: 1.2,
      mouseDrag: true,
      controlsText: ["<", ">"],
      responsive: {
        768: {
          items: 2.2,
        },
        992: {
          items: 3.2,
        },
        1200: {
          items: 4.2,
        },
      },
      loop: false,
    });
  }, [container, products]);

  return <ProductPreviewList container={container} products={products} />;
};

export default Tns;
