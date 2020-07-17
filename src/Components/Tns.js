import React, { useEffect } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
import ProductPreviewList from "./ProductPreviewList";

const Tns = ({ container, products, isCarousel }) => {
  useEffect(() => {
    if (
      (products && products.length > 0) ||
      typeof products.type === "symbol"
    ) {
      if (isCarousel) {
        var carouselSlider = tns({
          container: "." + container,
          items: 1,
          mouseDrag: true,
          controlsText: ["<", ">"],
          loop: true,
          navAsThumbnails: true,
          navContainer: "#customize-thumbnails",
        });
      } else {
        var slider = tns({
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
      }
    }

    return () => {
      slider && slider.destroy();
      carouselSlider && carouselSlider.destroy();
    };
  }, [products]);

  return isCarousel ? (
    products
  ) : (
    <ProductPreviewList container={container} products={products} />
  );
};

export default Tns;
