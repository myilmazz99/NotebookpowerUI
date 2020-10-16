import React, { useState } from "react";
import CustomNumberInput from "../Utilities/CustomNumberInput";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart } from "../../Redux/Actions/cartActions";

const AddToCart = ({ add, productId, cartId, cartItems, authenticated }) => {
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
    <>
      {authenticated ? (
        <form className="add-to-cart" onSubmit={handleSubmit}>
          <CustomNumberInput handleQuantity={handleQuantity} />
          <input type="submit" value="Sepete Ekle" />
        </form>
      ) : (
        <p style={{ color: "gray", fontSize: "0.8rem", marginTop: "0.4rem" }}>
          Sepet ve Sipariş işlemleri için giriş yapmalısınız.
        </p>
      )}
    </>
  );
};

const mapState = (state) => ({
  cartId: state.cartReducer.cartId,
  cartItems: state.cartReducer.cartItems,
  authenticated: state.userReducer.authenticated,
});

const mapDispatch = (dispatch) => ({
  add: bindActionCreators(addToCart, dispatch),
});

export default connect(mapState, mapDispatch)(AddToCart);
