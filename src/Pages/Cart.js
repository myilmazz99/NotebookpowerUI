import React from "react";
import CustomNumberInput from "../Components/CustomNumberInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BestSelling from "../Components/BestSelling";
import { Link } from "react-router-dom";
import CartSummary from "../Components/CartSummary";

const Cart = () => {
  return (
    <main id="cart">
      <section className="cart-wrapper">
        <ul className="cart-list">
          <h1>Sepetim</h1>
          <li className="cart-item">
            <div className="cart-item-img">
              <img
                src="https://productimages.hepsiburada.net/s/36/80/10512087220274.jpg"
                alt=""
              />
            </div>
            <div className="cart-item-details">
              <h3 className="product-name">
                OKI C332DN Dublex + Network A4 Renkli Laser Yazıcı
              </h3>
              <div className="product-prices">
                <CustomNumberInput />
                <span>
                  899 <FontAwesomeIcon icon="lira-sign" />
                </span>
              </div>
              <button className="remove-cart-item">Sil</button>
            </div>
          </li>
          <li className="cart-item">
            <div className="cart-item-img">
              <img
                src="https://productimages.hepsiburada.net/s/36/80/10512087220274.jpg"
                alt=""
              />
            </div>
            <div className="cart-item-details">
              <h3 className="product-name">
                OKI C332DN Dublex + Network A4 Renkli Laser Yazıcı
              </h3>
              <div className="product-prices">
                <CustomNumberInput />
                <span>
                  899 <FontAwesomeIcon icon="lira-sign" />
                </span>
              </div>
              <button className="remove-cart-item">Sil</button>
            </div>
          </li>
          <li className="cart-item">
            <div className="cart-item-img">
              <img
                src="https://productimages.hepsiburada.net/s/36/80/10512087220274.jpg"
                alt=""
              />
            </div>
            <div className="cart-item-details">
              <h3 className="product-name">
                OKI C332DN Dublex + Network A4 Renkli Laser Yazıcı
              </h3>
              <div className="product-prices">
                <CustomNumberInput />
                <span>
                  899 <FontAwesomeIcon icon="lira-sign" />
                </span>
              </div>
              <button className="remove-cart-item">Sil</button>
            </div>
          </li>
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

export default Cart;
