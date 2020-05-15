import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../img/logo.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="brand-logo">
        <img src={logo} alt="notebook power logo" />
      </div>

      <div className="contact-detail-wrapper">
        <div className="contact-detail">
          <FontAwesomeIcon icon="phone" />
          <span>+90 531 283 61 99</span>
        </div>
        <div className="contact-detail">
          <FontAwesomeIcon icon={["fab", "whatsapp"]} />
          <span>+90 531 283 61 99</span>
        </div>
        <div className="contact-detail">
          <FontAwesomeIcon icon="envelope" />
          <span>info@notebookpower.com</span>
        </div>
        <div className="social-media">
          <FontAwesomeIcon icon={["fab", "instagram"]} />
          <FontAwesomeIcon icon={["fab", "twitter"]} />
          <FontAwesomeIcon icon={["fab", "facebook"]} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
