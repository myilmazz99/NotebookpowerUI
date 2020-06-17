import React, { useEffect } from "react";
import Tns from "./Tns";
import { connect } from "react-redux";
import { getDailyDeals } from "../Redux/Actions/productActions";
import { bindActionCreators } from "redux";

const DailyDeals = ({ dailydeals, getDailyDeals }) => {
  let container = "daily-deal-slider";

  useEffect(() => {
    if (dailydeals && dailydeals.length === 0) getDailyDeals();
  }, []);

  return (
    <div className="daily-deal-products">
      <h2 className="product-list-header">Günün Fırsatları</h2>
      <Tns container={container} products={dailydeals} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  dailydeals: state.productReducer.dailydeals,
});

const mapDispatchToProps = (dispatch) => ({
  getDailyDeals: bindActionCreators(getDailyDeals, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DailyDeals);
