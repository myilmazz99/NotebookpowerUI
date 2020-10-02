import * as actionTypes from "../Actions/actionTypes";

import webAPI from "../../Axios/webAPI";
import dispatchActionResult from "./dispatchActionResult";

export const fulfillOrder = (order, cartId, history) => async (dispatch) => {
  try {
    await webAPI.post("api/orders", order);
    dispatch({ type: actionTypes.COMPLETE_ORDER_SUCCESS, payload: order });
    await webAPI.put(`api/carts/${cartId}`);
    dispatch({ type: actionTypes.CLEAR_CART });
    history.push("/user/orders");
    dispatchActionResult(
      dispatch,
      true,
      "Ödemeniz alındı. En kısa sürede siparişinizi onaylayacağız İyi alışverişler."
    );
  } catch (error) {
    if (error.response.data.ErrorType.toLowerCase().includes("payment")) {
      dispatch({
        type: actionTypes.SET_PAYMENT_ERROR,
        payload: error.response.data.ErrorMessage,
      });
    } else if (
      error.response.data.ErrorType.toLowerCase().includes("validation")
    ) {
      let errorMessages = JSON.parse(error.data.response.ErrorMessage);
      dispatch({
        type: actionTypes.SET_ORDER_ERROR,
        payload: errorMessages,
      });
    } else {
      dispatchActionResult(
        dispatch,
        false,
        "Ödeme gerçekleştirilemedi. Lütfen daha sonra tekrar deneyiniz."
      );
    }
  }
};

export const getOrders = () => async (dispatch) => {
  try {
    let response = await webAPI.get("api/orders");
    dispatch({ type: actionTypes.GET_ORDERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatchActionResult(
      dispatch,
      false,
      "Siparişler getirilemedi. Lütfen daha sonra tekrar deneyiniz veya yazılım ekibimize durumu bildiriniz."
    );
  }
};

export const getOrderById = (id) => async (dispatch) => {
  try {
    let response = await webAPI.get(`api/orders/${id}`);
    dispatch({ type: actionTypes.GET_ORDER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatchActionResult(
      dispatch,
      false,
      "Sipariş bulunamadı. Lütfen daha sonra tekrar deneyiniz veya yazılım ekibimize durumu bildiriniz."
    );
  }
};

export const confirmOrder = (orderId) => async (dispatch) => {
  try {
    let response = await webAPI.put(`api/orders/${orderId}`);
    dispatch({
      type: actionTypes.CONFIRM_ORDER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatchActionResult(
      dispatch,
      false,
      "Sipariş onaylanamadı. Lütfen daha sonra tekrar deneyiniz veya yazılım ekibimize durumu bildiriniz."
    );
  }
};
