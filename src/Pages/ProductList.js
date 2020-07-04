import React, { useState, useEffect } from "react";
import ProductPreviewList from "../Components/ProductPreviewList";
import Jumbotron from "../Components/Jumbotron";
import FilterMenu from "../Components/FilterMenu";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProducts } from "../Redux/Actions/productActions";

const ProductList = ({ products, getProducts }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  let queries = useLocation().search;
  let parsedQueries = queryString.parse(queries);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
    getProductsByFilter();
  }, [products]);

  useEffect(() => {
    if (Object.keys(parsedQueries).length === 0) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products);
      getProductsByFilter();
    }
  }, [queries]);

  const getProductsByFilter = () => {
    parsedQueries.s &&
      setFilteredProducts(
        products.filter((i) =>
          i.productName.toLowerCase().includes(parsedQueries.s.toLowerCase())
        )
      );

    parsedQueries.brand &&
      setFilteredProducts((prev) =>
        prev.filter((i) =>
          i.specifications.some(
            (j) => j.specificationValue === parsedQueries.brand
          )
        )
      );
    parsedQueries.color &&
      setFilteredProducts((prev) =>
        prev.filter((i) =>
          i.specifications.some(
            (j) => j.specificationValue === parsedQueries.color
          )
        )
      );
    parsedQueries.system &&
      setFilteredProducts((prev) =>
        prev.filter((i) =>
          i.specifications.some(
            (j) => j.specificationValue === parsedQueries.system
          )
        )
      );
    parsedQueries.cpu &&
      setFilteredProducts((prev) =>
        prev.filter((i) =>
          i.specifications.some(
            (j) => j.specificationValue === parsedQueries.cpu
          )
        )
      );
    parsedQueries.gpu &&
      setFilteredProducts((prev) =>
        prev.filter((i) =>
          i.specifications.some(
            (j) => j.specificationValue === parsedQueries.gpu
          )
        )
      );
    parsedQueries.lowestPrice &&
      setFilteredProducts((prev) =>
        prev.filter((i) => i.newPrice > parsedQueries.lowestPrice)
      );
    parsedQueries.highestPrice &&
      setFilteredProducts((prev) =>
        prev.filter((i) => i.newPrice < parsedQueries.highestPrice)
      );

    parsedQueries.category &&
      setFilteredProducts(
        products.filter((i) => i.categoryName === parsedQueries.category)
      );
  };

  return (
    <main id="product-list-page">
      <Jumbotron category={parsedQueries.category} s={parsedQueries.s} />
      <FilterMenu applyFilter={getProductsByFilter} />
      <ProductPreviewList products={filteredProducts} />
    </main>
  );
};

const mapState = (state) => ({
  products: state.productReducer.products,
});

const mapDispatch = (dispatch) => ({
  getProducts: bindActionCreators(getProducts, dispatch),
});

export default connect(mapState, mapDispatch)(ProductList);
