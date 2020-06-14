import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./styles/App.scss";
import "./styles/bootstrapcustom.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faSearch,
  faChevronRight,
  faChevronLeft,
  faTimes,
  faUserCircle,
  faHeart,
  faEnvelope,
  faPhone,
  faStar,
  faStarHalf,
  faLiraSign,
  faSortAmountDownAlt,
  faShoppingCart,
  faFilter,
  faHome,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./Redux/Reducers/configureStore";

library.add(
  faCheckSquare,
  faSearch,
  faChevronRight,
  faTimes,
  faUserCircle,
  faHeart,
  faEnvelope,
  faPhone,
  far,
  fab,
  faStar,
  faStarHalf,
  faLiraSign,
  faChevronLeft,
  faSortAmountDownAlt,
  faFilter,
  faShoppingCart,
  faHome,
  faDollarSign
);

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
