import React, { useEffect } from "react";
import gaming from "../img/gamingnotebook.png";
import casual from "../img/casualnotebook.png";
import accessory from "../img/accessories.png";
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
