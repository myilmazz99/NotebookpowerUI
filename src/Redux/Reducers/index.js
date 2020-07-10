import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import adminReducer from "./adminReducer";
import uiReducer from "./uiReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  productReducer,
  categoryReducer,
  cartReducer,
  userReducer,
  adminReducer,
  uiReducer,
});

export default rootReducer;
