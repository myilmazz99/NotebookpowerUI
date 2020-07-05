import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductRating = ({ comments }) => {
  const [commentCount, setCommentCount] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    setAverageRating(0);
    setCommentCount(0);

    if (comments && comments.length > 0) {
      setCommentCount(comments.length);
      setAverageRating(
        Math.floor(comments.map((i) => i.rating).reduce((i, j) => i + j))
      );
    }
  }, [comments]);

  return (
    <section className="product-rating">
      {averageRating > 0
        ? Array(averageRating).fill(<FontAwesomeIcon icon="star" />)
        : null}{" "}
      <span className="review-count">{commentCount} yorum</span>
    </section>
  );
};

export default ProductRating;
