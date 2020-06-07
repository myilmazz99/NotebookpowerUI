import * as actionTypes from "../Actions/actionTypes";

let initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_SUCCESS:
      return state;

    default:
      return null;
  }
};

export default productReducer;
