import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contact from "./Contact";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { toggleModal } from "./Utilities/Modal";
import Search from "./Search";
import AccountModal from "./AccountModal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCategories } from "../Redux/Actions/categoryActions";

const Nav = ({ categories, getCategories }) => {
  const sideNav = useRef(null);

  useEffect(() => {
    if (categories.length === 0) getCategories();
  }, []);

  const toggleSideNav = () => {
    sideNav.current.classList.toggle("expanded");
  };

  return (
    <header>
      <nav className="top-bar">
        <button className="nav-expand-btn" onClick={toggleSideNav}>
          <div className="line first-line"></div>
          <div className="line second-line"></div>
          <div className="line third-line"></div>
        </button>
        <Link to="/" className="home-btn">
          <FontAwesomeIcon icon="home" />
        </Link>

        <ul className="nav-links">
          {categories &&
            categories.map((i) => (
              <li key={i.id} className="nav-link">
                <Link to={`/products?category=${i.categoryName}`}>
                  {i.categoryName}
                </Link>
              </li>
            ))}
        </ul>
        <img src={logo} alt="notebookpower brand logo" className="nav-brand" />
        <ul className="nav-user-actions">
          <li className="user-action">
            <Link to="/cart/1">
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
          </li>
          <li className="user-action">
            <FontAwesomeIcon
              icon="user-circle"
              onClick={() => toggleModal("account-modal")}
            />
            <ul className="user-window">
              <li>
                <Link to="/user/1/favorites">Favorilerim</Link>
              </li>
              <li>
                <Link to="/user/1/orders">Siparişlerim</Link>
              </li>
            </ul>
          </li>
          <li className="user-action">
            <Search />
          </li>
        </ul>
        <div className="search">
          <Search />
        </div>
      </nav>

      <nav ref={sideNav} className="nav-expand-panel">
        <button className="nav-shrink-btn" onClick={toggleSideNav}>
          <FontAwesomeIcon icon="times" />
        </button>
        <ul className="links">
          <li>
            <Link to="/" className="nav-link" onClick={toggleSideNav}>
              Ana Sayfa
              <FontAwesomeIcon icon="chevron-right" size="xs" />
            </Link>
          </li>
          {categories &&
            categories.map((i) => (
              <li key={i.id}>
                <Link
                  to={`/products?category=${i.categoryName}`}
                  className="nav-link"
                  onClick={toggleSideNav}
                >
                  {i.categoryName}
                  <FontAwesomeIcon icon="chevron-right" size="xs" />
                </Link>
              </li>
            ))}
          <li>
            <Link to="/products" className="nav-link" onClick={toggleSideNav}>
              Tüm Ürünler
              <FontAwesomeIcon icon="chevron-right" size="xs" />
            </Link>
          </li>
        </ul>

        <ul className="account">
          <li className="account-link">
            <Link to="/cart/1" onClick={toggleSideNav}>
              <FontAwesomeIcon icon="shopping-cart" /> Sepetim
            </Link>
          </li>
          <li className="account-link">
            <span
              onClick={() => {
                toggleSideNav();
                toggleModal("account-modal");
              }}
            >
              <FontAwesomeIcon icon="user-circle" /> Giriş Yap / Üye Ol
            </span>
          </li>
          <li className="account-link">
            <Link to="/user/1/favorites" onClick={toggleSideNav}>
              <FontAwesomeIcon icon="heart" /> Favorilerim
            </Link>
          </li>
          <li className="account-link">
            <Link to="/user/1/orders" onClick={toggleSideNav}>
              <FontAwesomeIcon icon="dollar-sign" /> Siparişlerim
            </Link>
          </li>
        </ul>
        <hr />
        <Contact />
      </nav>

      <AccountModal />
    </header>
  );
};

const mapState = (state) => ({
  categories: state.categoryReducer.categories,
});

const mapDispatch = (dispatch) => ({
  getCategories: bindActionCreators(getCategories, dispatch),
});

export default connect(mapState, mapDispatch)(Nav);
