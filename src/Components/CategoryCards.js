import React from "react";
import gaming from "../img/gamingnotebook.png";
import casual from "../img/casualnotebook.png";
import accessory from "../img/accessories.png";
import { Link } from "react-router-dom";

const CategoryCards = () => {
  return (
    <div className="category-cards-container">
      <div className="category-card">
        <Link to="admin">adm</Link>
        <Link to="/products?category=gaming">
          <img
            className="category-card-image"
            src={gaming}
            alt="gaming notebook category"
          />
        </Link>
      </div>
      <div className="category-card">
        <Link to="/products?category=casual">
          <img
            className="category-card-image"
            src={casual}
            alt="casual notebook category"
          />
        </Link>
      </div>
      <div className="category-card">
        <Link to="/products?category=accessory">
          <img
            className="category-card-image"
            src={accessory}
            alt="notebook accessories category"
          />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCards;
