import React from "react";
import productImg from "../img/productimg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ProductRating from "./ProductRating";
import AddToFav from "./Utilities/AddToFav";

const ProductPreviewList = ({ container, products }) => {
  const addToFavs = () => {};

  return (
    <div className={`product-preview-list ${container || ""}`}>
      {products &&
        products.map((data) => (
          <div key={data.id} className="product-preview">
            <img
              className="preview-image"
              src={productImg}
              alt={data.productName}
            />

            <Link to="/product/1">
              <div className="preview-product-details">
                <h3 className="preview-product-name">
                  {data.productName.length > 32
                    ? data.productName.slice(0, 32) + "..."
                    : data.productName}
                </h3>
                <ProductRating />
                <div className="preview-product-price">
                  <span className="old-price">
                    {data.oldPrice} <FontAwesomeIcon icon="lira-sign" />
                  </span>
                  <span className="new-price">
                    {data.newPrice} <FontAwesomeIcon icon="lira-sign" />
                  </span>
                </div>
              </div>
            </Link>
            <div className="product-menu">
              <div className="product-menu-option">Sepete ekle</div>
            </div>
            <div className="add-to-fav" onClick={addToFavs}>
              <AddToFav />
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductPreviewList;
