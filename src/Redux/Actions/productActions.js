import axios from "axios";
import * as actionTypes from "./actionTypes";

export const addProduct = (product) => {
  return async (dispatch) => {
    try {
      let formData = new FormData();
      if (product.productImages)
        for (const i of product.productImages) {
          formData.append("productImages", i);
        }

      delete product.productImages;

      let response = await axios.post(
        "http://localhost:61361/api/products/add",
        product
      );

      formData.append("productId", parseInt(response.data));

      await axios.post(
        "http://localhost:61361/api/products/addImages",
        formData
      );

      // dispatch({
      //   type: actionTypes.ADD_PRODUCT_SUCCESS,
      //   payload: { ...product, id: response.data },
      // });
    } catch (err) {
      console.log(err.response);
    }
  };
};

export const getProducts = () => async (dispatch) => {
  try {
    let response = await axios.get("http://localhost:61361/api/products");
    dispatch({
      type: actionTypes.GET_ALL_PRODUCTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getBestSeller = () => async (dispatch) => {
  try {
    let response = await axios.get(
      "http://localhost:61361/api/products/bestseller"
    );
    dispatch({
      type: actionTypes.GET_BEST_SELLER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDailyDeals = () => async (dispatch) => {
  try {
    let response = await axios.get(
      "http://localhost:61361/api/products/dailydeals"
    );
    dispatch({
      type: actionTypes.GET_DAILY_DEALS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSimiliar = (categoryId) => async (dispatch) => {
  try {
    let response = await axios.get(
      `http://localhost:61361/api/products/similiar/${categoryId}`
    );
    dispatch({
      type: actionTypes.GET_SIMILIAR_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = (id) => async (dispatch) => {
  try {
    let response = await axios.get(`http://localhost:61361/api/products/${id}`);
    dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
