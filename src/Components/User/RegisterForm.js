import React, { useEffect } from "react";
import Input from "../Utilities/Input";
import useForm from "../Utilities/useForm";
import { registerValidation } from "../Utilities/ValidationRules/AccountValidation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { register } from "../../Redux/Actions/userActions";
import lowerCaseFirstChar from "../Tools/lowerCaseFirstChar";
import { useHistory } from "react-router-dom";

const RegisterForm = ({ register, authError, validationErrors }) => {
  let history = useHistory();
  const { handleChange, handleSubmit, values, errors, updateErrors } = useForm(
    registerUser,
    registerValidation
  );

  useEffect(() => {
    if (Object.keys(values).length > 0) updateErrors({ authError });
  }, [authError]);

  useEffect(() => {
    if (validationErrors.length > 0) {
      let newErr = {};
      validationErrors.forEach((i) => {
        let propName = lowerCaseFirstChar(i.PropertyName);
        newErr[propName] = i.ErrorMessage;
      });
      updateErrors(newErr);
    }
  }, [validationErrors]);

  function registerUser() {
    register(values, history);
  }

  return (
    <form className="signUp-form" onSubmit={handleSubmit}>
      <h4>Üye Ol</h4>
      {errors.authError && (
        <div style={{ color: "red" }}>** {errors.authError}</div>
      )}
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

const mapStateToProps = (state) => ({
  authError: state.userReducer.authError,
  validationErrors: state.userReducer.validationErrors,
});

const mapDispatchToProps = (dispatch) => ({
  register: bindActionCreators(register, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
