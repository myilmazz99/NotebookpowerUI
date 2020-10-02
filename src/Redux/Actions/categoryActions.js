import * as actionTypes from "./actionTypes";

import webAPI from "../../Axios/webAPI";

export const getCategories = () => async (dispatch) => {
  try {
    let response = await webAPI.get("api/categories/get");
    dispatch({
      type: actionTypes.GET_CATEGORIES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log({ error });
  }
};
