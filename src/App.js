import React, { Component } from "react";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Cart from "./Pages/Cart";
import Order from "./Pages/Order";
import { Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
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
    );
  }
}

/*
  - notebookpower.com
  
  ** PAGES **
  - Home +
  - Product List +
  - Product Details +
  - Cart +
  - Order Details + Payment

  ** COMPONENTS **
  - Login & Register Modals
  - Contact Form +
  - Mailing +
  - Best selling section + 
  - Recently added section +

  - Laptops categorized by brands and gaming or not.

*/
