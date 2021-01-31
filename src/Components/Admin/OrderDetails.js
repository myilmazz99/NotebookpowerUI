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
        <>
          <h1 className="bg-primary shadow p-4 text-white">
            Sipariş Detayları
          </h1>
          <div className="p-4">
            <dl>
              <dt className="mb-1">Sipariş Tarihi</dt>
              <dd className="mb-1 ">{order.shortDate}</dd>

              <dt className="mb-1">Sipariş Durumu</dt>
              <dd className="mb-1 ">{displayOrderStatus(order.status)}</dd>

              <dt className="mb-1">Sipariş Veren</dt>
              <dd className="mb-1 ">{order.fullName}</dd>

              <dt className="mb-1">Sipariş Adresi</dt>
              <dd className="mb-1 ">{order.addressDescription}</dd>

              <dt className="mb-1">Sipariş Tutarı</dt>
              <dd className="mb-1 ">
                {order.totalPrice} <FontAwesomeIcon icon="lira-sign" />
              </dd>

              <dt className="mb-1">Satın Alınan Ürünler</dt>
              <dd className="mb-1 ">
                {order.orderItems.map((i, j) => (
                  <dl key={j}>
                    <dt className="mb-1">Ürün Adı</dt>
                    <dd className="mb-1 ">{i.productName}</dd>

                    <dt className="mb-1">Ürün Adedi</dt>
                    <dd className="mb-1 ">{i.productQuantity}</dd>

                    <dt className="mb-1">Toplam Tutar</dt>
                    <dd className="mb-1 ">
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
        </>
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
