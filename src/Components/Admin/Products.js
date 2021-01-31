import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProducts, deleteProduct } from "../../Redux/Actions/productActions";

const Products = ({ products, getProducts, deleteProduct }) => {
  useEffect(() => {
    getProducts();
  }, []);

  function deletePr(e, id) {
    e.preventDefault();
    deleteProduct(id);
  }

  return (
    <div id="admin-product-list">
      <section className="bg-primary p-4">
        <h1 className="text-white">Ürünler</h1>
        <div className="d-flex j-end">
          <Link to="/admin/products/add" className="btn btn-white">
            Yeni Ürün Ekle
          </Link>
        </div>
      </section>
      <div className="table-responsive m-4">
        <table className="table">
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
                  <td>{i.id}</td>
                  <td>
                    <img
                      src={
                        process.env.REACT_APP_API_URL +
                        i.productImages[0].imageUrl
                      }
                      alt=""
                      width="60"
                    />
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
                    <button
                      className="btn btn-danger small mr-1"
                      onClick={(e) => deletePr(e, i.id)}
                    >
                      Sil
                    </button>
                    <Link
                      to={`/admin/products/${i.id}`}
                      className="btn btn-warning small"
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.productReducer.products,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: bindActionCreators(getProducts, dispatch),
  deleteProduct: bindActionCreators(deleteProduct, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
