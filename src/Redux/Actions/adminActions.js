import Axios from "axios";
import * as actionTypes from "./actionTypes";

export const addEmail = (email) => async (dispatch) => {
  try {
    await Axios.post("http://localhost:61361/api/admin/email", email);
  } catch (error) {
    console.log(error.response);
  }
};

export const getEmails = () => async (dispatch) => {
  try {
    let response = await Axios.get("http://localhost:61361/api/admin/emails");
    dispatch({ type: actionTypes.GET_EMAILS_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const addFeedback = (feedback) => async (dispatch) => {
  try {
    await Axios.post("http://localhost:61361/api/admin/feedback", feedback);
  } catch (error) {
    console.log(error.response);
  }
};

export const getFeedbacks = () => async (dispatch) => {
  try {
    let response = await Axios.get(
      "http://localhost:61361/api/admin/feedbacks"
    );
    dispatch({
      type: actionTypes.GET_FEEDBACKS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};
