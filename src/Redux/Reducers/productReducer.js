import * as actionTypes from "../Actions/actionTypes";

let initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_SUCCESS:
      return { ...state, products: [...state.products, action.payload] };
    case actionTypes.GET_ALL_PRODUCTS_SUCCESS:
      return { ...state, products: [...action.payload] };

    default:
      return state;
  }
};

export default productReducer;
