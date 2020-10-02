import React from "react";
import Code404 from "../img/Code404.svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const section = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const img = {
    display: "block",
    width: "50%",
    maxWidth: "500px",
  };

  const p = {
    marginTop: "2rem",
    color: "#e5e5e5",
  };

  const a = {
    color: "yellow",
  };

  return (
    <section style={section}>
      <Helmet>
        <title>Notebook Power - Sayfa bulunamadı.</title>
      </Helmet>
      <img style={img} src={Code404} alt="" />
      <p style={p}>
        Aradığınız sayfayı bulamadık.{" "}
        <Link style={a} to="/">
          Buradan anasayfa'ya dönerek,
        </Link>{" "}
        mevcut ürünlerimizi inceleyebilirsiniz.
      </p>
    </section>
  );
};

export default NotFound;
