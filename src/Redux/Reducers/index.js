import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import adminReducer from "./adminReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  productReducer,
  categoryReducer,
  cartReducer,
  userReducer,
  adminReducer,
});

export default rootReducer;
