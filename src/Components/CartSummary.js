import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const CartSummary = ({ buttonText, itemCount, prices }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (prices && prices.length !== 0)
      setTotalPrice(
        prices
          .map((i) => i.totalPrice)
          .reduce((i, j) => (Number(i) + Number(j)).toFixed(3))
      );

    if (itemCount === 0) setTotalPrice(0);
  }, [prices]);

  return (
    <ul className="cart-summary">
      <h2>Sipariş Özeti</h2>
      <li className="cart-summary-item">
        <span>Ürün Adedi</span>
        <span>{itemCount}</span>
      </li>
      <li className="cart-summary-item">
        <span>Ödenecek Tutar</span>
        <span>
          {totalPrice} <FontAwesomeIcon icon="lira-sign" />
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
          {totalPrice} <FontAwesomeIcon icon="lira-sign" />
        </span>
      </li>
      <li>
        <Link to="/order" className="checkout-btn">
          {buttonText}
        </Link>
      </li>
    </ul>
  );
};

const mapState = (state) => ({
  itemCount: state.cartReducer.cartItems.length,
  prices: state.cartReducer.prices,
});

export default connect(mapState)(CartSummary);
