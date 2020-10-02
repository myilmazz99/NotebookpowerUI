import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import AccountModal from "../User/AccountModal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCategories } from "../../Redux/Actions/categoryActions";
import UserActionGroup from "./UserActionGroup";
import Sidenav from "./Sidenav";

const Nav = ({ categories, getCategories, authenticated }) => {
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
        <UserActionGroup authenticated={authenticated} />
      </nav>

      <Sidenav
        refe={sideNav}
        categories={categories}
        toggleSideNav={toggleSideNav}
        authenticated={authenticated}
      />

      <AccountModal />
    </header>
  );
};

const mapState = (state) => ({
  categories: state.categoryReducer.categories,
  authenticated: state.userReducer.authenticated,
});

const mapDispatch = (dispatch) => ({
  getCategories: bindActionCreators(getCategories, dispatch),
});

export default connect(mapState, mapDispatch)(Nav);
