import React, { useEffect } from "react";
import Tns from "../Utilities/Tns";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBestSeller } from "../../Redux/Actions/productActions";

const BestSelling = ({ bestseller, getBestSeller }) => {
  let container = "best-selling-slider";

  useEffect(() => {
    if (bestseller && bestseller.length === 0) getBestSeller();
  }, []);

  return (
    <div className="best-selling-products">
      <h2 className="product-list-header">Çok satanlar</h2>
      <Tns container={container} products={bestseller} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  bestseller: state.productReducer.bestseller,
});

const mapDispatchToProps = (dispatch) => ({
  getBestSeller: bindActionCreators(getBestSeller, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BestSelling);
