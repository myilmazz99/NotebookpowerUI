import * as actionTypes from "../Actions/actionTypes";

const initialState = {
  categories: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return { ...state, categories: [...action.payload] };

    default:
      return state;
  }
};

export default categoryReducer;
