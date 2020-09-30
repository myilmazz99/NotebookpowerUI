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
import NotFound from "./Pages/NotFound";

const App = ({ logout, authenticate, userState, getCart, authenticated }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    var token = localStorage.getItem("token");
    if (token) {
      var parsedToken = JSON.parse(token);
      if (parsedToken.expiration < Date.now()) {
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
            <Route
              path="/user/:id"
              component={authenticated ? User : NotFound}
            />
            <Route exact path="/product/:productId" component={Product} />
            <Route exact path="/products" component={ProductList} />
            <Route
              exact
              path="/cart"
              component={authenticated ? Cart : NotFound}
            />
            <Route
              exact
              path="/order"
              component={authenticated ? Order : NotFound}
            />
            <Route component={NotFound} />
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
  authenticated: state.userReducer.authenticated,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*

  General refactors
  Authorization

*/
