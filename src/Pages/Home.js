import React from "react";
import CategoryCards from "../Components/CategoryCards";
import BestSelling from "../Components/Product/BestSelling";
import DailyDeals from "../Components/Product/DailyDeals";
import Mailing from "../Components/Mailing";
import Banner from "../Components/Banner";

const Home = () => {
  return (
    <main id="home">
      <Banner />
      <CategoryCards />
      <BestSelling />
      <Mailing />
      <DailyDeals />
    </main>
  );
};

export default Home;
