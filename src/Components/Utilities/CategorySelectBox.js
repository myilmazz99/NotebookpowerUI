import React, { useEffect } from "react";
//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCategories } from "../../Redux/Actions/categoryActions";
import Selectbox from "./Selectbox";

const CategorySelectBox = ({
  getCategories,
  categories,
  handleChange,
  categoryId,
}) => {
  useEffect(() => {
    if (categories.length === 0) getCategories();
  }, []);

  return (
    <Selectbox
      name="categoryId"
      placeholder="Kategori Seç..."
      data={categories}
      handleChange={handleChange}
      value={categoryId}
    />
  );
};

const mapStateToProps = (state) => ({
  categories: state.categoryReducer.categories,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: bindActionCreators(getCategories, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelectBox);
