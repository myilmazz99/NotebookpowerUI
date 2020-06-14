import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProducts } from "../../Redux/Actions/productActions";

const Products = ({ products, getProducts }) => {
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div id="admin-product-list">
      <h1>Ürünler</h1>
      <section className="table-actions mb-2">
        <Link to="/admin/products/add" className="btn btn-primary">
          Yeni Ürün Ekle
        </Link>
      </section>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Resim</th>
            <th>Ürün İsmi</th>
            <th>Fiyat</th>
            <th>Stok</th>
            <th>Kategori</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products && products.length !== 0 ? (
            products.map((i) => (
              <tr key={i.id}>
                <td>108</td>
                <td>
                  <img src={i.productImages[0].imageUrl} alt="" />
                </td>
                <td>
                  {i.productName.length > 20
                    ? i.productName.slice(0, 20) + "..."
                    : i.productName}
                </td>
                <td>
                  {i.newPrice} <FontAwesomeIcon icon="lira-sign" />
                </td>
                <td>{i.stock}</td>
                <td>{i.categoryName}</td>
                <td>
                  <button className="btn btn-danger btn-sm w-100 mb-1">
                    Sil
                  </button>
                  <Link
                    to="/admin/products/108"
                    className="btn btn-warning btn-sm w-100"
                  >
                    Güncelle
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Henüz hiç ürün eklenmemiş.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.productReducer.products,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: bindActionCreators(getProducts, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
