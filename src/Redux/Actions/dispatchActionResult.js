import * as actionTypes from "./actionTypes";

const dispatchActionResult = (dispatch, isSuccess, payload) => {
  if (isSuccess) {
    dispatch({
      type: actionTypes.SET_SUCCESS,
      payload: payload,
    });
    setTimeout(() => {
      dispatch({ type: actionTypes.CLEAR_SUCCESS });
    }, 5000);
  } else {
    dispatch({
      type: actionTypes.SET_ERROR,
      payload: payload,
    });
    setTimeout(() => {
      dispatch({ type: actionTypes.CLEAR_ERROR });
    }, 5000);
  }
};

export default dispatchActionResult;
