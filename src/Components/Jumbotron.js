import React from "react";
import img from "../img/gamingBg.png";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <img src={img} alt="" className="jumbotron-bg" />
      <div className="breadcrumbs">Ana sayfa / Gaming Notebooks</div>
      <h1 className="category-name">Oyun Bilgisayarları</h1>
    </div>
  );
};

export default Jumbotron;
