import React, { useState, useEffect } from "react";
import gamingBg from "../img/gamingBg.png";
import casualBg from "../img/casualBg.jpg";
import accessoryBg from "../img/accessoryBg.jpg";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const Jumbotron = (props) => {
  let category = queryString.parse(useLocation().search).category;
  const [img, setImg] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    switch (category) {
      case "gaming":
        setImg(gamingBg);
        setText("Oyun Dizüstüleri");
        break;
      case "casual":
        setImg(casualBg);
        setText("İş ve Multimedya Dizüstüleri");
        break;
      case "accessory":
        setImg(accessoryBg);
        setText("Dizüstü Ekipmanları");
        break;

      default:
        break;
    }
  }, [category]);

  const bg = {
    backgroundImage: `url(${img})`,
  };

  return (
    <section className="jumbotron" style={bg}>
      <nav className="breadcrumbs">Ana sayfa / {text}</nav>
      <h1 className="category-name">{text}</h1>
    </section>
  );
};

export default Jumbotron;
