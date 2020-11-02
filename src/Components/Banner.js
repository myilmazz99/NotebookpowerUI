import React from "react";

const Banner = () => {
  return (
    <section
      className="banner"
      style={{
        backgroundImage: "url(/notebookpowerui/banner.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="text-card">
        <h1>
          Hoşgeldiniz. İhtiyacınıza uygun ürünlerle, cömert fiyatlarla ve
          güvenilir alışveriş anlayışıyla karşınızdayız.
        </h1>
        <p>Notebook Power</p>
      </div>
    </section>
  );
};

export default Banner;