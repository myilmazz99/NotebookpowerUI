import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Modal, toggleModal, closeModal } from "../Utilities/Modal";
import Tabs from "../Utilities/Tabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AccountModal = ({
  userState: {
    authenticated,
    userCredentials: { userId },
  },
}) => {
  useEffect(() => {
    if (authenticated && userId.length !== 0) closeModal("account-modal");
  }, [authenticated, userId]);

  return (
    <Modal
      onClose={toggleModal}
      modalName="account-modal"
      data={
        <Tabs
          tabName="account-tab"
          tabs={[
            {
              "Üye Ol": <RegisterForm />,
            },
            {
              "Giriş Yap": <LoginForm />,
            },
          ]}
        />
      }
    />
  );
};

const mapStateToProps = (state) => ({
  userState: state.userReducer,
});

export default connect(mapStateToProps)(AccountModal);
