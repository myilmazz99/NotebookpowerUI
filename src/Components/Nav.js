import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contact from "./Contact";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const expandNav = () => {
    document.querySelector(".nav-expand-panel").classList.add("expanded");
  };

  const shrinkNav = () => {
    document.querySelector(".nav-expand-panel").classList.remove("expanded");
  };

  return (
    <header>
      <nav className="top-bar">
        <button className="nav-expand-btn" onClick={() => expandNav()}>
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
            <FontAwesomeIcon icon="shopping-cart" />
          </li>
          <li className="user-action">
            <FontAwesomeIcon icon="user-circle" onClick={() => toggleModal()} />
            <Modal show={isModalOpen} onClose={toggleModal} />
          </li>
          <li className="user-action">
            <FontAwesomeIcon icon="search" />
          </li>
        </ul>
        <button className="search-btn">
          <FontAwesomeIcon icon="search" />
        </button>
      </nav>

      <nav className="nav-expand-panel">
        <button className="nav-shrink-btn" onClick={() => shrinkNav()}>
          <FontAwesomeIcon icon="times" />
        </button>
        <ul className="links">
          <li>
            <Link to="/" className="nav-link">
              Ana Sayfa
              <FontAwesomeIcon icon="chevron-right" size="xs" />
            </Link>
          </li>
          <li>
            <Link to="/products?category=gaming" className="nav-link">
              Gaming Notebook
              <FontAwesomeIcon icon="chevron-right" size="xs" />
            </Link>
          </li>
          <li>
            <Link to="/products?category=casual" className="nav-link">
              Casual Notebook
              <FontAwesomeIcon icon="chevron-right" size="xs" />
            </Link>
          </li>
          <li>
            <Link to="/products?category=accessory" className="nav-link">
              Notebook Aksesuar
              <FontAwesomeIcon icon="chevron-right" size="xs" />
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              Tüm Ürünlerimiz
              <FontAwesomeIcon icon="chevron-right" size="xs" />
            </Link>
          </li>
        </ul>

        <ul className="account">
          <li className="account-link">
            <Link to="/cart/1">
              <FontAwesomeIcon icon="shopping-cart" /> Sepetim
            </Link>
          </li>
          <li className="account-link">
            <Link to="/account">
              <FontAwesomeIcon icon="user-circle" /> Giriş Yap / Üye Ol
            </Link>
          </li>
          <li className="account-link">
            <Link to="/account/favorites">
              <FontAwesomeIcon icon="heart" /> Favorilerim
            </Link>
          </li>
        </ul>
        <hr />
        <Contact />
      </nav>
    </header>
  );
};

export default Nav;
