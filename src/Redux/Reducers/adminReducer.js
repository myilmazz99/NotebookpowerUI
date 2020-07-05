import * as actionTypes from "../Actions/actionTypes";

let initialState = {
  feedbacks: [],
  emails: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FEEDBACKS_SUCCESS:
      return { ...state, feedbacks: action.payload };
    case actionTypes.GET_EMAILS_SUCCESS:
      return { ...state, emails: action.payload };

    default:
      return state;
  }
};

export default adminReducer;
