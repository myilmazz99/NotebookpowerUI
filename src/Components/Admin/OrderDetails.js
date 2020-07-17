import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useParams } from "react-router-dom";
import numberFormat from "../Tools/numberFormat";
import { getOrderById, confirmOrder } from "../../Redux/Actions/orderActions";
import displayOrderStatus from "../Tools/displayOrderStatus";

const OrderDetails = ({ getOrder, orders, confirmOrder }) => {
  const [order, setOrder] = useState(undefined);
  let { id } = useParams();

  useEffect(() => {
    if (!orders.find((i) => i.id === Number(id))) {
      getOrder(id);
    } else {
      setOrder(orders.find((i) => i.id === Number(id)));
    }
  }, [orders]);

  const handleClick = () => {
    confirmOrder(id);
  };

  return (
    <>
      {order && (
        <div id="admin-order-details">
          <h2 className="mb-5">Sipariş Detayları</h2>
          <dl className="row">
            <dt className="col-3">Sipariş Tarihi</dt>
            <dd className="col-9 border rounded">{order.shortDate}</dd>

            <dt className="col-3">Sipariş Durumu</dt>
            <dd className="col-9 border rounded">
              {displayOrderStatus(order.status)}
            </dd>

            <dt className="col-3">Sipariş Veren</dt>
            <dd className="col-9 border rounded">{order.fullName}</dd>

            <dt className="col-3">Sipariş Adresi</dt>
            <dd className="col-9 border rounded">{order.addressDescription}</dd>

            <dt className="col-3">Sipariş Tutarı</dt>
            <dd className="col-9 border rounded">
              {order.totalPrice} <FontAwesomeIcon icon="lira-sign" />
            </dd>

            <dt className="col-3">Satın Alınan Ürünler</dt>
            <dd className="col-9 border rounded">
              {order.orderItems.map((i) => (
                <dl className="row">
                  <dt className="col-3">Ürün Adı</dt>
                  <dd className="col-9 border rounded">{i.productName}</dd>

                  <dt className="col-3">Ürün Adedi</dt>
                  <dd className="col-9 border rounded">{i.productQuantity}</dd>

                  <dt className="col-3">Toplam Tutar</dt>
                  <dd className="col-9 border rounded">
                    {numberFormat(i.productQuantity * i.productPrice)}{" "}
                    <FontAwesomeIcon icon="lira-sign" />
                  </dd>
                </dl>
              ))}
            </dd>
          </dl>
          <button className="btn btn-primary w-100" onClick={handleClick}>
            Siparişi Onayla
          </button>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  orders: state.orderReducer.orders,
});

const mapDispatchToProps = (dispatch) => ({
  getOrder: bindActionCreators(getOrderById, dispatch),
  confirmOrder: bindActionCreators(confirmOrder, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
