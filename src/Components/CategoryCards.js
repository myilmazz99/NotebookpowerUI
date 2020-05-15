import React from "react";
import gaming from "../img/gamingnotebook.png";
import casual from "../img/casualnotebook.png";
import accessory from "../img/accessories.png";

const CategoryCards = () => {
  return (
    <div className="category-cards-container container">
      <div className="category-card">
        <img
          className="category-card-image"
          src={gaming}
          alt="gaming notebook category"
        />
      </div>
      <div className="category-card">
        <img
          className="category-card-image"
          src={casual}
          alt="casual notebook category"
        />
      </div>
      <div className="category-card">
        <img
          className="category-card-image"
          src={accessory}
          alt="notebook accessories category"
        />
      </div>
    </div>
  );
};

export default CategoryCards;
