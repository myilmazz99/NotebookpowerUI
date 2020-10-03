import React, { useEffect } from "react";
import CartSummary from "../Components/Cart/CartSummary";
import AddressForm from "../Components/Order/AddressForm";
import Input from "../Components/Utilities/Input";
import Cards from "react-credit-cards";
import useForm from "../Components/Utilities/useForm";
import OrderValidation from "../Components/Utilities/ValidationRules/OrderValidation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fulfillOrder } from "../Redux/Actions/orderActions";
import lowerCaseFirstChar from "../Components/Tools/lowerCaseFirstChar";
import { useHistory } from "react-router-dom";

const Order = ({
  cartReducer: { cartId, cartItems },
  authenticated,
  userCredentials: { userId, email },
  fulfillOrder,
  validationErrors,
  paymentError,
}) => {
  const history = useHistory();
  let { handleChange, handleSubmit, values, errors, updateErrors } = useForm(
    checkout,
    OrderValidation
  );

  useEffect(() => {
    if (authenticated === false) history.push("/404");
    if (cartItems.length === 0) history.push("/cart");
  }, []);

  useEffect(() => {
    document.querySelector(".rccs__expiry__valid").innerText =
      "Son kullanma tarihi";
  }, []);

  useEffect(() => {
    if (validationErrors.length > 0) {
      let errorsToAdd = {};
      validationErrors.forEach((i) => {
        let propName = lowerCaseFirstChar(i.PropertyName);
        errorsToAdd[propName] = i.ErrorMessage;
      });

      updateErrors(errorsToAdd);
    }
  }, [validationErrors]);

  function checkout(values) {
    values.cartItems = cartItems;
    values.userId = userId;
    values.email = email;

    fulfillOrder(values, cartId, history);
  }

  const getTotalPrice = (price) => {
    values.totalPrice = Number(price);
  };

  return (
    <main id="order">
      <form className="order-wrapper" onSubmit={handleSubmit}>
        <AddressForm
          handleChange={handleChange}
          values={values}
          errors={errors}
        />
        <section className="credit-card">
          <h2>Kart Bilgileri</h2>
          {paymentError && (
            <span style={{ color: "red" }}>** {paymentError}</span>
          )}
          <section className="credit-card-details">
            <section className="card-input-wrapper">
              <Input
                type="text"
                name="cardNumber"
                placeholder="Kart Numarası"
                handleChange={handleChange}
                value={values.cardNumber || ""}
                error={errors.cardNumber && errors.cardNumber}
              />
              <Input
                type="text"
                name="cardHolderName"
                placeholder="Kart üzerindeki isim"
                handleChange={handleChange}
                value={values.cardHolderName || ""}
                error={errors.cardHolderName && errors.cardHolderName}
              />
              <Input
                type="text"
                name="securityNumber"
                placeholder="Güvenlik Kodu"
                handleChange={handleChange}
                value={values.securityNumber || ""}
                error={errors.securityNumber && errors.securityNumber}
              />
              <div className="input-group">
                <label>Son kullanma tarihi</label>
                <Input
                  type="text"
                  name="expireMonth"
                  placeholder="Ay"
                  handleChange={handleChange}
                  value={values.expireMonth || ""}
                  error={errors.expireMonth && errors.expireMonth}
                />
                <Input
                  type="text"
                  name="expireYear"
                  placeholder="Yıl"
                  handleChange={handleChange}
                  value={values.expireYear || ""}
                  error={errors.expireYear && errors.expireYear}
                />
              </div>
            </section>
            <Cards
              cvc={values.securityNumber || ""}
              expiry={
                values.expireYear && values.expireMonth
                  ? values.expireMonth + values.expireYear
                  : ""
              }
              name={values.cardHolderName || ""}
              number={values.cardNumber || ""}
              placeholders={{ name: "Kart Sahibi" }}
            />
          </section>
        </section>
        <CartSummary
          buttonText="Ödeme Yap"
          buttonBehavior="FulfillOrder"
          getTotalPrice={getTotalPrice}
        />
      </form>
    </main>
  );
};

const mapStateToProps = (state) => ({
  cartReducer: state.cartReducer,
  userCredentials: state.userReducer.userCredentials,
  authenticated: state.userReducer.authenticated,
  validationErrors: state.orderReducer.errors,
  paymentError: state.orderReducer.paymentError,
});

const mapDispatchToProps = (dispatch) => ({
  fulfillOrder: bindActionCreators(fulfillOrder, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
