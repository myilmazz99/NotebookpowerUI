import * as actionTypes from "../Actions/actionTypes";

const initialState = {
  cartId: 0,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_CART_SUCCESS:
      return {
        ...state,
        cartId: action.payload.id,
        cartItems: action.payload.cartItems,
      };
    case actionTypes.GET_CART_SUCCESS:
      return {
        ...state,
        cartId: action.payload.id,
        cartItems: action.payload.cartItems,
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.id !== action.payload),
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
    case actionTypes.COLLECT_CART_ITEM_PRICE:
      let cartItemToModify = state.cartItems.find(
        (i) => i.id === action.payload.cartItemId
      );
      let newState = state.cartItems.map((i) => {
        if (i.id === action.payload.cartItemId) {
          return Object.assign({}, cartItemToModify, {
            productQuantity: action.payload.quantity,
          });
        } else {
          return i;
        }
      });

      return { ...state, cartItems: newState };

    case actionTypes.CLEAR_CART:
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};

export default cartReducer;
