import React, { useEffect, useState } from "react";
import Tns from "../Utilities/Tns";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBestSeller } from "../../Redux/Actions/productActions";
import LoadingSpinner from "../Utilities/LoadingSpinner";

const BestSelling = ({ bestseller, getBestSeller }) => {
  const [loading, setLoading] = useState(true);
  let container = "best-selling-slider";

  useEffect(() => {
    if (bestseller && bestseller.length === 0) {
      getBestSeller();
    } else {
      setLoading(false);
    }
  }, [bestseller.length]);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="best-selling-products">
          <h2 className="product-list-header">Çok satanlar</h2>
          <Tns container={container} products={bestseller} />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  bestseller: state.productReducer.bestseller,
});

const mapDispatchToProps = (dispatch) => ({
  getBestSeller: bindActionCreators(getBestSeller, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BestSelling);
