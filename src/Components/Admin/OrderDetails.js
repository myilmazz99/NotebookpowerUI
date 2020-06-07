import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OrderDetails = () => {
  return (
    <div id="order-details">
      <h2 className="mb-5">Sipariş Detayları</h2>
      <dl className="row">
        <dt className="col-3">Sipariş Tarihi</dt>
        <dd className="col-9 border rounded">12/11/2011</dd>

        <dt className="col-3">Sipariş Durumu</dt>
        <dd className="col-9 border rounded">Onay Bekliyor</dd>

        <dt className="col-3">Sipariş Veren</dt>
        <dd className="col-9 border rounded">Mustafa Yılmaz</dd>

        <dt className="col-3">Sipariş Adresi</dt>
        <dd className="col-9 border rounded">
          Vali Hüseyin Öğütcen Caddesi No 23 Daire 3 Korutürk Mahallesi
          Balçova/İZMİR
        </dd>

        <dt className="col-3">Sipariş Tutarı</dt>
        <dd className="col-9 border rounded">
          899 <FontAwesomeIcon icon="lira-sign" />
        </dd>

        <dt className="col-3">Satın Alınan Ürünler</dt>
        <dd className="col-9 border rounded">
          <dl className="row">
            <dt className="col-3">Ürün Adı</dt>
            <dd className="col-9 border rounded">
              Bilmem ne notebook GTX 1050 TI
            </dd>

            <dt className="col-3">Ürün Adedi</dt>
            <dd className="col-9 border rounded">1</dd>

            <dt className="col-3">Toplam Tutar</dt>
            <dd className="col-9 border rounded">
              499 <FontAwesomeIcon icon="lira-sign" />
            </dd>
          </dl>
          <dl className="row">
            <dt className="col-3">Ürün Adı</dt>
            <dd className="col-9 border rounded">
              Bilmem ne notebook GTX 1050 TI
            </dd>

            <dt className="col-3">Ürün Adedi</dt>
            <dd className="col-9 border rounded">1</dd>

            <dt className="col-3">Toplam Tutar</dt>
            <dd className="col-9 border rounded">
              499 <FontAwesomeIcon icon="lira-sign" />
            </dd>
          </dl>
          <dl className="row">
            <dt className="col-3">Ürün Adı</dt>
            <dd className="col-9 border rounded">
              Bilmem ne notebook GTX 1050 TI
            </dd>

            <dt className="col-3">Ürün Adedi</dt>
            <dd className="col-9 border rounded">1</dd>

            <dt className="col-3">Toplam Tutar</dt>
            <dd className="col-9 border rounded">
              499 <FontAwesomeIcon icon="lira-sign" />
            </dd>
          </dl>
        </dd>
      </dl>
      <button className="btn btn-primary w-100">Siparişi Onayla</button>
    </div>
  );
};

export default OrderDetails;
