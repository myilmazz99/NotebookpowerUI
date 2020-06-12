import React from "react";
//Components
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
//Pages
import Admin from "./Pages/Admin";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Cart from "./Pages/Cart";
import Order from "./Pages/Order";
//Router
import { Switch, Route, useLocation } from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
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
            <Route exact path="/product/:productId" component={Product} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/cart/:cartId" component={Cart} />
            <Route exact path="/order" component={Order} />
          </Switch>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;

/*
  - notebookpower.com

  - User Page /myorders, favs, logout, iade
  - Order & User Forms
  - payment api

*/
