import React from "react";
import Slider from "../Components/Slider";
import CategoryCards from "../Components/CategoryCards";
import BestSelling from "../Components/Product/BestSelling";
import DailyDeals from "../Components/Product/DailyDeals";
import Mailing from "../Components/Mailing";

const Home = () => {
  return (
    <main id="home">
      <Slider />
      <CategoryCards />
      <BestSelling />
      <Mailing />
      <DailyDeals />
    </main>
  );
};

export default Home;
