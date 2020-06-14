import React from "react";
import { Modal, toggleModal } from "./Utilities/Modal";
import Tabs from "./Tabs";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login, register } from "../Redux/Actions/userActions";
import LoginForm from "./User/LoginForm";
import RegisterForm from "./User/RegisterForm";

const AccountModal = ({ registerAction, loginAction }) => {
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

const mapDispatchToProps = (dispatch) => ({
  loginAction: bindActionCreators(login, dispatch),
  registerAction: bindActionCreators(register, dispatch),
});

export default connect(null, mapDispatchToProps)(AccountModal);
