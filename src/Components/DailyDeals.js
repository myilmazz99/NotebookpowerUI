import React from "react";
import Tns from "./Tns";

const DailyDeals = () => {
  let container = "daily-deal-slider";

  return (
    <>
      <h2 className="product-list-header">Günün Fırsatları</h2>
      <Tns container={container} />
    </>
  );
};
export default DailyDeals;
