import React, { useState, useEffect } from "react";
import gamingBg from "../img/gamingBg.png";
import casualBg from "../img/casualBg.jpg";
import accessoryBg from "../img/accessoryBg.jpg";

const Jumbotron = ({ category, s }) => {
  const [img, setImg] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    switch (category) {
      case "Oyuncu":
        setImg(gamingBg);
        setText("Oyun Dizüstüleri");
        break;
      case "İş ve Multimedya":
        setImg(casualBg);
        setText("İş ve Multimedya Dizüstüleri");
        break;
      case "Aksesuar":
        setImg(accessoryBg);
        setText("Dizüstü Ekipmanları");
        break;

      default:
        setImg(accessoryBg);
        setText("Ürünler");
        break;
    }
  }, [category, s]);

  const bg = {
    backgroundImage: `url(${img})`,
  };

  return (
    <section className="jumbotron" style={bg}>
      <nav className="breadcrumbs">Ana sayfa / Ürünler</nav>
      <h1 className="category-name">{text}</h1>
    </section>
  );
};

export default Jumbotron;
