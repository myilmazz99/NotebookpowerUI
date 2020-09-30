import Axios from "axios";
import * as actionTypes from "./actionTypes";
import dispatchActionResult from "./dispatchActionResult";

export const addToCart = (id, productId, quantity, productExists) => async (
  dispatch
) => {
  try {
    let response = await Axios.put("http://localhost:61361api/carts", {
      productId,
      id,
      quantity,
      productExists,
    });
    dispatch({
      type: actionTypes.ADD_TO_CART_SUCCESS,
      payload: { ...response.data, productExists },
    });
    dispatchActionResult(dispatch, true, "Ürün sepetinize eklendi.");
  } catch (error) {
    dispatchActionResult(
      dispatch,
      false,
      "Ürün sepetinize eklenemedi. Lütfen daha sonra tekrar deneyin."
    );
  }
};

export const createCart = (userId) => async (dispatch) => {
  try {
    let response = await Axios.post("api/carts/create", {
      userId,
    });
    dispatch({ type: actionTypes.CREATE_CART_SUCCESS, payload: response.data });
  } catch (error) {}
};

export const removeFromCart = (cartId, cartItemId) => async (dispatch) => {
  try {
    await Axios.delete(`api/carts/${cartId}/${cartItemId}`);
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: cartItemId });
    dispatchActionResult(dispatch, false, "Ürün sepetinizden çıkarıldı.");
  } catch (error) {
    dispatchActionResult(
      dispatch,
      false,
      "Ürün sepetinizden çıkarılamadı. Lütfen daha sonra tekrar deneyin."
    );
  }
};

export const getCart = (userId) => async (dispatch) => {
  try {
    let response = await Axios.get(`api/carts/${userId}`);
    dispatch({ type: actionTypes.GET_CART_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error.response);
    console.log(error);
  }
};

export const collectCartItemPrice = (p) => ({
  type: actionTypes.COLLECT_CART_ITEM_PRICE,
  payload: p,
});
