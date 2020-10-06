import React, { useEffect, useState } from "react";
import Tns from "../Utilities/Tns";
import { connect } from "react-redux";
import { getDailyDeals } from "../../Redux/Actions/productActions";
import { bindActionCreators } from "redux";
import LoadingSpinner from "../Utilities/LoadingSpinner";

const DailyDeals = ({ dailydeals, getDailyDeals }) => {
  const [loading, setLoading] = useState(true);
  let container = "daily-deal-slider";

  useEffect(() => {
    if (dailydeals.length === 0) {
      getDailyDeals();
    } else {
      setLoading(false);
    }
  }, [dailydeals.length]);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="daily-deal-products">
          <h2 className="product-list-header">Günün Fırsatları</h2>
          <Tns container={container} products={dailydeals} />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  dailydeals: state.productReducer.dailydeals,
});

const mapDispatchToProps = (dispatch) => ({
  getDailyDeals: bindActionCreators(getDailyDeals, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DailyDeals);
