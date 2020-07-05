import React, { useRef } from "react";
import CustomNumberInput from "./CustomNumberInput";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart } from "../Redux/Actions/cartActions";

const AddToCart = ({ add, productId, cartId, cartItems }) => {
  const input = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    let productExists = cartItems.find((i) => i.productId === productId)
      ? true
      : false;

    add(cartId, productId, Number(input.current.value), productExists);
  };

  return (
    <form className="add-to-cart" onSubmit={handleSubmit}>
      <CustomNumberInput refe={input} />
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
