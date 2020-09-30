import Axios from "axios";
import * as actionTypes from "./actionTypes";
import dispatchActionResult from "./dispatchActionResult";

export const addEmail = (email) => async (dispatch) => {
  try {
    await Axios.post("api/admin/email", email);
    dispatchActionResult(
      dispatch,
      true,
      "Mailiniz tarafımıza iletilmiştir. İyi alışverişler dileriz."
    );
  } catch (error) {
    dispatchActionResult(
      dispatch,
      false,
      "Mailiniz gönderilemedi. Lütfen daha sonra tekrar deneyiniz."
    );
  }
};

export const getEmails = () => async (dispatch) => {
  try {
    let response = await Axios.get("api/admin/emails");
    dispatch({ type: actionTypes.GET_EMAILS_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const addFeedback = (feedback) => async (dispatch) => {
  try {
    await Axios.post("api/admin/feedback", feedback);
    dispatchActionResult(
      dispatch,
      true,
      "Görüşünüz tarafımıza değerlendirilmek üzere iletilmiştir. İyi alışverişler dileriz."
    );
  } catch (error) {
    dispatchActionResult(
      dispatch,
      false,
      "Görüşünüz tarafımıza iletilemedi. Lütfen daha sonra tekrar deneyiniz."
    );
    console.log(error.response);
  }
};

export const getFeedbacks = () => async (dispatch) => {
  try {
    let response = await Axios.get("api/admin/feedbacks");
    dispatch({
      type: actionTypes.GET_FEEDBACKS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};
