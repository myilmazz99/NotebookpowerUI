import React from "react";
import Slider from "../Components/Slider";
import CategoryCards from "../Components/CategoryCards";
import BestSelling from "../Components/BestSelling";
import DailyDeals from "../Components/DailyDeals";
import Mailing from "../Components/Mailing";

const Home = () => {
  return (
    <main>
      <Slider />
      <CategoryCards />
      <BestSelling />
      <Mailing />
      <DailyDeals />
    </main>
  );
};

export default Home;
