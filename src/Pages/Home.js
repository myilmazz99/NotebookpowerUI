import React from "react";
import Slider from "../Components/Slider";
import CategoryCards from "../Components/CategoryCards";
import BestSelling from "../Components/BestSelling";
import DailyDeals from "../Components/DailyDeals";
import Mailing from "../Components/Mailing";

const Home = () => {
  return (
    <>
      <Slider />
      <CategoryCards />
      <BestSelling />
      <Mailing />
      <DailyDeals />
    </>
  );
};

export default Home;
