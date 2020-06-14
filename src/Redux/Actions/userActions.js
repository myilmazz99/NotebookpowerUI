import * as actionTypes from "./actionTypes";
import Axios from "axios";
import jwt_decode from "jwt-decode";

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
    console.log("yo");
    localStorage.setItem("token", JSON.stringify(response.data));
    dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: decodeToken() });
  } catch (error) {
    console.log(error.response);
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  return { type: actionTypes.LOGOUT_SUCCESS };
};

export const authenticate = () => {
  return { type: actionTypes.LOGIN_SUCCESS, payload: decodeToken() };
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

export const getPastOrders = (id) => async (dispatch) => {
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

export const addToFavorites = (productId, userId) => async (dispatch) => {
  try {
    let response = await Axios.post(
      "http://localhost:61361/api/accounts/addtofav",
      {
        productId: 1,
        userId,
      }
    );
    dispatch({
      type: actionTypes.ADD_TO_FAV_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const removeFromFavorites = (favId) => async (dispatch) => {
  try {
    await Axios.delete(
      `http://localhost:61361/api/accounts/removefromfav/${favId}`
    );
    dispatch({ type: actionTypes.REMOVE_FROM_FAV_SUCCESS, payload: favId });
  } catch (error) {
    console.log(error);
  }
};
