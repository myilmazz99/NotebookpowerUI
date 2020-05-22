import React, { useState } from "react";
import productImg from "../img/productimg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ProductPreviewList = ({ container }) => {
  const [itemCount] = useState(Array(10).fill(null));

  return (
    <div className={`product-preview-list ${container ? container : ""}`}>
      {itemCount.map((data) => (
        <div className="product-preview">
          <Link to="/product/1">
            <img className="preview-image" src={productImg} alt="" />

            <div className="preview-product-details">
              <h3 className="preview-product-name">
                {"Acer Nitro AN515-54-56PH Intel Core i5 83...".length > 32
                  ? "Acer Nitro AN515-54-56PH Intel Core i5 83...".slice(
                      0,
                      32
                    ) + "..."
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
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductPreviewList;
