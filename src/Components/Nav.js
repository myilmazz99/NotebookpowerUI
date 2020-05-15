import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contact from "./Contact";
import logo from "../img/logo.png";

const Nav = () => {
  const expandNav = () => {
    document.querySelector(".nav-expand-panel").classList.add("expanded");
  };

  const shrinkNav = () => {
    document.querySelector(".nav-expand-panel").classList.remove("expanded");
  };

  return (
    <>
      <nav>
        <div className="container">
          <div className="nav-expand-btn" onClick={() => expandNav()}>
            <div className="line first-line"></div>
            <div className="line second-line"></div>
            <div className="line third-line"></div>
          </div>
          <img
            src={logo}
            alt="notebookpower brand logo"
            className="nav-brand"
          />
          <div>
            <FontAwesomeIcon icon="search" />
          </div>
        </div>
      </nav>

      <div className="nav-expand-panel">
        <div className="container">
          <div className="nav-shrink-btn" onClick={() => shrinkNav()}>
            <FontAwesomeIcon icon="times" />
          </div>
          <div className="links">
            <div className="nav-link">
              <span>Ana Sayfa</span>
              <FontAwesomeIcon icon="chevron-right" size="xs" />
            </div>
            <div className="nav-link">
              <span>Gaming Notebook</span>
              <FontAwesomeIcon icon="chevron-right" size="xs" />
            </div>
            <div className="nav-link">
              <span>Casual Notebook</span>
              <FontAwesomeIcon icon="chevron-right" size="xs" />
            </div>
            <div className="nav-link">
              <span>Notebook Aksesuar</span>
              <FontAwesomeIcon icon="chevron-right" size="xs" />
            </div>
            <div className="nav-link">
              <span>Tüm Ürünlerimiz</span>
              <FontAwesomeIcon icon="chevron-right" size="xs" />
            </div>
          </div>

          <div className="account">
            <div className="account-link">
              <FontAwesomeIcon icon="user-circle" />
              <a href="#">Giriş Yap / Üye Ol</a>
            </div>
            <div className="account-link">
              <FontAwesomeIcon icon="heart" />
              <a href="#">Favorilerim</a>
            </div>
          </div>
          <hr />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Nav;
