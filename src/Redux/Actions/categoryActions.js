import * as actionTypes from "./actionTypes";
import Axios from "axios";

export const getCategories = () => async (dispatch) => {
  try {
    let response = await Axios.get("http://localhost:61361/api/categories/get");
    dispatch({
      type: actionTypes.GET_CATEGORIES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log({ error });
  }
};
