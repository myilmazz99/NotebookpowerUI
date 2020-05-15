import React from "react";
import Carousel from "react-bootstrap/Carousel";
import promo1 from "../img/promo1.png";
import promo2 from "../img/promo2.png";
import promo3 from "../img/promo3.png";

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={promo1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={promo2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={promo3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
