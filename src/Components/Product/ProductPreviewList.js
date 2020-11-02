import React from "react";
import { Link } from "react-router-dom";
import ProductRating from "./ProductRating";
import AddToFav from "../Utilities/AddToFav";
import { connect } from "react-redux";
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
              <Link to={"/product/" + data.id}>
                <figure className="preview-image">
                  <img
                    src={
                      process.env.REACT_APP_API_URL +
                      data.productImages[0].imageUrl
                    }
                    alt={data.productName}
                  />
                  <div></div>
                </figure>
                <h3 className="preview-product-name">
                  {shortenNames(data.productName)}
                </h3>
              </Link>
              <div className="preview-product-details">
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
