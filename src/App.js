import React, { useEffect } from "react";
//Components
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/Utilities/ScrollToTop";
//Pages
import { authenticate, logout } from "./Redux/Actions/userActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ResultAlert from "./Components/Utilities/ResultAlert";
import NotFound from "./Pages/NotFound";
import { Helmet } from "react-helmet";
import PageLoading from "./Components/Utilities/PageLoading";
import loadable from "@loadable/component";
import { Switch, Route, useLocation } from "react-router-dom";

const App = ({ logout, authenticate }) => {
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

  const Admin = loadable(() => import("./Pages/Admin"), {
    fallback: <PageLoading />,
  });
  const Home = loadable(() => import("./Pages/Home"), {
    fallback: <PageLoading />,
  });
  const Product = loadable(() => import("./Pages/Product"), {
    fallback: <PageLoading />,
  });
  const ProductList = loadable(() => import("./Pages/ProductList"), {
    fallback: <PageLoading />,
  });
  const Cart = loadable(() => import("./Pages/Cart"), {
    fallback: <PageLoading />,
  });
  const Order = loadable(() => import("./Pages/Order"), {
    fallback: <PageLoading />,
  });
  const User = loadable(() => import("./Pages/User"), {
    fallback: <PageLoading />,
  });

  return (
    <>
      <Helmet>
        <title>Notebook Power</title>
      </Helmet>
      <ResultAlert />
      <ScrollToTop />
      {pathname.includes("admin") ? (
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
});

export default connect(null, mapDispatchToProps)(App);
