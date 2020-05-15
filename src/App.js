import React, { Component } from "react";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Product from "./Pages/Product";

export default class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Home />
        {/* <Product /> deneme devam ediyor...*/}
        <Footer />
      </>
    );
  }
}

/*
  - notebookpower.com
  
  ** PAGES **
  - Home
  - Product List
  - Product Details
  - Cart
  - Order Details + Payment

  ** COMPONENTS **
  - Login & Register Modals
  - Contact Form
  - Mailing
  - Best selling section + 
  - Recently added section +

  - Laptops categorized by brands and gaming or not.

*/
