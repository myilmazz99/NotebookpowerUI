import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BestSelling from "../Components/BestSelling";
import { Link } from "react-router-dom";
import CartSummary from "../Components/CartSummary";
import CartItem from "../Components/Cart/CartItem";
import { connect } from "react-redux";

const Cart = ({ cartItems }) => {
  return (
    <main id="cart">
      <section className="cart-wrapper">
        <ul className="cart-list">
          <h1>Sepetim</h1>

          {cartItems.length === 0 ? (
            <li>Henüz sepetinize ürün eklemediniz.</li>
          ) : (
            cartItems.map((i) => <CartItem key={i.id} cartItem={i} />)
          )}

          <li>
            <Link to="/products">
              <FontAwesomeIcon icon="chevron-left" /> Alışverişe devam et
            </Link>
          </li>
        </ul>

        <CartSummary buttonText="Ödemeye Geç" />
      </section>

      <BestSelling />
    </main>
  );
};

const mapState = (state) => ({
  cartItems: state.cartReducer.cartItems,
});

export default connect(mapState)(Cart);
