import React from "react";
import { Modal, toggleModal } from "./Utilities/Modal";
import Tabs from "./Tabs";
import Input from "./Utilities/Input";
import useForm from "./Utilities/useForm";
import AccountValidation from "./Utilities/ValidationRules/AccountValidation";

const AccountModal = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    "",
    AccountValidation
  );

  const renderSignUp = () => {
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

  const renderSignIn = () => {
    return (
      <form className="signIn-form" onSubmit={handleSubmit}>
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
          placeholder="Şifreniz"
          handleChange={handleChange}
          value={values.password}
          error={errors.password}
        />
        <Input type="submit" value="Giriş Yap" />
      </form>
    );
  };

  return (
    <Modal
      onClose={toggleModal}
      modalName="account-modal"
      data={
        <Tabs
          tabName="account-tab"
          tabs={[{ "Üye Ol": renderSignUp() }, { "Giriş Yap": renderSignIn() }]}
        />
      }
    />
  );
};

export default AccountModal;
