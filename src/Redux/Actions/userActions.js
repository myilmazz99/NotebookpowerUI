import * as actionTypes from "./actionTypes";
import webAPI from "../../Axios/webAPI";
import jwt_decode from "jwt-decode";
import dispatchActionResult from "./dispatchActionResult";
import { createCart, getCart } from "./cartActions";

export const register = (user, history) => async (dispatch) => {
  try {
    let response = await webAPI.post("api/accounts/register", user);
    dispatch({ type: actionTypes.REGISTER_SUCCESS });

    localStorage.setItem("token", JSON.stringify(response.data));
    let decodedToken = decodeToken();
    console.log(decodedToken);
    dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: decodedToken });

    dispatch(createCart(decodedToken.userId));

    dispatchActionResult(dispatch, true, "Kullanıcı kaydı başarılı.");
    history.push("/");
  } catch (error) {
    console.log(error.response);
    let {
      response: {
        status,
        data: { ErrorType, ErrorMessage },
      },
    } = error;

    if (
      ErrorType &&
      error.response.data.ErrorType.toLowerCase().includes("validation")
    ) {
      let errorMessages = JSON.parse(ErrorMessage);
      dispatch({
        type: actionTypes.SET_USER_VALIDATION_ERROR,
        payload: errorMessages,
      });
    } else if (status && status === 500) {
      dispatchActionResult(
        dispatch,
        false,
        "Kullanıcı kayıt edilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz."
      );
    }
  }
};

export const login = (user) => async (dispatch) => {
  try {
    let response = await webAPI.post("api/accounts/login", user);
    localStorage.setItem("token", JSON.stringify(response.data));
    const userCredentials = decodeToken();
    dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: userCredentials });
    webAPI.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.token}`;
    dispatch(getCart(userCredentials.userId));
    dispatch(getFavorites(userCredentials.userId));
    dispatchActionResult(
      dispatch,
      true,
      "Giriş başarılı. Hoşgeldin, " + userCredentials.fullname
    );
  } catch (error) {
    if (error.response && error.response.status === 401)
      dispatch({
        type: actionTypes.SET_AUTH_ERROR,
        payload: error.response.data,
      });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  delete webAPI.defaults.headers.common["Authorization"];
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
  let token = localStorage.getItem("token");
  let parsedToken = JSON.parse(token);
  webAPI.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${parsedToken.token}`;
  dispatch(getCart(userCredentials.userId));
  dispatch(getFavorites(userCredentials.userId));
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
    let response = await webAPI.get(`api/accounts/${id}/favorites`);
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
    let response = await webAPI.post("api/accounts/addtofav", {
      productId: Number(productId),
      userId,
    });
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
    console.log(error.response);
    dispatchActionResult(
      dispatch,
      true,
      "Ürün favorilerinize eklenemedi. Lütfen daha sonra tekrar deneyiniz."
    );
  }
};

export const removeFromFavorites = (productId, userId) => async (dispatch) => {
  try {
    await webAPI.delete(
      `api/accounts/${userId}/removefromfav/${Number(productId)}`
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
    let response = await webAPI.get(`api/orders/${id}/orders`);
    dispatch({
      type: actionTypes.GET_PAST_ORDERS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};
