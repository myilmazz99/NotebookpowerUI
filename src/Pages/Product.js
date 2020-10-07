import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import payment from "../img/safe-payment.png";
import cargo from "../img/free-cargo.png";
import AddToCart from "../Components/Product/AddToCart";
import Tabs from "../Components/Utilities/Tabs";
import SimiliarProducts from "../Components/Product/SimiliarProducts";
import ProductRating from "../Components/Product/ProductRating";
import SpecificationList from "../Components/Product/SpecificationList";
import AddToFav from "../Components/Utilities/AddToFav";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProduct } from "../Redux/Actions/productActions";
import { useHistory, useParams } from "react-router-dom";
import Comments from "../Components/Product/Comments";
import numberFormat from "../Components/Tools/numberFormat";
import ProductPageSkeleton from "../Components/Skeletons/ProductPageSkeleton";
import Tns from "../Components/Utilities/Tns";

const Product = ({ products, getProduct, authenticated }) => {
  const { productId } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState({});

  useEffect(() => {
    let product = products.find((i) => Number(i.id) === Number(productId));
    if (!product) {
      getProduct(productId, history);
    }

    setProduct(product);
  }, [products, productId]);

  return (
    <main id="product-page">
      {product && Object.keys(product).length > 0 ? (
        <>
          <div className="product-slider">
            <div className="product-slider-container">
              <Tns
                container="product-slider-wrapper"
                isCarousel={true}
                products={
                  <>
                    <div className="product-slider-wrapper">
                      {product.productImages.map((i, j) => (
                        <div key={j} className="product-slider-img-container">
                          <img
                            src={process.env.REACT_APP_API_URL + i.imageUrl}
                            alt={product.productName}
                          />
                        </div>
                      ))}
                    </div>
                    <ul className="thumbnails" id="customize-thumbnails">
                      {product.productImages.map((i, j) => (
                        <li key={j}>
                          <img
                            src={process.env.REACT_APP_API_URL + i.imageUrl}
                            alt={product.productName}
                          />
                        </li>
                      ))}
                    </ul>
                  </>
                }
              />
            </div>
          </div>
          <div className="product-details">
            <h1>
              <span>{product.productName}</span>{" "}
              {authenticated ? <AddToFav productId={product.id} /> : null}
            </h1>
            {10 > product.stock ? (
              <div className="low-stock-number">Son {product.stock} ürün!</div>
            ) : (
              ""
            )}
            <div className="price-and-rating">
              <ProductRating comments={product.comments} />
              <div className="product-price">
                <span className="discount-amount">
                  <span>
                    {"%" +
                      Math.floor(
                        ((product.oldPrice - product.newPrice) * 100) /
                          product.oldPrice
                      )}
                  </span>
                  <span>indirim</span>
                </span>
                <div className="prices">
                  <div className="old-price">
                    {numberFormat(product.oldPrice)}{" "}
                    <FontAwesomeIcon icon="lira-sign" />
                  </div>
                  <div className="new-price">
                    {numberFormat(product.newPrice)}{" "}
                    <FontAwesomeIcon icon="lira-sign" />
                  </div>
                </div>
              </div>
            </div>

            <AddToCart productId={product.id} />

            <div className="trust-imgs">
              <img src={cargo} alt="" />
              <img src={payment} alt="" />
            </div>
          </div>

          <Tabs
            tabName="product-tab"
            tabs={[
              {
                Açıklama: product.productDescription,
              },
              {
                Yorumlar: (
                  <Comments productId={productId} comments={product.comments} />
                ),
              },
            ]}
          />

          <SpecificationList specifications={product.specifications} />
        </>
      ) : (
        <ProductPageSkeleton />
      )}

      <SimiliarProducts />
    </main>
  );
};

const mapStateToProps = (state) => ({
  products: state.productReducer.products,
  authenticated: state.userReducer.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  getProduct: bindActionCreators(getProduct, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
