import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./App.scss";
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
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter } from "react-router-dom";

library.add(
  faCheckSquare,
  faSearch,
  faChevronRight,
  faTimes,
  faUserCircle,
  faHeart,
  faEnvelope,
  faPhone,
  fab,
  faStar,
  faStarHalf,
  faLiraSign,
  faChevronLeft,
  faSortAmountDownAlt,
  faFilter,
  faShoppingCart
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
