import React from "react";
import Contact from "./Contact";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer>
      <section className="contact-ways">
        <ContactForm />
        <Contact />
      </section>

      <section className="copyright">
        © 2019 Tüm hakları saklıdır. notebookpower.com <br />
        Web tasarım by myyilmaz.com
      </section>
    </footer>
  );
};

export default Footer;
