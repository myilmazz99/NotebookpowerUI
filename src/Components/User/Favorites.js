import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeFromFavorites } from "../../Redux/Actions/userActions";
import shortenNames from "../Utilities/shortenNames";

const Favorites = ({ userId, favorites, remove }) => {
  const removeFromFav = (productId) => {
    remove(productId, userId);
  };

  return (
    <section className="fav-product-list">
      <h1>
        <FontAwesomeIcon icon="heart" /> Favorilerim
      </h1>
      <ul>
        {favorites && favorites.length !== 0 ? (
          favorites.map((i) => (
            <li className="list-item">
              <figure>
                <img
                  src={
                    process.env.REACT_APP_API_URL +
                    i.product.productImages[0].imageUrl
                  }
                  alt=""
                />
              </figure>
              <div className="product-details">
                <Link to={`/product/${i.productId}`}>
                  <h2>{shortenNames(i.product.productName)}</h2>
                  <div className="price">
                    {i.product.newPrice} <FontAwesomeIcon icon="lira-sign" />
                  </div>
                </Link>
                <small onClick={() => removeFromFav(i.productId)}>
                  Favorilerden çıkar
                </small>
              </div>
            </li>
          ))
        ) : (
          <li>
            Henüz favorilere aldığınız bir ürün yok.{" "}
            <Link to="/products" className="link-default">
              Buraya tıklayarak ürünlerimizi inceleyebilirsiniz.
            </Link>
          </li>
        )}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  userId: state.userReducer.userCredentials.userId,
  favorites: state.userReducer.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  remove: bindActionCreators(removeFromFavorites, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
