import Axios from "axios";
import * as actionTypes from "./actionTypes";

export const addToCart = (product) => async (dispatch) => {
  try {
    await Axios.put("http://localhost:61361/api/carts", product);
    dispatch({ type: actionTypes.ADD_TO_CART_SUCCESS, payload: product });
  } catch (error) {
    console.log(error.response);
  }
};

export const getCart = (userId) => async (dispatch) => {
  try {
    let response = await Axios.get(
      `http://localhost:61361/api/carts/${userId}`
    );
    dispatch({ type: actionTypes.GET_CART_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error.response);
  }
};
