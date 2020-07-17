import * as actionTypes from "../Actions/actionTypes";

const initialState = {
  orders: [],
  errors: [],
  paymentError: "",
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ORDER_ERROR:
      return { ...state, errors: action.payload };
    case actionTypes.SET_PAYMENT_ERROR:
      return { ...state, paymentError: action.payload };
    case actionTypes.COMPLETE_ORDER_SUCCESS:
      return {
        ...state,
        orders: [...state.orders, action.payload],
        paymentError: "",
        errors: [],
      };
    case actionTypes.GET_ORDERS_SUCCESS:
      return { ...state, orders: action.payload };
    case actionTypes.GET_ORDER_SUCCESS:
      return { ...state, orders: [...state.orders, action.payload] };
    case actionTypes.CONFIRM_ORDER_SUCCESS:
      return {
        ...state,
        orders: [
          ...state.orders.filter((i) => i.id !== action.payload.orderId),
          action.payload,
        ],
      };

    default:
      return state;
  }
};

export default orderReducer;
