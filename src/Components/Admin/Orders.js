import React, { useEffect } from "react";
//Router
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getOrders } from "../../Redux/Actions/orderActions";
import displayOrderStatus from "../Tools/displayOrderStatus";

const Orders = ({ orders, getOrders }) => {
  useEffect(() => {
    getOrders();
  }, []);

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
          {orders &&
            orders
              .filter((i) => i.status !== 0)
              .map((i) => (
                <tr>
                  <td>{i.id}</td>
                  <td>{i.fullName}</td>
                  <td>
                    {i.totalPrice} <FontAwesomeIcon icon="lira-sign" />
                  </td>
                  <td>{i.shortDate}</td>
                  <td>{displayOrderStatus(i.status)}</td>
                  <td>
                    <button className="btn btn-danger btn-sm w-100 mb-1">
                      Sil
                    </button>
                    <Link
                      to={`/admin/orders/${i.id}`}
                      className="btn btn-warning btn-sm w-100"
                    >
                      Detaylar
                    </Link>
                  </td>
                </tr>
              ))}
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
          {orders &&
            orders
              .filter((i) => i.status === 0)
              .map((i) => (
                <tr>
                  <td>{i.id}</td>
                  <td>{i.fullName}</td>
                  <td>
                    {i.totalPrice} <FontAwesomeIcon icon="lira-sign" />
                  </td>
                  <td>{i.shortDate}</td>
                  <td>{displayOrderStatus(i.status)}</td>
                  <td>
                    <button className="btn btn-danger btn-sm w-100 mb-1">
                      Sil
                    </button>
                    <Link
                      to={`/admin/orders/${i.id}`}
                      className="btn btn-warning btn-sm w-100"
                    >
                      Detaylar
                    </Link>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  orders: state.orderReducer.orders,
});

const mapDispatchToProps = (dispatch) => ({
  getOrders: bindActionCreators(getOrders, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
