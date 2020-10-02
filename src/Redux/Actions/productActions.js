import * as actionTypes from "./actionTypes";
import dispatchActionResult from "./dispatchActionResult";
import webAPI from "../../Axios/webAPI";

export const addProduct = (product) => {
  return async (dispatch) => {
    try {
      let formData = new FormData();
      if (product.productImages)
        for (const i of product.productImages) {
          formData.append("productImages", i);
        }

      delete product.productImages;

      let response = await webAPI.post("api/products/add", product);

      formData.append("productId", parseInt(response.data));

      await webAPI.post("api/products/addImages", formData);

      dispatch({
        type: actionTypes.ADD_PRODUCT_SUCCESS,
        payload: { ...product, id: response.data },
      });
      dispatchActionResult(dispatch, true, "Ürün başarıyla eklendi.");
    } catch (err) {
      let errorMessages = JSON.parse(err.response.data.ErrorMessage);
      dispatch({
        type: actionTypes.SET_PRODUCT_VALIDATION_ERROR,
        payload: errorMessages,
      });

      dispatchActionResult(
        dispatch,
        false,
        "Ürün eklenemedi. Lütfen daha sonra tekrar deneyin veya yazılım ekibimizle irtibata geçin."
      );
    }
  };
};

export const updateProduct = (product) => async (dispatch) => {
  try {
    let formData = new FormData();

    if (product.productImages.length > 0) {
      for (const i of product.productImages) {
        formData.append("productImages", i);
      }

      delete product.productImages;
    }

    await webAPI.put("api/products", product);

    await webAPI.post("api/products/addImages", formData);

    dispatch({ type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product });
    dispatchActionResult(dispatch, true, "Ürün başarıyla güncellendi.");
  } catch (err) {
    if (err.response.data.ErrorType.toLowerCase().includes("validation")) {
      let errorMessages = JSON.parse(err.response.data.ErrorMessage);
      dispatch({
        type: actionTypes.SET_PRODUCT_VALIDATION_ERROR,
        payload: errorMessages,
      });
    } else {
      dispatchActionResult(
        dispatch,
        false,
        "Ürün güncellenemedi. Lütfen daha sonra tekrar deneyin veya yazılım ekibimizle irtibata geçin."
      );
    }
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await webAPI.delete(`api/products/${id}`);
    dispatch({ type: actionTypes.DELETE_PRODUCT_SUCCESS, payload: id });
    dispatchActionResult(dispatch, true, "Ürün başarıyla silindi.");
  } catch (error) {
    dispatchActionResult(
      dispatch,
      false,
      "Ürün silinemedi. Lütfen daha sonra tekrar deneyin veya yazılım ekibimizle irtibata geçin."
    );
  }
};

export const getProducts = () => async (dispatch) => {
  try {
    let response = await webAPI.get("api/products");
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
    let response = await webAPI.get("api/products/bestseller");
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
    let response = await webAPI.get("api/products/dailydeals");
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
    let response = await webAPI.get(`api/products/similiar/${categoryId}`);
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
    let response = await webAPI.get(`api/products/${id}`);
    dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getSpecifications = () => async (dispatch) => {
  try {
    let response = await webAPI.get(`api/products/specifications`);
    dispatch({
      type: actionTypes.GET_SPECIFICATIONS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeSpecification = (productId, specId) => async (dispatch) => {
  try {
    await webAPI.delete(`api/products/${productId}/${specId}`);
    dispatch({
      type: actionTypes.REMOVE_SPECIFICATION_SUCCESS,
      payload: specId,
    });
    dispatchActionResult(dispatch, true, "Özellik başarıyla silindi.");
  } catch (error) {
    dispatchActionResult(
      dispatch,
      false,
      "Özellik silinemedi. Lütfen daha sonra tekrar deneyin veya yazılım ekibimizle irtibata geçin."
    );
  }
};

export const addComment = (productId, userId, username, comment) => async (
  dispatch
) => {
  try {
    await webAPI.post("api/comments/add", {
      productId,
      userId,
      rating: comment.rating,
      commentText: comment.commentText,
      username,
    });
    dispatch({
      type: actionTypes.ADD_COMMENT_SUCCESS,
      payload: {
        productId,
        userId,
        rating: comment.rating,
        commentText: comment.commentText,
        username,
      },
    });
    dispatchActionResult(dispatch, true, "Yorumunuz başarıyla eklendi.");
  } catch (error) {
    dispatchActionResult(
      dispatch,
      true,
      "Yorumunuz eklenemedi. Lütfen daha sonra tekrar deneyiniz."
    );
  }
};
