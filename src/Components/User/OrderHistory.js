import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { getOrdersByUserId } from "../../Redux/Actions/userActions";
import { connect } from "react-redux";
import displayOrderStatus from "../Tools/displayOrderStatus";
import numberFormat from "../Tools/numberFormat";

const OrderHistory = ({
  userState: { userCredentials, orders },
  getOrdersByUserId,
}) => {
  useEffect(() => {
    if (orders.length === 0 && userCredentials.userId)
      getOrdersByUserId(userCredentials.userId);
  }, [userCredentials.userId]);

  return (
    <section className="order-history">
      <h1>Siparişlerim</h1>
      <ul>
        {orders && orders.length !== 0 ? (
          orders.map((i) => (
            <li className="list-item">
              <ul>
                {i.orderItems.map((j) => (
                  <li className="inner-list-item">
                    <figure>
                      <img src={j.productImages[0].imageUrl} alt="" />
                    </figure>
                    <div className="product-details">
                      <h4>{j.productName}</h4>
                      <dl>
                        <dt>Adet:</dt>
                        <dd>{j.productQuantity}</dd>
                        <dt>Fiyat:</dt>
                        <dd>
                          {numberFormat(j.productQuantity * j.productPrice)}{" "}
                        </dd>
                      </dl>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="order-sum">
                <dl>
                  <dt>Adres:</dt>
                  <dd>
                    {i.city + " - " + i.state + " - " + i.addressDescription}
                  </dd>
                  <dt>Tarih:</dt>
                  <dd>{i.shortDate}</dd>
                  <dt>Durum:</dt>
                  <dd>{displayOrderStatus(i.status)}</dd>
                  <dt>Tutar:</dt>
                  <dd>{numberFormat(i.totalPrice)}</dd>
                </dl>
              </div>
            </li>
          ))
        ) : (
          <li>
            Henüz hiç siparişiniz yok.{" "}
            <Link to="/products" className="link-default">
              Buraya tıklayarak ürünlerimizi inceleyebilirsiniz.
            </Link>
          </li>
        )}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  userState: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getOrdersByUserId: bindActionCreators(getOrdersByUserId, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);
