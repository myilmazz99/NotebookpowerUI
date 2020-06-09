import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contact from "./Contact";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { Modal, toggleModal } from "./Modal";
import Tabs from "./Tabs";
import Search from "./Search";

const Nav = () => {
  const expandNav = () => {
    document.querySelector(".nav-expand-panel").classList.add("expanded");
  };

  const shrinkNav = () => {
    document.querySelector(".nav-expand-panel").classList.remove("expanded");
  };

  const renderSignUp = () => {
    return (
      <form className="signUp-form">
        <h4>Üye Ol</h4>
        <input type="text" placeholder="Adınız ve Soyadınız" />
        <input type="text" placeholder="E Mailiniz" />
        <input type="password" placeholder="Şifre belirleyiniz" />
        <input type="password" placeholder="Şifre tekrar" />
        <input type="submit" value="Kayıt Ol" />
      </form>
    );
  };

  const renderSignIn = () => {
    return (
      <form className="signIn-form">
        <h4>Giriş Yap</h4>
        <input type="text" placeholder="E Mailiniz" />
        <input type="password" placeholder="Şifreniz" />
        <input type="submit" value="Giriş Yap" />
      </form>
    );
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

      <nav className="nav-expand-panel">
        <button className="nav-shrink-btn" onClick={() => shrinkNav()}>
          <FontAwesomeIcon icon="times" />
        </button>
        <ul className="links">
          <li>
            <Link to="/" className="nav-link" onClick={() => shrinkNav()}>
              Ana Sayfa
              <FontAwesomeIcon icon="chevron-right" size="xs" />
            </Link>
          </li>
          <li>
            <Link
              to="/products?category=gaming"
              className="nav-link"
              onClick={() => shrinkNav()}
            >
              Gaming Notebook
              <FontAwesomeIcon icon="chevron-right" size="xs" />
            </Link>
          </li>
          <li>
            <Link
              to="/products?category=casual"
              className="nav-link"
              onClick={() => shrinkNav()}
            >
              Casual Notebook
              <FontAwesomeIcon icon="chevron-right" size="xs" />
            </Link>
          </li>
          <li>
            <Link
              to="/products?category=accessory"
              className="nav-link"
              onClick={() => shrinkNav()}
            >
              Notebook Aksesuar
              <FontAwesomeIcon icon="chevron-right" size="xs" />
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="nav-link"
              onClick={() => shrinkNav()}
            >
              Tüm Ürünlerimiz
              <FontAwesomeIcon icon="chevron-right" size="xs" />
            </Link>
          </li>
        </ul>

        <ul className="account">
          <li className="account-link">
            <Link to="/cart/1" onClick={() => shrinkNav()}>
              <FontAwesomeIcon icon="shopping-cart" /> Sepetim
            </Link>
          </li>
          <li className="account-link">
            <span
              onClick={() => {
                shrinkNav();
                toggleModal("account-modal");
              }}
            >
              <FontAwesomeIcon icon="user-circle" /> Giriş Yap / Üye Ol
            </span>
          </li>
          <li className="account-link">
            <Link to="/account/favorites" onClick={() => shrinkNav()}>
              <FontAwesomeIcon icon="heart" /> Favorilerim
            </Link>
          </li>
        </ul>
        <hr />
        <Contact />
      </nav>

      <Modal
        onClose={toggleModal}
        modalName="account-modal"
        data={
          <Tabs
            tabName="account-tab"
            tabs={[
              { "Üye Ol": renderSignUp() },
              { "Giriş Yap": renderSignIn() },
            ]}
          />
        }
      />
    </header>
  );
};

export default Nav;
