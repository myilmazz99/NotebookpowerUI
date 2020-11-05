import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductRating = ({ comments }) => {
  const [commentCount, setCommentCount] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    if (comments && comments.length > 0) {
      setCommentCount(comments.length);
      setAverageRating(
        Math.floor(
          comments.map((i) => i.rating).reduce((i, j) => i + j) /
            comments.length
        )
      );
    }
  }, [comments]);

  useEffect(() => {
    setStars(Array(averageRating).fill("star"));
    if (averageRating !== 0 && averageRating < 5)
      setStars((prev) => [
        ...prev,
        ...Array(5 - averageRating).fill(["far", "star"]),
      ]);
  }, [averageRating]);

  return (
    <section className="product-rating">
      {stars.length > 0 ? (
        <>
          {stars.map((i, j) => (
            <FontAwesomeIcon key={j} icon={i} />
          ))}
        </>
      ) : null}{" "}
      <span className="review-count">{commentCount} yorum</span>
    </section>
  );
};

export default ProductRating;
