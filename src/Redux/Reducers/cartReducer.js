import * as actionTypes from "../Actions/actionTypes";

const initialState = {};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CART_SUCCESS:
      return action.payload;
    case actionTypes.ADD_TO_CART_SUCCESS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default cartReducer;
