import * as actionTypes from "../Actions/actionTypes";

const initialState = {
  cartId: 0,
  cartItems: [],
  prices: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CART_SUCCESS:
      return {
        ...state,
        cartId: action.payload.id,
        cartItems: [...action.payload.cartItems],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        prices: state.prices.filter((i) => i.cartItemId !== action.payload),
        cartItems: state.cartItems.filter((i) => i.id !== action.payload),
      };
    case actionTypes.COLLECT_CART_ITEM_PRICE:
      return {
        ...state,
        prices: [
          ...state.prices.filter(
            (i) => i.cartItemId !== action.payload.cartItemId
          ),
          action.payload,
        ],
      };
    case actionTypes.ADD_TO_CART_SUCCESS:
      if (action.payload.productExists) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.filter(
              (i) => i.productId !== action.payload.productId
            ),
            action.payload,
          ],
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }

    default:
      return state;
  }
};

export default cartReducer;
