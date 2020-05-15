import React from "react";

const Mailing = () => {
  return (
    <div className="mailing">
      <div className="container">
        <h2>
          Yeni ürünlerde veya <br /> indirimlerde size haber verelim!
        </h2>
        <form>
          <input type="text" placeholder="E-mail" />
          <input type="submit" value="Gönder" />
        </form>
      </div>
    </div>
  );
};

export default Mailing;
