import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { getPastOrders } from "../../Redux/Actions/userActions";
import { connect } from "react-redux";

const OrderHistory = ({
  userState: { userCredentials, orders },
  getPastOrders,
}) => {
  useEffect(() => {
    if (orders.length === 0 && userCredentials.userId)
      getPastOrders(userCredentials.userId);
  }, [userCredentials.userId]);

  return (
    <section className="order-history">
      <h1>Siparişlerim</h1>
      <ul>
        {orders && orders.length !== 0 ? (
          orders.map((i) => (
            <li className="list-item">
              <ul>
                <li className="inner-list-item">
                  <figure>
                    <img src="https://via.placeholder.com/200x200" alt="" />
                  </figure>
                  <div className="product-details">
                    <Link to="/product/1">
                      <h2>Ürün Adı</h2>
                      <dl>
                        <dt>Adet:</dt>
                        <dd>2</dd>
                        <dt>Fiyat:</dt>
                        <dd>
                          499 <FontAwesomeIcon icon="lira-sign" />
                        </dd>
                      </dl>
                    </Link>
                  </div>
                </li>
                <li className="inner-list-item">
                  <figure>
                    <img src="https://via.placeholder.com/200x200" alt="" />
                  </figure>
                  <div className="product-details">
                    <Link to="/product/1">
                      <h2>Ürün Adı</h2>
                      <dl>
                        <dt>Adet:</dt>
                        <dd>2</dd>
                        <dt>Fiyat:</dt>
                        <dd>
                          499 <FontAwesomeIcon icon="lira-sign" />
                        </dd>
                      </dl>
                    </Link>
                  </div>
                </li>
                <li className="inner-list-item">
                  <figure>
                    <img src="https://via.placeholder.com/200x200" alt="" />
                  </figure>
                  <div className="product-details">
                    <Link to="/product/1">
                      <h2>Ürün Adı</h2>
                      <dl>
                        <dt>Adet:</dt>
                        <dd>2</dd>
                        <dt>Fiyat:</dt>
                        <dd>
                          499 <FontAwesomeIcon icon="lira-sign" />
                        </dd>
                      </dl>
                    </Link>
                  </div>
                </li>
              </ul>
              <div className="order-sum">
                <dl>
                  <dt>Adres:</dt>
                  <dd>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt, voluptatem?
                  </dd>
                  <dt>Tarih:</dt>
                  <dd>20/12/2020</dd>
                  <dt>Durum:</dt>
                  <dd>Onay bekliyor</dd>
                  <dt>Tutar:</dt>
                  <dd>
                    1499 <FontAwesomeIcon icon="lira-sign" />
                  </dd>
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
  getPastOrders: bindActionCreators(getPastOrders, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);
