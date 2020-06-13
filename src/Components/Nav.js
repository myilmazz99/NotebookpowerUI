import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contact from "./Contact";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { toggleModal } from "./Utilities/Modal";
import Search from "./Search";
import AccountModal from "./AccountModal";

const Nav = () => {
  const sideNav = useRef(null);

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
          <li className="nav-link">
            <Link to="/products?category=gaming">Oyuncu</Link>
          </li>
          <li className="nav-link">
            <Link to="/products?category=casual">İş & Multimedya</Link>
          </li>
          <li className="nav-link">
            <Link to="/products?category=accessory">Aksesuar</Link>
          </li>
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
          <li>
            <Link
              to="/products?category=gaming"
              className="nav-link"
              onClick={toggleSideNav}
            >
              Gaming Notebook
              <FontAwesomeIcon icon="chevron-right" size="xs" />
            </Link>
          </li>
          <li>
            <Link
              to="/products?category=casual"
              className="nav-link"
              onClick={toggleSideNav}
            >
              Casual Notebook
              <FontAwesomeIcon icon="chevron-right" size="xs" />
            </Link>
          </li>
          <li>
            <Link
              to="/products?category=accessory"
              className="nav-link"
              onClick={toggleSideNav}
            >
              Notebook Aksesuar
              <FontAwesomeIcon icon="chevron-right" size="xs" />
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link" onClick={toggleSideNav}>
              Tüm Ürünlerimiz
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
            <Link to="/account/favorites" onClick={toggleSideNav}>
              <FontAwesomeIcon icon="heart" /> Favorilerim
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

export default Nav;
