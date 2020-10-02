import React, { useEffect } from "react";
import Slider from "../Components/Slider";
import CategoryCards from "../Components/CategoryCards";
import BestSelling from "../Components/Product/BestSelling";
import DailyDeals from "../Components/Product/DailyDeals";
import Mailing from "../Components/Mailing";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFavorites } from "../Redux/Actions/userActions";

const Home = ({ getFavorites, favorites, userId }) => {
  useEffect(() => {
    if (favorites && userId && favorites.length === 0) {
      getFavorites(userId);
    }
  }, [userId]);

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

const mapState = (state) => ({
  favorites: state.userReducer.favorites,
  userId: state.userReducer.userCredentials.userId,
});

const mapDispatch = (dispatch) => ({
  getFavorites: bindActionCreators(getFavorites, dispatch),
});

export default connect(mapState, mapDispatch)(Home);
