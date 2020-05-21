import React, { useEffect } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
import ProductPreviewList from "./ProductPreviewList";

const Tns = ({ container, products }) => {
  useEffect(() => {
    tns({
      container: "." + container,
      items: 1,
      center: true,
      mouseDrag: true,
      controlsText: ["<", ">"],
      responsive: {
        576: {
          items: 3,
        },
        768: {
          items: 4,
        },
        992: {
          items: 3,
        },
      },
    });
  }, []);

  return <ProductPreviewList container={container} />;
};

export default Tns;
