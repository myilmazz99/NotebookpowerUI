import React, { useRef } from "react";
import CustomNumberInput from "./CustomNumberInput";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart } from "../Redux/Actions/cartActions";

const AddToCart = ({ add, productId, cartId }) => {
  const input = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    add(cartId, productId, Number(input.current.value));
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
});

const mapDispatch = (dispatch) => ({
  add: bindActionCreators(addToCart, dispatch),
});

export default connect(mapState, mapDispatch)(AddToCart);
