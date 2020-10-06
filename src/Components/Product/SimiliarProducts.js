import React, { useEffect, useState } from "react";
import Tns from "../Utilities/Tns";
import { connect } from "react-redux";
import { getSimiliar } from "../../Redux/Actions/productActions";
import { bindActionCreators } from "redux";
import LoadingSpinner from "../Utilities/LoadingSpinner";

const SimiliarProducts = ({ similiarProducts, getSimiliar }) => {
  const [loading, setLoading] = useState(true);
  let container = "similiar-products-slider";

  useEffect(() => {
    if (similiarProducts && similiarProducts.length === 0) {
      getSimiliar(1);
    } else {
      setLoading(false);
    }
  }, [similiarProducts.length]);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="similiar-products">
          <h2 className="product-list-header">Benzer Ürünler</h2>
          <Tns container={container} products={similiarProducts} />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  similiarProducts: state.productReducer.similiar,
});

const mapDispatchToProps = (dispatch) => ({
  getSimiliar: bindActionCreators(getSimiliar, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SimiliarProducts);
