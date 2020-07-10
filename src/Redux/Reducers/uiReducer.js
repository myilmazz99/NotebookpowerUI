import * as actionTypes from "../Actions/actionTypes";

let initialState = {
  resultMessage: "",
  isSuccess: false,
  isError: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ERROR:
      return {
        ...state,
        isSuccess: false,
        isError: true,
        resultMessage: action.payload,
      };
    case actionTypes.CLEAR_ERROR:
      return { ...state, isError: false, resultMessage: "" };
    case actionTypes.SET_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isError: false,
        resultMessage: action.payload,
      };
    case actionTypes.CLEAR_SUCCESS:
      return { ...state, isSuccess: false, resultMessage: "" };
    default:
      return state;
  }
};

export default uiReducer;
