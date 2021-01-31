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
      <div className="bg-primary text-white shadow p-4">
        <h1>Siparişler</h1>
      </div>
      <div className="p-4">
        <div className="mb-2 mp-info">
          <div className="mp-info-body">Aktif Siparişler</div>
        </div>
        <div className="table-responsive mb-4">
          <table className="table">
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
                  .map((i, j) => (
                    <tr key={j}>
                      <td>{i.id}</td>
                      <td>{i.fullName}</td>
                      <td>
                        {i.totalPrice} <FontAwesomeIcon icon="lira-sign" />
                      </td>
                      <td>{i.shortDate}</td>
                      <td>{displayOrderStatus(i.status)}</td>
                      <td>
                        <button className="btn btn-danger small mr-1">
                          Sil
                        </button>
                        <Link
                          to={`/admin/orders/${i.id}`}
                          className="btn btn-warning small"
                        >
                          Detaylar
                        </Link>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
        <div className="mb-2 mp-info success">
          <div className="mp-info-body">Tamamlanan Siparişler</div>
        </div>
        <div className="table-responsive">
          <table className="table mb-4">
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
                        <button className="btn btn-danger small mr-1">
                          Sil
                        </button>
                        <Link
                          to={`/admin/orders/${i.id}`}
                          className="btn btn-warning small"
                        >
                          Detaylar
                        </Link>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
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
