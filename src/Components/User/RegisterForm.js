import React from "react";
import Input from "../Utilities/Input";
import useForm from "../Utilities/useForm";
import { registerValidation } from "../Utilities/ValidationRules/AccountValidation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { register } from "../../Redux/Actions/userActions";

const RegisterForm = ({ register }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    registerUser,
    registerValidation
  );

  function registerUser() {
    register(values);
  }

  return (
    <form className="signUp-form" onSubmit={handleSubmit}>
      <h4>Üye Ol</h4>
      <Input
        name="fullName"
        type="text"
        placeholder="Adınız ve Soyadınız"
        handleChange={handleChange}
        value={values.fullName}
        error={errors.fullName}
      />
      <Input
        name="email"
        type="text"
        placeholder="E Mailiniz"
        handleChange={handleChange}
        value={values.email}
        error={errors.email}
      />
      <Input
        name="password"
        type="password"
        placeholder="Şifre belirleyiniz"
        handleChange={handleChange}
        value={values.password}
        error={errors.password}
      />
      <Input
        name="repassword"
        type="password"
        placeholder="Şifre tekrar"
        handleChange={handleChange}
        value={values.repassword}
        error={errors.repassword}
      />
      <Input type="submit" value="Kayıt Ol" />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  register: bindActionCreators(register, dispatch),
});

export default connect(null, mapDispatchToProps)(RegisterForm);
