import React, { useState } from "react";
import CustomNumberInput from "./CustomNumberInput";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart } from "../Redux/Actions/cartActions";

const AddToCart = ({ add, productId, cartId, cartItems }) => {
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    let productExists = cartItems.find((i) => i.productId === productId)
      ? true
      : false;

    add(cartId, productId, Number(quantity), productExists);
  };

  const handleQuantity = (q) => {
    setQuantity(q);
  };

  return (
    <form className="add-to-cart" onSubmit={handleSubmit}>
      <CustomNumberInput handleQuantity={handleQuantity} />
      <input type="submit" value="Sepete ekle" />
    </form>
  );
};

const mapState = (state) => ({
  cartId: state.cartReducer.cartId,
  cartItems: state.cartReducer.cartItems,
});

const mapDispatch = (dispatch) => ({
  add: bindActionCreators(addToCart, dispatch),
});

export default connect(mapState, mapDispatch)(AddToCart);
