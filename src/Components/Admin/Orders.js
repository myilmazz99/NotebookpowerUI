import React from "react";
//Router
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Orders = () => {
  return (
    <div id="admin-order-list">
      <h1>Siparişler</h1>
      <h4 className="my-4">Aktif Siparişler</h4>
      <table className="table table-striped table-bordered mb-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Kullanıcı Adı</th>
            <th>Tutar</th>
            <th>Tarih</th>
            <th>Durum</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>108</td>
            <td>Mustafa Yılmaz</td>
            <td>
              499 <FontAwesomeIcon icon="lira-sign" />
            </td>
            <td>04/12/2011</td>
            <td>Onay Bekliyor</td>
            <td>
              <button className="btn btn-danger btn-sm w-100 mb-1">Sil</button>
              <Link
                to="/admin/orders/108"
                className="btn btn-warning btn-sm w-100"
              >
                Detaylar
              </Link>
            </td>
          </tr>
          <tr>
            <td>108</td>
            <td>Mustafa Yılmaz</td>
            <td>
              499 <FontAwesomeIcon icon="lira-sign" />
            </td>
            <td>04/12/2011</td>
            <td>Onay Bekliyor</td>
            <td>
              <button className="btn btn-danger btn-sm w-100 mb-1">Sil</button>
              <Link
                to="/admin/orders/108"
                className="btn btn-warning btn-sm w-100"
              >
                Detaylar
              </Link>
            </td>
          </tr>
        </tbody>
      </table>

      <h4 className="mb-4">Tamamlanan Siparişler</h4>
      <table className="table table-striped table-bordered mb-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Kullanıcı Adı</th>
            <th>Tutar</th>
            <th>Tarih</th>
            <th>Durum</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>108</td>
            <td>Mustafa Yılmaz</td>
            <td>
              499 <FontAwesomeIcon icon="lira-sign" />
            </td>
            <td>04/12/2011</td>
            <td>Onay Bekliyor</td>
            <td>
              <button className="btn btn-danger btn-sm w-100 mb-1">Sil</button>
              <Link
                to="/admin/orders/108"
                className="btn btn-warning btn-sm w-100"
              >
                Detaylar
              </Link>
            </td>
          </tr>
          <tr>
            <td>108</td>
            <td>Mustafa Yılmaz</td>
            <td>
              499 <FontAwesomeIcon icon="lira-sign" />
            </td>
            <td>04/12/2011</td>
            <td>Onay Bekliyor</td>
            <td>
              <button className="btn btn-danger btn-sm w-100 mb-1">Sil</button>
              <Link
                to="/admin/orders/108"
                className="btn btn-warning btn-sm w-100"
              >
                Detaylar
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
