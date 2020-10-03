import React, { useEffect } from "react";
import Tns from "../Utilities/Tns";
import { connect } from "react-redux";
import { getSimiliar } from "../../Redux/Actions/productActions";
import { bindActionCreators } from "redux";

const SimiliarProducts = ({ similiarProducts, getSimiliar }) => {
  let container = "similiar-products-slider";

  useEffect(() => {
    if (similiarProducts && similiarProducts.length === 0) getSimiliar(1);
  }, []);

  return (
    <div className="similiar-products">
      <h2 className="product-list-header">Benzer Ürünler</h2>
      <Tns container={container} products={similiarProducts} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  similiarProducts: state.productReducer.similiar,
});

const mapDispatchToProps = (dispatch) => ({
  getSimiliar: bindActionCreators(getSimiliar, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SimiliarProducts);
