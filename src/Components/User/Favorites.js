import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFavorites } from "../../Redux/Actions/userActions";

const Favorites = ({
  getFavorites,
  userState: { favorites, userCredentials },
}) => {
  useEffect(() => {
    if (favorites.length === 0 && userCredentials.userId)
      getFavorites(userCredentials.userId);
  }, [userCredentials.userId]);
  return (
    <section className="fav-product-list">
      <h1>
        <FontAwesomeIcon icon="heart" /> Favorilerim
      </h1>
      <ul>
        {favorites.length !== 0 ? (
          favorites.map((i) => (
            <li className="list-item">
              <figure>
                <img src={i.productImage} alt="" />
              </figure>
              <div className="product-details">
                <Link to={`/product/${i.productId}`}>
                  <h2>{i.productName}</h2>
                  <div>
                    {i.productPrice} <FontAwesomeIcon icon="lira-sign" />
                  </div>
                </Link>
                <small>Favorilerden çıkar</small>
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
  userState: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getFavorites: bindActionCreators(getFavorites, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
