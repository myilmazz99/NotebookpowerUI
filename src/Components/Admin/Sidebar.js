import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebar = useRef();
  const toggleSidebar = () => sidebar.current.classList.toggle("open");

  const handleOuterClick = (e) => {
    if (
      !e.target.closest(".sidebar") &&
      sidebar.current.className.includes("open")
    ) {
      sidebar.current.classList.remove("open");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOuterClick);

    return () => document.removeEventListener("click", handleOuterClick);
  }, []);

  return (
    <nav className="sidebar" ref={sidebar}>
      <div className="nav-header">
        <div className="d-flex p-2 j-end">
          <div onClick={toggleSidebar} className="sidebar-toggler">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <h4>YÖNETİCİ PANELİ</h4>
        <p className="user">Admin</p>
      </div>
      <div className="nav-body">
        <div className="list-header">MENU</div>
        <ul>
          <li>
            <Link to="/">Anasayfa</Link>
          </li>
          <li>
            <Link to="/admin/products">Ürünler</Link>
          </li>
          <li>
            <Link to="/admin/orders">Siparişler</Link>
          </li>
          <li>
            <Link to="/admin/emaillist">Email Listesi</Link>
          </li>
          <li>
            <Link to="/admin/feedbacks">Müşteri Mesajları</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
