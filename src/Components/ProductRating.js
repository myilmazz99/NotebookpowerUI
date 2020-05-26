import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductRating = () => {
  return (
    <div className="product-rating">
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star-half" />
      <span className="review-count">3 yorum</span>
    </div>
  );
};

export default ProductRating;
