import React from "react";
import Tns from "./Tns";

const DailyDeals = () => {
  let container = "daily-deal-slider";

  return (
    <div className="daily-deal-products">
      <h2 className="product-list-header">Günün Fırsatları</h2>
      <Tns container={container} />
    </div>
  );
};
export default DailyDeals;
