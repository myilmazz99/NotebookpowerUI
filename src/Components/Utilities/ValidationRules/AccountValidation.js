export const registerValidation = (values) => {
  let errors = {};

  if (!values.fullName) errors.fullName = "İsim alanını doldurmak zorunludur";
  if (!values.email) errors.email = "Email alanını doldurmak zorunludur";
  if (!values.password) errors.password = "Şifre alanını doldurmak zorunludur";
  if (values.repassword !== values.password)
    errors.repassword = "Şifreleriniz uyuşmuyor.";

  return errors;
};

export const loginValidation = (values) => {
  let errors = {};

  if (!values.email) errors.email = "Email alanını doldurmak zorunludur";
  if (!values.password) errors.password = "Şifre alanını doldurmak zorunludur";

  return errors;
};
