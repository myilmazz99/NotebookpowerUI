import React, { useEffect, useState } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import payment from "../img/safe-payment.png";
import cargo from "../img/free-cargo.png";
import AddToCart from "../Components/AddToCart";
import Tabs from "../Components/Tabs";
import SimiliarProducts from "../Components/SimiliarProducts";
import ProductRating from "../Components/ProductRating";
import SpecificationList from "../Components/SpecificationList";
import AddToFav from "../Components/Utilities/AddToFav";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProduct } from "../Redux/Actions/productActions";
import { useParams } from "react-router-dom";
import { getFavorites } from "../Redux/Actions/userActions";
import Comments from "../Components/Product/Comments";

const Product = ({ products, getProduct, userId, getFavorites, favorites }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    tns({
      container: ".product-slider-wrapper",
      items: 1,
      controlsText: ["<", ">"],
      navContainer: "#customize-thumbnails",
      navAsThumbnails: true,
    });
  }, []);

  useEffect(() => {
    if (!products.find((i) => Number(i.id) === Number(productId))) {
      getProduct(productId);
    }

    setProduct(products.find((i) => Number(i.id) === Number(productId)));
  }, [products]);

  useEffect(() => {
    if (favorites && userId && favorites.length === 0) {
      getFavorites(userId);
    }
  }, [userId]);

  return (
    <main id="product-page">
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
        <h1>
          <span>{product && product.productName}</span>{" "}
          <AddToFav
            productId={product && product.id}
            userId={userId && userId}
            favorites={favorites && favorites}
          />
        </h1>
        {product ? (
          10 > product.stock ? (
            <div className="low-stock-number">Son {product.stock} ürün!</div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        <div className="price-and-rating">
          <ProductRating />
          <div className="product-price">
            <span className="discount-amount">
              <span>
                {product &&
                  "%" +
                    Math.floor(
                      ((product.oldPrice - product.newPrice) * 100) /
                        product.oldPrice
                    )}
              </span>
              <span>indirim</span>
            </span>
            <div className="prices">
              <div className="old-price">
                {product && product.oldPrice}{" "}
                <FontAwesomeIcon icon="lira-sign" />
              </div>
              <div className="new-price">
                {product && product.newPrice}{" "}
                <FontAwesomeIcon icon="lira-sign" />
              </div>
            </div>
          </div>
        </div>

        <AddToCart productId={product && product.id} />

        <div className="trust-imgs">
          <img src={cargo} alt="" />
          <img src={payment} alt="" />
        </div>
      </div>

      <Tabs
        tabName="product-tab"
        tabs={[
          {
            Açıklama: product && product.productDescription,
          },
          {
            Yorumlar: (
              <Comments
                productId={productId}
                comments={product && product.comments}
              />
            ),
          },
        ]}
      />

      <SpecificationList specifications={product && product.specifications} />

      <SimiliarProducts />
    </main>
  );
};

const mapStateToProps = (state) => ({
  products: state.productReducer.products,
  userId: state.userReducer.userCredentials.userId,
  favorites: state.userReducer.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  getProduct: bindActionCreators(getProduct, dispatch),
  getFavorites: bindActionCreators(getFavorites, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
