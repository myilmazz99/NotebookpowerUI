import React from "react";
import { Link } from "react-router-dom";
import ProductRating from "./ProductRating";
import AddToFav from "../Utilities/AddToFav";
import { connect } from "react-redux";
import AddToCart from "./AddToCart";
import numberFormat from "../Tools/numberFormat";
import shortenNames from "../Utilities/shortenNames";

const ProductPreviewList = ({
  container,
  products,
  userState: {
    authenticated,
    userCredentials: { userId },
  },
}) => {
  return (
    <div className={`product-preview-list ${container || ""}`}>
      {products && products.length !== 0 ? (
        products.map((data) => (
          <div key={data.id} className="product-preview-wrapper">
            <div className="product-preview">
              <img
                className="preview-image"
                src={
                  process.env.REACT_APP_API_URL + data.productImages[0].imageUrl
                }
                alt={data.productName}
              />
              <Link to={"/product/" + data.id}>
                <div className="preview-product-details">
                  <h3 className="preview-product-name">
                    {shortenNames(data.productName)}
                  </h3>
                  <ProductRating comments={data.comments} />
                  <div className="preview-product-price">
                    <span className="old-price">
                      {numberFormat(data.oldPrice)}
                    </span>
                    <span className="new-price">
                      {numberFormat(data.newPrice)}
                    </span>
                  </div>
                </div>
              </Link>
              <div className="product-menu">
                <AddToCart productId={data.id} userId={userId} />
              </div>
              <div className="add-to-fav">
                {authenticated ? <AddToFav productId={data.id} /> : null}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="product-not-found">
          Aradığınız kriterlerde ürün bulunamadı.
        </p>
      )}
    </div>
  );
};

const mapState = (state) => ({
  userState: state.userReducer,
});

export default connect(mapState)(ProductPreviewList);