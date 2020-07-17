import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";

const ResultAlert = ({ resultMessage, isError, isSuccess }) => {
  let alert = useRef(undefined);

  useEffect(() => {
    if (isError)
      alert.current.className = "alert-wrapper alert-error alert-active";
    if (!isError) alert.current.className = "alert-wrapper";
  }, [isError]);

  useEffect(() => {
    if (isSuccess)
      alert.current.className = "alert-wrapper alert-success alert-active";
    if (!isSuccess) alert.current.className = "alert-wrapper";
  }, [isSuccess]);

  return (
    <section className="alert-wrapper" ref={alert}>
      <p className="alert">
        {resultMessage}
        {resultMessage.length > 1 ? (
          <span className="alert-timer"></span>
        ) : null}
      </p>
    </section>
  );
};

const mapStateToProps = (state) => ({
  resultMessage: state.uiReducer.resultMessage,
  isError: state.uiReducer.isError,
  isSuccess: state.uiReducer.isSuccess,
});

export default connect(mapStateToProps)(ResultAlert);
