import * as actionTypes from "../Actions/actionTypes";

const initialState = {
  authenticated: false,
  userCredentials: {},
  favorites: [],
  orders: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, authenticated: true, userCredentials: action.payload };
    case actionTypes.LOGOUT_SUCCESS:
      return { ...state, authenticated: false, userCredentials: {} };
    case actionTypes.GET_FAVORITES_SUCCESS:
      return { ...state, favorites: action.payload };
    case actionTypes.GET_PAST_ORDERS_SUCCESS:
      return { ...state, orders: action.payload };
    case actionTypes.ADD_TO_FAV_SUCCESS:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case actionTypes.REMOVE_FROM_FAV_SUCCESS:
      return {
        ...state,
        favorites: state.favorites.filter(
          (i) => i.productId !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default userReducer;
