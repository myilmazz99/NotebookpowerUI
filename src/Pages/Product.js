import React, { useEffect } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import payment from "../img/safe-payment.png";
import cargo from "../img/free-cargo.png";
import AddToCart from "../Components/AddToCart";
import Tabs from "../Components/Tabs";
import SimiliarProducts from "../Components/SimiliarProducts";

const Product = () => {
  useEffect(() => {
    tns({
      container: ".product-slider-wrapper",
      items: 1,
      controlsText: ["<", ">"],
      navContainer: "#customize-thumbnails",
      navAsThumbnails: true,
    });
  }, []);

  return (
    <main id="product-page">
      <section className="product-wrapper">
        <div className="product-slider">
          <div className="product-slider-container">
            <div className="product-slider-wrapper">
              <div className="product-slider-img-container">
                <img src="https://via.placeholder.com/500x500" alt="" />
              </div>
              <div className="product-slider-img-container">
                <img src="https://via.placeholder.com/500x500" alt="" />
              </div>
              <div className="product-slider-img-container">
                <img src="https://via.placeholder.com/500x500" alt="" />
              </div>
            </div>
            <ul className="thumbnails" id="customize-thumbnails">
              <li>
                <img src="https://via.placeholder.com/500x500" alt="" />
              </li>
              <li>
                <img src="https://via.placeholder.com/500x500" alt="" />
              </li>
              <li>
                <img src="https://via.placeholder.com/500x500" alt="" />
              </li>
            </ul>
          </div>
        </div>

        <div className="product-details">
          <div className="container">
            <h1>
              <span>Libero Headphones</span> <FontAwesomeIcon icon="heart" />{" "}
            </h1>
            {10 > 5 ? <div className="low-stock-number">Son 5 ürün!</div> : ""}
            <div className="price-and-rating">
              <div className="product-rating">
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star-half" />
                <span className="review-count">3 yorum</span>
              </div>
              <div className="product-price">
                <span className="discount-amount">
                  <span>{"%" + Math.floor(((499 - 399) * 100) / 499)}</span>
                  <span>{"indirim"}</span>
                </span>
                <div className="prices">
                  <div className="old-price">
                    499 <FontAwesomeIcon icon="lira-sign" />
                  </div>
                  <div className="new-price">
                    399 <FontAwesomeIcon icon="lira-sign" />
                  </div>
                </div>
              </div>
            </div>

            <AddToCart />

            <div className="trust-imgs">
              <img src={cargo} alt="" />
              <img src={payment} alt="" />
            </div>
          </div>
        </div>
      </section>

      <Tabs />

      <SimiliarProducts />
    </main>
  );
};

export default Product;
