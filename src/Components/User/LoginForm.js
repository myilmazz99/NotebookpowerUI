import React, { useEffect } from "react";
import Input from "../Utilities/Input";
import useForm from "../Utilities/useForm";
import { loginValidation } from "../Utilities/ValidationRules/AccountValidation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../../Redux/Actions/userActions";

const LoginForm = ({ login, userState: { authError } }) => {
  const { handleChange, handleSubmit, values, errors, updateErrors } = useForm(
    loginUser,
    loginValidation
  );

  useEffect(() => {
    if (Object.keys(values).length > 0) updateErrors({ authError });
  }, [authError]);

  function loginUser() {
    login(values);
  }

  return (
    <form className="signUp-form" onSubmit={handleSubmit}>
      <h4>Giriş Yap</h4>
      {errors.authError && (
        <div style={{ color: "red" }}>** {errors.authError}</div>
      )}
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
      <Input type="submit" value="Giriş Yap" />
    </form>
  );
};

const mapStateToProps = (state) => ({
  userState: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  login: bindActionCreators(login, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
