import React, { useEffect } from "react";
import gaming from "../img/category_gaming.jpg";
import casual from "../img/category_casual.jpg";
import accessory from "../img/category_accessories.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCategories } from "../Redux/Actions/categoryActions";

const CategoryCards = ({ getCategories, categories }) => {
  let images = [gaming, casual, accessory];

  useEffect(() => {
    if (categories && categories.length === 0) getCategories();
  }, []);

  return (
    <ul className="category-cards-container">
      {categories &&
        categories.map((i, j) => (
          <li key={j} className="category-card">
            <Link to={`/products?category=${i.categoryName}`}>
              <img
                className="category-card-image"
                src={images[j]}
                alt="gaming notebook category"
              />
            </Link>
            <div className="category-tag">{i.categoryName}</div>
          </li>
        ))}
    </ul>
  );
};

const mapState = (state) => ({
  categories: state.categoryReducer.categories,
});

const mapDispatch = (dispatch) => ({
  getCategories: bindActionCreators(getCategories, dispatch),
});

export default connect(mapState, mapDispatch)(CategoryCards);
