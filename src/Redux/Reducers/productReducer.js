import * as actionTypes from "../Actions/actionTypes";

let initialState = {
  products: [],
  bestseller: [],
  dailydeals: [],
  similiar: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: [
          ...state.products.filter((i) =>
            action.payload.every((j) => j.id !== i.id)
          ),
          ...action.payload,
        ],
      };
    case actionTypes.GET_BEST_SELLER_SUCCESS:
      return {
        ...state,
        products: [
          ...state.products.filter((i) =>
            action.payload.every((j) => j.id !== i.id)
          ),
          ...action.payload,
        ],
        bestseller: action.payload,
      };
    case actionTypes.GET_DAILY_DEALS_SUCCESS:
      return {
        ...state,
        products: [
          ...state.products.filter((i) =>
            action.payload.every((j) => j.id !== i.id)
          ),
          ...action.payload,
        ],
        dailydeals: action.payload,
      };
    case actionTypes.GET_SIMILIAR_SUCCESS:
      return {
        ...state,
        products: [
          ...state.products.filter((i) =>
            action.payload.every((j) => j.id !== i.id)
          ),
          ...action.payload,
        ],
        similiar: action.payload,
      };
    case actionTypes.GET_PRODUCT_SUCCESS:
      return { ...state, products: [...state.products, action.payload] };

    default:
      return state;
  }
};

export default productReducer;
