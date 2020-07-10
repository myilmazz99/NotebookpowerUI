import React from "react";
import { connect } from "react-redux";

const ErrorResultAlert = ({ resultMessage }) => {
  return <p className="alert alert-error">{resultMessage}</p>;
};

const mapStateToProps = (state) => ({
  resultMessage: state.uiReducer.resultMessage,
});

export default connect(mapStateToProps)(ErrorResultAlert);
