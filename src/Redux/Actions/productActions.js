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

      dispatch({ type: actionTypes.ADD_PRODUCT_SUCCESS, payload: product });
    } catch (err) {
      console.log(JSON.parse(err.response.data));
    }
  };
};
