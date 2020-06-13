import React from "react";
import CartSummary from "../Components/CartSummary";
import AddressForm from "../Components/Order/AddressForm";
import Input from "../Components/Utilities/Input";

const Order = () => {
  return (
    <main id="order">
      <div className="order-wrapper">
        <AddressForm />
        <div className="credit-card">
          <h2>Kart Bilgileri</h2>
          <form className="credit-card-details">
            <Input type="text" name="cardNumber" placeholder="Kart Numarası" />
            <Input
              type="text"
              name="cardName"
              placeholder="Kart üzerindeki isim"
            />
            <Input
              type="text"
              name="securityNumber"
              placeholder="Güvenlik Kodu"
            />
            <Input
              type="date"
              name="expiration"
              placeholder="Son kullanma tarihi"
            />
          </form>
        </div>
        <CartSummary buttonText="Ödeme Yap" />
      </div>
    </main>
  );
};

export default Order;
