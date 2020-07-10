import React from "react";
import productImg from "../img/productimg.jpg";
import { Link } from "react-router-dom";
import ProductRating from "./ProductRating";
import AddToFav from "./Utilities/AddToFav";
import { connect } from "react-redux";
import AddToCart from "./AddToCart";
import numberFormat from "./Tools/numberFormat";
import ProductPreviewSkeleton from "./Skeletons/ProductPreviewSkeleton";

const ProductPreviewList = ({ container, products, favorites, userId }) => {
  return (
    <div className={`product-preview-list ${container || ""}`}>
      {products && products.length !== 0 ? (
        products.map((data) => (
          <div key={data.id} className="product-preview-wrapper">
            <div className="product-preview">
              <img
                className="preview-image"
                src={productImg}
                alt={data.productName}
              />
              <Link to={"/product/" + data.id}>
                <div className="preview-product-details">
                  <h3 className="preview-product-name">
                    {data.productName.length > 32
                      ? data.productName.slice(0, 32) + "..."
                      : data.productName}
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
                <AddToFav
                  productId={data.id}
                  favorites={favorites}
                  userId={userId}
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          <ProductPreviewSkeleton />
          <ProductPreviewSkeleton />
          <ProductPreviewSkeleton />
          <ProductPreviewSkeleton />
          <ProductPreviewSkeleton />
          <ProductPreviewSkeleton />
        </>
      )}
    </div>
  );
};

const mapState = (state) => ({
  userId: state.userReducer.userCredentials.userId,
  favorites: state.userReducer.favorites,
});

export default connect(mapState)(ProductPreviewList);
