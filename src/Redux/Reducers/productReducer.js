import * as actionTypes from "../Actions/actionTypes";

let initialState = {
  products: [],
  bestseller: [],
  dailydeals: [],
  similiar: [],
  specifications: [],
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
    case actionTypes.GET_SPECIFICATIONS_SUCCESS:
      return { ...state, specifications: action.payload };
    case actionTypes.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [
          ...state.products.filter((i) => i.id !== action.payload.id),
          action.payload,
        ],
      };
    case actionTypes.REMOVE_SPECIFICATION_SUCCESS:
      console.log("yo");
      return {
        ...state,
        products: state.products.map((i) =>
          i.specifications.filter((j) => j.id !== action.payload)
        ),
      };
    case actionTypes.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter((i) => i.id !== action.payload),
      };
    case actionTypes.ADD_COMMENT_SUCCESS:
      let productToModify = state.products.find(
        (i) => i.id === action.payload.productId
      );
      let newState = state.products.map((p) => {
        if (p.id === action.payload.productId) {
          return Object.assign({}, productToModify, {
            comments: [...productToModify.comments, action.payload],
          });
        } else {
          return p;
        }
      });
      return {
        ...state,
        products: [...newState],
      };

    default:
      return state;
  }
};

export default productReducer;
