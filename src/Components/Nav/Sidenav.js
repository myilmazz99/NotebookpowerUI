import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contact from "../Contact";
import { toggleModal } from "../Utilities/Modal";

const Sidenav = ({ refe, toggleSideNav, categories, authenticated }) => {
  return (
    <nav ref={refe} className="nav-expand-panel">
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
        {authenticated ? (
          <>
            <li className="account-link">
              <Link to="/cart" onClick={toggleSideNav}>
                <FontAwesomeIcon icon="shopping-cart" /> Sepetim
              </Link>
            </li>
            <li className="account-link">
              <Link to="/user/favorites" onClick={toggleSideNav}>
                <FontAwesomeIcon icon="heart" /> Favorilerim
              </Link>
            </li>
            <li className="account-link">
              <Link to="/user/orders" onClick={toggleSideNav}>
                <FontAwesomeIcon icon="dollar-sign" /> Siparişlerim
              </Link>
            </li>
          </>
        ) : (
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
        )}
      </ul>
      <hr />
      <Contact />
    </nav>
  );
};

export default Sidenav;
