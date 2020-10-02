import React from "react";
import { Modal, toggleModal } from "../Utilities/Modal";
import Tabs from "../Utilities/Tabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AccountModal = () => {
  return (
    <Modal
      onClose={toggleModal}
      modalName="account-modal"
      data={
        <Tabs
          tabName="account-tab"
          tabs={[
            { "Üye Ol": <RegisterForm /> },
            { "Giriş Yap": <LoginForm /> },
          ]}
        />
      }
    />
  );
};

export default AccountModal;
