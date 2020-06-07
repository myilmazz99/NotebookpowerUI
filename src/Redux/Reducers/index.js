import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ productReducer, categoryReducer });

export default rootReducer;
