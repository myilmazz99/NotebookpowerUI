import React from "react";

const Tabs = () => {
  const handleTabs = (e) => {
    if (!e.target.className.includes("product-tabs")) {
      let tabs = document.querySelectorAll(".tab");

      const changeTabs = (data) => {
        document.querySelector(".tabs-data > .container").innerHTML = data;
        e.target.classList.add("tab-active");
      };

      for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].className.includes("tab-active")) {
          tabs[i].classList.remove("tab-active");
        }
      }

      if (e.target.className.includes("comment-tab")) {
        changeTabs("comments");
      } else if (e.target.className.includes("description-tab")) {
        changeTabs(`TX V-MAX 5 Fanlı Oyuncu Notebook Soğutucusu (TXACNBVMAX) TX V-Max
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
              notebook soğutucu benzersiz 310mm'lik genişliği...`);
      }
    }
  };

  return (
    <section className="tabs">
      <div
        className="product-tabs"
        onClick={(e) => {
          handleTabs(e);
        }}
      >
        <div className="description-tab tab tab-active">Açıklama</div>
        <div className="comment-tab tab">Yorumlar</div>
      </div>
      <div className="tabs-data">
        <div className="container">
          TX V-MAX 5 Fanlı Oyuncu Notebook Soğutucusu (TXACNBVMAX) TX V-Max
          Oyuncuların Yeni Gizli Silahı ! V-Max 5x Fanlı, 6x Yükseklik Ayarlı,
          2x Usb Hub'lı, 11" - 17" Desteği ve Analog Fan Kontrolcüsü ile Yeni
          Nesil Notebook Soğutucu TX V-Max Emirlerinizi Bekliyor! TX V-Max,
          dilediğinizde hücüma çıkan, dilediğinizde dizginlenebilir kırmızı fan
          ordusu ile dizüstü bilgisayarınız buz kesecek. Tam 5 adet 7cm'lik
          kırmızı LED fanlardan gelen soğuk fırtına Mesh ızgaralı alüminyum ön
          panelden geçerek bilgisayarınızı soğutur. Sahip olduğu analog fan
          kontrolcü ile fırtınayı dindirebilir dilerseniz de fırtınanın
          şiddetini arttırarak tam bir kasırgaya dönüştürebilirsiniz. Tam 6
          kademe yükseklik ayarı ve sünger destek sayesinde dizüstü
          bilgisayarınızı istediğiniz yükseklikte rahatça kullanabilirsiniz.
          Arka panelde yer alan tam 2x USB 2.0 portları ile USB port kaybetme
          derdiniz olmayacak. Bilgisayarınızı saatlerce performansından
          faydalanmanız için TX V-Max fan ordusu sizin için her daim hazır!
          11"-17" Tüm Laptoplar ile Tam Uyumluluk TX V-Max notebook soğutucu
          benzersiz 310mm'lik genişliği...
          {/* veya yorumlar. */}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
