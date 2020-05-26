import React from "react";
import CartSummary from "../Components/CartSummary";
import Tabs from "../Components/Tabs";

const Order = () => {
  const renderAddresses = () => (
    <>
      <h2>Adreslerim</h2>
      <div className="saved-addresses">
        <span>Kayıtlı adres bulunamadı.</span>
      </div>
    </>
  );

  const renderAddressForm = () => (
    <form className="address-form">
      <h2>Adres Ekle</h2>
      <input type="text" name="fullName" placeholder="Adınız ve Soyadınız" />
      <input type="text" name="tel" placeholder="Telefon numaranız" />
      <input type="email" name="email" placeholder="E-mail" />
      <input type="text" name="addressHeader" placeholder="Adres Başlığı" />
      <input type="text" name="city" placeholder="Şehir" />
      <input type="text" name="state" placeholder="Semt" />
      <textarea
        name="addressDetails"
        id=""
        cols="auto"
        rows="auto"
        placeholder="Adres detayları"
      ></textarea>
      <input type="submit" value="Kaydet" />
    </form>
  );

  return (
    <main id="order">
      <div className="order-wrapper">
        <div className="address">
          <Tabs
            tabName="address-tab"
            tabs={[
              {
                Adreslerim: renderAddresses(),
              },
              {
                "Adres Ekle": renderAddressForm(),
              },
            ]}
          />
        </div>

        <div className="credit-card">
          <h2>Kart Bilgileri</h2>
          <form className="credit-card-details">
            <input type="text" name="cardNumber" placeholder="Kart Numarası" />
            <input
              type="text"
              name="cardName"
              placeholder="Kart üzerindeki isim"
            />
            <input
              type="text"
              name="securityNumber"
              placeholder="Güvenlik Kodu"
            />
            <input
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
