import React, { useEffect } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import payment from "../img/safe-payment.png";
import cargo from "../img/free-cargo.png";
import AddToCart from "../Components/AddToCart";
import Tabs from "../Components/Tabs";
import SimiliarProducts from "../Components/SimiliarProducts";
import ProductRating from "../Components/ProductRating";
import SpecificationList from "../Components/SpecificationList";

const Product = () => {
  useEffect(() => {
    tns({
      container: ".product-slider-wrapper",
      items: 1,
      controlsText: ["<", ">"],
      navContainer: "#customize-thumbnails",
      navAsThumbnails: true,
    });
  }, []);

  return (
    <main id="product-page">
      <div className="product-slider">
        <div className="product-slider-container">
          <div className="product-slider-wrapper">
            <div className="product-slider-img-container">
              <img src="https://via.placeholder.com/500x500" alt="" />
            </div>
            <div className="product-slider-img-container">
              <img src="https://via.placeholder.com/500x500" alt="" />
            </div>
            <div className="product-slider-img-container">
              <img src="https://via.placeholder.com/500x500" alt="" />
            </div>
          </div>
          <ul className="thumbnails" id="customize-thumbnails">
            <li>
              <img src="https://via.placeholder.com/500x500" alt="" />
            </li>
            <li>
              <img src="https://via.placeholder.com/500x500" alt="" />
            </li>
            <li>
              <img src="https://via.placeholder.com/500x500" alt="" />
            </li>
          </ul>
        </div>
      </div>

      <div className="product-details">
        <h1>
          <span>Libero Headphones</span> <FontAwesomeIcon icon="heart" />{" "}
        </h1>
        {10 > 5 ? <div className="low-stock-number">Son 5 ürün!</div> : ""}
        <div className="price-and-rating">
          <ProductRating />
          <div className="product-price">
            <span className="discount-amount">
              <span>{"%" + Math.floor(((499 - 399) * 100) / 499)}</span>
              <span>{"indirim"}</span>
            </span>
            <div className="prices">
              <div className="old-price">
                499 <FontAwesomeIcon icon="lira-sign" />
              </div>
              <div className="new-price">
                399 <FontAwesomeIcon icon="lira-sign" />
              </div>
            </div>
          </div>
        </div>

        <AddToCart />

        <div className="trust-imgs">
          <img src={cargo} alt="" />
          <img src={payment} alt="" />
        </div>
      </div>

      <Tabs
        tabName="product-tab"
        tabs={[
          {
            Açıklama: `TX V-MAX 5 Fanlı Oyuncu Notebook Soğutucusu (TXACNBVMAX) TX V-Max
              Oyuncuların Yeni Gizli Silahı ! V-Max 5x Fanlı, 6x Yükseklik Ayarlı,
              2x Usb Hub'lı, 11" - 17" Desteği ve Analog Fan Kontrolcüsü ile Yeni
              Nesil Notebook Soğutucu TX V-Max Emirlerinizi Bekliyor! TX V-Max,
              dilediğinizde hücüma çıkan, dilediğinizde dizginlenebilir kırmızı
              fan ordusu ile dizüstü bilgisayarınız buz kesecek. Tam 5 adet
              7cm'lik kırmızı LED fanlardan gelen soğuk fırtına Mesh ızgaralı
              alüminyum ön panelden geçerek bilgisayarınızı soğutur. Sahip olduğu
              analog fan kontrolcü ile fırtınayı dindirebilir dilerseniz de
              fırtınanın şiddetini arttırarak tam bir kasırgaya
              dönüştürebilirsiniz. Tam 6 kademe yükseklik ayarı ve sünger destek
              sayesinde dizüstü bilgisayarınızı istediğiniz yükseklikte rahatça
              kullanabilirsiniz. Arka panelde yer alan tam 2x USB 2.0 portları ile
              USB port kaybetme derdiniz olmayacak. Bilgisayarınızı saatlerce
              performansından faydalanmanız için TX V-Max fan ordusu sizin için
              her daim hazır! 11"-17" Tüm Laptoplar ile Tam Uyumluluk TX V-Max
              notebook soğutucu benzersiz 310mm'lik genişliği...`,
          },
          { Yorumlar: "Comments" },
        ]}
      />

      <SpecificationList />

      <SimiliarProducts />
    </main>
  );
};

export default Product;
