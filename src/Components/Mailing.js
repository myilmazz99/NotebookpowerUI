import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addEmail } from "../Redux/Actions/adminActions";

const Mailing = ({ addEmail }) => {
  const [email, setEmail] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.email) addEmail(email);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setEmail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="mailing">
      <h2>
        Yeni ürünlerde veya <br /> indirimlerde size haber verelim!
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
        />
        <input type="submit" value="Gönder" />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addEmail: bindActionCreators(addEmail, dispatch),
});

export default connect(null, mapDispatchToProps)(Mailing);
