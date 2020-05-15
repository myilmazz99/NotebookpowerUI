import React, { useEffect, useState } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
import img from "../img/productimg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tns = ({ container, products }) => {
  const [testData] = useState(Array(6).fill(null));

  useEffect(() => {
    tns({
      container: "." + container,
      items: 1,
      gutter: 18,
      center: true,
      mouseDrag: true,
      controlsText: ["<", ">"],
      responsive: {
        576: {
          items: 3,
        },
        768: {
          items: 4,
          gutter: 26,
        },
        992: {
          items: 3,
          gutter: 26,
        },
      },
    });
  }, []);

  return (
    <div className={`product-preview-list ${container}`}>
      {testData.map((data) => (
        <div className="product-preview">
          <img className="preview-image" src={img} alt="" />

          <div className="preview-product-details">
            <h3 className="preview-product-name">
              {"Acer Nitro AN515-54-56PH Intel Core i5 83...".length > 32
                ? "Acer Nitro AN515-54-56PH Intel Core i5 83...".slice(0, 32) +
                  "..."
                : "Acer Nitro AN515-54-56PH Intel Core i5 83..."}
            </h3>
            <div className="preview-product-rating">
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star-half" />
            </div>
            <div className="preview-product-price">
              <span className="old-price">
                400 <FontAwesomeIcon icon="lira-sign" />
              </span>
              <span className="new-price">
                599 <FontAwesomeIcon icon="lira-sign" />
              </span>
            </div>
          </div>
          <div className="product-menu">
            <div className="product-menu-option">
              <FontAwesomeIcon icon="heart" />
            </div>
            <div className="product-menu-option">Sepete ekle</div>
            <div className="product-menu-option">
              <FontAwesomeIcon icon="chevron-right" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tns;
