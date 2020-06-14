import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  productReducer,
  categoryReducer,
  cartReducer,
  userReducer,
});

export default rootReducer;
