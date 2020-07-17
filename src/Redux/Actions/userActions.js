import * as actionTypes from "./actionTypes";
import Axios from "axios";
import jwt_decode from "jwt-decode";
import dispatchActionResult from "./dispatchActionResult";

export const register = (user) => async (dispatch) => {
  try {
    await Axios.post("http://localhost:61361/api/accounts/register", user);
    dispatch({ type: actionTypes.REGISTER_SUCCESS });
  } catch (error) {
    console.log(error.response);
  }
};

export const login = (user) => async (dispatch) => {
  try {
    let response = await Axios.post(
      "http://localhost:61361/api/accounts/login",
      user
    );
    localStorage.setItem("token", JSON.stringify(response.data));
    dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: decodeToken() });
    dispatchActionResult(dispatch, true, "Giriş başarılı.");
  } catch (error) {
    console.log(error.response);
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatchActionResult(dispatch, true, "Oturum başarıyla sonlandırıldı.");
  dispatch({ type: actionTypes.LOGOUT_SUCCESS });
};

export const authenticate = () => (dispatch) => {
  let userCredentials = decodeToken();
  dispatchActionResult(
    dispatch,
    true,
    `Tekrar hoşgeldin, ${userCredentials.fullname}! İyi alışverişler.`
  );
  dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: userCredentials });
};

const decodeToken = () => {
  let token = localStorage.getItem("token");
  let decoded = jwt_decode(token);
  return {
    email: decoded.email,
    fullname: decoded.fullname,
    role: decoded.role,
    userId: decoded.userId,
  };
};

export const getFavorites = (id) => async (dispatch) => {
  try {
    let response = await Axios.get(
      `http://localhost:61361/api/accounts/${id}/favorites`
    );
    dispatch({
      type: actionTypes.GET_FAVORITES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const addToFavorites = (productId, userId) => async (dispatch) => {
  try {
    let response = await Axios.post(
      "http://localhost:61361/api/accounts/addtofav",
      {
        productId: Number(productId),
        userId,
      }
    );
    dispatch({
      type: actionTypes.ADD_TO_FAV_SUCCESS,
      payload: response.data,
    });
    dispatchActionResult(
      dispatch,
      true,
      "Ürün başarıyla favorilerine eklendi."
    );
  } catch (error) {
    dispatchActionResult(
      dispatch,
      true,
      "Ürün favorilerinize eklenemedi. Lütfen daha sonra tekrar deneyiniz."
    );
  }
};

export const removeFromFavorites = (productId, userId) => async (dispatch) => {
  try {
    await Axios.delete(
      `http://localhost:61361/api/accounts/${userId}/removefromfav/${Number(
        productId
      )}`
    );
    dispatch({
      type: actionTypes.REMOVE_FROM_FAV_SUCCESS,
      payload: Number(productId),
    });
    dispatchActionResult(
      dispatch,
      true,
      "Ürün başarıyla favorilerinizden çıkarıldı."
    );
  } catch (error) {
    dispatchActionResult(
      dispatch,
      false,
      "Ürün favorilerinizden çıkarılamadı. Lütfen daha sonra tekrar deneyiniz."
    );
  }
};

export const getOrdersByUserId = (id) => async (dispatch) => {
  try {
    let response = await Axios.get(
      `http://localhost:61361/api/orders/${id}/orders`
    );
    dispatch({
      type: actionTypes.GET_PAST_ORDERS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};
