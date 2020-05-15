import React from "react";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <form className="contact-form">
          <textarea
            cols="auto"
            rows="auto"
            placeholder="Bize görüşünüzü bildirin..."
          ></textarea>
          <input type="text" placeholder="Adınız ve Soyadınız" />
          <input type="text" placeholder="E-mail" />
          <input type="submit" value="Gönder" />
        </form>
        <Contact />
      </div>

      <div className="copyright">
        © 2019 Tüm hakları saklıdır. notebookpower.com <br />
        Web tasarım by myyilmaz.com
      </div>
    </div>
  );
};

export default Footer;
