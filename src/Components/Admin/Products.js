import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Products = () => {
  return (
    <>
      <h1>Ürünler</h1>
      <section className="table-actions">
        <Link to="/admin/products/add" className="add-btn">
          Yeni Ürün Ekle
        </Link>
      </section>
      <table>
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
              <button className="table-btn delete-btn">Sil</button>
              <Link to="/admin/product/108" className="table-btn update-btn">
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
              <button className="table-btn delete-btn">Sil</button>
              <Link to="/admin/product/108" className="table-btn update-btn">
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
              <button className="table-btn delete-btn">Sil</button>
              <Link to="/admin/product/108" className="table-btn update-btn">
                Güncelle
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Products;
