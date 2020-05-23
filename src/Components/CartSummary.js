import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CartSummary = ({ buttonText, action }) => {
  return (
    <ul className="cart-summary">
      <h2>Sipariş Özeti</h2>
      <li className="cart-summary-item">
        <span>Ürün Adedi</span>
        <span>3</span>
      </li>
      <li className="cart-summary-item">
        <span>Ödenecek Tutar</span>
        <span>
          2499 <FontAwesomeIcon icon="lira-sign" />
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
          2499 <FontAwesomeIcon icon="lira-sign" />
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

export default CartSummary;
