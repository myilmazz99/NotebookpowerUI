import React, { useEffect } from "react";
//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCategories } from "../Redux/Actions/categoryActions";

const CategorySelectBox = ({ getCategories, categories, handleChange }) => {
  useEffect(() => {
    if (categories.length === 0) getCategories();
  }, []);

  return (
    <select name="categoryId" className="custom-select" onChange={handleChange}>
      <option>Kategori Seç...</option>
      {categories &&
        categories.map((i) => (
          <option key={i.id} value={i.id}>
            {i.categoryName}
          </option>
        ))}
    </select>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categoryReducer.categories,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: bindActionCreators(getCategories, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelectBox);
