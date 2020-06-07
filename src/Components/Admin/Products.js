import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Products = () => {
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
          <tr>
            <td>108</td>
            <td>
              <img src="https://via.placeholder.com/100x100" alt="" />
            </td>
            <td>
              {"Libero Headphones".length > 20
                ? "Libero Headphones".slice(0, 20) + "..."
                : "Libero Headphones"}
            </td>
            <td>
              499 <FontAwesomeIcon icon="lira-sign" />
            </td>
            <td>10</td>
            <td>Oyuncu</td>
            <td>
              <button className="btn btn-danger btn-sm w-100 mb-1">Sil</button>
              <Link
                to="/admin/products/108"
                className="btn btn-warning btn-sm w-100"
              >
                Güncelle
              </Link>
            </td>
          </tr>
          <tr>
            <td>108</td>
            <td>
              <img src="https://via.placeholder.com/100x100" alt="" />
            </td>
            <td>
              {"Libero Headphones".length > 20
                ? "Libero Headphones".slice(0, 20) + "..."
                : "Libero Headphones"}
            </td>
            <td>
              499 <FontAwesomeIcon icon="lira-sign" />
            </td>
            <td>10</td>
            <td>Oyuncu</td>
            <td>
              <button className="btn btn-danger btn-sm w-100 mb-1">Sil</button>
              <Link
                to="/admin/product/108"
                className="btn btn-warning btn-sm w-100"
              >
                Güncelle
              </Link>
            </td>
          </tr>
          <tr>
            <td>108</td>
            <td>
              <img src="https://via.placeholder.com/100x100" alt="" />
            </td>
            <td>
              {"Libero Headphones".length > 20
                ? "Libero Headphones".slice(0, 20) + "..."
                : "Libero Headphones"}
            </td>
            <td>
              499 <FontAwesomeIcon icon="lira-sign" />
            </td>
            <td>10</td>
            <td>Oyuncu</td>
            <td>
              <button className="btn btn-danger btn-sm w-100 mb-1">Sil</button>
              <Link
                to="/admin/product/108"
                className="btn btn-warning btn-sm w-100"
              >
                Güncelle
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Products;
