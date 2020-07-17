import React, { useEffect } from "react";
//Components
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/Utilities/ScrollToTop";
//Pages
import Admin from "./Pages/Admin";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Cart from "./Pages/Cart";
import Order from "./Pages/Order";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
import User from "./Pages/User";
import { authenticate, logout } from "./Redux/Actions/userActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCart } from "./Redux/Actions/cartActions";
import ResultAlert from "./Components/Utilities/ResultAlert";

const App = ({ logout, authenticate, userState, getCart }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    var token = localStorage.getItem("token");
    if (token) {
      var parsedToken = JSON.parse(token);
      if (parsedToken.Expiration < Date.now()) {
        logout();
      } else {
        authenticate();
      }
    }
  }, []);

  useEffect(() => {
    if (userState.userCredentials.userId)
      getCart(userState.userCredentials.userId);
  }, [userState.userCredentials.userId]);

  return (
    <>
      <ResultAlert />
      <ScrollToTop />
      {pathname.includes("admin") && userState.authenticated ? (
        <Switch>
          <Route path="/admin" component={Admin} />
        </Switch>
      ) : (
        <>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user/:id" component={User} />
            <Route exact path="/product/:productId" component={Product} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/order" component={Order} />
          </Switch>
          <Footer />
        </>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  authenticate: bindActionCreators(authenticate, dispatch),
  logout: bindActionCreators(logout, dispatch),
  getCart: bindActionCreators(getCart, dispatch),
});

const mapStateToProps = (state) => ({
  userState: state.userReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*
  - notebookpower.com

  - payment api

*/
