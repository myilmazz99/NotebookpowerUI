import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "../Search";
import { toggleModal } from "../Utilities/Modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logout } from "../../Redux/Actions/userActions";

const UserActionGroup = ({ cartItemLength, authenticated, logout }) => {
  let userWindow = useRef(null);

  const toggleUserWindow = () => {
    userWindow.current.classList.toggle("open");
  };

  return (
    <ul className="nav-user-actions">
      {authenticated ? (
        <li className="user-action">
          <Link to="/cart">
            <span className="cart-icon-wrapper">
              <FontAwesomeIcon icon="shopping-cart" />
              <small className="cart-item-count">{cartItemLength}</small>
            </span>
          </Link>
        </li>
      ) : null}

      <li className="user-action">
        <FontAwesomeIcon
          icon="user-circle"
          onClick={() =>
            authenticated ? toggleUserWindow() : toggleModal("account-modal")
          }
        />
        {authenticated ? (
          <ul className="user-window" ref={userWindow}>
            <li onClick={toggleUserWindow}>
              <Link to="/user/favorites">Favorilerim</Link>
            </li>
            <li onClick={toggleUserWindow}>
              <Link to="/user/orders">Siparişlerim</Link>
            </li>
            <li onClick={logout}>
              <a href="/">Çıkış Yap</a>
            </li>
          </ul>
        ) : null}
      </li>
      <li className="user-action">
        <Search />
      </li>
    </ul>
  );
};

const mapState = (state) => ({
  cartItemLength: state.cartReducer.cartItems.length,
});

const mapDispatch = (dispatch) => ({
  logout: bindActionCreators(logout, dispatch),
});

export default connect(mapState, mapDispatch)(UserActionGroup);
