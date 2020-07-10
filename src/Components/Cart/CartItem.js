import React, { useState, useEffect } from "react";
import CustomNumberInput from "../CustomNumberInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  removeFromCart,
  collectCartItemPrice,
} from "../../Redux/Actions/cartActions";
import numberFormat from "../Tools/numberFormat";

const CartItem = ({
  cartItem,
  removeFromCart,
  cartId,
  collectCartItemPrice,
}) => {
  const [quantity, setQuantity] = useState(0);

  const deleteCartItem = (e, cartItemId) => {
    e.preventDefault();
    removeFromCart(cartId, cartItemId);
  };

  const handleQuantity = (q) => {
    setQuantity(q);
  };

  useEffect(() => {
    if (quantity !== 0.0)
      collectCartItemPrice({
        cartItemId: cartItem.id,
        totalPrice: quantity * cartItem.product.newPrice,
      });
  }, [quantity]);

  return (
    <>
      <li className="cart-item">
        <Link to={`/product/${cartItem.product.id}`}>
          <figure className="cart-item-img">
            <img
              src="https://productimages.hepsiburada.net/s/36/80/10512087220274.jpg"
              alt=""
            />
          </figure>
        </Link>
        <div className="cart-item-details">
          <Link to={`/product/${cartItem.product.id}`}>
            <h3 className="product-name">{cartItem.product.productName}</h3>
          </Link>
          <div className="product-prices">
            <CustomNumberInput
              defValue={cartItem.productQuantity}
              handleQuantity={handleQuantity}
            />
            <span>
              {numberFormat(quantity * cartItem.product.newPrice)}{" "}
              <FontAwesomeIcon icon="lira-sign" />
            </span>
          </div>
          <button
            className="remove-cart-item"
            onClick={(e) => deleteCartItem(e, cartItem.id)}
          >
            Sil
          </button>
        </div>
      </li>
    </>
  );
};

const mapState = (state) => ({
  cartId: state.cartReducer.cartId,
});

const mapDispatch = (dispatch) => ({
  removeFromCart: bindActionCreators(removeFromCart, dispatch),
  collectCartItemPrice: bindActionCreators(collectCartItemPrice, dispatch),
});

export default connect(mapState, mapDispatch)(CartItem);
