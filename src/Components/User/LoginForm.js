import React from "react";
import Input from "../Utilities/Input";
import useForm from "../Utilities/useForm";
import { loginValidation } from "../Utilities/ValidationRules/AccountValidation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../../Redux/Actions/userActions";

const LoginForm = ({ login }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    loginUser,
    loginValidation
  );

  function loginUser() {
    login(values);
  }

  return (
    <form className="signUp-form" onSubmit={handleSubmit}>
      <h4>Giriş Yap</h4>
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
      <Input type="submit" value="Kayıt Ol" />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: bindActionCreators(login, dispatch),
});

export default connect(null, mapDispatchToProps)(LoginForm);
