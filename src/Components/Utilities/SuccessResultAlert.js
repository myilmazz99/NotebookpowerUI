import React from "react";
import { connect } from "react-redux";

const SuccessResultAlert = ({ resultMessage }) => {
  return <p className="alert alert-success">{resultMessage}</p>;
};

const mapStateToProps = (state) => ({
  resultMessage: state.uiReducer.resultMessage,
});

export default connect(mapStateToProps)(SuccessResultAlert);
