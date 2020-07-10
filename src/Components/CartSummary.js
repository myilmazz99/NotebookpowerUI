import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Input from "./Utilities/Input";
import numberFormat from "./Tools/numberFormat";

const CartSummary = ({ buttonText, cartItems, getTotalPrice }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cartItems && cartItems.length !== 0)
      setTotalPrice(
        cartItems
          .map((i) => i.productQuantity * i.product.newPrice)
          .reduce((i, j) => i + j)
      );

    if (cartItems.length === 0) setTotalPrice(0);
  }, [cartItems]);

  useEffect(() => {
    getTotalPrice && getTotalPrice(totalPrice);
  }, [totalPrice]);

  return (
    <ul className="cart-summary">
      <h2>Sipariş Özeti</h2>
      <li className="cart-summary-item">
        <span>Ürün Adedi</span>
        <span>{cartItems.length}</span>
      </li>
      <li className="cart-summary-item">
        <span>Ödenecek Tutar</span>
        <span>
          {numberFormat(totalPrice)} <FontAwesomeIcon icon="lira-sign" />
        </span>
      </li>
      <li className="cart-summary-item">
        <span>Kargo Tutarı</span>
        <span>
          0 <FontAwesomeIcon icon="lira-sign" />
        </span>
      </li>
      <hr />
      <li className="cart-summary-item">
        <span>Toplam</span>
        <span>
          {numberFormat(totalPrice)} <FontAwesomeIcon icon="lira-sign" />
        </span>
      </li>
      <li>
        {buttonText === "Ödeme Yap" ? (
          <Input
            type="submit"
            value={buttonText}
            onClick={() => getTotalPrice({ totalPrice })}
          />
        ) : (
          <Link to="/order" className="checkout-btn">
            {buttonText}
          </Link>
        )}
      </li>
    </ul>
  );
};

const mapState = (state) => ({
  cartItems: state.cartReducer.cartItems,
});

export default connect(mapState)(CartSummary);
