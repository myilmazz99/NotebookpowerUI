import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "./Search";
import { toggleModal } from "../Utilities/Modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logout } from "../../Redux/Actions/userActions";

const UserActionGroup = ({
  cartItems,
  userState: {
    authenticated,
    userCredentials: { role },
  },
  logout,
}) => {
  let userWindow = useRef(null);
  const form = useRef(null);

  const toggleUserWindow = () => {
    userWindow.current.classList.toggle("open");
  };

  const toggleSearch = () => {
    form.current.classList.toggle("form-visible");
  };

  const expandSearch = (e) => {
    e.preventDefault();
    toggleSearch();
  };

  return (
    <>
      <ul className="nav-user-actions">
        {authenticated ? (
          <li className="user-action">
            <Link to="/cart">
              <span className="cart-icon-wrapper">
                <FontAwesomeIcon icon="shopping-cart" />
                <small className="cart-item-count">
                  {cartItems ? cartItems.length || 0 : 0}
                </small>
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
              {role.includes("admin") ? (
                <li onClick={toggleUserWindow}>
                  <Link to="/admin">Yönetici Paneli</Link>
                </li>
              ) : null}
              <li
                onClick={() => {
                  logout();
                  toggleUserWindow();
                }}
              >
                <Link to="/">Çıkış Yap</Link>
              </li>
            </ul>
          ) : null}
        </li>
        <li className="user-action">
          <button className="search-btn" onClick={(e) => expandSearch(e)}>
            <FontAwesomeIcon icon="search" />
          </button>
        </li>
      </ul>
      <Search refs={form} closeSearchBar={toggleSearch} />
    </>
  );
};

const mapState = (state) => ({
  cartItems: state.cartReducer.cartItems,
  userState: state.userReducer,
});

const mapDispatch = (dispatch) => ({
  logout: bindActionCreators(logout, dispatch),
});

export default connect(mapState, mapDispatch)(UserActionGroup);
